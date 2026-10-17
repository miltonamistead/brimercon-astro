#!/usr/bin/env node
// Copies Brimer's own image files from the live site into public/images/ (audit H6 reverses
// the earlier "rebuild without live images" decision). Same company, same assets, new repo.
//
// Skips: the Heavenly gondola frame (South Lake, out of area) and og-default.jpg (404 on live;
// scripts/make-og.mjs generates a real one).
//
//   node scripts/fetch-live-images.mjs          # fetch missing files
//   node scripts/fetch-live-images.mjs --force  # re-fetch everything

import { readFile, writeFile, mkdir, stat } from "node:fs/promises";

const UA = "Mozilla/5.0 (compatible; BrimerRebuildBot/1.0; +private staging twin, read-only)";
const DEST = "public/images";
const FORCE = process.argv.includes("--force");

// Out-of-area: a Heavenly gondola at South Lake Tahoe, captioned as a generic mountain
// residence. Never ships on a California-side-of-North-Tahoe site.
const EXCLUDE = new Set(["/images/reliability-for-every-season.png"]);

const inventory = JSON.parse(await readFile("docs/crawl/images.json", "utf8"));

const candidates = inventory.filter((img) => {
  const path = new URL(img.url).pathname;
  if (img.status !== 200) return false;
  if (EXCLUDE.has(path)) return false;
  return true;
});

console.log(`${inventory.length} referenced on live, ${candidates.length} to carry`);

let fetched = 0;
let skipped = 0;
for (const img of candidates) {
  const path = new URL(img.url).pathname.replace(/^\/images\//, "");
  const dest = `${DEST}/${path}`;
  await mkdir(dest.split("/").slice(0, -1).join("/"), { recursive: true });

  if (!FORCE) {
    try {
      await stat(dest);
      skipped++;
      continue;
    } catch {
      /* not present, fetch it */
    }
  }

  const res = await fetch(img.url, { headers: { "User-Agent": UA } });
  if (!res.ok) {
    console.error(`  FAIL ${res.status} ${img.url}`);
    continue;
  }
  await writeFile(dest, Buffer.from(await res.arrayBuffer()));
  fetched++;
}

console.log(`fetched ${fetched}, already present ${skipped}, excluded ${inventory.length - candidates.length}`);
console.log(`excluded: ${[...EXCLUDE].join(", ")} + og-default.jpg (404 on live)`);
