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
  {
    question: "Why do mountain homes need a different kind of plumber?",
    answer:
      "Altitude, hard water, and seasonal vacancy change the work. Gas appliances need high-altitude configuration, water heaters wear out faster in mineral-heavy water, and a leak in an empty house runs for weeks. We have worked only in Truckee and North Lake Tahoe since 1997, so those conditions are the normal ones for us, not edge cases.",
  },
  {
    question: "What are your hours?",
    answer: `We are open 7 AM to 8 PM every day. When you call during those hours you reach a real person and get a two-hour arrival window. Emergency calls jump the schedule. ${site.afterHoursLine}`,
  },
  {
    question: "How long has Brimer Plumbing been around?",
    answer: `Since ${site.founded}. Nearly three decades working only on Truckee and North Lake Tahoe plumbing. The crew that shows up knows these houses, this water, and these winters because it is all we have ever done.`,
  },
  {
    question: "What should I do before you arrive for a scheduled visit?",
    answer:
      "Clear access to the work area, know where the main water shutoff is in case we ask, and secure pets. If it is a second home, make sure we have the gate or lockbox code ahead of time. Anything else specific to your visit, we will tell you when we confirm.",
  },
  {
    question: "Do you service vacation rentals?",
    answer:
      "Yes. We work with owners and property managers on vacation rentals across Truckee and North Lake Tahoe: winterization, spring startup, emergency response when guests are in the house, and the recurring maintenance rentals need. If your manager has a work order process, we fit into it.",
  },
  {
    question: "What is the most common plumbing problem in Truckee?",
    answer:
      "Frozen and burst pipes, by a wide margin, especially in homes that sit empty between visits. After that: water heaters wearing out early in hard mineral-heavy water, and slow drains in older homes with aging lines. All three get worse when nobody is watching the house, which is why monitoring matters here.",
  },
  {
    question: "How do I get the fastest service?",
    answer:
      "Call 530-587-0733 rather than using the form. Emergency calls like burst pipes, active leaks, and gas concerns jump the schedule, and you get a two-hour arrival window. For anything else, calling lets us ask the right questions and get the right tech lined up.",
  },
  {
    question: "Are your plumbers licensed?",
    answer:
      "Yes. Brimer Plumbing is a licensed California plumbing contractor, CSLB 1149344, fully insured, and we have worked only in Truckee and North Lake Tahoe since 1997.",
  },
  {
    question: "Do you work on condos and townhomes?",
    answer:
      "Yes. Condos and townhomes across Northstar, Tahoe Donner, Kings Beach, and Tahoe City are a big part of our work. We know the HOA coordination, the shared-wall considerations, and the shutoff locations that are different from single-family homes.",
  },
  {
    question: "Can you help with a home inspection plumbing report?",
    answer:
      "Yes. If a buyer inspection flagged plumbing issues on a Truckee or North Tahoe home, we verify each item in person and tell you what actually needs doing, what can wait, and what was overstated. You get it in plain language your agent can use.",
  },
  {
    question: "Do you service older homes with galvanized pipes?",
    answer:
      "Yes. Much of Glenshire, Tahoe City, Donner Lake, and original Tahoe Donner still has galvanized supply lines past their prime. We assess their condition honestly: sometimes a targeted repair is right, sometimes repiping the run is cheaper over five years. We will tell you which.",
  },
  {
    question: "My home has low water pressure. Is that normal here?",
    answer:
      "Not necessarily. The usual causes are a failing pressure regulator, mineral buildup in older lines, or a partially closed valve. Truckee water pressure varies by neighborhood and elevation, so we measure it at your house and diagnose the actual cause rather than guessing.",
  },
  {
    question: "Do you install water softeners?",
    answer:
      "We assess whether one makes sense for your house first. Truckee and North Tahoe water runs mineral-heavy, which shortens water heater and fixture life. If a softener is the right answer we size and install it; if an annual flush and anode program handles it, we will say that instead.",
  },
  {
    question: "What does your service process look like?",
    answer:
      "You call and describe the problem. We diagnose before recommending anything, present your options with clear pricing, protect your home while we work, and verify everything before we leave. That sequence does not change whether it is a faucet or a full repipe.",
  },
  {
    question: "Can I get an estimate over the phone?",
    answer:
      "Sometimes. For straightforward replacements we can often give you a range after a few questions and photos of the setup. Most work needs eyes on it first: we diagnose, then give you a written price before anything starts. That is true whether you call or use the form.",
  },
  {
    question: "Why choose a local Truckee plumber over an out-of-area company?",
    answer:
      "Response time and mountain knowledge. In an emergency, a company driving up from out of town is water running the whole way here. And a company that does not work here daily does not know these houses: the hard water, the freeze patterns, the 1970s builds, the altitude adjustments. We are based in Truckee and this is all we do.",
  },
  {
    question: "Do you help with insurance claims for water damage?",
    answer:
      "We document our plumbing repairs with photos and written descriptions your adjuster can use, and we put the cause and the fix in plain language. The plumbing repair is our work. Structural drying and restoration we coordinate with specialists, and we will tell you when that is what the job needs.",
  },
];
