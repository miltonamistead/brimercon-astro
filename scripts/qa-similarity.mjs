#!/usr/bin/env node
// Similarity gate for town pages (docs/town-briefs.md section 5, audit H11 / D12).
// Shipping 24 near-identical town pages is the exact failure this project exists
// to avoid, so the gate runs over the built town pages before they can merge:
//
//   1. Extract main content per town page (same stripping as scripts/crawl-live.mjs,
//      plus the first-screen block and lead form, which are legitimately shared).
//   2. Shingle into word trigrams; compute pairwise Jaccard similarity.
//   3. FAIL any pair above 0.45. Warn between 0.35 and 0.45.
//   4. FAIL any page whose town-specific fact count is below 4 (elevation, named
//      district or utility, permit authority, named neighbourhood from the brief).
//   5. Report the most similar pairs so the writer knows what to rework.
//
// Usage:
//   node scripts/qa-similarity.mjs                 # check dist/, human-readable output
//   node scripts/qa-similarity.mjs --report docs/qa/similarity.md
//
// Run explicitly: `npm run qa:similarity`.

import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { join, dirname } from "node:path";

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

const FAIL_AT = 0.45;
const WARN_AT = 0.35;

const failures = [];
const warnings = [];

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)));
}

/** Same chrome stripping as crawl-live.mjs, plus first-screen block and forms. */
function mainContent(html) {
  let s = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<nav[\s\S]*?<\/nav>/gi, " ")
    .replace(/<header[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer[\s\S]*?<\/footer>/gi, " ")
    // First-screen contract block and lead form are identical in structure everywhere.
    .replace(/<section[^>]*class="[^"]*first-screen[^"]*"[\s\S]*?<\/section>/gi, " ")
    .replace(/<form[\s\S]*?<\/form>/gi, " ");
  s = decodeEntities(s.replace(/<(p|div|section|li|h[1-6]|br|tr|td)\b[^>]*>/gi, "\n").replace(/<[^>]+>/g, " "));
  const lines = [];
  for (const raw of s.split("\n")) {
    const line = raw.replace(/\s+/g, " ").trim();
    if (line.length > 2 && lines.at(-1) !== line) lines.push(line);
  }
  return lines.join("\n");
}

function trigrams(text) {
  const words = text.toLowerCase().replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(Boolean);
  const set = new Set();
  for (let i = 0; i + 2 < words.length; i++) set.add(words[i] + " " + words[i + 1] + " " + words[i + 2]);
  return set;
}

function jaccard(a, b) {
  let inter = 0;
  for (const t of a) if (b.has(t)) inter++;
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

// Town data for the fact-count check (mirrors src/data/towns.ts).
const townSlugs = [];
{
  // Read the built service-area pages directly; slugs come from towns.ts source.
  const src = await readFile("src/data/towns.ts", "utf8");
  for (const m of src.matchAll(/\{\s*slug:\s*"([^"]+)"/g)) townSlugs.push(m[1]);
}

const pages = [];
for (const slug of townSlugs) {
  const file = join(ROOT, "service-areas", slug, "index.html");
  let html;
  try {
    html = await readFile(file, "utf8");
  } catch {
    continue; // town not built yet; TownLink renders it as plain text, so skip
  }
  pages.push({ slug, text: mainContent(html), shingles: null });
}
for (const p of pages) p.shingles = trigrams(p.text);

// Pairwise similarity.
const pairs = [];
for (let i = 0; i < pages.length; i++) {
  for (let j = i + 1; j < pages.length; j++) {
    const sim = jaccard(pages[i].shingles, pages[j].shingles);
    pairs.push({ a: pages[i].slug, b: pages[j].slug, sim });
    if (sim > FAIL_AT) failures.push(`similarity ${sim.toFixed(2)}: ${pages[i].slug} <> ${pages[j].slug} (limit ${FAIL_AT})`);
    else if (sim >= WARN_AT) warnings.push(`similarity ${sim.toFixed(2)}: ${pages[i].slug} <> ${pages[j].slug} (warn at ${WARN_AT})`);
  }
}
pairs.sort((x, y) => y.sim - x.sim);

// Town-specific fact count: elevation, district/utility names, permit authority,
// named neighbourhoods. Facts come from towns.ts; briefs add neighbourhoods.
const townsSrc = await readFile("src/data/towns.ts", "utf8");
for (const p of pages) {
  const entry = townsSrc.match(new RegExp(`\\{\\s*slug:\\s*"${p.slug}"[^}]*\\}`, "s"));
  const text = p.text.toLowerCase();
  let facts = 0;
  const seen = new Set();
  if (entry) {
    const body = entry[0];
    const candidates = [];
    for (const m of body.matchAll(/"([^"]+)"/g)) candidates.push(m[1]);
    for (const c of candidates) {
      const key = c.toLowerCase();
      if (key.length < 3 || seen.has(key)) continue;
      if (text.includes(key)) {
        seen.add(key);
        facts++;
      }
    }
  }
  // Brief named places.
  try {
    const brief = await readFile(`docs/town-briefs/${p.slug}.md`, "utf8");
    const np = brief.match(/Named places:\s*(.+)/);
    if (np) {
      for (const place of np[1].split(/[,;]/)) {
        const key = place.trim().toLowerCase();
        if (key.length > 2 && !seen.has(key) && text.includes(key)) {
          seen.add(key);
          facts++;
        }
      }
    }
  } catch {
    /* no brief yet */
  }
  p.factCount = facts;
  if (facts < 4) failures.push(`facts: ${p.slug} names only ${facts} town-specific fact(s) (minimum 4)`);
}

const lines = [];
lines.push(`qa-similarity: ${pages.length} built town page(s) checked under ${ROOT}/`);
lines.push(`  pairs above fail limit ${FAIL_AT}: ${failures.filter((f) => f.startsWith("similarity")).length}`);
lines.push(`  pairs in warn band ${WARN_AT}-${FAIL_AT}: ${warnings.length}`);
lines.push(`  pages below 4 town-specific facts: ${failures.filter((f) => f.startsWith("facts")).length}`);
lines.push("");
lines.push("Most similar pairs:");
for (const pair of pairs.slice(0, 10)) lines.push(`  ${pair.sim.toFixed(2)}  ${pair.a} <> ${pair.b}`);
lines.push("");
lines.push("Fact counts:");
for (const p of pages) lines.push(`  ${String(p.factCount).padStart(2)}  ${p.slug}`);
const summary = lines.join("\n") + "\n";

if (failures.length) {
  console.log(summary);
  console.log("FAILURES:");
  for (const f of failures) console.log("  - " + f);
} else {
  console.log(summary);
  console.log("PASS: all town pairs below 0.45, all pages name 4+ town-specific facts.");
}
if (warnings.length && failures.length === 0) {
  console.log("Warnings:");
  for (const w of warnings) console.log("  ~ " + w);
}

if (REPORT) {
  await mkdir(dirname(REPORT), { recursive: true });
  await writeFile(
    REPORT,
    `# Town similarity gate\n\n${summary}\n## Failures\n${failures.map((f) => `- ${f}`).join("\n") || "none"}\n\n## Warnings\n${warnings.map((w) => `- ${w}`).join("\n") || "none"}\n`
  );
  console.log(`report written to ${REPORT}`);
}
process.exit(failures.length ? 1 : 0);
