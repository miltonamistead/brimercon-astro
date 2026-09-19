export type Service = {
  slug: string;
  name: string;
  shortName: string;
  title: string;
  description: string;
  h1: string;
  summary: string;
  bullets: string[];
  body: string[];
  /**
   * One entry per topic the live page gives its own H2 (PLAN.md section 3d rule 6).
   * Headings follow the H2 rules: service or query wording, sentence case, under 60
   * characters, no colon split, no em dash, and roughly half carrying a place name.
   */
  sections: { heading: string; copy: string }[];
  /** Live gives "Common issues we resolve" its own H2, so it stays its own section. */
  commonIssues?: { heading: string; copy: string }[];
  process?: { step: string; copy: string }[];
  whyUs?: { heading: string; copy: string }[];
  faqs: { question: string; answer: string }[];
  related: string[];
};

export const services: Service[] = [
  {
    slug: "water-heaters",
    name: "Water Heaters",
    shortName: "Water heaters",
    title: "Water Heater Repair, Replacement & Installation | Truckee & Tahoe | Brimer Plumbing",
    description:
      "Water heater repair, replacement, and installation in Truckee and North Lake Tahoe. Tank and tankless service sized for altitude and cold inlet water. Call 530-587-0733.",
    h1: "Water heater repair and installation in Truckee and North Lake Tahoe",
    summary:
      "Tank and tankless repair, replacement, and annual maintenance sized for mountain-home altitude and cold inlet water.",
    bullets: [
      "Repair and replacement for tank and tankless units",
      "High-altitude configuration for Truckee elevations",
      "Annual flush, anode, and safety-valve service",
      "Diagnosis before any recommendation",
    ],
    body: [
      "Water heaters in Truckee and around North Lake Tahoe work harder than the same equipment at sea level. Groundwater arrives cold for much of the year, elevation changes combustion on gas units, and seasonal vacancy lets sediment settle in tanks that sit unused for weeks. Repair, replacement, and tankless conversions all start from those conditions.",
      "We diagnose first. A leaking tank, a failed thermocouple, a tankless error code, or a unit that never recovered after a long vacancy each has a different next step. You get options before work starts. We protect floors and closets, then verify hot water at the fixtures before we leave.",
      "Permits, when required, run through the Town of Truckee or the applicable California county building department. You get a clear recommendation and a price after we see the unit and the home.",
    ],
    sections: [
      {
        heading: "Tank water heater repair in Truckee",
        copy: "Tanks are still the most common choice in mountain homes, and they take the most abuse here. No hot water, lukewarm output, a popping or rumbling tank, and pilot or ignition failures are the usual winter calls. Hard water shortens anode life and sediment insulates the burner from the water it is meant to heat. We test the unit, name the actual failure, and tell you whether a repair is honest or whether you are about to pay twice. A replacement needs altitude-ready combustion or the right electric configuration, venting that suits the house, and sizing for real fixture demand rather than a catalog default.",
      },
      {
        heading: "Tankless water heaters at Tahoe altitude",
        copy: "Tankless suits seasonal homes and houses with high simultaneous demand, because there is no standby loss while nobody is there. But cold inlet water and thinner air both change the sizing math, and a unit specified for sea level will disappoint at 6,000 feet. We size for the fixture count the house actually has, confirm the gas supply can feed it, descale when water quality calls for it, and will tell you plainly when a tank is the better answer.",
      },
      {
        heading: "Annual water heater maintenance and flushing",
        copy: "A yearly visit covering a sediment flush, an anode check, a temperature and pressure valve test, and a look at venting and shutoff valves is the cheapest way to catch a tank before it soaks a closet. It matters most in houses that sit empty between visits, where a slow failure has weeks to become a floor replacement.",
      },
    ],
    commonIssues: [
      {
        heading: "No hot water or temperature that keeps changing",
        copy: "Thermostat failures, sediment buildup, or burner problems, and often a unit that has just come back from weeks of sitting unused.",
      },
      {
        heading: "Tank leaks and corrosion",
        copy: "Mineral-rich mountain water wears the anode rod and then the tank. Catching it early is the difference between a swap and a water-damage claim.",
      },
      {
        heading: "Pilot light and ignition failures",
        copy: "High-altitude combustion and seasonal shutdowns are hard on ignition components. We diagnose rather than guess at parts.",
      },
      {
        heading: "Sediment buildup and rising bills",
        copy: "Hard water deposits sit between the burner and the water, so the unit runs longer for less hot water. An annual flush prevents most of it.",
      },
      {
        heading: "Tankless error codes and flow problems",
        copy: "Tankless units are sensitive to water quality and flow rate. We read the code, find the cause, and restore consistent output.",
      },
    ],
    process: [
      { step: "We diagnose", copy: "We inspect the unit, test components, and find the root cause before recommending anything." },
      { step: "You choose", copy: "You get a clear repair or replace recommendation with the price, and no pressure either way." },
      { step: "We work clean", copy: "We protect floors and finishes, work efficiently, and keep you posted while we do it." },
      { step: "We verify", copy: "We confirm proper operation, check for leaks, and leave the area as we found it." },
    ],
    whyUs: [
      { heading: "Clean work", copy: "We protect floors, cabinetry, and finishes while we work, and leave the area tidy." },
      { heading: "Clear options", copy: "You understand the problem, the choices, and the cost before anything starts." },
      { heading: "Mountain-home experience", copy: "Altitude, seasonal use, and hard water are the normal conditions here, not edge cases." },
      { heading: "Since 1997", copy: "Nearly three decades working on Truckee and North Lake Tahoe plumbing." },
    ],
    faqs: [
      {
        question: "How long do water heaters last in mountain homes?",
        answer:
          "Tank units often last 8 to 12 years here; hard water and altitude can shorten that. Tankless units often last 15 to 20 years with regular descaling. Annual inspections catch failures early.",
      },
      {
        question: "Should I switch from a tank to a tankless water heater?",
        answer:
          "It depends on usage, home size, fuel, venting, and whether the house sits empty. We give honest pros and cons for your house rather than a one-size pitch.",
      },
      {
        question: "Do you service all water heater brands?",
        answer:
          "Yes. We service and install major tank and tankless brands commonly found in Truckee and North Lake Tahoe homes.",
      },
    ],
    related: ["gas-services", "frozen-burst-pipes", "smart-leak-shutoff"],
  },
  {
    slug: "frozen-burst-pipes",
    name: "Frozen & Burst Pipes",
    shortName: "Frozen pipes",
    title: "Frozen & Burst Pipe Repair | Emergency Service | Truckee & Tahoe | Brimer Plumbing",
    description:
      "Emergency frozen and burst pipe repair in Truckee and North Lake Tahoe. Safe thawing, burst repairs, winterization, and freeze prevention. Call 530-587-0733.",
    h1: "Frozen and burst pipe repair in Truckee and North Lake Tahoe",
    summary:
      "Emergency response, controlled thawing, burst repair, and winterization for mountain homes in Truckee and North Lake Tahoe.",
    bullets: [
      "Burst lines and active leaks stopped and repaired",
      "Controlled thawing, never an open flame",
      "Repair or replace the failed section cleanly",
      "Winterization and freeze-prevention follow-up",
    ],
    body: [
      "Freeze events are a normal winter risk at this elevation: crawl-space runs, hose bibs, and vacant houses that were not shut down. If a pipe is frozen or already open, call 530-587-0733. Shut the main if you can do it safely. Do not use a torch.",
      "We locate the failure, thaw only when it is safe, stop the water, and repair the damaged section. After the emergency we can talk insulation, heat-trace on exposed runs, and whether a smart shutoff belongs on the main.",
      "Burst pipes, active leaks, and no water all come to the same number, whether the house is in Truckee, Donner Lake, Tahoe City, Kings Beach, or Olympic Valley: 530-587-0733. If you smell gas, leave the house and call the gas utility first, then call us.",
    ],
    sections: [
      {
        heading: "If you think a pipe is frozen",
        copy: "Turn off the main if you can reach it. Open a faucet on the affected line so pressure can relieve when ice lets go. Use only gentle heat. Call us if you cannot find the frozen section or if water is already in a ceiling or wall.",
      },
      {
        heading: "Winterization",
        copy: "Seasonal homes need a real shutdown: drain lines, protect traps, handle the water heater, and confirm exterior hose bibs. We document the work so a caretaker or property manager can reverse it in spring.",
      },
      {
        heading: "Prevention",
        copy: "Heat-trace, insulation, and a monitored shutoff are the usual long-term fixes for houses that freeze in the same place every year. We recommend what the house actually needs.",
      },
    ],
    faqs: [
      {
        question: "What should I do if a pipe freezes?",
        answer:
          "Shut the main if you can. Do not use open flame. Call 530-587-0733. We use controlled methods and repair anything that has already split.",
      },
      {
        question: "Do you offer emergency plumbing service?",
        answer:
          "Yes. Burst pipes, active leaks, and gas concerns are what the phone is for. Call 530-587-0733 any time. If we miss you, leave a message.",
      },
    ],
    related: ["smart-leak-shutoff", "water-heaters", "gas-services"],
  },
  {
    slug: "gas-services",
    name: "Gas Services",
    shortName: "Gas",
    title: "Gas Line Installation, Leak Detection & Safety | Truckee & Tahoe | Brimer Plumbing",
    description:
      "Professional gas line installation, appliance hookups, leak detection, and safety inspections in Truckee and North Lake Tahoe. Licensed California plumbers. Call 530-587-0733.",
    h1: "Gas line installation, leak detection, and safety",
    summary:
      "Gas lines, appliance hookups, leak checks, and permit-aware work for Truckee and North Lake Tahoe homes.",
    bullets: [
      "Leak detection and pressure testing",
      "New runs for ranges, fireplaces, and dryers",
      "Appliance hookups and conversions",
      "Coordination with the gas utility when needed",
    ],
    body: [
      "Gas work in Truckee and North Lake Tahoe is permit and utility work, not a casual hookup. We size the run, install to code, pressure-test, and coordinate with Southwest Gas or the propane provider when a meter or tank change is part of the job.",
      "If you smell sulfur or rotten egg, leave the house and call the gas utility first, then us. We locate and repair leaks. We do not treat a gas smell as a wait-until-Monday item.",
    ],
    sections: [
      {
        heading: "New lines and appliance hookups",
        copy: "Fireplaces, ranges, dryers, water heaters, and outdoor kitchens each need a correctly sized, tested line. We handle the plumbing side and walk you through inspections.",
      },
      {
        heading: "Leak detection and safety checks",
        copy: "Pre-winter checks catch loose fittings and tired flex connectors after a season of freeze-thaw. We test, repair, and document.",
      },
    ],
    faqs: [
      {
        question: "Do you handle gas line work?",
        answer:
          "Yes. Installation, repair, and inspection for indoor and outdoor appliances, with pressure testing before we close the job.",
      },
      {
        question: "How do I know if I have a gas leak?",
        answer:
          "Rotten-egg odor, hissing, or dead vegetation near an outdoor line are common signs. Leave the area and call the utility. Then call 530-587-0733.",
      },
    ],
    related: ["water-heaters", "appliance-installation", "frozen-burst-pipes"],
  },
  {
    slug: "kitchen-bath-plumbing",
    name: "Kitchen & Bath Plumbing",
    shortName: "Kitchen & bath",
    title: "Kitchen & Bathroom Plumbing Services | Truckee & Tahoe | Brimer Plumbing",
    description:
      "Kitchen and bathroom plumbing in Truckee and North Lake Tahoe. Faucets, toilets, showers, disposals, remodel rough-in, and pressure issues. Call 530-587-0733.",
    h1: "Kitchen and bathroom plumbing",
    summary:
      "Fixtures, drains, remodel rough-in, and pressure correction, with finishes protected while we work.",
    bullets: [
      "Faucets, toilets, showers, and disposals",
      "Drain clearing and fixture resets",
      "Remodel rough-in with your contractor",
      "Pressure and supply issues in older homes",
    ],
    body: [
      "Older Tahoe and Truckee houses mix original layouts with later additions. Kitchen and bath work here is often as much about access and protection as it is about the fixture. We install what you bought, or we help you pick something that will survive hard water and seasonal vacancy.",
      "Remodel rough-in is scheduled with your contractor. We relocate supply and drain lines when the plan requires it, test every connection, and leave the room ready for finishes.",
    ],
    sections: [
      {
        heading: "Repairs and replacements",
        copy: "Running toilets, tired cartridges, slow baths, and disposal backups are everyday calls. We diagnose, present options, and protect counters and floors.",
      },
      {
        heading: "Remodels",
        copy: "Rough-in, fixture setting, and punch-list coordination. We do not take over the general-contractor role; we make the plumbing side clean and inspectable.",
      },
    ],
    faqs: [
      {
        question: "Do you install fixtures I already purchased?",
        answer:
          "Yes. We install owner-supplied faucets, toilets, and trim. We will flag compatibility problems before we open the box if you send photos first.",
      },
      {
        question: "Can you plumb a kitchen or bath remodel?",
        answer:
          "Yes. Rough-in, relocations, and finish connections, coordinated with your builder’s schedule.",
      },
    ],
    related: ["appliance-installation", "water-heaters", "smart-leak-shutoff"],
  },
  {
    slug: "appliance-installation",
    name: "Appliance Installation",
    shortName: "Appliances",
    title: "Plumbing Appliance Installation | Dishwashers, Fridges & More | Truckee & Tahoe | Brimer Plumbing",
    description:
      "Appliance installation in Truckee and North Lake Tahoe. Dishwashers, refrigerator water lines, washing machines, and ice makers. Call 530-587-0733.",
    h1: "Plumbing appliance installation",
    summary: "Dishwashers, fridge lines, washers, and ice makers, hooked up cleanly and tested for leaks.",
    bullets: [
      "Dishwasher supply and drain",
      "Refrigerator and ice-maker lines",
      "Washer box and drain work",
      "Leak check after every hookup",
    ],
    body: [
      "A new appliance is only as good as the valves and lines behind it. We replace tired stops, use the right supply lines, and test before we leave. That matters most in vacant second homes where a slow drip sits unnoticed.",
      "If a gas range or dryer is part of the same visit, see gas services. We will not leave a connection untested.",
    ],
    sections: [
      {
        heading: "What we connect",
        copy: "Dishwashers, refrigerator water and ice lines, clothes washers, and similar plumbing-side appliances. Electrical disconnects stay with your electrician when the code split requires it.",
      },
    ],
    faqs: [
      {
        question: "Can you hook up a dishwasher I already bought?",
        answer: "Yes. We handle supply, drain, and leak testing, and we will tell you if the opening or valve needs work first.",
      },
    ],
    related: ["kitchen-bath-plumbing", "gas-services", "smart-leak-shutoff"],
  },
  {
    slug: "smart-leak-shutoff",
    name: "Smart Leak Shutoff",
    shortName: "Smart shutoff",
    title: "Smart Leak Detection & Auto Shutoff | Moen Flo | Truckee & Tahoe | Brimer Plumbing",
    description:
      "Protect your Tahoe or Truckee home with smart leak detection and automatic water shutoff. Moen Flo installation and monitoring. Call 530-587-0733.",
    h1: "Smart leak detection and automatic shutoff",
    summary:
      "Whole-home monitors that watch flow, pressure, and freeze risk, and can shut the water off when you are away.",
    bullets: [
      "Moen Flo and similar whole-home monitors",
      "Automatic shutoff on leak or freeze risk",
      "App alerts for owners and caretakers",
      "A strong fit for seasonal houses",
    ],
    body: [
      "A vacant mountain home can leak for days before anyone walks in. A monitor on the main line watches flow and temperature and can close the valve. That is why second-home owners and property managers ask for this work.",
      "We install on the main, confirm app access, and walk you through away-mode. It is not a substitute for winterization when a house will sit through a deep freeze with the heat down, but it is the best remote backstop we put on a mountain house.",
    ],
    sections: [
      {
        heading: "Who it is for",
        copy: "Seasonal owners, caretakers, and anyone who has already had a supply-line failure. Insurers sometimes recognize monitored shutoffs; ask your carrier, because we do not quote those programs.",
      },
    ],
    faqs: [
      {
        question: "What is a smart leak shutoff system?",
        answer:
          "A device on the main water line that monitors flow, pressure, and temperature. If it sees a leak, odd usage, or freeze risk, it can shut the water and alert your phone.",
      },
      {
        question: "Is it worth it for a seasonal home?",
        answer:
          "That is where it earns its keep. A leak in an empty house is the expensive kind. Pair it with heat and winterization when you will be gone through winter.",
      },
    ],
    related: ["frozen-burst-pipes", "water-heaters", "kitchen-bath-plumbing"],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((item) => item.slug === slug);
}

export function servicePath(slug: string): string {
  return `/services/${slug}/`;
}
