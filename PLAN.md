# PLAN — brimercon-astro parallel twin

Status: **planning complete, execution not started beyond M0 foundations.**
Written 2026-09-19 from `uploads/KICKOFF.md`, the three 2026-08-31 plan/SEO/snapshot files, a fresh read-only crawl of https://www.brimercon.com/ (see `docs/crawl/`), the Truckee GBP record via Paige (hours, service areas, review stats), and Granola meeting notes (phone, CSLB footer, "keep existing URL structure").

Owner: Milton Armistead, Clearline Services LLC dba Brimer Plumbing.
Repo: `github.com/miltonamistead/brimercon-astro` (private). Branch for this work: `cursor/astro-rebuild-d8c5`.

Supporting documents (read in this order):

| Doc | What it decides |
|---|---|
| `docs/url-map.md` | Every live path, what the twin does with it, redirects, additive routes |
| `docs/lead-capture.md` | In-house form + `/api/lead` design replacing GoHighLevel forms; how Milton configures the destination |
| `docs/technical-seo-checklist.md` | Titles, H1s, canonicals, robots, sitemap, schema, OG, images, headers — with verification method |
| `docs/qa-plan.md` | Phone/NAP gate, form E2E, link parity, Lighthouse twin-vs-live, Search Atlas / Paige measurement hooks |
| `docs/swap-runbook.md` | Future production cutover steps. **Not to be executed in this phase.** |
| `docs/crawl/README.md` | What was crawled, when, how to re-run |

---

## 0. Non-negotiables (fail the task if violated)

1. Never email, message, ticket, or otherwise contact Hunter / Dream Surge.
2. Never change live production: no edits to brimercon.com origin, DNS (Cloudflare), registrar (GoDaddy), the live Vercel project, or the Cloudflare OTTO worker.
3. Staging is **noindex, nofollow** by default through two independent mechanisms (build-time meta + host header) and ships no sitemap. Canonicals point at the live `https://www.brimercon.com/<path>`.
4. Phone: **530-587-0733** only (`tel:+15305870733`). No other phone number appears anywhere except the Southwest Gas emergency line inside gas-leak safety copy, which is a utility, not Brimer.
5. California only. Nevada, Incline Village, Crystal Bay, Stateline, South Lake Tahoe, Heavenly, Reno never appear as service claims. The only permitted Nevada string is the exclusion sentence.
6. No public dollar prices on marketing pages. `/membership/` is rebuilt without dollar amounts (see decision D2).
7. No OTTO deploy, no Search Atlas writes, no GBP writes, no GHL cancellation. Search Atlas and Paige are **read-only measurement** later.
8. Do not change `/service-areas/homewood/` targeting (title, H1, intent). Rebuild it from its own facts only.
9. Do not invent facts: hours, AggregateRating, town utilities, elevations. Everything factual comes from `docs/crawl/` or the GBP record, and the source is cited in the data module.

A build-time QA gate (`scripts/qa-phones.mjs`, M0) scans `dist/` and fails on any violation of 4, 5, or 6.

---

## 1. What exists today (evidence summary)

- Stack: Astro v5.18.0 static HTML on Vercel, behind Cloudflare DNS/edge, with the Search Atlas OTTO Cloudflare worker on every HTML response (0 deployed fixes). GoDaddy is registrar only. GoHighLevel is tracking + forms (`link.msgsndr.com`, reCAPTCHA v3), not the host.
- URL surface: 53 URLs in `sitemap-0.xml`, all HTTP 200 on 2026-09-19. 24 California town pages, 6 service pages, 10 blog posts, hub/legal/utility pages. Full table: `docs/url-map.md`.
- Known dead paths: `/service-areas/martis-valley/` (nav label, 404) and `/water-heater-services/` (404, still has a live backlink from sipthestyle.com).
- `/thank-you/` exists on live (200, `noindex, nofollow`, title "Order — Brimer Plumbing", not in sitemap). The twin reuses this path as the form confirmation page.
- `og:image` on every page points at `/images/og-default.jpg`, which is 404.
- JSON-LD: `Plumber` on home/contact (four CA cities in `areaServed`, no `logo`/`image`), `Service + FAQPage + BreadcrumbList` on the six service pages (breadcrumb last item lacks a URL), `Service + BreadcrumbList` on town pages, nothing on hubs/reviews/about.
- NAP truth: `10647 Manchester Dr, Truckee, CA 96161`, `530-587-0733`, `service@brimerplumbing.com`, CSLB `1149344`, founded 1997. Site JSON-LD and GBP agree. (A Granola transcript rendered the email as "brammerplumbing" — transcription error; live site and GBP both say `brimerplumbing.com`.)
- Hours: live `/contact/`, live JSON-LD, and the GBP record (Paige `get_business_hours`, 2026-09-19) all say **7:00 AM – 8:00 PM, every day**. The internal pack says Mon–Fri 8–6. The twin uses the three-source public truth and flags the conflict (decision D1). It does not invent a third schedule.
- Reviews: GBP 4.97 average across 32 reviews, 100% replied (Paige, 2026-09-19). Live pages show "5.0 (16 reviews)" Google and "4.9 (22 reviews)" Yelp, quoting named reviewers. The twin quotes the same public reviews and links out; it does **not** add `AggregateRating` (Google no longer surfaces self-serving LocalBusiness review markup and the SEO file says do not invent it).
- GBP service areas (Paige): Norden, Homewood, Tahoe City, Kings Beach, Tahoe Vista, Tahoma, Truckee, Tahoe Pines, Dollar Point, Soda Springs, Carnelian Bay, Alpine Meadows, Olympic Valley, Donner Lake Village — all CA. The site's 24 towns are a superset. Nothing in Nevada on either list.
- GSC (18–26 Aug 2026): money queries land on the homepage; `truckee plumber` pos 1 / 98 impressions / 0 clicks; water-heater repair/install queries pos ~25 on the homepage rather than `/services/water-heaters/`; `emergency plumber truckee` lands on Homewood. These are the reasons for the M1 emphasis on `/services/water-heaters/`, `/service-areas/truckee/`, and `/services/frozen-burst-pipes/`.

---

## 2. Architecture decisions

| # | Decision | Why |
|---|---|---|
| A1 | **Astro 7.x** (current stable; live is 5.18). `output: 'static'`, `trailingSlash: 'always'`, `build.format: 'directory'`. | Same URL shape as live (`/about/`). Astro 7's Rust compiler is strict about HTML — write valid markup. `compressHTML` defaults to `'jsx'`; leave it. |
| A2 | Adapter switch: `@astrojs/vercel` when `process.env.VERCEL` is set, otherwise `@astrojs/node` (standalone). | Vercel is the deploy target. The Node adapter lets `npm run build && npm run serve` run the **full site including `/api/lead`** locally, so form E2E and Lighthouse run against production-equivalent output without Vercel. |
| A3 | Exactly one on-demand route: `src/pages/api/lead.ts` with `export const prerender = false`. Everything else prerendered. | Marketing pages stay pure static HTML (fast, cacheable). The form endpoint becomes one Vercel serverless function. |
| A4 | Zero client-side JavaScript on marketing pages except one ≤ 5 KB progressive-enhancement script for the lead form and one ≤ 1 KB nav toggle. No frameworks, no islands. | Live homepage HTML is 133 KB with third-party scripts. Speed is a stated success criterion. |
| A5 | Content model: TypeScript data modules for `site`, `services`, `towns`, `faqs`, `reviews`, `resources` (typed, composable into copy **and** JSON-LD); Astro **content collection** (Markdown) for blog posts. | Data modules keep NAP/phone in one place and feed schema. Markdown blog is what Milton will actually edit. |
| A6 | Single source of truth for NAP/phone/hours/CSLB: `src/data/site.ts`. Every component imports it; no literals in templates. | Rule 4/6 enforcement and the "hours: pick one" fix become a one-line change. |
| A7 | Redirects declared in `astro.config.mjs` `redirects` with `status: 301`. With an adapter in static mode Astro emits real HTTP 301s (verified in Astro 7 config reference). Mirror them in `vercel.json` for belt-and-braces; verify on preview with `curl -I`. | `/water-heater-services/` backlink equity; `/sitemap.xml` → `/sitemap-index.xml` parity with live. |
| A8 | Trailing-slash redirects for prerendered pages are the host's job: `vercel.json` `"trailingSlash": true`. | Astro docs: static-page slash redirects are handled by the platform, not `trailingSlash`. |
| A9 | Images: Brimer's logo only in M1, plus a generated 1200×630 `og-default.jpg` placeholder. **No live stock/lifestyle images are copied** (license unknown; one is a Heavenly/South Lake frame). Town heroes are CSS until the photo shoot. | Kickoff: photo shoot is out of scope; placeholders must be noted. Avoids the out-of-area image leak. |
| A10 | No third-party scripts on staging: no GHL `msgsndr` tracking, no reCAPTCHA, no OTTO meta tag, GA4 off unless `PUBLIC_GA4_ID` is set. | Staging traffic must not pollute live analytics; OTTO is a swap-time decision; GHL stays alive on live, untouched. |
| A11 | Security/robots headers in `vercel.json`: `X-Robots-Tag: noindex, nofollow` (staging), `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`. | Second, config-level key for noindex (see §5). |

---

## 3. Information architecture

Navigation (matches live grouping; no new top-level sections):

- **Services** → `/services/` hub → six service pages
- **Service areas** → `/service-areas/` hub → 24 towns grouped: Truckee · Martis Valley · North Shore · West Shore & Tahoe City · Donner Summit
- **About**, **Reviews**, **FAQs**, **Resources**, **Blog**, **Membership** (footer/secondary), **Contact**, **Request service** (primary CTA)
- Persistent header CTA: `Call 530-587-0733` (`tel:+15305870733`) + `Request service`
- Footer on every page: logo, NAP (street, city, state, ZIP) as visible text, phone, email, hours line, CSLB line (`CA CSLB License #: 1149344 · Licensed in California only. Not licensed in Nevada.`), service-area groups, legal links.

Page templates (one Astro layout, `src/layouts/Base.astro`, plus section components):

| Template | Used by | Distinctive blocks |
|---|---|---|
| Home | `/` | Hero (H1 unchanged), 4 trust points, 6 service cards, "why mountain homes", process, reviews (quoted), area grid, FAQ (with `FAQPage` schema), lead form, **visible street NAP** |
| Service | `/services/{slug}/` | H1, summary bullets, sections, common issues, process, related services, area links, FAQ, lead form pre-tagged with `service_context` |
| Town | `/service-areas/{slug}/` | H1 `Plumber in {Town}, CA`, lede + overview from `town-facts.json`, per-service sections written against the town's real facts (elevation, water/sewer district, permit authority), 6 town FAQs, popular services, lead form pre-tagged with `town_context`, `Service` + `FAQPage` + `BreadcrumbList` |
| Hub | `/services/`, `/service-areas/`, `/service-areas/martis-valley/` | Card grids + exclusion sentence |
| Core | about, faqs, reviews, resources, membership, contact, request-service | Page-specific sections; contact carries Plumber JSON-LD and hours |
| Blog | `/blog/`, `/blog/{slug}/` | Content collection; `BlogPosting` schema; date, tags |
| Legal | privacy-policy, terms-of-use | Ported text |
| Utility | `/thank-you/` (always noindex), `404` | Phone CTA on both |

Town template differentiation rule (SEO file: live towns are a "tight template", OTTO content score 28): every town section must reference at least two town-specific facts from `docs/crawl/town-facts.json` (elevation, utility district, permit authority, housing character, neighborhood names). Section order varies by group (e.g. lakefront towns lead with freeze/leak monitoring; Truckee leads with water heaters). Shared boilerplate is limited to the CTA and exclusion sentence.

---

## 4. Route map and redirects

Full table with per-URL action and milestone: `docs/url-map.md`.

Summary:

- **53/53 live sitemap paths are rebuilt at identical paths.** Titles are preserved by default (they already rank); H1 changes are limited to the ones the SEO file calls for (`/services/water-heaters/`).
- **Redirects (301):** `/water-heater-services/` → `/services/water-heaters/`; `/water-heater-services` → same; `/sitemap.xml` → `/sitemap-index.xml`.
- **Additive routes (not in live sitemap, not in twin sitemap):** `/thank-you/` (exists on live, repurposed, always noindex), `/service-areas/martis-valley/` (live 404 → real short CA hub page, decision D3), `/api/lead` (POST only, `Disallow` in robots), `/404`.
- **No new town URLs.** No emergency URL in this phase (decision D4).
- Apex → www 308 stays a host-level concern for the swap; staging has one host.

---

## 5. Staging noindex strategy (two keys, three signals)

| Layer | Staging (default) | Production (only after Milton names the swap) | Where |
|---|---|---|---|
| `<meta name="robots">` | `noindex, nofollow` on every page | omitted (except `/thank-you/`, `404`) | `Base.astro`, driven by `PUBLIC_INDEXABLE` (defaults false) |
| `X-Robots-Tag` header | `noindex, nofollow` on `/(.*)` | block removed in `vercel.json` | `vercel.json` (committed; changing it is a reviewed code change) |
| `robots.txt` | `User-agent: *` / `Disallow: /` and no `Sitemap:` line | mirrors live: `Allow: /` + `Sitemap: https://www.brimercon.com/sitemap-index.xml` | `src/pages/robots.txt.ts` (env-driven) |
| Sitemap | not generated | `sitemap-index.xml` + `sitemap-0.xml`, excludes `/thank-you/`, `/api/*`, 404 | `@astrojs/sitemap` `filter` |
| Canonical | `https://www.brimercon.com/<path>` (live) | same string, now self-referencing | `PUBLIC_CANONICAL_ORIGIN` |
| Host protection | Vercel Deployment Protection (Vercel Authentication or password) recommended; Vercel also adds `x-robots-tag: noindex` on `*.vercel.app` previews automatically | n/a | Vercel dashboard (Milton) |

Flipping to indexable requires **two** deliberate changes (env var + `vercel.json` edit) and is documented only in `docs/swap-runbook.md`. Accidental indexation would need two independent mistakes.

Lighthouse's SEO category will report "page is blocked from indexing" on staging — expected. The SEO score is measured on a local `PUBLIC_INDEXABLE=true` build (never deployed) per `docs/qa-plan.md`.

---

## 6. Lead capture (replaces GoHighLevel forms)

Design is in `docs/lead-capture.md`. Summary:

- One `LeadForm` component on home, contact, request-service, every service page, every town page (same placement pattern as live). Fields mirror live: name, phone, email, service address, city (CA list + "Other (CA side)"), issue, preferred timing, urgent flag. Hidden context: `source_path`, `service_context`, `town_context`, honeypot, render timestamp.
- Works **without JavaScript** (`POST /api/lead` → `303` to `/thank-you/?ref=…`) and **with JavaScript** (fetch → inline "Request received" panel, live copy). Error state shows the phone.
- `POST /api/lead` validates server-side, then fans out to configured deliveries: **email** (Resend HTTP API), **webhook** (generic JSON POST — can target a GHL inbound webhook, Zapier/Make, Google Sheets Apps Script, Housecall Pro later), and a **store** (JSONL file locally for QA; durable store adapter is M4). In production `LEAD_REQUIRE_DELIVERY=true` makes the endpoint fail loudly (form shows the call-us fallback) if no delivery succeeded — leads are never silently dropped.
- Spam: honeypot + minimum-time trap + strict validation + per-IP soft limit. No Google reCAPTCHA. Cloudflare Turnstile is an optional later add.
- GHL is **not** cancelled and the live site's GHL forms are untouched. The twin simply does not load GHL.
- Milton configures the destination entirely through Vercel environment variables; step-by-step in the doc.

---

## 7. Phone, NAP, CA-only, no-prices — enforced, not hoped

- `src/data/site.ts` is the only place the phone, address, email, hours, and CSLB are written. Components render `<PhoneLink>` / `<Nap>`.
- `scripts/qa-phones.mjs` (M0) walks `dist/` HTML and fails on: any phone-shaped string other than `530-587-0733` (allowlist: Southwest Gas `1-877-860-6020` only inside gas-leak safety copy), any `tel:` other than `+15305870733`, any page without at least one `tel:+15305870733`, forbidden strings (`Incline Village`, `Crystal Bay`, `Stateline`, `South Lake`, `Heavenly`, `Reno`, `Nevada`) outside the exact exclusion sentence, and `$` followed by a digit on any page.
- `npm run build` runs the gate after `astro build`; CI/Vercel builds fail if it fails.

---

## 8. Technical SEO

Checklist with verification method per item: `docs/technical-seo-checklist.md`. Headline fixes versus live: working `og:image`, `Plumber` node gains `logo`/`image` and `areaServed` for all 24 CA towns, `FAQPage` on home and `/faqs/`, breadcrumb items all carry URLs, `Service` nodes on the hub, hours identical in HTML and JSON-LD, honest image alts, real JPEG/WebP with matching `Content-Type`, no empty `<img>`, custom 404, security headers.

---

## 9. Speed QA

Procedure in `docs/qa-plan.md` §4: Lighthouse (mobile + desktop, 3 runs, median) on the twin (`node dist/server/entry.mjs` locally, then the Vercel preview) versus live for `/`, `/services/water-heaters/`, `/service-areas/truckee/`, `/contact/`. Report to `docs/qa/speed-report.md` with HTML bytes, requests, JS bytes, LCP, CLS, TBT, scores. Budget: mobile Performance ≥ 95, JS ≤ 6 KB, CSS ≤ 25 KB, HTML ≤ 60 KB on home.

---

## 10. Measurement hooks (later; read-only)

`docs/qa-plan.md` §6 records the baselines to compare after a future swap: Search Atlas project 149351 site-explorer numbers (organic traffic 134, keywords 58, domain power 8, backlinks 292, ref domains 166 on 2026-08-31), GSC query rows from 18–26 Aug, and GBP performance via Paige (last 28 days through 29 Aug: 20 calls, 24 website clicks, 59 direction requests, 501 impressions). Staging produces **no** ranking signal; nothing in this repo may claim a ranking win until the swap has run for weeks. GBP's website link carries `?utm_source=google&utm_medium=organic&utm_campaign=gbp`; the twin must serve those URLs (static, fine) and the lead record stores the landing path so GBP-sourced leads are attributable.

---

## 11. Milestones (execute in order; each has a gate)

### M0 — Foundations (partially on this branch already)
- [x] `package.json` + `package-lock.json` (Astro 7.3.3, `@astrojs/sitemap` 3.7, `@astrojs/vercel` 11, `@astrojs/node` 11, `sharp` dev), `.nvmrc` = 22, `tsconfig.json`, `.env.example`, `.gitignore`. Node ≥ 22.12 required by Astro 7; a transitive `undici@8` warns below 22.19 but loads and works on 22.14 (verified). Vercel's Node 22 runtime satisfies both.
- [x] `astro.config.mjs` (static, trailing slash, adapter switch, 301 redirects, sitemap filter)
- [x] `src/data/site.ts` (NAP/phone/hours/CSLB/nav/groups/form lists), `src/data/services.ts` (six services with copy + FAQs)
- [ ] `vercel.json` (headers incl. `X-Robots-Tag`, trailingSlash, redirects mirror)
- [ ] `src/layouts/Base.astro` (head: title, description, canonical → live, robots, OG/Twitter, JSON-LD slot; skip link; header/footer)
- [ ] `Header`, `Footer`, `Nap`, `PhoneLink`, `Schema` components; `src/lib/seo.ts`, `src/lib/schema.ts`
- [ ] `src/pages/robots.txt.ts`, `404.astro`, `public/images/brimer-logo.png`, `scripts/make-og.mjs` → `public/images/og-default.jpg`
- [ ] `scripts/qa-phones.mjs` wired into `npm run build`
- **Gate:** `npm install && npm run build` green with a placeholder index; `robots.txt` shows `Disallow: /`; every page has the noindex meta; phone gate passes.

### M1 — Core pages + lead capture
- `/`, `/about/`, `/contact/`, `/request-service/`, `/thank-you/`, `/services/` + 6 service pages, `/service-areas/` hub, `/service-areas/truckee/`, `/service-areas/tahoe-city/`, `/service-areas/kings-beach/`, `/faqs/`, `/reviews/`
- `src/data/towns.ts` generated from `docs/crawl/town-facts.json` (all 24 entries present so hub links resolve; only the 3 M1 towns get full pages in this milestone — the rest render in M2 from the same data)
- `LeadForm.astro` + `src/pages/api/lead.ts` + `src/lib/leads/*` + `scripts/qa-form.mjs` + `scripts/dev-webhook.mjs`
- **Gate:** form E2E passes locally (JSON + form-encoded + honeypot rejection + validation rejection; lead lands in JSONL and in the local webhook receiver); Lighthouse mobile ≥ 95 on `/` and `/services/water-heaters/`; phone gate passes; `docs/qa/form-e2e.md` drafted.

### M2 — Full URL parity
- Remaining 21 town pages from `towns.ts`; `/service-areas/martis-valley/` hub; blog collection (10 posts, rewritten from live) + `/blog/`; `/resources/`; `/membership/` (no prices); `/privacy-policy/`; `/terms-of-use/`
- `scripts/qa-links.mjs`: every path in `docs/crawl/sitemap-urls.txt` exists in `dist/`; every internal href resolves; redirect config contains the three 301s
- **Gate:** 53/53 parity + additive routes; link check green; `docs/url-map.md` status column all ✅.

### M3 — Staging deploy + QA writeup
- Milton connects the repo to a **new** Vercel project (steps in `README.md`); sets env vars; enables Deployment Protection. No domain attached.
- Verify on the preview URL: `curl -I` shows `x-robots-tag: noindex, nofollow`; HTML has the robots meta; `/robots.txt` disallows; `/sitemap-index.xml` is 404; the three 301s work; `/about` → `/about/`; `/images/og-default.jpg` is 200.
- Browser test on the preview: submit the form (desktop + mobile viewport), confirm the panel and the delivery; tap-to-call resolves to `tel:+15305870733`.
- Lighthouse on preview vs live → `docs/qa/speed-report.md`; `docs/qa/technical-seo-audit.md`; `docs/qa/phone-check.md`; `docs/qa/staging.md` (URL, protection mode, env vars set).
- **Gate:** all four QA docs complete with artifacts; PR ready for Sierra QA.

### M4 — Later (needs Milton decisions; not this run)
Photo shoot assets + honest alts; hours decision (D1); membership pricing (D2); emergency URL (D4); Homewood IA; sending-domain DKIM for email; durable lead store (Vercel Blob/Postgres or Sheets); GA4 on; optional Turnstile; swap runbook execution.

Executor handoff: any capable coding agent (Composer/Codex/Opus) can implement M0–M3 from these docs. Each milestone should be one or more commits on `cursor/astro-rebuild-d8c5` (or a branch off it), pushed, with the draft PR updated. Do not skip gates; do not touch anything in §0.

---

## 12. Decisions for Milton (the twin ships with the default; nothing here blocks M0–M3)

| ID | Question | Twin default | Why |
|---|---|---|---|
| D1 | Hours: 7 AM–8 PM daily (live + GBP) or Mon–Fri 8–6 + emergencies (pack)? | 7 AM–8 PM daily, one constant, identical in HTML and JSON-LD | Three public sources agree; changing is a one-line edit in `site.ts` |
| D2 | `/membership/` prices: keep public dollars (live exception) or remove? | Removed; tiers + benefits + "contact for pricing" | Hard rule: no public prices on marketing pages |
| D3 | `/service-areas/martis-valley/`: real hub page or leave 404? | Short real CA hub linking the six Martis Valley communities | Nav already labels it; a dead URL is the one thing the plan forbids |
| D4 | Emergency landing URL for `emergency plumber truckee` (currently Homewood) | `/services/frozen-burst-pipes/` is written as the emergency page; Homewood untouched; no new URL | SEO file: flag only, do not retarget in this pass |
| D5 | Lead email sending domain | Resend test sender until DKIM is added on a domain Milton controls (`brimerplumbing.com` is separate from the live site domain) | Adding DNS records on `brimercon.com` would touch the live zone |
| D6 | Keep GHL pipeline + SMS follow-up? | Twin can POST to a GHL inbound webhook via `LEAD_WEBHOOK_URL` | Preserves the SMS workflow if wanted, without GHL scripts on the page |
| D7 | GA4 `G-JN4WLJHEZJ` on the twin? | Off on staging; env-gated | Staging must not pollute live analytics |
| D8 | Vercel Deployment Protection mode | Vercel Authentication (team only) or password | Extra layer beyond noindex |
| D9 | Keep the OTTO Cloudflare worker in front after swap? | Out of scope; documented in the runbook as a decision point | No OTTO deploys either way |

---

## 13. Out of scope (from the kickoff)

Contacting Hunter; live DNS / production cutover; OTTO Cloudflare deploy; GBP posts or edits; cancelling GHL or the Hunter contract; photo shoot replacements (placeholders noted); new town URLs; Nevada anything.

---

## 14. Planned repository layout

```
brimercon-astro/
├── PLAN.md                      # this file
├── README.md                    # run / deploy / configure
├── docs/
│   ├── url-map.md               # 53 live paths + redirects + additive routes
│   ├── lead-capture.md          # form + /api/lead spec, Milton config
│   ├── technical-seo-checklist.md
│   ├── qa-plan.md               # phone gate, form E2E, links, Lighthouse, measurement
│   ├── swap-runbook.md          # DO NOT EXECUTE in this phase
│   ├── crawl/                   # 2026-09-19 read-only crawl artifacts (source of facts)
│   └── qa/                      # M3 artifacts: form-e2e.md, phone-check.md, speed-report.md,
│                                #   technical-seo-audit.md, staging.md
├── astro.config.mjs  vercel.json  package.json  tsconfig.json  .env.example
├── public/images/{brimer-logo.png, og-default.jpg}  public/favicon.svg
├── scripts/{qa-phones,qa-links,qa-form,qa-lighthouse,make-og,dev-webhook}.mjs
└── src/
    ├── data/{site,services,towns,faqs,reviews,resources}.ts
    ├── content/blog/*.md + content.config.ts
    ├── layouts/Base.astro
    ├── components/{Header,Footer,Nap,PhoneLink,LeadForm,Faq,Breadcrumbs,Schema,ServiceCard,TownCard,Cta,Hero}.astro
    ├── lib/{seo,schema}.ts  lib/leads/{validate,deliver,store}.ts
    ├── styles/global.css
    └── pages/
        ├── index, about, contact, request-service, thank-you, faqs, reviews, resources,
        │   membership, privacy-policy, terms-of-use, 404  (.astro)
        ├── robots.txt.ts
        ├── services/{index,[slug]}.astro
        ├── service-areas/{index,martis-valley,[slug]}.astro
        ├── blog/{index,[slug]}.astro
        └── api/lead.ts          # the only on-demand route
```
