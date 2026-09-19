# Technical SEO checklist — Astro twin

Each item lists the rule, where it lives in the code, and how it is verified. Verification is automated where possible (`scripts/qa-*.mjs`) and written up in `docs/qa/technical-seo-audit.md` at M3. "Live" facts come from `docs/crawl/live-inventory.json` and `uploads/2026-08-31_website_seo_for_rebuild.md`.

## A. Indexing controls (staging must never compete with live)

- [ ] **Robots meta** — `noindex, nofollow` on every page unless `PUBLIC_INDEXABLE=true`; always on `/thank-you/` and `404`. Code: `Base.astro` via `src/lib/seo.ts`. Verify: grep `dist/` — count of `<meta name="robots" content="noindex, nofollow">` equals page count.
- [ ] **`X-Robots-Tag` header** — `noindex, nofollow` on `/(.*)` in `vercel.json` while staging. Verify: `curl -I <preview>/` shows it. Removal is a swap-runbook step.
- [ ] **robots.txt** — staging: `User-agent: *` / `Disallow: /` and `Disallow: /api/`, no `Sitemap:`. Production: `Allow: /`, `Disallow: /api/`, `Sitemap: https://www.brimercon.com/sitemap-index.xml` (mirrors `docs/crawl/live-robots.txt`; the AI-bot blocks on live are Cloudflare-managed, not origin). Code: `src/pages/robots.txt.ts`. Verify: `curl <preview>/robots.txt`.
- [ ] **Sitemap** — none on staging; on indexable builds `sitemap-index.xml` + `sitemap-0.xml` with the 53 canonical URLs + `/service-areas/martis-valley/`, excluding `/thank-you/`, `/api/*`, `404`. Code: `@astrojs/sitemap` `filter` + `customPages`. Verify: local `PUBLIC_INDEXABLE=true npm run build`, diff `sitemap-0.xml` locs against `docs/crawl/sitemap-urls.txt` (expect +1 Martis Valley, 0 missing).
- [ ] **Canonical** — `<link rel="canonical" href="https://www.brimercon.com/<path>">` absolute, www, trailing slash, one per page. Code: `canonicalUrl()` in `site.ts`. Verify: every page has exactly one canonical and it starts with the canonical origin.
- [ ] **Vercel Deployment Protection** — recommended on the staging project (D8). Verify: unauthenticated `curl` returns 401 when enabled; note mode in `docs/qa/staging.md`.

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

- [ ] **`Plumber`** (`@id: https://www.brimercon.com/#business`) on every page (compact) and in full on `/` and `/contact/`: `name`, `legalName` (Clearline Services LLC), `url`, `telephone: +15305870733`, `email`, `address` (Manchester), `geo`, `identifier` (CSLB 1149344 as `PropertyValue`), **`logo` + `image`** (live gap), `foundingDate: 1997`, `priceRange: $$` (schema token as on live — not a dollar price), `openingHoursSpecification` 07:00–20:00 Mon–Sun (same constant as visible text), `sameAs` (Google Maps place URL, Yelp), **`areaServed`: all 24 CA towns as `City` with `containedInPlace` `State: California`** (live has four). **Never** Nevada. **No `AggregateRating`/`Review`** (not invented; Google does not surface self-serving LocalBusiness review markup).
- [ ] **`Service`** on each service page: `name`, `serviceType`, `provider → #business`, `areaServed` (the CA town list), `url`, `description`. Also an `ItemList` of six on `/services/` (live hub has none).
- [ ] **`FAQPage`** wherever FAQs are visible: `/`, `/faqs/`, six service pages, 24 town pages (six Q&As each from `town-facts.json`). Answers must match visible text exactly.
- [ ] **`BreadcrumbList`** on services, towns, blog posts — **every `ListItem` has `item` URL** (live drops the last one).
- [ ] **`BlogPosting`** on posts: `headline`, `datePublished` (from live dates in `url-map.md`), `dateModified`, `author`/`publisher` = Organization Brimer Plumbing, `image` = og image, `mainEntityOfPage`.
- [ ] Town pages: `Service` with `areaServed` = that `City` (CA) + `FAQPage` + `BreadcrumbList`.
- [ ] Validate with `npx schema-dts`-style typing at build (or a JSON parse + required-keys check in `scripts/qa-links.mjs`) and spot-check three pages in Google's Rich Results Test on the preview (manual, M3).

## E. Social / Open Graph

- [ ] `og:title`, `og:description`, `og:type` (`website`; `article` on posts), `og:url` = canonical, `og:site_name`, `og:locale: en_US`, `twitter:card: summary_large_image`, `og:image` + `twitter:image` = `https://www.brimercon.com/images/og-default.jpg` **and the file exists** (1200×630 JPEG, generated by `scripts/make-og.mjs`; placeholder branded card until the photo shoot — noted in README). Verify: `curl -I <preview>/images/og-default.jpg` → 200 `image/jpeg`.

## F. Images and media

- [ ] Only Brimer's logo (`/images/brimer-logo.png`, real PNG 564×210) plus the generated OG card in M1–M3. No live stock/lifestyle JPEG-in-PNG files; **the Heavenly/South Lake "reliability-for-every-season.png" is never copied.**
- [ ] Every `<img>` has explicit `width`/`height`, honest `alt` (empty only for decorative), `loading="lazy"` below the fold, `decoding="async"`; hero logo `fetchpriority="high"`.
- [ ] No empty-`src` avatar images (live has one).
- [ ] When the photo shoot lands (M4): JPEG/WebP with matching `Content-Type`, `srcset`, alts that describe the file; town heroes get real alts (live heroes have empty alts).
- [ ] `favicon.svg` + `apple-touch-icon` present.

## G. Performance-related technical items (details in `docs/qa-plan.md` §4)

- [ ] No third-party scripts on staging (no `msgsndr`, no reCAPTCHA, no OTTO meta/worker, GA4 env-gated).
- [ ] One stylesheet ≤ 25 KB, critical CSS small; system font stack (no webfont requests) in M1.
- [ ] Client JS ≤ 6 KB total (form enhancer + nav toggle), `type="module"`, deferred.
- [ ] HTML ≤ 60 KB on home (live: 133 KB).
- [ ] Cache headers: Vercel defaults for static assets (immutable hashed `_astro/*`); HTML `public, max-age=0, must-revalidate`.

## H. Security / hygiene headers (`vercel.json`)

- [ ] `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`, `X-Frame-Options: DENY` (no embeds needed). CSP deferred to M4 (needs GA4/Turnstile decisions).

## I. NAP consistency (also enforced by `scripts/qa-phones.mjs`)

- [ ] Visible footer NAP on every page: `10647 Manchester Dr, Truckee, CA 96161` (live shows the street only on `/contact/`).
- [ ] Phone `530-587-0733` visible + `tel:+15305870733` on every page; header CTA + footer + emergency band.
- [ ] Email `service@brimerplumbing.com`.
- [ ] CSLB line on every page: `CA CSLB License #: 1149344 · Licensed in California only. Not licensed in Nevada.`
- [ ] Hours string identical in footer, `/contact/`, and JSON-LD (single constant; D1).
- [ ] Off-site NAP note for Milton (not a site task): CATT directory lists PO Box 9297 and `http://` — align when an editor can.

## J. Accessibility (Lighthouse a11y 100 target)

- [ ] Skip link, landmark regions, `lang="en"`, focus-visible styles, colour contrast ≥ 4.5:1, nav toggle with `aria-expanded`, FAQ `<details>`/`<summary>` (no JS), form labels/errors associated via `aria-describedby`.

## K. Things this twin deliberately does **not** do

- No `AggregateRating` or `Review` schema.
- No Nevada/Incline/Crystal Bay/Stateline/South Lake/Reno/Heavenly strings except the exclusion sentence.
- No dollar prices; `priceRange: "$$"` schema token only.
- No OTTO meta tag; no Search Atlas snippet (the Granola note about installing the "Search Atlas auto snippet" predates the "review before deploy" hold — swap-time decision D9).
- No change to `/service-areas/homewood/` title/H1/intent.
- No new town or emergency URLs.
