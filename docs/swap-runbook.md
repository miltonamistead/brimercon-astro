# Swap runbook — production cutover (DO NOT EXECUTE IN THIS PHASE)

This file exists so the cutover is designed now and nobody improvises it later. **No step below may run until Milton explicitly names the swap.** Agents do not hold Cloudflare, GoDaddy, or live-Vercel credentials and must not ask for them for this purpose. Milton types every password (rebuild plan hard hold).

Preconditions (all in this repo, all verifiable):

1. M0 to M3 gates green; `docs/qa/*` complete; Sierra QA sign-off recorded in the PR.
2. The still-open decisions in `PLAN.md` §12 answered by Milton: at least D2 (membership prices), D5 (email sending domain) and D9 (OTTO worker).
3. **Two independent lead channels** live and tested on the preview with `LEAD_REQUIRE_DELIVERY=true` (audit H2): email plus either the Zapier/Sheet webhook or Housecall Pro. A file store does not count.
4. A recent copy of the live sitemap and headers saved (`npm run crawl` the same day) so nothing regresses unnoticed.

## Ownership at cutover (audit H7)

The point of this project is that Brimer owns the pipeline. Confirm every row before switching DNS.

| Asset | Owner before | Owner after | Action at swap |
|---|---|---|---|
| Website repo | Dream Surge (agency) | Milton | Already true for this repo |
| Vercel project serving the domain | Agency project | Milton's new project | Domain moves to the new project |
| GoHighLevel account, forms and webhooks | Agency | Not used by the twin | Nothing. No new GHL webhook is created (decision D6). Cancelling GHL is a separate, later decision. |
| Lead email | GHL pipeline | Milton's Resend account into his inbox | Verify a live test lead arrives |
| Lead record store | GHL | Milton's Google Sheet via Zapier/Make, or Housecall Pro | Verify a live test lead arrives |
| Google Business Profile | Milton | Milton | No writes, ever, from this project |
| Search Atlas / OTTO | Agency-installed Cloudflare worker | Decision D9 | No deploys either way |
| DNS (Cloudflare) and registrar (GoDaddy) | Milton | Milton | Milton types every credential |

## Steps (Milton executes; an agent may prepare the code PR for step 2 only)

1. **Freeze** — no content changes on either site for the cutover window. Note the live `Last-Modified` headers.
2. **Two-key indexable PR** (code): set `PUBLIC_INDEXABLE=true` in the Vercel project's Production environment (env change, Milton) **and** merge a PR that removes the `X-Robots-Tag` header block from `vercel.json`. Build locally with `PUBLIC_INDEXABLE=true` and confirm: `robots.txt` keeps `Allow: /` and gains the `Sitemap:` line, `sitemap-index.xml` is present with 54 URLs, no robots meta except `/thank-you/` and `404`, canonicals self-referencing. Also turn **Deployment Protection off** at this point, and not before.
3. **Domain** — in the **twin's** Vercel project add `www.brimercon.com` (primary) and `brimercon.com` (redirect to www, 308). Vercel shows the required DNS. Do not remove the domain from the old project until step 5 is verified.
4. **DNS (Cloudflare)** — change the `www` and apex records to the values Vercel gives for the new project. Keep Cloudflare proxy status as today unless Vercel's instructions require DNS-only. **Decision D9:** the OTTO Cloudflare worker route stays or goes here; either way OTTO deploys remain 0.
5. **Verify** (within minutes): `curl -I https://www.brimercon.com/` → 200, `x-vercel-id` present, **no** `x-robots-tag: noindex`; HTML has no robots meta; `/robots.txt` allows; `/sitemap-index.xml` 200; `/water-heater-services/` → 301 → `/services/water-heaters/`; `/about` → 308 → `/about/`; apex → 308 → www; `/images/og-default.jpg` 200; form submit reaches the inbox/webhook; phone links `tel:+15305870733` everywhere.
6. **Search Console** — resubmit `https://www.brimercon.com/sitemap-index.xml`; request indexing for `/`, `/services/water-heaters/`, `/service-areas/truckee/`. No other GSC changes.
7. **GBP** — nothing. The website link already points at `https://www.brimercon.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`, which the twin serves. No GBP writes.
8. **GHL** — leave the account as is. The live GHL forms stop receiving because the new pages do not load GHL, and by decision D6 no replacement GHL webhook is created: leads go to Milton's own email and Sheet or Housecall Pro. Cancelling the GHL contract is a separate later decision.
9. **Monitor for 14 days** — daily: `curl -I` checks above; Vercel function logs for `/api/lead`; GSC coverage for "Excluded by noindex" (must be 0) and "Duplicate, Google chose different canonical" (apex/www split should shrink). Weekly: Search Atlas REST GET of project 149351 and the GSC query rows in `docs/qa-plan.md` §6.
10. **Rollback** — repoint the Cloudflare `www`/apex records to the old Vercel project's values (keep them written down in step 4) and re-add the `X-Robots-Tag` block to the twin. Old project is left intact until day 14.

## What this runbook never does

Contact Hunter or Dream Surge. Deploy OTTO. Write to GBP. Cancel GHL. Move the registrar or the Cloudflare zone. Add prices. Add Nevada.
