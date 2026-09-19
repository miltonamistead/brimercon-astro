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
  faqs: Array<{ question: string; answer: string }>;
  /** Service slugs worth surfacing on this town page, most relevant first. */
  popularServices: string[];
}

export const townContent: Record<string, TownContent> = {
  truckee: {
    lede: "Historic downtown, Gateway, Meadow Park, Sierra Meadows, Prosser Heights and the neighborhoods between them.",
    overview:
      "Truckee sits at roughly 5,800 to 6,200 feet in the eastern Sierra, and its housing stock spans more than a century. The Historic District has homes dating to the late 1800s with original plumbing layouts. Gateway and Meadow Park went up in the 1940s. Sierra Meadows and Prosser Heights are modern construction. That range is the thing about plumbing here: a repair in one neighborhood is a different job from the same repair a mile away, and the house has to be read before anything is recommended.",
    sections: [
      {
        heading: "Water heaters at 6,000 feet",
        paragraphs: [
          "Truckee is the service we get called about most, and altitude is why. Groundwater from TDPUD arrives well below 50 degrees for much of the year, so every unit works through a bigger temperature rise than its rating assumes. Thinner air changes combustion on gas-fired units, which is why a replacement here needs a high-altitude kit or a factory high-altitude model rather than whatever is on the shelf.",
          "Older neighborhoods like Gateway and Donner Trail still have original-era tanks that have been patched rather than properly assessed. We test the unit, name the actual failure, and tell you honestly whether a repair is worth doing or whether you are about to pay twice.",
        ],
        link: { label: "More on water heater repair and installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Everyday repairs across a century of housing",
        paragraphs: [
          "Running toilets, dripping faucets, failing shutoff valves and slow drains are the bread and butter, and in Truckee they turn up in systems from turn-of-the-century galvanized supply in the Historic District through to modern PEX in newer builds. Older galvanized lines are worth assessing properly rather than chasing one leak at a time; we will tell you when repiping a run is the cheaper answer over five years.",
          "Sewer collection is handled by Truckee Sanitary District, with regional treatment by the Tahoe-Truckee Sanitation Agency. When a drain problem turns out to sit at the lateral connection to the TSD main rather than inside the house, we identify where the boundary falls and help you coordinate the next step instead of digging first.",
        ],
      },
      {
        heading: "Freeze season and homes that sit empty",
        paragraphs: [
          "Hard freezes are routine here, not exceptional. The vulnerable points are consistent: exposed runs under raised foundations, exterior hose bibs, and supply lines in uninsulated crawl spaces. Houses closed up for winter without a proper shutdown are the highest risk, but occupied homes split pipes too during long cold snaps.",
          "If a pipe has already gone, shut the main and call. We locate the failure, thaw only where it is safe, and repair the damaged section. For a house that freezes in the same spot every winter, heat trace on that run is the fix that stops the annual repeat.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Gas work and the permit path",
        paragraphs: [
          "Southwest Gas serves Truckee, feeding furnaces, water heaters, fireplaces, cooktops and dryers. Decades of freeze and thaw loosen connections and tire out flex lines. If you smell gas, leave the house and call Southwest Gas first on 1-877-860-6020, then call us for the repair.",
          "New runs for a fireplace, a range, a patio heater or a fuel conversion need correct sizing, code-compliant installation and a pressure test before anything is signed off. Truckee has been an incorporated town since 1993, so permits go through the Town of Truckee Building and Safety Division, not Placer County. We file them as part of the job.",
        ],
        link: { label: "More on gas line work", href: "/services/gas-services/" },
      },
      {
        heading: "Watching a house you are not in",
        paragraphs: [
          "Plenty of Truckee homes sit unwatched for weeks at a time. A supply line that lets go in an empty house does not stop until somebody walks in, which is how a small failure turns into a floor replacement.",
          "A monitor on the main line watches flow, pressure and temperature, and can shut the water off on its own and tell your phone it did. For owners who are away between visits, or a caretaker covering several properties, it is the most useful thing we install.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
    ],
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
