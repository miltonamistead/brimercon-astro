// Config decisions are documented in PLAN.md §2 (A1, A2, A7, A8) and §5 (noindex strategy).
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import node from "@astrojs/node";

const canonicalOrigin = process.env.PUBLIC_CANONICAL_ORIGIN || "https://www.brimercon.com";
const indexable = process.env.PUBLIC_INDEXABLE === "true";

// Vercel sets VERCEL=1 during its builds. Everywhere else (local QA, CI) the Node
// adapter serves the same static output plus the /api/lead route from one process.
const adapter = process.env.VERCEL ? vercel() : node({ mode: "standalone" });

// Never indexed, never in a sitemap — even after a production swap.
const NEVER_INDEX = new Set(["/thank-you/", "/404/"]);

export default defineConfig({
  site: canonicalOrigin,
  trailingSlash: "always",
  output: "static",
  adapter,
  build: { format: "directory" },
  integrations: [
    sitemap({
      // Staging builds emit no sitemap at all (PLAN.md §5). Indexable builds exclude
      // utility routes; /api/* is on-demand and never prerendered, so it is never listed.
      filter: (page) => indexable && !NEVER_INDEX.has(new URL(page).pathname),
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
  redirects: {
    // Live 404 with a live backlink (sipthestyle.com). Do not invent a third water-heater slug.
    // trailingSlash: "always" normalises the unslashed form, and vercel.json catches it at
    // the edge, so declaring both here would collide on one route.
    "/water-heater-services/": { status: 301, destination: "/services/water-heaters/" },
    // Parity with live, which 301s /sitemap.xml to the index.
    "/sitemap.xml": { status: 301, destination: "/sitemap-index.xml" },
  },
});
