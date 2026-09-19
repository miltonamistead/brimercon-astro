// The M0.5 golden-page gate.
//
// The service and town templates are finished, but only the pages Milton has approved are
// generated. This keeps 5 services and 23 towns out of the build until the goldens are
// signed off, without leaving half-written templates lying around.
//
// To release the rest after approval: add the slugs here (towns also need a content entry
// in src/data/town-content.ts and must clear the similarity gate in docs/town-briefs.md).
//
// Lives in its own module because Astro runs getStaticPaths in an isolated scope, where
// only imported values are visible.

export const GOLDEN_SERVICE_SLUGS = ["water-heaters"];

export const GOLDEN_TOWN_SLUGS = ["truckee"];
