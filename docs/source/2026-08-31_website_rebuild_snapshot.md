# Website rebuild snapshot for Sierra

Date of this crawl: Monday 2026-08-31, about 9:02 AM to 9:05 AM PT.
Scope: read only public crawl of https://www.brimercon.com/ plus DNS and RDAP. No email. No deploy. No Cloudflare, GoDaddy, Vercel, Search Atlas, GBP, or live site changes. No git clone. Hunter was not contacted.

Phone on the live site: 530-587-0733 only. No retired numbers found in the fetched HTML.
California only: Nevada and Incline Village strings exist only as "not licensed / do not serve" exclusion copy. No Nevada service area pages.
No CMS switch is recommended in this file. The live stack already ships full HTML. Sierra decides keep Astro versus rebuild.

Prior files used (not recrawled as the live proof):
- /workspace/brimer/seo/2026-08-28_brimer_indexability.md
- /workspace/brimer/seo/2026-08-27_hunter_snippet_request.md
- /workspace/brimer/seo/2026-08-27_baseline.md
- /workspace/brimer/seo/2026-08-29_gsc_connected.md
- /workspace/brimer/seo/api-raw/otto_projects_after_gsc.json
- /workspace/brimer/pack/01_BRIMER_CONTEXT.md
- /workspace/brimer/pack/02_SYSTEMS_AND_ACCESS.md
- /workspace/brimer/seo/2026-08-28_mighty_mike_snapshot.md (refreshed live today)

## 1. Stack and hosting proof

Milton's working model (GoDaddy plus Cloudflare as the page host) is half right. GoDaddy is the registrar. Cloudflare is DNS and the public edge. The HTML origin is Vercel. Search Atlas OTTO sits on the Cloudflare worker. GoHighLevel is tracking only.

### Roles, with HTTP and DNS proof from this crawl

| Role | Who | Proof |
|---|---|---|
| Registrar | GoDaddy.com, LLC (IANA 146) | RDAP GET https://rdap.verisign.com/com/v1/domain/brimercon.com returned ldhName BRIMERCON.COM, entity roles=registrar name=GoDaddy.com, LLC handle=146. Registration 2006-07-10. Expiration 2028-07-10. RDAP last changed 2026-08-17T18:31:40Z (11:31 AM PT on 2026-08-17). Nameservers in RDAP: ADA.NS.CLOUDFLARE.COM and GARRET.NS.CLOUDFLARE.COM. |
| Authoritative DNS | Cloudflare | DNS over HTTPS (cloudflare-dns.com) NS for brimercon.com: ada.ns.cloudflare.com. and garret.ns.cloudflare.com. SOA: ada.ns.cloudflare.com. dns.cloudflare.com. Pack 02 still says the Cloudflare zone is unused for nameservers. That line is stale against live DNS. |
| Public A/AAAA | Cloudflare anycast | Apex A: 104.21.57.213 and 172.67.167.8. www A: the same two addresses. No CNAME on www. AAAA on both hosts under 2606:4700 (Cloudflare). |
| HTML origin | Vercel | Every www HTML GET in this crawl returned x-vercel-id (region pdx1). Cache HIT or MISS via x-vercel-cache. 404 on Martis Valley returned x-vercel-error: NOT_FOUND. Last-Modified is a Vercel origin timestamp. |
| Public edge | Cloudflare | Server: cloudflare. CF-Ray on every HTML GET (example homepage CF-Ray a33d42ad6fa06e10-PDX). CF-Cache-Status: DYNAMIC. Server-Timing includes cfEdge, cfOrigin, and cfWorker. |
| OTTO rewrite layer | Search Atlas Cloudflare worker | Header X-Optimized-By: SearchAtlas-Otto. Header X-Otto-Version: 1.0.3. Homepage meta: name=otto content="uuid=9f394db3-0f13-474d-9067-1b41bd095764; type=cloudflare; enabled=true;". HTML also references https://sa.searchatlas.com. Server-Timing cfWorker was 198ms on the homepage GET. Deployed OTTO fixes remain 0 (see bottleneck). Do not deploy. |
| Page generator | Astro v5.18.0 | meta name=generator content="Astro v5.18.0" on every 200 HTML page fetched. Content is in the initial HTML. Not a JavaScript only shell. Unchanged from the 2026-08-28 indexability file. |
| GoHighLevel | tracking only, not the page host | Homepage scripts include https://link.msgsndr.com/js/external-tracking.js. No gohighlevel or leadconnector host serves the document. Search Atlas still detects CMS as gohighlevel. That detection is wrong against the generator tag and Vercel headers. |
| Analytics / forms | GA4 plus reCAPTCHA v3 | gtag id G-JN4WLJHEZJ. reCAPTCHA on contact and request service (site key present in script URL). |

### HTTP proof, homepage www

GET https://www.brimercon.com/ at 2026-08-31 9:02 AM PT.

- Status: 200
- Server: cloudflare
- CF-Ray: a33d42ad6fa06e10-PDX
- CF-Cache-Status: DYNAMIC
- x-vercel-cache: HIT
- x-vercel-id: pdx1::knbf6-1788192155928-37c3cf43ba6d
- X-Optimized-By: SearchAtlas-Otto
- X-Otto-Version: 1.0.3
- Last-Modified: Mon, 31 Aug 2026 15:56:27 GMT (8:56 AM PT today)
- Server-Timing: cfEdge;dur=21,cfOrigin;dur=0,cfWorker;dur=198
- Canonical in HTML: https://www.brimercon.com/
- HTML bytes: 133576. Visible text about 10286 characters.

### HTTP proof, apex

GET https://brimercon.com/ (no follow).

- Status: 308
- Location: https://www.brimercon.com/
- Server: cloudflare
- X-Optimized-By: SearchAtlas-Otto
- x-vercel-id: pdx1::tcpq5-1788192156161-fa7333893017
- Refresh: 0;url=https://www.brimercon.com/

Apex versus www is handled. Canonicals on www HTML point at www.

### Who actually serves the HTML

Browser hits Cloudflare. Cloudflare runs the OTTO worker, then fetches Vercel. Vercel returns the Astro HTML. GoDaddy does not serve the document. GoDaddy's live role is registrar (and historically DNS; live NS are Cloudflare as of this crawl).

## 2. Page inventory

robots.txt GET https://www.brimercon.com/robots.txt status 200. User-agent star Allow /. Sitemap: https://www.brimercon.com/sitemap-index.xml. Cloudflare managed Disallow / for Amazonbot, Applebot-Extended, Bytespider, CCBot, ClaudeBot, CloudflareBrowserRenderingCrawler, Google-Extended, GPTBot, meta-externalagent. Googlebot search is not blocked.

sitemap-index.xml GET status 200, Last-Modified Sat 29 Aug 2026 03:11:05 GMT. Points at https://www.brimercon.com/sitemap-0.xml.
sitemap.xml GET status 301 Location /sitemap-index.xml.
sitemap-0.xml GET status 200, 53 www loc entries, Last-Modified Sat 29 Aug 2026 03:11:29 GMT.

OG tags: every 200 HTML page below has og:title, og:description, og:type=website, og:url (self), og:image=https://www.brimercon.com/images/og-default.jpg, og:site_name=Brimer Plumbing, og:locale=en_US, plus twitter:card=summary_large_image using the same image. That og-default.jpg URL returns 404 (see images).

Phone 530-587-0733: present on every 200 page in this table. tel:5305870733 hrefs present. No 530-214-8630, 530-587-5105, or 530-994-8853 in fetched HTML.

Visible street NAP: full "10647 Manchester Dr, Truckee, CA 96161" is on /contact/ (and in JSON-LD). Homepage visible text shows "Truckee, CA" in the footer band, not the street. Street lives in schema on home.

Nevada / Incline: footer and body exclusion copy only. FAQs also say Brimer does not serve Incline Village, Crystal Bay, or Stateline. That is CA only policy, not a Nevada service claim.

Prices on the crawled marketing pages: none on home, services, service pages, about, contact, request service, reviews, service areas, blog, or FAQs. Membership is the exception (see that row).

Martis Valley: nav and footer use "Martis Valley" as a grouping heading. Links under it go to /service-areas/martis-camp/. GET https://www.brimercon.com/service-areas/martis-valley/ is 404 with x-vercel-error NOT_FOUND. Same 404 as 2026-08-28. It is not in sitemap-0.xml.

| URL | Status | Last-Modified (UTC) | Title | H1 | Canonical | JSON-LD types | Imgs (alt present / empty) | Phone | NV/Incline | Prices visible |
|---|---|---|---|---|---|---|---|---|---|---|
| https://www.brimercon.com/ | 200 | 2026-08-31 15:56:27 | Brimer Plumbing \| Truckee & North Lake Tahoe Plumber \| Since 1997 | Plumbing, water heaters, and gas service in Truckee and Lake Tahoe. | self | Plumber, PropertyValue, ContactPoint, PostalAddress, GeoCoordinates, City, OpeningHoursSpecification | 8 (7 / 1 empty avatar) | yes | exclusion footer and FAQ | none |
| https://brimercon.com/ | 308 to www | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| https://www.brimercon.com/services/ | 200 | 2026-08-26 05:45:13 | Plumbing Services \| Truckee & North Lake Tahoe \| Brimer Plumbing | Our services | self | none | 8 (8 / 0) | yes | exclusion footer | none |
| https://www.brimercon.com/services/water-heaters/ | 200 | 2026-08-28 09:23:19 | Water Heater Repair, Replacement & Installation \| Truckee & Tahoe \| Brimer Plumbing | Water Heaters | self | Service, Plumber, PostalAddress, State, FAQPage, Question, Answer, BreadcrumbList, ListItem | 2 logos only (2 / 0) | yes | exclusion footer | none |
| https://www.brimercon.com/services/gas-services/ | 200 | 2026-08-28 09:23:21 | Gas Line Installation, Leak Detection & Safety \| Truckee & Tahoe \| Brimer Plumbing | Gas Services | self | same Service set as water heaters | 2 logos (2 / 0) | yes | exclusion footer | none |
| https://www.brimercon.com/services/kitchen-bath-plumbing/ | 200 | 2026-08-28 09:23:22 | Kitchen & Bathroom Plumbing Services \| Truckee & Tahoe \| Brimer Plumbing | Kitchen & Bath Plumbing | self | same Service set | 2 logos (2 / 0) | yes | exclusion footer | none |
| https://www.brimercon.com/services/appliance-installation/ | 200 | 2026-08-28 09:23:23 | Plumbing Appliance Installation \| Dishwashers, Fridges & More \| Truckee & Tahoe \| Brimer Plumbing | Appliance Installation | self | same Service set | 2 logos (2 / 0) | yes | exclusion footer | none |
| https://www.brimercon.com/services/smart-leak-shutoff/ | 200 | 2026-08-28 09:23:25 | Smart Leak Detection & Auto Shutoff \| Moen Flo \| Truckee & Tahoe \| Brimer Plumbing | Smart Leak Shutoff | self | same Service set | 2 logos (2 / 0) | yes | exclusion footer | none |
| https://www.brimercon.com/services/frozen-burst-pipes/ | 200 | 2026-08-28 09:23:26 | Frozen & Burst Pipe Repair \| Emergency Service \| Truckee & Tahoe \| Brimer Plumbing | Frozen & Burst Pipes | self | same Service set | 2 logos (2 / 0) | yes | exclusion footer | none |
| https://www.brimercon.com/service-areas/ | 200 | 2026-08-28 09:23:28 | Service Areas \| California Side of Tahoe & Truckee \| Brimer Plumbing | Service areas | self | none | 2 logos (2 / 0) | yes | "licensed in California only. We do not provide service in Nevada communities." | none |
| https://www.brimercon.com/about/ | 200 | 2026-08-31 16:02:38 | About Brimer Plumbing \| Truckee & North Lake Tahoe Since 1997 | Serving Truckee and North Lake Tahoe since 1997 | self | none | 2 logos (2 / 0) | yes | exclusion footer | none |
| https://www.brimercon.com/contact/ | 200 | 2026-08-30 12:24:53 | Contact Brimer Plumbing \| Truckee & North Lake Tahoe \| 530-587-0733 | Contact us | self | Plumber (same shape as home) | 2 logos (2 / 0) | yes | exclusion body and footer | none |
| https://www.brimercon.com/request-service/ | 200 | 2026-08-28 15:51:20 | Request Plumbing Service \| Truckee & North Lake Tahoe \| Brimer Plumbing | Request service | self | none | 2 logos (2 / 0) | yes | "We are not licensed in Nevada." | none |
| https://www.brimercon.com/reviews/ | 200 | 2026-08-29 03:11:59 | Reviews \| What Homeowners Say About Brimer Plumbing \| Truckee & Tahoe | What homeowners say | self | none | 3 (2 logos + 1 empty avatar) | yes | exclusion footer | none |
| https://www.brimercon.com/robots.txt | 200 | none | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| https://www.brimercon.com/sitemap-index.xml | 200 | 2026-08-29 03:11:05 | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a |
| https://www.brimercon.com/service-areas/martis-valley/ | 404 | n/a | 404: NOT_FOUND | none | none | none | 0 | no | none | none |

Also fetched for context (not in the required list): /blog/ 200 today, /membership/ 200, /faqs/ 200.

Membership public prices, observed in visible HTML on https://www.brimercon.com/membership/ (status 200, Last-Modified Sat 29 Aug 2026 03:12:00 GMT): Essential $149/year or $15/month, Steward $449/year or $45/month, Concierge $749/year or $75/month, "$499 value included" on water heater maintenance, HOA $350 / unit / year, example $12,250 / year for a 35 unit HOA. Standing rule in pack 01 is no prices in public posts. This page is a live exception. Sierra should treat it as a rebuild decision, not as a price to repeat elsewhere.

Contact visible hours: "Monday to Sunday: 7:00 AM to 8:00 PM" plus street address 10647 Manchester Dr, Truckee, CA 96161. Pack 01 hours are Monday to Friday 8 to 6, after hours for real emergencies only, never 24/7. Schema on home matches the public 07:00 to 20:00 all seven days, not the pack hours.

Sitemap town pages (all CA, all listed in sitemap-0.xml, not recrawled one by one today): Truckee, Tahoe Donner, Glenshire, Donner Lake, Northstar, Martis Camp, Lahontan, Schaffer's Mill, Gray's Crossing, Old Greenwood, Tahoe City, Kings Beach, Tahoe Vista, Carnelian Bay, Dollar Point, Agate Bay, Homewood, Tahoma, Meeks Bay, Olympic Valley, Alpine Meadows, Donner Summit / Serene Lakes, Soda Springs, Norden. 2026-08-28 indexability file recorded all of those as HTTP 200 with self canonicals. Martis Valley is the missing URL, not the missing town (Martis Camp exists).

CSLB 1149344 is in the footer on every 200 HTML page in this crawl: "CA CSLB License #: 1149344 Licensed in California only. Not licensed in Nevada."

## 3. Schema dump and gaps

### Homepage JSON-LD (one block)

@type Plumber
@id https://www.brimercon.com/#business
name Brimer Plumbing
url https://www.brimercon.com
telephone +15305870733
email service@brimerplumbing.com
identifier PropertyValue CA CSLB License 1149344
contactPoint telephone +15305870733, contactType customer service
address 10647 Manchester Dr, Truckee, CA 96161, US
geo latitude 39.3613011 longitude -120.1030431
areaServed City: Truckee CA, Tahoe City CA, Kings Beach CA, Olympic Valley CA (four cities only)
sameAs Google Maps place search URL and https://www.yelp.com/biz/brimer-plumbing-truckee
foundingDate 1997
priceRange $$
openingHoursSpecification Monday through Sunday, opens 07:00, closes 20:00

Absent on homepage: AggregateRating, Review, image, logo, hasMap, Service catalog, LocalBusiness duplicate (Plumber is a LocalBusiness subtype, so the type itself is fine), areaServed for the other CA towns that have pages.

### Water heaters service page JSON-LD (three blocks)

1. Service name "Water Heaters", provider Plumber @id https://www.brimercon.com/#business with NAP and +15305870733, areaServed State California (not town list).
2. FAQPage with three Question/Answer pairs (tank life, tank versus tankless, brands).
3. BreadcrumbList Home > Services > Water Heaters. The last ListItem has no item URL.

Same Service + FAQPage + BreadcrumbList pattern is on the other five service pages. Services hub, about, request service, reviews, and service areas hub have no JSON-LD.

### Gaps versus a strong local plumber

| Expected | Live on Brimer | Evidence |
|---|---|---|
| Plumber or LocalBusiness with NAP, geo, telephone | Present on home and contact | Homepage JSON-LD dump above |
| areaServed matching the CA towns actually served | Only four cities on home. Service pages use State California. 24 town pages exist in the sitemap | JSON-LD areaServed versus sitemap-0.xml |
| AggregateRating plus Review, or at least rating on the Plumber node | Missing on home and on /reviews/ | /reviews/ JSON-LD types: none. GBP reviews exist in other files; they are not on the page as schema |
| Service nodes for each offer, tied to the business @id | Present on the six service URLs, missing on the services hub | Hub types: none |
| image and logo on the business node | Missing | Homepage JSON-LD has no image/logo keys |
| Hours that match how Brimer actually answers | Schema and /contact/ say 7:00 to 20:00 all week. Pack 01 says Monday to Friday 8 to 6 | Direct conflict. Rebuild copy and schema must pick one, with Milton |
| FAQPage where FAQs exist | Present on service pages and /faqs/. Home has visible FAQ copy without FAQPage schema | Home types list has no FAQPage |
| No Nevada in areaServed | Held. areaServed is CA cities or State California | JSON-LD dump |
| Breadcrumb last item URL | Missing item on the Water Heaters last crumb | JSON-LD ListItem position 3 has name only |

## 4. Image and photo quality

Pages sampled: homepage, about, water heaters (one service page). Files downloaded 2026-08-31 9:04 AM PT from https://www.brimercon.com/images/.

### File facts

| File | HTTP | Bytes | Pixel size | Notes |
|---|---|---|---|---|
| /images/brimer-logo.png | 200 | 124989 | 564x210 real PNG | Logo, Last-Modified 2026-08-18 05:45:03 GMT |
| /images/hero-brimer-premium.png | 200 | 194113 | 1024x434 | Extension .png, bytes are JPEG, Content-Type image/png. Branded van plus technician in front of a mountain house and lake. Looks like a produced hero, not a job site snap. |
| /images/spa-grade-bath-experiences.png | 200 | 220083 | 1024x1024 | JPEG in a PNG wrapper. Luxury spa bath interior with a Tahoe-like window view. Lifestyle / generated look, not a labeled Brimer job. |
| /images/design-forward-fixture-performance.png | 200 | 167942 | 1024x682 | JPEG in a PNG wrapper. Luxury kitchen island and farmhouse sink. Lifestyle / generated look. HTML width/height on home claims 1024x1024, file is 1024x682. |
| /images/reliability-for-every-season.png | 200 | 227074 | 1024x1024 | JPEG in a PNG wrapper. Ski resort, "APRES SKI LODGE", gondola marked Heavenly. Heavenly is South Lake Tahoe, which pack 01 forbids as a service claim. Homepage alt says "Modern mountain residence exterior with large windows and warm evening lighting." Alt does not match the file. |
| /images/ready-to-get-started-bg.png | 200 | 316031 | 1024x683 | JPEG in a PNG wrapper. Lakeside stone mansion. Byte identical to footer-bg-premium.png. |
| /images/footer-bg-premium.png | 200 | 316031 | 1024x683 | Same bytes as ready-to-get-started-bg.png. Used on /services/. |
| /images/og-default.jpg | 404 | 79 | n/a | Body: "The page could not be found NOT_FOUND" plus a pdx1 x-vercel-id. Every page's og:image and twitter:image points here. Social share image is broken. |

No srcset. No webp. No picture elements on the sampled pages. About and water heaters have zero photographs: header logo and footer logo only.

Homepage empty alt: one `<img src="" alt="" ... data-author-photo>` 40x40 placeholder.

### Would a photo shoot change the page?

Yes, on about and on every service page, because those pages currently show no work photos and no people. Yes on the homepage if the goal is "this crew, this van, this town," because the current set is a branded hero plus luxury interiors plus a Heavenly / South Lake ski scene that is the wrong lake shore. A shoot does not require a CMS change. It requires new files, honest alts, a working OG image, and dropping the Heavenly frame.

## 5. Mighty Mike, high level only

Live site confirmed today: https://www.mightymikeplumbing.com/ status 200. Apex https://mightymikeplumbing.com/ status 301 to www. Sitemap still has five URLs (home, /services, /about-us, /our-process, /contact-us). robots.txt 200, Sitemap: https://www.mightymikeplumbing.com/sitemap.xml. No Nevada or Incline string on the homepage HTML today.

Mike stack (public headers, not copied copy): server nginx, d-cache from-cache, assets on cdn-website.com (Duda). DNS: NS ns03/ns04.domaincontrol.com (GoDaddy DNS), www CNAME s.multiscreensite.com. This is the opposite of Brimer: GoDaddy DNS, website builder origin, no Vercel, no Cloudflare on the HTML GET.

JSON-LD on Mike home only: WebSite, and Plumber with PostalAddress, GeoCoordinates, OpeningHoursSpecification. Telephone 5304145025. No areaServed key. Inner pages in this refresh had 0 JSON-LD blocks.

Page types Mike has that Brimer does not:
- /our-process (200). Brimer has no process URL.
- On-page Housecall Pro Book Online, Customer Login, and chat (present in nav chrome, not used in this crawl).
- One services URL with in-page anchors (sewer video, tankless, copper re-pipe, additions) rather than six service URLs.

Page types Brimer has that Mike does not (404 on Mike today):
- /service-areas and 24 town pages
- /reviews
- /blog
- /request-service
- /membership
- /faqs
- dedicated service URLs (water heaters, gas, kitchen and bath, appliance, smart leak, frozen pipes)

Do not copy Mike copy. California versus Nevada: Brimer stays CA only even if a competitor covers both. Mike's public pages today did not name Nevada. Brimer must still keep Nevada off the rebuild.

Mike's review moat and 24/7 claim live on GBP and on their site chrome. Those are not page types. They are positioning. Brimer's site already has more local URL surface than Mike. The gap is not "missing town pages." It is trust (reviews schema, real photos, hours truth) and speed of change.

## 6. Hunter / OTTO bottleneck (ten lines)

1. Hunter at Dream Surge is the only person who edits brimercon.com (pack 01 and 02). Bots never edit the site. Changes ship as packaged briefs from Milton or Dexter, then wait on Hunter.
2. Pack 02 still lists defects from 2026-07-31 (form error, CSLB missing, snippet missing, no Terms). Live crawl today shows CSLB in the footer, Terms at /terms-of-use/ in the sitemap, and the OTTO worker already installed. The pack defect list is partly stale. The process (wait on Hunter) is not.
3. OTTO is live on every HTML GET (headers plus meta otto enabled=true) and Search Atlas reports installation_method cloudflare_worker, detected_cms gohighlevel (wrong), autopilot_is_active true, total deployed_fixes 0, last_deploy_event_timestamp null. Source: /workspace/brimer/seo/api-raw/otto_projects_after_gsc.json and this crawl's headers.
4. Standing rule: OTTO stays in review before deploy because a worker can rewrite titles and schema where Hunter cannot see the change (/workspace/brimer/seo/2026-08-27_hunter_snippet_request.md). Autopilot on with zero deploys is the current state, not a change made today.
5. OTTO scores as of that REST pull: technical 96, content 28, authority 7, 53 pages, 531 issues, 0 healthy pages, seo_optimization_score 0. Last OTTO crawl 2026-08-25. Next analysis was 2026-09-01.
6. Town pages already exist (24 CA URLs in sitemap-0.xml). The 2026-08-28 indexability file called them a tight template with similar titles. That is a quality problem, not a missing URL problem. Hunter owns any rewrite of that template.
7. Martis Valley is a nav label, not a page. /service-areas/martis-valley/ is still 404 (x-vercel-error NOT_FOUND this morning). Martis Camp is the live URL. A rebuild or a Hunter ticket can either add a real Martis Valley page or stop linking the 404 path if any inbound still uses it.
8. GSC is connected in Search Atlas as of 2026-08-29 (sc-domain:brimercon.com, /workspace/brimer/seo/2026-08-29_gsc_connected.md). That does not ship on-page changes. On-page still goes through Hunter or through OTTO deploy, which is parked.
9. Homepage and about Last-Modified this morning PT (home 8:56 AM PT, about 9:02 AM PT, x-vercel-cache MISS on about). Service pages still show Last-Modified 2026-08-28. Someone can ship Astro to Vercel. The bottleneck is not "Vercel cannot deploy." It is who is allowed to change copy, schema, and photos, and how long a ticket sits.
10. A CMS switch is not forced by these facts. Astro already outputs sourceable HTML. Switching to GoHighLevel or WordPress would add a second edit path and would not by itself fix OTTO, town template sameness, the 404, the OG 404, or the Heavenly image.

## 7. What a stronger site needs (evidence, not a CMS vote)

1. Working share image. og:image and twitter:image on every page point at /images/og-default.jpg, which is 404 from Vercel today.
2. Hours and schema that match how the shop actually runs. Public /contact/ and Plumber openingHoursSpecification say 7:00 to 20:00 every day. Pack 01 says Monday to Friday 8 to 6. Pick one and make HTML plus JSON-LD agree.
3. Visible street NAP on more than /contact/. Home schema has 10647 Manchester Dr. Home visible text does not. Local landings should repeat the same NAP.
4. AggregateRating / Review schema on home or /reviews/, sourced from real Google reviews, never gated. /reviews/ currently has no JSON-LD.
5. areaServed expanded to the CA towns that already have pages (Tahoe Donner, Glenshire, Martis Camp, and the rest of sitemap-0.xml), still never Nevada.
6. Real photographs on about and on service pages. Those URLs are logo only. A shoot changes them. Keep Heavenly / South Lake out of the file set.
7. Honest image pipeline: real JPEG or webp, matching Content-Type, matching width/height, alts that describe the file. Drop the empty data-author-photo img or give it a real src.
8. Membership page either launch-ready without public dollar amounts, or parked, per the no public prices rule. The live page quotes tier and HOA dollars.
9. Town page distinctiveness. 24 URLs exist. OTTO content score 28 and the 2026-08-28 note on a tight template are the evidence they do not yet win queries by themselves.
10. One edit path Sierra can run without waiting on a worker rewrite. Keep Astro if Hunter can turn briefs in days. Rebuild only if Sierra needs non-Hunter editing. OTTO deploy is not that path while the standing rule is review before deploy.
11. Fix or explicitly retire /service-areas/martis-valley/ 404. Do not leave a labeled region with a dead URL.
12. Keep CA only, phone 530-587-0733, CSLB 1149344, and the Nevada exclusion. Those are already on the live footer. Do not add Incline, Reno, or South Lake as service claims. The Heavenly gondola image is the current leak on that last point.

## 8. Blockers and what this snapshot is not

- No Search Atlas write, no OTTO deploy, no Hunter email, no git clone, so branch-level proof of today's Vercel Last-Modified (who pushed home/about/blog this morning) is not in this file. Header Last-Modified is the proof that origin HTML changed.
- Town pages were not recrawled one by one today. Inventory of those 24 URLs rests on sitemap-0.xml plus the 2026-08-28 indexability crawl.
- Image "stock versus local" for the branded van hero is visual judgment, not a photographer invoice. The Heavenly gondola is factual and out of area.
- Mighty Mike inner page copy was not copied. Comparison is page types, sitemap size, headers, and JSON-LD types only.
- Form submit was not tested (contact form error in pack 02 is unverified today).
- join.brimercon.com was not fetched.
