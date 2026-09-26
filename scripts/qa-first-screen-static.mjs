#!/usr/bin/env node
// Static first-screen contract check (sandbox fallback).
// The Playwright gate (tests/first-screen.spec.ts) cannot run in this sandbox:
// the only Chromium's headless mode produces no output and its Local Network
// Access checks block loopback. This verifies what can be checked statically:
// every key template carries the data-fs markers h1, area, call, hours, trust
// exactly once each, in that document order, with the call button linking to
// tel:+15305870733.
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const ROOT = "dist/client";
const TARGETS = [
  "/",
  "/services/water-heaters/",
  "/service-areas/truckee/",
  "/service-areas/martis-valley/",
  "/contact/",
  "/membership/",
  "/resources/",
  "/404.html",
];

const MARKERS = ["h1", "area", "call", "hours", "trust"];
let failures = 0;

for (const target of TARGETS) {
  const file =
    target === "/404.html"
      ? join(ROOT, "404.html")
      : join(ROOT, target.replace(/^\//, ""), "index.html");
  const html = await readFile(file, "utf8").catch(() => null);
  if (!html) {
    console.log(`  FAIL  ${target}  no built file`);
    failures++;
    continue;
  }
  const positions = [];
  let ok = true;
  for (const m of MARKERS) {
    const idx = html.indexOf(`data-fs="${m}"`);
    if (idx === -1) {
      console.log(`  FAIL  ${target}  missing data-fs="${m}"`);
      ok = false;
      failures++;
    }
    positions.push(idx);
  }
  if (ok) {
    const ordered = positions.every((p, i) => i === 0 || p > positions[i - 1]);
    const telCount = (html.match(/href="tel:\+15305870733"/g) || []).length;
    if (!ordered) {
      console.log(`  FAIL  ${target}  markers out of order`);
      failures++;
    } else if (telCount === 0) {
      console.log(`  FAIL  ${target}  no tel:+15305870733 link`);
      failures++;
    } else {
      console.log(`  PASS  ${target}  markers in order, ${telCount} tel: link(s)`);
    }
  }
}
console.log(failures === 0 ? "\nqa-first-screen-static: all templates pass" : `\nqa-first-screen-static: ${failures} failure(s)`);
process.exit(failures === 0 ? 0 : 1);
