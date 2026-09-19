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
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brimer+Plumbing&query_place_id=ChIJw3M9Pdp6SIERbHPE39fkPN8",
  yelpUrl: "https://www.yelp.com/biz/brimer-plumbing-truckee",
  hoursLabel: "Monday to Sunday: 7:00 AM to 8:00 PM",
  hoursNote:
    "Hours match the live contact page, JSON-LD, and the Truckee Google Business Profile (as of the 2026-08-31 snapshot and Paige hours pull). An older internal pack listed weekday 8–6 with after-hours emergencies only. Milton should pick one truth before the production swap; this twin does not invent a third schedule.",
  openingHours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const,
    opens: "07:00",
    closes: "20:00",
  },
  // Schema token copied from live JSON-LD. Not a dollar price; never followed by a digit.
  priceRange: "$$",
  canonicalOrigin: "https://www.brimercon.com",
  // The only permitted Nevada strings. Both sentences are verbatim from live
  // (footer and /faqs/) and are allowlisted by scripts/qa-phones.mjs.
  cslbLine: "CA CSLB License #: 1149344",
  exclusion: "Licensed in California only. Not licensed in Nevada.",
  nevadaFaqAnswer:
    "No. We are licensed in California only and serve the California side of Truckee and North Lake Tahoe. We do not provide service in Nevada communities such as Incline Village, Crystal Bay, or Stateline.",
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
    label: "West Shore & Tahoe City",
    towns: ["tahoe-city", "homewood", "tahoma", "meeks-bay", "olympic-valley", "alpine-meadows"],
  },
  {
    label: "Donner Summit",
    towns: ["donner-summit-serene-lakes", "soda-springs", "norden"],
  },
] as const;

export const formCities = [
  "Truckee",
  "Tahoe City",
  "Kings Beach",
  "Tahoe Vista",
  "Carnelian Bay",
  "Homewood",
  "Tahoma",
  "Olympic Valley",
  "Alpine Meadows",
  "Dollar Point",
  "Donner Lake",
  "Tahoe Donner",
  "Glenshire",
  "Donner Summit / Serene Lakes",
  "Soda Springs",
  "Norden",
  "Agate Bay",
  "Martis Camp",
  "Other (CA side)",
] as const;

export const timingOptions = [
  "Flexible",
  "As soon as possible",
  "This week",
  "Next week",
  "Just planning ahead",
] as const;
