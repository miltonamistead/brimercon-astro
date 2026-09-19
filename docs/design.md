# Design and imagery

Companion to `PLAN.md` §3b (first-screen contract) and decision A9/D10. This is a working stub: it records what the twin does with imagery today and what the photo shoot replaces later. It is not a visual style guide yet — the golden pages Milton approves in M0.5 become that.

## 1. Image carry-forward (audit H6, reverses the earlier "no live images" decision)

The first plan rebuilt without any of the existing photography because the files are stock-looking lifestyle art with unclear licensing. The audit reversed that, and the reversal is right: a rebuild that ships with no pictures is worse for a homeowner deciding who to call than one that ships with the pictures the business already uses. Real photography from a Truckee shoot replaces them later and does not block launch.

`scripts/crawl-live.mjs` inventories every referenced image into `docs/crawl/images.json`; `npm run images` copies the carried set into `public/images/`.

| Referenced on live | 32 |
|---|---|
| Broken on live (`/images/og-default.jpg`, 404) | 1 |
| Real files available | 31 |
| Excluded on policy (see below) | 1 |
| **Carried into the repo** | **30 files, 29 unique by content** |

The 30 are: the logo, 24 town hero photos, and 5 marketing images. Two of the five (`footer-bg-premium.png` and `ready-to-get-started-bg.png`) are byte-identical, which is where the 29-unique figure comes from.

### Excluded: `reliability-for-every-season.png`

A ski resort scene with a gondola marked **Heavenly** and an "Après Ski Lodge" sign. Heavenly is South Lake Tahoe, which is not a Brimer service area, and the live alt text calls it "Modern mountain residence exterior with large windows and warm evening lighting", which does not describe the file. Out of area and dishonestly labelled: it does not ship. It is used on 22 live pages, so every template that referenced it needs a replacement block (a photo from the carried set, or no image).

### Known defects in the carried set, to fix as they are used

- **24 town heroes ship with empty `alt` on live.** Each needs alt text describing what is actually in the frame, written when the town page is built.
- **Five marketing files are JPEG bytes inside a `.png` filename**, served as `image/png`. Re-encode to real WebP/JPEG with matching `Content-Type` when they are placed. `sharp` is already a dependency.
- **`design-forward-fixture-performance.png`** is declared 1024×1024 in live HTML but is actually 1024×682. Always emit real intrinsic `width`/`height`.
- Two identical background files: use one path and delete the duplicate reference.

### Generated: `og-default.jpg`

Every live page points `og:image` and `twitter:image` at `/images/og-default.jpg`, which 404s, so every share of brimercon.com today produces a blank card. `scripts/make-og.mjs` generates a real 1200×630 branded card (logo, headline, phone) at ~45 KB. It is a placeholder and is labelled as one; a photo from the shoot replaces it.

## 2. First screen

The contract is specified in `PLAN.md` §3b and enforced by `tests/first-screen.spec.ts`. The design consequences:

- **Calling is the primary action.** The call button is full width on mobile, high contrast, and sits above the fold on every important template. The form is a text-weight link underneath it. Nothing competes with the call.
- **No hero image above the fold on mobile.** A large image pushes the call button down and slows LCP. Imagery starts below the first screen (audit H6). On desktop, where the fold is far lower, a hero may sit beside or under the first-screen block.
- **A fixed call bar** is pinned to the bottom of the mobile viewport, CSS only, hidden from 768px up. Body padding reserves its height so it never covers content.
- **Measured on the built 404 template** at 390×844: H1 at 77px, area line 121px, call button 306px (358px wide of a 390px viewport), form link 370px, hours 407px, trust strip 467px, call bar pinned at 780px. Everything in the contract lands inside the first 640px with room to spare.

## 3. Reviews and map (audit H10, decision D11)

Both are required on the rebuild and neither belongs in the first screen.

- **Reviews**: pull Google reviews at build time via the Places API into a committed cache (`src/data/reviews.ts` plus a refresh script), so pages stay static and no third-party widget runs in the browser. Until the API key exists, the quoted reviews already on live are the stub content, attributed as they are today. **No `AggregateRating` or `Review` schema** — the SEO brief forbids inventing it and Google does not surface self-serving review markup for a LocalBusiness.
- **Map**: a static, lazily-loaded map image or a click-to-load embed near the NAP block on `/contact/` and the home page. Never an eagerly-loaded iframe: that alone would cost the Lighthouse budget.

## 4. Type and colour

System font stack, no webfonts, so the first screen needs no font download. Tokens live at the top of `src/styles/global.css`: deep blue `#12466e` for brand and links, rust `#b4441f` for the call button, near-black `#12181f` for text. The call button contrast ratio against white and the link colour against the page background both clear WCAG AA; re-check any new colour before using it.

## 5. Open for the golden pages (M0.5)

Milton's screenshots decide: hero treatment on desktop, how much of the live visual language carries over, service card style, whether town pages get a photo band, and where reviews and the map sit on the home page.
