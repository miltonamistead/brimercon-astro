#!/usr/bin/env node
// End-to-end check of the lead endpoint (docs/qa-plan.md section 4).
//
// Needs a built site being served and the dev webhook running:
//   node scripts/dev-webhook.mjs &
//   LEAD_STORE=file LEAD_WEBHOOK_URL=http://127.0.0.1:8788/hook npm run serve &
//   node scripts/qa-form.mjs
//
// Verifies the things that actually lose leads: a valid submit reaching a real channel,
// a no-JavaScript submit redirecting to the confirmation, spam being dropped silently,
// validation rejecting incomplete requests, browsers getting HTML rather than raw JSON,
// and a lead never being reported as received when nothing accepted it.

import { readFile } from "node:fs/promises";

const BASE = process.env.BASE_URL || "http://127.0.0.1:4322";
const ENDPOINT = `${BASE}/api/lead/`;
const STORE = process.env.LEAD_STORE_PATH || ".data/leads.jsonl";
const WEBHOOK_LOG = process.env.DEV_WEBHOOK_PATH || ".data/webhook-received.jsonl";

const results = [];
const record = (name, pass, detail) => {
  results.push({ name, pass, detail });
  console.log(`  ${pass ? "PASS" : "FAIL"}  ${name}${detail ? `  (${detail})` : ""}`);
};

const valid = () => ({
  name: "QA Tester",
  phone: "530-555-0134",
  message: "No hot water since Tuesday, QA test submission.",
  town: "Truckee",
  source_path: "/services/water-heaters/",
  service_context: "water-heaters",
});

const post = (body, { json = true, headers = {} } = {}) =>
  fetch(ENDPOINT, {
    method: "POST",
    redirect: "manual",
    headers: {
      Accept: json ? "application/json" : "text/html",
      "Content-Type": json ? "application/json" : "application/x-www-form-urlencoded",
      Origin: BASE,
      ...headers,
    },
    body: json ? JSON.stringify(body) : new URLSearchParams(body).toString(),
  });

const countLines = async (path) => {
  try {
    return (await readFile(path, "utf8")).trim().split("\n").filter(Boolean).length;
  } catch {
    return 0;
  }
};

console.log(`qa-form: ${ENDPOINT}\n`);

// 1. Valid JSON submit reaches the webhook and the store.
{
  const beforeStore = await countLines(STORE);
  const beforeHook = await countLines(WEBHOOK_LOG);
  const res = await post(valid());
  const data = await res.json().catch(() => ({}));
  const ok = res.status === 200 && data.ok === true && typeof data.id === "string";
  record("valid JSON submit returns 200 with an id", ok, `status ${res.status}, id ${data.id ?? "none"}`);
  record("delivery reported by at least one real channel", data.deliveries?.webhook === "sent", JSON.stringify(data.deliveries ?? {}));
  await new Promise((r) => setTimeout(r, 250));
  record("lead written to the file store", (await countLines(STORE)) === beforeStore + 1);
  record("lead received by the webhook", (await countLines(WEBHOOK_LOG)) === beforeHook + 1);
}

// 2. No-JavaScript submit redirects to the confirmation page.
{
  const res = await post(valid(), { json: false });
  const location = res.headers.get("location") ?? "";
  record("form-encoded submit redirects to /thank-you/", res.status === 303 && location.startsWith("/thank-you/?ref="), `status ${res.status}, location ${location}`);
  const page = await fetch(`${BASE}${location}`);
  const html = await page.text();
  record("confirmation page renders and shows the phone", page.status === 200 && html.includes("530-587-0733") && html.includes("Request received"));
}

// 3. Spam is accepted-looking but never delivered.
{
  const beforeHook = await countLines(WEBHOOK_LOG);
  const res = await post({ ...valid(), company_website: "https://spam.example" });
  const data = await res.json().catch(() => ({}));
  await new Promise((r) => setTimeout(r, 250));
  record("honeypot submit looks successful", res.status === 200 && data.ok === true);
  record("honeypot submit delivers nothing", (await countLines(WEBHOOK_LOG)) === beforeHook);
}
{
  const beforeHook = await countLines(WEBHOOK_LOG);
  const res = await post({ ...valid(), ts: String(Date.now() - 500) });
  await new Promise((r) => setTimeout(r, 250));
  record("time-trap submit delivers nothing", res.status === 200 && (await countLines(WEBHOOK_LOG)) === beforeHook);
}

// 4. Validation.
{
  const { phone, ...noPhone } = valid();
  const res = await post(noPhone);
  const data = await res.json().catch(() => ({}));
  record("missing phone is rejected", res.status === 400 && Boolean(data.errors?.phone));
}
{
  const { message, ...noMessage } = valid();
  const res = await post(noMessage);
  const data = await res.json().catch(() => ({}));
  record("missing message is rejected", res.status === 400 && Boolean(data.errors?.message));
}

// 5. A browser never sees a raw JSON error body.
{
  const res = await fetch(ENDPOINT, { headers: { Accept: "text/html" }, redirect: "manual" });
  const html = await res.text();
  const isHtml = (res.headers.get("content-type") ?? "").includes("text/html");
  record("GET from a browser returns 405 as an HTML page", res.status === 405 && isHtml && html.includes("tel:+15305870733"), `content-type ${res.headers.get("content-type")}`);
}
{
  const res = await fetch(ENDPOINT, { headers: { Accept: "application/json" } });
  record("GET with Accept json returns 405 JSON", res.status === 405 && (res.headers.get("content-type") ?? "").includes("application/json"));
}

// 6. A cross-site source_path is discarded rather than trusted.
{
  const res = await post({ ...valid(), source_path: "https://evil.test/steal" });
  const data = await res.json().catch(() => ({}));
  await new Promise((r) => setTimeout(r, 250));
  const lines = (await readFile(STORE, "utf8")).trim().split("\n");
  const last = JSON.parse(lines[lines.length - 1]);
  record("cross-site source_path is discarded", res.status === 200 && data.ok === true && last.sourcePath === "/", `stored sourcePath ${last.sourcePath}`);
}

const failed = results.filter((r) => !r.pass);
console.log(`\nqa-form: ${results.length - failed.length}/${results.length} checks passed`);
if (failed.length) {
  console.error("qa-form FAILED:");
  for (const f of failed) console.error(`  ${f.name}`);
  process.exit(1);
}
