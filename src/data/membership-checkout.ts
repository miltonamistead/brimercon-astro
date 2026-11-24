// Membership checkout payment links — THE ONE PLACE TO EDIT.
// ---------------------------------------------------------------------------
// Every "Join" button on /membership/ points at the URL listed here for its
// plan. Today each link points at the staging checkout mockup for that plan
// (payments are NOT connected; the mockups collect nothing).
//
// When the real Stripe Payment Links exist, replace the mockup URL below with
// the Stripe URL (https://buy.stripe.com/...) and every Join button follows.
// No other file needs editing.
//
// Placeholder tokens (for the handoff doc):
//   {{PAYMENT_LINK_ESSENTIAL_ANNUAL}}  -> PAYMENT_LINKS.essentialAnnual
//   {{PAYMENT_LINK_STEWARD_ANNUAL}}    -> PAYMENT_LINKS.stewardAnnual
//   {{PAYMENT_LINK_CONCIERGE_ANNUAL}}  -> PAYMENT_LINKS.conciergeAnnual
//   {{PAYMENT_LINK_ESSENTIAL_MONTHLY}} -> PAYMENT_LINKS.essentialMonthly
//   {{PAYMENT_LINK_STEWARD_MONTHLY}}   -> PAYMENT_LINKS.stewardMonthly
//   {{PAYMENT_LINK_CONCIERGE_MONTHLY}} -> PAYMENT_LINKS.conciergeMonthly
export const PAYMENT_LINKS = {
  essentialAnnual: "/membership/checkout/essential-annual/",
  stewardAnnual: "/membership/checkout/steward-annual/",
  conciergeAnnual: "/membership/checkout/concierge-annual/",
  essentialMonthly: "/membership/checkout/essential-monthly/",
  stewardMonthly: "/membership/checkout/steward-monthly/",
  conciergeMonthly: "/membership/checkout/concierge-monthly/",
} as const;

export type BillingPeriod = "annual" | "monthly";
export type TierSlug = "essential" | "steward" | "concierge";

export interface CheckoutPlan {
  slug: string;
  tier: TierSlug;
  tierName: string;
  billing: BillingPeriod;
  billingLabel: string;
  /** Price shown big, e.g. "$149.00". */
  price: string;
  /** "per year" or "per month". */
  perLabel: string;
  /** Annual only: "$12.42 / month billed annually". */
  perMonthLine: string | null;
  /** Line-item billing note: "Billed annually" or "Billed monthly". */
  billedNote: string;
  /** Key into PAYMENT_LINKS. */
  linkKey: keyof typeof PAYMENT_LINKS;
}

// Prices match the live membership page and Milton's brief (2026-11-24).
// Annual per-month lines are the annual price divided by 12.
export const CHECKOUT_PLANS: CheckoutPlan[] = [
  {
    slug: "essential-annual",
    tier: "essential",
    tierName: "Essential",
    billing: "annual",
    billingLabel: "Annual",
    price: "$149.00",
    perLabel: "per year",
    perMonthLine: "$12.42 / month billed annually",
    billedNote: "Billed annually",
    linkKey: "essentialAnnual",
  },
  {
    slug: "steward-annual",
    tier: "steward",
    tierName: "Steward",
    billing: "annual",
    billingLabel: "Annual",
    price: "$449.00",
    perLabel: "per year",
    perMonthLine: "$37.42 / month billed annually",
    billedNote: "Billed annually",
    linkKey: "stewardAnnual",
  },
  {
    slug: "concierge-annual",
    tier: "concierge",
    tierName: "Concierge",
    billing: "annual",
    billingLabel: "Annual",
    price: "$749.00",
    perLabel: "per year",
    perMonthLine: "$62.42 / month billed annually",
    billedNote: "Billed annually",
    linkKey: "conciergeAnnual",
  },
  {
    slug: "essential-monthly",
    tier: "essential",
    tierName: "Essential",
    billing: "monthly",
    billingLabel: "Monthly",
    price: "$15.00",
    perLabel: "per month",
    perMonthLine: null,
    billedNote: "Billed monthly",
    linkKey: "essentialMonthly",
  },
  {
    slug: "steward-monthly",
    tier: "steward",
    tierName: "Steward",
    billing: "monthly",
    billingLabel: "Monthly",
    price: "$45.00",
    perLabel: "per month",
    perMonthLine: null,
    billedNote: "Billed monthly",
    linkKey: "stewardMonthly",
  },
  {
    slug: "concierge-monthly",
    tier: "concierge",
    tierName: "Concierge",
    billing: "monthly",
    billingLabel: "Monthly",
    price: "$75.00",
    perLabel: "per month",
    perMonthLine: null,
    billedNote: "Billed monthly",
    linkKey: "conciergeMonthly",
  },
];

export function checkoutPlanBySlug(slug: string): CheckoutPlan | undefined {
  return CHECKOUT_PLANS.find((plan) => plan.slug === slug);
}
