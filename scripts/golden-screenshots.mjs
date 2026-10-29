#!/usr/bin/env node
// Captures the golden pages at 390x844 for Milton's review.
//
// Two shots per page: the first screen exactly as it lands (viewport only, which is what
// the B1 contract is about), and a taller scroll view showing what comes next.
//
// Requires a built site being served:  npm run build && npm run serve
//   node scripts/golden-screenshots.mjs
//   BASE_URL=https://<preview> node scripts/golden-screenshots.mjs

import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";

const BASE = process.env.BASE_URL || "http://127.0.0.1:4322";
const OUT = "docs/golden";
const WIDTH = 390;
const HEIGHT = 844;
const SCROLL_HEIGHT = 1900;

const PAGES = [
  { name: "home", path: "/" },
  { name: "service-water-heaters", path: "/services/water-heaters/" },
  { name: "town-truckee", path: "/service-areas/truckee/" },
];

await mkdir(OUT, { recursive: true });

const browser = await chromium.launch({ channel: "chrome" });
const context = await browser.newContext({
  viewport: { width: WIDTH, height: HEIGHT },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
const page = await context.newPage();

for (const target of PAGES) {
  const url = `${BASE}${target.path}`;
  const res = await page.goto(url, { waitUntil: "networkidle" });
  if (!res || res.status() >= 400) {
    console.error(`  SKIP ${target.path} (HTTP ${res?.status()})`);
    continue;
  }

  // Walk the page so lazy images decode, then return to the top.
  await page.evaluate(async (step) => {
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 40));
    }
    window.scrollTo(0, 0);
  }, HEIGHT);
  await page.waitForTimeout(400);

  const first = `${OUT}/${target.name}-1-first-screen.png`;
  await page.screenshot({ path: first });

  const scroll = `${OUT}/${target.name}-2-scroll.png`;
  const full = await page.evaluate(() => document.body.scrollHeight);
  // A full-page capture renders position:fixed elements once, stranded partway down the
  // image, which reads as a layout bug it is not. The call bar is hidden for this shot;
  // shot 1 is the one that shows it, correctly pinned to the viewport.
  const hideCallBar = await page.addStyleTag({ content: ".call-bar { display: none !important; }" });
  // clip is bound by the viewport unless fullPage is set, so both are needed.
  await page.screenshot({
    path: scroll,
    fullPage: true,
    clip: { x: 0, y: 0, width: WIDTH, height: Math.min(SCROLL_HEIGHT, full) },
  });
  await hideCallBar.evaluate((el) => el.remove());

  console.log(`  ${target.path}  ->  ${first}, ${scroll}  (page ${full}px tall)`);
}

await browser.close();
console.log(`\nDone. ${WIDTH}x${HEIGHT}, deviceScaleFactor 2.`);
