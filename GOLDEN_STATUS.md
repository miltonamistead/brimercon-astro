# GOLDEN_STATUS — three pages for Milton's review

Branch `cursor/astro-rebuild-d8c5`, 2026-09-19. **Stopped here for approval.** The other 5 services, 23 towns, blog and remaining core pages are not built.

## What to look at

Screenshots are committed at 390×844 (iPhone width), two per page: the first screen exactly as it lands, then a scroll view.

| Page | Screenshots | Source |
|---|---|---|
| Home `/` | `docs/golden/home-1-first-screen.png`, `home-2-scroll.png` | `src/pages/index.astro` |
| Service `/services/water-heaters/` | `docs/golden/service-water-heaters-1-first-screen.png`, `-2-scroll.png` | `src/pages/services/[slug].astro` + `src/data/services.ts` |
| Town `/service-areas/truckee/` | `docs/golden/town-truckee-1-first-screen.png`, `-2-scroll.png` | `src/pages/service-areas/[slug].astro` + `src/data/town-content.ts` |

To click around them yourself: `npm install && npm run build && npm run serve`, then open `http://127.0.0.1:4322/`.

The fixed call bar is visible in shot 1 of each page, pinned to the bottom. It is hidden in the scroll shots on purpose: a full-page screenshot renders a fixed element once, stranded partway down the image, which looks like a layout bug it is not.

## The three questions I actually need answered

1. **Is the first screen right?** Call button first, form as a text link under it, hours and the voicemail line, then since-1997 / CSLB / reviews. No photo above the fold on mobile, because a photo pushes the call button down.
2. **Is the town page different enough?** Truckee leads with water heaters at altitude, then everyday repairs across a century of housing, freeze season, gas and the Town of Truckee permit path, then monitoring for empty houses. The other 23 towns each get their own lead angle and section order from `docs/town-briefs.md`, not this page with the name swapped.
3. **Is the homepage close enough to what ranks?** Title, H1 and body copy are the live ones. The five deliberate changes are listed below.

## Where the homepage departs from live, and why

Title and H1 are byte-identical to live (verified against `docs/crawl/live-inventory.json`). The copy policy freezes homepage copy because it ranks position 1 for `truckee plumber`. These five changes are hard rules overriding that freeze:

| Change | Live said | Twin says | Why |
|---|---|---|---|
| Service-area heading | "California side only" / "Serving the California side of Truckee and North Lake Tahoe." | "Towns we serve" / "Serving Truckee and the communities around North Lake Tahoe." | Audit B2/H9: name towns, do not exclude a state |
| Areas FAQ | ends "We are not licensed in Nevada." | ends with the town list | same |
| Emergency FAQ | "call us at 530-587-0733 for the fastest response. We prioritize emergency calls and can often respond same-day." | "call us at 530-587-0733. Call 530-587-0733 any time. If we miss you, leave a message." | Audit B4: no unapproved speed claims; your ruling on evenings and voicemail |
| Third showcase image | Heavenly gondola, South Lake Tahoe | a lakeside-home image from your own set, with its real alt text | Out of area, and the live alt text described a different picture |
| Review ratings | "Google 5.0 (16 reviews)", "4.9 on Yelp (22 reviews)" | quotes with no rating asserted, links to both listings | See below |
| Em and en dashes | throughout | commas, parentheses, full stops | Audit B4 |

Structurally one thing changed: the live hero is replaced by the first-screen block, which is what puts the call button above the fold.

## Reviews: a decision for you

Live claims Google 5.0 from 16 reviews. Your Google Business Profile says **4.97 from 32 reviews**. Both cannot be current, and a number hard-coded into a static page goes stale the next time someone reviews you. So the strips quote real customers and link to Google and Yelp, where the live number lives, and assert no rating anywhere. There is no `AggregateRating` schema either way, per the SEO brief.

If you want a live star rating on the page, the fix is pulling reviews from the Google Places API at build time (`docs/design.md` §3). That needs a Places API key from you.

Two reviews are held back deliberately: one mentions a radiant heating system (the SEO brief keeps radiant copy off the site), and one describes a plumber arriving within an hour, which reads as a response-time promise nobody approved.

## Truckee facts used, and where each came from

All from `docs/crawl/town-facts.json`, transcribed from your current page. Nothing invented, nothing borrowed from another town.

Elevation 5,800 to 6,200 ft · TDPUD water and electric, 100% groundwater from the Martis Valley basin · Truckee Sanitary District collection, TTSA regional treatment · Southwest Gas · permits through the Town of Truckee Building and Safety Division, not Placer County, because Truckee incorporated in 1993 · Historic District homes from the late 1800s, Gateway and Meadow Park from the 1940s, Sierra Meadows and Prosser Heights modern.

That is six town-specific facts; the similarity gate requires at least four per town page.

## Links that 404 in this build

27 internal links point at pages that are not built yet: `/about/`, `/contact/`, `/services/` and the other five service pages, `/service-areas/` and the other 23 towns, `/request-service/`, `/reviews/`, `/faqs/`, and the legal pages. They all land on the custom 404, which carries a call button, so nothing dead-ends. That is expected at this milestone, not a defect. **`Or send a service request` is one of them** — the form itself is M1.

## Checks that passed

```
npm run build            # content gate on all 4 built pages
  PASS phone · geography · price · dash · nap
npm run qa:first-screen  # 16 passed, 4 skipped (contact, not built)
```

- Titles match live exactly on all three. The only H1 change is water heaters, from "Water Heaters" to "Water heater repair and installation in Truckee and North Lake Tahoe", which the SEO brief asked for so the page can catch the repair and installation searches currently landing on the homepage at position 25.
- One `<h1>` per page, canonicals point at live, every page `noindex, nofollow`.
- Schema: `Plumber` with all 24 California towns in `areaServed` (live lists four), `logo` and `image` present (live has neither), `Service` + `FAQPage` + `BreadcrumbList` on the service and town pages with a URL on every breadcrumb (live drops the last one). No `AggregateRating`. No Nevada string anywhere in the markup.
- Phone `530-587-0733` only; 5 to 6 click-to-call links per page.

## Weight versus live

| Page | Twin HTML | Live HTML | |
|---|---|---|---|
| Home | 23 KB | 133 KB | 5.7x smaller |
| Water heaters | 17 KB | 85 KB | 5.1x smaller |
| Truckee | 22 KB | 99 KB | 4.4x smaller |

Zero client-side JavaScript, zero third-party scripts, one 7.6 KB stylesheet, no webfonts. Full Lighthouse numbers come at M3 against the Vercel preview, where network conditions are comparable.

## Known rough edges

- **Town hero photos are not placed yet.** All 24 carried from live ship with empty alt text; each needs alt written against the actual photo. The Truckee golden currently uses no hero, which is also the mobile-speed choice. Tell me if you want the hero back on desktop.
- **The five marketing images are JPEG bytes in a `.png` filename**, served as the wrong content type. Re-encoding is queued for M1.
- **Desktop is functional but not designed.** The first screen contract is specified at 390px; the desktop layout is the same blocks widened. If you care about desktop hero treatment, that is worth saying now.

## What I need from you

1. **Approve or mark up these three.** Anything you change here propagates to 5 services and 23 towns, so it is much cheaper now.
2. Decide on the review rating question above.
3. Still open and not blocking: membership dollar amounts, the emergency landing URL, the lead email sending domain, and whether the OTTO worker stays after a swap.

On approval, releasing the rest is a one-line change to `src/data/golden.ts` plus writing each town against its brief.

## Unchanged

No contact with Hunter or Dream Surge. No live site, DNS, Cloudflare, GoDaddy or live-Vercel changes. No OTTO deploys, no GBP writes, no GoHighLevel changes. Repo private. Phone 530-587-0733 only. No prices. No out-of-area service claims.
