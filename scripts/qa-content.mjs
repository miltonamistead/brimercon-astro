#!/usr/bin/env node
// Content gate. Runs after every `astro build` and fails the build on a hard-rule breach.
// Rules: PLAN.md section 0 (holds) and section 3a (copy policy); audit B2 and B4.
//
//   node scripts/qa-content.mjs              # check dist/, human-readable output
//   node scripts/qa-content.mjs --report docs/qa/phone-check.md
//
// Checks, per built HTML page:
//   phone      only 530-587-0733 appears; every tel: href is +15305870733; each page has one
//   geography  no out-of-area place names (whole word, case-sensitive) and no " NV "
//   prices     no dollar figure in visible marketing copy
//   dashes     no em dash or en dash (audit B4: clean dashes only)
//   nap        street address and CSLB number present on every page

import { readdir, readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { join, relative, dirname } from "node:path";

// The Node adapter puts prerendered HTML in dist/client, so resolve to that when present.
// Reported paths then read as real URLs instead of /client/....
async function resolveRoot() {
  if (process.argv.includes("--dir")) return process.argv[process.argv.indexOf("--dir") + 1];
  try {
    if ((await stat("dist/client")).isDirectory()) return "dist/client";
  } catch {
    /* fall through */
  }
  return "dist";
}
const ROOT = await resolveRoot();
const REPORT = process.argv.includes("--report")
  ? process.argv[process.argv.indexOf("--report") + 1]
  : null;

const PHONE_DISPLAY = "530-587-0733";
const PHONE_TEL = "+15305870733";
const CSLB = "1149344";
const STREET = "10647 Manchester Dr";

// Utility emergency lines are not Brimer numbers. Allowed only next to the utility's name.
const UTILITY_NUMBERS = [{ number: "1-877-860-6020", requires: "Southwest Gas" }];

/**
 * Out-of-area place names. Whole-word and case-sensitive so ordinary words are not
 * false positives: "renovation" must not trip "Reno", and "nevada" inside a URL slug is
 * not the state (audit B2).
 *
 * "Nevada County" and "Sierra Nevada" are real California place names and are allowed;
 * they are masked out before the "Nevada" test rather than allow-listed per page.
 */
const FORBIDDEN_PLACES = [
  "Nevada",
  "Incline Village",
  "Incline",
  "Crystal Bay",
  "Stateline",
  "South Lake",
  "Heavenly",
  "Reno",
];
const NEVADA_ALLOWED_PHRASES = [/\bNevada County\b/g, /\bSierra Nevada\b/g];

const listHtml = async (dir) => {
  const out = [];
  const walk = async (d) => {
    let entries;
    try {
      entries = await readdir(d, { withFileTypes: true });
    } catch {
      return;
    }
    for (const e of entries) {
      const p = join(d, e.name);
      if (e.isDirectory()) await walk(p);
      else if (e.name.endsWith(".html")) out.push(p);
    }
  };
  await walk(dir);
  return out.sort();
};

/**
 * Visible text: strip scripts, styles, JSON-LD and all tags, then decode entities.
 * Entities matter here: an em dash written as `&mdash;` renders identically to a literal
 * one, so both have to reach the dash check.
 */
const NAMED_ENTITIES = {
  nbsp: " ",
  amp: "&",
  lt: "<",
  gt: ">",
  quot: '"',
  apos: "'",
  mdash: "\u2014",
  ndash: "\u2013",
  hellip: "...",
  rsquo: "\u2019",
  lsquo: "\u2018",
  ldquo: "\u201c",
  rdquo: "\u201d",
};

function visibleText(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&([a-z]+);/gi, (whole, name) => NAMED_ENTITIES[name.toLowerCase()] ?? whole)
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/\s+/g, " ");
}

const violations = [];
const add = (page, rule, detail) => violations.push({ page, rule, detail });

const files = await listHtml(ROOT);

if (files.length === 0) {
  console.log(`qa-content: no HTML found under ${ROOT}/ yet. Nothing to check.`);
  console.log("This is expected until page templates land (PLAN.md M1).");
  process.exit(0);
}

for (const file of files) {
  const page = "/" + relative(ROOT, file).replace(/index\.html$/, "").replace(/\\/g, "/");
  const html = await readFile(file, "utf8");
  const text = visibleText(html);

  // --- phone -------------------------------------------------------------
  let phoneScan = text;
  for (const { number, requires } of UTILITY_NUMBERS) {
    // Only excuse a utility number when the utility is named on the same page.
    if (text.includes(requires)) phoneScan = phoneScan.split(number).join(" ");
  }
  for (const m of phoneScan.matchAll(/\(?\b\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}\b/g)) {
    const found = m[0].replace(/[\s.()]/g, "-").replace(/-+/g, "-");
    if (found !== PHONE_DISPLAY) add(page, "phone", `unexpected number ${m[0].trim()}`);
  }
  for (const m of html.matchAll(/href=["']tel:([^"']+)["']/g)) {
    if (m[1] !== PHONE_TEL) add(page, "phone", `tel: href is ${m[1]}, expected ${PHONE_TEL}`);
  }
  if (!html.includes(`tel:${PHONE_TEL}`)) add(page, "phone", "no click-to-call link on the page");
  if (!text.includes(PHONE_DISPLAY)) add(page, "phone", "phone number not visible on the page");

  // --- geography ---------------------------------------------------------
  let geoScan = text;
  for (const allowed of NEVADA_ALLOWED_PHRASES) geoScan = geoScan.replace(allowed, " ");
  for (const place of FORBIDDEN_PLACES) {
    const re = new RegExp(`(?<![A-Za-z])${place}(?![A-Za-z])`, "g");
    const hits = geoScan.match(re);
    if (hits) add(page, "geography", `"${place}" appears ${hits.length}x in visible copy`);
  }
  if (/\sNV\s/.test(geoScan)) add(page, "geography", '" NV " appears in visible copy');

  // --- prices ------------------------------------------------------------
  for (const m of text.matchAll(/\$\s?\d[\d,]*/g)) {
    add(page, "price", `dollar figure "${m[0]}" in visible copy`);
  }

  // --- dashes ------------------------------------------------------------
  const dashes = text.match(/[\u2014\u2013]/g);
  if (dashes) add(page, "dash", `${dashes.length} em/en dash(es) in visible copy`);

  // --- NAP ---------------------------------------------------------------
  if (!text.includes(STREET)) add(page, "nap", `street address "${STREET}" missing`);
  if (!text.includes(CSLB)) add(page, "nap", `CSLB ${CSLB} missing`);
}

const byRule = {};
for (const v of violations) (byRule[v.rule] ??= []).push(v);

console.log(`qa-content: ${files.length} page(s) checked under ${ROOT}/`);
for (const rule of ["phone", "geography", "price", "dash", "nap"]) {
  const hits = byRule[rule] ?? [];
  console.log(`  ${hits.length === 0 ? "PASS" : "FAIL"}  ${rule.padEnd(9)} ${hits.length} violation(s)`);
}

if (REPORT) {
  const lines = [
    "# Content gate report",
    "",
    `Generated: ${new Date().toISOString()}`,
    `Pages checked: ${files.length} (under \`${ROOT}/\`)`,
    "",
    "| Rule | Result | Violations |",
    "|---|---|---|",
    ...["phone", "geography", "price", "dash", "nap"].map((r) => {
      const n = (byRule[r] ?? []).length;
      return `| ${r} | ${n === 0 ? "PASS" : "FAIL"} | ${n} |`;
    }),
    "",
  ];
  if (violations.length) {
    lines.push("## Violations", "", "| Page | Rule | Detail |", "|---|---|---|");
    for (const v of violations) lines.push(`| \`${v.page}\` | ${v.rule} | ${v.detail} |`);
    lines.push("");
  }
  lines.push("## Pages", "", ...files.map((f) => `- \`/${relative(ROOT, f).replace(/index\.html$/, "")}\``), "");
  await mkdir(dirname(REPORT), { recursive: true });
  await writeFile(REPORT, lines.join("\n"));
  console.log(`  report written to ${REPORT}`);
}

if (violations.length) {
  console.error(`\nqa-content FAILED with ${violations.length} violation(s):`);
  for (const v of violations.slice(0, 40)) console.error(`  ${v.page}  [${v.rule}]  ${v.detail}`);
  if (violations.length > 40) console.error(`  ... and ${violations.length - 40} more`);
  process.exit(1);
}
console.log("qa-content: all rules passed.");
