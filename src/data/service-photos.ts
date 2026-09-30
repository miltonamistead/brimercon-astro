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
    alt: "Plumber carrying a tool bag up snowy steps to a Truckee A-frame cabin in winter",
    width: 1600,
    height: 1067,
  },
  "drain-cleaning": {
    src: "/images/work/crawlspace-work.webp",
    alt: "Plumber with a headlamp working on copper pipes in a dark crawlspace",
    width: 1600,
    height: 1067,
  },
  "leak-detection": {
    // [REAL] Brimer job site, Truckee 2026-07-22
    src: "/images/work/pressure-gauge-test.webp",
    alt: "Pressure gauge threaded onto a line during a pressure test at a Truckee job site",
    width: 900,
    height: 1200,
    position: "50% 40%",
  },
  "emergency-plumber": {
    src: "/images/work/van-snowy-driveway.webp",
    alt: "Work van parked in a snowy Truckee driveway outside a log cabin",
    width: 1600,
    height: 1067,
  },
  "frozen-burst-pipes": {
    // [REAL] Brimer job site, Truckee 2026-07-22
    src: "/images/work/pipe-soffit-install.webp",
    alt: "Painted metal pipe with an elbow and hanger running through a wood soffit",
    width: 900,
    height: 1200,
    position: "50% 45%",
  },
  "gas-services": {
    // [REAL] Brimer job site, Truckee 2026-07-22: gas fireplace insert going in
    src: "/images/work/fireplace-insert-install.webp",
    alt: "Gas fireplace insert being installed in a framed wall with the gas supply pipe connected",
    width: 900,
    height: 1200,
    position: "50% 65%",
  },
  "kitchen-bath-plumbing": {
    src: "/images/work/under-sink-work.webp",
    alt: "Plumber's gloved hands tightening a brass fitting under a cabin kitchen sink",
    width: 1600,
    height: 1067,
  },
  "appliance-installation": {
    src: "/images/work/dishwasher-install.webp",
    alt: "Installer guiding a new stainless dishwasher into place under a cabin kitchen counter",
    width: 1600,
    height: 1067,
  },
  "smart-leak-shutoff": {
    src: "/images/work/leak-shutoff-install.webp",
    alt: "Automatic leak shutoff valve installed on a home's main copper water line with a floor sensor",
    width: 1600,
    height: 1067,
  },
};
