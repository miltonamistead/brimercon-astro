import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog posts: one Markdown file per live post in ./src/content/blog/<slug>.md.
// Titles, descriptions, publish dates and tags are carried verbatim from the live site
// (docs/crawl/pages/blog.txt); bodies are cleaned of dashes, dollar figures and
// out-of-scope claims per PLAN.md section 3c.
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.string().array().default([]),
  }),
});

export const collections = { blog };
