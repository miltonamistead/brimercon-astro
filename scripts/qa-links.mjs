#!/usr/bin/env node
// Link parity gate (PLAN.md M2). Verifies, against the built site in dist/:
//
//   parity    every live path in docs/url-map.md is built (or has a declared redirect)
//   internal  every internal href/src in the built HTML resolves to a built file
//   redirects the declared 301s (/water-heater-services/, /sitemap.xml) resolve
//
// Usage:
//   node scripts/qa-links.mjs                 # check dist/, human-readable output
//   node scripts/qa-links.mjs --report docs/qa/link-check.md
//
// Not run inside `npm run build` (it needs the full M2 page set to be meaningful);
// run explicitly: `npm run qa:links`.

import { readdir, readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { join, relative, dirname } from "node:path";

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

const failures = [];
const notes = [];

function fail(msg) {
  failures.push(msg);
}
function note(msg) {
  notes.push(msg);
}

async function walk(dir, files = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, files);
    else if (entry.name.endsWith(".html")) files.push(full);
  }
  return files;
}

/** Map a URL path to the built file that would serve it (build.format: directory). */
async function builtFileFor(urlPath) {
  let p = urlPath.split("#")[0].split("?")[0];
  if (!p.startsWith("/")) return null;
  if (p === "/") p = "/index.html";
  else if (p.endsWith("/")) p = p + "index.html";
  const full = join(ROOT, decodeURIComponent(p.slice(1)));
  try {
    return (await stat(full)).isFile() ? full : null;
  } catch {
    return null;
  }
}

/** Live paths from the url-map table (first column, backticked). */
async function livePaths() {
  const text = await readFile("docs/url-map.md", "utf8");
  const paths = [];
  for (const line of text.split("\n")) {
    const m = line.match(/^\|\s*`([^`]+)`\s*\|/);
    if (m) paths.push(m[1]);
  }
  return [...new Set(paths)];
}

// Declared redirects that intentionally have no built page.
const REDIRECTS = new Map([
  ["/water-heater-services/", "/services/water-heaters/"],
  ["/water-heater-services", "/services/water-heaters/"],
  ["/sitemap.xml", "/sitemap-index.xml"],
]);

const pages = await walk(ROOT);
if (pages.length === 0) fail("no HTML pages found under " + ROOT);

// 1. Parity: every live path is built or redirected.
for (const livePath of await livePaths()) {
  if (REDIRECTS.has(livePath)) continue;
  if (livePath === "/404/" || livePath === "/thank-you/") continue; // additive utility routes
  const file = await builtFileFor(livePath);
  if (!file) fail(`parity: live path ${livePath} has no built page`);
}

// 2. Internal links resolve.
const hrefRe = /(?:href|src)="([^"]+)"/g;
let linkCount = 0;
for (const page of pages) {
  const html = await readFile(page, "utf8");
  const pageUrl = "/" + relative(ROOT, page).replace(/\\/g, "/").replace(/index\.html$/, "");
  let m;
  while ((m = hrefRe.exec(html))) {
    const raw = m[1];
    if (!raw.startsWith("/")) continue; // external, anchor, or protocol link
    if (raw.startsWith("//")) continue;
    linkCount++;
    const target = raw.split("#")[0].split("?")[0] || "/";
    if (REDIRECTS.has(target)) continue;
    // /api/* is on-demand, never a static file.
    if (target.startsWith("/api/")) continue;
    const file = await builtFileFor(target);
    if (!file) fail(`broken link: ${pageUrl} -> ${raw}`);
  }
}

// 3. Redirect targets exist.
for (const [from, to] of REDIRECTS) {
  if (to === "/sitemap-index.xml") continue; // staging builds emit no sitemap
  const file = await builtFileFor(to);
  if (!file) fail(`redirect target missing: ${from} -> ${to} (no built page)`);
}

const summary =
  `qa-links: ${pages.length} page(s), ${linkCount} internal link(s) checked under ${ROOT}/\n` +
  (failures.length === 0
    ? "  PASS  parity, internal links, redirects: 0 failures\n"
    : `  FAIL  ${failures.length} failure(s):\n` + failures.map((f) => `    - ${f}\n`).join(""));

if (REPORT) {
  await mkdir(dirname(REPORT), { recursive: true });
  await writeFile(REPORT, `# Link parity check\n\n${summary}\n` + notes.map((n) => `- ${n}\n`).join(""));
  console.log(`report written to ${REPORT}`);
}
console.log(summary);
process.exit(failures.length ? 1 : 0);
