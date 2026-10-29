import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog posts: one Markdown file per live post in ./src/content/blog/<slug>.md.
// Titles, descriptions, publish dates, tags and bodies are carried verbatim
// from the live site (verified against www.brimercon.com 2026-10-22); the
// live bodies keep their em dashes, so qa-content skips the dash rule for
// /blog/ pages only. Two rebuild-only articles in this folder are not on
// the live blog hub and are filtered out of the blog index.
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
