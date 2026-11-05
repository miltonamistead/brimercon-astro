# Crawl artifacts — live brimercon.com, read-only

Regenerate with `npm run crawl` (`scripts/crawl-live.mjs`). Current snapshot: **2026-09-19**.

Read-only by construction: plain `GET`s with a descriptive User-Agent, no cookies, no POSTs, no authenticated calls. Nothing here touches the live site.

| File | What | Notes |
|---|---|---|
| `sitemap-urls.txt` | The 53 `<loc>` entries from `sitemap-0.xml` | The parity target for `scripts/qa-links.mjs` |
| `live-inventory.json` | Per URL: status, title, H1, meta description, canonical, robots meta, `og:image`, JSON-LD `@type`s, HTML bytes, `Last-Modified`, publish date | Source for titles and the title-diff check |
| `pages/*.txt` | **Main-content text of all 53 pages**, header/nav/footer stripped | Audit B3. Filenames use `__` for a path separator: `services__water-heaters.txt` |
| `town-facts.json` | Per town: title, H1, lede, overview, elevations, named utilities and agencies, permit authority, and the six FAQs (144 total) | Feeds `src/data/towns.ts` and the briefs in `docs/town-briefs.md` |
| `images.json` | Every referenced image with HTTP status, bytes, `Content-Type`, all alt texts, and which pages use it | Drives `scripts/fetch-live-images.mjs` and `docs/design.md` |
| `live-robots.txt` | Origin `robots.txt` | Cloudflare adds AI-bot blocks at the edge; they are not in the origin file |

Recorded observations that are not files: `/service-areas/martis-valley/` 404; `/water-heater-services/` 404; `/thank-you/` 200 with `noindex, nofollow` and the title "Order — Brimer Plumbing"; `/join/` 404; `/images/og-default.jpg` 404 while every page references it as `og:image`.

## Rules for executors

- **Facts only from here or the GBP record.** Elevations, water and sewer districts, permit authorities and neighbourhood names come from `town-facts.json`. Do not add facts that are not recorded, and do not move a fact from one town to another.
- **Copy is rewritten, not pasted**, and only where `PLAN.md` §3c allows it. The homepage keeps its live copy. Service and town rewrites wait for golden-page approval.
- Titles come from `live-inventory.json` unless `docs/url-map.md` says otherwise.
- Images: `npm run images` carries the approved set. The exclusion list lives in `scripts/fetch-live-images.mjs` and is explained in `docs/design.md`.
- The live FAQ copy mentions "clear pricing" with no figures, which is fine. Never introduce a dollar amount.
- Live copy contains em dashes and "California side only" phrasing. Both are removed on the way in (`PLAN.md` §3c); the build gate enforces it.
