# QA plan — proof before the milestone is called done

Artifacts land in `docs/qa/` at M3. Nothing in this repo may claim a live ranking result; staging is noindex and produces no ranking signal.

## 1. Phone / NAP / CA-only / no-prices gate — `scripts/qa-phones.mjs`

Runs after every `astro build` (`npm run build` = `astro build && node scripts/qa-phones.mjs`). Walks every `*.html` under the build output and fails (exit 1) on:

| Check | Rule |
|---|---|
| Foreign phone numbers | Any `\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}` that is not `530-587-0733` / `(530) 587-0733` / `530.587.0733`. Allowlist: `1-877-860-6020` (Southwest Gas emergency line) only when the same paragraph contains "Southwest Gas". |
| `tel:` hrefs | Every `href="tel:…"` must equal `tel:+15305870733`. |
| Phone presence | Every page has ≥ 1 `tel:+15305870733` and ≥ 1 visible `530-587-0733`. |
| Forbidden geography | `Incline Village`, `Crystal Bay`, `Stateline`, `South Lake`, `Heavenly`, `Reno`, `Nevada`, ` NV ` — allowed only inside the exact exclusion sentence(s) from `site.ts` and the `/faqs/` "Do you serve the Nevada side" answer (allowlisted strings). |
| Prices | `$` immediately followed by a digit anywhere in visible text. (`priceRange` `$$` in JSON-LD is not followed by a digit.) |
| NAP presence | Every page contains `10647 Manchester Dr` and `1149344`. |
| Hours consistency | The hours string in visible text equals the `openingHoursSpecification` derived string (both from `site.ts`); the script asserts both appear on `/contact/`. |

Output: `docs/qa/phone-check.md` (page count, violations = 0, sample of matched `tel:` links, timestamp, commit SHA).

Manual click-to-call proof (M3, on the Vercel preview): desktop — hovering/inspecting the header CTA shows `tel:+15305870733`; mobile viewport (computer-use browser at 390×844) — tapping the CTA triggers the `tel:` handler (screenshot of the link target / intent). Saved as screenshots referenced from `docs/qa/phone-check.md`.

## 2. Route parity + links — `scripts/qa-links.mjs`

- For each line of `docs/crawl/sitemap-urls.txt` the built file exists.
- Every internal `href`/`src` resolves to a built file or a declared redirect.
- `astro.config.mjs` declares the three 301s.
- Each page: exactly one `<title>`, one `<h1>`, one canonical starting with `https://www.brimercon.com/`, one `<meta name="description">`, robots meta present when not indexable, `og:image` present, ≥ 1 JSON-LD block that parses.
- Title diff report vs `live-inventory.json` (intentional diffs enumerated in `docs/url-map.md`).

Output: `docs/qa/technical-seo-audit.md` (table of checks × pages, all green), plus the `curl -I` transcript from the preview for headers, redirects, robots, sitemap-404, og-image-200.

## 3. Lead form end-to-end — `scripts/qa-form.mjs`

Preconditions: `npm run build` (Node adapter) then `LEAD_STORE=file LEAD_STORE_PATH=.data/leads.jsonl LEAD_WEBHOOK_URL=http://127.0.0.1:8788/hook node dist/server/entry.mjs` and `node scripts/dev-webhook.mjs` (listens on 8788, writes `.data/webhook-received.jsonl`).

| Case | Request | Expect |
|---|---|---|
| Valid JSON | `POST /api/lead`, `Accept: application/json`, all fields | `200 { ok:true, id, deliveries:{ store:'sent', webhook:'sent', email:'skipped' } }`; line in `.data/leads.jsonl`; line in `.data/webhook-received.jsonl` with matching `id` |
| Valid form-encoded, no JS | `POST /api/lead`, `Accept: text/html`, `Origin` = host | `303`, `Location: /thank-you/?ref=<id>`; `GET` that URL → 200, contains "Request received" and `530-587-0733` |
| Honeypot | as valid JSON + `company_website=x` | `200 ok:true` **and no** new line in either JSONL (silent drop) |
| Time trap | `ts` = now − 500 ms | same silent drop |
| Missing phone | valid minus `phone` | `400 { ok:false, errors:{ phone:'…' } }` |
| Bad city | `city=Incline Village` | `400` (not in list) |
| Method | `GET /api/lead` | `405` |
| Out-of-area tag | `city=Other (CA side)`, `address=… Incline Village NV` | `200`, record has `outOfArea:true` |

Output: `docs/qa/form-e2e.md` — timestamped table of results, the redacted stored record, the webhook receipt, and the exact commands. Then repeated once manually in a browser on the Vercel preview (desktop + mobile) with a screenshot of the confirmation panel; if Milton has set `RESEND_API_KEY`, the inbox receipt is noted (never paste the key).

## 4. Speed — twin vs live — `scripts/qa-lighthouse.mjs`

Tool: `lighthouse` (npm, headless Chromium available in the sandbox; `npx lighthouse` fallback) with the default mobile preset and the desktop preset, 3 runs each, report the median.

Pages: `/`, `/services/water-heaters/`, `/service-areas/truckee/`, `/contact/`.

Targets: (a) twin served locally by `node dist/server/entry.mjs` — measures the page, not the network; (b) twin on the Vercel preview URL (M3) — includes CDN; (c) live `https://www.brimercon.com/…` — the comparison baseline (through Cloudflare + OTTO worker; note `Server-Timing cfWorker` ≈ 198 ms on the 2026-08-31 snapshot).

Metrics table per page × target: Performance score, LCP, CLS, TBT, Speed Index, HTML bytes, total transfer, requests, JS bytes, third-party requests. Also `curl -o /dev/null -w '%{size_download} %{time_starttransfer} %{time_total}'` for all 53 twin URLs vs live as a cheap full-surface size check.

Budgets (twin): mobile Performance ≥ 95; LCP ≤ 1.8 s on preview; CLS ≤ 0.02; JS ≤ 6 KB; CSS ≤ 25 KB; home HTML ≤ 60 KB; third-party requests = 0.

Known caveat to write in the report: Lighthouse's SEO category flags noindex on staging by design; the SEO score is taken from a local `PUBLIC_INDEXABLE=true` build that is never deployed. Local numbers exclude network latency; preview numbers are the comparable ones.

Output: `docs/qa/speed-report.md` with the tables, run timestamps, Lighthouse versions, and the JSON reports under `docs/qa/lighthouse/` (twin and live).

## 5. Staging deployment record — `docs/qa/staging.md`

Preview URL; Vercel project name (must not be the live project); Deployment Protection mode; env vars set (names only); `curl -I` proof of `x-robots-tag`, robots.txt body, `sitemap-index.xml` 404, og image 200, the three 301s, `/about` → `/about/`; commit SHA deployed; who deployed (Milton clicks; agents do not hold Vercel credentials).

## 6. Measurement hooks for later (read-only; nothing here runs in this phase)

Purpose: when Milton eventually swaps, Sierra and Atlas need a baseline to compare against. Record it now; do not touch the tools.

| Source | Baseline (date) | Later comparison |
|---|---|---|
| GSC via Search Atlas (`sc-domain:brimercon.com`), 18–26 Aug 2026 | `truckee plumber` 0 clicks / 98 imp / pos 1 (home); `plumber truckee ca` 0/63/16; `plumber truckee` 0/57/14; `water heater repair truckee ca` 0/50/25 (home); `water heater installation truckee ca` 0/47/25; `tankless water heaters truckee ca` 0/27/2; `emergency plumber truckee` 0/18/11 (Homewood) | Same queries 4–8 weeks post-swap: landing page should shift to `/service-areas/truckee/` and `/services/water-heaters/`; clicks on `truckee plumber` should be > 0 |
| Search Atlas project 149351 site explorer, 2026-08-31 | organic traffic 134, keywords 58, domain power 8, authority 12, backlinks 292, ref domains 166 | REST GET only; compare monthly |
| Search Atlas OTTO project `9f394db3…` | technical 96 / content 28 / authority 7 / ux 18; 53 pages; 531 issues; **0 deployed fixes** | Content score should rise with differentiated town pages; deployed fixes must stay 0 |
| Paige / GBP location `17760069811238782702` (account `108308067030756823909`) | last 28 days through 29 Aug: 20 calls, 24 website clicks, 59 direction requests, 501 impressions; reviews 4.97 / 32 (19 Sep) | `get_historical_metrics` monthly: website clicks and calls; site leads with `sourcePath` containing `utm_campaign=gbp` |
| Indexability | live: 53 in sitemap, 0 noindex, robots allow, og 404 | post-swap: `site:` ≈ 54, GSC coverage 0 excluded-by-noindex, og 200, canonical www, apex 308 |
| Leads | GHL form (error reported in a meeting; untested) | `/api/lead` records per week by `sourcePath`, `serviceContext`, `townContext`, `urgent` |

Explicit non-claims: staging traffic is zero by design; nothing here measures the twin's rankings until the swap; OTTO stays at 0 deploys; no GBP writes.

## 7. Browser QA (computer-use, M3, on the preview)

Desktop 1440×900 and mobile 390×844: home renders without horizontal scroll; nav toggle works; every header/footer link navigates; FAQ `<details>` open/close; form submit → confirmation; `tel:` link target; 404 page for `/nope/`; `/water-heater-services/` lands on water heaters. Screenshots saved and referenced from `docs/qa/staging.md`.
