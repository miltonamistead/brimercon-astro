# Decisions log

Running record of judgment calls made during the rebuild. Newest first.

## 2026-09-22 — Remove all "heat trace" service claims (kickoff brief constraint)

The kickoff brief (governing order 1) explicitly forbids claiming heat trace, but the
M0/M1 baseline carried eight such claims: five in `src/data/services.ts`
(frozen-burst-pipes FAQ, "Freeze prevention" section heading/copy, two process
copies), two in the Truckee town content FAQs in `src/data/town-content.ts`, and one
on the homepage (`src/pages/index.astro`). Replaced with "insulation", "pipe
protection" and "freeze protection" wording; no dashes introduced. Golden-page copy
changed, so golden screenshots need a re-shoot at review. This was not in the six
stop-and-ask categories, so work continued.

## 2026-09-22 — Extend qa-headings.mjs word lists for all 24 towns

`scripts/qa-headings.mjs` was written when only Truckee existed: its PLACE_WORDS list
did not recognise Agate, Dollar, Meeks, Gray, Schaffer, Greenwood, Old, Serene or
Lakes as places, and its PROPER set did not know real local names used in M2 town
H2s (Bear Creek, Gold Coast, Emerald Bay, El Dorado County, Donner Pass, Highlands
View, Alpine Ridge, Mountain Lodge, Tahoe Cedars, Schaffer Mill Road, Old Tahoe,
Brockway, I-80, Village). Extended both lists rather than dumbing the headings down;
all names verified against the town facts. Gate intent unchanged.

## 2026-09-22 — New Vercel project brimercon-astro-staging

Per the kickoff brief: created a separate free project `brimercon-astro-staging`
(`prj_kA7IW1MvTxkt8dxuJ9zQxcuhagON`) linked to the same GitHub repo instead of
reusing the existing `brimercon-astro` project's preview URLs, keeping staging
fully separate from the likely production target. Vercel Authentication
(Deployment Protection) enabled on all deployments; no custom domain. Baseline
deployment of `cursor/astro-rebuild-d8c5` @ `ef6838c` is READY.
