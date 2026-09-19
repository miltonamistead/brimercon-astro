# Crawl artifacts — live brimercon.com, read-only, 2026-09-19 ~12:20 UTC

These files are the factual source for the twin. Nothing was written to the live site; requests were plain `GET`s with a descriptive User-Agent from the Cloud Agent sandbox.

| File | What | How to refresh |
|---|---|---|
| `sitemap-urls.txt` | The 53 `<loc>` entries of `https://www.brimercon.com/sitemap-0.xml` | `curl -s https://www.brimercon.com/sitemap-0.xml \| grep -oP '(?<=<loc>)[^<]+'` |
| `live-inventory.json` | Per URL: status, `<title>`, H1, meta description, canonical, robots meta, `og:image`, JSON-LD `@type`s, HTML bytes, `article:published_time` | Python snippet in the PR description / rerun the executor's `scripts/crawl-live.mjs` (M0 optional) |
| `town-facts.json` | Per town: live title/H1/lede/overview, elevation strings found, named entities (TDPUD, NTPUD, TCPUD, NCSD, TSD, TTSA, Southwest Gas, Liberty Utilities, Placer County, Nevada County, Town of Truckee), permit-authority phrases, and the six FAQ Q&A pairs (144 total) | same |
| `live-robots.txt` | Origin `robots.txt` (Cloudflare adds AI-bot blocks at the edge; not present in the origin file) | `curl -s https://www.brimercon.com/robots.txt` |

Also observed (not stored as files): `/service-areas/martis-valley/` 404; `/water-heater-services/` 404; `/thank-you/` 200 with `noindex, nofollow` and title "Order — Brimer Plumbing"; `/join/` 404; `/images/og-default.jpg` 404; live logo `/images/brimer-logo.png` is a real 564×210 PNG (copied into `public/images/` at M0 — it is Brimer's own logo).

Usage rules for executors:

- Town copy is **rewritten** against these facts, not pasted. Keep every fact (elevation, utility, permit authority) exactly as recorded; do not add facts that are not here or in the GBP record.
- Titles come from `live-inventory.json` unless `docs/url-map.md` says otherwise.
- Do not copy live images other than the logo.
- The FAQ answers in `town-facts.json` mention "clear pricing" and "costs less than" in the winterization question — that is fine (no dollar figures). Never add a dollar amount.
