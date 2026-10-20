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
    alt: "Brimer plumber walking up to a well-kept Truckee home in winter, service van in the driveway",
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
    alt: "Branded Brimer Plumbing Ford Transit van in a snowy Truckee driveway at a modern mountain home",
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
    // [REAL] Brimer job site, Truckee 2026-07-22: pressure test on a gas line.
    // Swapped 2026-10-20 (Milton): the previous shot showed the back of a fireplace
    // insert and did not read as gas work. The gauge shot is unmistakably a gas
    // line pressure test. The insert photo stays in reserve (see work/README.md).
    src: "/images/work/gas-line-pressure-test.webp",
    alt: "Pressure gauge threaded onto a gas line during a pressure test at a Truckee home",
    width: 1200,
    height: 1600,
    position: "50% 38%",
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
    // Product photo: Moen's own Flo marketing imagery (placeholder until the
    // real shoot captures a Brimer-installed unit)
    src: "/images/work/leak-shutoff-install.webp",
    alt: "Moen Flo Smart Water Monitor and Shutoff with the Moen app showing a leak alert",
    width: 1600,
    height: 1067,
  },
};
