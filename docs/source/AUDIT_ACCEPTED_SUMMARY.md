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
