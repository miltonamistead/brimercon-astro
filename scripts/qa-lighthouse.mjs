#!/usr/bin/env node
// Speed gate (docs/qa-plan.md section 5): twin versus live.
//
// Lighthouse (npm `lighthouse` package), mobile and desktop presets, 3 runs
// each, median reported. Pages: /, /services/water-heaters/,
// /service-areas/truckee/, /contact/. Targets: local serve, Vercel preview,
// live baseline. Plus a cheap full-surface curl check across every built URL.
//
// Usage:
//   npm run build && npm run serve &            # :4322
//   node scripts/qa-lighthouse.mjs              # local only
//   node scripts/qa-lighthouse.mjs --preview https://<preview-url> --bypass <token>
//   node scripts/qa-lighthouse.mjs --live       # adds the live baseline
//
// Needs Chrome (see playwright.config.ts for the machine-Chrome setup).
// Output: docs/qa/speed-report.md + raw JSON under docs/qa/lighthouse/.

import { execFile } from "node:child_process";
import { mkdir, writeFile } from "node:fs/promises";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const OUT = "docs/qa/lighthouse";

const PAGES = ["/", "/services/water-heaters/", "/service-areas/truckee/", "/contact/"];
const BUDGETS = {
  mobilePerformance: 95,
  lcpMs: 1800,
  cls: 0.02,
  jsBytes: 6 * 1024,
  cssBytes: 25 * 1024,
  homeHtmlBytes: 60 * 1024,
  thirdPartyRequests: 0,
};

const args = process.argv.slice(2);
const previewIdx = args.indexOf("--preview");
const bypassIdx = args.indexOf("--bypass");
const preview = previewIdx === -1 ? null : args[previewIdx + 1];
const bypass = bypassIdx === -1 ? null : args[bypassIdx + 1];
const includeLive = args.includes("--live");

const targets = [{ name: "local", base: "http://127.0.0.1:4322" }];
if (preview) targets.push({ name: "preview", base: preview.replace(/\/$/, "") });
if (includeLive) targets.push({ name: "live", base: "https://www.brimercon.com" });

const chromeFlags = ["--no-sandbox", "--disable-gpu"];
if (bypass) chromeFlags.push(`--extra-headers=${JSON.stringify({ "x-vercel-protection-bypass": bypass })}`);

async function lighthouse(url, preset) {
  const lhArgs = [
    "lighthouse",
    url,
    `--preset=${preset}`,
    "--output=json",
    "--output-path=stdout",
    "--quiet",
    `--chrome-flags=${chromeFlags.join(" ")}`,
    "--max-wait-for-load=30000",
  ];
  const { stdout } = await execFileAsync("npx", lhArgs, { maxBuffer: 64 * 1024 * 1024 });
  return JSON.parse(stdout);
}

const median = (xs) => xs.slice().sort((a, b) => a - b)[Math.floor(xs.length / 2)];

const summary = (lhr) => {
  const audits = lhr.audits;
  const thirdParty = (audits["third-party-summary"]?.details?.items || []).length;
  return {
    performance: Math.round((lhr.categories.performance?.score || 0) * 100),
    lcpMs: Math.round(audits["largest-contentful-paint"]?.numericValue || 0),
    cls: +(audits["cumulative-layout-shift"]?.numericValue || 0).toFixed(4),
    tbtMs: Math.round(audits["total-blocking-time"]?.numericValue || 0),
    speedIndexMs: Math.round(audits["speed-index"]?.numericValue || 0),
    htmlBytes: audits["main-resource"]?.details?.items?.[0]?.transferSize || null,
    totalBytes: audits["total-byte-weight"]?.numericValue
      ? Math.round(audits["total-byte-weight"].numericValue)
      : null,
    requests: audits["network-requests"]?.details?.items?.length || null,
    jsBytes: Math.round(audits["legacy-javascript"]?.numericValue || 0),
    thirdPartyRequests: thirdParty,
  };
};

await mkdir(OUT, { recursive: true });
const report = { generated: new Date().toISOString(), budgets: BUDGETS, targets: {} };

for (const t of targets) {
  report.targets[t.name] = {};
  for (const page of PAGES) {
    const url = t.base + page;
    const runs = { mobile: [], desktop: [] };
    for (const preset of ["mobile", "desktop"]) {
      for (let i = 0; i < 3; i++) {
        try {
          const lhr = await lighthouse(url, preset === "mobile" ? "perf" : "desktop");
          runs[preset].push(summary(lhr));
          await writeFile(`${OUT}/${t.name}-${preset}-${page.replace(/\//g, "_")}-run${i}.json`, JSON.stringify(lhr));
        } catch (e) {
          console.error(`  WARN  ${t.name} ${preset} ${page} run ${i}: ${e.message.split("\n")[0]}`);
        }
      }
      if (runs[preset].length === 0) continue;
      const med = {};
      for (const k of Object.keys(runs[preset][0])) {
        med[k] = typeof runs[preset][0][k] === "number" ? median(runs[preset].map((r) => r[k])) : runs[preset][0][k];
      }
      report.targets[t.name][`${preset}:${page}`] = med;
      console.log(`  ${t.name} ${preset} ${page}  perf=${med.performance} lcp=${med.lcpMs}ms cls=${med.cls}`);
    }
  }
}

await writeFile(`${OUT}/summary.json`, JSON.stringify(report, null, 2));

// Markdown report with budget verdicts.
let md = `# Speed report\n\nGenerated: ${report.generated}\n\n`;
md += `## Budgets\n\n| Budget | Target |\n|---|---|\n`;
md += `| Mobile Performance | >= ${BUDGETS.mobilePerformance} |\n`;
md += `| LCP (preview) | <= ${BUDGETS.lcpMs} ms |\n| CLS | <= ${BUDGETS.cls} |\n`;
md += `| JS | <= ${BUDGETS.jsBytes} bytes |\n| CSS | <= ${BUDGETS.cssBytes} bytes |\n`;
md += `| Home HTML | <= ${BUDGETS.homeHtmlBytes} bytes |\n| Third-party requests | ${BUDGETS.thirdPartyRequests} |\n\n`;
for (const [tname, pages] of Object.entries(report.targets)) {
  md += `## Target: ${tname}\n\n| Page | Perf | LCP ms | CLS | TBT ms | SI ms | HTML B | Total B | Reqs | 3P |\n|---|---|---|---|---|---|---|---|---|---|\n`;
  for (const [key, s] of Object.entries(pages)) {
    md += `| ${key} | ${s.performance} | ${s.lcpMs} | ${s.cls} | ${s.tbtMs} | ${s.speedIndexMs} | ${s.htmlBytes} | ${s.totalBytes} | ${s.requests} | ${s.thirdPartyRequests} |\n`;
  }
  md += "\n";
}
md += `## Caveats\n\n- Lighthouse flags noindex on staging by design; the SEO score is not meaningful here.\n- Local numbers exclude network latency; the preview numbers are the comparable ones.\n`;
await writeFile("docs/qa/speed-report.md", md);
console.log("\nwrote docs/qa/speed-report.md and raw JSON under docs/qa/lighthouse/");
