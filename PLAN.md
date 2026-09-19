# PLAN — brimercon-astro parallel twin

Status: **planning complete; M0 foundations built; page templates paused pending Milton's golden-page approval.**

Written 2026-09-19 from `docs/source/KICKOFF.md`, the three 2026-08-31 plan/SEO/snapshot files, a read-only crawl of https://www.brimercon.com/ (`docs/crawl/`, reproducible with `npm run crawl`), the Truckee GBP record via Paige, and Granola meeting notes. Revised the same day to apply the **Claude Fable audit** that Milton accepted (`docs/source/APPLY_AUDIT.md`, `docs/source/AUDIT_ACCEPTED_SUMMARY.md`); see §15 for where each audit item landed.

Owner: Milton Armistead, Clearline Services LLC dba Brimer Plumbing.
Repo: `github.com/miltonamistead/brimercon-astro` (**private**). Branch: `cursor/astro-rebuild-d8c5`.

| Doc | What it decides |
|---|---|
| `docs/url-map.md` | Every live path, what the twin does with it, redirects, additive routes |
| `docs/lead-capture.md` | In-house form + `/api/lead/` replacing GoHighLevel forms; how Milton configures the destination |
| `docs/design.md` | Image carry-forward, first-screen layout, what the photo shoot replaces |
| `docs/town-briefs.md` | Per-town brief template and the similarity gate that stops 24 clones |
| `docs/technical-seo-checklist.md` | Titles, H1s, canonicals, robots, sitemap, schema, OG, images |
| `docs/qa-plan.md` | First-screen gate, content gate, form E2E, link parity, Lighthouse, measurement hooks |
| `docs/swap-runbook.md` | Future production cutover. **Not to be executed in this phase.** |
| `docs/crawl/README.md` | What was crawled, when, how to re-run |
| `docs/source/` | The briefs this plan answers to, committed verbatim |

---

## 0. Non-negotiables (fail the task if violated)

1. Never email, message, ticket, or otherwise contact Hunter / Dream Surge.
2. Never change live production: no edits to the brimercon.com origin, DNS (Cloudflare), registrar (GoDaddy), the live Vercel project, or the Cloudflare OTTO worker.
3. Repo stays private. Staging is `noindex, nofollow` via meta tag **and** `X-Robots-Tag`, ships no sitemap, canonicals point at live, and sits behind Vercel Deployment Protection.
4. Phone **530-587-0733** only (`tel:+15305870733`). The single exception is the Southwest Gas emergency line inside gas-leak safety copy, which is a utility number, not Brimer's.
5. California towns only. No out-of-area place names in customer copy (§3c).
6. No public dollar prices on marketing pages. `/membership/` is rebuilt without dollar amounts.
7. No OTTO deploy, no Search Atlas writes, no GBP writes, no GHL cancellation, and **no new GHL webhook** (the agency owns that account and is on the way out).
8. Do not change `/service-areas/homewood/` targeting (title, H1, intent).
9. Do not invent facts. Hours, ratings, town utilities, elevations and permit authorities come from `docs/crawl/` or the GBP record.
10. Calling is the primary action on every important template (§3b).

`npm run build` runs `scripts/qa-content.mjs` after `astro build` and fails on any breach of 4, 5, 6 or the copy policy.

---

## 1. What exists today (evidence summary)

- Stack: Astro v5.18.0 static HTML on Vercel, behind Cloudflare DNS/edge, with the Search Atlas OTTO Cloudflare worker on every HTML response (0 deployed fixes). GoDaddy is registrar only. GoHighLevel is tracking plus forms (`link.msgsndr.com`, reCAPTCHA v3), not the host.
- URL surface: 53 URLs in `sitemap-0.xml`, all HTTP 200 on 2026-09-19. 24 California town pages, 6 service pages, 10 blog posts, hub/legal/utility pages. Full table: `docs/url-map.md`.
- Dead paths: `/service-areas/martis-valley/` (nav label, 404) and `/water-heater-services/` (404, still linked from sipthestyle.com).
- `/thank-you/` exists on live (200, `noindex, nofollow`, title "Order — Brimer Plumbing", not in the sitemap). The twin reuses the path as the form confirmation.
- Images: 32 referenced across the site. 31 resolve; `og:image` (`/images/og-default.jpg`) is 404 on every page, so every share card is broken today. Detail and carry decision: `docs/design.md`.
- JSON-LD: `Plumber` on home/contact (four CA cities in `areaServed`, no `logo`/`image`), `Service + FAQPage + BreadcrumbList` on service pages (breadcrumb last item lacks a URL), `Service + BreadcrumbList` on town pages, nothing on hubs/reviews/about.
- NAP truth: `10647 Manchester Dr, Truckee, CA 96161`, `530-587-0733`, `service@brimerplumbing.com`, CSLB `1149344`, founded 1997. Site JSON-LD and GBP agree. (A Granola transcript rendered the email as "brammerplumbing" — transcription error; live and GBP both say `brimerplumbing.com`.)
- Hours: **ruled by Milton** — 7:00 AM to 8:00 PM daily, he answers evenings and weekends, a missed call goes to voicemail. Live `/contact/`, live JSON-LD and the GBP record already agree on 7 to 20 daily.
- Reviews: GBP 4.97 across 32 reviews, all replied (Paige, 2026-09-19). Live pages show Google "5.0 (16)" and Yelp "4.9 (22)" with named quotes. Reviews and a map are required on the rebuild (`docs/technical-seo-checklist.md` §D, `docs/design.md`); **no `AggregateRating` schema**.
- GSC (18–26 Aug 2026): money queries land on the homepage; `truckee plumber` pos 1 / 98 impressions / 0 clicks; water-heater queries pos ~25 on the homepage rather than `/services/water-heaters/`; `emergency plumber truckee` lands on Homewood. This drives the M1 emphasis on water heaters, Truckee, and frozen/burst pipes — and the rule that the **homepage keeps its live title and copy** (§3c).

---

## 2. Architecture decisions

| # | Decision | Why |
|---|---|---|
| A1 | **Astro 7.x**, `output: 'static'`, `trailingSlash: 'always'`, `build.format: 'directory'`. | Same URL shape as live. Astro 7's Rust compiler is strict about HTML; `compressHTML` defaults to `'jsx'`. Node ≥ 22.12. |
| A2 | Adapter switch: `@astrojs/vercel` when `process.env.VERCEL` is set, otherwise `@astrojs/node` standalone. | Vercel is the deploy target; the Node adapter lets `npm run build && npm run serve` exercise the **whole site including `/api/lead/`** locally, which is how the form E2E, first-screen and Lighthouse gates run without Vercel. |
| A3 | Exactly one on-demand route: `src/pages/api/lead.ts` (`prerender = false`). Everything else prerendered. | Marketing pages stay static; the form endpoint is one serverless function. |
| A4 | No client JavaScript on marketing pages beyond a ≤ 5 KB form enhancer. Navigation and the call bar are CSS only. | Live home ships 133 KB of HTML plus third-party scripts. Speed is a success criterion, and the call path must work with JS off. |
| A5 | Data modules (`site`, `services`, `towns`, `faqs`, `reviews`, `resources`) feed both copy and JSON-LD; blog posts are a Markdown content collection. | One source for NAP/phone/hours; Markdown is what Milton will actually edit. |
| A6 | Single source of truth in `src/data/site.ts`. No NAP, phone, hours or licence literals in templates. | Makes rules 4 and 6 enforceable and the hours ruling a one-line change. |
| A7 | Redirects in `astro.config.mjs` with `status: 301`, mirrored in `vercel.json`. | Backlink equity on `/water-heater-services/`; `/sitemap.xml` parity. |
| A8 | Trailing-slash redirects for prerendered pages are the host's job: `vercel.json` `"trailingSlash": true`. | Astro docs: static-page slash redirects are handled by the platform. |
| A9 | **Carry Brimer's existing images forward** (30 files, 29 unique), dropping only the Heavenly gondola frame. Generate a real `og-default.jpg`. Photo shoot replaces them later without blocking. | Reversed after the audit: a rebuild with no photography is worse than one with the client's current photography. Detail and the excluded file: `docs/design.md`. |
| A10 | No third-party scripts on staging: no GHL tracking, no reCAPTCHA, no OTTO meta, GA4 only if `PUBLIC_GA4_ID` is set. | Staging must not pollute live analytics; GHL stays alive on live, untouched. |
| A11 | Security and robots headers in `vercel.json`. | Config-level key for noindex (§5). |
| A12 | First-screen contract is a component (`FirstScreen.astro`) plus a Playwright gate, not a convention. | A convention drifts; a gate does not (§3b). |

---

## 3. Information architecture

Navigation matches the live grouping; no new top-level sections.

- **Services** → `/services/` → six service pages
- **Service areas** → `/service-areas/` → 24 towns in five groups: Truckee · Martis Valley · North Shore · West Shore and Tahoe City · Donner Summit
- **About**, **Reviews**, **FAQs**, **Resources**, **Blog**, **Membership**, **Contact**, **Request service**
- Header: logo plus the phone number. Footer: NAP, phone, email, hours, after-hours line, CSLB line, service-area groups, legal links.

| Template | Used by | Distinctive blocks |
|---|---|---|
| Home | `/` | First screen, six service cards, why mountain homes, process, reviews, map, area grid, FAQ, lead form, visible street NAP |
| Service | `/services/{slug}/` | First screen, summary bullets, sections, common issues, process, related services, area links, FAQ, lead form tagged with `service_context` |
| Town | `/service-areas/{slug}/` | First screen with the town name in the area line, per-town brief (`docs/town-briefs.md`), 6 town FAQs, popular services, lead form prefilled with the town |
| Hub | `/services/`, `/service-areas/`, `/service-areas/martis-valley/` | Card grids |
| Core | about, faqs, reviews, resources, membership, contact, request-service | Page-specific; contact carries `Plumber` JSON-LD and hours |
| Blog | `/blog/`, `/blog/{slug}/` | Content collection; `BlogPosting` |
| Legal | privacy-policy, terms-of-use | Ported text |
| Utility | `/thank-you/` (always noindex), `404` | Call CTA on both |

### 3a. Route-level rules

Same path string for every live URL, trailing slash always, canonical to `https://www.brimercon.com/<path>`. No new town URLs. `/api/lead/` is always written **with** a trailing slash (audit H4) so it matches `trailingSlash: 'always'` and never eats a redirect on POST.

### 3b. First-screen contract (audit B1)

On every important template, at 390px wide, the first ~640px must contain, in this order:

1. **H1** — `data-fs="h1"`
2. **Service-area line** — the town name on a town page, otherwise a line naming towns, linked to `/service-areas/` — `data-fs="area"`
3. **Full-width call button**, `Call 530-587-0733`, `href="tel:+15305870733"` — `data-fs="call"`
4. **Hours line** including the after-hours sentence — `data-fs="hours"`
5. **Trust strip**: since 1997, CA CSLB #1149344, Google reviews link — `data-fs="trust"`

The form link (`data-fs="form-link"`) sits directly under the call button at text weight and must be visually smaller than it. A fixed bottom call bar (`data-fs="call-bar"`) is pinned on mobile, CSS only, no JavaScript. Images and marketing photography sit **below** the first screen on mobile.

Implemented by `src/components/FirstScreen.astro` and `src/components/CallBar.astro`. Enforced by `tests/first-screen.spec.ts` (`npm run qa:first-screen`) against `/`, one service page, one town page, `/contact/`, and the 404 template, at 390×844 on the machine's Chrome. Targets that do not exist yet are reported as skipped, never as passes.

### 3c. Copy policy (audit B4)

| Rule | Detail |
|---|---|
| Homepage copy is frozen | Keep the live title, H1 and body copy. It ranks position 1 for `truckee plumber`; the only permitted edit is dash cleanup. |
| Service and town copy | May be rewritten **only after Milton approves the golden home, service and town pages**. Until then, `src/data/services.ts` holds corrected copy and no page templates ship. |
| No em or en dashes | Write "rather than", a comma, or a full stop. Applies to literal characters and `&mdash;`/`&ndash;` entities. |
| No unapproved speed claims | "same day", "priority", "fastest response", "24/7" are out unless Milton approves each one. Milton answers evenings and weekends; a missed call goes to voicemail. |
| After-hours line | Exactly: *Call 530-587-0733 any time. If we miss you, leave a message.* (`site.afterHoursLine`) |
| No dollar prices | Marketing pages never show a dollar figure. `priceRange: "$$"` in JSON-LD is a schema token, not a price. |
| Name towns, do not exclude a state | "California side only" and "Not licensed in Nevada" are gone from customer copy. The footer keeps the CSLB number without a Nevada sentence. Say where Brimer works: Truckee, Tahoe Donner, Donner Lake, Tahoe City, Kings Beach and the rest. |
| No internal voice | Never leak policy or process language ("we do not publish prices on this page") into customer copy. |

Enforced by `scripts/qa-content.mjs` on every build: phone, geography, price, dash and NAP rules across all built HTML.

### 3d. H2 rules (Milton, 2026-09-19)

Source: `docs/source/H2_RULES.md`. Applies to **every page**, and bulk generation inherits it. Headings are what a homeowner scans and what Google reads as the page's topic list, so they are treated as a hard rule rather than a style preference.

| # | Rule |
|---|---|
| 1 | Every H2 names the **service** or the **homeowner's question**, in words someone would actually type into Google. Not internal positioning language. |
| 2 | **No eyebrow labels above H2s.** No "Outcome-focused craftsmanship", "What we do", "What to expect". The H2 carries the meaning by itself. There is deliberately no `.eyebrow` class in `global.css`. |
| 3 | A town or region name appears in **roughly half** the H2s on a page, and **never all** of them. |
| 4 | On a town page the H2 carries the **service plus that town's own angle**, so no two towns share a heading frame. This is why the shared blocks (emergency band, reviews, popular services, FAQs, closing call) take their headings from `TownContent.headings` per town instead of interpolating the town name into one template. |
| 5 | **Sentence case**, **under 60 characters**, **no colon-split** headings, **no em or en dashes**. |
| 6 | Keep **one section for every H2 topic the live page has**. Do not merge or drop tankless, gas line repair, gas line installation, leak detection, kitchen and bath, frozen pipes, or any other topic live gives its own H2. Live headings per page are recorded in `docs/crawl/pages/` and can be re-extracted with `npm run crawl`. |
| 7 | **Titles and H1s do not change.** They rank; the H2s are the layer that gets optimised. |

Rules 2, 3 and 5 are enforced mechanically by `scripts/qa-headings.mjs`, which runs in `npm run build` and inspects only H2s inside `<main>` (footer headings are site furniture). `npm run qa:headings` prints every H2 with its length and whether it names a place, which is the fastest way to check rule 3 while writing. Rules 1, 4 and 6 are editorial and reviewed by a human.

Before writing a new page, extract that page's live H2 topics first, then write one section per topic. The golden pages are the worked examples: `/services/water-heaters/` keeps tank, tankless and annual maintenance as three separate H2s because live does, and `/service-areas/truckee/` keeps all nine live service topics in live's order.

---

## 4. Route map and redirects

Full table: `docs/url-map.md`. Summary: 53/53 live paths rebuilt at identical paths; titles preserved by default; one H1 change (`/services/water-heaters/`). 301s for `/water-heater-services/` and `/sitemap.xml`. Additive, non-indexed routes: `/thank-you/`, `/service-areas/martis-valley/`, `/api/lead/`, `404`.

---

## 5. Staging noindex strategy (audit H1)

| Layer | Staging (default) | Production (only after Milton names the swap) |
|---|---|---|
| Deployment Protection | **Required.** Vercel Authentication or password on the staging project. This is the control that actually keeps the public out. | Off |
| `<meta name="robots">` | `noindex, nofollow` on every page | omitted, except `/thank-you/` and `404` |
| `X-Robots-Tag` header | `noindex, nofollow` on `/(.*)` in `vercel.json` | block removed |
| `robots.txt` | `User-agent: *` / **`Allow: /`** / `Disallow: /api/`, no `Sitemap:` line | same, plus the `Sitemap:` line |
| Sitemap | not generated | `sitemap-index.xml` + `sitemap-0.xml` |
| Canonical | `https://www.brimercon.com/<path>` | same string, now self-referencing |

**Why staging allows crawling.** A crawler blocked by `robots.txt` never fetches the page, so it never sees the `noindex` meta tag or the header, and the URL can still surface as a bare link. Blocking and noindexing at once is self-defeating. Crawling is allowed so the noindex is readable; Deployment Protection is what makes the host unreachable.

Flipping to indexable takes **two** deliberate changes: `PUBLIC_INDEXABLE=true` and removing the `X-Robots-Tag` block from `vercel.json`. Documented only in `docs/swap-runbook.md`.

**Never promote the staging project to a Vercel production domain before the swap.** Preview deployments only; no custom domain attached.

**QA against a protected preview:** generate a Protection Bypass token (Vercel → Settings → Deployment Protection → Protection Bypass for Automation) and pass it as `VERCEL_PROTECTION_BYPASS`; `playwright.config.ts` sends it as the `x-vercel-protection-bypass` header, and `curl -H 'x-vercel-protection-bypass: <token>'` works for the header checks. Never commit the token.

---

## 6. Lead capture (replaces GoHighLevel forms)

Full design: `docs/lead-capture.md`. Summary:

- Short form (audit H3): **name, phone, and what is wrong** are the only required fields. Optional: email, address, town. Town is a free-text-plus-datalist field covering all 24 towns, prefilled on town pages. The timing dropdown is gone.
- Calling stays primary; the form is the fallback for people who will not phone.
- Works without JavaScript (`POST /api/lead/` → `303` to `/thank-you/`) and with it (fetch → inline confirmation). Non-JSON errors render a real HTML page carrying the call button, never a bare JSON body (audit H5). `source_path` is validated as same-site.
- `POST /api/lead/` validates, then fans out to configured deliveries: **email** (Resend) and **webhook** (Zapier→Sheet or Housecall Pro). A file store is QA scaffolding and **does not count as delivery**.
- `LEAD_REQUIRE_DELIVERY` defaults to **true** (audit H2): if no real channel accepts the lead, the endpoint fails loudly and the page tells the person to call. Two independent channels must be live before the swap.
- **No new GoHighLevel webhook** (audit H7): that account belongs to the outgoing agency. GHL is not cancelled here, but the twin does not build a new dependency on it.

---

## 7. Phone, NAP, geography, prices — enforced, not hoped

`src/data/site.ts` is the only place the phone, address, email, hours, after-hours line and CSLB are written. `scripts/qa-content.mjs` walks the built HTML and fails on: a phone number other than 530-587-0733 (Southwest Gas allowed only where it is named), a `tel:` other than `+15305870733`, a page with no click-to-call, out-of-area place names, `" NV "`, a dollar figure, an em or en dash, or a page missing the street address or CSLB number.

Geography matching is **whole-word and case-sensitive**, so "renovation" does not trip "Reno". **"Nevada County" and "Sierra Nevada" are allowed** — both are California names, and Norden and Soda Springs genuinely permit through the Nevada County Community Development Agency (audit B2). The gate does not require any exclusion sentence.

---

## 8. Technical SEO

`docs/technical-seo-checklist.md`. Headline fixes versus live: working `og:image`, `Plumber` node gains `logo`/`image` and all 24 CA towns in `areaServed`, `FAQPage` on home and `/faqs/`, breadcrumb items all carry URLs, `Service` nodes on the hub, hours identical in HTML and JSON-LD, honest image alts (24 town heroes currently ship empty alts), custom 404, security headers. Reviews and a map are on-page; `AggregateRating` is not.

## 9. Speed QA

`docs/qa-plan.md` §5: Lighthouse mobile and desktop, 3 runs, median, on the twin (local Node server, then the Vercel preview) versus live for `/`, `/services/water-heaters/`, `/service-areas/truckee/`, `/contact/`. Budget: mobile Performance ≥ 95, JS ≤ 6 KB, CSS ≤ 25 KB, home HTML ≤ 60 KB.

## 10. Measurement hooks (later; read-only)

`docs/qa-plan.md` §7 records the Search Atlas, GSC and GBP baselines to compare after a future swap. Staging produces no ranking signal and nothing in this repo may claim a ranking win.

---

## 11. Milestones

### M0 — Foundations ✅ complete
- [x] Astro 7.3.3, adapter switch, 301s, env-gated sitemap, `vercel.json`, lockfile, `.nvmrc`
- [x] `src/data/site.ts`, `services.ts`, `towns.ts` (24 towns with elevation, permit authority, utilities)
- [x] `Base.astro`, `Header`, `Footer`, `FirstScreen`, `CallBar`, `global.css`
- [x] `robots.txt.ts` (Allow on staging), `404.astro`, `favicon.svg`, generated `og-default.jpg`
- [x] 30 live images carried into `public/images/`, gondola excluded
- [x] `scripts/crawl-live.mjs`, `fetch-live-images.mjs`, `make-og.mjs`, `qa-content.mjs`
- [x] `tests/first-screen.spec.ts` + `playwright.config.ts`
- **Gate:** `npm run build` green with the content gate passing; first-screen gate green on the templates that exist.

### M0.5 — Golden pages ⛔ **blocked on Milton**
One home, one service (`/services/water-heaters/`), one town (`/service-areas/truckee/`). Milton reviews screenshots and approves layout and copy **before** any bulk generation. Service and town copy rewrites are unblocked only by that approval (§3c).

### M1 — Core pages + lead capture
`/`, `/about/`, `/contact/`, `/request-service/`, `/thank-you/`, `/services/` + 6 service pages, `/service-areas/` hub, 3 town pages, `/faqs/`, `/reviews/`; `LeadForm.astro`, `src/pages/api/lead.ts`, `src/lib/leads/*`, `scripts/qa-form.mjs`, `scripts/dev-webhook.mjs`.
**Gate:** form E2E passes; first-screen gate green on all four targets; content gate green; Lighthouse mobile ≥ 95 on `/` and `/services/water-heaters/`.

### M2 — Full URL parity
Remaining 21 town pages (each against its brief, past the similarity gate), Martis Valley hub, blog collection, `/resources/`, `/membership/` without prices, legal pages, `scripts/qa-links.mjs`.
**Gate:** 53/53 parity; link check green; similarity gate green; `docs/url-map.md` status column all ✅.

### M3 — Staging deploy + QA writeup
Milton connects a **new** Vercel project, enables Deployment Protection, sets env vars. Verify headers, robots, redirects, OG image on the preview. Lighthouse vs live. QA docs in `docs/qa/`.

### M4 — Later
Photo shoot assets and honest alts; membership pricing decision; emergency URL; Homewood IA; DKIM for the sending domain; durable lead store; GA4; swap runbook execution.

---

## 12. Decisions

Ruled by Milton in the accepted audit:

| ID | Question | Ruling |
|---|---|---|
| D1 | Hours | **7:00 AM to 8:00 PM daily.** Milton answers evenings and weekends; a missed call goes to voicemail. No "same day" or "priority" language without explicit approval. |
| D3 | `/service-areas/martis-valley/` | Build a real CA hub page for the group. No dead URL under a nav label. |
| D6 | Lead pipeline | **No new GHL webhook.** Second channel is Zapier→Sheet or Housecall Pro. |
| D7 | GA4 on the twin | Off on staging; env-gated. |
| D8 | Deployment Protection | **Required**, not optional. |
| D10 | Images | Carry the existing 30 (29 unique), drop the gondola. Real photos later do not block. |
| D11 | Reviews and map | Both required on the rebuild. Google reviews pulled at build time. No `AggregateRating` schema. |
| D12 | Town pages | Must be genuinely different from each other: briefs plus type-specific structures, with a similarity gate. |

Still open, and none of them block M0.5 or M1:

| ID | Question | Twin default until ruled |
|---|---|---|
| D2 | `/membership/` dollar amounts | Removed; tiers, benefits and "contact for pricing" at the same URL |
| D4 | Emergency landing URL (`emergency plumber truckee` currently ranks Homewood) | `/services/frozen-burst-pipes/` reads as the emergency page; Homewood untouched; no new URL |
| D5 | Lead email sending domain | Resend test sender until DKIM exists on a domain Milton controls. Adding DNS to `brimercon.com` would touch the live zone. |
| D9 | OTTO Cloudflare worker after the swap | Out of scope; a decision point in the runbook. No OTTO deploys either way. |

---

## 13. Out of scope

Contacting Hunter; live DNS or production cutover; OTTO deploys; GBP writes; cancelling GHL or the Hunter contract; new town URLs; a public repo.

---

## 14. Repository layout

```
brimercon-astro/
├── PLAN.md  APPLY_STATUS.md  README.md
├── docs/
│   ├── source/              # KICKOFF, Aug 31 plan/SEO/snapshot, APPLY_AUDIT, AUDIT_ACCEPTED_SUMMARY
│   ├── crawl/               # live inventory, per-URL page text, town facts, image inventory
│   ├── url-map.md  lead-capture.md  design.md  town-briefs.md
│   ├── technical-seo-checklist.md  qa-plan.md  swap-runbook.md
│   └── qa/                  # M3 artifacts
├── astro.config.mjs  vercel.json  playwright.config.ts  package.json  .env.example  .nvmrc
├── public/images/           # 30 carried files + generated og-default.jpg
├── scripts/                 # crawl-live, fetch-live-images, make-og, qa-content, qa-links,
│                            #   qa-form, qa-lighthouse, dev-webhook
├── tests/first-screen.spec.ts
└── src/
    ├── data/{site,services,towns}.ts        # faqs, reviews, resources to come
    ├── layouts/Base.astro
    ├── components/{Header,Footer,FirstScreen,CallBar}.astro   # LeadForm etc. to come
    ├── styles/global.css
    └── pages/{404.astro, robots.txt.ts}     # page templates gated on M0.5
```

---

## 15. Audit traceability

| Item | Where it landed |
|---|---|
| B1 first-screen contract | §3b; `FirstScreen.astro`, `CallBar.astro`, `global.css`; `tests/first-screen.spec.ts`; `docs/qa-plan.md` §2 |
| B2 geography gate | §7; `scripts/qa-content.mjs` (whole-word, case-sensitive, Nevada County and Sierra Nevada allowed, `" NV "` forbidden, no exclusion sentence required); wording removed from `site.ts` and `services.ts` |
| B3 sources in repo | `docs/source/`; `scripts/crawl-live.mjs`; `docs/crawl/pages/` (53 page bodies), `images.json` |
| B4 copy policy | §3c; `services.ts` cleaned; dash check in the build gate |
| B5 private repo | Done by Sierra before this pass |
| H1 staging | §5: Deployment Protection required, `Allow: /`, no production domain, bypass header documented |
| H2 delivery | §6; `docs/lead-capture.md` §3: `LEAD_REQUIRE_DELIVERY` defaults true, file store is not delivery, two channels before swap |
| H3 shorter form | §6; `docs/lead-capture.md` §1: three required fields, town prefill, all 24 towns, no timing |
| H4 `/api/lead/` | §3a; used with the trailing slash throughout |
| H5 error rendering | `docs/lead-capture.md` §2: HTML error page with a call button; `source_path` validated same-site |
| H6 images | A9 reversed; `docs/design.md`; 30 files carried, gondola dropped, images below the first screen on mobile |
| H7 no new GHL webhook | §0.7, D6; ownership table in `docs/swap-runbook.md` |
| H8 after-hours copy | `site.afterHoursLine`, used by `FirstScreen` and the footer |
| H9 CA-side wording | Removed from `site.ts` and `services.ts`; footer CSLB line has no Nevada sentence |
| H10 reviews and map | D11; `docs/technical-seo-checklist.md` §D and §E; `docs/design.md` |
| H11 town uniqueness | D12; `docs/town-briefs.md` (brief template, type structures, similarity gate) |
