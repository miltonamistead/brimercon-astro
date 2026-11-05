# Website SEO for the Brimer rebuild (Sierra)

Read only eval for Milton, 31 August 2026. Atlas did not deploy Otto. Atlas did not write GBP. Atlas did not email Hunter or Dexter. Atlas did not spend. Atlas did not set routines. Atlas did not log into Search Atlas in a browser. Atlas did not call mcp.searchatlas.com.

**Keep versus rebuild in one sentence:** Google can already source the live Astro HTML, so a platform change is not required for SEO; rebuild and optimize in Astro on brimercon.com if Hunter is the bottleneck and Milton will ship.

Measure stays GBP calls off the Truckee listing (10647 Manchester Dr) and organic versus Mighty Mike. Search Atlas is a measurement and issue tool, not the CMS.

## Holds (do not break)

1. No Otto deploy. Autopilot is on and deployed_fixes is 0. Leave it that way.
2. No GBP write. No photo upload. No post. No listing edit.
3. No Hunter email. No Dexter email.
4. No spend. No Link Laboratory. No paid placements.
5. No routines.
6. No Search Atlas browser login. REST GET only.
7. California only. Never add Nevada or Incline Village as a service area.
8. Phone in public copy: 530-587-0733 only.
9. No public dollar prices. No radiant, boiler, or hydro jetting copy.
10. Ads and public license: CSLB 1149344. Site: brimercon.com.
11. Fine Homes article is live (Search Atlas `lost=true` is stale). Do not treat it as gone.
12. `emergency plumber truckee` currently ranks the Homewood town page. Do not change that page in this pass. Flag only, for Milton to decide.

## Sources and times (PT)

Live HTML, Otto, and auditor GETs are 31 August 2026. Older files are cited, not re-authored.

| What | When (PT) | URL or file |
|---|---|---|
| Otto project GET | 31 Aug 2026, 9:04 AM PT | `GET https://sa.searchatlas.com/api/v2/otto-projects/9f394db3-0f13-474d-9067-1b41bd095764/` |
| Core project 149351 GET | 31 Aug 2026, 9:04 AM PT | `GET https://api.searchatlas.com/api/customer/projects/projects/149351/` |
| Site auditor issue paths | 31 Aug 2026, 9:04 AM PT | HTML 404 still (see section 2) |
| Homepage HTML | 31 Aug 2026, 9:05:40 AM PT | https://www.brimercon.com/ |
| Truckee town | 31 Aug 2026, 9:05:41 AM PT | https://www.brimercon.com/service-areas/truckee/ |
| Water heaters | 31 Aug 2026, 9:05:41 AM PT | https://www.brimercon.com/services/water-heaters/ |
| Homewood town (IA flag) | 31 Aug 2026, 9:05:42 AM PT | https://www.brimercon.com/service-areas/homewood/ |
| Tahoe City town | 31 Aug 2026, 9:05:42 AM PT | https://www.brimercon.com/service-areas/tahoe-city/ |
| robots.txt | 31 Aug 2026, 9:05:42 AM PT | https://www.brimercon.com/robots.txt |
| sitemap-0.xml | 31 Aug 2026, 9:05:42 AM PT | https://www.brimercon.com/sitemap-0.xml |
| Fine Homes article | 31 Aug 2026, 9:05:43 AM PT | https://www.finehomesandliving.com/home_design/why-regular-plumbing-maintenance-saves-money/article_77869ec4-5720-4436-af44-8129d40a9050.html |
| CATT directory NAP | 31 Aug 2026, 9:05:44 AM PT | https://members.ca-tt.com/directory/Details/brimer-plumbing-2043957 |
| Mighty Mike sitemap | 31 Aug 2026, 9:05:44 AM PT | https://www.mightymikeplumbing.com/sitemap.xml |
| Old path check | 31 Aug 2026, 9:07 AM PT | https://www.brimercon.com/water-heater-services/ HTTP 404 |
| Indexability | 28 Aug 2026 | `/workspace/brimer/seo/2026-08-28_brimer_indexability.md` |
| Mighty Mike snapshot | 28 Aug 2026, 8:11 to 8:12 PM PT | `/workspace/brimer/seo/2026-08-28_mighty_mike_snapshot.md` |
| GSC queries | 29 Aug 2026, 11:25 AM PT | `/workspace/brimer/seo/2026-08-29_gsc_queries.md` (window 18 to 26 Aug 2026) |
| GBP performance | 29 Aug 2026, 12:58 PM PT | `/workspace/brimer/seo/2026-08-29_gbp_performance.md` |
| Backlink strategy | 30 Aug 2026, 10:25 to 10:33 AM PT | `/workspace/brimer/seo/2026-08-30_backlink_strategy.md` |
| Gaps | 27 Aug file | `/workspace/brimer/seo/2026-08-27_gaps.md` |
| Baseline | pulled 28 Aug evening PT | `/workspace/brimer/seo/2026-08-27_baseline.md` |
| Organic rank baseline | 28 Aug 2026, 9:42 PM PT | `/workspace/brimer/seo/2026-08-28_organic_baseline.md` |

Raw dumps: `/workspace/brimer/seo/api-raw/rebuild_sa_searchatlas_com_api_v2_otto_projects_9f394db3_0f13_474d_9067_1b41bd095764_.json`, `rebuild_api_searchatlas_com_api_customer_projects_projects_149351_.json`, `rebuild_sa_discovery.json`, `rebuild_live_pages.json`.

## 1. Current on-page (proof)

Hosting Milton named: GoDaddy plus Cloudflare. Live response headers on HTML GETs today: `Server: cloudflare`, `x-vercel-cache` / `x-vercel-id` on origin, Cloudflare worker in `Server-Timing` (`cfWorker`). The HTML origin is Vercel behind Cloudflare. GoDaddy is not the HTML host in these headers. Generator meta: `Astro v5.18.0`. Content is in the initial HTML. This is not a JavaScript-only site. Otto still detects CMS `gohighlevel`; that detection is wrong. The only HighLevel signal in homepage HTML is tracking (`msgsndr` / leadconnector class strings), same finding as the 28 Aug indexability file.

Googlebot and browser homepage GETs today were the same size (133576 bytes), same title, same H1, same JSON-LD. Otto still sits on the response. Header `X-Optimized-By: SearchAtlas-Otto` and `X-Otto-Version: 1.0.3` on every HTML GET. Meta: `<meta name="otto" content="uuid=9f394db3-0f13-474d-9067-1b41bd095764; type=cloudflare; enabled=true;">`. Indexability file (28 Aug): Otto can rewrite crawler HTML. That remains the single biggest indexing risk even though today's Googlebot body matched the browser body.

Homepage Last-Modified header: 31 Aug 2026, 8:56 AM PT (`Mon, 31 Aug 2026 15:56:27 GMT`).

### Indexability (still sourceable)

From today's GETs plus `/workspace/brimer/seo/2026-08-28_brimer_indexability.md`:

- HTTP 200 on www HTML. Apex HTML 308s to www (unchanged from 28 Aug).
- No robots meta. No noindex on fetched pages.
- robots.txt `User-agent: *` `Allow: /`. Sitemap `https://www.brimercon.com/sitemap-index.xml`. Googlebot search is not blocked. `Google-Extended` is blocked (Gemini-style AI use, not Google Search indexing).
- sitemap-0.xml: 53 www URLs. 24 town pages plus the `/service-areas/` hub (25 service-area locs). Same 24 California towns as 28 Aug. `/service-areas/martis-valley/` is still HTTP 404 (grouping label, not a URL).
- Visible text is thousands of characters in the initial HTML (homepage about 10435; Truckee town about 17914; water heaters about 8102; Homewood about 18186; Tahoe City about 18338).

### Titles, H1s, JSON-LD (today)

**https://www.brimercon.com/** at 9:05:40 AM PT

- Title: Brimer Plumbing | Truckee & North Lake Tahoe Plumber | Since 1997
- H1: Plumbing, water heaters, and gas service in Truckee and Lake Tahoe.
- Canonical: https://www.brimercon.com/
- JSON-LD type: `Plumber` (one block). Phone `+15305870733` (530-587-0733). Address 10647 Manchester Dr, Truckee, CA 96161. CSLB identifier 1149344. areaServed cities: Truckee, Tahoe City, Kings Beach, Olympic Valley (all CA). sameAs: Google place_id `ChIJw3M9Pdp6SIERbHPE39fkPN8`, plus Yelp. Schema also has `priceRange` `$$` (schema token, not a public price list). Rebuild must not add public dollar prices.
- Phone 530-587-0733 is the only 530 number on the page. Nevada strings are disclaimers only ("Not licensed in Nevada"), not service areas.
- Images: 8 `<img>`. 0 missing alt. 1 empty alt (no src, decorative). Real alts exist on logo, van/hero, bath, kitchen, and house photos. Those photos still look like stock mountain-home art, not a Brimer job shoot.
- Internal links: 127. Nav includes all 24 town paths plus `/service-areas/`.

**https://www.brimercon.com/service-areas/truckee/** at 9:05:41 AM PT

- Title: Plumber in Truckee, CA | Brimer Plumbing | Truckee & Tahoe
- H1: Plumber in Truckee, CA
- JSON-LD: `Service` (Plumbing services in Truckee, areaServed Truckee CA) plus `BreadcrumbList`. No telephone on the page-level Service block.
- Town hero `/images/areas/truckee-hero.jpg` has empty alt.
- Last-Modified: 28 Aug 2026, 2:23 AM PT.

**https://www.brimercon.com/services/water-heaters/** at 9:05:41 AM PT

- Title: Water Heater Repair, Replacement & Installation | Truckee & Tahoe | Brimer Plumbing
- H1: Water Heaters (short versus the title and versus GSC queries)
- JSON-LD: `Service`, `FAQPage`, `BreadcrumbList`. areaServed State California. No phone on the Service block.
- Images: logo only (2). No water-heater photo.
- Last-Modified: 28 Aug 2026, 2:23 AM PT.
- GSC (29 Aug file) does not land the big water-heater Truckee queries on this URL. They land on the homepage at position 25. This page is not doing its job in Search Console yet.

**https://www.brimercon.com/service-areas/homewood/** at 9:05:42 AM PT (IA flag only)

- Title: Plumber in Homewood, CA | Brimer Plumbing | Truckee & Tahoe
- H1: Plumber in Homewood, CA
- JSON-LD: `Service` plus `BreadcrumbList`. Hero `/images/areas/homewood-hero.jpg` empty alt.
- GSC (18 to 26 Aug 2026): query `emergency plumber truckee` is 0 clicks, 18 impressions, pos 11, landing page this Homewood URL. That is a mismatch. Do not retitle or retarget this page in this eval. Milton decides the IA (keep Homewood as the accidental winner, or later point the query at Truckee / frozen-burst-pipes / a dedicated emergency URL).

**https://www.brimercon.com/service-areas/tahoe-city/** at 9:05:42 AM PT

- Title: Plumber in Tahoe City, CA | Brimer Plumbing | Truckee & Tahoe
- H1: Plumber in Tahoe City, CA
- Same town template. Hero `/images/areas/tahoe-city-hero.jpg` empty alt.
- GSC still has no exact `plumber tahoe city` row (29 Aug file). Organic tracker (28 Aug) had `plumber tahoe city` not in the top 20.

### 24 town pages already exist

sitemap-0.xml today, 24 town locs, all California:

Truckee, Tahoe Donner, Glenshire, Donner Lake, Northstar, Martis Camp, Lahontan, Schaffer's Mill, Gray's Crossing, Old Greenwood, Tahoe City, Kings Beach, Tahoe Vista, Carnelian Bay, Dollar Point, Agate Bay, Homewood, Tahoma, Meeks Bay, Olympic Valley, Alpine Meadows, Donner Summit / Serene Lakes, Soda Springs, Norden.

Homepage nav hrefs match that set. Town pages share a tight template and similar titles. That is a quality concern (28 Aug indexability), not a missing-IA problem. Mighty Mike still has zero town pages.

### Broken path that already has a live backlink

https://www.brimercon.com/water-heater-services/ HTTP 404 at 9:07 AM PT (apex 308 then 404). Backlink strategy (30 Aug): sipthestyle.com still targets `https://brimercon.com/water-heater-services/` with anchor "water heater repair services". Live service URL is `/services/water-heaters/`. Rebuild should 301 the old path and keep the current path string. Do not invent a third water-heater slug.

## 2. Search Atlas audit / health / issues

Honest: the issue-list API is still HTML 404. Same as 28 Aug (`/workspace/brimer/seo/2026-08-27_gaps.md` item 6 and `/workspace/brimer/seo/2026-08-27_baseline.md`).

Tried GET at 9:04 AM PT 31 Aug 2026, all HTML 404 about 1117 bytes:

- https://sa.searchatlas.com/api/site-auditor/115905/issues/
- https://sa.searchatlas.com/api/site-auditor/115905/
- https://sa.searchatlas.com/api/site-auditor/115905/project-details/
- https://sa.searchatlas.com/api/site-auditor/115905/domain-analysis/
- https://sa.searchatlas.com/api/v1/site-auditor/115905/issues/
- https://sa.searchatlas.com/api/v2/site-auditor/115905/issues/
- https://api.searchatlas.com/api/site-auditor/115905/issues/
- https://api.searchatlas.com/api/customer/site-auditor/115905/
- https://keyword.searchatlas.com/api/v1/site-auditor/115905/issues/
- https://ca.searchatlas.com/api/site-auditor/115905/issues/
- https://gsc.searchatlas.com/api/site-auditor/115905/issues/
- https://sa.searchatlas.com/api/v2/otto-projects/9f394db3-0f13-474d-9067-1b41bd095764/issues/

Issue-level rows are not available on REST today. Do not invent them. Do not open a Search Atlas browser session to scrape them.

### What did return (Otto + project 149351)

Otto uuid `9f394db3-0f13-474d-9067-1b41bd095764`, hostname brimercon.com, site_audit sa_id 115905.

Holistic scores (updated 27 Aug 2026, 6:38 AM PT, deltas 0):

- technical 96
- content 28
- authority 7
- ux 18

After-summary (last crawl 25 Aug 2026, 8:23 AM PT; next analysis 1 Sep 2026, 8:23 AM PT):

- 53 pages
- 531 found issues
- 0 healthy pages
- 0 deployed fixes
- seo_optimization_score 0

Project 149351 `data.sa.health` 96, diff 0. `data.otto_v2.total_deployed_fixes` 0. AI grade overall 76.

Pixel: `installation_method` / `pixel_tag_state` `cloudflare_worker`. Label "OTTO SEO is Engaged", short "Installed (Cloudflare)", severity success. Diagnostic: "The OTTO is correctly installed via Cloudflare Worker." `pixel_last_verified_at` 31 Aug 2026, 6:17 AM PT. Failure count 0. `last_deploy_event_timestamp` null. `deployment_verdict` needs_attention, reason never_checked. `autopilot_is_active` true, frequency 7 days. `is_active` false on the project object, but the Cloudflare rewrite header is live on HTML. Treat Otto as installed and rewriting, with zero deploys.

Otto `connected_data`: GSC true (`sc-domain:brimercon.com`), GBP true (id 83112, 10647 Manchester Dr, Truckee). GSC was not connected in the 27 Aug baseline file; it is connected now (29 Aug GSC file).

Otto pending groups (counts only, not issue text): images 36 pending (12 compliant), page_title 53 pending with 53 compliant, meta_description 53 pending with 44 compliant, schema_markup 18 pending, internal_links 52 pending, headings_length 58 pending, missing_headings 13 pending, og_meta 50, twitter_meta 145, meta_keywords 53. Those are Otto suggestions. Do not approve or deploy them. Title "pending" plus "compliant" on page_title means Otto wants to rewrite titles that already pass its own check. Blind deploy would churn live titles.

Project 149351 site explorer today: organic traffic 134, domain_power 8, authority 12, backlinks 292, refdomains 166, organic keywords 58. Versus Mighty Mike on 30 Aug scoreboard: traffic 375, domain_power 18, DA 15, backlinks 487, referring domains 168. Referring domain counts are nearly tied. Power and traffic are not.

## 3. What would beat Mighty Mike in organic

Mighty Mike snapshot 28 Aug 2026, sitemap rechecked 31 Aug 2026, 9:05:44 AM PT: still 5 loc entries (home, services, about-us, our-process, contact-us). `/locations`, `/service-areas` were 404 on 28 Aug. No town pages. Home H1 is a slogan ("Honest Work. Reliable Solutions. Total Peace of Mind"), not a plumber-in-Truckee claim. JSON-LD Plumber exists on their home only.

Brimer already has the site architecture Mighty Mike lacks: 24 California town pages, 6 service pages, blog, Astro HTML Google can source. The organic gap is not "they have more pages." 30 Aug backlinks: they have similar referring-domain counts and higher domain_power (18 vs 8) and more than double estimated organic traffic (375 vs 134). 28 Aug organic tracker (desktop, not map pack): `plumber truckee` position 12 on the homepage; `emergency plumber truckee` position 10 on the homepage; `plumbing truckee ca` position 18 on the homepage; `plumber tahoe city` and `water heater repair tahoe` not in 20.

GSC (18 to 26 Aug 2026, 7 clicks / 1553 impressions, 144 CA rows) is the query proof:

- Almost all money queries land on the homepage (`https://www.brimercon.com/` or apex `https://brimercon.com/`), not on `/service-areas/truckee/` or `/services/water-heaters/`.
- `truckee plumber`: 0 clicks, 98 impressions, pos 1, page homepage. Highest impression query. Zero clicks.
- `plumber truckee ca`: 0/63, pos 16, homepage.
- `plumber truckee`: 0/57, pos 14, homepage. Tracker 28 Aug had this at position 12 on the homepage.
- `water heater repair truckee ca`: 0/50, pos 25, homepage. Water-heaters URL exists and is not the GSC landing page.
- `water heater installation truckee ca`: 0/47, pos 25, homepage.
- `tankless water heaters truckee ca`: 0/27, pos 2, homepage. Title and H1 work better for tankless than for repair/install.
- `emergency plumber truckee`: 0/18, pos 11, page **Homewood town**. IA mismatch. Do not change Homewood here.
- Town pages almost do not appear in GSC: Truckee town 3 queries, Homewood 1, Donner Summit 3. The 24-page set is not yet winning the queries it was built for.
- Apex versus www is split in GSC (78 www rows, 38 apex rows in the CA set). Canonicals are www. Apex 308s. Cleanup is a redirect/canonical hygiene task, not a CMS change.

NAP mismatch (this is a local pack and citation issue, not a reason to leave Astro):

- GBP (Search Atlas location 83112, 29 Aug file and Otto GBP details today): 10647 Manchester Dr, Truckee CA. Phone 530-587-0733. Website brimercon.com.
- Site JSON-LD today: 10647 Manchester Dr, Truckee, CA 96161. Phone 530-587-0733.
- CATT directory today 9:05:44 AM PT: name Brimer Plumbing, **PO Box 9297**, phone 530-587-0733, website `http://www.brimercon.com/` (http, not https). No Manchester string on that page.

CATT is a follow-link association both brands already have (30 Aug backlink file). The PO Box versus Manchester split is the NAP problem to fix when someone can edit CATT. This job did not edit it.

Otto is installed, 0 deploys. Do not deploy. Otto will not beat Mighty Mike if it rewrites titles Google already ranks or mutates crawler HTML.

GBP calls remain the business measure (29 Aug, last 28 days through 29 Aug): 20 calls, 24 website clicks, 59 direction requests, 501 search/Maps impressions. Last 7 days in that file were thin (0 calls). Map pack uses the listing. A prettier CMS does not replace listing calls.

Fine Homes: Search Atlas marked the March guest post lost (last seen 5 Aug 2026). Live GET today 9:05:43 AM PT: HTTP 200, title "Why Regular Plumbing Maintenance Saves Money", body contains "Brimer Plumbing". Sierra QA later: the article is actually live; the lost flag is stale. Do not recrawl-buy or replace that placement on the basis of the flag.

What actually closes the organic gap, given Mighty Mike's 5-URL site:

1. Make GSC land plumber-Truckee queries on `/service-areas/truckee/` (or a homepage that deserves them), not a random town.
2. Make water-heater repair/install queries land on `/services/water-heaters/` with a real H1, photos, and Truckee CA copy.
3. Decide the emergency URL (Milton). Do not silently retarget Homewood.
4. Real photos from the likely shoot. Empty town-hero alts and stock house images will not beat a local with 4.9 stars and a street address Google already trusts.
5. Align NAP (GBP and site already match Manchester; CATT still PO Box 9297).
6. Keep URL paths stable so the few decent links (CATT, sipthestyle, Fine Homes if Google still counts it) do not 404.
7. Do not buy low-ascore blogs. Do not deploy Otto to manufacture meta.

## 4. Keep versus rebuild

Google can already source Astro HTML. Titles, H1s, nav, canonicals, and JSON-LD are in the first response. robots.txt allows Googlebot. 24 town pages exist. A platform change is **not** required for SEO.

Do not recommend WordPress, GoHighLevel, or any other CMS as an SEO fix. Otto already mis-labels the site as gohighlevel. Moving into GHL would make the false detection true and would likely turn pages into a JavaScript shell, which is the opposite of today's advantage.

Rebuild or optimize **in Astro** if Hunter (Dream Surge) is too slow and Milton is his own developer and will ship. Keep the domain brimercon.com. Keep path strings `/services/water-heaters/`, `/service-areas/{town}/`, `/services/frozen-burst-pipes/`. 301 leftovers such as `/water-heater-services/`.

Website bot: only if Milton wants a bot to **draft** pages he then ships. Bots must not edit production. Hunter was the only editor; Milton now may ship. A bot that writes straight to Vercel or to Otto is how titles, schema, and Nevada disclaimers get wrecked.

A new CMS does not beat Mighty Mike. Matching GSC queries to the right URL, photos from a real shoot, NAP, and not deploying Otto blindly does.

If the rebuild is a visual/design pass with the same URLs and richer unique town and service copy, that is an optimize-in-Astro job. If someone wants to "start over in WordPress so Otto can deploy," that is the wrong job.

## 5. Holds, restated for anyone who only reads the end

No Otto deploy. No GBP write. No Hunter email. No Dexter email. No spend. No routines. No Search Atlas browser login. California only. Phone 530-587-0733. No public prices. No radiant / boiler / hydro jetting. CSLB 1149344 if ads. Website brimercon.com. Fine Homes is live. Do not change the Homewood page in this pass.

## Rebuild-oriented SEO moves (paste for Sierra)

Ranked. No spend. No Otto deploy.

1. Stay on Astro at brimercon.com; Milton ships. Do not migrate to WordPress or GoHighLevel for SEO.
2. Aim plumber-Truckee queries at `/service-areas/truckee/` (unique H1, NAP, photos, internal links) so GSC stops parking `truckee plumber` and cousins on the homepage with 0 clicks.
3. Rebuild `/services/water-heaters/` so repair and installation Truckee queries can land there: longer H1, real heater photos, 301 `/water-heater-services/` (today 404) to this URL.
4. IA for Milton only: `emergency plumber truckee` ranks Homewood. Pick the intended URL later (Truckee, frozen-burst-pipes, or a new emergency page). Do not edit Homewood in this pass.
5. Photo shoot into the templates: fill empty town-hero alts, replace stock house images, put crew/van/job photos on home, Truckee, and water heaters.
6. Keep all 24 California town URLs and differentiate the template so they are not clones. Do not add Nevada or Incline. Do not build Martis Valley until it is a real page instead of a 404.
7. NAP: site and GBP already use 10647 Manchester Dr and 530-587-0733. CATT still shows PO Box 9297 and http://www.brimercon.com/. Align CATT when an editor can; do not submit new citations from this file.
8. Leave Otto installed with 0 deploys. Do not approve pending title/schema/image fixes. The Cloudflare rewrite is the indexing risk; a CMS change does not remove it.

