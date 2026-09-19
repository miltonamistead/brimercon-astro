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
  /**
   * Headings for the shared blocks. Written per service rather than templated from the
   * service name, for the same reason town headings are written per town: interpolating
   * a name into one string puts the identical frame on every page. Each service also
   * tunes its own place-name ratio here to stay near half (PLAN.md section 3d rule 3).
   */
  headings: {
    commonIssues: string;
    process: string;
    whyUs: string;
    emergency: string;
    reviews: string;
    towns: string;
    faqs: string;
    related: string;
  };
  faqs: { question: string; answer: string }[];
  related: string[];
};

/** The four reasons live gives on every service page. Same block, same words. */
const WHY_BRIMER = [
  { heading: "Clean work", copy: "We protect floors, cabinetry, and finishes while we work, and leave the area tidy." },
  { heading: "Clear options", copy: "You understand the problem, the choices, and the cost before anything starts." },
  { heading: "Mountain-home experience", copy: "Altitude, seasonal use, and hard water are the normal conditions here, not edge cases." },
  { heading: "Since 1997", copy: "Nearly three decades working on Truckee and North Lake Tahoe plumbing." },
];

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
    whyUs: WHY_BRIMER,
    headings: {
      commonIssues: "Common water heater problems we fix",
      process: "What happens when we arrive",
      whyUs: "Why Truckee homeowners call Brimer",
      emergency: "Get hot water back on in Truckee",
      reviews: "What homeowners say about water heater work",
      towns: "Towns we cover around Lake Tahoe",
      faqs: "Water heater questions we get asked",
      related: "Related plumbing services",
    },
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
        heading: "Emergency burst pipe repair in Truckee",
        copy: "When a line lets go, the first job is stopping the water. Shut the main if you can reach it safely and call 530-587-0733. On site we contain the leak, work out how far the water travelled, and repair or replace the failed section properly rather than patching it to get through the week.",
      },
      {
        heading: "Safe pipe thawing without open flame",
        copy: "No water at a faucet during a cold snap usually means ice in the line. Do not reach for a torch or a heat gun: rapid heat is what turns a frozen pipe into a split one, and it starts fires in wall cavities. We use controlled heat, work out where the blockage actually sits, and watch for the split that may already be there.",
      },
      {
        heading: "Winterizing a Truckee home for the season",
        copy: "A real shutdown means draining the lines and fixtures, protecting the traps, dealing with the water heater, and clearing the exterior hose bibs. We document what we did so a caretaker, a property manager, or we ourselves can reverse it correctly in spring rather than guessing at what was closed.",
      },
      {
        heading: "Freeze prevention with insulation and heat trace",
        copy: "Houses tend to freeze in the same place every year. Once we know where, heat trace on that run, better insulation, and sometimes a change to crawl-space ventilation stop the annual repeat. A monitored shutoff on the main is the backstop for a house nobody is watching.",
      },
    ],
    commonIssues: [
      {
        heading: "A pipe that burst while the house was empty",
        copy: "Water runs until somebody walks in. Fast shutoff and repair is the difference between a plumbing bill and a floor replacement.",
      },
      {
        heading: "A frozen pipe that has not split yet",
        copy: "No flow at the tap in freezing weather. Controlled thawing gets the water back without turning it into a burst.",
      },
      {
        heading: "Damage left behind after the repair",
        copy: "Finishes, insulation and framing need assessing once the pipe is fixed. We coordinate with restoration people when that is what it needs.",
      },
      {
        heading: "Pipes in crawl spaces and exterior walls",
        copy: "The usual casualties. Insulation and heat trace on the exposed runs are what stop it happening again.",
      },
      {
        heading: "A seasonal home with no winterization plan",
        copy: "Draining the system, protecting fixtures, and adding monitoring before you leave is far cheaper than the alternative.",
      },
    ],
    process: [
      { step: "Call us", copy: "We talk you through shutting off the water while we are on the way." },
      { step: "We contain", copy: "We stop the active leak, find how far the water went, and make the situation safe." },
      { step: "We repair", copy: "The damaged section is repaired or replaced with the right materials, not a temporary fix." },
      { step: "We prevent", copy: "We recommend insulation, heat trace, or a monitored shutoff so the same run does not go again." },
    ],
    whyUs: WHY_BRIMER,
    headings: {
      commonIssues: "Common freeze problems in mountain homes",
      process: "What we do when a pipe bursts",
      whyUs: "Why Truckee homeowners call Brimer",
      emergency: "Burst pipe or no water right now",
      reviews: "What homeowners say about our work",
      towns: "Towns we cover around Lake Tahoe",
      faqs: "Frozen pipe questions we get asked",
      related: "Related plumbing services",
    },
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
        heading: "Gas line installation for new appliances",
        copy: "New construction, remodels and appliance additions all need line sized and routed properly. We install gas piping to code for an indoor range, a tankless water heater, a fireplace, or an outdoor living space, and every installation ends with a pressure test and a leak check before the system goes live.",
      },
      {
        heading: "Gas appliance hookups for ranges and dryers",
        copy: "Adding a range, a fireplace insert, a dryer or an outdoor grill means connecting supply to appliance with the right sizing, safe routing and code-compliant fittings. We handle that side and walk you through the inspection when one is required.",
      },
      {
        heading: "Gas leak detection in Truckee and Tahoe",
        copy: "If you smell gas, leave the house and call the utility first. Then call us. We locate leaks with professional detection equipment and make repairs that last rather than tightening a fitting and hoping. Scheduled safety inspections are worth booking before a seasonal home is occupied again for winter.",
      },
      {
        heading: "Shutoff valves and emergency controls",
        copy: "Properly placed shutoffs are the difference between a problem and an emergency. We install and upgrade individual appliance shutoffs and whole-home emergency valves, so you and whoever looks after the house have clear control.",
      },
    ],
    commonIssues: [
      {
        heading: "You can smell gas",
        copy: "This is the one that cannot wait. Leave, call the utility, then call us. We find it with proper equipment and repair it safely.",
      },
      {
        heading: "A new appliance needs a line run",
        copy: "A range, fireplace, grill or dryer needs correctly sized and routed pipe, not the nearest convenient connection.",
      },
      {
        heading: "Old pipework that no longer meets code",
        copy: "Older homes often carry gas piping that predates current standards. We inspect, assess, and upgrade what needs it.",
      },
      {
        heading: "Not enough gas pressure for everything",
        copy: "Several appliances on an undersized line starve each other. We check supply capacity and upsize the piping where needed.",
      },
      {
        heading: "Shutting a second home down and starting it back up",
        copy: "Seasonal properties need the gas side closed down properly and restarted with testing, not just a valve turned.",
      },
    ],
    process: [
      { step: "We assess", copy: "We look at the existing system, work out what is needed, and check code compliance." },
      { step: "You get a scope", copy: "A clear scope of work and a price before anything starts." },
      { step: "We install", copy: "Work done to code with proper materials, tested connections, and a clean site." },
      { step: "We pressure test", copy: "Every gas job ends with a pressure test and leak check before it is signed off." },
    ],
    whyUs: WHY_BRIMER,
    headings: {
      commonIssues: "Common gas problems we fix",
      process: "How a gas job runs from start to test",
      whyUs: "Why Truckee homeowners call Brimer",
      emergency: "Smell gas in your Truckee home",
      reviews: "What homeowners say about gas work",
      towns: "Towns we cover around Lake Tahoe",
      faqs: "Gas line questions we get asked",
      related: "Related plumbing services",
    },
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
        heading: "Faucet, sink and toilet work in Truckee homes",
        copy: "From faucets and toilets to shower valves and tub spouts, we install and repair the fixtures people actually use every day. Whether you are upgrading the look or chasing a leak that keeps coming back, we make sure the fit, the function and the finish are all right before we leave.",
      },
      {
        heading: "Garbage disposal replacement",
        copy: "Disposal failures are one of the most common kitchen calls we get. We replace worn units, install new ones, and will tell you which size and feature set actually suits your household rather than upselling the biggest motor on the shelf.",
      },
      {
        heading: "Drain clearing and slow drain repair",
        copy: "A slow drain that keeps coming back is rarely just hair. Recurring clogs usually point to buildup or a pipe problem further down the line. We clear the blockage, then look at the drain line to work out whether that was the fix or only the symptom.",
      },
      {
        heading: "Remodel rough-in for kitchens and baths",
        copy: "Planning a renovation means relocating supply lines, repositioning drains and getting everything ready for the finish phase. We work to your contractor's schedule, test every connection, and leave the room inspectable rather than just closed up.",
      },
      {
        heading: "Low water pressure in Tahoe mountain homes",
        copy: "Inconsistent pressure affects showers, appliances and patience. The cause is usually a partly closed valve, a failing regulator, mineral buildup, or supply lines that were undersized to begin with. We trace it to the actual source rather than guessing, then restore reliable flow.",
      },
    ],
    commonIssues: [
      {
        heading: "Dripping faucets and running toilets",
        copy: "Beyond the wasted water, both usually mean worn internals that only get worse. We fix the cause rather than the symptom.",
      },
      {
        heading: "Slow or repeatedly clogged drains",
        copy: "Common in older mountain homes. We clear it, then check whether something deeper in the line is the real problem.",
      },
      {
        heading: "Pressure that is never quite right",
        copy: "Valves, regulators, fixtures or mineral buildup. We trace it properly instead of swapping parts until it improves.",
      },
      {
        heading: "Leaks under a sink or behind a wall",
        copy: "Hidden water damages cabinetry, flooring and framing. Finding it early is what keeps a repair from becoming a rebuild.",
      },
      {
        heading: "Plumbing that has to move for a remodel",
        copy: "Relocating fixtures and rerouting drains needs planning before demolition, not improvisation after it.",
      },
    ],
    process: [
      { step: "We look", copy: "We inspect the problem or read the remodel plans, then explain what is needed and why." },
      { step: "You decide", copy: "Scope, timeline and cost are clear before we begin." },
      { step: "We protect", copy: "Floors covered, cabinetry protected, and clean work, which matters most in a finished room." },
      { step: "We test", copy: "Every fixture is checked for leaks, pressure and correct operation before we call it done." },
    ],
    whyUs: WHY_BRIMER,
    headings: {
      commonIssues: "Common kitchen and bath problems we fix",
      process: "How a fixture or remodel job runs",
      whyUs: "Why Truckee homeowners call Brimer",
      emergency: "Leak under a sink right now",
      reviews: "What homeowners say about our work",
      towns: "Towns we cover around Lake Tahoe",
      faqs: "Kitchen and bath questions we get asked",
      related: "Related plumbing services",
    },
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
        heading: "Dishwasher installation and drain hookup",
        copy: "Proper installation is more than connecting a water line. We connect supply and drain, get the air gap or high loop right, and run a full cycle to check it before we leave. If the existing valves or connections are past it, we say so and replace them rather than reusing them and hoping.",
      },
      {
        heading: "Refrigerator water lines in Tahoe second homes",
        copy: "A reliable line means ice and filtered water without a slow leak behind a unit nobody moves. We install copper or braided stainless with a dedicated shutoff valve, which is a small detail that matters a great deal in a house that sits empty between visits.",
      },
      {
        heading: "Washing machine hookups and drain routing",
        copy: "From the supply valves to the drain standpipe, we set up connections that cope with what a modern high-efficiency machine discharges. Where the laundry sits on an upper floor, the drain routing is the part that deserves the attention.",
      },
      {
        heading: "Ice maker and filtration line setup",
        copy: "We run dedicated lines for standalone ice makers, under-sink filtration and similar specialty connections. Every one gets an inline shutoff so servicing it later does not mean closing the whole house down.",
      },
    ],
    commonIssues: [
      {
        heading: "A dishwasher that leaks after installation",
        copy: "Almost always the supply or drain connection. We make every joint secure, routed correctly, and tested.",
      },
      {
        heading: "Slow ice or a wet patch behind the fridge",
        copy: "Kinked tubing, loose fittings or an undersized line. We fit durable line with a proper shutoff valve.",
      },
      {
        heading: "A washer drain that overflows",
        copy: "Usually the standpipe size or the routing. We set up a drain that handles a full discharge cycle.",
      },
      {
        heading: "An ice maker with no water at all",
        copy: "Normally a missing or badly tapped line. We run a dedicated one with an inline shutoff for future servicing.",
      },
      {
        heading: "Getting the old unit out safely",
        copy: "Disconnecting and capping, gas appliances especially, needs doing properly and to code. We handle removal cleanly.",
      },
    ],
    process: [
      { step: "We check specs", copy: "We confirm the appliance requirements, look at the existing plumbing, and plan the connection." },
      { step: "We prepare", copy: "Supply lines, drain routing and shutoff valves installed or upgraded as needed." },
      { step: "We connect", copy: "The appliance goes in, runs a cycle, and gets checked for leaks." },
      { step: "We clear up", copy: "Old units disconnected safely and the work area left clean." },
    ],
    whyUs: WHY_BRIMER,
    headings: {
      commonIssues: "Common appliance hookup problems we fix",
      process: "How an appliance hookup runs",
      whyUs: "Why Truckee homeowners call Brimer",
      emergency: "An appliance is leaking right now",
      reviews: "What homeowners say about our work",
      towns: "Towns we cover around Lake Tahoe",
      faqs: "Appliance hookup questions we get asked",
      related: "Related plumbing services",
    },
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
        heading: "Moen Flo installation on your main line",
        copy: "The device fits directly on the main water supply and monitors flow, pressure and temperature continuously. If it sees a leak, unusual usage or freeze risk, it can shut the water off on its own and alert the app. Installation usually takes a few hours, and we handle the plumbing connection, the network setup, the app configuration and the calibration.",
      },
      {
        heading: "Freeze protection for Truckee winters",
        copy: "This is the feature that earns its keep at this elevation. The system watches for the temperature and pressure patterns that precede a freeze and can close the valve before a pipe bursts, whether you are upstairs or several hundred miles away.",
      },
      {
        heading: "Remote monitoring for Tahoe second homes",
        copy: "If the house is a second residence, the app is the visibility you would not otherwise have: real-time usage, alerts when something looks wrong, and a remote shutoff. A property manager or caretaker can be added as a second user so oversight does not depend on one person's phone.",
      },
      {
        heading: "What insurers say about water monitors",
        copy: "A number of carriers now treat monitored shutoff as a genuine risk reduction, and some offer a premium credit for it. We do not quote insurance programs and cannot promise a discount, so ask your carrier directly. The stronger argument is the claim you never have to file.",
      },
    ],
    commonIssues: [
      {
        heading: "A leak nobody is there to notice",
        copy: "A small leak in an empty house runs for weeks. The monitor spots the anomaly and closes the main on its own.",
      },
      {
        heading: "Freeze risk while the house is unoccupied",
        copy: "Temperature and pressure patterns give warning before a pipe bursts, which is warning you can act on remotely.",
      },
      {
        heading: "An insurer asking for water monitoring",
        copy: "Some carriers now recommend or require it on higher-value properties. An installation can satisfy that request.",
      },
      {
        heading: "Managing a house from out of the area",
        copy: "Real-time visibility into the plumbing from anywhere, rather than finding out on your next visit.",
      },
      {
        heading: "A slow leak behind a wall",
        copy: "Subtle flow changes are exactly what a monitor is good at catching, long before there is anything visible.",
      },
    ],
    process: [
      { step: "We assess", copy: "We look at the plumbing layout and recommend the right system and the right place to put it." },
      { step: "We install", copy: "The monitor goes on the main line with a dedicated shutoff, then connects to your network." },
      { step: "We configure", copy: "App set up, alerts configured, and the system calibrated to how the house normally uses water." },
      { step: "We walk you through", copy: "You leave knowing how to read an alert, use the app, and shut the water off from anywhere." },
    ],
    whyUs: WHY_BRIMER,
    headings: {
      commonIssues: "Problems a smart shutoff catches early",
      process: "How a Moen Flo install runs",
      whyUs: "Why Truckee homeowners call Brimer",
      emergency: "Water running in an empty house",
      reviews: "What homeowners say about our work",
      towns: "Towns we cover around Lake Tahoe",
      faqs: "Smart shutoff questions we get asked",
      related: "Related plumbing services",
    },
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
