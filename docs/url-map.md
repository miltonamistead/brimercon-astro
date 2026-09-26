# URL map — live brimercon.com → Astro twin

Source: `docs/crawl/`, regenerated read-only with `npm run crawl` on 2026-09-19 (all 53 returned HTTP 200; no `robots` meta on any of them; every `og:image` points at `/images/og-default.jpg`, which is 404). Per-URL titles, descriptions, H1s and JSON-LD types are in `live-inventory.json`; the main-content text of each page is in `docs/crawl/pages/`. This table lists H1 and the twin's action.

Rules applied here:

- Same path string for every live URL. Trailing slash always. Canonical `https://www.brimercon.com/<path>`.
- Titles preserved by default. H1 changes only where `docs/source/2026-08-31_website_seo_for_rebuild.md` calls for one.
- **The homepage keeps its live title, H1 and body copy** (it ranks position 1 for `truckee plumber`); dash cleanup is the only permitted edit. Service and town copy may be rewritten only after Milton approves the golden pages. See `PLAN.md` §3c.
- No new town URLs. No out-of-area place names. No public prices.
- Status column is filled in by the executor (✅ built and parity-checked by `scripts/qa-links.mjs`).

## 1. Live sitemap paths (53)

| Live path | Type | Live H1 | Twin action | Milestone | Status |
|---|---|---|---|---|---|
| `/` | home | Plumbing, water heaters, and gas service in Truckee and Lake Tahoe. | Rebuild; keep title + H1; add visible street NAP; add `FAQPage` schema; `Plumber` schema with `logo`/`image` + 24 CA `areaServed` | M1 | ✅ |
| `/about/` | core | Serving Truckee and North Lake Tahoe since 1997 | Rebuild; same title/H1; drop the "17+ communities" counter or make it 24 (sitemap truth) | M1 | ✅ |
| `/contact/` | core | Contact us | Rebuild; NAP + hours + in-house form; `Plumber` JSON-LD | M1 | ✅ |
| `/request-service/` | core | Request service | Rebuild; the in-house lead form is the page | M1 | ✅ |
| `/services/` | hub | Our services | Rebuild; same title/H1; add `Service` list (`ItemList`) | M1 | ✅ |
| `/services/water-heaters/` | service | Water Heaters | Rebuild; keep title; **H1 → "Water heater repair and installation in Truckee and North Lake Tahoe"**; `Service` + `FAQPage` + `BreadcrumbList` (item URLs on all crumbs); 301 target for `/water-heater-services/` | M1 | ✅ |
| `/services/frozen-burst-pipes/` | service | Frozen & Burst Pipes | Rebuild; written as the emergency landing page (D4); same title | M1 | ✅ |
| `/services/gas-services/` | service | Gas Services | Rebuild from `services.ts` | M1 | ✅ |
| `/services/kitchen-bath-plumbing/` | service | Kitchen & Bath Plumbing | Rebuild from `services.ts` | M1 | ✅ |
| `/services/appliance-installation/` | service | Appliance Installation | Rebuild from `services.ts` | M1 | ✅ |
| `/services/smart-leak-shutoff/` | service | Smart Leak Shutoff | Rebuild from `services.ts` | M1 | ✅ |
| `/service-areas/` | hub | Service areas | Rebuild; same title/H1; 5 groups, 24 towns + Martis Valley hub link; exclusion sentence | M1 | ✅ |
| `/service-areas/truckee/` | town | Plumber in Truckee, CA | Rebuild; strengthen for plumber-Truckee queries: NAP block, links from home, unique FAQ (TDPUD/TSD/Town of Truckee facts) | M1 | ✅ |
| `/service-areas/tahoe-city/` | town | Plumber in Tahoe City, CA | Data-driven (TCPUD, 6,225 ft, Placer County) | M1 | ✅ |
| `/service-areas/kings-beach/` | town | Plumber in Kings Beach, CA | Data-driven (NTPUD, 6,250 ft, Placer County) | M1 | ✅ |
| `/faqs/` | core | Frequently asked questions | Rebuild; 20 live Q&As; `FAQPage` schema | M1 | ✅ |
| `/reviews/` | core | What homeowners say | Rebuild with the quoted public reviews from live + Google/Yelp links; **no** `AggregateRating` | M1 | ✅ |
| `/service-areas/agate-bay/` | town | Plumber in Agate Bay, CA | Data-driven (NTPUD, 6,250–6,300 ft) | M2 | ✅ |
| `/service-areas/alpine-meadows/` | town | Plumber in Alpine Meadows, CA | Data-driven (6,185–6,835 ft, Placer County) | M2 | ✅ |
| `/service-areas/carnelian-bay/` | town | Plumber in Carnelian Bay, CA | Data-driven (NTPUD, 6,325 ft) | M2 | ✅ |
| `/service-areas/dollar-point/` | town | Plumber in Dollar Point, CA | Data-driven (NTPUD/TCPUD boundary, 6,480 ft) | M2 | ✅ |
| `/service-areas/donner-lake/` | town | Plumber in Donner Lake, CA | Data-driven (TDPUD/TSD, 5,936 ft, Town of Truckee) | M2 | ✅ |
| `/service-areas/donner-summit-serene-lakes/` | town | Plumber in Donner Summit / Serene Lakes, CA | Data-driven (~7,000 ft, Placer County) | M2 | ✅ |
| `/service-areas/glenshire/` | town | Plumber in Glenshire, CA | Data-driven (TDPUD/TSD, 5,900–6,000 ft) | M2 | ✅ |
| `/service-areas/grays-crossing/` | town | Plumber in Gray's Crossing, CA | Data-driven (TDPUD/TSD, 5,500 ft) | M2 | ✅ |
| `/service-areas/homewood/` | town | Plumber in Homewood, CA | Rebuild from own facts (TCPUD, 6,225 ft); **keep title + H1 exactly; do not retarget** | M2 | ✅ |
| `/service-areas/lahontan/` | town | Plumber in Lahontan, CA | Data-driven (NCSD/TSD, 6,500 ft) | M2 | ✅ |
| `/service-areas/martis-camp/` | town | Plumber in Martis Camp, CA | Data-driven (NCSD/TSD, 5,900–7,100 ft, Placer County) | M2 | ✅ |
| `/service-areas/meeks-bay/` | town | Plumber in Meeks Bay, CA | Data-driven (TCPUD, 6,225 ft) | M2 | ✅ |
| `/service-areas/norden/` | town | Plumber in Norden, CA | Data-driven (6,900–7,000 ft) | M2 | ✅ |
| `/service-areas/northstar/` | town | Plumber in Northstar, CA | Data-driven (NCSD/TSD) | M2 | ✅ |
| `/service-areas/old-greenwood/` | town | Plumber in Old Greenwood, CA | Data-driven (TDPUD/TSD, 5,900 ft) | M2 | ✅ |
| `/service-areas/olympic-valley/` | town | Plumber in Olympic Valley, CA | Data-driven (6,200 ft) | M2 | ✅ |
| `/service-areas/schaffers-mill/` | town | Plumber in Schaffer's Mill, CA | Data-driven (NCSD/TSD) | M2 | ✅ |
| `/service-areas/soda-springs/` | town | Plumber in Soda Springs, CA | Data-driven (6,768 ft) | M2 | ✅ |
| `/service-areas/tahoe-donner/` | town | Plumber in Tahoe Donner, CA | Data-driven (TDPUD/TSD, ~7,000 ft) | M2 | ✅ |
| `/service-areas/tahoe-vista/` | town | Plumber in Tahoe Vista, CA | Data-driven (NTPUD, 6,250–6,300 ft) | M2 | ✅ |
| `/service-areas/tahoma/` | town | Plumber in Tahoma, CA | Data-driven (TCPUD, 6,225 ft) | M2 | ✅ |
| `/blog/` | hub | Blog | Rebuild; list from content collection, newest first | M2 | ✅ |
| `/blog/water-heater-maintenance-tahoe-homeowner/` | post (2025-10-28) | Water Heater Maintenance Every Tahoe Homeowner Should Know | Markdown in `src/content/blog/`; rewrite from live; `BlogPosting` | M2 | ✅ |
| `/blog/how-property-managers-prevent-plumbing-emergencies/` | post (2025-09-10) | How Property Managers Can Prevent Plumbing Emergencies | same | M2 | ✅ |
| `/blog/common-kitchen-plumbing-problems-older-tahoe-homes/` | post (2025-08-22) | Common Kitchen Plumbing Problems in Older Tahoe Homes | same | M2 | ✅ |
| `/blog/preparing-plumbing-before-leaving-for-season/` | post (2025-07-14) | Preparing Your Plumbing Before Leaving for the Season | same | M2 | ✅ |
| `/blog/why-smart-leak-shutoff-matters-mountain-homes/` | post (2025-06-05) | Why Smart Leak Shutoff Systems Matter for Mountain Homes | same | M2 | ✅ |
| `/blog/what-to-do-when-pipe-freezes/` | post (2025-05-20) | What to Do When a Pipe Freezes | same | M2 | ✅ |
| `/blog/gas-line-safety-checks-before-winter/` | post (2025-04-08) | Gas Line Safety Checks Before Winter | same | M2 | ✅ |
| `/blog/signs-of-hidden-leak-what-to-do/` | post (2025-03-12) | Signs of a Hidden Leak (and What to Do First) | same | M2 | ✅ |
| `/blog/tankless-vs-tank-water-heaters-cold-climates/` | post (2025-02-03) | Tankless vs. Tank Water Heaters in Cold Climates | same | M2 | ✅ |
| `/blog/how-to-winterize-plumbing-tahoe-second-home/` | post (2025-01-15) | How to Winterize Plumbing for a Tahoe Second Home | same | M2 | ✅ |
| `/resources/` | core | Resources | Rebuild; the 4 live checklists inline (winterization, emergency shutoff, leaving for the season, water heater calendar) | M2 | ✅ |
| `/membership/` | core | Priority plumbing service in Truckee & Lake Tahoe. | Rebuild at the same URL **without dollar amounts** (tiers Essential / Steward / Concierge + HOA, benefits, "contact for pricing"); flag D2 | M2 | ✅ |
| `/privacy-policy/` | legal | Privacy Notice | Port text from live; substance unchanged; remove GHL/reCAPTCHA references if the twin does not load them | M2 | ✅ |
| `/terms-of-use/` | legal | Terms of Use | Port text from live | M2 | ✅ |

Blog post pages on live render the H1 as the post title; the `| Brimer Plumbing Blog` suffix belongs to the `<title>`.

## 2. Redirects (HTTP 301, declared in `astro.config.mjs`, mirrored in `vercel.json`)

| From | To | Why |
|---|---|---|
| `/water-heater-services/` and `/water-heater-services` | `/services/water-heaters/` | Live 404; sipthestyle.com still links here ("water heater repair services"). Do not invent a third water-heater slug. |
| `/sitemap.xml` | `/sitemap-index.xml` | Parity with live (live 301s the same way). Only meaningful in an indexable build. |

Host-level (not in this repo's control on staging): apex `brimercon.com` → `www` 308 and `/path` → `/path/` 308. On Vercel: `vercel.json` `"trailingSlash": true` handles the slash; the apex redirect is a domain setting at swap time (`docs/swap-runbook.md`).

## 3. Additive routes (not in the live sitemap; excluded from the twin sitemap)

| Path | Live today | Twin | Indexable? |
|---|---|---|---|
| `/thank-you/` | 200, `noindex, nofollow`, title "Order — Brimer Plumbing" (GHL artifact) | Form confirmation page: "Request received" copy, phone CTA, `?ref=` shows the lead id | Never |
| `/service-areas/martis-valley/` | 404 (nav grouping label) | Short real hub page for the Martis Valley group (Martis Camp, Lahontan, Northstar, Schaffer's Mill, Gray's Crossing, Old Greenwood) — CA, Placer/Nevada County. Not a 25th town clone. Decision D3. | Follows site flag |
| `/api/lead/` | n/a | `POST` only; the one on-demand route; `GET` returns 405; browser requests get an HTML error page with a call button, not raw JSON. Always referenced **with** the trailing slash so a POST never takes a redirect (audit H4). `Disallow: /api/` in robots. | Never |
| `/404` | Vercel default | Custom 404 with phone and links | Never |
| `/robots.txt`, `/sitemap-index.xml`, `/sitemap-0.xml`, `/images/og-default.jpg`, `/favicon.svg` | robots 200; sitemaps 200; og:image **404** | robots generated per env (`Allow: /` on staging so the noindex is readable, audit H1); sitemaps only when indexable; og image generated and real | n/a |

Not carried over: `/join/` (404 on live), `join.brimercon.com` (never fetched; out of scope).

## 4. Nav / footer link inventory (must all resolve — checked by `scripts/qa-links.mjs`)

Header: Services, Service areas, About, Reviews, FAQs, Contact, Request service, `tel:+15305870733`.
Footer: six services; five area groups with 24 towns + Martis Valley hub; Blog, Resources, Membership, Privacy Notice, Terms of Use; NAP; email; hours; CSLB line; Google Maps and Yelp outbound links (`rel="noopener"`).

## 5. Parity check definition

`scripts/qa-links.mjs` passes when: (a) for every line in `docs/crawl/sitemap-urls.txt`, `dist/client/<path>/index.html` exists; (b) every internal `href` in `dist/` resolves to a built file or a declared redirect; (c) `astro.config.mjs` contains the three redirects above; (d) no `href` contains `brimercon.com` except canonical/OG/JSON-LD `url` fields (internal links are root-relative).
