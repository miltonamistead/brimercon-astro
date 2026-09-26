// Single source of truth for NAP, phone, hours, licence and the first-screen contract.
// Every component reads from here; no literals in templates. Enforced by scripts/qa-content.mjs.
//
// Copy policy (PLAN.md section 3a, audit B4): no em or en dashes, no dollar prices, no
// unapproved speed claims ("same day", "priority", "fastest"), California towns named
// rather than Nevada excluded.

export const PHONE_DISPLAY = "530-587-0733";
export const PHONE_TEL = "+15305870733";
export const PHONE_HREF = `tel:${PHONE_TEL}`;

export const site = {
  legalName: "Clearline Services LLC",
  dba: "Brimer Plumbing",
  name: "Brimer Plumbing",
  email: "service@brimerplumbing.com",
  phoneDisplay: PHONE_DISPLAY,
  phoneTel: PHONE_TEL,
  phoneHref: PHONE_HREF,
  founded: 1997,
  cslb: "1149344",
  street: "10647 Manchester Dr",
  city: "Truckee",
  region: "CA",
  postal: "96161",
  country: "US",
  geo: { lat: 39.3613011, lng: -120.1030431 },
  placeId: "ChIJw3M9Pdp6SIERbHPE39fkPN8",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Brimer+Plumbing&query_place_id=ChIJw3M9Pdp6SIERbHPE39fkPN8",
  googleReviewsUrl:
    "https://search.google.com/local/reviews?placeid=ChIJw3M9Pdp6SIERbHPE39fkPN8",
  yelpUrl: "https://www.yelp.com/biz/brimer-plumbing-truckee",

  // Ruled by Milton in the accepted audit: 7am to 8pm daily, he answers evenings and
  // weekends, and a missed call goes to voicemail. Live /contact/, live JSON-LD and the
  // Truckee Google Business Profile all already say 7:00 to 20:00 every day.
  hoursLabel: "Open 7:00 AM to 8:00 PM, every day",
  hoursShort: "7 AM to 8 PM daily",
  afterHoursLine: `Call ${PHONE_DISPLAY} any time. If we miss you, leave a message.`,

  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const,
    opens: "07:00",
    closes: "20:00",
  },

  // Schema token copied from live JSON-LD. Not a dollar price; never followed by a digit.
  priceRange: "$$",
  canonicalOrigin: "https://www.brimercon.com",

  // Licence line for the footer. No Nevada sentence: the audit removed the exclusion
  // wording from customer copy in favour of naming the towns actually served.
  cslbLine: "CA CSLB License #: 1149344",
} as const;

export function isIndexable(): boolean {
  return import.meta.env.PUBLIC_INDEXABLE === "true";
}

export function canonicalOrigin(): string {
  return (import.meta.env.PUBLIC_CANONICAL_ORIGIN || site.canonicalOrigin).replace(/\/$/, "");
}

export function canonicalUrl(pathname: string): string {
  const path = pathname.endsWith("/") || pathname.includes(".") ? pathname : `${pathname}/`;
  return `${canonicalOrigin()}${path}`;
}

export function napOneLine(): string {
  return `${site.street}, ${site.city}, ${site.region} ${site.postal}`;
}

/**
 * First two items of the first-screen trust strip (audit B1). The third is the Google
 * rating, which FirstScreen builds from the reviews cache so it can fall back to a plain
 * link when no rating has been fetched.
 */
export const trustPoints = [
  { label: `Serving Truckee since ${site.founded}` },
  { label: site.cslbLine },
] as const;

export const navPrimary = [
  { href: "/services/", label: "Services" },
  { href: "/service-areas/", label: "Service areas" },
  { href: "/about/", label: "About" },
  { href: "/reviews/", label: "Reviews" },
  { href: "/faqs/", label: "FAQs" },
  { href: "/contact/", label: "Contact" },
] as const;

// Five nav groups covering all 24 live town slugs (docs/crawl/sitemap-urls.txt).
// "hub" is an additive real page for a grouping label that is a 404 on live (PLAN.md D3).
export const serviceAreaGroups = [
  {
    label: "Truckee",
    towns: ["truckee", "tahoe-donner", "glenshire", "donner-lake"],
  },
  {
    label: "Martis Valley",
    hub: "/service-areas/martis-valley/",
    towns: ["martis-camp", "lahontan", "northstar", "schaffers-mill", "grays-crossing", "old-greenwood"],
  },
  {
    label: "North Shore",
    towns: ["kings-beach", "tahoe-vista", "carnelian-bay", "dollar-point", "agate-bay"],
  },
  {
    label: "West Shore and Tahoe City",
    towns: ["tahoe-city", "homewood", "tahoma", "meeks-bay", "olympic-valley", "alpine-meadows"],
  },
  {
    label: "Donner Summit",
    towns: ["donner-summit-serene-lakes", "soda-springs", "norden"],
  },
] as const;

/**
 * Default service-area line for the first screen. Templates with a town context pass
 * the town name instead. Names towns rather than excluding a state (audit B2).
 */
export const serviceAreaLine =
  "Serving Truckee, Tahoe Donner, Donner Lake, Tahoe City, Kings Beach and nearby communities";
