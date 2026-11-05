#!/usr/bin/env node
// Generates public/images/og-default.jpg (1200x630).
//
// Live points every page's og:image and twitter:image at /images/og-default.jpg, which
// returns 404, so every share card on brimercon.com is currently broken. This makes a real
// branded card. It is a placeholder: replace it with a photo from the Truckee shoot when
// one exists (docs/design.md).
//
//   node scripts/make-og.mjs

import { readFile, writeFile, mkdir } from "node:fs/promises";
import sharp from "sharp";

const W = 1200;
const H = 630;
const OUT = "public/images/og-default.jpg";

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const headline = "Plumbing, water heaters, and gas service";
const sub = "Truckee and North Lake Tahoe since 1997";
const phone = "530-587-0733";

const background = Buffer.from(`
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0d3453"/>
      <stop offset="100%" stop-color="#12466e"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect x="0" y="${H - 14}" width="${W}" height="14" fill="#b4441f"/>
  <text x="80" y="330" font-family="Helvetica, Arial, sans-serif" font-size="58" font-weight="700" fill="#ffffff">${esc(headline)}</text>
  <text x="80" y="398" font-family="Helvetica, Arial, sans-serif" font-size="34" fill="#cfe0ec">${esc(sub)}</text>
  <text x="80" y="486" font-family="Helvetica, Arial, sans-serif" font-size="44" font-weight="700" fill="#ffffff">${esc(phone)}</text>
</svg>`);

await mkdir("public/images", { recursive: true });

const logo = await sharp(await readFile("public/images/brimer-logo.png"))
  .resize({ width: 320 })
  .toBuffer();

await sharp(background)
  .composite([{ input: logo, top: 84, left: 80 }])
  .jpeg({ quality: 86, progressive: true })
  .toFile(OUT);

const { size } = await sharp(OUT).metadata().then(async (m) => ({ size: (await readFile(OUT)).length, ...m }));
console.log(`wrote ${OUT} (${W}x${H}, ${Math.round(size / 1024)} KB)`);
