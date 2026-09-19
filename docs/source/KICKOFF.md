# brimercon-astro kickoff — 2026-09-19

## Goal
Parallel Astro rebuild of brimercon.com that Milton (Clearline / Brimer Plumbing) can manage without Hunter Dream Surge (~$300/mo). Live site untouched until explicit swap.

## Non-negotiables
1. NEVER email, message, or contact Hunter / Dream Surge at any step.
2. NEVER edit, deploy, or change DNS on live brimercon.com until Milton names the swap.
3. Staging / preview must be noindex/nofollow (and preferably auth or non-indexed host) so it does not compete with live.
4. Preserve URL map and backlink equity: same paths as live; 301 plan for any necessary redirects (e.g. /water-heater-services/ → /services/water-heaters/).
5. Phone everywhere: 530-587-0733 only. California service only — never Nevada / Incline / South Lake as service claims.
6. No public prices on marketing pages (membership page is a known live exception; do not spread prices).
7. Form capture in-house (replace GoHighLevel forms). Wire contact/lead forms to something Milton owns (email + structured lead store; HCP lead optional later). Do not cancel GHL in this phase — export path is separate.
8. Hours widget: skip inventing hours; match live contact/schema or leave as live until Milton picks one truth.

## Done looks like (first milestone)
- Astro project runs locally and on a staging URL (Vercel preview OK).
- URL inventory matching live (crawl live brimercon.com; document map).
- Core pages rebuilt: home, about, contact, services (esp water heaters), key service-area/town pages, FAQ/reviews stubs as needed.
- Lead form works end-to-end on staging (submit → capture → confirmation). Document test proof.
- Click-to-call uses 530-587-0733 and is verified on mobile + desktop.
- Lighthouse / Core Web Vitals passable vs live (speed report).
- Technical: titles, H1s, canonicals, sitemap, robots noindex on staging, schema without Nevada, NAP consistency.
- Ranking/SEO checklist for Milton + Sierra (Search Atlas / Paige used for measurement later; do not deploy OTTO; do not write GBP).

## Out of scope this run
- Contacting Hunter
- Live DNS / production cutover
- OTTO Cloudflare deploy
- GBP posts
- Canceling GHL or Hunter contract
- Photo shoot replacements (note placeholders)

## References in uploads/
- 2026-08-31_website_rebuild_plan.md
- 2026-08-31_website_seo_for_rebuild.md
- 2026-08-31_website_rebuild_snapshot.md
