# brimercon-astro

Parallel **noindex** Astro rebuild of [brimercon.com](https://www.brimercon.com) for Clearline Services LLC dba Brimer Plumbing (Truckee, CA). The live site stays untouched until Milton names a swap. This repo is the twin: same URL map, in-house lead capture, staging that cannot compete with live rankings.

**Start with [`PLAN.md`](PLAN.md).** It links the URL map, lead-capture design, technical SEO checklist, QA plan, and the (do-not-run) swap runbook.

## Rules (also enforced by the build)

- Never contact Hunter / Dream Surge. Never touch live production, DNS, Cloudflare, GoDaddy, or the live Vercel project.
- Staging is `noindex, nofollow` (build-time meta + `X-Robots-Tag` header), no sitemap, canonicals point at live.
- Phone **530-587-0733** only. California only — never Nevada / Incline / Crystal Bay / Stateline / South Lake as service claims.
- No public prices on marketing pages. No OTTO deploys. No GBP writes. GoHighLevel is not cancelled.
- NAP: 10647 Manchester Dr, Truckee, CA 96161 · CA CSLB #1149344 · service@brimerplumbing.com.

`npm run build` runs `scripts/qa-phones.mjs` and fails on any foreign phone number, Nevada service string, or `$`-price in the built HTML.

## Run locally

```bash
npm install
cp .env.example .env          # defaults are staging-safe (noindex, file lead store)
npm run dev                    # http://127.0.0.1:4321  (form endpoint works in dev)
npm run build                  # static pages + /api/lead function; then the phone/NAP gate
npm run serve                  # production-equivalent local server (Node adapter): http://127.0.0.1:4322
```

QA scripts (see `docs/qa-plan.md`): `npm run qa:phones`, `npm run qa:links`, `npm run qa:form` (needs `npm run serve` + `node scripts/dev-webhook.mjs`), `npm run qa:lighthouse`.

## Deploy to staging (Milton; new Vercel project, never the live one)

1. Vercel → Add New Project → import `miltonamistead/brimercon-astro`. Framework preset: Astro (auto-detected). Build command `npm run build`, output handled by the adapter. Do **not** add a custom domain.
2. Settings → Deployment Protection → enable Vercel Authentication (or a password). Preview URLs on `*.vercel.app` also get Vercel's own `x-robots-tag: noindex`.
3. Settings → Environment Variables (Preview): leave `PUBLIC_INDEXABLE` unset (defaults to noindex). Add lead delivery variables per `docs/lead-capture.md` §4 when ready (`RESEND_API_KEY`, `LEAD_TO_EMAIL`, `LEAD_WEBHOOK_URL`, `LEAD_STORE=none`, then `LEAD_REQUIRE_DELIVERY=true`).
4. Deploy the `cursor/astro-rebuild-d8c5` branch (or `main` after merge). Record the preview URL in `docs/qa/staging.md`.
5. Verify: `curl -I https://<preview>/` shows `x-robots-tag: noindex, nofollow`; `/robots.txt` says `Disallow: /`; `/sitemap-index.xml` is 404; `/images/og-default.jpg` is 200; `/water-heater-services/` 301s to `/services/water-heaters/`.

Flipping the site to indexable is deliberately a two-step change (env var **and** a `vercel.json` edit) documented only in `docs/swap-runbook.md`.

## Editing content

- NAP, phone, hours, CSLB, nav groups, form city list: `src/data/site.ts` (single source; JSON-LD and visible text both read from it).
- Services: `src/data/services.ts`. Towns: `src/data/towns.ts` (facts from `docs/crawl/town-facts.json`). FAQs/reviews/resources: `src/data/*.ts`.
- Blog posts: Markdown files in `src/content/blog/` (frontmatter: `title`, `description`, `pubDate`, `tags`).
- Placeholders to replace after the photo shoot: `public/images/og-default.jpg` (generated card), town heroes (CSS), service photos (none yet).

## Status

Planning complete (`PLAN.md`). M0 foundations: config and data constants committed; no pages generated yet. See `PLAN.md` §11 for milestone gates.
