#!/usr/bin/env node
// H2 gate. Enforces the heading rules in PLAN.md section 3d so bulk pages inherit them
// mechanically rather than by good intentions.
//
//   node scripts/qa-headings.mjs
//   node scripts/qa-headings.mjs --dir dist --verbose
//
// Only H2s inside <main> are checked. Footer headings are site furniture, not content.
//
// Rules checked per page:
//   2  no eyebrow label immediately above an H2
//   3  a place name appears in roughly half the H2s, never all of them
//   5  sentence case, under 60 characters, no colon-split heading, no em or en dash
// Rules 1, 4 and 6 are editorial (query wording, town-specific angle, one section per live
// topic) and are reviewed by a human; this gate covers what a machine can judge.

import { readdir, readFile, stat } from "node:fs/promises";
import { join, relative } from "node:path";

const argv = process.argv.slice(2);
const VERBOSE = argv.includes("--verbose");

// The Node adapter puts prerendered HTML in dist/client, so resolve to that when present.
// Reported paths then read as real URLs instead of /client/....
async function resolveRoot() {
  if (argv.includes("--dir")) return argv[argv.indexOf("--dir") + 1];
  try {
    if ((await stat("dist/client")).isDirectory()) return "dist/client";
  } catch {
    /* fall through */
  }
  return "dist";
}
const ROOT = await resolveRoot();

const MAX_LEN = 60;
const PLACE_WORDS = [
  "Truckee",
  "Tahoe",
  "Donner",
  "Martis",
  "Glenshire",
  "Northstar",
  "Homewood",
  "Tahoma",
  "Kings Beach",
  "Carnelian",
  "Olympic Valley",
  "Alpine Meadows",
  "Norden",
  "Soda Springs",
  "Lahontan",
  "Sierra",
  "Gateway",
  "Prosser",
];

// Words that legitimately stay capitalised mid-heading: proper nouns and initialisms.
const PROPER = new Set([
  ...PLACE_WORDS.flatMap((p) => p.split(" ")),
  "Brimer",
  "Plumbing",
  "Moen",
  "Flo",
  "TSD",
  "TDPUD",
  "NTPUD",
  "TCPUD",
  "NCSD",
  "TTSA",
  "Southwest",
  "Gas",
  "Town",
  "CA",
  "California",
  "Placer",
  "Nevada",
  "County",
  "Historic",
  "District",
  "Meadow",
  "Meadows",
  "Heights",
  "Trail",
  "Lake",
  // Part of the proper names "North Lake Tahoe" and "North Shore".
  "North",
  "Shore",
  // Second words of the town names in src/data/towns.ts, so "Martis Camp" and "Tahoe
  // Vista" are not read as mid-heading capitalisation.
  "Camp",
  "Vista",
  "City",
  "Summit",
  "Beach",
  "Bay",
  "Point",
  "Crossing",
  "Mill",
  "Springs",
  "Valley",
  "Greenwood",
  "Serene",
  "Lakes",
  "Kings",
  "Agate",
  "Carnelian",
  "Dollar",
  "Soda",
  "Alpine",
  "Olympic",
  "Lahontan",
  "Northstar",
  "Glenshire",
  "Tahoma",
  "Homewood",
  "Moen",
  "Flo",
  "I",
]);

/**
 * Pages exempt from the place-name ratio. Rule 3 exists so marketing pages carry local
 * signal without stuffing; a privacy notice heading like "What we collect" has no local
 * intent and should not be forced to name a town. The other rules still apply here.
 */
const RATIO_EXEMPT = [/^\/privacy-policy\//, /^\/terms-of-use\//, /^\/thank-you\//, /^\/404/];

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

// Named entities are decoded rather than stripped: an em dash written as &mdash; renders
// identically to a literal one, so both have to reach the dash check.
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

const text = (s) =>
  s
    .replace(/<[^>]+>/g, " ")
    .replace(/&([a-z]+);/gi, (whole, name) => NAMED_ENTITIES[name.toLowerCase()] ?? whole)
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/\s+/g, " ")
    .trim();

const violations = [];
const files = await listHtml(ROOT);

if (files.length === 0) {
  console.log(`qa-headings: no HTML under ${ROOT}/ yet. Nothing to check.`);
  process.exit(0);
}

for (const file of files) {
  const page = "/" + relative(ROOT, file).replace(/index\.html$/, "").replace(/\\/g, "/");
  const html = await readFile(file, "utf8");
  const main = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1];
  if (!main) continue;

  const add = (rule, detail) => violations.push({ page, rule, detail });

  // Rule 2: an eyebrow is a short styled line sitting immediately before an H2.
  for (const m of main.matchAll(/<p[^>]*class="[^"]*eyebrow[^"]*"[^>]*>([\s\S]*?)<\/p>/gi)) {
    add("2 eyebrow", `"${text(m[1])}" is an eyebrow label`);
  }
  for (const m of main.matchAll(/<p[^>]*>([\s\S]*?)<\/p>\s*<h2/gi)) {
    const t = text(m[1]);
    if (t && t.length < 42 && !t.endsWith(".") && !t.includes(",")) {
      add("2 eyebrow", `"${t}" reads as an eyebrow immediately above an H2`);
    }
  }

  const headings = [...main.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) => text(m[1])).filter(Boolean);
  if (headings.length === 0) continue;

  for (const h of headings) {
    if (h.length > MAX_LEN) add("5 length", `"${h}" is ${h.length} chars, limit ${MAX_LEN}`);
    if (h.includes(":")) add("5 colon", `"${h}" is colon-split`);
    if (/[\u2014\u2013]/.test(h)) add("5 dash", `"${h}" contains an em or en dash`);

    // Sentence case: only the first word, proper nouns and initialisms are capitalised.
    const words = h.split(/\s+/);
    for (const [i, raw] of words.entries()) {
      if (i === 0) continue;
      const word = raw.replace(/^[("']+|[),.?"'!]+$/g, "");
      if (!word || !/^[A-Z]/.test(word)) continue;
      if (PROPER.has(word) || PROPER.has(word.replace(/'s$/, "")) || /^[A-Z]{2,}$/.test(word)) continue;
      add("5 case", `"${h}" capitalises "${word}" mid-heading`);
    }
  }

  // Rule 3: place names in roughly half, never all.
  const withPlace = headings.filter((h) => PLACE_WORDS.some((p) => h.includes(p)));
  const share = withPlace.length / headings.length;
  if (headings.length >= 3 && !RATIO_EXEMPT.some((pattern) => pattern.test(page))) {
    if (share === 1) add("3 places", `every one of ${headings.length} H2s names a place`);
    else if (share > 0.7) add("3 places", `${withPlace.length}/${headings.length} H2s name a place, more than roughly half`);
    else if (share < 0.25) add("3 places", `only ${withPlace.length}/${headings.length} H2s name a place, fewer than roughly half`);
  }

  if (VERBOSE) {
    console.log(`\n${page}  (${headings.length} H2s, ${withPlace.length} with a place name)`);
    for (const h of headings) {
      const flag = PLACE_WORDS.some((p) => h.includes(p)) ? "place" : "     ";
      console.log(`  ${String(h.length).padStart(2)}ch ${flag}  ${h}`);
    }
  }
}

const pagesChecked = files.length;
console.log(`\nqa-headings: ${pagesChecked} page(s) checked under ${ROOT}/`);
if (violations.length) {
  console.error(`qa-headings FAILED with ${violations.length} violation(s):`);
  for (const v of violations) console.error(`  ${v.page}  [rule ${v.rule}]  ${v.detail}`);
  process.exit(1);
}
console.log("qa-headings: all H2 rules passed.");
