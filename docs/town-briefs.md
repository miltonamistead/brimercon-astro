# Town page briefs and the similarity gate

Audit H11 / decision D12: the 24 town pages must be genuinely different from one another. This document is the mechanism. **No bulk town generation happens until one golden town page is approved (M0.5) and the similarity gate is in place.**

## 1. Why this exists

The live town pages share a tight template: same section order, same sentence shapes, the town name swapped in. OTTO scores the site's content 28/100, and GSC shows the 24 pages almost never appear for the queries they were built for (Truckee town has 3 query rows, Homewood 1, Donner Summit 3; everything else lands on the homepage). Rebuilding the same template with nicer markup would reproduce the same problem.

The facts to differentiate with already exist and are captured in `docs/crawl/town-facts.json` and `src/data/towns.ts`: elevation, water and sewer district, permit authority, housing stock, neighbourhood names, and six town-specific FAQs per page.

## 2. Town types

Each town gets a structure appropriate to how plumbing actually differs there. One golden page per type is built and reviewed before the rest of that type is generated.

| Type | Towns | What the page leads with |
|---|---|---|
| `town` | Truckee, Glenshire, Tahoe City | Everyday service breadth; permit authority; the range of housing ages |
| `lakefront` | Donner Lake, Kings Beach, Tahoe Vista, Carnelian Bay, Dollar Point, Agate Bay, Homewood, Tahoma, Meeks Bay | Seasonal vacancy, rentals, freeze risk on exposed runs, leak monitoring |
| `gated` | Martis Camp, Lahontan, Schaffer's Mill, Gray's Crossing, Old Greenwood | Estate-scale systems, hydronic interfaces, gate and estate-manager coordination |
| `resort` | Tahoe Donner, Northstar, Olympic Valley, Alpine Meadows | HOA and association context, high winter occupancy, association water systems |
| `summit` | Donner Summit / Serene Lakes, Soda Springs, Norden | Extreme snow load and elevation, long vacancy, access in winter, Nevada County permitting |

"Nevada County" is a California county. It is allow-listed in `scripts/qa-content.mjs` precisely because Norden and Soda Springs genuinely permit through the Nevada County Community Development Agency.

## 3. Brief template

One brief per town, filled from `docs/crawl/town-facts.json` before the page is written. A brief with blanks is not ready to build.

```
Town:              Tahoe Vista
Slug:              tahoe-vista
Type:              lakefront
Group:             North Shore
Elevation:         6,250 to 6,300 ft
Water / sewer:     NTPUD (water and sewer), TTSA (regional treatment)
Gas / electric:    Southwest Gas / Liberty Utilities
Permit authority:  Placer County Building Services Division
Housing stock:     <one line from the live overview>
Named places:      <neighbourhoods, roads, landmarks the live page names>

Lead angle:        <the one plumbing reality that is most specific to this town>
Three sections:    <chosen for this town, not a fixed list>
Distinct facts:    <at least 4 that do not appear on any other town page>
FAQs:              <6, from town-facts.json, answers matching visible copy>
Internal links:    <2 service pages most relevant here + the group hub>
Hero alt text:     <describes the actual photo, not a generic phrase>
```

## 4. Writing rules

- Every section must carry at least **two town-specific facts**. A paragraph that reads correctly with a different town name substituted fails.
- Section order and section count vary by type. Do not ship the same six headings 24 times.
- The lead angle is the differentiator: Martis Camp is estate-scale hydronics, Kings Beach is rentals and turnover, Norden is snow load and access, Truckee is breadth and the Town permit path.
- Reuse the live factual content (elevation, districts, permitting). Do not invent new facts and do not import facts from a neighbouring town.
- Copy policy in `PLAN.md` §3c applies in full: no dashes, no dollar figures, no unapproved speed claims, name towns rather than excluding a state.
- The first screen is identical in structure everywhere (`PLAN.md` §3b) with the town name in the area line. Differentiation lives in the body, not the call to action.

## 5. Similarity gate (`scripts/qa-similarity.mjs`, to build in M2)

Runs over built town pages before they can merge:

1. Extract main content per town page (same stripping as `scripts/crawl-live.mjs`).
2. Shingle into word trigrams; compute pairwise Jaccard similarity across all 276 town pairs.
3. **Fail** any pair above **0.45**. **Warn** between 0.35 and 0.45.
4. **Fail** any page whose town-specific fact count is below 4, where a fact is an elevation, a named district or utility, a permit authority, or a named neighbourhood from that town's brief.
5. Report the most similar pairs so the writer knows what to rework.

Boilerplate that is legitimately shared (first screen, footer, CTA, form) is excluded from the comparison by stripping the header, footer, first-screen block and form before shingling.

## 6. Order of work

1. M0.5: golden town page for `truckee` (type `town`), approved by Milton alongside the golden home and service pages.
2. M2: one page per remaining type (`lakefront`, `gated`, `resort`, `summit`), each reviewed.
3. M2: the remaining towns of each type, generated from briefs, all passing the similarity gate.
