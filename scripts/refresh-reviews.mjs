#!/usr/bin/env node
// Refreshes src/data/reviews-cache.json from the Google Places API (New).
//
//   GOOGLE_PLACES_API_KEY=... node scripts/refresh-reviews.mjs
//   GOOGLE_PLACES_API_KEY=... node scripts/refresh-reviews.mjs --dry-run
//
// Fails closed. If the key is missing, the request errors, or the response is missing a
// rating, the existing cache is left exactly as it is and the script exits non-zero. The
// site keeps rendering the last good numbers rather than losing its rating mid-build, and
// it never shows a number this script did not receive.
//
// Run this, commit the updated cache, and deploy. The site build itself makes no network
// calls, so a Places outage can never break or slow a deploy.
//
// Billing note: rating, userRatingCount and reviews are all Place Details Enterprise SKU
// fields. One call per refresh, not one per page view.

import { readFile, writeFile } from "node:fs/promises";

const CACHE = "src/data/reviews-cache.json";
const PLACE_ID = "ChIJw3M9Pdp6SIERbHPE39fkPN8";
const FIELD_MASK = "id,displayName,rating,userRatingCount,reviews";
const DRY_RUN = process.argv.includes("--dry-run");

const key = process.env.GOOGLE_PLACES_API_KEY;

const fail = (message) => {
  console.error(`refresh-reviews: ${message}`);
  console.error(`Cache left unchanged at ${CACHE}. The site keeps the last good numbers.`);
  process.exit(1);
};

if (!key) {
  fail("GOOGLE_PLACES_API_KEY is not set. See docs/lead-capture.md and CONTINUE_STATUS.md for how to add it.");
}

let existing = null;
try {
  existing = JSON.parse(await readFile(CACHE, "utf8"));
} catch {
  console.warn(`refresh-reviews: no readable cache at ${CACHE} yet, a successful fetch will create one.`);
}

let place;
try {
  const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
    headers: { "X-Goog-Api-Key": key, "X-Goog-FieldMask": FIELD_MASK },
  });
  const body = await res.text();
  if (!res.ok) fail(`Places API returned HTTP ${res.status}: ${body.slice(0, 400)}`);
  place = JSON.parse(body);
} catch (err) {
  fail(`Places API request failed: ${err.message}`);
}

if (typeof place.rating !== "number" || typeof place.userRatingCount !== "number") {
  fail(`response had no rating or userRatingCount: ${JSON.stringify(place).slice(0, 400)}`);
}

const reviews = (place.reviews ?? [])
  .map((review) => ({
    author: review.authorAttribution?.displayName ?? "Google reviewer",
    rating: review.rating ?? null,
    text: (review.originalText?.text ?? review.text?.text ?? "").trim(),
    relativeTime: review.relativePublishTimeDescription ?? null,
    publishTime: review.publishTime ?? null,
  }))
  .filter((review) => review.text.length > 0);

const next = {
  // Provenance is part of the data: whoever reads this file should know where the number
  // came from and how old it is without digging through git history.
  source: "google-places-api-v1",
  fetchedAt: new Date().toISOString(),
  placeId: PLACE_ID,
  displayName: place.displayName?.text ?? null,
  rating: place.rating,
  userRatingCount: place.userRatingCount,
  reviews,
};

console.log(`refresh-reviews: ${next.rating} from ${next.userRatingCount} ratings, ${reviews.length} review(s) with text`);
if (existing?.rating !== undefined) {
  console.log(`  previous cache: ${existing.rating} from ${existing.userRatingCount} (${existing.source}, ${existing.fetchedAt})`);
}

if (DRY_RUN) {
  console.log("--dry-run: cache not written.");
  process.exit(0);
}

await writeFile(CACHE, JSON.stringify(next, null, 2) + "\n");
console.log(`refresh-reviews: wrote ${CACHE}. Commit it, then deploy.`);
