// Per-town page content, written against each town's own recorded facts.
//
// Facts come from docs/crawl/town-facts.json (transcribed from the live pages). Nothing
// here is invented and nothing is borrowed from a neighbouring town. Each town gets its
// own brief first (docs/town-briefs.md), and the sections it needs, in the order that
// suits it. Section headings deliberately differ between towns so the 24 pages do not
// read as one template with the name swapped.
//
// Only Truckee is filled in: it is the golden page for the "town" type, awaiting Milton's
// approval before the other 23 are written (PLAN.md M0.5).

export interface TownSection {
  heading: string;
  paragraphs: string[];
  /** Optional link out to the matching service page. */
  link?: { label: string; href: string };
}

export interface TownContent {
  /** Short line under the H1, inside the first screen. */
  lede: string;
  /** Opening paragraph of the body. */
  overview: string;
  sections: TownSection[];
  /**
   * Headings for the shared blocks (emergency band, reviews, popular services, FAQs,
   * closing call). Written per town rather than templated from the town name, because a
   * heading like "Emergency plumber in {town}" would be the same frame on all 24 pages,
   * which is what PLAN.md section 3d rule 4 exists to prevent. Each town also tunes its
   * own place-name ratio here to stay near half (rule 3).
   */
  headings: {
    emergency: string;
    reviews: string;
    popular: string;
    faqs: string;
    cta: string;
  };
  faqs: Array<{ question: string; answer: string }>;
  /** Service slugs worth surfacing on this town page, most relevant first. */
  popularServices: string[];
}

export const townContent: Record<string, TownContent> = {
  truckee: {
    lede: "Historic downtown, Gateway, Meadow Park, Sierra Meadows, Prosser Heights and the neighborhoods between them.",
    overview:
      "Truckee sits at roughly 5,800 to 6,200 feet in the eastern Sierra, and its housing stock spans more than a century. The Historic District has homes dating to the late 1800s with original plumbing layouts. Gateway and Meadow Park went up in the 1940s. Sierra Meadows and Prosser Heights are modern construction. That range is the thing about plumbing here: a repair in one neighborhood is a different job from the same repair a mile away, and the house has to be read before anything is recommended.",
    // One section per topic the live Truckee page gives its own H2, in the same order
    // (PLAN.md section 3d rule 6). Nothing merged, nothing dropped. Each heading pairs the
    // service with an angle that is specific to Truckee, so no other town can reuse the
    // frame, and roughly half name the town rather than all nine.
    sections: [
      {
        heading: "Water heater repair in Truckee's older homes",
        paragraphs: [
          "Groundwater from TDPUD arrives well below 50 degrees for much of the year, so every water heater in town works through a bigger temperature rise than its rating assumes. That shows up as longer recovery, harder-working burners, and anode rods that give up early.",
          "Older neighborhoods like Gateway and Donner Trail still have original-era tanks that have been patched rather than properly assessed. We test the unit, name the actual failure, and tell you honestly whether a repair is worth doing or whether you are about to pay twice.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Water heater installation at 6,000 feet",
        paragraphs: [
          "At 5,800 feet and above, thinner air changes combustion. A gas-fired unit needs a high-altitude kit or a factory high-altitude model to burn safely and efficiently, and fitting one that was specified for sea level is how you get a short service life and a carbon monoxide problem.",
          "We size for the hot water the house actually uses, check the fuel source and the venting path before recommending anything, and file the permit through the Town of Truckee Building and Safety Division. Truckee's central neighborhoods vary enormously in age and mechanical access, which is what decides the venting route more often than the unit does.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless water heater install at altitude",
        paragraphs: [
          "Tankless suits Truckee homes that sit empty between visits, because there is no standby loss while nobody is there, and it suits houses with several bathrooms drawing at once. The catch is that cold inlet water and altitude both cut effective output below the sea-level rating on the box.",
          "We size for the fixture count and flow the house really has, confirm Southwest Gas can feed the unit, and test output at several draw points before calling it done.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair after freeze and thaw damage",
        paragraphs: [
          "Southwest Gas serves Truckee, feeding furnaces, water heaters, fireplaces, cooktops, dryers and outdoor appliances. Decades of freeze and thaw cycling loosen connections, corrode fittings and tire out flex lines, and the movement is worse here than almost anywhere at lower elevation.",
          "If you smell gas, leave the house and call Southwest Gas first on 1-877-860-6020, then call us for the repair. We locate the fault, repair or replace the affected section, and pressure-test the line before service goes back on.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "Gas line installation and Town of Truckee permits",
        paragraphs: [
          "New runs usually mean a fireplace, a range, a patio heater, a standby generator, or a conversion from propane. Each needs correct sizing, code-compliant installation, a pressure test, and coordination with Southwest Gas when meter capacity is involved.",
          "Truckee has been an incorporated town since 1993, so permits go through the Town of Truckee Building and Safety Division rather than Placer County. That trips up contractors from out of the area regularly. We file it as part of the job and coordinate with your builder or designer when the gas work sits inside a bigger remodel.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath plumbing in 1940s Gateway homes",
        paragraphs: [
          "Truckee holds some of the most varied housing stock in the region. The Historic District has homes from the late 1800s with their original layouts. Gateway and Meadow Park went up in the 1940s. Sierra Meadows and Prosser Heights are modern construction. A fixture swap in one of those is a different job from the same swap in another.",
          "We work with homeowners, designers and general contractors on everything from a faucet replacement to full rough-in during a remodel. In older homes we check the condition of galvanized supply lines before they become the reason your new fixtures underperform, and we will say when repiping a run is the cheaper answer over five years.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Leak detection for homes left empty in winter",
        paragraphs: [
          "Truckee's mix of full-time residents and seasonal owners means plenty of plumbing goes unwatched for weeks. A supply line that lets go in an empty house does not stop until somebody walks in, which is how a small failure becomes a floor replacement.",
          "A monitor on the main line watches flow, pressure and temperature continuously, shuts the water off on its own when something is wrong, and tells your phone it did. For an owner who is away between visits, or a caretaker covering several properties, it is the most useful thing we install.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen and burst pipe repair in Truckee winters",
        paragraphs: [
          "Hard freezes are routine here, not exceptional. The vulnerable points are consistent: exposed runs under raised foundations, exterior hose bibs, and supply lines in uninsulated crawl spaces. Houses closed up for winter without a proper shutdown are the highest risk, but occupied homes split pipes too during long cold snaps well below zero.",
          "If a pipe has already gone, shut the main and call. We locate the failure, thaw only where it is safe, and repair or replace the damaged section. For a house that freezes in the same spot every winter, heat trace on that run is what stops the annual repeat.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Drain and sewer repairs on the TSD system",
        paragraphs: [
          "Running toilets, dripping faucets, failing shutoff valves and slow drains are the everyday work, and in Truckee they turn up in systems ranging from turn-of-the-century plumbing in the Historic District to modern PEX in newer builds along Prosser Heights and Sierra Meadows.",
          "Sewer collection is handled by Truckee Sanitary District, with regional treatment by the Tahoe-Truckee Sanitation Agency. When a drain problem turns out to sit at the lateral connection to the TSD main rather than inside the house, we work out where the boundary falls and help you coordinate the next step instead of digging first.",
        ],
      },
    ],
    headings: {
      emergency: "Burst pipe, gas smell or no water tonight",
      reviews: "What Truckee homeowners say",
      popular: "Jobs we do most in Truckee neighborhoods",
      faqs: "Questions we get about altitude and permits",
      cta: "Get a Truckee plumber on the phone",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Truckee?",
        answer:
          "Water and electric service in Truckee is provided by Truckee Donner Public Utility District (TDPUD), which sources 100% groundwater from the Martis Valley basin. Sewer collection is handled by Truckee Sanitary District (TSD), with regional wastewater treatment managed by the Tahoe-Truckee Sanitation Agency (TTSA). Natural gas is provided by Southwest Gas.",
      },
      {
        question: "Do I need a high-altitude water heater in Truckee?",
        answer:
          "Yes. Downtown Truckee sits at roughly 5,800 to 6,000 feet, with surrounding neighborhoods higher again. At that altitude reduced oxygen affects combustion in gas-fired water heaters. A unit installed without high-altitude adjustment runs less efficiently, produces more carbon monoxide, and wears out sooner. Most manufacturers offer a factory high-altitude model or a conversion kit. The cold groundwater from TDPUD adds further load on burners and elements.",
      },
      {
        question: "Do I need a permit for plumbing work in Truckee?",
        answer:
          "Truckee has been an incorporated town since 1993, so plumbing permits are issued by the Town of Truckee Building and Safety Division rather than Placer County. Most replacements and new installations need one. We handle the filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Truckee?",
        answer:
          "Turn off the main water supply first, so that if a pipe has already cracked it does not flood when the ice releases. Do not use an open flame or a heat gun. Gentle heat from a hair dryer, or towels soaked in warm water, is safe. If you cannot find the frozen section, or a pipe has already burst, call 530-587-0733. For a house with recurring freeze problems, heat trace on the vulnerable runs is the reliable long-term fix.",
      },
      {
        question: "How do I protect my Truckee home when I am away?",
        answer:
          "Proper winterization plus smart leak detection. A monitor on the supply line watches continuously and can shut the water off if it sees a leak or abnormal flow. For long winter vacancies, keeping minimum heat on, insulating vulnerable runs and adding heat trace to exposed lines cuts the freeze risk considerably. We can walk the house and tell you which of those it actually needs.",
      },
      {
        question: "What does winterizing a Truckee home involve?",
        answer:
          "Draining the lines and fixtures, protecting the traps, shutting down the water heater, and dealing with exterior hose bibs, then documenting it so it can be reversed properly in spring. What it costs depends on the size of the home, the number of fixtures and how complex the system is, so we look at the house and give you a clear price before any work starts.",
      },
    ],
    popularServices: ["water-heaters", "frozen-burst-pipes", "gas-services", "smart-leak-shutoff"],
  },
};

export function getTownContent(slug: string): TownContent | undefined {
  return townContent[slug];
}
