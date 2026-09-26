// Site-wide FAQ set, from the live /faqs/ page (docs/crawl/pages/faqs.txt).
//
// Two answers are changed from live, both because a hard rule overrides the copy:
//   - the areas answer dropped "We are not licensed in Nevada" and names towns instead
//   - the emergency answer dropped "for the fastest response" and "often respond
//     same-day", and uses the approved after-hours line
// Live's "Do you serve the Nevada side of Lake Tahoe?" question is not carried over.

import { site } from "./site";

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "What areas do you serve?",
    answer:
      "Truckee and North Lake Tahoe, including Truckee, Tahoe City, Kings Beach, Tahoe Vista, Carnelian Bay, Homewood, Tahoma, Olympic Valley, Alpine Meadows, Dollar Point, Donner Lake, Tahoe Donner, Glenshire, Donner Summit, Soda Springs, Norden and Agate Bay, plus the surrounding communities.",
  },
  {
    question: "Do you offer emergency plumbing service?",
    answer: `Yes. For urgent problems like burst pipes, active leaks or gas concerns, call ${site.phoneDisplay}. ${site.afterHoursLine}`,
  },
  {
    question: "How do I winterize my mountain home's plumbing?",
    answer:
      "Winterization means draining the water lines and fixtures, adding antifreeze to the traps, shutting down the water heater and setting up monitoring. We do it professionally and can also install a smart water monitor for year-round protection.",
  },
  {
    question: "What should I do if a pipe freezes?",
    answer: `Do not try to thaw it with an open flame or excessive heat. Turn off the water supply as a precaution and call ${site.phoneDisplay}. We use controlled methods to restore flow safely and to stop the pipe bursting in the process.`,
  },
  {
    question: "Do you work with property managers?",
    answer:
      "Regularly. We coordinate with property managers on seasonal homes for winterization, spring startup, emergency response and ongoing maintenance, and we work with whatever scheduling and access arrangements you already use.",
  },
  {
    question: "How long does a water heater last in a mountain home?",
    answer:
      "Tank units usually last 8 to 12 years here, though hard water and altitude can shorten that. Tankless units often last 15 to 20 years with proper maintenance. An annual inspection catches problems early and extends the life of either.",
  },
  {
    question: "Should I switch from a tank to a tankless water heater?",
    answer:
      "It depends on how you use the house, its size, and whether it sits empty between visits. Tankless gives continuous hot water and easier winterization but costs more up front. We will give you honest pros and cons for your house.",
  },
  {
    question: "What is a smart leak shutoff system?",
    answer:
      "A device like Moen Flo that installs on your main water line and monitors flow, pressure and temperature continuously. If it detects a leak, unusual usage or freeze risk, it can shut the water off automatically and alert you through an app.",
  },
  {
    question: "Is a smart water monitor worth it for a seasonal home?",
    answer:
      "Seasonal homes are where these systems earn their keep. A leak or freeze event in an empty house can cause tens of thousands of dollars of damage. Continuous monitoring covers the house whether anyone is there or not.",
  },
  {
    question: "Do you handle gas line work?",
    answer:
      "Yes. We install, repair and inspect gas lines for ranges, fireplaces, outdoor grills, water heaters and dryers. All gas work includes pressure testing and leak verification before it is signed off.",
  },
  {
    question: "How do I know if I have a gas leak?",
    answer:
      "A sulfur or rotten-egg smell, hissing near a gas line, dead vegetation near an outdoor line, or a gas bill higher than it should be. If you suspect a leak, leave the area and call your gas utility, then call us.",
  },
  {
    question: "Do you install fixtures I bought myself?",
    answer:
      "Yes. If you have chosen your own faucets, toilets or fixtures we will install them properly, and we are happy to advise on compatibility or quality before you buy.",
  },
  {
    question: "Can you help with plumbing for a kitchen or bathroom remodel?",
    answer:
      "Yes. We handle rough-in for remodels, including relocating supply and drain lines, setting new fixtures, and coordinating with your contractor on timing and access.",
  },
  {
    question: "What does your service process look like?",
    answer:
      "We diagnose carefully, present clear options with pricing before work begins, protect your home's finishes while we work, and verify everything is working properly before we leave.",
  },
  {
    question: "Are you licensed and insured?",
    answer: `Yes. We are licensed plumbing contractors in California, fully insured, and have been serving Truckee and North Lake Tahoe since ${site.founded}. ${site.cslbLine}.`,
  },
  {
    question: "How quickly can you respond to a service request?",
    answer: `For non-urgent requests we typically get back to you within one business day. For a burst pipe, an active leak or a gas concern, call ${site.phoneDisplay} rather than using the form. ${site.afterHoursLine}`,
  },
  {
    question: "Do you offer annual maintenance plans?",
    answer:
      "We offer annual water heater maintenance and can schedule seasonal plumbing checkups. Regular maintenance extends equipment life and is especially valuable for homes that sit unused between seasons.",
  },
  {
    question: "What causes low water pressure in mountain homes?",
    answer:
      "Usually a partially closed valve, mineral buildup in the supply lines, undersized piping, or a failing pressure regulator. We diagnose the specific cause rather than guessing, then recommend the right fix.",
  },
];
