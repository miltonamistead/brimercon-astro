// JSON-LD builders. Every value comes from src/data, so the markup and the visible copy
// can never drift apart (PLAN.md A6).
//
// Deliberately absent: AggregateRating and Review. The SEO brief forbids inventing a
// rating, the live numbers and the Google Business Profile numbers disagree, and Google
// does not surface self-serving review markup on a LocalBusiness anyway.

import { canonicalUrl, site } from "@/data/site";
import { towns } from "@/data/towns";

const BUSINESS_ID = `${site.canonicalOrigin}/#business`;

/** Full Plumber node. Used on the home page and (later) /contact/. */
export function plumberSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "@id": BUSINESS_ID,
    name: site.name,
    legalName: `${site.legalName} dba ${site.dba}`,
    url: canonicalUrl("/"),
    telephone: site.phoneTel,
    email: site.email,
    logo: canonicalUrl("/images/brimer-logo.png"),
    image: canonicalUrl("/images/og-default.jpg"),
    foundingDate: String(site.founded),
    priceRange: site.priceRange,
    identifier: {
      "@type": "PropertyValue",
      name: "CA CSLB License",
      value: site.cslb,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.postal,
      addressCountry: site.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...site.openingHours.days],
        opens: site.openingHours.opens,
        closes: site.openingHours.closes,
      },
    ],
    // All 24 California towns that have pages, not the four the live site lists.
    areaServed: towns.map((town) => ({
      "@type": "City",
      name: town.name,
      containedInPlace: { "@type": "State", name: "California" },
    })),
    sameAs: [site.mapsUrl, site.yelpUrl],
  };
}

/** Compact reference to the business, for pages that are not the home page. */
function providerRef() {
  return {
    "@type": "Plumber",
    "@id": BUSINESS_ID,
    name: site.name,
    telephone: site.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.postal,
      addressCountry: site.country,
    },
  };
}

export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  /** A single town, or every California town we serve. */
  areaTown?: string;
}) {
  const areaServed = opts.areaTown
    ? [{ "@type": "City", name: opts.areaTown, containedInPlace: { "@type": "State", name: "California" } }]
    : towns.map((town) => ({
        "@type": "City",
        name: town.name,
        containedInPlace: { "@type": "State", name: "California" },
      }));

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.name,
    description: opts.description,
    url: canonicalUrl(opts.path),
    provider: providerRef(),
    areaServed,
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/** Every crumb carries an item URL, including the last one, which live omits. */
export function breadcrumbSchema(crumbs: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: canonicalUrl(crumb.path),
    })),
  };
}
