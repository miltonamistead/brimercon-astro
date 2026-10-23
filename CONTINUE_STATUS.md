# CONTINUE_STATUS — Places rating live, twin now 18 pages

Branch `cursor/astro-rebuild-d8c5`, 2026-09-19. **Stopped before any swap or Vercel production domain.** No bulk towns, no Hunter, no live site, no DNS, no customer emails.

## 1. Google rating (H10)

Wired end to end and rendering. `npm run reviews` calls Places Details (New) and writes `src/data/reviews-cache.json`, which is committed. **The site build makes no network call**, so a Places outage can neither break nor slow a deploy, and the page can never show a number nobody fetched.

- **Trust strip, inside the first screen:** a five-star row plus "5.0 from 32 Google reviews", linked to the listing.
- **Review cards** sit after the first screen, so they never push the call button down.
- **Fail closed:** a missing key, a failed request, or a response without a numeric rating leaves the cache untouched and exits non-zero. If the cache holds no usable rating, `ratingSummary()` returns null and the strip quietly falls back to a plain "Google reviews" link. Nothing is ever invented.
- **No `AggregateRating` schema** anywhere, including `/reviews/`.
- **Held-back reviews survive a refresh.** The filters match on review text, not on a hand-curated list, so a review mentioning radiant heating or describing an arrival time is dropped whether it came from the seed or from the API. One is currently held back.

### The rating you are looking at, and a decision for you

`GOOGLE_PLACES_API_KEY` was not available this run. Rather than ship a blank strip, the seed cache carries **4.97 from 32**, read from the Truckee Google Business Profile record on 2026-09-19 via Paige. That is real and dated, not estimated, and the file says so in its own `note` field. Displayed as 5.0, which is what Google itself shows for 4.97.

Worth knowing: live currently claims "Google 5.0 (16 reviews)". The count has roughly doubled since that was written. Either way, the first successful `npm run reviews` replaces the whole file and flips `source` to `google-places-api-v1`.

**To add the key:** create a Google Cloud project, enable the Places API, create an API key restricted to it, then run `GOOGLE_PLACES_API_KEY=... npm run reviews`, commit the changed cache, and deploy. Billing note: `rating`, `userRatingCount` and `reviews` are all Place Details Enterprise SKU fields, but this is one call per refresh, not one per visitor. If you would rather show no rating until a real Places call has run, say so and I will empty the seed.

## 2. What now exists: 18 pages, zero broken links

| Section | Pages |
|---|---|
| Core | `/`, `/about/`, `/contact/`, `/faqs/`, `/reviews/` |
| Services | `/services/` hub and all six service pages |
| Service areas | `/service-areas/` hub, `/service-areas/truckee/` |
| Lead capture | `/request-service/`, `/thank-you/`, `POST /api/lead/` |
| Legal and utility | `/privacy-policy/`, `/terms-of-use/`, `404`, `robots.txt` |

Every one follows the H2 rules in `PLAN.md` §3d, and every one keeps a section for each topic its live page gives an H2. The five new service pages each got their own topics from live rather than a shared template: gas has installation, hookups, leak detection and shutoff valves; kitchen and bath has five including water pressure; smart leak shutoff has four including what insurers actually say.

**Towns deliberately stayed at one.** The remaining 23 need a written brief each and must clear the similarity gate. Shipping 23 near-identical pages is the exact failure this project exists to avoid, and the earlier audit called it out by name.

That created a problem worth flagging: hubs and footers list all 24 towns, so 23 links would have 404'd. A `TownLink` component now renders a link only when the town has a page and plain text otherwise, so a partly built twin has no dead links, and every name becomes a link automatically when the rest ship. **Zero broken internal links across all 18 pages.**

## 3. Lead capture is working

`POST /api/lead/`, one on-demand route; everything else is static.

- Short form (audit H3): name, phone and what is wrong are the only required fields. Town is free text with all 24 as a datalist, prefilled on a town page. No timing dropdown.
- Works with JavaScript off: posts, then redirects to `/thank-you/?ref=...`. With JavaScript it submits in place.
- **A browser never sees raw JSON.** Errors render a real page whose primary action is the call button.
- **Fail closed, verified:** with no channel configured the endpoint returns 503 and a page saying to call, rather than a confirmation that means nothing. `LEAD_REQUIRE_DELIVERY` defaults true. A file store never counts as delivery.
- Honeypot and time trap respond as success and deliver nothing. Cross-site `source_path` is discarded. No raw IP is stored.
- **No new GoHighLevel webhook** (audit H7). Email via Resend plus a generic webhook for Zapier into a Sheet, or Housecall Pro.

`npm run qa:form` against a local receiver: **14 of 14 checks pass**, covering delivery reaching a real channel, the no-JS redirect, silent spam drops, validation, HTML error rendering, and the discarded cross-site path.

## 4. Checks

```
npm run build            # 19 built files
  qa-content   PASS  phone · geography · price · dash · nap
  qa-headings  PASS  all H2 rules
npm run qa:first-screen  # 20 passed, 0 skipped (contact now exists)
npm run qa:form          # 14/14
```

Two gate defects surfaced and were fixed rather than worked around: the heading gate read "Martis Camp" and "Tahoe Vista" as mid-heading capitalisation, and it demanded town names in privacy-notice headings. Legal and utility pages are now exempt from the place-name ratio only, with the reasoning in the script, since a heading like "What we collect" has no local intent.

Screenshots regenerated at 390×844; the trust strip now shows stars.

## 5. Worth your attention

- **Desktop is still functional rather than designed.** The contract is specified at 390px and the desktop layout is the same blocks widened. If desktop matters for this review, say so.
- **Town hero photos are carried but not placed,** and all 24 still ship with empty alt text from live.
- **`/privacy-policy/` was updated to match what this build actually does:** no analytics or tag manager unless a GA4 id is set, and leads going to Brimer's own email and record store rather than GoHighLevel. The live notice describes the old setup.
- **Blog, resources and membership are not built yet.** They are M2. Nothing links to them, so nothing 404s.

## 6. Still open, unchanged

Membership dollar amounts, the emergency landing URL, the lead email sending domain (DKIM cannot go on `brimercon.com` without touching the live zone), and whether the OTTO worker stays after a swap.

## 7. Next, when you are ready

M2 is the remaining 23 towns, one brief at a time through the similarity gate, plus blog, resources and membership. M3 is the Vercel staging project, which needs you: a new project, Deployment Protection on, no custom domain, and the lead env vars.
