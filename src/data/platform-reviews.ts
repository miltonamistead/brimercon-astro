// Platform review sets for the Reviews page, in the live testimonial card format.
//
// Google set, newest first by the dates Maps shows: Jos (2 days ago), Fajans
// (4 weeks ago), Egan (a month ago), then the 2-months-ago group in displayed
// order (Zeiter, Scrivner, Thompson). Chris Kruss's Google card was removed
// 2026-10-22 per Milton (his Yelp card stays, so he is not shown twice).
// Guest Maps reads cap at the first five reviews, so Jos and Fajans came
// from screenshots Milton supplied 2026-10-22. Maps does not publish
// reviewer cities, so every Google city line below comes from Milton:
// Jos Tahoe City, CA; Fajans, Zeiter, Kruss, Egan, Scrivner, and Thompson
// all Truckee, CA (Fajans and Zeiter confirmed 2026-10-22). No Google card
// is left with a blank city line.
// Fajans's "Reasonable price" line is a Maps price field, not review body
// text, and a dollar figure would fail the site's qa-content price rule, so
// it is not reproduced. Fajans's body as captured ends "easy to work with."
// (confirmed by Milton 2026-10-22).
//
// Yelp set: verbatim from screenshots Milton supplied 2026-10-22, newest
// first by the dates Yelp shows. Cities per Milton 2026-10-22: Genny F. and
// Chris K. are Truckee; the other four use the locations on the existing
// live Reviews page testimonial cards or the Yelp profile (Greg O.,
// San Francisco, CA, per his Yelp profile via Milton).
//
// Review text is quoted verbatim and must not be edited, trimmed, or cleaned
// up. Paragraph breaks follow the published line breaks.

export interface PlatformReview {
  author: string;
  initials: string;
  /** City line, supplied by Milton for every reviewer. */
  subline: string;
  sublineIsCity: boolean;
  paragraphs: string[];
  avatarColor: string;
}

export const googleReviews: PlatformReview[] = [
  {
    author: "Jos 3",
    initials: "JP",
    subline: "Tahoe City, CA",
    sublineIsCity: true,
    paragraphs: [
      "Wes and Zach installed a new stove for us and took care of a couple of other plumbing projects. Wes is super knowledgeable, helpful, and a great communicator. We feel confident in their work and really appreciate their help!",
    ],
    avatarColor: "#12181f",
  },
  {
    author: "Michael Fajans",
    initials: "M",
    subline: "Truckee, CA",
    sublineIsCity: true,
    paragraphs: [
      "I needed a Moen Flo device installed. It is difficult o get a plumber in Truckee's on a timely basis. Brimer was recommended by a friend and had excellent reviews. They came out and gave me an estimate within a few days and were able to do the install the next day. Wes and his crew were good guys and easy to work with.",
    ],
    avatarColor: "#1a73e8",
  },
  {
    author: "Tanner Egan",
    initials: "TE",
    subline: "Truckee, CA",
    sublineIsCity: true,
    paragraphs: [
      "Zach absolutely crushed it. Great customer service and super knowledgeable. So stoked guys like Zach are in the plumbing industry.",
    ],
    avatarColor: "#b03a2e",
  },
  {
    author: "Lynette Zeiter",
    initials: "LZ",
    subline: "Truckee, CA",
    sublineIsCity: true,
    paragraphs: [
      "Zach was very professional and cordial, he saved the day! We had our water turned off to replace our shower valve and needed an emergency plumber. He came at 7 pm and had us up and running in less than an hour. We high recommend Zach and will call him again with any of our plumbing needs",
    ],
    avatarColor: "#7a5c3e",
  },
  {
    author: "Sheila Scrivner",
    initials: "SS",
    subline: "Truckee, CA",
    sublineIsCity: true,
    paragraphs: [
      "The response time was amazingly fast. Called them at 345 and they were at the house at our appointment time of 5. Both gentlemen were kind and helpful. They immediately went to work, diagnosed the problem, went to get parts and fixed it that evening. I was beyond grateful and highly recommended them. If in need again wouldn't hesitate to call Brimer",
    ],
    avatarColor: "#3d5a45",
  },
  {
    author: "Steve Thompson",
    initials: "ST",
    subline: "Truckee, CA",
    sublineIsCity: true,
    paragraphs: [
      "Brimer plumbing is great! Great service, easy to work with. Wes was communicative through the whole project working outside in the snow. Would highly recommend!",
    ],
    avatarColor: "#37474f",
  },
];

/**
 * The three Google reviews for the About page strip (Milton, 2026-10-22):
 * the strongest confirmed 5-star reviews — each names a specific job and
 * technician and shows clear communication or follow-through. Jos 3 (stove
 * install, Wes and Zach, great communicator; Tahoe City, CA) and Michael
 * Fajans (Moen Flo install, estimate within days, installed the next day)
 * are confirmed 5-star from screenshots Milton supplied 2026-10-22;
 * Lynette Zeiter (emergency shower valve, Zach at 7 pm, running in under
 * an hour) comes from the Maps five-star widget read. Text is the same
 * verbatim text as the Reviews page cards. Cities are Milton's, supplied
 * for the About section 2026-10-22 (Fajans and Zeiter: Truckee, CA); the
 * shared Reviews page objects now carry the same cities, so these copies
 * simply preserve the About set as it was built.
 */
export const aboutGoogleReviews: PlatformReview[] = [
  googleReviews[0],
  { ...googleReviews[1], subline: "Truckee, CA", sublineIsCity: true },
  { ...googleReviews[3], subline: "Truckee, CA", sublineIsCity: true },
];

/**
 * Service page Google pairs (Milton, 2026-10-22). Pool: the 7 confirmed
 * 5-star Google reviews — the 6 in googleReviews plus Chris Kruss's Google
 * review, verbatim from the Maps five-star widget read (same review as
 * Yelp's Chris K., with "google" in place of "Yelp"; his Google card was
 * removed from the Reviews page so he is not shown twice there, but the
 * Google review itself is a distinct review usable on service pages).
 * Nothing else was usable under the source rules: the cache's remaining
 * reviews (Chris B., Larry L., Gregg H.) mix Google and Yelp quotes with
 * no per-review source, so their Google origin and rating can't be
 * confirmed, and they were skipped. Each page's pair is distinct as a set;
 * with 7 reviews for 12 pages, individual reviews repeat across pages in
 * different pairings. Where a review matches the service it leads the pair
 * (Kruss water heater, Zeiter emergency valve, Fajans Moen Flo shutoff,
 * Jos stove, Thompson snow); tankless, drain, gas, and repipe have no
 * matching 5-star review, so those pages get strong reviews instead of a
 * forced match. Cities: Jos Tahoe City, CA; Fajans and Zeiter Truckee, CA
 * (Milton-supplied, same copies as the About set); Kruss, Egan, Scrivner,
 * and Thompson Truckee, CA (Milton 2026-10-22).
 */
const krussGoogle: PlatformReview = {
  author: "Chris Kruss",
  initials: "CK",
  subline: "Truckee, CA",
  sublineIsCity: true,
  paragraphs: [
    "had my hot water heater go out a few days ago",
    "it had been many years since I had a plumber service to my house so I looked up the best plumbers in Truckee on google",
    "Brimer Plumbing was at the top of the list with a rating of five stars so I contacted them through google to schedule a technician to come over to give me a quote",
    "a representative from Brimer Plumbing 10 minutes later we had the technicians scheduled for the next day",
    "the following day I was contacted by one of their technicians named Zacha",
    "due to his work schedule changing he was able to come over 2 hours earlier than scheduled which really helped me with my daily plans",
    "when I met Zacha I knew I was in good hands he gave me a very fair quote and had the hot water heater installed.",
    "when I looked at my home maintenance records I noticed that Jamie Brimer was the last plumber to work on my home over a decade ago.",
    "I'm definitely giving Brimer Plumbing five stars and I'd highly recommend if you need any Plumbing work done to contact them and request Zacha as your technician!",
    "Happy customer",
    "Chris Kruss",
    "Live in Truckee full-time for over 30years!",
  ],
  avatarColor: "#7a5c3e",
};

const fajansTruckee = aboutGoogleReviews[1];
const zeiterTruckee = aboutGoogleReviews[2];

export const servicePageGoogleReviews: Record<string, PlatformReview[]> = {
  "water-heaters": [krussGoogle, googleReviews[0]],
  "tankless-water-heaters": [fajansTruckee, googleReviews[5]],
  winterization: [googleReviews[5], googleReviews[4]],
  "drain-cleaning": [googleReviews[2], zeiterTruckee],
  "leak-detection": [googleReviews[4], googleReviews[2]],
  "emergency-plumber": [zeiterTruckee, googleReviews[4]],
  "frozen-burst-pipes": [krussGoogle, googleReviews[5]],
  "gas-services": [googleReviews[0], googleReviews[2]],
  "kitchen-bath-plumbing": [zeiterTruckee, googleReviews[0]],
  "appliance-installation": [googleReviews[0], fajansTruckee],
  "smart-leak-shutoff": [fajansTruckee, googleReviews[4]],
  repiping: [krussGoogle, googleReviews[4]],
};

export const yelpReviews: PlatformReview[] = [
  {
    author: "Genny F.",
    initials: "GF",
    subline: "Truckee, CA",
    sublineIsCity: true,
    paragraphs: [
      "Brimer Plumbing was able to squeeze us in the same day to find a water leak and hopefully make repairs. Zack came out promptly (actually early) and was very courteous. He was patient and had good communication skills. We were worried about where the leak was coming from but Zack was confident he could find it and put us at ease. Indeed he found it in short order and fixed it very quickly. He also provided us with video of the before and after. I would highly recommend Zack for your plumbing needs.",
    ],
    avatarColor: "#b85c38",
  },
  {
    author: "Chris K.",
    initials: "CK",
    subline: "Truckee, CA",
    sublineIsCity: true,
    paragraphs: [
      "I had my hot water heater go out a few days ago",
      "it had been many years since I had a plumber service to my house so I looked up the best plumbers in Truckee on Yelp",
      "Brimer Plumbing was at the top of the list with a rating of five stars so I contacted them through Yelp to schedule a technician to come over to give me a quote",
      "a representative from Brimer Plumbing 10 minutes later we had the technicians scheduled for the next day",
      "the following day I was contacted by one of their technicians named Zacha",
      "due to his work schedule changing he was able to come over 2 hours earlier than scheduled which really helped me with my daily plans",
      "when I met Zacha I knew I was in good hands he gave me a very fair quote and had the hot water heater installed.",
      "when I looked at my home maintenance records I noticed that Jamie Brimer was the last plumber to work on my home over a decade ago.",
      "I'm definitely giving Brimer Plumbing five stars and I'd highly recommend if you need any Plumbing work done to contact them and request Zacha as your technician!",
      "Happy customer",
      "Chris Kruss",
      "Live in Truckee full-time for over 30years!",
    ],
    avatarColor: "#7a5c3e",
  },
  {
    author: "C T.",
    initials: "CT",
    subline: "Davis, CA",
    sublineIsCity: true,
    paragraphs: [
      "Wes at Brimer Plumbing does great work! Our 29 year-old water heater was leaking and much in need of replacement. We're delighted; a new water heater, everything improved and up to current code, especially from a dependable local Truckee business, Brimer Plumbing.",
      "* timely, efficient and meticulous work",
      "* clear communication",
      "* patient with our questions; clear answers/explanations",
      "* high value for cost investment",
      "It's worth noting that Wes went above and beyond to do an excellent job. He advised us and cleared old pipes from a former radiant under-floor heating system. Our garage utility area is clearer and much tidier than he found it. Those old pipes had nothing to do with the necessary water heater replacement, he could have just left it, but Wes's action expanded our storage space, plus improved safety (replaced the old gas valve lever/sealed for safer pipe).",
      "For any future plumbing needs, we will call Brimer Plumbing with confidence.",
    ],
    avatarColor: "#b03a2e",
  },
  {
    author: "K B.",
    initials: "KB",
    subline: "Alameda, CA",
    sublineIsCity: true,
    paragraphs: [
      "Outstanding service from Brimer Plumbing at my cabin in Truckee! Responsive, easy to communicate with, and very patient. as I sorted out my situation (including help locating the main water shut off) Wesley explained the issue & outlined repair recs in a way that was easy to understand and Jaime was always available by text & phone. Highly recommend!",
    ],
    avatarColor: "#3d5a45",
  },
  {
    author: "Stephanie Y.",
    initials: "SY",
    subline: "Berkeley, CA",
    sublineIsCity: true,
    paragraphs: [
      "A new gas fireplace was on the horizon and we needed someone to draw up the plan, get a permit and install the gas line. The store in Truckee recommended Jamie Brimer and I see why. Prompt, professional and efficient. We don't live full time in the area, but Jamie took photos of his work upon completion and it was well done.",
      "We had something come up during the process, and Jamie was on it. He also noticed something in our house and gave his recommendations for our safety. He didn't need to, but this man is thorough and obviously cares.",
      "Overall, we found our guy. I'd recommend and glad we have him and the team on deck should anything come up.",
    ],
    avatarColor: "#37474f",
  },
  {
    author: "Greg O.",
    initials: "GO",
    subline: "San Francisco, CA",
    sublineIsCity: true,
    paragraphs: [
      "I hired Jamie Brimer to do the plumbing aspects of a furnace install. Not only did Jamie do an exceptional job with the work itself, but also he was professional, courteous and completely dependable. The real value of service extends beyond that. He is extremely helpful with permitting and navigating building departments. When a subsequent project required a few questions a couple years after Jamie did his work, he was super helpful answering questions and piecing together what the scope of work was. The consummate professional and I'll hire him every time.",
    ],
    avatarColor: "#7a6a53",
  },
];
