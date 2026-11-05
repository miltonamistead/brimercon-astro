// The 24 California towns that have live pages (docs/crawl/sitemap-urls.txt).
//
// Facts below are transcribed from the live pages via scripts/crawl-live.mjs; the raw
// source is docs/crawl/town-facts.json. Nothing here is inferred. Full per-town page copy
// is deliberately NOT in this file yet: town pages wait on Milton's golden-page approval
// and the per-town briefs in docs/town-briefs.md (audit H11).
//
// Note for the content gate: "Nevada County" is a California county and is allow-listed
// in scripts/qa-content.mjs. Norden and Soda Springs genuinely permit through it.

export type TownType = "town" | "resort" | "gated" | "lakefront" | "summit";

export interface Town {
  slug: string;
  name: string;
  /** Nav group label, matches serviceAreaGroups in site.ts. */
  group: string;
  /** Drives which town-brief structure the page uses (audit H11). */
  type: TownType;
  elevationFt: string | null;
  permitAuthority: string;
  /** Water, sewer, gas and electric providers named on the live page. */
  utilities: string[];
}

export const towns: Town[] = [
  { slug: "truckee", name: "Truckee", group: "Truckee", type: "town", elevationFt: "5,800 to 6,200", permitAuthority: "Town of Truckee Building and Safety Division", utilities: ["TDPUD", "TSD", "TTSA", "Southwest Gas"] },
  { slug: "tahoe-donner", name: "Tahoe Donner", group: "Truckee", type: "resort", elevationFt: "6,000 to 7,400", permitAuthority: "Town of Truckee Building and Safety Division", utilities: ["TDPUD", "TSD", "TTSA", "Southwest Gas"] },
  { slug: "glenshire", name: "Glenshire", group: "Truckee", type: "town", elevationFt: "5,900 to 6,000", permitAuthority: "Town of Truckee Building and Safety Division", utilities: ["TDPUD", "TSD", "TTSA", "Southwest Gas"] },
  { slug: "donner-lake", name: "Donner Lake", group: "Truckee", type: "lakefront", elevationFt: "5,936", permitAuthority: "Town of Truckee Building and Safety Division", utilities: ["TDPUD", "TSD", "TTSA", "Southwest Gas"] },

  { slug: "martis-camp", name: "Martis Camp", group: "Martis Valley", type: "gated", elevationFt: "5,900 to 7,100", permitAuthority: "Placer County Building Services Division", utilities: ["NCSD", "TSD", "TTSA", "Southwest Gas"] },
  { slug: "lahontan", name: "Lahontan", group: "Martis Valley", type: "gated", elevationFt: "6,500", permitAuthority: "Placer County Building Services Division", utilities: ["NCSD", "TSD", "TTSA", "Southwest Gas"] },
  { slug: "northstar", name: "Northstar", group: "Martis Valley", type: "resort", elevationFt: null, permitAuthority: "Placer County Building Services Division", utilities: ["NCSD", "TSD", "TTSA", "Southwest Gas"] },
  { slug: "schaffers-mill", name: "Schaffer's Mill", group: "Martis Valley", type: "gated", elevationFt: null, permitAuthority: "Placer County Building Services Division", utilities: ["NCSD", "TSD", "TTSA", "Southwest Gas"] },
  { slug: "grays-crossing", name: "Gray's Crossing", group: "Martis Valley", type: "gated", elevationFt: "5,500", permitAuthority: "Town of Truckee Building and Safety Division", utilities: ["TDPUD", "TSD", "TTSA", "Southwest Gas"] },
  { slug: "old-greenwood", name: "Old Greenwood", group: "Martis Valley", type: "gated", elevationFt: "5,900", permitAuthority: "Town of Truckee Building and Safety Division", utilities: ["TDPUD", "TSD", "TTSA", "Southwest Gas"] },

  { slug: "kings-beach", name: "Kings Beach", group: "North Shore", type: "lakefront", elevationFt: "6,250", permitAuthority: "Placer County Building Services Division", utilities: ["NTPUD", "TTSA", "Southwest Gas", "Liberty Utilities"] },
  { slug: "tahoe-vista", name: "Tahoe Vista", group: "North Shore", type: "lakefront", elevationFt: "6,250 to 6,300", permitAuthority: "Placer County Building Services Division", utilities: ["NTPUD", "TTSA", "Southwest Gas", "Liberty Utilities"] },
  { slug: "carnelian-bay", name: "Carnelian Bay", group: "North Shore", type: "lakefront", elevationFt: "6,325", permitAuthority: "Placer County Building Services Division", utilities: ["NTPUD", "TTSA", "Southwest Gas", "Liberty Utilities"] },
  { slug: "dollar-point", name: "Dollar Point", group: "North Shore", type: "lakefront", elevationFt: "6,480", permitAuthority: "Placer County Building Services Division", utilities: ["NTPUD", "TCPUD", "TTSA", "Southwest Gas", "Liberty Utilities"] },
  { slug: "agate-bay", name: "Agate Bay", group: "North Shore", type: "lakefront", elevationFt: "6,250 to 6,300", permitAuthority: "Placer County Building Services Division", utilities: ["NTPUD", "TTSA", "Southwest Gas", "Liberty Utilities"] },

  { slug: "tahoe-city", name: "Tahoe City", group: "West Shore and Tahoe City", type: "town", elevationFt: "6,225", permitAuthority: "Placer County Building Services Division", utilities: ["TCPUD", "TTSA", "Southwest Gas", "Liberty Utilities"] },
  { slug: "homewood", name: "Homewood", group: "West Shore and Tahoe City", type: "lakefront", elevationFt: "6,225", permitAuthority: "Placer County Building Services Division", utilities: ["TCPUD", "TTSA", "Southwest Gas", "Liberty Utilities"] },
  { slug: "tahoma", name: "Tahoma", group: "West Shore and Tahoe City", type: "lakefront", elevationFt: "6,225", permitAuthority: "Placer County Building Services Division", utilities: ["TCPUD", "TTSA", "Southwest Gas", "Liberty Utilities"] },
  { slug: "meeks-bay", name: "Meeks Bay", group: "West Shore and Tahoe City", type: "lakefront", elevationFt: "6,225", permitAuthority: "El Dorado County", utilities: ["TCPUD", "TTSA", "Southwest Gas", "Liberty Utilities"] },
  { slug: "olympic-valley", name: "Olympic Valley", group: "West Shore and Tahoe City", type: "resort", elevationFt: "6,200", permitAuthority: "Placer County Building Services Division", utilities: ["Southwest Gas", "Liberty Utilities"] },
  { slug: "alpine-meadows", name: "Alpine Meadows", group: "West Shore and Tahoe City", type: "resort", elevationFt: "6,185 to 6,835", permitAuthority: "Placer County Building Services Division", utilities: ["Southwest Gas", "Liberty Utilities"] },

  { slug: "donner-summit-serene-lakes", name: "Donner Summit / Serene Lakes", group: "Donner Summit", type: "summit", elevationFt: "7,000", permitAuthority: "Placer County Building Services Division", utilities: ["Southwest Gas", "Liberty Utilities"] },
  { slug: "soda-springs", name: "Soda Springs", group: "Donner Summit", type: "summit", elevationFt: "6,768", permitAuthority: "Nevada County Community Development Agency", utilities: ["Southwest Gas", "Liberty Utilities"] },
  { slug: "norden", name: "Norden", group: "Donner Summit", type: "summit", elevationFt: "6,900 to 7,000", permitAuthority: "Nevada County Community Development Agency", utilities: ["Southwest Gas", "Liberty Utilities"] },
];

const bySlug = new Map(towns.map((town) => [town.slug, town]));

export function getTown(slug: string): Town | undefined {
  return bySlug.get(slug);
}

/** Display name for a slug. Falls back to the slug so a typo is visible, not silent. */
export function townName(slug: string): string {
  return bySlug.get(slug)?.name ?? slug;
}

/** Town names for the lead form's location field (audit H3: all 24, plus free text). */
export const townNames: string[] = towns.map((town) => town.name);
