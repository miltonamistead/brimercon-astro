# Build progress

Maintained by Muse (build coordinator) from 2026-09-22. One line per work unit; newest
last. The canonical history is the git log on `cursor/astro-rebuild-d8c5`.

## 2026-09-22

- Pre-M2 baseline: finite repo review done (checklist in `docs/qa/state-of-repo.md`);
  `docs/qa/state-of-repo.md` committed alone as the first Muse commit (`6108da4`).
- Push test: `git push` over HTTPS has no credential path (SSH blocked by egress proxy;
  the `custom.github` connector covers `api.github.com` only, and the fine-grained PAT
  is read-only: git-database, contents, and fork endpoints all 403). Commits are being
  built locally; **Milton needs to grant the token Contents write (or reconnect with a
  `repo`-scoped token) before anything can be pushed or a PR opened.**
- Accepted 2026-09-19 Claude Fable audit filed at `docs/audits/2026-09-19-claude-fable-audit.md`.
- This file created.
- M2 content (local): Martis Valley hub, Resources, Membership pages written;
  `qa-links` + `qa-similarity` gates added (`npm run qa:links`, `npm run qa:similarity`).
- Staging: new Vercel project `brimercon-astro-staging` created, Deployment Protection
  on, baseline deployment READY (`brimercon-astro-staging-7rpiq0b6c-miltons-projects-7102dcb1.vercel.app`).
- Blog: 10 posts ported from live (dashes/speed-claims/24-7/well refs cleaned), index +
  post template with BlogPosting JSON-LD; build green.
- Towns: all 24 town pages merged into `src/data/town-content.ts` from the three
  per-type modules; 23 per-town briefs in `docs/town-briefs/`; `GOLDEN_TOWN_SLUGS`
  now lists all 24; `docs/url-map.md` all 53 rows ✅.
- Constraint sweep: all 8 "heat trace" claims removed (brief forbids; golden copy
  changed, re-shoot needed at review); qa-headings word lists extended for 24 towns.
- Similarity gate: 7 pairs over 0.45 on first run (east-shore lakefront cluster +
  homewood/tahoma); lakefront agent rewriting now.
