// Photo for each service page. Placed as a full-bleed band right after the
// intro section so the image sits next to the words it supports.
//
// Naming is slot-based, not shoot-based: when the real photo shoot delivers,
// swap the file behind the same name and every page updates. Files marked
// [REAL] are genuine Brimer job-site photos from the owner's library
// (Truckee, 2026-07-22); the rest are realistic placeholders generated for
// the rebuild and should be replaced by the real shoot.

export interface ServicePhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
  // Focal point for the band crop (object-position). Real job-site photos
  // are portrait phone shots; the band is a wide slice, so this keeps the
  // storytelling part of the frame visible instead of the default center.
  position?: string;
  // Taller band height for this page only (a wide panorama whose full
  // vehicle must stay visible). When set, the template applies it as the
  // img height, overriding the shared clamp; width stays full-bleed and
  // the value must match the file's aspect ratio so object-fit: cover
  // shows the whole frame instead of cropping it.
  bandHeight?: string;
}

export const servicePhotos: Record<string, ServicePhoto> = {
  "water-heaters": {
    src: "/images/work/water-heater-install.webp",
    alt: "New tank water heater installed in a Truckee garage with copper piping and seismic straps",
    width: 1600,
    height: 1067,
  },
  "tankless-water-heaters": {
    src: "/images/work/tankless-install.webp",
    alt: "Wall-mounted tankless water heater installed in a garage with copper connections",
    width: 1600,
    height: 1067,
  },
  winterization: {
    src: "/images/work/winter-cabin-visit.webp",
    alt: "Brimer Plumbing Ford Transit van parked in snow in front of a Truckee mountain home",
    width: 1600,
    height: 1067,
  },
  "drain-cleaning": {
    src: "/images/work/crawlspace-work.webp",
    alt: "Technician feeding a drum snake into a drain line under a Tahoe home",
    width: 1600,
    height: 1067,
  },
  "leak-detection": {
    src: "/images/work/pressure-gauge-test.webp",
    alt: "Water pressure test gauge showing low pressure during leak detection",
    width: 1600,
    height: 1067,
  },
  "emergency-plumber": {
    src: "/images/work/van-snowy-driveway.webp",
    alt: "Brimer Plumbing Ford Transit van parked in snow outside a Truckee log-and-stone cabin, plumber walking toward the door",
    width: 1600,
    height: 1067,
  },
  "frozen-burst-pipes": {
    // Generated frozen-pipe close-up (2026-10-21, Milton's spec). The previous
    // [REAL] job-site photo is backed up at workspace/brimer/real-photos/
    // pipe-soffit-install-real.webp and in git history.
    src: "/images/work/pipe-soffit-install.webp",
    alt: "Frozen copper water pipe coated in frost and ice with icicles in a Truckee crawlspace",
    width: 1600,
    height: 1067,
  },
  "gas-services": {
    // Generated gas-manifold photo (2026-10-21, Milton's spec, 16:9). The
    // previous [REAL] pressure-test shot is backed up at
    // workspace/brimer/real-photos/gas-line-pressure-test-real.webp and in git.
    src: "/images/work/gas-line-pressure-test.webp",
    alt: "Plumber testing a black iron gas line with a leak detector beside a manifold, tankless water heater and snowy Sierra view behind",
    width: 1600,
    height: 900,
  },
  "kitchen-bath-plumbing": {
    src: "/images/work/under-sink-work.webp",
    alt: "Plumber's gloved hands tightening a brass fitting under a cabin kitchen sink",
    width: 1600,
    height: 1067,
  },
  "appliance-installation": {
    // Generated dishwasher install (2026-10-21, Milton's spec, 16:9). The
    // previous image is backed up at workspace/brimer/real-photos/
    // dishwasher-install-previous.webp and in git.
    src: "/images/work/dishwasher-install.webp",
    alt: "Plumber connecting a dishwasher braided supply line to the shutoff valve in a bright Truckee kitchen",
    width: 1600,
    height: 900,
  },
  "repiping": {
    // Generated PEX repipe photo (2026-10-21, Milton's spec, 16:9). New entry:
    // Repiping previously had no banner image; this uses the shared
    // service-photo-band figure like the other services.
    src: "/images/work/repipe-pex-install.webp",
    alt: "Plumber crimping a brass fitting onto new blue PEX beside red and blue runs through open studs, old galvanized pipe on the floor",
    width: 1600,
    height: 900,
  },
  "smart-leak-shutoff": {
    // Product photo: Moen's own Flo marketing imagery (placeholder until the
    // real shoot captures a Brimer-installed unit)
    src: "/images/work/leak-shutoff-install.webp",
    alt: "Moen Flo Smart Water Monitor and Shutoff with the Moen app showing a leak alert",
    width: 1600,
    height: 1067,
  },
};
