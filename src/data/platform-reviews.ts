// Platform review sets for the Reviews page, in the live testimonial card format.
//
// Google set: read 2026-10-22 from the Brimer Plumbing Google Maps listing.
// The listing's displayed order is used: Maps would not apply a newest-first
// sort without signing in, so this is the current five-star set in displayed
// order, not a verified newest-first sort across all 36 reviews. Maps does not
// publish reviewer cities, so Google cards carry the posted relative date
// under the name instead of a city.
//
// Yelp set: verbatim from screenshots Milton supplied 2026-10-22, newest
// first by the dates Yelp shows. Cities per Milton 2026-10-22: Genny F. and
// Chris K. are Truckee; the other three use the locations on the existing
// live Reviews page testimonial cards.
//
// Review text is quoted verbatim and must not be edited, trimmed, or cleaned
// up. Paragraph breaks follow the published line breaks.

export interface PlatformReview {
  author: string;
  initials: string;
  /** City line on Yelp cards, posted date on Google cards. */
  subline: string;
  sublineIsCity: boolean;
  paragraphs: string[];
  avatarColor: string;
}

export const googleReviews: PlatformReview[] = [
  {
    author: "Chris Kruss",
    initials: "CK",
    subline: "a month ago",
    sublineIsCity: false,
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
    avatarColor: "#b85c38",
  },
  {
    author: "Lynette Zeiter",
    initials: "LZ",
    subline: "2 months ago",
    sublineIsCity: false,
    paragraphs: [
      "Zach was very professional and cordial, he saved the day! We had our water turned off to replace our shower valve and needed an emergency plumber. He came at 7 pm and had us up and running in less than an hour. We high recommend Zach and will call him again with any of our plumbing needs",
    ],
    avatarColor: "#7a5c3e",
  },
  {
    author: "Tanner Egan",
    initials: "TE",
    subline: "a month ago",
    sublineIsCity: false,
    paragraphs: [
      "Zach absolutely crushed it. Great customer service and super knowledgeable. So stoked guys like Zach are in the plumbing industry.",
    ],
    avatarColor: "#b03a2e",
  },
  {
    author: "Sheila Scrivner",
    initials: "SS",
    subline: "2 months ago",
    sublineIsCity: false,
    paragraphs: [
      "The response time was amazingly fast. Called them at 345 and they were at the house at our appointment time of 5. Both gentlemen were kind and helpful. They immediately went to work, diagnosed the problem, went to get parts and fixed it that evening. I was beyond grateful and highly recommended them. If in need again wouldn't hesitate to call Brimer",
    ],
    avatarColor: "#3d5a45",
  },
  {
    author: "Steve Thompson",
    initials: "ST",
    subline: "2 months ago",
    sublineIsCity: false,
    paragraphs: [
      "Brimer plumbing is great! Great service, easy to work with. Wes was communicative through the whole project working outside in the snow. Would highly recommend!",
    ],
    avatarColor: "#37474f",
  },
];

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
];
