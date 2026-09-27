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
    map: string;
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
    title: "Water Heater Replacement & Repair | Truckee & Tahoe",
    description:
      "Water heater repair, replacement, and installation in Truckee and North Lake Tahoe. Tank and tankless sized for altitude. Call 530-587-0733.",
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
      map: "Where we service water heaters around Tahoe",
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
    related: ["tankless-water-heaters", "gas-services", "frozen-burst-pipes", "smart-leak-shutoff"],
  },
  {
    slug: "tankless-water-heaters",
    name: "Tankless Water Heaters",
    shortName: "Tankless water heaters",
    title: "Tankless Water Heater Installation | Truckee & Tahoe",
    description:
      "Tankless water heater installation and replacement in Truckee and North Lake Tahoe. Sized for altitude and cold inlet water. Call 530-587-0733.",
    h1: "Tankless water heater installation in Truckee and North Lake Tahoe",
    summary:
      "Endless hot water with no standby loss, sized for mountain altitude, cold groundwater, and the way Tahoe homes are actually used.",
    bullets: [
      "Tankless installation, replacement, and conversions",
      "Sizing corrected for altitude and cold inlet water",
      "Gas line and venting upgrades when the house needs them",
      "Descaling and annual maintenance for hard water",
    ],
    body: [
      "A tankless water heater fits a lot of Truckee and North Lake Tahoe homes, especially seasonal ones. There is no tank of hot water sitting and cooling while nobody is there for weeks, and high demand households stop running out. But the sizing math that works at sea level does not work at 6,000 feet, and cold groundwater narrows the margin further.",
      "We start with the house, not the catalog. Fixture count, simultaneous use, the gas supply available, venting routes, and water quality all decide which unit is honest and which one will disappoint. If a tank is the better answer for your home, we will tell you that instead.",
      "Conversions from tank to tankless sometimes need a larger gas line, new venting, or a condensate drain. We price the whole job after seeing the home, and we verify hot water at every fixture before we leave.",
    ],
    sections: [
      {
        heading: "Tankless water heater installation in Truckee",
        copy: "Most installs here are conversions from an aging tank, and the house decides how simple that is. We confirm the gas meter and line can feed the unit at full fire, plan a venting route that suits the structure, and handle condensate where the unit produces it. You get a clear scope and price before anything is disconnected, and the old unit is hauled away.",
      },
      {
        heading: "Sizing a tankless unit for Tahoe altitude",
        copy: "Thinner air derates gas combustion and cold inlet water demands a bigger temperature rise, so a unit rated for a sea level home can fall short here. We size from your fixture count and realistic simultaneous use, then confirm against the manufacturer's altitude guidance. An undersized tankless is the most common disappointment we are called to fix.",
      },
      {
        heading: "Tankless vs tank for seasonal Tahoe homes",
        copy: "Seasonal vacancy is where tankless earns its keep, because there is no standby heat loss during the weeks nobody is home. Tanks still win on simplicity and lower upfront cost, and in homes with modest demand the math can favor them. We lay out both honestly for your house rather than pitching one answer.",
      },
      {
        heading: "Tankless maintenance and descaling",
        copy: "Hard mountain water leaves scale inside any tankless heat exchanger, and scale is what kills efficiency and triggers error codes. An annual descale and inspection keeps output steady and stretches the life of the unit. It is a short visit and the cheapest insurance a tankless owner can buy.",
      },
    ],
    commonIssues: [
      {
        heading: "Cold water sandwich and temperature swings",
        copy: "Usually a sizing or flow issue, sometimes a recirculation question. We find the cause rather than swapping parts.",
      },
      {
        heading: "Error codes and shutdowns",
        copy: "Tankless units protect themselves when something is wrong. We read the code, trace it to scale, venting, gas supply, or sensors, and fix the root cause.",
      },
      {
        heading: "Scale buildup from hard water",
        copy: "Mineral deposits coat the heat exchanger and choke performance. Regular descaling prevents most of it.",
      },
      {
        heading: "Unit undersized for the house",
        copy: "A tankless that cannot keep up at full demand was specified wrong, often for sea level. We assess honestly whether the unit or the sizing is the problem.",
      },
      {
        heading: "Ignition failures at altitude",
        copy: "Combustion components work harder in thin air. We diagnose ignition problems instead of guessing.",
      },
    ],
    process: [
      { step: "We assess", copy: "We look at demand, gas supply, venting, and water quality, and confirm tankless is right for the house." },
      { step: "You choose", copy: "You get a clear recommendation and price for the whole job, including any gas or venting work." },
      { step: "We install clean", copy: "We protect the work area, mount and plumb the unit, and handle venting and condensate properly." },
      { step: "We verify", copy: "We commission the unit, confirm hot water at every fixture, and walk you through basic care." },
    ],
    whyUs: WHY_BRIMER,
    headings: {
      commonIssues: "Tankless problems we fix in Truckee",
      process: "What a tankless install looks like",
      whyUs: "Why Truckee homeowners call Brimer",
      emergency: "Talk to us about going tankless",
      reviews: "What homeowners say about tankless work",
      towns: "Towns we cover around Lake Tahoe",
      faqs: "Tankless questions we get asked",
      related: "Related plumbing services",
      map: "Tankless installs across our Truckee service area",
    },
    faqs: [
      {
        question: "Is a tankless water heater worth it in Truckee?",
        answer:
          "Often yes for seasonal homes and high demand households, because there is no standby loss while the house sits empty. For modest, year round demand a tank can still be the better value. We size the answer to your house.",
      },
      {
        question: "How long do tankless water heaters last?",
        answer:
          "Typically 15 to 20 years with regular descaling, roughly twice a tank in mountain conditions. Skipping maintenance shortens that considerably.",
      },
      {
        question: "Can you convert my tank to tankless?",
        answer:
          "Usually. Most conversions need a gas supply check and new venting, and some need a condensate drain. We confirm all of it during the assessment so the price has no surprises.",
      },
      {
        question: "Do tankless units need yearly maintenance?",
        answer:
          "Yes, especially here. Annual descaling and inspection counter hard water scale and keep the unit running at full output.",
      },
    ],
    related: ["water-heaters", "gas-services", "smart-leak-shutoff"],
  },
  {
    slug: "winterization",
    name: "Home Winterization",
    shortName: "Winterization",
    title: "Home Winterization & Pipe Protection | Truckee & Tahoe",
    description:
      "Plumbing winterization for Tahoe second homes and cabins. Pipe draining, freeze protection, and shutoff setup in Truckee and North Lake Tahoe. Call 530-587-0733.",
    h1: "Plumbing winterization for Truckee and North Lake Tahoe second homes",
    summary:
      "Protect vacant homes from freeze damage with pipe draining, fixture protection, and water shutoff setup before winter arrives.",
    bullets: [
      "Full and partial winterization for seasonal homes",
      "Pipe draining, blowouts, and fixture antifreeze",
      "Main shutoff location and smart shutoff setup",
      "Spring start-up and de-winterization",
    ],
    body: [
      "Most burst pipe emergencies in Truckee happen in houses that sat empty. A weekend cabin that goes quiet in October and is not seen again until December is exactly where a small freeze becomes a flooded first floor. Winterization is the autumn visit that prevents the midwinter disaster.",
      "We walk the whole plumbing system: supply lines, hose bibs, toilets, traps, the water heater, and any crawlspace or exterior runs. Pipes are drained or blown clear, fixtures get antifreeze where it belongs, and the main shutoff is confirmed working and shown to you. What stays pressurized and what does not is a decision we make with you, not for you.",
      "Book before the first hard freeze, and ask us about spring start-up. Recommissioning in spring means fixtures are refilled, the water heater is brought back properly, and everything is checked before the season starts.",
    ],
    sections: [
      {
        heading: "Winterizing a second home in Truckee",
        copy: "Seasonal homes are the highest risk properties we see, because a freeze has weeks to do its work unnoticed. A full winterization drains the supply system, protects every fixture and trap, and leaves the house in a state where a cold snap is a non event. If you visit through winter, a partial winterization keeps essential plumbing live while protecting everything else.",
      },
      {
        heading: "What a full plumbing winterization includes",
        copy: "Water off at the main and the system drained, compressed air through the lines where needed, antifreeze in toilets and traps, the water heater drained or set correctly, hose bibs and exterior lines cleared, and every shutoff tagged and tested. You get a written record of what was done and what state each fixture was left in.",
      },
      {
        heading: "Partial winterization for homes with heat left on",
        copy: "Some owners keep minimal heat running all winter. That helps but it is not a plan: furnaces fail and power goes out. A partial winterization protects the vulnerable runs, exterior walls, and crawlspace pipes while keeping kitchens and baths usable, so a heating failure does not become a plumbing failure.",
      },
      {
        heading: "Spring start-up and de-winterization in Tahoe",
        copy: "In spring we reverse the process: refill the system slowly, check every joint and valve as pressure returns, bring the water heater back into service, and confirm fixtures run clean. Catching a winter casualty at start-up beats discovering it at the first summer visit.",
      },
    ],
    commonIssues: [
      {
        heading: "Burst pipes in vacant homes",
        copy: "The classic Tahoe second home disaster. A freeze that nobody sees for weeks, then water running through floors and ceilings.",
      },
      {
        heading: "Traps drying out over winter",
        copy: "Unused drains let their trap seals evaporate, inviting sewer gas into the house. Antifreeze in traps prevents it.",
      },
      {
        heading: "Water heater freeze damage",
        copy: "A tank left full in an unheated space can split. Draining or proper vacation setup avoids a spring replacement.",
      },
      {
        heading: "Hose bibs and exterior lines",
        copy: "The first things to freeze and the most forgotten. Clearing them is part of every winterization we do.",
      },
      {
        heading: "Crawlspace pipes with no heat",
        copy: "Low, unconditioned runs freeze first. We identify them during the walkthrough and protect or drain them.",
      },
    ],
    process: [
      { step: "We walk the home", copy: "We map every fixture, shutoff, hose bib, and vulnerable run so nothing is missed." },
      { step: "You choose", copy: "Full or partial winterization based on how you use the home through winter, with a clear price." },
      { step: "We winterize", copy: "Drain, blow out, antifreeze, tag, and document. The house is left freeze safe." },
      { step: "Spring start-up", copy: "We recommission in spring, checking every joint as pressure returns." },
    ],
    whyUs: WHY_BRIMER,
    headings: {
      commonIssues: "Freeze damage we prevent in Truckee",
      process: "What a winterization visit looks like",
      whyUs: "Why Truckee homeowners call Brimer",
      emergency: "Winterize before the first hard freeze",
      reviews: "What homeowners say about winterization",
      towns: "Towns we cover around Lake Tahoe",
      faqs: "Winterization questions we get asked",
      related: "Related plumbing services",
      map: "Winterization visits across the Truckee region",
    },
    faqs: [
      {
        question: "When should I winterize my Tahoe home?",
        answer:
          "Before the first sustained freeze, which usually means October. Late bookings fill fast once temperatures drop, so earlier is better.",
      },
      {
        question: "Should I drain my pipes or just leave the heat on?",
        answer:
          "Heat alone is not a plan. Furnaces fail and power goes out, and a heating failure becomes a plumbing failure within hours at Tahoe temperatures. Draining removes the risk entirely.",
      },
      {
        question: "How much does winterization cost?",
        answer:
          "It depends on the size of the home, fixture count, and whether you need full or partial winterization. We price it after a walkthrough so there are no surprises.",
      },
      {
        question: "Can pipes still freeze in a winterized home?",
        answer:
          "A properly winterized system has no water left to freeze in the drained runs. That is the point of the visit, and why we document every fixture's state.",
      },
    ],
    related: ["frozen-burst-pipes", "smart-leak-shutoff", "water-heaters"],
  },
  {
    slug: "drain-cleaning",
    name: "Drain Cleaning",
    shortName: "Drain cleaning",
    title: "Drain Cleaning & Clog Removal | Truckee & Tahoe",
    description:
      "Drain cleaning and clog removal in Truckee and North Lake Tahoe. Kitchen, bathroom, and laundry drains cleared right. Call 530-587-0733.",
    h1: "Drain cleaning and clog removal in Truckee and North Lake Tahoe",
    summary:
      "Slow or backed up drains cleared without damage to your pipes, and honest diagnosis when a clog keeps coming back.",
    bullets: [
      "Kitchen, bathroom, and laundry drain clearing",
      "Recurring clog diagnosis, not just symptom relief",
      "Buildup and root assessment for older lines",
      "Clean work, verified flow before we leave",
    ],
    body: [
      "A slow drain is usually a warning, not the problem itself. In Truckee and North Lake Tahoe homes we see the same culprits again and again: kitchen grease that solidifies in cold crawlspace runs, hair and soap in bathroom lines, and older cabins where decades of buildup have narrowed cast iron and galvanized pipe.",
      "We clear the blockage and then look for why it happened. A drain that clogs in the same spot twice is telling you something about the pipe, and clearing it a third time without asking is how a small job becomes a Saturday emergency.",
      "Chemical drain cleaners are not the answer. They rarely clear a real blockage, they can damage older pipes and finishes, and they make the eventual professional visit harder. Call before the bottle, not after.",
    ],
    sections: [
      {
        heading: "Drain cleaning in Truckee",
        copy: "We clear kitchen, bathroom, laundry, and floor drains with the right cable and head for the pipe, not a one size approach. Shoe covers on, drop cloths down, and we run water to verify full flow before we pack up. If the line has a deeper problem, you hear about it plainly with options.",
      },
      {
        heading: "Kitchen drain clogs and grease buildup",
        copy: "Grease goes down liquid and comes back solid, especially in runs through cold crawlspaces. Garbage disposals grind food finer but do not make grease disappear. We clear the line and tell you what habits are feeding it, because a cleared grease clog without a habit change is a repeat visit.",
      },
      {
        heading: "Bathroom and laundry drain blockages",
        copy: "Hair, soap, and lint are the usual suspects, and they compact over time into something a plunger cannot move. Slow tubs, standing shower water, and gurgling sinks are the early signs. We clear them and check the venting when drainage is sluggish across multiple fixtures.",
      },
      {
        heading: "When a drain keeps clogging in Tahoe homes",
        copy: "Repeat clogs in the same drain point to the pipe, not the clog: bellies that hold water, root intrusion at joints, or pipe narrowed by decades of scale. We say so honestly and lay out the real fix instead of selling you another clearing.",
      },
    ],
    commonIssues: [
      {
        heading: "Slow draining sinks and tubs",
        copy: "Buildup narrowing the line over time. Clearing restores flow; we check whether buildup or pipe condition is the deeper cause.",
      },
      {
        heading: "Kitchen sink backing up",
        copy: "Usually grease solidified downstream, sometimes a disposal feeding a line that was already marginal. We clear it and address the cause.",
      },
      {
        heading: "Standing water in showers",
        copy: "Hair and soap compacted in the trap arm or beyond. Quick to clear, worth checking for venting issues if it recurs.",
      },
      {
        heading: "Gurgling drains",
        copy: "Air struggling past a partial blockage, or a venting problem. We find which one before clearing.",
      },
      {
        heading: "The same drain clogging again",
        copy: "The clearest signal the pipe needs attention, not just the clog. We diagnose the line honestly.",
      },
    ],
    process: [
      { step: "We diagnose", copy: "We find the blockage and check whether the pipe itself is the reason it keeps happening." },
      { step: "You choose", copy: "Clearing now, a deeper fix, or both, with a clear price before work starts." },
      { step: "We clear", copy: "The right cable and head for your pipe, with floors and finishes protected." },
      { step: "We verify", copy: "We run water and confirm full drainage before we leave." },
    ],
    whyUs: WHY_BRIMER,
    headings: {
      commonIssues: "Drain problems we clear in Truckee",
      process: "What a drain cleaning visit looks like",
      whyUs: "Why Truckee homeowners call Brimer",
      emergency: "Get your drains flowing in Truckee",
      reviews: "What homeowners say about drain cleaning",
      towns: "Towns we cover around Lake Tahoe",
      faqs: "Drain cleaning questions we get asked",
      related: "Related plumbing services",
      map: "Drain cleaning across Truckee and North Tahoe",
    },
    faqs: [
      {
        question: "How much does drain cleaning cost?",
        answer:
          "It depends on the drain, the blockage, and how accessible the line is. We price it after seeing the drain so there are no surprises.",
      },
      {
        question: "Can I use chemical drain cleaner first?",
        answer:
          "We advise against it. Chemical cleaners rarely clear a real blockage, they can damage older pipes and fixture finishes, and they make the professional visit harder and less safe.",
      },
      {
        question: "Why does the same drain keep clogging?",
        answer:
          "Usually the pipe, not the clog: a belly holding water, roots at a joint, or decades of buildup narrowing the line. Clearing treats the symptom. We diagnose the pipe so you can decide on the real fix.",
      },
      {
        question: "What if the clog comes back after you clear it?",
        answer:
          "A quick recurrence tells us the blockage was not the whole story. Call us back and we will look deeper at the line itself rather than just clearing it again.",
      },
    ],
    related: ["kitchen-bath-plumbing", "appliance-installation", "frozen-burst-pipes"],
  },
  {
    slug: "frozen-burst-pipes",
    name: "Frozen & Burst Pipes",
    shortName: "Frozen pipes",
    title: "Frozen & Burst Pipe Repair | Truckee & Tahoe",
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
      "We locate the failure, thaw only when it is safe, stop the water, and repair the damaged section. After the emergency we can talk insulation on exposed runs, and whether a smart shutoff belongs on the main.",
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
        heading: "Freeze prevention with insulation and monitoring",
        copy: "Houses tend to freeze in the same place every year. Once we know where, better insulation on that run, and sometimes a change to crawl-space ventilation stop the annual repeat. A monitored shutoff on the main is the backstop for a house nobody is watching.",
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
        copy: "The usual casualties. Insulation and protection on the exposed runs are what stop it happening again.",
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
      { step: "We prevent", copy: "We recommend insulation, pipe protection, or a monitored shutoff so the same run does not go again." },
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
      map: "Burst pipe response across our service area",
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
    related: ["winterization", "smart-leak-shutoff", "water-heaters", "gas-services"],
  },
  {
    slug: "gas-services",
    name: "Gas Services",
    shortName: "Gas",
    title: "Gas Line Installation & Leak Detection | Truckee & Tahoe",
    description:
      "Gas line installation, appliance hookups, leak detection, and safety inspections in Truckee and North Lake Tahoe. Call 530-587-0733.",
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
      map: "Gas line work across Truckee and the north shore",
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
    title: "Kitchen & Bathroom Plumbing | Truckee & Tahoe",
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
      map: "Kitchen and bath work across our Tahoe service area",
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
    title: "Plumbing Appliance Installation | Truckee & Tahoe",
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
      map: "Appliance installs across Truckee and North Tahoe",
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
    title: "Smart Leak Detection & Moen Flo | Truckee & Tahoe",
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
      map: "Smart shutoff installs across our service area",
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
