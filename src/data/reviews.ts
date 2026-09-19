// Customer reviews quoted from the live site (docs/crawl/pages/reviews.txt), which in turn
// quotes the public Google and Yelp listings. Same business, same public words.
//
// Two deliberate constraints:
//
// 1. No star rating or review count is asserted anywhere in the twin. Live claims "Google
//    5.0 (16 reviews)" and "4.9 on Yelp (22 reviews)"; the Google Business Profile record
//    read on 2026-09-19 says 4.97 across 32. Those disagree, and a number that drifts is a
//    number that goes stale on a static page. Until reviews are pulled at build time from
//    the Places API (docs/design.md section 3), the page shows the words and links out.
//    There is no AggregateRating schema either way.
// 2. Em dashes in the original quotes are replaced with parentheses or commas to satisfy
//    the copy policy (PLAN.md section 3c). Wording is otherwise untouched.
//
// Reviews mentioning radiant heating are excluded: the SEO brief holds radiant, boiler and
// hydro jetting copy off the site.

export interface Review {
  quote: string;
  author: string;
  location: string;
  /** Which pages this review is a good fit for. */
  tags: Array<"general" | "water-heaters" | "gas" | "truckee" | "emergency">;
}

export const reviews: Review[] = [
  {
    quote:
      "Outstanding service from Brimer Plumbing at my cabin in Truckee! Responsive, easy to communicate with, and very patient as I sorted out my situation (including help locating the main water shut off). Wesley explained the issue and outlined repair recommendations in a way that was easy to understand, and Jamie was always available by text and phone. Highly recommend!",
    author: "K B.",
    location: "Alameda, CA",
    tags: ["general", "truckee"],
  },
  {
    quote:
      "Jamie is reliable, efficient and extremely pleasant to work with. He converted my home from propane to natural gas and took care of all the tedious steps, ensuring everything (permits, inspections, working with subcontractors) was taken care of and done well. I wasn't totally happy with an issue with my water heater and he agreed it wasn't ideal and came to make it right. I will always call Jamie first when in need of any job!",
    author: "Jill S.",
    location: "Truckee, CA",
    tags: ["general", "water-heaters", "gas", "truckee"],
  },
  {
    quote:
      "A new gas fireplace was on the horizon and we needed someone to draw up the plan, get a permit and install the gas line. The store in Truckee recommended Jamie Brimer and I see why. Prompt, professional and efficient. We don't live full time in the area, but Jamie took photos of his work upon completion and it was well done. He also noticed something in our house and gave his recommendations for our safety. This man is thorough and obviously cares.",
    author: "Stephanie Y.",
    location: "Berkeley, CA",
    tags: ["general", "gas"],
  },
  {
    quote:
      "Had a gas leak during the major storm of winter '23. Jamie Brimer came out to locate the leak and do the necessary repairs. Being in the dead of winter without heat was a major issue obviously, but he quickly handled the permitting from the city of Truckee to get the job done as soon as possible. Definitely recommend.",
    author: "Chris B.",
    location: "San Francisco, CA",
    tags: ["gas", "emergency", "truckee"],
  },
  {
    quote:
      "Jamie installed a new gas line for a new fireplace/stove. He arrived as scheduled for the estimate and performed the work as planned. His instructions how to handle the permit, gas company and city inspection made it a breeze. After discussing my 30+ year old water heater we decided to replace it. There was no sales pitch or hard sell. All the work was done correctly, on schedule and at a reasonable cost.",
    author: "Larry L.",
    location: "Menlo Park, CA",
    tags: ["water-heaters", "gas"],
  },
  {
    quote:
      "Jamie installed a new gas line for our new propane stove, and it turned out great. He was extremely responsive in all communications, explained everything well, and took care of the permit process. I highly recommend Jamie and his company.",
    author: "Gregg H.",
    location: "Rocklin, CA",
    tags: ["general", "gas"],
  },
];

/** Up to `count` reviews matching a tag, falling back to general ones. */
export function reviewsFor(tag: Review["tags"][number], count = 3): Review[] {
  const tagged = reviews.filter((review) => review.tags.includes(tag));
  const rest = reviews.filter((review) => !review.tags.includes(tag));
  return [...tagged, ...rest].slice(0, count);
}
