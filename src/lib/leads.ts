// Lead parsing, validation and delivery. Design: docs/lead-capture.md.
//
// Two rules shape this file:
//   - A lead is never silently dropped. If no real channel accepts it and
//     LEAD_REQUIRE_DELIVERY is on, the endpoint fails loudly so the page can tell the
//     person to call instead of showing a confirmation that means nothing.
//   - A file store is not delivery. It exists for local QA; Vercel's filesystem is
//     ephemeral, so anything written there in production is gone.

import { createHash, createHmac, randomUUID } from "node:crypto";

export interface LeadInput {
  name?: string;
  phone?: string;
  message?: string;
  email?: string;
  address?: string;
  town?: string;
  source_path?: string;
  service_context?: string;
  town_context?: string;
  company_website?: string;
  ts?: string;
}

export interface LeadRecord {
  id: string;
  receivedAt: string;
  name: string;
  phone: string;
  phoneRaw: string;
  email: string | null;
  address: string | null;
  town: string | null;
  message: string;
  sourcePath: string;
  serviceContext: string | null;
  townContext: string | null;
  userAgent: string | null;
  ipHash: string | null;
  site: string;
}

export type DeliveryResult = "sent" | "skipped" | "failed";

const str = (value: unknown): string => (typeof value === "string" ? value.trim() : "");

/** Same-site paths only. Anything with a scheme or protocol-relative prefix is discarded. */
export function safeSourcePath(value: unknown): string {
  const path = str(value);
  if (!path.startsWith("/") || path.startsWith("//") || path.includes("://")) return "/";
  return path.slice(0, 200);
}

export function normalisePhone(raw: string): string | null {
  const digits = raw.replace(/\D/g, "");
  if (digits.length === 10 && !/^[01]/.test(digits)) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith("1") && !/^1[01]/.test(digits)) return `+${digits}`;
  return null;
}

export interface Validation {
  ok: boolean;
  /** True when the submission looks automated. Respond as success, deliver nothing. */
  silentDrop: boolean;
  errors: Record<string, string>;
  values: {
    name: string;
    phone: string;
    phoneRaw: string;
    message: string;
    email: string | null;
    address: string | null;
    town: string | null;
  };
}

export function validate(input: LeadInput): Validation {
  const errors: Record<string, string> = {};

  // Honeypot: a real person never fills a hidden field.
  const silentDrop = str(input.company_website).length > 0 || trippedTimeTrap(input.ts);

  const name = str(input.name);
  if (name.length < 2 || name.length > 100) errors.name = "Please enter your name.";

  const phoneRaw = str(input.phone);
  const phone = normalisePhone(phoneRaw);
  if (!phone) errors.phone = "Please enter a phone number we can call you back on.";

  const message = str(input.message);
  if (message.length < 5 || message.length > 3000) errors.message = "Please tell us briefly what is wrong.";

  const email = str(input.email);
  if (email && (email.length > 200 || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email))) {
    errors.email = "That email address does not look right.";
  }

  return {
    ok: Object.keys(errors).length === 0,
    silentDrop,
    errors,
    values: {
      name,
      phone: phone ?? "",
      phoneRaw,
      message,
      email: email || null,
      address: str(input.address).slice(0, 200) || null,
      town: str(input.town).slice(0, 100) || null,
    },
  };
}

/**
 * Submitted implausibly fast, or on a page left open for over a day. Only applies when
 * the field is present: with JavaScript off it never is, and the honeypot carries the load.
 */
function trippedTimeTrap(ts: unknown): boolean {
  const value = Number(str(ts));
  if (!Number.isFinite(value) || value <= 0) return false;
  const age = Date.now() - value;
  return age < 3000 || age > 86_400_000;
}

export function buildRecord(v: Validation["values"], meta: { sourcePath: string; serviceContext?: string; townContext?: string; userAgent?: string | null; ip?: string | null }): LeadRecord {
  return {
    id: `ld_${randomUUID().replace(/-/g, "").slice(0, 12)}`,
    receivedAt: new Date().toISOString(),
    name: v.name,
    phone: v.phone,
    phoneRaw: v.phoneRaw,
    email: v.email,
    address: v.address,
    town: v.town,
    message: v.message,
    sourcePath: meta.sourcePath,
    serviceContext: meta.serviceContext || null,
    townContext: meta.townContext || null,
    userAgent: meta.userAgent ?? null,
    // Hashed with a daily salt: enough to rate limit, never a stored IP address.
    ipHash: meta.ip ? createHash("sha256").update(`${meta.ip}:${new Date().toISOString().slice(0, 10)}`).digest("hex").slice(0, 16) : null,
    site: process.env.LEAD_SITE_LABEL || "brimercon-astro-staging",
  };
}

const withTimeout = (promise: Promise<Response>, ms = 8000): Promise<Response> =>
  Promise.race([promise, new Promise<Response>((_, reject) => setTimeout(() => reject(new Error("timeout")), ms))]);

async function deliverEmail(lead: LeadRecord): Promise<DeliveryResult> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_TO_EMAIL;
  if (!key || !to) return "skipped";

  const lines = [
    `Name:    ${lead.name}`,
    `Phone:   ${lead.phoneRaw} (${lead.phone})`,
    `Email:   ${lead.email ?? "not given"}`,
    `Town:    ${lead.town ?? "not given"}`,
    `Address: ${lead.address ?? "not given"}`,
    "",
    "What is wrong:",
    lead.message,
    "",
    `Page:    ${lead.sourcePath}`,
    `Lead id: ${lead.id}`,
    `Time:    ${lead.receivedAt}`,
  ];

  try {
    const res = await withTimeout(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL || "Brimer Website <onboarding@resend.dev>",
          to: [to],
          ...(process.env.LEAD_CC_EMAIL ? { cc: [process.env.LEAD_CC_EMAIL] } : {}),
          ...(lead.email ? { reply_to: lead.email } : {}),
          subject: `New service request - ${lead.town ?? "Tahoe/Truckee"} - ${lead.name}`,
          text: lines.join("\n"),
        }),
      }),
    );
    return res.ok ? "sent" : "failed";
  } catch {
    return "failed";
  }
}

async function deliverWebhook(lead: LeadRecord): Promise<DeliveryResult> {
  const url = process.env.LEAD_WEBHOOK_URL;
  if (!url) return "skipped";

  const body = JSON.stringify(lead);
  const secret = process.env.LEAD_WEBHOOK_SECRET;
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (secret) headers["X-Brimer-Signature"] = `sha256=${createHmac("sha256", secret).update(body).digest("hex")}`;

  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const res = await withTimeout(fetch(url, { method: "POST", headers, body }));
      if (res.ok) return "sent";
    } catch {
      /* retry once */
    }
  }
  return "failed";
}

/** Local QA only. Deliberately excluded from the "was it delivered" decision. */
async function storeToFile(lead: LeadRecord): Promise<DeliveryResult> {
  if ((process.env.LEAD_STORE || "none") !== "file") return "skipped";
  try {
    const { appendFile, mkdir } = await import("node:fs/promises");
    const path = process.env.LEAD_STORE_PATH || ".data/leads.jsonl";
    await mkdir(path.split("/").slice(0, -1).join("/") || ".", { recursive: true });
    await appendFile(path, JSON.stringify(lead) + "\n");
    return "sent";
  } catch {
    return "failed";
  }
}

export interface Deliveries {
  email: DeliveryResult;
  webhook: DeliveryResult;
  store: DeliveryResult;
}

export async function deliver(lead: LeadRecord): Promise<{ deliveries: Deliveries; accepted: boolean }> {
  const [email, webhook, store] = await Promise.all([deliverEmail(lead), deliverWebhook(lead), storeToFile(lead)]);
  const deliveries = { email, webhook, store };

  // The file store never counts: it cannot survive a serverless deploy.
  const realChannelAccepted = email === "sent" || webhook === "sent";
  const required = (process.env.LEAD_REQUIRE_DELIVERY ?? "true") !== "false";

  // One structured line per lead, so Vercel's function log is a record even with no
  // channel configured. Never includes the raw IP.
  console.log(JSON.stringify({ event: "lead", id: lead.id, sourcePath: lead.sourcePath, deliveries }));

  return { deliveries, accepted: realChannelAccepted || !required };
}
