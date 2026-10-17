import type { APIRoute } from "astro";
import { canonicalOrigin, isIndexable } from "@/data/site";

/**
 * Staging deliberately serves `Allow: /` (audit H1).
 *
 * A crawler that is blocked by robots.txt never fetches the page, so it never sees the
 * `noindex` meta tag or the `X-Robots-Tag` header, and the URL can still surface as a
 * bare result. Letting crawlers read the page is what makes the noindex effective.
 * Public reachability is handled by Vercel Deployment Protection, not by robots.txt.
 */
export const GET: APIRoute = () => {
  const lines = ["User-agent: *", "Allow: /", "Disallow: /api/", ""];

  if (isIndexable()) {
    lines.push(`Sitemap: ${canonicalOrigin()}/sitemap-index.xml`, "");
  } else {
    lines.push(
      "# Staging twin of brimercon.com. Every page also sends noindex via meta tag",
      "# and X-Robots-Tag. Crawling is allowed so those directives can be read.",
      "# No sitemap is published while this build is non-indexable.",
      "",
    );
  }

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
