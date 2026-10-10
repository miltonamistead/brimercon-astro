// Reviews and the Google rating, read from a committed cache.
//
// The cache (reviews-cache.json) is refreshed by scripts/refresh-reviews.mjs, which calls
// the Places API, and is committed to the repo. The site build makes no network call, so
// a Places outage cannot break or slow a deploy, and the page can never show a number
// nobody fetched.
//
// Rules this module enforces:
//   - Never invent a rating. If the cache has no numeric rating, nothing is rendered and
//     the trust strip falls back to a plain link to the listing.
//   - Never publish a review we have decided to hold back, whichever source it came from.
//     The filters below apply to Places API results too, not just the seeded quotes.
//   - No AggregateRating schema is emitted anywhere (see src/lib/schema.ts).

import cache from "./reviews-cache.json";

export interface Review {
  quote: string;
  author: string;
  location?: string;
  rating?: number | null;
}

export interface RatingSummary {
  /** Raw value as fetched, for example 4.97. */
  rating: number;
  /** What Google itself shows, rounded to one decimal, for example "5.0". */
  display: string;
  /** Filled stars, for the visual row. */
  stars: number;
  total: number;
  source: string;
  fetchedAt: string;
}

/**
 * Reviews held back on purpose, matched against the text so the rule survives a refresh:
 *   - radiant heating: the SEO brief keeps radiant, boiler and hydro jetting copy off the site
 *   - arrival-time stories: they read as a response-time promise nobody has approved
 */
const HOLD_BACK = [/\bradiant\b/i, /\bin an hour\b/i, /\bwithin an hour\b/i, /first to respond/i];

const published = (cache.reviews ?? []).filter(
  (review) => review.text && !HOLD_BACK.some((pattern) => pattern.test(review.text)),
);

export const reviews: Review[] = published.map((review) => ({
  quote: review.text,
  author: review.author,
  location: "location" in review ? (review as { location?: string }).location : undefined,
  rating: review.rating ?? null,
}));

/** Null when the cache holds no usable rating, which is the fail-closed path. */
export function ratingSummary(): RatingSummary | null {
  const rating = cache.rating;
  const total = cache.userRatingCount;
  if (typeof rating !== "number" || typeof total !== "number" || total < 1) return null;
  return {
    rating,
    display: rating.toFixed(1),
    stars: Math.round(rating),
    total,
    source: cache.source,
    fetchedAt: cache.fetchedAt,
  };
}

/** How many reviews were withheld, so the QA note can state it rather than guess. */
export const heldBackCount = (cache.reviews ?? []).length - published.length;

export function topReviews(count = 3): Review[] {
  return reviews.slice(0, count);
}
