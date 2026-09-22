# brimercon-astro

Parallel **noindex** Astro rebuild of [brimercon.com](https://www.brimercon.com) for Clearline Services LLC dba Brimer Plumbing (Truckee, CA). The live site stays untouched until Milton names a swap. This repo is the twin: same URL map, in-house lead capture, staging that cannot compete with live rankings.

**Start with [`PLAN.md`](PLAN.md).** It links the URL map, lead-capture design, technical SEO checklist, QA plan, and the (do-not-run) swap runbook.

## Rules (also enforced by the build)

- Never contact Hunter / Dream Surge. Never touch live production, DNS, Cloudflare, GoDaddy, or the live Vercel project.
- Repo is public (Milton made it public 2026-09-21 to unblock build access; brief's "private" preference is superseded). Staging is `noindex, nofollow` (meta tag plus `X-Robots-Tag`), ships no sitemap, canonicals point at live, and sits behind Vercel Deployment Protection. Staging `robots.txt` says `Allow: /` on purpose, so crawlers can read the noindex.
- Phone **530-587-0733** only. Calling is the primary action on every page.
- California towns only, named rather than excluding a state. No out-of-area place names.
- No public prices. No em or en dashes. No unapproved speed claims. No OTTO deploys, no GBP writes, no new GoHighLevel webhook.
- NAP: 10647 Manchester Dr, Truckee, CA 96161 · CA CSLB #1149344 · service@brimerplumbing.com.
- Hours: 7:00 AM to 8:00 PM daily. After hours: *Call 530-587-0733 any time. If we miss you, leave a message.*

`npm run build` runs `scripts/qa-content.mjs` and fails the build on a wrong phone number, an out-of-area place name, a dollar figure, an em/en dash, or a page missing the street address or CSLB number.

## Run locally

Node 22 or newer (Astro 7 requires ≥ 22.12; `.nvmrc` pins 22).

```bash
npm install
cp .env.example .env          # defaults are staging-safe (noindex, delivery required)
npm run dev                    # http://127.0.0.1:4321  (form endpoint works in dev)
npm run build                  # builds, then runs the content gate
npm run serve                  # production-equivalent local server: http://127.0.0.1:4322
```

QA and tooling (see `docs/qa-plan.md`):

| Command | What it does |
|---|---|
| `npm run qa:content` | Phone, geography, price, dash and NAP gate over the build. Runs automatically in `npm run build`. |
| `npm run qa:first-screen` | Playwright first-screen contract at 390×844. Needs `npm run serve` running. Uses the machine's Chrome, so no browser download. |
| `npm run crawl` | Re-crawls live brimercon.com into `docs/crawl/` (read-only). |
| `npm run images` | Copies Brimer's existing images from live into `public/images/`. |
| `npm run og` | Regenerates `public/images/og-default.jpg`. |
| `npm run qa:links` / `qa:form` / `qa:lighthouse` | Route parity, lead form E2E, speed. Land with M1 to M3. |

Against a protected Vercel preview: `BASE_URL=https://<preview> VERCEL_PROTECTION_BYPASS=<token> npm run qa:first-screen`.

## Deploy to staging (Milton; new Vercel project, never the live one)

1. Vercel → Add New Project → import `miltonamistead/brimercon-astro`. Framework preset: Astro (auto-detected). Build command `npm run build`. Do **not** add a custom domain, and do not promote this project to a production domain before the swap.
2. Settings → Deployment Protection → enable Vercel Authentication (or a password). **Required, not optional.** For automated QA, issue a Protection Bypass for Automation token and keep it out of the repo.
3. Settings → Environment Variables (Preview): leave `PUBLIC_INDEXABLE` unset (defaults to noindex). Add lead delivery per `docs/lead-capture.md` §4 (`RESEND_API_KEY`, `LEAD_TO_EMAIL`, `LEAD_WEBHOOK_URL`, `LEAD_STORE=none`). `LEAD_REQUIRE_DELIVERY` defaults to true, so configure at least one real channel before testing the form.
4. Deploy the `cursor/astro-rebuild-d8c5` branch. Record the preview URL in `docs/qa/staging.md`.
5. Verify: `curl -I https://<preview>/` shows `x-robots-tag: noindex, nofollow`; every page carries the robots meta; `/robots.txt` says `Allow: /` with no `Sitemap:` line; `/sitemap-index.xml` is 404; `/images/og-default.jpg` is 200; `/water-heater-services/` 301s to `/services/water-heaters/`.

Flipping the site to indexable is deliberately a two-step change (env var **and** a `vercel.json` edit) documented only in `docs/swap-runbook.md`.

## Editing content

- NAP, phone, hours, after-hours line, CSLB, nav groups, trust strip: `src/data/site.ts`. Single source; visible text and JSON-LD both read from it.
- Services: `src/data/services.ts`. Towns: `src/data/towns.ts` (facts from `docs/crawl/town-facts.json`).
- Blog posts: Markdown in `src/content/blog/` (M2).
- Copy policy before editing anything customer-facing: `PLAN.md` §3c.
- Placeholder to replace after the photo shoot: `public/images/og-default.jpg`. The 24 town heroes carried from live still need real alt text (`docs/design.md`).

## Status

Planning complete and the accepted Claude Fable audit applied: see `APPLY_STATUS.md` for exactly what changed and what is waiting on Milton.

M0 foundations are built and green: config, data modules, layout, header/footer, first-screen component, fixed call bar, robots, 404, generated OG image, 30 carried images, and two working gates (content, first screen). **M0.5 golden pages approved by Milton 2026-09-19; M1 core pages + lead capture complete.** Milestone gates: `PLAN.md` §11.
