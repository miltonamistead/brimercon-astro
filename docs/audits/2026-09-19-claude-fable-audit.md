# Accepted audit — Claude Fable, 2026-09-19

Status: **accepted in full by Milton Armistead on 2026-09-19.** Every finding below was
accepted; Milton's rulings are final and are recorded in the summary. Filed here per the
build sequence (`docs/audits/`) on 2026-09-22. The working copies remain at
`docs/source/AUDIT_ACCEPTED_SUMMARY.md` and `docs/source/APPLY_AUDIT.md`.

---

# Claude Fable audit — accepted 2026-09-19 (Milton)

Full audit text was pasted into Sierra chat 2026-09-19 ~6:44 AM PT. Verdict: **execute with fixes**.

## Done immediately
- Repo set **private** again (B5).

## Blockers before M1
- B1 First-screen contract: call primary, form secondary; Playwright ≤640px gate
- B2 Nevada County / Sierra Nevada / Reno-in-renovation gate false positives
- B3 Commit missing source docs + crawl script + page bodies
- B4 Copy policy + dashes / leaked “no prices” line / unapproved same-day claims; golden pages
- B5 Private repo — done

## Milton rulings locked in audit
- Hours: 7am–8pm daily; Milton answers evenings/weekends; miss → voicemail (not “same day / priority” unless approved)
- Drop “California side only” / Nevada exclusion footer; name towns instead
- Carry live images (29/30, drop gondola); real photos later don’t block
- Reviews + map required (Google at build time; no AggregateRating schema)
- Town pages must be uniquely different (briefs + type structures)
- No new GHL webhook (agency-owned, leaving); second lead channel Zapier→Sheet or HCP
- Deployment Protection required; lead delivery fail-closed; `/api/lead/` trailing slash

## Next
Cloud agent on `cursor/astro-rebuild-d8c5` applies B1–B4 + H1–H11 plan edits, then stops for Milton screenshots of golden home/service/town before bulk.

---

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
