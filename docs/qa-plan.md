# QA plan — proof before a milestone is called done

Artifacts land in `docs/qa/`. Nothing in this repo may claim a live ranking result: staging is noindex and produces no ranking signal.

Gate status today (M0): content gate green, first-screen gate green on every template that exists. The other gates are specified here and are built with the milestone they guard.

| Gate | Script | Runs | Status |
|---|---|---|---|
| Content (phone, geography, price, dash, NAP) | `scripts/qa-content.mjs` | every `npm run build` | ✅ built, passing |
| First screen | `tests/first-screen.spec.ts` | `npm run qa:first-screen` | ✅ built, passing on built templates |
| Lead form E2E | `scripts/qa-form.mjs` | M1 | specified below |
| Route parity and links | `scripts/qa-links.mjs` | M2 | specified below |
| Town similarity | `scripts/qa-similarity.mjs` | M2 | specified in `docs/town-briefs.md` §5 |
| Speed | `scripts/qa-lighthouse.mjs` | M3 | specified below |

## 1. Content gate — `scripts/qa-content.mjs`

Runs after every `astro build`. Walks all built HTML, strips scripts, styles and tags, decodes entities, and fails on:

| Rule | Detail |
|---|---|
| phone | Any phone-shaped string that is not `530-587-0733`. The Southwest Gas emergency line `1-877-860-6020` is excused only on pages that name Southwest Gas. Every `tel:` href must be `+15305870733`, and every page must carry at least one click-to-call plus the visible number. |
| geography | Out-of-area place names, matched **whole-word and case-sensitive**: `Nevada`, `Incline Village`, `Incline`, `Crystal Bay`, `Stateline`, `South Lake`, `Heavenly`, `Reno`. Plus `" NV "`. |
| price | `$` followed by a digit in visible copy. (`priceRange: "$$"` in JSON-LD is not.) |
| dash | Em dash or en dash in visible copy, literal or as `&mdash;` / `&ndash;`. |
| nap | Every page carries `10647 Manchester Dr` and CSLB `1149344`. |

**Allowed, and deliberately so** (audit B2): **"Nevada County"** and **"Sierra Nevada"** are masked before the `Nevada` test — both are California names, and Norden and Soda Springs permit through the Nevada County Community Development Agency. Case-sensitive whole-word matching is what keeps "renovation" from tripping "Reno". The gate does **not** require an exclusion sentence anywhere; the old "California side only" and "Not licensed in Nevada" wording is gone from customer copy (audit B2/H9).

Verified in both directions on 2026-09-19: a fixture with a wrong phone number, six out-of-area names, a dollar figure, dash entities and a missing NAP produced 13 violations and exit 1; a fixture containing "Nevada County", "Sierra Nevada" and "Renovation" passed clean. The real build passed all five rules.

Report: `node scripts/qa-content.mjs --report docs/qa/phone-check.md`.

Manual click-to-call proof (M3, on the preview): desktop link target, and a 390×844 tap. Screenshots referenced from `docs/qa/phone-check.md`.

## 2. First-screen gate — `tests/first-screen.spec.ts`

Enforces the contract in `PLAN.md` §3b at 390×844 using the machine's installed Chrome (no Playwright browser download). Targets: `/`, `/services/water-heaters/`, `/service-areas/truckee/`, `/contact/`, and the 404 template. A target that is not built yet is **skipped with a reason**, never counted as a pass.

Per target:

1. `data-fs` markers `h1`, `area`, `call`, `hours`, `trust` are present, visible, and start within the first **640px**, in that document order.
2. The call button links to `tel:+15305870733` and spans more than 80% of the viewport width.
3. The form link is visible, sits **below** the call button, has font-weight under 600, and is shorter than the call button.
4. The call bar is `position: fixed`, links to `tel:+15305870733`, and its bottom edge is flush with the viewport bottom.

Run: `npm run build && npm run serve` (port 4322), then `npm run qa:first-screen`. Against a protected Vercel preview: `BASE_URL=https://<preview> VERCEL_PROTECTION_BYPASS=<token> npm run qa:first-screen`.

Measured on the 404 template on 2026-09-19: H1 77px, area 121px, call 306px (358px wide of 390px), form link 370px, hours 407px, trust 467px, call bar pinned at 780px. 4 passed, 16 skipped for templates not yet built.

## 3. Route parity and links — `scripts/qa-links.mjs` (M2)

- Every line of `docs/crawl/sitemap-urls.txt` has a built file.
- Every internal `href`/`src` resolves to a built file or a declared redirect.
- `astro.config.mjs` declares the redirects in `docs/url-map.md` §2.
- Per page: one `<title>`, one `<h1>`, one canonical on the live origin, one meta description, robots meta when not indexable, an `og:image`, and at least one JSON-LD block that parses.
- Title diff against `docs/crawl/live-inventory.json`; intentional differences are listed in `docs/url-map.md`.

## 4. Lead form end-to-end — `scripts/qa-form.mjs` (M1)

Preconditions: `npm run build`, then serve with `LEAD_STORE=file LEAD_STORE_PATH=.data/leads.jsonl LEAD_WEBHOOK_URL=http://127.0.0.1:8788/hook`, plus `node scripts/dev-webhook.mjs`.

| Case | Request | Expect |
|---|---|---|
| Valid JSON | `POST /api/lead/`, `Accept: application/json` | `200 { ok: true, id, deliveries }`; webhook receives a matching `id` |
| Valid form-encoded, no JS | `POST /api/lead/`, `Accept: text/html` | `303` to `/thank-you/?ref=<id>`; that page renders and shows the phone |
| Trailing slash | `POST /api/lead` (no slash) | Documented behaviour; the form never posts here (audit H4) |
| Honeypot | valid plus `company_website=x` | `200`, and **nothing** delivered |
| Time trap | `ts` = now minus 500 ms | same silent drop |
| Missing phone | valid minus `phone` | `400` with a field error |
| Missing message | valid minus `message` | `400` with a field error |
| Browser error rendering | `400` with `Accept: text/html` | **HTML page** with the call button, not raw JSON (audit H5) |
| Cross-site `source_path` | `source_path=https://evil.test/x` | accepted but discarded; record shows a same-site path |
| Delivery failure | webhook down, no email key, `LEAD_REQUIRE_DELIVERY=true` | `503` and the call-us page; no "Request received" (audit H2) |
| Method | `GET /api/lead/` | `405` |

Output: `docs/qa/form-e2e.md` with timestamps, redacted payloads and the exact commands. Repeated once by hand on the preview at desktop and 390px, with a screenshot of the confirmation. If `RESEND_API_KEY` is set, note the inbox receipt; never paste the key.

## 5. Speed — twin versus live — `scripts/qa-lighthouse.mjs` (M3)

Lighthouse (npm, driving the installed Chrome), mobile and desktop presets, 3 runs each, median reported.

Pages: `/`, `/services/water-heaters/`, `/service-areas/truckee/`, `/contact/`.
Targets: (a) the twin served locally by `npm run serve`; (b) the twin on the Vercel preview; (c) live `https://www.brimercon.com/...` as the baseline (through Cloudflare and the OTTO worker, which measured ~198 ms of `cfWorker` time in the 2026-08-31 snapshot).

Record per page and target: Performance score, LCP, CLS, TBT, Speed Index, HTML bytes, total transfer, requests, JS bytes, third-party requests. Plus a cheap full-surface check across all 53 URLs with `curl -w '%{size_download} %{time_starttransfer} %{time_total}'`.

Budgets for the twin: mobile Performance ≥ 95, LCP ≤ 1.8 s on the preview, CLS ≤ 0.02, JS ≤ 6 KB, CSS ≤ 25 KB, home HTML ≤ 60 KB, third-party requests 0.

Caveat to state in the report: Lighthouse's SEO category flags noindex on staging by design. The SEO score is taken from a local `PUBLIC_INDEXABLE=true` build that is never deployed. Local numbers exclude network latency; the preview numbers are the comparable ones.

Output: `docs/qa/speed-report.md` plus raw JSON under `docs/qa/lighthouse/`.

## 6. Staging deployment record — `docs/qa/staging.md` (M3)

Preview URL; Vercel project name (must not be the live project); **Deployment Protection mode, which is required, not optional**; whether a Protection Bypass token was issued for automation; env var names set (never values); `curl -I` proof of `x-robots-tag`, the `robots.txt` body showing `Allow: /`, `sitemap-index.xml` returning 404, `og-default.jpg` returning 200, the 301s, and `/about` redirecting to `/about/`; the commit SHA deployed; and confirmation that **no production domain is attached**.

## 7. Measurement hooks for later (read-only)

Baselines to compare against after a future swap. Nothing here runs in this phase; no OTTO deploys, no GBP writes.

| Source | Baseline | Later comparison |
|---|---|---|
| GSC via Search Atlas, 18 to 26 Aug 2026 | `truckee plumber` 0 clicks / 98 impressions / pos 1 (home); `plumber truckee ca` 0/63/16; `plumber truckee` 0/57/14; `water heater repair truckee ca` 0/50/25 (home); `water heater installation truckee ca` 0/47/25; `tankless water heaters truckee ca` 0/27/2; `emergency plumber truckee` 0/18/11 (Homewood) | Same queries 4 to 8 weeks post-swap: landing pages should shift to `/service-areas/truckee/` and `/services/water-heaters/`, and `truckee plumber` should convert impressions into clicks |
| Search Atlas project 149351, 2026-08-31 | organic traffic 134, keywords 58, domain power 8, authority 12, backlinks 292, referring domains 166 | REST GET only, monthly |
| OTTO project `9f394db3...` | technical 96, content 28, authority 7, ux 18; 53 pages; 531 issues; **0 deployed fixes** | Content score should rise with differentiated town pages. Deployed fixes stay 0. |
| Paige / GBP location `17760069811238782702` | 28 days to 29 Aug: 20 calls, 24 website clicks, 59 direction requests, 501 impressions; reviews 4.97 across 32 (19 Sep) | `get_historical_metrics` monthly. The GBP website link carries `utm_campaign=gbp`, and the lead record stores `sourcePath`, so GBP-sourced leads are attributable. |
| Indexability | live: 53 in sitemap, 0 noindex, robots allow, og:image 404 | post-swap: `site:` count ≈ 54, zero "excluded by noindex", og:image 200 |
| Leads | GHL form, error reported in a meeting, untested | `/api/lead/` volume per week by `sourcePath`, `serviceContext`, `townContext` |

## 8. Browser QA (M3, on the preview)

Desktop 1440×900 and mobile 390×844: no horizontal scroll; every header and footer link navigates; FAQ open and close without JS; form submit reaches the confirmation; the call bar stays pinned while scrolling; `tel:` targets; `/nope/` renders the custom 404; `/water-heater-services/` lands on water heaters. Screenshots referenced from `docs/qa/staging.md`.
