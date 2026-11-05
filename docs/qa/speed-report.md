# Speed report

Generated: 2026-09-22 (M3). Full Lighthouse runs need a working Chrome; the
sandbox's only Chromium cannot render headless (see `docs/qa/first-screen.md`
note), so this report records the static budget audit plus the cheap
full-surface curl check from the QA plan. `scripts/qa-lighthouse.mjs` is built
and ready to run where Chrome works (`npm run qa:lighthouse`).

## Static budget audit (from `dist/`)

| Budget | Target | Actual | Verdict |
|---|---|---|---|
| JS | <= 6,144 bytes | **0 bytes** (no JS files ship at all) | PASS |
| CSS | <= 25,600 bytes | **7,815 bytes** (`_astro/Base.*.css`, single file) | PASS |
| Home HTML | <= 61,440 bytes | **23,716 bytes** | PASS |
| Third-party requests | 0 | **0** (no external scripts, styles, fonts, or images; only outbound links to Google Maps and Yelp) | PASS |

The site ships zero JavaScript: FAQ uses native `<details>`, the lead form posts
without JS, the call bar is CSS. There is nothing for Lighthouse to flag on the
JS/CSS budgets.

## Full-surface curl check (local serve, 2026-09-22)

`curl -w '%{size_download} %{time_starttransfer} %{time_total}'` against every
built route on `http://127.0.0.1:4322` (56 pages). Raw CSV:
`docs/qa/lighthouse/full-surface-local.csv`.

| Route group | HTML bytes | TTFB | Total |
|---|---|---|---|
| `/` | 23,716 | 1.3 ms | 1.3 ms |
| Service pages (6) | 17,938–20,147 | ~1 ms | ~1 ms |
| Town pages (24) | 25,004–28,686 | ~1 ms | ~1 ms |
| Blog (11) | 10,033–13,303 | 1–3 ms | 1–3 ms |
| Core (`/about/`, `/contact/`, `/faqs/`, `/reviews/`, `/membership/`, `/resources/`, `/request-service/`, `/service-areas/`, `/service-areas/martis-valley/`) | 10,377–18,477 | 1–2 ms | 1–2 ms |
| Utility (`/privacy-policy/`, `/terms-of-use/`, `/thank-you/`) | 5,836–7,281 | 1–2 ms | 1–2 ms |

Every page is under 29 KB HTML and answers in single-digit milliseconds on
loopback. Largest pages are the town pages (rich FAQ content), still under half
the 60 KB home budget.

## Still to do (needs working Chrome or the Vercel preview)

- `scripts/qa-lighthouse.mjs`: 3 runs x mobile/desktop on `/`,
  `/services/water-heaters/`, `/service-areas/truckee/`, `/contact/` against
  local, preview, and live; median reported.
- Preview numbers are the comparable ones; local numbers exclude latency.
- Lighthouse SEO category will flag noindex on staging by design; take the SEO
  score from a local `PUBLIC_INDEXABLE=true` build that is never deployed.
