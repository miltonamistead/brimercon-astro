# Technical SEO checklist — Astro twin

Each item lists the rule, where it lives in the code, and how it is verified. Verification is automated where possible (`scripts/qa-*.mjs`, `tests/`) and written up in `docs/qa/technical-seo-audit.md` at M3. "Live" facts come from `docs/crawl/` and `docs/source/2026-08-31_website_seo_for_rebuild.md`.

Boxes ticked here are done and verified in the current build; unticked items belong to a later milestone.

## A. Indexing controls (staging must never compete with live)

- [x] **Robots meta** — `noindex, nofollow` on every page unless `PUBLIC_INDEXABLE=true`; always on `/thank-you/` and `404`. Code: `Base.astro`. Verify: count of `<meta name="robots" content="noindex, nofollow">` in the build equals page count.
- [ ] **`X-Robots-Tag` header** — `noindex, nofollow` on `/(.*)` in `vercel.json` while staging. Verify: `curl -I <preview>/` shows it. Removal is a swap-runbook step.
- [x] **robots.txt allows crawling on staging** (audit H1) — staging: `User-agent: *` / `Allow: /` / `Disallow: /api/`, no `Sitemap:` line. Production adds the `Sitemap:` line. Code: `src/pages/robots.txt.ts`. Verify: `curl <preview>/robots.txt`.
  A crawler blocked by `robots.txt` never fetches the page, so it never reads the `noindex` meta tag or header, and the URL can still appear as a bare result. Allowing the crawl is what makes the noindex work. Public reachability is handled by **Vercel Deployment Protection**, which is required on the staging project, not optional.
- [ ] **Deployment Protection** — Vercel Authentication or password on the staging project; no production domain attached before the swap. A Protection Bypass token may be issued for automated QA (`x-vercel-protection-bypass`); never commit it. Record the mode in `docs/qa/staging.md`.
- [ ] **Sitemap** — none on staging; on indexable builds `sitemap-index.xml` + `sitemap-0.xml` with the 53 canonical URLs + `/service-areas/martis-valley/`, excluding `/thank-you/`, `/api/*`, `404`. Code: `@astrojs/sitemap` `filter` + `customPages`. Verify: local `PUBLIC_INDEXABLE=true npm run build`, diff `sitemap-0.xml` locs against `docs/crawl/sitemap-urls.txt` (expect +1 Martis Valley, 0 missing).
- [ ] **Canonical** — `<link rel="canonical" href="https://www.brimercon.com/<path>">` absolute, www, trailing slash, one per page. Code: `canonicalUrl()` in `site.ts`. Verify: every page has exactly one canonical and it starts with the canonical origin.

## B. Titles, descriptions, headings

- [ ] **Titles** identical to live for all 53 URLs (they rank; `truckee plumber` pos 1). Source: `live-inventory.json`. Verify: `scripts/qa-links.mjs` compares `<title>` per path to the inventory and reports diffs (intentional diffs listed in `docs/url-map.md`).
- [ ] **Meta descriptions** — live text by default; ≤ 160 chars; unique per page. `/request-service/` live description is truncated ("…and we") — fix it.
- [ ] **One H1 per page**, ≤ 70 chars, matches intent. Changes vs live: `/services/water-heaters/` → "Water heater repair and installation in Truckee and North Lake Tahoe". Homewood: unchanged. Verify: count `<h1>` == 1 per page.
- [ ] **Heading order** — H2 for sections, H3 inside cards/FAQs; no skipped levels.

## C. URLs and redirects

- [ ] Trailing slash always; `build.format: 'directory'`; `vercel.json` `"trailingSlash": true`. Verify: `curl -I <preview>/about` → 308 → `/about/`.
- [ ] 301s: `/water-heater-services/`, `/water-heater-services`, `/sitemap.xml`. Verify: `curl -I` each on preview; also present in `astro.config.mjs` (`scripts/qa-links.mjs`).
- [ ] No internal link to a 404: Martis Valley resolves; `scripts/qa-links.mjs` walks every `href`.
- [ ] Internal links root-relative (`/services/…`), never `https://www.brimercon.com/…` (would send staging users to live and confuse crawlers).
- [ ] Custom `404.astro` with phone + top links; Vercel serves it for unknown paths.

## D. Structured data (JSON-LD, one `<script type="application/ld+json">` per node, built in `src/lib/schema.ts`)

- [ ] **`Plumber`** (`@id: https://www.brimercon.com/#business`) on every page (compact) and in full on `/` and `/contact/`: `name`, `legalName` (Clearline Services LLC), `url`, `telephone: +15305870733`, `email`, `address` (Manchester), `geo`, `identifier` (CSLB 1149344 as `PropertyValue`), **`logo` + `image`** (live gap), `foundingDate: 1997`, `priceRange: $$` (schema token as on live, not a dollar price), `openingHoursSpecification` 07:00 to 20:00 Mon to Sun (same constant as visible text, decision D1), `sameAs` (Google Maps place URL, Yelp), **`areaServed`: all 24 CA towns as `City` with `containedInPlace` `State: California`** (live has four). **No `AggregateRating`/`Review`** (audit H10: reviews appear on the page, not as self-serving markup).
- [ ] **`Service`** on each service page: `name`, `serviceType`, `provider → #business`, `areaServed` (the CA town list), `url`, `description`. Also an `ItemList` of six on `/services/` (live hub has none).
- [ ] **`FAQPage`** wherever FAQs are visible: `/`, `/faqs/`, six service pages, 24 town pages (six Q&As each from `town-facts.json`). Answers must match visible text exactly.
- [ ] **`BreadcrumbList`** on services, towns, blog posts — **every `ListItem` has `item` URL** (live drops the last one).
- [ ] **`BlogPosting`** on posts: `headline`, `datePublished` (from live dates in `url-map.md`), `dateModified`, `author`/`publisher` = Organization Brimer Plumbing, `image` = og image, `mainEntityOfPage`.
- [ ] Town pages: `Service` with `areaServed` = that `City` (CA) + `FAQPage` + `BreadcrumbList`.
- [ ] Validate with `npx schema-dts`-style typing at build (or a JSON parse + required-keys check in `scripts/qa-links.mjs`) and spot-check three pages in Google's Rich Results Test on the preview (manual, M3).

## E. Social / Open Graph

- [ ] `og:title`, `og:description`, `og:type` (`website`; `article` on posts), `og:url` = canonical, `og:site_name`, `og:locale: en_US`, `twitter:card: summary_large_image`, `og:image` + `twitter:image` = `https://www.brimercon.com/images/og-default.jpg` **and the file exists** (1200×630 JPEG, generated by `scripts/make-og.mjs`; placeholder branded card until the photo shoot — noted in README). Verify: `curl -I <preview>/images/og-default.jpg` → 200 `image/jpeg`.

## F. Images and media

Carry decision and defect list: `docs/design.md` §1 (audit H6 reverses the earlier "no live images" plan).

- [x] Brimer's existing images carried into `public/images/`: **30 files, 29 unique**. `scripts/fetch-live-images.mjs` reproduces it from `docs/crawl/images.json`.
- [x] **`reliability-for-every-season.png` excluded** — a Heavenly gondola at South Lake Tahoe, out of area, and its live alt text describes a different scene. It is referenced on 22 live pages, so each of those blocks needs a replacement image or none.
- [x] **`og-default.jpg` generated** (1200×630, ~45 KB) by `scripts/make-og.mjs`. Live 404s on this file, so every share card on brimercon.com is currently blank. Placeholder until the photo shoot.
- [ ] Every `<img>` has explicit `width`/`height`, honest `alt` (empty only for decorative), `loading="lazy"` below the fold, `decoding="async"`; header logo `fetchpriority="high"`.
- [ ] **Town hero alts written per town** — all 24 ship empty `alt` on live. The alt describes the actual frame; the brief in `docs/town-briefs.md` §3 has a field for it.
- [ ] Re-encode the five JPEG-bytes-in-a-`.png`-filename marketing files to WebP/JPEG with matching `Content-Type` and correct intrinsic dimensions (`design-forward-fixture-performance.png` is declared 1024×1024 and is actually 1024×682). `sharp` is already a dependency.
- [ ] Collapse the duplicate background (`footer-bg-premium.png` and `ready-to-get-started-bg.png` are byte-identical) to one path.
- [ ] No empty-`src` avatar images (live has one).
- [ ] Images sit **below** the first screen on mobile so they never push the call button down (`PLAN.md` §3b).
- [x] `favicon.svg` present; `apple-touch-icon` to add.

## G. Performance-related technical items (details in `docs/qa-plan.md` §4)

- [ ] No third-party scripts on staging (no `msgsndr`, no reCAPTCHA, no OTTO meta/worker, GA4 env-gated).
- [ ] One stylesheet ≤ 25 KB, critical CSS small; system font stack (no webfont requests) in M1.
- [ ] Client JS ≤ 6 KB total (form enhancer + nav toggle), `type="module"`, deferred.
- [ ] HTML ≤ 60 KB on home (live: 133 KB).
- [ ] Cache headers: Vercel defaults for static assets (immutable hashed `_astro/*`); HTML `public, max-age=0, must-revalidate`.

## H. Security / hygiene headers (`vercel.json`)

- [ ] `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`, `X-Frame-Options: DENY` (no embeds needed). CSP deferred to M4 (needs GA4/Turnstile decisions).

## I. NAP consistency (enforced by `scripts/qa-content.mjs`)

- [x] Visible footer NAP on every page: `10647 Manchester Dr, Truckee, CA 96161` (live shows the street only on `/contact/`).
- [x] Phone `530-587-0733` visible and `tel:+15305870733` linked on every page: header, first-screen call button, fixed call bar, footer.
- [x] Email `service@brimerplumbing.com`.
- [x] CSLB line on every page: `CA CSLB License #: 1149344`. **No Nevada sentence** (audit B2/H9): the twin names the California towns it serves instead of excluding a state.
- [x] Hours identical in the footer, the first screen, and (once built) JSON-LD, from one constant in `site.ts` (decision D1), with the after-hours line: *Call 530-587-0733 any time. If we miss you, leave a message.*
- [ ] Off-site NAP note for Milton (not a site task): the CATT directory lists PO Box 9297 and an `http://` URL. Align when an editor can.

## J. Accessibility (Lighthouse a11y 100 target)

- [ ] Skip link, landmark regions, `lang="en"`, focus-visible styles, colour contrast ≥ 4.5:1, nav toggle with `aria-expanded`, FAQ `<details>`/`<summary>` (no JS), form labels/errors associated via `aria-describedby`.

## K. Things this twin deliberately does **not** do

- No `AggregateRating` or `Review` schema.
- No out-of-area place names in customer copy at all. There is no exclusion sentence to carve out any more: "Nevada County" and "Sierra Nevada" are the only permitted matches, because both are California names.
- No dollar prices; `priceRange: "$$"` schema token only.
- No em or en dashes, and no unapproved speed claims ("same day", "priority", "fastest", "24/7") — `PLAN.md` §3c.
- No OTTO meta tag; no Search Atlas snippet (the Granola note about installing the "Search Atlas auto snippet" predates the "review before deploy" hold — swap-time decision D9).
- No change to `/service-areas/homewood/` title/H1/intent.
- No new town or emergency URLs.
