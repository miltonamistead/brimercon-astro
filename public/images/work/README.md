# Work photos — swap guide

These images are the placeholders that went in ahead of the real photo shoot.
Filenames are slot-based, not shoot-based: when the real shoot delivers,
replace the file behind the same name (same aspect ratio family) and every
page updates with no code changes.

## Homepage showcase (`src/pages/index.astro`, `showcase` array)

| Slot | File | Status |
|---|---|---|
| Spa-grade bath experiences | `bathroom-outcome.webp` (1024x683) | placeholder, replace with real finished bath |
| Design-forward fixture performance | `kitchen-faucet-outcome.webp` (1024x683) | placeholder, replace with real fixture shot |

The third showcase slot (`ready-to-get-started-bg.png`, lakeside residence)
is an existing real photo and stays.

## Service pages (`src/data/service-photos.ts`)

| Service | File | Status |
|---|---|---|
| water-heaters | `water-heater-install.webp` | placeholder |
| tankless-water-heaters | `tankless-install.webp` | placeholder |
| winterization | `winter-cabin-visit.webp` | v2: regenerated with natural van scale, real Brimer logo composited |
| drain-cleaning | `crawlspace-work.webp` | placeholder |
| leak-detection | `pressure-gauge-test.webp` | REAL Brimer job site, Truckee 2026-07-22 |
| emergency-plumber | `van-snowy-driveway.webp` | placeholder, replace with the real branded truck |
| frozen-burst-pipes | `pipe-soffit-install.webp` | REAL Brimer job site, Truckee 2026-07-22 |
| gas-services | `fireplace-insert-install.webp` | REAL Brimer job site, Truckee 2026-07-22 |
| kitchen-bath-plumbing | `under-sink-work.webp` | placeholder |
| appliance-installation | `dishwasher-install.webp` | placeholder |
| smart-leak-shutoff | `leak-shutoff-install.webp` | placeholder |

## About page (`src/pages/about.astro`)

- `renovation-in-progress.webp` — REAL Brimer job site, Truckee 2026-07-22

## Focal points for portrait originals

The band crop is a wide slice of each image (`object-fit: cover`). Real
job-site photos are portrait phone shots, so `src/data/service-photos.ts`
carries an optional `position` per image (CSS `object-position`) that keeps
the storytelling part of the frame in the slice. The About band sets its
position inline in `src/pages/about.astro`. When the real shoot delivers
portrait originals, set the position for the new file the same way.

## Reserve (not on any page yet)

- `gas-fireplace-outcome.webp` — placeholder for a gas-services outcome shot or a second band

## Do not fake with generation

Per the owner's direction: anything showing Brimer's actual crew faces or
the real branded truck waits for the real shoot. The unmarked van and
faceless workers above are the stand-ins until then.

Originals (full-res sources) live in `photo-candidates/` at the repo root.
