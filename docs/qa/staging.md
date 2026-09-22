# Staging

## Project

- Vercel project: **brimercon-astro-staging** (`prj_kA7IW1MvTxkt8dxuJ9zQxcuhagON`)
- Created 2026-09-22 by Muse per the kickoff brief (new project, no custom domain).
- Git: linked to `miltonamistead/brimercon-astro` (same GitHub integration as the
  existing `brimercon-astro` project). Framework preset Astro, build command
  `npm run build`.
- Deployment Protection: **Vercel Authentication on all deployments** (required, not
  optional). No custom domain attached; never promote to production before the swap.
- The existing `brimercon-astro` project (`prj_H3n1Ugj3fWUWDVOUJs1L9ZVJf8tn`) is
  untouched and remains the likely production target at swap time.

## Deployments

| Date | Branch / SHA | URL | State | Notes |
|---|---|---|---|---|
| 2026-09-22 | `cursor/astro-rebuild-d8c5` @ `ef6838c` | `brimercon-astro-staging-7rpiq0b6c-miltons-projects-7102dcb1.vercel.app` | READY | M1 baseline (18 pages). Deployment `dpl_7xw4kw3w57QbQqznEwioF5pccDrY`, target preview. |

## Verification checklist (per README deploy section)

Run against the preview once READY (needs a Protection Bypass for Automation token;
never commit it):

- [ ] `curl -I` shows `x-robots-tag: noindex, nofollow`
- [ ] every page carries the robots meta `noindex, nofollow`
- [ ] `/robots.txt` says `Allow: /` with no `Sitemap:` line
- [ ] `/sitemap-index.xml` is 404
- [ ] `/images/og-default.jpg` is 200
- [ ] `/water-heater-services/` 301s to `/services/water-heaters/`
