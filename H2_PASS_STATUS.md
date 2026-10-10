# H2_PASS_STATUS — heading rules applied to the three goldens

Branch `cursor/astro-rebuild-d8c5`, 2026-09-19. Rules: `docs/source/H2_RULES.md`, now recorded as `PLAN.md` §3d so bulk inherits them.

**Titles and H1s are byte-identical to the approved golden.** Verified against `docs/crawl/live-inventory.json`: all three titles still match live exactly, and the only H1 that differs from live is water heaters, which was already approved.

**Stopped for your re-review.** No bulk pages, no Places API, no Vercel, no live site.

## Two structural fixes you did not ask for but rule 6 required

Rule 6 says keep one section per H2 topic the live page has. Checking the live pages showed the goldens had merged topics:

- **Truckee had 5 sections where live has 9.** Water heater repair, installation and tankless were collapsed into one heading; gas line repair and installation into another; and **kitchen and bath plumbing had been dropped entirely**. All nine live topics are now separate sections in live's order.
- **Water heaters had 1 section where live has 6.** Tank, tankless and annual maintenance were H3s under a single "What the work covers" heading, and live's "Common issues we resolve", "Our process" and "Why Brimer" sections were missing. All six are now their own H2 sections.

That is why the two pages got longer: Truckee 8,144 to 10,279px, water heaters 5,422 to 7,471px.

## Home `/` — 9 content H2s, 5 name a place

Every eyebrow deleted. The four trust points were `<h2>` and are now `<h3>`, matching live and keeping four non-query headings out of the H2 list.

| Before | After | |
|---|---|---|
| eyebrow "Outcome-focused craftsmanship" + "Built for how mountain homes are lived in" | **Plumbing built for Truckee mountain homes** | 41ch, place |
| eyebrow "What we do" + "How we help" | **Water heaters, gas lines, leaks and drains** | 42ch |
| eyebrow "Why mountain homes need a specialist" + "Built for Tahoe and Truckee" | **Why mountain home plumbing is different** | 39ch |
| eyebrow "What to expect" + "Our process" | **What happens when you call us** | 29ch |
| "Emergency plumbing help available" | **Emergency plumber in Truckee and Tahoe** | 38ch, place |
| eyebrow "Real reviews from real customers" + "What homeowners say" | **What Truckee homeowners say about us** | 36ch, place |
| eyebrow "Towns we serve" + "Areas we serve" | **Towns we serve around North Lake Tahoe** | 38ch, place |
| eyebrow "Common questions" + "Frequently asked questions" | **Common plumbing questions** | 25ch |
| eyebrow "Get started today" + "Ready to get started?" | **Talk to a Truckee plumber today** | 31ch, place |
| `<h2>` "Licensed Plumbing Contractors" and 3 more | demoted to `<h3>` | matches live |

## `/services/water-heaters/` — 11 content H2s, 5 name a place

| Before | After | |
|---|---|---|
| "What the work covers" (tank, replacement, tankless, maintenance as H3s) | split into three H2 sections below | rule 6 |
| — | **Tank water heater repair in Truckee** | 35ch, place |
| — | **Tankless water heaters at Tahoe altitude** | 40ch, place |
| — | **Annual water heater maintenance and flushing** | 44ch |
| missing (live has it) | **Common water heater problems we fix** | 35ch |
| missing (live has it) | **What happens when we arrive** | 27ch |
| missing (live has it) | **Why Truckee homeowners call Brimer** | 34ch, place |
| "Need a plumber for water heaters?" | **Get hot water back on in Truckee** | 32ch, place |
| eyebrow + "What homeowners say" | **What homeowners say about water heater work** | 43ch |
| "Towns we cover" | **Towns we cover around Lake Tahoe** | 32ch, place |
| "Frequently asked questions" | **Water heater questions we get asked** | 35ch |
| "Related services" | **Related plumbing services** | 25ch |

## `/service-areas/truckee/` — 14 content H2s, 7 name a place (exactly half)

Live uses "… in Truckee" on all nine service headings. Rule 3 forbids a place name in all of them and rule 4 forbids a frame other towns could reuse, so each heading now pairs the service with something only Truckee can claim: its groundwater, its elevation, its 1940s Gateway housing, its Town-of-Truckee permit path, its TSD sewer district.

| Live topic | Before | After | |
|---|---|---|---|
| Water Heater Repair in Truckee | "Water heaters at 6,000 feet" (merged 3 topics) | **Water heater repair in Truckee's older homes** | 44ch, place |
| Water Heater Installation in Truckee | merged above | **Water heater installation at 6,000 feet** | 39ch |
| Tankless Water Heaters in Truckee | merged above | **Tankless water heater install at altitude** | 41ch |
| Gas Line Repair in Truckee | "Gas work and the permit path" (merged 2 topics) | **Gas line repair after freeze and thaw damage** | 44ch |
| Gas Line Installation in Truckee | merged above | **Gas line installation and Town of Truckee permits** | 49ch, place |
| Kitchen and Bath Plumbing in Truckee | **dropped** | **Kitchen and bath plumbing in 1940s Gateway homes** | 48ch, place |
| Moen Flo Smart Leak Detection in Truckee | "Watching a house you are not in" | **Leak detection for homes left empty in winter** | 45ch |
| Frozen and Burst Pipe Repair in Truckee | "Freeze season and homes that sit empty" | **Frozen and burst pipe repair in Truckee winters** | 47ch, place |
| Plumbing Repairs in Truckee | "Everyday repairs across a century of housing" | **Drain and sewer repairs on the TSD system** | 41ch |
| — | "Need a plumber in Truckee?" | **Burst pipe, gas smell or no water tonight** | 41ch |
| — | eyebrow + "What Truckee homeowners say" | **What Truckee homeowners say** | 27ch, place |
| Popular services in Truckee | "Most requested plumbing work in Truckee" | **Jobs we do most in Truckee neighborhoods** | 40ch, place |
| Frequently Asked Questions | "Truckee plumbing questions" | **Questions we get about altitude and permits** | 43ch |
| Need a plumber in Truckee? | "Talk to a plumber who works in Truckee" | **Get a Truckee plumber on the phone** | 34ch, place |

The last five come from `TownContent.headings` in `src/data/town-content.ts`, written per town. They are not built by interpolating the town name into a shared string, because "Emergency plumber in {town}" would be the identical frame on all 24 pages, which is what rule 4 exists to stop. Each town writes its own five and tunes its own place-name ratio.

## Rules now enforced by the build

`scripts/qa-headings.mjs` runs in `npm run build` and checks H2s inside `<main>` only, since footer headings are site furniture:

- rule 2: no eyebrow label above an H2, including an unclassed short paragraph sitting immediately above one
- rule 3: a place name in roughly half, failing at 100% and flagging above about 70% or below 25%
- rule 5: sentence case, under 60 characters, no colon split, no em or en dash (literal or `&mdash;`/`&ndash;`)

Rules 1, 4 and 6 stay editorial and need a human. `npm run qa:headings` prints every H2 with its length and whether it names a place, which is the quick way to check rule 3 while writing.

I tested the gate in both directions rather than trusting a pass. A fixture with an eyebrow, title-case, a colon split, a 91-character heading and an `&mdash;` produced 11 violations and exit 1. The first version of the gate missed the `&mdash;` because it stripped named entities instead of decoding them, and it wrongly flagged "North" in "North Lake Tahoe" as mid-heading capitalisation; both are fixed.

## Checks

```
npm run build            # astro build, then both gates
  qa-content   PASS phone · geography · price · dash · nap
  qa-headings  PASS all H2 rules
npm run qa:first-screen  # 16 passed, 4 skipped (contact, not built)
```

Screenshots regenerated at 390×844, six files in `docs/golden/`.

## Open, unchanged from last pass

The review rating question (live says Google 5.0 from 16, the Business Profile says 4.97 from 32, so no rating is asserted and both listings are linked), membership dollar amounts, the emergency landing URL, the lead email sending domain, and whether the OTTO worker stays after a swap.

## Unchanged

No contact with Hunter or Dream Surge. No live site, DNS, Cloudflare, GoDaddy or Vercel changes. No Places API. No bulk pages. Repo private. Phone 530-587-0733 only. No prices. No out-of-area service claims.
