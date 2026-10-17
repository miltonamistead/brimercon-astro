# Apply Claude Fable audit — blockers + high priority (2026-09-19)

Work ONLY on branch `cursor/astro-rebuild-d8c5`. Never touch live/DNS/Hunter. Repo is private again.

## B1 First-screen contract (call primary)
Update PLAN.md §3 and docs/qa-plan.md: every important template above ~640px at 390px width must show:
- H1
- service-area line (town name or link to /service-areas/)
- full-width Call 530-587-0733 button (`data-fs="call"`)
- hours line
- trust strip: Since 1997, CA CSLB #1149344, Google reviews link (`data-fs="area"`, `data-fs="trust"`)
Form link is text-weight under the call button. Fixed bottom call bar on mobile (CSS only).
Add Playwright gate for those data-fs markers above 640px on `/`, one service, one town, `/contact/`.

## B2 Geography gate
Whole-word, case-sensitive. Allowlist "Nevada County" and "Sierra Nevada". Forbid ` NV `. Do NOT require exclusion sentences. Remove "California side only" / "Not licensed in Nevada" from customer copy (footer CSLB line stays without Nevada sentence). Name towns instead.

## B3 Sources in repo
Commit uploads into `docs/source/` (KICKOFF + Aug 31 plan/SEO/snapshot provided in agent uploads). Add crawl script if missing; save main-content per URL under docs/crawl/pages/ when feasible.

## B4 Copy policy
- Home: keep live titles/copy; clean dashes only (home ranks for truckee plumber).
- Service/town: may rewrite AFTER Milton approves golden pages — for now fix services.ts: remove leaked "We do not publish prices on this page.", strip em/en dashes, remove unapproved "same day" / "priority" claims; use after-hours line: "Call 530-587-0733 any time. If we miss you, leave a message."
- Add dash check to build gate.
- Document policy in PLAN.md.

## B5 Private — already done by Sierra.

## High priority (apply plan/docs + M0 code)
- H1 Staging: Deployment Protection required; staging robots Allow:/ so noindex readable; never merge to Vercel production before swap; document bypass header for QA.
- H2 LEAD_REQUIRE_DELIVERY default true; file store is NOT delivery; two channels before swap.
- H3 Shorter form: name, phone, what's wrong required; town prefill on town pages; free text / all 24 towns; drop timing.
- H4 Use `/api/lead/` with trailing slash everywhere.
- H5 Non-JSON errors = HTML page with call button; validate source_path same-site.
- H6 Reverse A9: plan to carry 29/30 live images (drop gondola); docs/design.md stub; images below first screen on mobile.
- H7 No new GHL webhook; second channel Zapier→Sheet or HCP; ownership table in swap runbook.
- H8 After-hours copy as above in site.ts.
- H9 Remove CA-side-only wording (see B2).
- H10 Reviews at build time from Google Places (document; stub cache); maps per audit (not first screen); no AggregateRating schema.
- H11 Town uniqueness: add town brief template appendix; similarity gate plan; one golden per town type before bulk — document only this pass unless easy.

## Success
- npm run build green (add qa-phones.mjs etc. as needed)
- PLAN.md + qa-plan + lead-capture + site.ts + services.ts updated per above
- docs/source/ present
- PR updated on same branch
- STOP before bulk page generation; note golden pages need Milton screenshots next
