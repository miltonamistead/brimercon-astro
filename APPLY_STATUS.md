# APPLY_STATUS — Claude Fable audit applied

Branch `cursor/astro-rebuild-d8c5`, 2026-09-19. Checklist: `docs/source/APPLY_AUDIT.md` (accepted by Milton, `docs/source/AUDIT_ACCEPTED_SUMMARY.md`).

`npm run build` is green. **Stopped before bulk page generation as instructed** — no service, town, blog or core page templates were created. Next action is Milton's.

## Blockers

### B1 First-screen contract — done
Calling is now the primary action by construction, not convention.

- `PLAN.md` §3b specifies the contract; `docs/qa-plan.md` §2 specifies the gate.
- `src/components/FirstScreen.astro` renders, in order: H1 (`data-fs="h1"`), service-area line (`data-fs="area"`), full-width call button (`data-fs="call"`), hours line including the after-hours sentence (`data-fs="hours"`), trust strip with since-1997, CSLB and a Google reviews link (`data-fs="trust"`). The form link (`data-fs="form-link"`) sits under the call button at text weight.
- `src/components/CallBar.astro` is a fixed bottom call bar, mobile only, CSS only. Body padding reserves its height.
- `tests/first-screen.spec.ts` + `playwright.config.ts` assert all of it at 390×844 on the machine's installed Chrome (no browser download). Targets: `/`, one service, one town, `/contact/`, plus the 404 template.
- Verified on the built 404 template: H1 77px, area 121px, call 306px, form link 370px, hours 407px, trust 467px — all inside the 640px fold; call button 358px wide of 390px; call bar pinned at 780px of an 844px viewport. **4 passed, 16 skipped** (skipped targets are pages that do not exist yet; skips are reported, never counted as passes).

### B2 Geography gate — done
- `scripts/qa-content.mjs` matches **whole-word and case-sensitive**, so "renovation" no longer trips "Reno".
- **"Nevada County" and "Sierra Nevada" are allowed.** This was a real false positive: Norden and Soda Springs genuinely permit through the Nevada County Community Development Agency, which is recorded in `src/data/towns.ts`.
- `" NV "` is forbidden. **No exclusion sentence is required anywhere.**
- Removed from customer copy: "California side only", "Not licensed in Nevada", and the Nevada-exclusion FAQ answer. The footer keeps `CA CSLB License #: 1149344` with no Nevada sentence. Copy now names towns instead (`site.serviceAreaLine`, and six "California side" phrasings rewritten in `services.ts`).

### B3 Sources in repo — done
- `docs/source/`: `KICKOFF.md`, the three 2026-08-31 plan/SEO/snapshot files, plus `APPLY_AUDIT.md` and `AUDIT_ACCEPTED_SUMMARY.md`.
- `scripts/crawl-live.mjs` (`npm run crawl`) replaces the ad-hoc crawl and is read-only by construction.
- `docs/crawl/pages/` now holds **main-content text for all 53 live URLs**, alongside `live-inventory.json`, `town-facts.json` (24 towns, 144 FAQs), the new `images.json`, and `live-robots.txt`.

### B4 Copy policy — done
- Policy written into `PLAN.md` §3c: homepage copy frozen apart from dash cleanup (it ranks position 1 for `truckee plumber`); service and town rewrites unblocked only by golden-page approval; no dashes; no unapproved speed claims; after-hours line; no prices; name towns; no internal voice in customer copy.
- `src/data/services.ts` fixed: removed the leaked **"We do not publish prices on this page."**, removed **"Same-day diagnosis"**, **"Priority response"** and **"priority / fastest response / often on site the same day"**, and cleared all 12 em and en dashes.
- After-hours line is now a single constant, `site.afterHoursLine`: *Call 530-587-0733 any time. If we miss you, leave a message.*
- Dash check added to the build gate, covering literal characters and `&mdash;`/`&ndash;` entities.

### B5 Private repo — already done by Sierra.

## High priority

| Item | What changed |
|---|---|
| **H1** staging | `PLAN.md` §5 rewritten. Deployment Protection is now **required**, not recommended. Staging `robots.txt` serves **`Allow: /`** so crawlers can actually read the `noindex` — blocking and noindexing at once is self-defeating. Never promote this project to a Vercel production domain before the swap. Protection Bypass header documented for QA and wired into `playwright.config.ts` via `VERCEL_PROTECTION_BYPASS`. |
| **H2** delivery | `LEAD_REQUIRE_DELIVERY` now defaults to **true**. The file store is explicitly **not** delivery (Vercel's filesystem is ephemeral) and can never satisfy the requirement. Two independent channels must be live before the swap; a lead that reaches nothing returns 503 and the page tells the person to call. |
| **H3** shorter form | Required fields cut to **name, phone, what is wrong**. Timing dropdown dropped. Town is free text plus a datalist of all 24 towns, prefilled on town pages. `formCities`/`timingOptions` removed from `site.ts`; `townNames` added to `towns.ts`. |
| **H4** `/api/lead/` | Trailing slash everywhere, so a POST never takes a redirect. |
| **H5** error rendering | Non-JSON requests get a real HTML error page carrying the call button, never a bare JSON body. `source_path` validated as a same-site path. |
| **H6** images | Decision A9 reversed. **30 files carried** into `public/images/` (29 unique — two backgrounds are byte-identical), gondola excluded. `scripts/fetch-live-images.mjs` + `docs/design.md`. Images sit below the first screen on mobile. |
| **H7** no new GHL webhook | Recorded as hard rule §0.7 and decision D6. Second channel is Zapier→Sheet or Housecall Pro. Ownership table added to `docs/swap-runbook.md`. |
| **H8** after-hours copy | `site.afterHoursLine`, used by the first screen, the footer and the frozen-pipes FAQ. |
| **H9** CA-side wording | Covered under B2. |
| **H10** reviews and map | Decision D11. Google reviews pulled at build time into a committed cache (design in `docs/design.md` §3); map is lazy and not in the first screen; **no `AggregateRating` schema**. |
| **H11** town uniqueness | `docs/town-briefs.md` added: five town types, a per-town brief template, writing rules, and a similarity gate spec (trigram Jaccard, fail above 0.45, minimum 4 town-specific facts). One golden page per type before bulk. |

## Also done

- `scripts/qa-phones.mjs` became `scripts/qa-content.mjs` — it now checks phone, geography, price, dash and NAP, so the old name was misleading. Wired into `npm run build`; `npm run qa:content` runs it standalone.
- **The gate was tested in both directions.** A fixture with a wrong phone number, six out-of-area names, a dollar figure, dash entities and a missing NAP produced 13 violations and exit 1. A fixture containing "Nevada County", "Sierra Nevada" and "Renovation" passed clean. Both robots.txt variants were built and diffed.
- M0 chrome built so the gates have something real to check: `Base.astro`, `Header`, `Footer`, `global.css`, `404.astro`, `robots.txt.ts`, `favicon.svg`, and a generated `og-default.jpg` (live 404s on that file today, so every share card on brimercon.com is currently blank).
- `src/data/towns.ts` added: all 24 towns with elevation, permit authority, utilities, nav group and town type, transcribed from the crawl.
- Hours decision D1 closed per Milton's ruling: 7:00 AM to 8:00 PM daily, voicemail after a missed call.

## Waiting on Milton

1. **Golden page screenshots — the blocker.** Home, one service (`/services/water-heaters/`), one town (`/service-areas/truckee/`). Bulk generation stays stopped until these are approved. Approval also unblocks rewriting service and town copy (`PLAN.md` §3c).
2. **Vercel staging project** — a new project, Deployment Protection on, no custom domain, env vars per `docs/lead-capture.md` §4. Agents hold no Vercel credentials.
3. **Lead channels** — Resend key plus a Zapier/Sheet or Housecall Pro endpoint. Two channels before the swap; `LEAD_REQUIRE_DELIVERY=true` means the form correctly refuses to claim success without one.
4. **Open decisions**, none blocking: D2 membership dollar amounts, D4 emergency URL, D5 email sending domain, D9 OTTO worker after the swap (`PLAN.md` §12).

## Verification

```
npm run build          # astro build + content gate: phone, geography, price, dash, NAP all PASS
npm run serve          # port 4322
npm run qa:first-screen  # 4 passed, 16 skipped (templates not built yet)
```

Unchanged throughout: no contact with Hunter or Dream Surge, no live site, DNS, Cloudflare, GoDaddy or live-Vercel changes, no OTTO deploys, no GBP writes, no GHL cancellation, repo private.
