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

// All six services are released: each now has its own sections matching the topics its
// live page gives an H2, plus common issues, process and why-us blocks.
export const GOLDEN_SERVICE_SLUGS = [
  "water-heaters",
  "frozen-burst-pipes",
  "gas-services",
  "kitchen-bath-plumbing",
  "appliance-installation",
  "smart-leak-shutoff",
];

// Towns stay deliberately at one. The remaining 23 need a written brief each
// (docs/town-briefs.md) and must clear the similarity gate. Shipping 23 near-identical
// pages is the exact failure this project exists to avoid.
export const GOLDEN_TOWN_SLUGS = ["truckee"];

/**
 * Whether a town has a page in this build. The service-area hub, the footer and the
 * service pages use it to link only what exists and render the rest as plain text, so a
 * partially built twin has no dead links.
 */
export function isTownBuilt(slug: string): boolean {
  return GOLDEN_TOWN_SLUGS.includes(slug);
}
