# State of repo — pre-M2 baseline

Written 2026-09-22 by Muse (build coordinator). This is the **first Muse modification** to
the repository and was committed alone as the first Muse commit. Everything below is a
read-only snapshot of branch `cursor/astro-rebuild-d8c5` at commit `ef6838c`
("Regenerate golden screenshots and record the continue pass"). The working tree was clean
before this file was added.

## Where things stand

- Branch: `cursor/astro-rebuild-d8c5`, 21 commits (all by Cursor Agent, 2026-09-19). Clean tree.
- 178 tracked files. Local is in sync with `origin/cursor/astro-rebuild-d8c5`.
- `main` holds only the initial scaffold; all real work is on this branch.
- M0 and M0.5 complete (golden pages approved by Milton 2026-09-19). M1 complete per
  `CONTINUE_STATUS.md`: 18 pages, six service pages, lead capture `/api/lead/`, committed
  Google-reviews cache, content + heading + first-screen + form gates green.
- M2 pending: 23 differentiated town pages, Martis Valley hub, blog, resources, membership,
  `scripts/qa-links.mjs`, `scripts/qa-similarity.mjs`.
- M3 pending: staging deploy (new Vercel project per brief) + Lighthouse QA.
- Last activity before this file: 2026-09-19 (three quiet days).

## Finite repo review — what was read

- `PLAN.md` (full) — governing build doc. §0 non-negotiables, §3b first-screen contract,
  §3c copy policy, §3d H2 rules, §5 staging noindex strategy, §6 lead capture, §11 milestones,
  §15 audit traceability.
- `docs/source/KICKOFF.md`, `APPLY_AUDIT.md`, `AUDIT_ACCEPTED_SUMMARY.md`, `H2_RULES.md` (full).
- `README.md`, `package.json`, `APPLY_STATUS.md`, `CONTINUE_STATUS.md` (full).
- `astro.config.mjs`, `vercel.json`, `playwright.config.ts` (full).
- `src/data/site.ts` (full, 126 lines) — NAP/phone/hours single source of truth.
- `src/data/towns.ts` (full) — 24 towns with elevation, permit authority, utilities.
- `src/data/town-content.ts` (partial) — Truckee content; structure for the other 23.
- `docs/url-map.md` (partial) — 53 live paths, M1/M2 status columns.
- `docs/town-briefs.md` (partial) — type structures, brief template, similarity gate plan.
- `docs/crawl/` (inventory only: 59 files — `live-inventory.json`, `town-facts.json`,
  `images.json`, `pages/`, `live-robots.txt`) — reference data, not read in full.
- `docs/golden/` (6 screenshots, not visually inspected in this pass).
- Parent-agent context: `~/memory/2026-09-21.md` brimercon-astro entries (kickoff, access,
  inventory, source review, drift notes); `~/workspace/brimercon-staging/` assets
  (29 images, reviews seed, design notes, keywords).

## Unread / deferred (finite by design)

- `docs/design.md`, `docs/lead-capture.md`, `docs/qa-plan.md`, `docs/swap-runbook.md`,
  `docs/technical-seo-checklist.md` — read only as needed during M2/M3.
- The three 2026-08-31 source files — context, superseded by PLAN.md where they conflict.
- Individual `src/pages/` and `src/components/` files — inventory confirmed; full reads
  happen as each M2 page is written.
- `scripts/*.mjs` — inventory confirmed; `qa-links.mjs`, `qa-similarity.mjs`,
  `qa-lighthouse.mjs` are listed in package.json but **do not exist yet** (see drift).
- Golden screenshots — not visually inspected; golden pages already approved by Milton.

## Drift found during review (repo docs vs reality)

1. `README.md` and `PLAN.md` intro still say page templates are paused pending golden-page
   approval; the milestone section correctly says M0.5 was approved and M1 is complete.
   README is stale.
2. `package.json` exposes `qa:links`, `qa:form`, `qa:lighthouse`, but `scripts/qa-links.mjs`
   and `scripts/qa-lighthouse.mjs` (and the planned `qa-similarity.mjs`) do not exist yet.
   These are M2/M3 deliverables, not verified QA.
3. Repo docs say the repo is private; Milton made it public on 2026-09-21 to unblock access.
   That was his call, so docs should be updated to match rather than the repo re-privatised.
4. `vercel.json` applies `X-Robots-Tag: noindex, nofollow` unconditionally on every path,
   even though page meta tags and sitemap emission are conditional on `PUBLIC_INDEXABLE`.
   Safe for staging; needs deliberate handling before any production cutover (swap runbook).

## Governing order for this build

1. Milton's kickoff brief and his 2026-09-22 directive (march to review-ready; stop only
   for the six stop-and-ask categories). Where brief and repo docs conflict, the brief wins
   and repo docs get updated to match.
2. The accepted 2026-09-19 Claude Fable audit (all findings accepted, Milton's rulings final).
3. PLAN.md and the docs it links.

## Stop-and-ask categories (Milton, 2026-09-21/22)

Production cutover/DNS/domain · hours changes · cancelling the agency or GoHighLevel ·
any title/H1/URL change (including Homewood) · any new third-party script or tracker ·
any new paid cost beyond the Vercel project.

## Hard boundaries (never)

Never touch live brimercon.com, DNS, Cloudflare, GoDaddy, the live Vercel project, or
agency/GoHighLevel. Never contact Hunter or Dream Surge. Never send customer
communications. Staging: noindex/nofollow, Vercel-auth protected, never promoted to
production, no custom domain.
