#!/usr/bin/env node
// Read-only crawl of live brimercon.com. Writes the factual source the twin is built from.
// Never mutates the live site: plain GETs, descriptive User-Agent, no cookies, no POSTs.
//
//   node scripts/crawl-live.mjs            # sitemap URLs -> inventory + page bodies + images
//   node scripts/crawl-live.mjs --quick    # inventory only, skip page bodies
//
// Outputs (docs/crawl/):
//   sitemap-urls.txt      one live URL per line
//   live-inventory.json   per URL: status, title, h1, description, canonical, robots, og, JSON-LD types
//   pages/<slug>.txt      main-content text per URL (nav/header/footer stripped)
//   town-facts.json       per town: lede, overview, elevation, utilities, permit authority, FAQs
//   images.json           every <img>/og image referenced, with HTTP status and bytes
//   live-robots.txt       origin robots.txt

import { writeFile, mkdir } from "node:fs/promises";
import { join } from "node:path";

const ORIGIN = "https://www.brimercon.com";
const UA = "Mozilla/5.0 (compatible; BrimerRebuildBot/1.0; +private staging twin, read-only)";
const OUT = "docs/crawl";
const QUICK = process.argv.includes("--quick");
const CONCURRENCY = 6;

const decodeEntities = (s) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, d) => String.fromCharCode(Number(d)))
    .replace(/&#x([0-9a-f]+);/gi, (_, h) => String.fromCharCode(parseInt(h, 16)))
    .replace(/&[a-z]+;/gi, " ");

const collapse = (s) => decodeEntities(s.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

function grab(html, re) {
  const m = html.match(re);
  return m ? collapse(m[1]) : null;
}

async function get(url) {
  const res = await fetch(url, { headers: { "User-Agent": UA }, redirect: "follow" });
  const body = res.headers.get("content-type")?.startsWith("image/") ? "" : await res.text();
  return { status: res.status, headers: res.headers, body };
}

async function pool(items, worker) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(
    Array.from({ length: Math.min(CONCURRENCY, items.length) }, async () => {
      while (i < items.length) {
        const n = i++;
        out[n] = await worker(items[n], n);
      }
    }),
  );
  return out;
}

/** Strip chrome so the remaining text is the page's own content. */
function mainContent(html) {
  let s = html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
    .replace(/<nav[\s\S]*?<\/nav>/gi, " ")
    .replace(/<header[\s\S]*?<\/header>/gi, " ")
    .replace(/<footer[\s\S]*?<\/footer>/gi, " ");
  s = decodeEntities(s.replace(/<(p|div|section|li|h[1-6]|br|tr|td)\b[^>]*>/gi, "\n").replace(/<[^>]+>/g, " "));
  const lines = [];
  for (const raw of s.split("\n")) {
    const line = raw.replace(/\s+/g, " ").trim();
    if (line.length > 2 && lines.at(-1) !== line) lines.push(line);
  }
  return lines.join("\n");
}

function slugFor(path) {
  const s = path.replace(/^\/|\/$/g, "").replace(/\//g, "__");
  return s === "" ? "home" : s;
}

/** Per-town facts: only what the live page actually states. Nothing inferred. */
function townFacts(text) {
  const lines = text.split("\n");
  const lede = lines[1] ?? "";
  const overview = lines.find((l) => l.length > 200) ?? "";
  const elevations = [...text.matchAll(/([\d,]{3,6}(?:\s*(?:to|-)\s*[\d,]{3,6})?)\s*feet/g)].map((m) => m[1]).slice(0, 3);
  const entities = [
    ...new Set(
      [
        ...text.matchAll(
          /\b(TDPUD|NTPUD|TCPUD|NCSD|TSD|TTSA|Southwest Gas|Liberty Utilities|Placer County|Nevada County|Town of Truckee|Truckee Donner Public Utility District|North Tahoe Public Utility District|Tahoe City Public Utility District|Northstar Community Services District|Truckee Sanitary District|Tahoe-Truckee Sanitation Agency)\b/g,
        ),
      ].map((m) => m[1]),
    ),
  ].sort();
  const permit = [...new Set([...text.matchAll(/Permit(?:s|ting)?[^.]*?\b(?:through|filed through|issued through)\s+(?:the\s+)?([A-Z][^.,]{5,70})/g)].map((m) => m[1].trim()))].slice(0, 3);

  const faqs = [];
  const fi = lines.findIndex((l) => /^Frequently Asked Questions$/i.test(l));
  if (fi >= 0) {
    const stop = lines.findIndex((l, n) => n > fi && /^Popular services in/i.test(l));
    const block = lines.slice(fi + 1, stop > 0 ? stop : undefined);
    for (let n = 0; n < block.length - 1; n++) {
      if (block[n].endsWith("?")) faqs.push({ q: block[n], a: block[n + 1] }), n++;
    }
  }
  return { lede, overview, elevations, entities, permit, faqs };
}

async function main() {
  await mkdir(join(OUT, "pages"), { recursive: true });

  process.stdout.write("robots.txt ... ");
  const robots = await get(`${ORIGIN}/robots.txt`);
  await writeFile(join(OUT, "live-robots.txt"), robots.body);
  console.log(robots.status);

  process.stdout.write("sitemap-0.xml ... ");
  const sitemap = await get(`${ORIGIN}/sitemap-0.xml`);
  const urls = [...sitemap.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  await writeFile(join(OUT, "sitemap-urls.txt"), urls.join("\n") + "\n");
  console.log(`${sitemap.status} (${urls.length} urls)`);

  const imageRefs = new Map();
  const inventory = await pool(urls, async (url) => {
    const path = url.replace(ORIGIN, "");
    const { status, headers, body } = await get(url);

    for (const m of body.matchAll(/<img\b[^>]*\bsrc=["']([^"']+)["'][^>]*>/gi)) {
      const src = m[1];
      if (!src || src.startsWith("data:")) continue;
      const abs = src.startsWith("http") ? src : new URL(src, ORIGIN).href;
      const alt = m[0].match(/\balt=["']([^"']*)["']/i)?.[1] ?? null;
      if (!imageRefs.has(abs)) imageRefs.set(abs, { url: abs, alts: new Set(), usedOn: new Set() });
      imageRefs.get(abs).alts.add(alt ?? "(missing)");
      imageRefs.get(abs).usedOn.add(path);
    }
    const og = grab(body, /<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
    if (og && !imageRefs.has(og)) imageRefs.set(og, { url: og, alts: new Set(["(og:image)"]), usedOn: new Set(["(meta)"]) });

    if (!QUICK) await writeFile(join(OUT, "pages", `${slugFor(path)}.txt`), mainContent(body));

    return {
      url,
      path,
      status,
      title: grab(body, /<title[^>]*>([\s\S]*?)<\/title>/i),
      h1: grab(body, /<h1[^>]*>([\s\S]*?)<\/h1>/i),
      description: grab(body, /<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i),
      canonical: grab(body, /<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i),
      robotsMeta: grab(body, /<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i),
      ogImage: og,
      jsonLdTypes: [...new Set([...body.matchAll(/"@type"\s*:\s*"([A-Za-z]+)"/g)].map((m) => m[1]))].sort(),
      htmlBytes: body.length,
      lastModified: headers.get("last-modified"),
      published: grab(body, /<meta[^>]+property=["']article:published_time["'][^>]+content=["']([^"']+)["']/i),
    };
  });

  await writeFile(join(OUT, "live-inventory.json"), JSON.stringify(inventory, null, 1) + "\n");
  console.log(`inventory: ${inventory.length} urls, non-200: ${inventory.filter((r) => r.status !== 200).length}`);

  if (!QUICK) {
    const towns = {};
    for (const row of inventory) {
      const m = row.path.match(/^\/service-areas\/([^/]+)\/$/);
      if (!m) continue;
      const text = mainContent((await get(row.url)).body);
      towns[m[1]] = { title: row.title, h1: row.h1, ...townFacts(text) };
    }
    await writeFile(join(OUT, "town-facts.json"), JSON.stringify(towns, null, 1) + "\n");
    console.log(`town-facts: ${Object.keys(towns).length} towns, ${Object.values(towns).reduce((n, t) => n + t.faqs.length, 0)} faqs`);
  }

  // Image inventory drives the carry-forward decision in docs/design.md (audit H6).
  const images = await pool([...imageRefs.values()], async (ref) => {
    let status = 0;
    let bytes = 0;
    let type = null;
    try {
      const res = await fetch(ref.url, { headers: { "User-Agent": UA } });
      status = res.status;
      type = res.headers.get("content-type");
      bytes = (await res.arrayBuffer()).byteLength;
    } catch (err) {
      status = `error: ${err.message}`;
    }
    return { url: ref.url, status, bytes, contentType: type, alts: [...ref.alts], usedOn: [...ref.usedOn].sort() };
  });
  images.sort((a, b) => a.url.localeCompare(b.url));
  await writeFile(join(OUT, "images.json"), JSON.stringify(images, null, 1) + "\n");
  console.log(`images: ${images.length} referenced, ${images.filter((i) => i.status !== 200).length} broken`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
