// Per-town page content for the town and summit types (M2 batch: glenshire,
// tahoe-city, donner-summit-serene-lakes, soda-springs, norden).
//
// Written against each town's own recorded facts (docs/crawl/town-facts.json and
// docs/crawl/pages/service-areas__<slug>.txt), with per-town briefs in
// docs/town-briefs.d/. Nothing is invented and nothing is borrowed from a
// neighbouring town. Each town keeps one section per H2 topic its live page has,
// in live order (PLAN.md section 3d rule 6), with headings that pair the service
// with that town's own angle (rule 4). Shared-block headings (emergency, reviews,
// popular, faqs, cta) are written per town, not templated from the town name.

import type { TownContent } from "./town-content";

export const townContentTownSummit: Record<string, TownContent> = {
  "glenshire": {
    lede: "The banana belt of Truckee: a family neighborhood six miles northeast of downtown, where plumbing runs every day of the year.",
    overview:
      "Glenshire sits at approximately 5,900 to 6,000 feet, about six miles northeast of downtown Truckee. Known locally as the banana belt for its southern exposure and comparatively lower snowfall, it is one of Truckee's most established residential communities, with roughly 1,350 properties and an estimated 80 percent full-time occupancy. That year-round pattern is the thing about plumbing here: systems see sustained daily demand through the heating season, so failures come from wear and age rather than vacancy. The housing stock runs from 1970s homes through recent custom builds. Water and electric service comes from Truckee Donner Public Utility District, which sources groundwater from the Martis Valley basin; sewer collection runs through Truckee Sanitary District, with regional treatment by the Tahoe-Truckee Sanitation Agency. Natural gas comes from Southwest Gas. Permits go through the Town of Truckee Building and Safety Division.",
    sections: [
      {
        heading: "Water heater repair in Glenshire's full-time homes",
        paragraphs: [
          "Water heaters in Glenshire work harder than the name on the tank suggests. Cold groundwater supplied by TDPUD enters well below 50 degrees for much of the year, and the 5,900 to 6,000 foot elevation stretches recovery time and wears on burners, elements and anode rods. In a community where roughly 80 percent of homes are occupied full time, that daily demand adds up.",
          "The housing stock runs from 1970s originals through recent custom builds, and original units in the older homes have usually been replaced by now, though not always with the right sizing or altitude configuration. We diagnose the actual failure, name what is wrong, and tell you plainly whether a repair is worth doing or whether you are about to pay twice.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Water heater installation for daily-use families",
        paragraphs: [
          "Replacing a tank at 5,900 to 6,000 feet is not the same job as at sea level. Thinner air changes combustion, so a gas-fired unit needs a factory high-altitude model or a proper high-altitude kit, and we size for the hot water the household really uses rather than the rating on the box.",
          "Before anything is recommended we check the fuel source and the venting path, which is where the age of a Glenshire home matters most, and we file the permit through the Town of Truckee Building and Safety Division as part of the job.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless systems in Glenshire's southern-exposure homes",
        paragraphs: [
          "Tankless suits the family side of Glenshire life in one specific way: households that draw several fixtures at once can stop paying to keep a tank hot around the clock. The catch is that cold inlet water and altitude both cut effective output below the sea-level rating on the box.",
          "We size for the fixture count and flow the house really has and confirm Southwest Gas can feed the unit before anything is ordered. For a family home that runs dishwashers, laundry and showers in the same evening, that sizing step is what makes the difference.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas lines in Glenshire's 1970s originals",
        paragraphs: [
          "Southwest Gas serves Glenshire, feeding furnaces, water heaters, fireplaces, cooktops and dryers in homes that in many cases date to the 1970s. Decades of freeze and thaw cycling loosen connections and corrode fittings, and the original runs in older homes are the ones we find failing most often.",
          "If you smell gas, call Southwest Gas first on 1-877-860-6020, then call us for the repair. We locate the fault, repair or replace the affected section, and pressure-test the line before service goes back on.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "Adding a gas line to a Glenshire home",
        paragraphs: [
          "New runs in Glenshire usually mean a fireplace, a range, a patio heater or a standby generator. Each needs correct sizing and code-compliant installation, plus coordination with Southwest Gas when meter capacity is involved.",
          "Because Glenshire sits inside the incorporated town, permits go through the Town of Truckee Building and Safety Division rather than the county. We file it as part of the job and coordinate with your builder or designer when the gas work sits inside a bigger remodel.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath plumbing for growing families",
        paragraphs: [
          "Glenshire families remodel when the kids get bigger or the kitchen finally gives out, and the plumbing underneath decides how smooth that goes. 1970s homes still carry galvanized supply lines that starve new fixtures of pressure, while recent custom builds are more forgiving.",
          "We work with homeowners, designers and general contractors on everything from a faucet replacement to full rough-in during a remodel. In older homes we check the galvanized runs before they become the reason your new fixtures underperform, and we will say when repiping a run is the cheaper answer over five years.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Leak monitoring for a year-round household",
        paragraphs: [
          "Even with someone home most days, a full-time house has its empty weeks: school breaks, summer trips, weekends away. A supply line that lets go while the family is gone does not stop until somebody walks in.",
          "A monitor on the main line watches flow, pressure and temperature continuously, shuts the water off on its own when something is wrong, and tells your phone it did. For a household with its own routines and its own away-from-home gaps, it is the most useful thing we install.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipe repair on Glenshire's cold snaps",
        paragraphs: [
          "The banana belt name means Glenshire gets less snow than the surrounding hills, not fewer hard freezes. Exposed runs under raised foundations, exterior hose bibs and supply lines in uninsulated crawl spaces still split here during long cold snaps.",
          "If a pipe has already gone, shut the main and call 530-587-0733. We locate the failure, thaw only where it is safe, and repair or replace the damaged section. For a house that freezes in the same spot every winter, the fix is finding why that run gets cold and changing it.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Plumbing repairs across the TSD system",
        paragraphs: [
          "Running toilets, dripping faucets, failing shutoff valves and slow drains are the everyday work, and in Glenshire they turn up across the full range of the housing stock, from 1970s originals to recent custom builds.",
          "Sewer collection is handled by Truckee Sanitary District, with regional treatment by the Tahoe-Truckee Sanitation Agency. When a drain problem turns out to sit at the lateral connection to the TSD main rather than inside the house, we work out where the boundary falls and help you coordinate the next step instead of digging first.",
        ],
      },
    ],
    headings: {
      emergency: "Burst pipe or gas smell at your place tonight",
      reviews: "What Glenshire homeowners say",
      popular: "Work we do most in Glenshire",
      faqs: "Questions about full-time mountain living",
      cta: "Call a plumber who knows Glenshire",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Glenshire?",
        answer:
          "Water and electric service in Glenshire is provided by Truckee Donner Public Utility District (TDPUD), which sources 100% groundwater from the Martis Valley basin. Sewer collection is handled by Truckee Sanitary District (TSD), with regional wastewater treatment managed by the Tahoe-Truckee Sanitation Agency (TTSA). Natural gas is provided by Southwest Gas.",
      },
      {
        question: "Do I need a high-altitude water heater in Glenshire?",
        answer:
          "Yes. Glenshire sits at approximately 5,900 to 6,000 feet, and reduced oxygen at that altitude affects combustion in gas-fired water heaters. A unit installed without the right high-altitude adjustment runs less efficiently, produces more carbon monoxide, and wears out sooner. Most manufacturers offer a factory high-altitude model or a conversion kit. The cold TDPUD groundwater, entering well below 50 degrees for much of the year, adds further load on burners and elements.",
      },
      {
        question: "How do I protect my Glenshire home's plumbing during a cold snap?",
        answer:
          "Keep heat on and hold minimum indoor temperatures, especially where plumbing runs through exterior walls or crawl spaces. Insulate the vulnerable runs and let faucets drip on the coldest nights. A Moen Flo monitor watches flow, pressure and temperature and can shut the water off on its own if it sees a leak, whether you are home or away. We can walk your home and tell you which runs are actually at risk.",
      },
      {
        question: "Do I need a permit for plumbing work in Glenshire?",
        answer:
          "Glenshire is within the Town of Truckee, so plumbing permits are issued by the Town of Truckee Building and Safety Division. Most replacements and new installations need one. We handle the filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Glenshire?",
        answer:
          "Start by shutting off the main water supply, so a pipe that has already cracked does not flood the house when the ice releases. Do not use an open flame or a heat gun. A hair dryer, or towels soaked in warm water, is safe on the frozen section. If you cannot find it, or a pipe has already burst, call 530-587-0733. We find the failure, thaw only where it is safe, and repair or replace the damaged section.",
      },
      {
        question: "What does replacing a water heater in Glenshire involve?",
        answer:
          "It depends on the type of unit (tank or tankless), the fuel source, the complexity of the venting path, and whether the setup needs code upgrades to come current. A straightforward tank replacement with existing gas service is less involved than switching to tankless or upgrading an older mechanical setup. We evaluate the home, present clear options with pricing, and handle permitting through the Town of Truckee.",
      },
    ],
    popularServices: ["water-heaters", "frozen-burst-pipes", "gas-services", "kitchen-bath-plumbing"],
  },
  "tahoe-city": {
    lede: "The commercial hub at the lake's outlet, where the Truckee River begins and homes run from mid-century cabins to lakefront estates.",
    overview:
      "Tahoe City sits at approximately 6,225 feet on the northwest shore of Lake Tahoe, at the outlet where the Truckee River begins. It is the commercial center of the North Shore and West Shore, and its housing stock runs from original mid-century cabins to fully remodeled lakefront estates. The community draws a mix of full-time residents, second-home owners and short-term rentals, all sharing the same winter: heavy snowfall, sustained freezing temperatures, and the thermal cycling that comes with intermittent occupancy. Water and sewer service comes from Tahoe City Public Utility District, which sources water from 14 groundwater wells; regional wastewater treatment runs through the Tahoe-Truckee Sanitation Agency. Natural gas comes from Southwest Gas and electricity from Liberty Utilities. Permits go through the Placer County Building Services Division Tahoe office, and homes inside the Tahoe Regional Planning Agency boundary may face additional environmental review.",
    sections: [
      {
        heading: "Water heater repair in Tahoe City's older cabins",
        paragraphs: [
          "Tahoe City water heaters work under steady demand from a community that mixes full-time residents, second-home owners and short-term rentals. The groundwater from TCPUD enters cold year round, and the 6,225 foot elevation affects combustion efficiency and recovery times on gas-fired units.",
          "Original mid-century cabins are the ones with original-era equipment still hanging on, and the failure is usually a long time coming: slow recovery, a pilot that will not stay lit, or a tank that has been patched past honesty. We test the unit, name the actual failure, and tell you plainly whether a repair is worth doing.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Water heater installation at 6,225 feet",
        paragraphs: [
          "Thinner air at 6,225 feet changes combustion, so a gas-fired unit needs a factory high-altitude model or a proper high-altitude kit. Lakefront estates with several bathrooms need the sizing done for real draw, not the sea-level rating on the box.",
          "We check the fuel source and the venting path before recommending anything, and we file the permit through the Placer County Building Services Division Tahoe office. Homes that fall inside the TRPA boundary may need additional environmental review, and we tell you up front when that applies.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless water heaters for Tahoe City rentals",
        paragraphs: [
          "Tankless suits rental homes because there is no standby loss while the place sits between guests, and it suits the bigger homes with several bathrooms drawing at once during peak season. The catch is that cold inlet water and altitude both cut effective output below the sea-level rating.",
          "We size for the fixture count and flow the house really has and confirm Southwest Gas can feed the unit. For an owner running a short-term rental, the win is hot water that does not run out on a full-house weekend and a unit that costs nothing while the place is empty.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair for Tahoe City's rental homes",
        paragraphs: [
          "Southwest Gas feeds Tahoe City, and the rental homes here put unusual miles on their gas systems: constant guest turnover means fireplaces, cooktops and furnaces cycle more than in a lived-in house, and the freeze and thaw between occupied weeks moves fittings that a full-time home never stresses.",
          "If you smell gas, get everyone out and call Southwest Gas first on 1-877-860-6020, then call us for the repair. We locate the fault, repair or replace the affected section, and pressure-test the line before service goes back on.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "Gas line installation through Placer County permits",
        paragraphs: [
          "New runs usually mean a fireplace, a range, a patio heater or a standby generator. Each needs correct sizing, code-compliant installation, a pressure test, and coordination with Southwest Gas when meter capacity is involved.",
          "Permits run through the Placer County Building Services Division Tahoe office, and homes inside the TRPA boundary may face additional environmental review for certain work. We file the permit as part of the job and coordinate with your builder or designer when the gas work sits inside a bigger remodel.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath plumbing for Tahoe City remodels",
        paragraphs: [
          "Tahoe City remodels run the full range, from a mid-century cabin getting its first real kitchen to a lakefront estate redoing every bathroom. The plumbing underneath is just as varied, and the plan has to read the house before the fixtures get ordered.",
          "We work with owners, designers and general contractors on faucet and fixture replacements, shower and tub valve service, and full rough-in during a remodel. In older cabins we check what the supply lines are made of before they become the reason your new fixtures underperform.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Leak monitoring between guest stays",
        paragraphs: [
          "A rental that sits empty between bookings is the riskiest kind of vacancy: nobody is there to hear the hiss or see the stain. A supply line that lets go on a Tuesday does not stop until the next guest or cleaner walks in on Friday.",
          "A monitor on the main line watches flow, pressure and temperature continuously, shuts the water off on its own when something is wrong, and tells your phone it did. For an owner across the state or a caretaker covering several properties, it is the most useful thing we install.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen and burst pipes on the northwest shore",
        paragraphs: [
          "The lake outlet where the Truckee River begins keeps Tahoe City cold in a particular way: heavy snowfall, sustained freezing temperatures, and the thermal cycling that comes with intermittent occupancy. The vulnerable points are consistent: exposed runs, exterior hose bibs, and cabins closed up without a proper shutdown.",
          "If a pipe has already gone, shut the main and call 530-587-0733. We locate the failure, thaw only where it is safe, and repair or replace the damaged section. Shoulder season months carry real risk because temperatures still drop below freezing while homes sit vacant between ski season and summer.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Everyday repairs on TCPUD water and sewer",
        paragraphs: [
          "Running toilets, dripping faucets, failing shutoff valves and slow drains are the everyday work, and in Tahoe City they turn up from mid-century cabins to remodeled estates.",
          "Water and sewer service comes from Tahoe City Public Utility District, which sources water from 14 groundwater wells and manages sewer collection, with regional treatment by the Tahoe-Truckee Sanitation Agency. When a drain problem turns out to sit at the lateral connection to the TCPUD main rather than inside the house, we work out where the boundary falls and help you coordinate the next step.",
        ],
      },
    ],
    headings: {
      emergency: "Burst pipe, gas smell or no hot water tonight",
      reviews: "How Tahoe City owners describe our work",
      popular: "Jobs we do most around Tahoe City",
      faqs: "Altitude, permits and TRPA questions",
      cta: "Talk to us about your Tahoe City place",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Tahoe City?",
        answer:
          "Water and sewer service in Tahoe City is provided by Tahoe City Public Utility District (TCPUD), which sources water from 14 groundwater wells across the system. TCPUD also manages sewer collection, with regional wastewater treatment handled by the Tahoe-Truckee Sanitation Agency (TTSA). Natural gas is provided by Southwest Gas. Electricity in the Tahoe City area is provided by Liberty Utilities.",
      },
      {
        question: "Do I need a high-altitude water heater in Tahoe City?",
        answer:
          "Yes. Tahoe City sits at approximately 6,225 feet. At that elevation, reduced oxygen levels affect combustion in gas-fired water heaters. Units installed without proper high-altitude adjustment run less efficiently, produce more carbon monoxide, and wear out sooner. Most manufacturers offer a factory high-altitude model or a conversion kit. The cold groundwater supplied by TCPUD adds further stress on heating elements and burners, requiring a larger temperature rise to reach standard output.",
      },
      {
        question: "How do I protect my Tahoe City home's plumbing when I'm away?",
        answer:
          "The most effective approach combines smart leak detection with proper winterization. A Moen Flo system monitors your water supply line continuously and can shut off water automatically if it detects a leak or abnormal flow. For extended vacancies, keep minimum heat on and insulate the vulnerable pipe runs. Shoulder season months carry real risk because temperatures can still drop below freezing while homes sit vacant between ski season and summer. We can assess your home's specific vulnerabilities and recommend the right combination of protection.",
      },
      {
        question: "Do I need a permit for plumbing work in Tahoe City?",
        answer:
          "Tahoe City is in unincorporated Placer County, so plumbing permits are issued through the Placer County Building Services Division Tahoe office. Most replacements and new installations need one. Homes within the Tahoe Regional Planning Agency (TRPA) boundary may also face additional environmental review for certain types of work. We handle the filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Tahoe City?",
        answer:
          "Shut off the main water supply first, so a cracked pipe does not flood the cabin when the ice releases. Do not use an open flame or a heat gun. A hair dryer, or towels soaked in warm water, is the safe way to warm a frozen section. If you cannot find it, or a pipe has already burst, call 530-587-0733. We locate the failure, thaw only where it is safe, and repair or replace the damaged section.",
      },
      {
        question: "What does winterizing a Tahoe City home involve?",
        answer:
          "Draining the lines and fixtures, protecting the traps, shutting down the water heater, and dealing with exterior hose bibs, then documenting it so it can be reversed properly in spring. The scope scales with the home: a compact cabin is a different job from a larger lakefront home with multiple bathrooms and exterior plumbing. We look at the house and give you a clear price before any work starts.",
      },
    ],
    popularServices: ["water-heaters", "smart-leak-shutoff", "kitchen-bath-plumbing", "frozen-burst-pipes"],
  },
  "donner-summit-serene-lakes": {
    lede: "The highest homes in the corridor, at 6,800 to 7,200 feet around two connected lakes, where every appliance runs on propane.",
    overview:
      "Serene Lakes is an alpine community of roughly 1,038 lots surrounding two connected lakes, Lake Serena and Lake Dulzura, at 6,800 to 7,200 feet on Donner Summit, about 600 to 1,000 feet above Truckee. The area receives 400 to 500 inches of snowfall annually, and most homes are used seasonally, with extended vacancy common through the shoulder months. The housing stock runs from modest 1960s and 1970s cabins to larger custom homes and rare lakefront properties. There is no natural gas infrastructure on Donner Summit: every home runs on propane for heating, water heaters, cooktops and fireplaces. Water and sewer collection comes from the Sierra Lakes County Water District, whose primary drinking water source is Lake Serena; sewage is pumped to the Donner Summit Public Utility District treatment plant in Soda Springs. Permits go through the Placer County Building Services Division.",
    sections: [
      {
        heading: "Water heater repair at 7,000 feet",
        paragraphs: [
          "At 7,000 feet, thin air is only half the story. The water arrives from Lake Serena some of the coldest inlet water in the corridor, and every water heater here also has to be configured for propane fuel, with the correct orifice sizing and gas pressure regulation. A unit set up for natural gas at sea level will burn wrong in every way that matters.",
          "We test the unit, name the actual failure, and tell you plainly whether a repair is worth doing. Serene Lakes cabins from the 1960s and 1970s are the ones with the longest-deferred replacements, and the patch-on-patch jobs are where we find the worst combustion setups.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Water heater installation for Serene Lakes cabins",
        paragraphs: [
          "A replacement at 6,800 to 7,200 feet has to get three things right at once: high-altitude combustion, propane fuel configuration, and a temperature rise that starts from Lake Serena's cold inlet. Miss any one of the three and the unit wears out early or runs dirty.",
          "We size for the hot water the house actually uses, check the propane supply and the venting path before recommending anything, and file the permit through the Placer County Building Services Division. Freeze risk runs past the core winter months here, with hard freezes possible into late spring and back again in early fall.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless in a propane-only summit home",
        paragraphs: [
          "Tankless suits the summit pattern: cabins that sit empty for weeks lose nothing to standby, and when the family does arrive, a properly sized unit keeps up with several bathrooms drawing at once. The sizing has to account for propane fuel and for inlet water that is far colder than the box rating assumes.",
          "We size for the fixture count and flow the house really has and confirm the propane supply and pressure can feed the unit. For a second home with long empty stretches, no standby loss through the shoulder months is the whole point.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Propane line repair at 7,000 feet",
        paragraphs: [
          "Every gas appliance on the summit runs on propane: furnaces, water heaters, cooktops, fireplaces. Freeze and thaw cycling loosens connections and corrodes fittings, and the movement is worse at this elevation than anywhere lower in the corridor.",
          "If you smell propane, a distinct sulfur or rotten-egg odor, evacuate the home, avoid operating switches or electronics, and call your propane supplier and 911 from outside the home. Once the area is safe, call us for the repair. We locate the fault, repair or replace the affected section, and pressure-test the line before service goes back on.",
        ],
        link: { label: "More on propane line repair", href: "/services/gas-services/" },
      },
      {
        heading: "Propane line installation with Placer County permits",
        paragraphs: [
          "New runs on the summit usually mean a fireplace, a range, a patio heater or a standby generator. Each needs correct sizing for propane, code-compliant installation, a pressure test, and a supplier who can confirm the tank and regulator can feed the added load.",
          "Permits run through the Placer County Building Services Division, and we file it as part of the job. Winter access complicates scheduling: with 400 to 500 inches of snowfall a year, planning the installation for a clear window is part of the work.",
        ],
        link: { label: "More on propane line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath plumbing in Serene Lakes cabins",
        paragraphs: [
          "Serene Lakes housing runs from modest 1960s and 1970s cabins to larger custom homes and rare lakefront properties, and the plumbing underneath tells the same story. The older cabins are the ones where a fixture swap turns into a supply-line conversation.",
          "We work with owners, designers and general contractors on faucet and fixture replacements, shower and tub valve service, and full rough-in during a remodel. In the older cabins we check the supply lines before they become the reason your new fixtures underperform, and we will say when repiping a run is the cheaper answer over five years.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Leak monitoring for long empty months on the summit",
        paragraphs: [
          "Summit cabins sit empty through the shoulder months, and a supply line that lets go in an empty house does not stop until somebody walks in, which can be weeks. The freeze window here stretches from early fall into late spring, so the risk period is longer than in any lower community.",
          "A monitor on the main line watches flow, pressure and temperature continuously, shuts the water off on its own when something is wrong, and tells your phone it did. For an owner who is away between visits or a caretaker covering several properties, it is the most useful thing we install.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipe repair under 500 inches of snow",
        paragraphs: [
          "The summit takes 400 to 500 inches of snow a year, and cold does the rest. The vulnerable points are consistent: exposed runs, exterior hose bibs, and cabins closed up for winter without a proper shutdown. Getting to a property in deep winter is not always straightforward, which makes the first response slower and the prevention worth more.",
          "If a pipe has already gone, shut the main and call 530-587-0733. We locate the failure, thaw only where it is safe, and repair or replace the damaged section. For a cabin that freezes in the same spot every winter, we find where the run loses heat and change the run itself, not just the pipe.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Plumbing repairs on the Serene Lakes water system",
        paragraphs: [
          "Running toilets, dripping faucets, failing shutoff valves and slow drains are the everyday work, and in Serene Lakes they turn up across the full spread of the housing stock, from 1960s cabins to newer custom homes.",
          "Water and sewer collection comes from the Sierra Lakes County Water District, whose primary drinking water source is Lake Serena. Sewage is pumped to the Donner Summit Public Utility District treatment plant in Soda Springs. When a drain problem turns out to sit at the lateral connection to the district main rather than inside the house, we work out where the boundary falls and help you coordinate the next step.",
        ],
      },
    ],
    headings: {
      emergency: "Burst pipe or propane smell on the summit",
      reviews: "What Serene Lakes owners tell neighbors",
      popular: "The work we do most at 7,000 feet",
      faqs: "What Serene Lakes owners ask us",
      cta: "Call a summit plumber before the next storm",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Serene Lakes?",
        answer:
          "Water and sewer collection in Serene Lakes is provided by Sierra Lakes County Water District (SLCWD). The district's primary drinking water source is Lake Serena. SLCWD serves the roughly 1,038 lots in the Serene Lakes subdivision. Sewage is collected by SLCWD and pumped to the Donner Summit Public Utility District (DSPUD) wastewater treatment plant in Soda Springs. There is no natural gas service on Donner Summit; all gas-fueled appliances run on propane. Electricity is provided by PG&E.",
      },
      {
        question: "Do I need a high-altitude water heater in Serene Lakes?",
        answer:
          "Yes. Serene Lakes sits at 6,800 to 7,200 feet, among the highest elevations in the corridor. At that altitude, reduced oxygen levels significantly affect combustion. Units installed without proper high-altitude adjustment run less efficiently, produce more carbon monoxide, and wear out sooner. Because Serene Lakes homes use propane rather than natural gas, the unit must also be configured for propane fuel with the correct orifice sizing and gas pressure regulation. Water drawn from Lake Serena enters very cold, which increases recovery time and puts additional stress on heating elements and burners.",
      },
      {
        question: "How do I protect my Serene Lakes home's plumbing when I'm away?",
        answer:
          "The most effective approach combines smart leak detection with proper winterization. A Moen Flo system monitors your water supply line continuously and can shut off water automatically if it detects a leak or abnormal flow. For extended vacancies, keep minimum heat on and insulate the vulnerable pipe runs, and verify the propane supply before vacancy so the heating system can hold temperature through the season. At this elevation, freeze risk extends well past the core winter months, with hard freezes possible into late spring and back again in early fall. We can assess your home's specific vulnerabilities and recommend the right combination of protection.",
      },
      {
        question: "Do I need a permit for plumbing work in Serene Lakes?",
        answer:
          "Serene Lakes is in unincorporated Placer County, so plumbing permits are issued through the Placer County Building Services Division. Most replacements and new installations need one. We handle the filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Serene Lakes?",
        answer:
          "First, turn off the main water supply so a cracked pipe cannot flood the cabin when the ice releases. Do not use an open flame or a heat gun. A hair dryer, or towels soaked in warm water, is safe. If you cannot find the frozen section, or a pipe has already burst, call 530-587-0733. We find the failure, thaw only where it is safe, and repair or replace the damaged section.",
      },
      {
        question: "What does winterizing a Serene Lakes home involve?",
        answer:
          "Draining the lines and fixtures, protecting the traps, shutting down the water heater, and dealing with exterior hose bibs, then documenting it so it can be reversed properly in spring. Many Serene Lakes homes are modest cabins with straightforward plumbing, while larger renovated homes need more. Homes on propane should confirm adequate tank levels if the home will not be fully winterized. We walk the house and give you a clear price before any work starts.",
      },
    ],
    popularServices: ["frozen-burst-pipes", "water-heaters", "smart-leak-shutoff", "gas-services"],
  },
  "soda-springs": {
    lede: "The snowiest named place in California: a small community of cabins along Donner Pass Road, all running on propane.",
    overview:
      "Soda Springs is a small unincorporated community in Nevada County, perched on Donner Summit at approximately 6,768 feet. With a year-round population under 100 residents and roughly 131 housing units, it is one of the smallest and most seasonal communities in the corridor, and it holds the distinction of being the snowiest census-designated place in California. Most properties are vacation cabins and second homes, with fewer than half occupied at any given time. A small commercial core along Donner Pass Road holds the Soda Springs General Store and the historic Soda Springs Hotel, and the community sits next to Soda Springs Mountain Resort, Boreal Mountain Resort and Royal Gorge Cross-Country Ski Resort. Propane is the only fuel here; there is no natural gas infrastructure, so heating, water heaters, cooktops and fireplaces all run on propane. Water and sewer service comes from the Donner Summit Public Utility District, which draws drinking water from Lake Angela at 7,280 feet and operates the treatment plant on Sherritt Lane. Permits go through the Nevada County Community Development Agency.",
    sections: [
      {
        heading: "Water heater repair in Soda Springs",
        paragraphs: [
          "Soda Springs holds the distinction of being the snowiest census-designated place in California, and its water heaters feel all of it. The drinking water arrives from Lake Angela at 7,280 feet near the peak of Donner Summit, some of the coldest inlet temperatures in the region, and every gas-fired unit here also has to be configured for propane fuel.",
          "We test the unit, name the actual failure, and tell you plainly whether a repair is worth doing. The modest ski cabins here are straightforward systems, which makes a proper diagnosis fast, but the propane and high-altitude setup still has to be right or the unit burns dirty and dies early.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Water heater installation at 6,768 feet",
        paragraphs: [
          "A replacement at 6,768 feet needs a factory high-altitude model or a proper high-altitude kit, plus propane configuration with the correct orifice sizing and gas pressure regulation. The temperature rise from a Lake Angela inlet is bigger than most homeowners expect, which is why sizing for real use matters.",
          "We check the propane supply and the venting path before recommending anything, and we file the permit through the Nevada County Community Development Agency. That permit path is different from most other communities in the corridor, which still trips up contractors from out of the area.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless systems for Soda Springs ski cabins",
        paragraphs: [
          "Soda Springs cabins see intense use in winter and sit quiet the rest of the year, which is exactly the pattern tankless suits: no standby loss through the empty months, and full output when the house is full of skiers. The catch is that cold inlet water and altitude both cut effective output below the sea-level rating on the box.",
          "We size for the fixture count and flow the cabin really has and confirm the propane supply and pressure can feed the unit. Before winter vacancy, confirm adequate propane tank levels so the heating system can maintain minimum temperatures through the season.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Propane line repair in heavy snow country",
        paragraphs: [
          "Every gas appliance in Soda Springs runs on propane: furnaces, water heaters, cooktops, fireplaces. Storms knock out power at this elevation often enough that the propane heating system doubles as freeze protection, which makes a sound propane line part of the winter plan.",
          "If you smell propane, a sulfur or rotten-egg odor, get out of the cabin, do not touch switches or electronics, and call your propane supplier and 911 from outside. Once it is safe to go back in, call us for the repair. We find the fault, repair or replace the affected section, and pressure-test the line before service goes back on.",
        ],
        link: { label: "More on propane line repair", href: "/services/gas-services/" },
      },
      {
        heading: "Propane line installation in Soda Springs",
        paragraphs: [
          "New runs in Soda Springs usually mean a fireplace, a range or a standby generator. Each needs correct sizing for propane, code-compliant installation, a pressure test, and a supplier who can confirm the tank and regulator can feed the added load.",
          "Soda Springs permits through the Nevada County Community Development Agency, not the Town of Truckee or Placer County. We file it as part of the job and coordinate with your builder or designer when the propane work sits inside a bigger remodel.",
        ],
        link: { label: "More on propane line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath plumbing in Soda Springs cabins",
        paragraphs: [
          "Soda Springs homes are mostly modest cabins with relatively straightforward plumbing, which keeps most repairs and upgrades simple. A fixture swap, a new toilet or a shower valve service is a different scale of job than the estate work lower in the corridor.",
          "We handle faucet, sink and toilet installation and repair, shower and tub valve service, and remodel plumbing when a cabin gets updated. With roughly 131 housing units in the community and fewer than half occupied at any given time, we are used to working on a schedule that fits the owner's visits.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Leak monitoring in an empty Soda Springs cabin",
        paragraphs: [
          "With fewer than half of Soda Springs cabins occupied at any given time, most plumbing here goes unwatched for weeks. A supply line that lets go in an empty cabin does not stop until somebody walks in, which is how a small failure becomes a floor replacement.",
          "A monitor on the main line watches flow, pressure and temperature continuously, shuts the water off on its own when something is wrong, and tells your phone it did. For an owner in residence only during ski season, or a caretaker covering several cabins, it is the most useful thing we install.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipe repair in the snowiest town in California",
        paragraphs: [
          "Extreme cold and long vacancy are the whole story in Soda Springs. The vulnerable points are consistent: exposed runs, exterior hose bibs, and cabins closed up without a proper shutdown. Winter access to a snowed-in cabin is not always straightforward, which makes prevention worth more than the repair.",
          "If a pipe has already gone, shut the main and call 530-587-0733. We locate the failure, thaw only where it is safe, and repair or replace the damaged section. If the same cabin freezes every winter, we find the run that goes cold and change it, because a patch never survives the snowiest season in California.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Plumbing repairs on the DSPUD system",
        paragraphs: [
          "Running toilets, dripping faucets, failing shutoff valves and slow drains are the everyday work, and in Soda Springs they turn up in the modest cabin systems that make up most of the housing here.",
          "Water and sewer service comes from the Donner Summit Public Utility District, which draws drinking water from Lake Angela and operates the treatment plant on Sherritt Lane. When a drain problem turns out to sit at the lateral connection to the DSPUD main rather than inside the cabin, we work out where the boundary falls and help you coordinate the next step.",
        ],
      },
    ],
    headings: {
      emergency: "Burst pipe or propane smell in a snowed-in cabin",
      reviews: "Soda Springs cabin owners on our work",
      popular: "The jobs Soda Springs cabins bring us",
      faqs: "Questions about permits, propane and vacancy",
      cta: "Call for help in Soda Springs",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Soda Springs?",
        answer:
          "Water and sewer service in Soda Springs is provided by Donner Summit Public Utility District (DSPUD). DSPUD draws its water supply from Lake Angela, located near the peak of Donner Summit at 7,280 feet. The district also provides sewer collection and operates the wastewater treatment plant on Sherritt Lane. DSPUD additionally provides sewer treatment for the neighboring Serene Lakes community. There is no natural gas service in Soda Springs; all gas-fueled appliances run on propane. Electricity is provided by PG&E.",
      },
      {
        question: "Do I need a high-altitude water heater in Soda Springs?",
        answer:
          "Yes. Soda Springs sits at approximately 6,768 feet. At that elevation, reduced oxygen levels affect combustion in propane-fired water heaters. Units installed without proper high-altitude adjustment run less efficiently, produce more carbon monoxide, and wear out sooner. Because Soda Springs homes use propane rather than natural gas, the unit must also be configured for propane fuel with the correct orifice sizing and gas pressure regulation. The water supplied by DSPUD from Lake Angela enters at some of the coldest inlet temperatures in the region, which increases recovery time and puts additional stress on heating elements and burners.",
      },
      {
        question: "How do I protect my Soda Springs home's plumbing when I'm away?",
        answer:
          "The most effective approach combines smart leak detection with proper winterization. A Moen Flo system monitors your water supply line continuously and can shut off water automatically if it detects a leak or abnormal flow. For extended vacancies, keep minimum heat on and insulate the vulnerable pipe runs, and verify the propane supply before vacancy so the heating system can hold temperature through the season. Power outages are common at this elevation during heavy storms, so a propane heating system with adequate fuel reserves matters for freeze protection. We can assess your home's specific vulnerabilities and recommend the right combination of protection.",
      },
      {
        question: "Do I need a permit for plumbing work in Soda Springs?",
        answer:
          "Soda Springs is in unincorporated Nevada County, so plumbing permits are issued through the Nevada County Community Development Agency Building Department. This is different from most other communities in the corridor, which permit through the Town of Truckee or Placer County. Most replacements and new installations need one. We handle the filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Soda Springs?",
        answer:
          "Shut the main water supply off first, so a cracked pipe does not flood the home when the ice releases. Do not use an open flame or a heat gun. A hair dryer, or towels soaked in warm water, is the safe approach. If you cannot find the frozen section, or a pipe has already burst, call 530-587-0733. We locate the failure, thaw only where it is safe, and repair or replace the damaged section.",
      },
      {
        question: "What does winterizing a Soda Springs cabin involve?",
        answer:
          "Draining the lines and fixtures, protecting the traps, shutting down the water heater, and dealing with exterior hose bibs, then documenting it so it can be reversed properly in spring. Most Soda Springs cabins are modest with straightforward plumbing, which keeps the scope manageable. Homes on propane should confirm adequate tank levels if the cabin will not be fully winterized. We look at the home and give you a clear price before any work starts.",
      },
    ],
    popularServices: ["frozen-burst-pipes", "water-heaters", "smart-leak-shutoff"],
  },
  "norden": {
    lede: "About 27 year-round residents at 6,900 to 7,000 feet, where Sugar Bowl's Village is the only snowbound pedestrian village in North America.",
    overview:
      "Norden is a very small unincorporated community in Nevada County, located at approximately 6,900 to 7,000 feet on Donner Summit, about 1.5 miles west of Donner Pass and 9 miles west of Truckee. With a year-round population of roughly 27 residents, it is the smallest community in the service area, sitting along the historic first transcontinental railroad route. The community is anchored by Sugar Bowl Resort, one of California's oldest ski areas, and Donner Ski Ranch. Sugar Bowl's Village is the only snowbound pedestrian village in North America, with homes accessible by gondola and snowcat rather than car during winter months. Housing runs from scattered cabins along Donner Pass Road to custom homes within Sugar Bowl's Village neighborhoods. Every home here runs on propane for heating, water heaters, cooktops and fireplaces, since there is no natural gas infrastructure on the summit. Water and sewer service comes from the Donner Summit Public Utility District, which draws drinking water from Lake Angela at 7,280 feet. Permits go through the Nevada County Community Development Agency, and Village homes may face the resort's architectural review for visible modifications.",
    sections: [
      {
        heading: "Water heater repair at Norden's elevation",
        paragraphs: [
          "At 6,900 to 7,000 feet, Norden's water heaters run near the edge of what residential equipment is built for. DSPUD water comes from Lake Angela at 7,280 feet, so the inlet is among the coldest in the region, and every gas-fired unit also has to be set up for propane: correct orifice, correct gas pressure. The cabins along Donner Pass Road and the Village homes both depend on that setup being right.",
          "We test the unit, name the actual failure, and tell you plainly whether a repair is worth doing. The cabins along Donner Pass Road and the custom homes in Sugar Bowl's Village both run propane-fired equipment, and the altitude-plus-propane setup has to be right or the unit burns dirty and dies early.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Water heater installation for propane-only homes",
        paragraphs: [
          "Swapping a water heater in Norden means getting the altitude, the fuel and the inlet temperature right together. The unit needs a high-altitude combustion setup plus propane configuration, correct orifice sizing and gas pressure regulation, and the Lake Angela inlet at 7,280 feet asks for a bigger temperature rise than most homes ever see. Get one of the three wrong and the unit runs dirty or dies early.",
          "We size for the hot water the home actually uses, check the propane supply and the venting path before recommending anything, and file the permit through the Nevada County Community Development Agency. That permit path is different from most other communities in the corridor, which still trips up contractors from out of the area.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless for Norden's long-empty cabins",
        paragraphs: [
          "Norden homes sit empty for long stretches, which is exactly the pattern tankless suits: no standby loss through the vacant months, and full output when the house is full. The sizing has to account for propane fuel and for inlet water far colder than the box rating assumes.",
          "We size for the fixture count and flow the home really has and confirm the propane supply and pressure can feed the unit. Before winter vacancy, confirm adequate propane tank levels so the heating system can maintain minimum temperatures through the season.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Propane line repair when the road is buried",
        paragraphs: [
          "Sugar Bowl's Village is the only snowbound pedestrian village in North America, and in winter its homes are reached by gondola and snowcat rather than car. That changes how a propane problem gets handled: the first response is yours, from outside the home, and the repair crew follows when access allows.",
          "If you smell propane, a distinct sulfur or rotten-egg odor, evacuate the home without touching switches or electronics, and call your propane supplier and 911 from outside. In the Village, that call goes out before anyone can reach the house. Once the area is safe, call us for the repair. We locate the fault, repair or replace the affected section, and pressure-test the line before service goes back on.",
        ],
        link: { label: "More on propane line repair", href: "/services/gas-services/" },
      },
      {
        heading: "Propane line installation for Village homes",
        paragraphs: [
          "In Norden a new run usually serves a fireplace, a range or a standby generator. Each one needs sizing done for propane, a code-compliant installation, a pressure test, and a supplier who can confirm the tank and regulator have the capacity for the added load.",
          "Permits run through the Nevada County Community Development Agency, and homes within Sugar Bowl's Village may also face the resort's architectural review process for visible modifications. We file the permit as part of the job and work within the review requirements so the project does not stall.",
        ],
        link: { label: "More on propane line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath plumbing from cabins to Village homes",
        paragraphs: [
          "Norden's housing runs from simple cabins along the old Highway 40 corridor to larger custom homes in Sugar Bowl's Village, and the plumbing underneath tells the same story. The corridor cabins are the ones where a fixture swap turns into a supply-line conversation.",
          "We handle faucet, sink and toilet installation and repair, shower and tub valve service, and remodel plumbing when a home gets updated. Whether it is a Donner Pass Road cabin or a Village home, we read the system before recommending anything.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Leak monitoring when access needs a gondola",
        paragraphs: [
          "In Sugar Bowl's Village, responding to a leak in person can take significantly longer than in a road-accessible community, because winter access means gondola or snowcat. A supply line that lets go in an empty Village home does not stop until somebody can get there.",
          "A Moen Flo monitor on the main line watches flow, pressure and temperature around the clock, shuts the water off by itself when something is wrong, and tells your phone it did. For a Village owner who cannot just drive over, that automatic shutoff is the most useful thing we install.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipe repair in Norden's harshest winters",
        paragraphs: [
          "Norden takes some of the harshest winter conditions in the region: extreme elevation, heavy snowfall, and long stretches when seasonal homes sit quiet. The vulnerable points are consistent: exposed runs, exterior hose bibs, and cabins closed up without a proper shutdown.",
          "If a pipe has already gone, shut the main and call 530-587-0733. We locate the failure, thaw only where it is safe, and repair or replace the damaged section. When a home freezes in the same spot every winter, we find the run that loses heat and change it. At this elevation, a patched pipe is next winter's leak.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Plumbing repairs on Donner Summit water and sewer",
        paragraphs: [
          "Running toilets, dripping faucets, failing shutoff valves and slow drains are the everyday work, and in Norden they turn up from simple corridor cabins to larger Village homes.",
          "Norden's water and sewer run through the Donner Summit Public Utility District: drinking water from Lake Angela, treatment at the plant on Sherritt Lane over in Soda Springs. If a drain problem turns out to live at the lateral connection to the DSPUD main rather than inside the home, we pin down where the boundary falls and help you line up the next step.",
        ],
      },
    ],
    headings: {
      emergency: "Burst pipe or propane smell near Donner Pass",
      reviews: "What Norden owners say about the work",
      popular: "What we get called for in Norden",
      faqs: "What Norden owners ask before winter",
      cta: "Ask about your Norden cabin",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Norden?",
        answer:
          "Water and sewer service in Norden is provided by Donner Summit Public Utility District (DSPUD). DSPUD draws its water supply from Lake Angela at 7,280 feet and handles water treatment and distribution, plus sewer collection and treatment, for Norden and Soda Springs; it also treats Serene Lakes sewage. The treatment plant sits on Sherritt Lane in Soda Springs. There is no natural gas service in Norden; every gas-fueled appliance runs on propane, and electricity comes from PG&E.",
      },
      {
        question: "Do I need a high-altitude water heater in Norden?",
        answer:
          "Yes. Norden sits at approximately 7,000 feet, among the highest residential elevations in the Truckee-Tahoe corridor. At that altitude, reduced oxygen levels significantly affect combustion in propane-fired water heaters. Units installed without proper high-altitude adjustment run less efficiently, produce more carbon monoxide, and wear out sooner. Because Norden homes use propane rather than natural gas, the unit must also be configured for propane fuel with the correct orifice sizing and gas pressure regulation. The water supplied by DSPUD from Lake Angela enters at some of the coldest inlet temperatures in the region, which increases recovery time and puts additional stress on heating elements and burners.",
      },
      {
        question: "How do I protect my Norden home's plumbing when I'm away?",
        answer:
          "The most effective approach combines smart leak detection with proper winterization. A Moen Flo system monitors your water supply line continuously and can shut off water automatically if it detects a leak or abnormal flow. For extended vacancies, keep minimum heat on and insulate the vulnerable pipe runs, and verify the propane supply before vacancy so the heating system can hold temperature through the season. For homes within Sugar Bowl's Village, where winter access requires the gondola or snowcat, monitoring is especially valuable because responding to a leak in person can take significantly longer than in a road-accessible community. We can assess your home's specific vulnerabilities and recommend the right combination of protection.",
      },
      {
        question: "Do I need a permit for plumbing work in Norden?",
        answer:
          "Norden is in unincorporated Nevada County, so plumbing permits are issued through the Nevada County Community Development Agency Building Department. This is different from most other communities in the corridor, which permit through the Town of Truckee or Placer County. Most replacements and new installations need one. Homes within Sugar Bowl's Village may also face the resort's architectural review process for visible modifications. We handle the filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Norden?",
        answer:
          "Shut the main water supply off first, so a cracked pipe does not flood the home when the ice releases. Do not use an open flame or a heat gun. A hair dryer, or towels soaked in warm water, is the safe approach. If you cannot find the frozen section, or a pipe has already burst, call 530-587-0733. We locate the failure, thaw only where it is safe, and repair or replace the damaged section.",
      },
      {
        question: "What does winterizing a Norden cabin involve?",
        answer:
          "Draining the lines and fixtures, protecting the traps, shutting down the water heater, and dealing with exterior hose bibs, then documenting it so it can be reversed properly in spring. Norden's housing ranges from simple cabins along the old Highway 40 corridor to larger custom homes in Sugar Bowl's Village, and the scope scales accordingly. Homes on propane should confirm adequate tank levels if the home will not be fully winterized. We walk the home and give you a clear price before any work starts.",
      },
    ],
    popularServices: ["frozen-burst-pipes", "smart-leak-shutoff", "water-heaters"],
  },
};

export function getTownContentTownSummit(slug: string): TownContent | undefined {
  return townContentTownSummit[slug];
}
