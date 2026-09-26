// Per-town page content for the lakefront type (audit H11).
//
// Facts come from docs/crawl/town-facts.json and docs/crawl/pages/service-areas__<slug>.txt.
// Nothing is invented and nothing is borrowed from a neighbouring town. Each town was
// briefed first in docs/town-briefs/<slug>.md. Lakefront pages lead with seasonal vacancy,
// rentals, freeze risk on exposed runs, and leak monitoring. One section per topic the
// live page gives its own H2, in live order (PLAN.md section 3d rule 6).
//
// Import shape matches TownContent in ./town-content.ts.

import type { TownContent } from "./town-content";

export const townContentLakefront: Record<string, TownContent> = {
  "kings-beach": {
    lede: "Vintage cabins, condos and hillside homes where Highway 28 meets Highway 267 on the North Shore.",
    overview:
      "Kings Beach sits at about 6,250 feet where Highway 28 meets Highway 267, one of the most densely built communities on the North Shore. The housing stock runs from vintage lakeside cabins and mid-century cottages to condominium developments and newer mountain homes on the hillsides above town, and the mix of full time residents, second home owners and short term rentals means plumbing here cycles between heavy guest use and long quiet stretches. Many systems date to original postwar installations, and the compact lot sizes put plumbing runs through exterior walls more often than in newer neighborhoods. That combination is what we plan around on every visit.",
    sections: [
      {
        heading: "Water heater repair for Kings Beach rental homes",
        paragraphs: [
          "Groundwater from NTPUD arrives cold for much of the year, and at 6,250 feet gas-fired units burn with less oxygen than they were rated for. That shows up as slow recovery and burners that work harder than they should. In rental homes the pattern is worse: heavy use during peak seasons, then weeks of inactivity, which lets sediment settle and anode rods corrode.",
          "Many of the older cottages around the downtown core still have tank units that have been patched rather than assessed. We test the unit, name the actual failure, and tell you honestly whether a repair is worth doing or whether you are about to pay twice.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Water heater installs in tight cottage footprints",
        paragraphs: [
          "Replacing a unit in Kings Beach means accounting for elevation, cold inlet water, fuel type and the tight mechanical footprints of original cottages and condominiums. A gas-fired unit at this altitude needs a high-altitude kit or a factory high-altitude model to burn safely, and the placement options are narrower than in a modern build.",
          "We evaluate the home's hot water demand, confirm Southwest Gas service or the electric setup, check the venting path before recommending anything, and file the permit through the Placer County Building Services Division. Finishes get protected and performance gets verified before we leave.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless for Kings Beach's seasonal homes",
        paragraphs: [
          "Tankless suits homes that sit empty between visits because there is no standby loss while nobody is there, and it suits cabins and condos where a tank would eat storage space. The catch is that cold inlet water and altitude both cut effective output below the sea-level rating on the box.",
          "We size for the fixture count and flow the house really has, confirm the gas supply can feed the unit, and test output at several draw points before calling it done.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair near Brockway's oldest homes",
        paragraphs: [
          "Southwest Gas serves Kings Beach, feeding furnaces, water heaters, fireplaces, cooktops and dryers. In older homes, original gas piping and connections have been in service for decades. The Brockway neighborhood and the properties near the state line hold some of the oldest housing stock on the North Shore, where corrosion, loose fittings and deteriorating flex lines are common.",
          "If you smell gas, leave the house and call Southwest Gas first on 1-877-860-6020, then call us for the repair. We locate the fault, repair or replace the affected section, and pressure-test the line before service goes back on.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "New gas lines for remodels and fuel conversions",
        paragraphs: [
          "New runs in Kings Beach usually mean a fireplace, a range, a kitchen remodel or a conversion from electric to gas. Each needs correct sizing, code-compliant installation, a pressure test, and coordination with Southwest Gas when meter capacity is involved.",
          "Permits go through Placer County, and we file them as part of the job. When the gas work sits inside a bigger renovation we coordinate with your general contractor or designer so the plumbing lands where the plans say it should.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath plumbing in vintage cabins",
        paragraphs: [
          "The range here is wide: compact cabins with single bathrooms and galley kitchens on one end, larger remodeled homes and newer construction on the hillsides above town on the other. Older homes in the downtown core and along the lakefront often have outdated drain configurations and galvanized supply lines that only surface as problems mid-renovation.",
          "We work with homeowners, designers and general contractors on everything from a faucet replacement to full rough-in during a gut remodel. Surfaces get protected during installation, every connection gets tested, and the workspace is left clean.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Moen Flo leak monitoring for Kings Beach rentals",
        paragraphs: [
          "Kings Beach has a high proportion of second homes and short-term rentals that spend time unmonitored between visits or turnovers. A slow leak behind a wall or a supply line failure during a cold snap can go undetected until the damage has spread, and in older homes with aging supply lines the risk compounds.",
          "Moen Flo installs on the main water supply line and monitors flow, pressure and temperature continuously. It can shut the water off on its own when something is wrong and tells your phone it did, which is what an owner managing the property remotely, or through a property management company, actually needs.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen and burst pipe repair on compact lots",
        paragraphs: [
          "Heavy snowfall and sustained freezing temperatures are routine here. The vulnerable points are consistent: exposed runs in crawl spaces, exterior walls and uninsulated areas, and the compact lots and older construction across much of Kings Beach mean plumbing through exterior walls and unheated spaces is common. Homes closed up for portions of winter without proper winterization are the highest risk.",
          "If a pipe has already gone, shut the main and call. We locate the failure with targeted diagnostics, thaw only where it is safe, and repair or replace the damaged section. For a house that freezes in the same spot every winter, insulation improvements and a monitoring setup stop the annual repeat.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Everyday repairs across Kings Beach neighborhoods",
        paragraphs: [
          "Running toilets, dripping faucets, failing shutoff valves and slow drains are the everyday work, and in Kings Beach they turn up in systems ranging from original postwar plumbing in vintage cabins to modern PEX in recently built or remodeled homes.",
          "Sewer collection here is managed by NTPUD, with regional treatment by the Tahoe-Truckee Sanitation Agency. When a drain problem turns out to sit at the lateral connection to the NTPUD main rather than inside the house, we work out where the boundary falls and help you coordinate the next step instead of digging first.",
        ],
      },
    ],
    headings: {
      emergency: "Burst pipe or gas smell on the North Shore",
      reviews: "What Kings Beach owners and managers say",
      popular: "The work Kings Beach calls us for",
      faqs: "Rentals, winter and water questions",
      cta: "Talk to a Kings Beach plumber",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Kings Beach?",
        answer:
          "Water and sewer collection in Kings Beach is provided by North Tahoe Public Utility District (NTPUD), which manages water distribution and sewer collection across the North Shore communities including Kings Beach, Tahoe Vista, Carnelian Bay and Agate Bay. Regional wastewater treatment is handled by the Tahoe-Truckee Sanitation Agency (TTSA). Natural gas is provided by Southwest Gas. Electricity in the Kings Beach area is provided by Liberty Utilities.",
      },
      {
        question: "Do I need a high-altitude water heater in Kings Beach?",
        answer:
          "Yes. Kings Beach sits at approximately 6,250 feet. At that elevation, reduced oxygen levels affect combustion in gas-fired water heaters. Units installed without proper high-altitude adjustments run less efficiently, produce more carbon monoxide, and wear out faster. Most manufacturers offer factory-configured high-altitude models or conversion kits. The cold groundwater supplied by NTPUD adds further stress on heating elements and burners, requiring a larger temperature rise to reach standard output.",
      },
      {
        question: "How do I protect my Kings Beach home's plumbing when I'm away?",
        answer:
          "The most effective approach combines smart leak detection with proper winterization. A Moen Flo system monitors your water supply line continuously and can shut off water automatically if it detects a leak or abnormal flow. For extended vacancies, maintaining minimum heat levels and insulating vulnerable pipe runs reduces freeze risk. Many Kings Beach homes are used as short-term rentals, which means plumbing cycles between heavy guest use and periods of vacancy, and continuous monitoring protects regardless of occupancy pattern.",
      },
      {
        question: "Do I need a permit for plumbing work in Kings Beach?",
        answer:
          "Kings Beach is in unincorporated Placer County, so plumbing permits are issued through the Placer County Building Services Division (Tahoe office). Most plumbing replacements and new installations require a permit. We handle permit filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Kings Beach?",
        answer:
          "Turn off the main water supply first, so that if a pipe has already cracked it does not flood when the ice releases. Do not use an open flame or a heat gun. Gentle heat from a hair dryer, or towels soaked in warm water, is safe. If you cannot find the frozen section, or a pipe has already burst, call 530-587-0733. We locate the failure, thaw only where it is safe, and repair or replace the damaged section.",
      },
      {
        question: "What does winterizing a Kings Beach home involve?",
        answer:
          "Draining the lines and fixtures, protecting the traps, shutting down the water heater, and dealing with exterior hose bibs, then documenting it so it can be reversed properly in spring. For short-term rental properties, owners often prefer continuous monitoring over full seasonal shutdown to keep booking flexibility. We look at the house and give you a clear price before any work starts.",
      },
    ],
    popularServices: ["water-heaters", "kitchen-bath-plumbing", "smart-leak-shutoff", "frozen-burst-pipes"],
  },
  "tahoe-vista": {
    lede: "Lakefront homes, highway cabins and vacation condos between Carnelian Bay and Kings Beach.",
    overview:
      "Tahoe Vista sits at roughly 6,250 to 6,300 feet on the North Shore between Carnelian Bay to the west and Kings Beach to the east. The community gets more southern sun exposure than other North Shore neighborhoods, though winter conditions are still demanding. Lakefront homes, vintage cabins along the highway corridor, hillside residences with lake views, and condominium developments built for vacation ownership make up the housing stock, and a significant share are second homes or short-term rentals that sit empty between seasons. Plumbing here has to survive both the busy weeks and the long quiet ones.",
    sections: [
      {
        heading: "Water heater repair for Tahoe Vista vacation condos",
        paragraphs: [
          "Cold groundwater from NTPUD and 6,250 to 6,300 feet of elevation mean every water heater in Tahoe Vista works through a bigger temperature rise than its rating assumes. In vacation condos and second homes the pattern is distinctive: heavy seasonal use that strains the tank, then months of inactivity that let sediment settle and corrosion take hold.",
          "We diagnose before recommending anything. A failing thermocouple, sediment buildup, a corroded anode rod and a unit approaching end of life each get a different answer, and we present the options plainly and confirm performance before leaving.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Altitude adjusted water heater installs",
        paragraphs: [
          "At Tahoe Vista's elevation, gas-fired units require high-altitude kits or factory-configured models for safe and efficient combustion. Fitting a sea-level unit here is how you get a short service life and a carbon monoxide problem.",
          "We size for the hot water the house actually uses, check the fuel source and the venting path before recommending anything, and file the permit through the Placer County Building Services Division. The installation is handled cleanly, finishes are protected, and performance is verified before closeout.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless for homes that sit empty",
        paragraphs: [
          "Tankless units are well suited to Tahoe Vista's vacation and second-home use patterns. They eliminate standby heat loss during weeks of vacancy and deliver hot water on demand when the home is occupied. At this elevation, cold inlet water and altitude-adjusted combustion reduce effective output below sea-level ratings, so sizing has to be done for the conditions, not the box.",
          "We size the unit for the home's actual fixture count and flow demands at altitude, confirm gas supply capacity, and test output across multiple draw points before the job is complete.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair for Southwest Gas customers",
        paragraphs: [
          "Southwest Gas provides natural gas service throughout Tahoe Vista, feeding furnaces, water heaters, fireplaces, cooktops and dryers. In older homes, original gas piping and connections may have been in service for decades and are subject to corrosion, loose fittings and deteriorating flex lines.",
          "If you smell gas, leave the house and call Southwest Gas first on 1-877-860-6020, then call us for the repair. We find the fault, repair or replace the affected section, and pressure-test the line before service goes back on.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "New gas lines for fireplaces and ranges",
        paragraphs: [
          "In Tahoe Vista, new gas piping usually goes in for a fireplace, a range or cooktop upgrade, or a remodel that moves fixtures. The run has to be sized for the load, installed to code, pressure tested, and matched to meter capacity in coordination with Southwest Gas.",
          "We handle gas line installation from planning through final pressure testing, file permits through Placer County, and coordinate with general contractors and designers when the work is part of a larger renovation.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath plumbing in highway cabins",
        paragraphs: [
          "Tahoe Vista's vintage cabins along the highway corridor, hillside residences and vacation condos each ask for different work: simple fixture replacements in the condos, full rough-in during gut remodels in the older cabins. Older homes here often have outdated drain configurations and galvanized supply lines that surface as issues during renovation.",
          "We work with homeowners, designers and general contractors to install plumbing that fits the home's layout, water pressure conditions and finish standards, and we protect surrounding surfaces during installation.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Leak detection for homes empty between seasons",
        paragraphs: [
          "A slow leak behind a wall, or a supply line that lets go during a cold snap, can run for weeks in a house nobody walks through. By the time anyone visits, the damage has traveled from a cabinet to a subfloor.",
          "A monitor on the main water supply line watches flow, pressure and temperature continuously and can shut the water off on its own when something is wrong. For an owner managing the property remotely, the value is simple: a phone alert instead of a spring surprise.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipes in Tahoe Vista's quiet months",
        paragraphs: [
          "The snowfall is heavy and the freezes are sustained, and the houses most exposed are the ones sitting closed up between seasons. Pipes in crawl spaces, exterior walls and uninsulated runs freeze first when a cold snap lands on an unwinterized home.",
          "Our first step is diagnostics that pinpoint the failure, not guesswork that opens walls. From there it is controlled thawing where safe and a clean repair or replacement of the damaged section, then insulation and monitoring options sized to how often the house sits empty.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Plumbing repairs and NTPUD lateral work",
        paragraphs: [
          "Running toilets, dripping faucets, failing shutoff valves and slow drains are the everyday work, and in Tahoe Vista they turn up across the full range of the housing stock, from vintage highway-corridor cabins to newer hillside construction.",
          "Sewer collection is managed by NTPUD, with regional treatment by the Tahoe-Truckee Sanitation Agency. If a drain or sewer issue involves the lateral connection to the NTPUD system, we diagnose where the problem sits and coordinate the next steps with you.",
        ],
      },
    ],
    headings: {
      emergency: "No water, a leak, or a gas smell now",
      reviews: "What Tahoe Vista owners tell us",
      popular: "Jobs we do most in Tahoe Vista",
      faqs: "Permits, altitude and second home questions",
      cta: "Call a Tahoe Vista plumber",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Tahoe Vista?",
        answer:
          "NTPUD handles water distribution and sewer collection for Tahoe Vista, as it does for the other North Shore communities in its service area: Kings Beach, Carnelian Bay and Agate Bay. Wastewater then goes to the Tahoe-Truckee Sanitation Agency (TTSA) for regional treatment. Gas comes from Southwest Gas and electric service in the area comes from Liberty Utilities.",
      },
      {
        question: "Do I need a high-altitude water heater in Tahoe Vista?",
        answer:
          "The extra southern sun Tahoe Vista gets does not change the combustion math. At roughly 6,250 to 6,300 feet, gas-fired water heaters burn with thinner air than their sea-level ratings assume, so a unit installed without a high-altitude kit or a factory-configured model wastes fuel, produces more carbon monoxide and wears out early. On top of that, the cold groundwater NTPUD supplies forces a larger temperature rise than most equipment expects, and in vacation condos and second homes the idle stretches between seasons let scale and corrosion compound the altitude stress.",
      },
      {
        question: "How do I protect my Tahoe Vista home's plumbing when I'm away?",
        answer:
          "Start with leak detection on the main water supply line. A Moen Flo system watches flow, pressure and temperature around the clock and shuts the water off on its own when readings go wrong, which is the main line of defense for an owner who visits a few times a year. Pair it with minimum heat and winterized hose bibs before you close up. The danger window is the shoulder season, when nights can freeze while the condo sits empty between ski season and summer use.",
      },
      {
        question: "Do I need a permit for plumbing work in Tahoe Vista?",
        answer:
          "Plumbing permits here come from the Placer County Building Services Division (Tahoe office), since Tahoe Vista is in unincorporated Placer County. Most replacements and new installations need one, and we file it as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Tahoe Vista?",
        answer:
          "Shut off the main first. If a pipe has already cracked, that is what keeps the house from flooding when the ice releases. Never use an open flame or a heat gun to thaw a pipe. A hair dryer, a space heater aimed at the suspected area, or towels soaked in warm water are safe. If you cannot locate the frozen section, or a pipe has already burst, call 530-587-0733. We find the failure point, thaw only where it is safe, and repair or replace the damaged section.",
      },
      {
        question: "What does winterizing a Tahoe Vista home involve?",
        answer:
          "Draining the lines and fixtures, protecting the traps, shutting down the water heater, and dealing with exterior hose bibs, then documenting it so it can be reversed properly in spring. For second homes that sit empty for long stretches, continuous monitoring with a smart shutoff can be a better fit than a full seasonal shutdown. We look at the house and give you a clear price before any work starts.",
      },
    ],
    popularServices: ["smart-leak-shutoff", "water-heaters", "frozen-burst-pipes", "kitchen-bath-plumbing"],
  },
  "carnelian-bay": {
    lede: "Quiet lakefront streets from modest cabins to shoreline estates, east of Tahoe City.",
    overview:
      "Carnelian Bay sits at about 6,325 feet on the North Shore between Tahoe City to the west and Tahoe Vista to the east, named for the semi-precious stones found along its shoreline. Several distinct subdivisions make up the area, and the housing runs from modest vintage cabins to lakefront estates. Most homes are second homes, and plumbing here must handle months of vacancy alongside periods of heavy family use. That rhythm, quiet all spring and full in July, is what shapes the work.",
    sections: [
      {
        heading: "Water heater repair for Carnelian Bay second homes",
        paragraphs: [
          "At 6,325 feet, the highest lakefront elevation on the North Shore, gas-fired water heaters burn with noticeably less oxygen than their sea-level ratings assume, and NTPUD's cold groundwater adds a larger temperature rise on top of that. Second homes concentrate the wear: months of family use that push a unit hard, then months of sitting that let corrosion take hold.",
          "We diagnose before recommending anything, whether it is a failing thermocouple, sediment buildup, a corroded anode rod or a unit approaching end of life. The options are presented plainly and performance is confirmed before we leave.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Installing water heaters at 6,325 feet",
        paragraphs: [
          "Replacing a water heater in Carnelian Bay means accounting for elevation, cold inlet temperatures, fuel type and the venting constraints of the home. At this elevation, gas-fired units require high-altitude kits or factory-configured models for safe and efficient combustion.",
          "We evaluate the home's hot water demand, fuel source and venting path before recommending a replacement, file the permit through the Placer County Building Services Division, and handle the installation cleanly with finishes protected and performance verified.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless for the shoulder season gap",
        paragraphs: [
          "Tankless units are a practical fit for Carnelian Bay's second-home use pattern. They eliminate standby heat loss during months of vacancy and deliver hot water on demand when the family arrives. The shoulder seasons carry their own logic: temperatures can still drop below freezing while homes sit vacant between ski season and summer use, so a system with no tank sitting idle is simply less exposed.",
          "At this elevation, cold inlet water and altitude-adjusted combustion reduce effective output below sea-level ratings. We size for the fixture count and flow the house really has and test output across multiple draw points before the job is complete.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair in mountain winter cycles",
        paragraphs: [
          "Southwest Gas provides natural gas service throughout Carnelian Bay. Gas lines here supply furnaces, water heaters, fireplaces, cooktops and dryers, and decades of freeze and thaw cycling loosen connections, corrode fittings and tire out flex lines.",
          "If you smell gas or suspect a leak, ventilate the area and call Southwest Gas first on 1-877-860-6020, then contact us for the repair. We locate the issue, repair or replace the affected section, and pressure-test the line before restoring service.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "Gas line sizing for remodels and fuel switches",
        paragraphs: [
          "Carnelian Bay gas additions usually tie into a remodel: a fireplace, a new range or cooktop, an appliance fuel switch. We size the run for the total load, install to code, pressure test, and work with Southwest Gas on meter capacity where it is needed.",
          "Gas line installation runs from planning through final pressure testing, with permits filed through Placer County. When the work sits inside a larger renovation we coordinate with the general contractor and designer.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath plumbing for lake family homes",
        paragraphs: [
          "Carnelian Bay's subdivisions range from modest vintage cabins to lakefront estates, and the plumbing work matches that range: simple fixture replacements in the cabins, full rough-in during gut remodels in the larger homes. Older homes often have outdated drain configurations and galvanized supply lines that surface as issues during renovation.",
          "Working with homeowners, designers and general contractors, we install plumbing matched to the home's layout, water pressure and finish standards. Surrounding surfaces are protected during the work and every connection is tested.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Moen Flo monitoring between seasons",
        paragraphs: [
          "Between ski season and summer, many Carnelian Bay homes go weeks without anyone inside. A leak behind a wall or a supply failure in a cold snap can run that whole time, and a distant owner learns about it from a utility bill or a neighbor's call.",
          "Moen Flo goes on the main water supply line and watches flow, pressure and temperature around the clock. It can shut the water off automatically when something is wrong and sends real-time alerts to your phone, which is exactly the coverage a house needs when nobody is in it.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen and burst pipe repair in Carnelian Bay",
        paragraphs: [
          "At 6,325 feet the winter norm is heavy snow and long freezes, and an unoccupied second home is the riskiest house on the street. The first pipes to freeze are the exposed runs in crawl spaces, exterior walls and uninsulated areas, especially in a house closed up without proper winterization.",
          "We answer with targeted diagnostics to locate the failure point, controlled thawing where it can be done safely, and clean repair or replacement of the damaged sections. Where freeze risk keeps recurring, we look at insulation improvements and monitoring options.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Drains, sewers and NTPUD connections",
        paragraphs: [
          "Running toilets, dripping faucets, failing shutoff valves and slow drains are the everyday work, and in Carnelian Bay they turn up across housing that spans modest cabins to lakefront estates.",
          "Sewer collection is managed by NTPUD, with regional treatment by the Tahoe-Truckee Sanitation Agency. When a drain or sewer problem turns out to sit at the lateral connection to the NTPUD main rather than inside the house, we work out where the boundary falls and help you coordinate the next step.",
        ],
      },
    ],
    headings: {
      emergency: "A burst pipe or a leak that cannot wait",
      reviews: "What Carnelian Bay homeowners say",
      popular: "Work Carnelian Bay asks for most",
      faqs: "What owners ask before calling",
      cta: "Reach a Carnelian Bay plumber",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Carnelian Bay?",
        answer:
          "Water and sewer collection in Carnelian Bay is provided by North Tahoe Public Utility District (NTPUD), which manages water distribution and sewer collection across the North Shore communities it serves, including Kings Beach, Tahoe Vista, Carnelian Bay and Agate Bay. Regional wastewater treatment is handled by the Tahoe-Truckee Sanitation Agency (TTSA). Natural gas is provided by Southwest Gas. Electricity in the Carnelian Bay area is provided by Liberty Utilities.",
      },
      {
        question: "Do I need a high-altitude water heater in Carnelian Bay?",
        answer:
          "Yes, and Carnelian Bay makes the case clearly at about 6,325 feet, the highest lakefront elevation on the North Shore. Thinner air derates gas-fired combustion, so an unadjusted unit burns dirtier, heats less efficiently and wears out sooner. The cold inlet water from NTPUD compounds it with a larger temperature rise, and the second-home cycle of hard family use followed by months of sitting gives corrosion every opening it needs.",
      },
      {
        question: "How do I protect my Carnelian Bay home's plumbing when I'm away?",
        answer:
          "Continuous monitoring is the backbone. A Moen Flo system on the main supply line watches flow, pressure and temperature at all hours and shuts the water off by itself when something is wrong. Back that up with minimum heat and insulated runs before the vacancy. The shoulder seasons are the real test, when freezing nights arrive while the house sits unused between ski season and summer.",
      },
      {
        question: "Do I need a permit for plumbing work in Carnelian Bay?",
        answer:
          "Plumbing permits here come from the Placer County Building Services Division (Tahoe office), since Carnelian Bay is in unincorporated Placer County. Most replacements and new installations need one, and we file it as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Carnelian Bay?",
        answer:
          "The first move is the main shutoff, so a cracked pipe does not flood the house as the ice releases. Do not thaw pipes with an open flame or a heat gun. Safe options are a hair dryer, a space heater directed at the area, or towels soaked in warm water. If the frozen section will not reveal itself, or a pipe has already burst, call 530-587-0733. We locate the failure, thaw where it is safe to do so, and repair or replace what is damaged.",
      },
      {
        question: "What does winterizing a Carnelian Bay home involve?",
        answer:
          "Draining the lines and fixtures, protecting the traps, shutting down the water heater, and dealing with exterior hose bibs, then documenting it so it can be reversed properly in spring. Second homes that sit empty for long stretches often do better with continuous monitoring plus minimum heat than with a full seasonal shutdown. We look at the house and give you a clear price before any work starts.",
      },
    ],
    popularServices: ["water-heaters", "kitchen-bath-plumbing", "smart-leak-shutoff"],
  },
  "dollar-point": {
    lede: "A lake view peninsula of about 569 homes, 2.5 miles east of Tahoe City.",
    overview:
      "Dollar Point is a residential peninsula of approximately 569 single family properties at roughly 6,480 feet on the northwest shore, about 2.5 miles east of Tahoe City along Highway 28. An optional homeowners association offers lakefront amenities including a private beach, pier, pool and tennis courts. Homes range from classic Tahoe cabins to lakefront estates, many of them second homes, and proximity to Tahoe XC and several ski resorts keeps the community busy in both winter and summer. The utility story is unusual: water and sewer come from TCPUD here, not NTPUD, even though the community sits near the boundary between the two districts at Dollar Hill.",
    sections: [
      {
        heading: "Water heater repair at Dollar Point",
        paragraphs: [
          "At roughly 6,480 feet, gas-fired water heaters burn with less oxygen than their sea-level ratings assume, and cold groundwater from TCPUD adds a larger temperature rise on top of that. Dollar Point homes tend to be larger than average for the North Shore, with multiple bathrooms and more extensive plumbing systems that put real demand on a unit.",
          "We start with diagnostics, not a sales pitch. Thermocouple failure, sediment buildup, a corroded anode rod and end-of-life wear each point to a different answer, and we lay out the options plainly and confirm performance before leaving.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Water heater installs for larger estate homes",
        paragraphs: [
          "Replacing a water heater on the peninsula means accounting for elevation, cold inlet water, fuel type, venting constraints, and the layout of a larger-than-average home. Gas-fired units at this elevation require high-altitude kits or factory-configured models for safe and efficient combustion.",
          "We work out the hot water demand, the fuel source and the venting route before recommending a replacement, file through the Placer County Building Services Division, and complete the install cleanly with finishes protected and output verified.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless for two season second homes",
        paragraphs: [
          "Tankless units are well suited to Dollar Point's second-home use pattern and its popularity in both winter and summer. They eliminate standby heat loss during weeks of vacancy and deliver hot water on demand when the family arrives for ski season or the beach season.",
          "At this elevation, cold inlet water and altitude-adjusted combustion reduce effective output below sea-level ratings. We size for the home's actual fixture count and flow demands, confirm gas supply capacity, and test output across multiple draw points before the job is complete.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair on the peninsula",
        paragraphs: [
          "Southwest Gas provides natural gas service throughout Dollar Point, feeding furnaces, water heaters, fireplaces, cooktops and dryers. In the classic Tahoe cabins, original gas piping and connections may have been in service for decades and are subject to corrosion, loose fittings and deteriorating flex lines.",
          "If you smell gas, leave the house and call Southwest Gas first on 1-877-860-6020, then call us for the repair. We find the fault, repair or replace the affected section, and pressure-test the line before service goes back on.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "New gas lines for patios, pools and fireplaces",
        paragraphs: [
          "Outdoor gas is the signature job on the peninsula: patio heaters, pool equipment, a fireplace, a grill stub. The community's outdoor life runs on these, and each run still needs proper sizing, code-compliant installation, a pressure test, and Southwest Gas coordination where meter capacity is in play.",
          "We handle gas line installation from planning through final pressure testing, file permits through Placer County, and coordinate with general contractors and designers when the work is part of a larger project.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath plumbing for Dollar Point remodels",
        paragraphs: [
          "The peninsula's housing runs from classic Tahoe cabins to lakefront estates, and remodels here span the same range: simple fixture replacements in the cabins, full rough-in work in the larger homes. Older properties often have outdated drain configurations and galvanized supply lines that surface as issues during renovation.",
          "We team with homeowners, designers and general contractors to put in plumbing that fits the home's layout, water pressure and finish standards, with surrounding surfaces protected during installation and every connection tested.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Leak monitoring for empty second homes",
        paragraphs: [
          "Many Dollar Point homes sit empty for weeks at a stretch, and in a larger house a leak has more rooms to reach before anyone notices. A slow failure behind a wall or a line that lets go in a cold snap can run unnoticed until the damage is spread across the lower level.",
          "A monitor on the main water supply line watches flow, pressure and temperature continuously and can shut the water off on its own when something is wrong, with real-time alerts to your phone. For an owner managing from a distance, it is the practical answer to the empty-house problem.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipe repair in Dollar Point winters",
        paragraphs: [
          "Winter on the peninsula means heavy snow and sustained freezes, and the houses closed up without winterization take the worst of it. Crawl space runs, exterior walls and uninsulated areas are where the first failures show up.",
          "Our response is targeted diagnostics to find the failure point, controlled thawing where possible, and clean repair or replacement of what is damaged. For homes that freeze repeatedly, we assess insulation upgrades and monitoring.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Everyday repairs on the TCPUD system",
        paragraphs: [
          "Running toilets, dripping faucets, failing shutoff valves and slow drains are the everyday work, and on the peninsula they turn up in systems ranging from older cabin plumbing to modern PEX in the larger homes.",
          "Sewer collection here is managed by TCPUD, with regional treatment by the Tahoe-Truckee Sanitation Agency. If a drain or sewer issue involves the lateral connection to the TCPUD system rather than the house itself, we diagnose where the problem sits and coordinate the next steps with you.",
        ],
      },
    ],
    headings: {
      emergency: "A plumbing emergency on the peninsula",
      reviews: "What Dollar Point owners say",
      popular: "Jobs Dollar Point calls about most",
      faqs: "Utilities, permits and winter questions",
      cta: "Call a Dollar Point plumber",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Dollar Point?",
        answer:
          "Water and sewer collection in Dollar Point is provided by Tahoe City Public Utility District (TCPUD). Although Dollar Point sits near the boundary between TCPUD and North Tahoe Public Utility District (NTPUD) at Dollar Hill, Dollar Point falls within the TCPUD service area. Regional wastewater treatment is handled by the Tahoe-Truckee Sanitation Agency (TTSA). Natural gas is provided by Southwest Gas. Electricity in the Dollar Point area is provided by Liberty Utilities.",
      },
      {
        question: "Do I need a high-altitude water heater in Dollar Point?",
        answer:
          "Yes. Dollar Point sits near 6,480 feet, and the peninsula's larger homes make the derating harder to ignore: more bathrooms, longer pipe runs and simultaneous draws all stacked on thinner-air combustion. A unit installed without a high-altitude kit or factory-configured model burns less efficiently, produces more carbon monoxide and wears out faster, and the cold groundwater TCPUD supplies forces a bigger temperature rise than the rating assumes.",
      },
      {
        question: "How do I protect my Dollar Point home's plumbing when I'm away?",
        answer:
          "With larger homes and longer runs, monitoring earns its keep here. A Moen Flo system on the main line watches flow, pressure and temperature continuously and shuts the water off automatically when something is wrong. For the weeks the house sits empty, keep minimum heat on and pipe runs insulated, and pay attention to the shoulder season, when freezes arrive while the house is vacant between ski season and beach season.",
      },
      {
        question: "Do I need a permit for plumbing work in Dollar Point?",
        answer:
          "Dollar Point is in unincorporated Placer County, so plumbing permits are issued through the Placer County Building Services Division (Tahoe office). Most plumbing replacements and new installations require a permit. We handle permit filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Dollar Point?",
        answer:
          "Turn off the main water supply first, so that if a pipe has already cracked it does not flood when the ice releases. Do not use an open flame or a heat gun. Gentle heat from a hair dryer, or towels soaked in warm water, is safe. If you cannot find the frozen section, or a pipe has already burst, call 530-587-0733. We locate the failure, thaw only where it is safe, and repair or replace the damaged section.",
      },
      {
        question: "What does winterizing a Dollar Point home involve?",
        answer:
          "Draining the lines and fixtures, protecting the traps, shutting down the water heater, and dealing with exterior hose bibs, then documenting it so it can be reversed properly in spring. Dollar Point homes tend to be larger than average for the North Shore, with multiple bathrooms and more extensive plumbing, so the scope scales with the house. We look at the house and give you a clear price before any work starts.",
      },
    ],
    popularServices: ["smart-leak-shutoff", "water-heaters", "kitchen-bath-plumbing", "appliance-installation"],
  },
  "agate-bay": {
    lede: "A 1950s subdivision in the North Shore banana belt, between Carnelian Bay and Kings Beach.",
    overview:
      "Agate Bay is a residential subdivision of approximately 650 properties within the broader Carnelian Bay community, at roughly 6,250 to 6,300 feet between Carnelian Bay and Kings Beach. Developed in the 1950s, the neighborhood has wider streets, level access and good sun exposure, and a favorable microclimate sometimes called the banana belt of the North Shore. The utility story is one of a kind: water comes from the Agate Bay Water Company, a private CPUC-regulated utility that has served the community for over 70 years, while sewer collection runs through NTPUD. Many properties are second homes and short-term rentals, often managed from a distance.",
    sections: [
      {
        heading: "Water heater repair in Agate Bay's banana belt",
        paragraphs: [
          "The sunnier microclimate does not change the fundamentals: cold groundwater from the Agate Bay Water Company and 6,250 to 6,300 feet of elevation mean every water heater works through a bigger temperature rise than its rating assumes. Many of the 1950s cabins still have tank units that have been patched rather than assessed, and rental turnover adds heavy-use cycles between vacancies.",
          "Diagnosis comes first. A failing thermocouple, sediment buildup, a corroded anode rod and a unit nearing end of life each get a different recommendation, presented plainly, with performance confirmed before we leave.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Altitude adjusted installs at 6,300 feet",
        paragraphs: [
          "At Agate Bay's elevation, gas-fired units require high-altitude kits or factory-configured models for safe and efficient combustion. Replacing a water heater here means accounting for elevation, cold inlet water, fuel type and the venting constraints of a 1950s cabin or a newer modern home.",
          "Before recommending anything we check hot water demand, the fuel source and the venting path, then file the permit through the Placer County Building Services Division. The install is done cleanly, finishes are protected, and performance is verified before closeout.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless for rental homes and vintage cabins",
        paragraphs: [
          "Tankless units are a practical fit for Agate Bay's vacation and second-home use patterns. They eliminate standby heat loss during periods of vacancy and deliver hot water on demand when the home is occupied. In the compact 1950s cabins, a properly sized tankless unit can also free up storage area.",
          "At this elevation, cold inlet water and altitude-adjusted combustion reduce effective output below sea-level ratings. Sizing is done for the fixture count and flow the home really has at altitude, the gas supply is confirmed, and output is tested across multiple draw points before the job is complete.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair on older Agate Bay piping",
        paragraphs: [
          "Southwest Gas provides natural gas service throughout Agate Bay. Gas piping installed in the 1950s and the decades since has been in service a long time, and it is subject to corrosion, loose fittings and deteriorating flex lines.",
          "If you smell gas or suspect a leak, ventilate the area and call Southwest Gas first on 1-877-860-6020, then contact us for the repair. We locate the issue, repair or replace the affected section, and pressure-test the line before restoring service.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "Adding gas for a fireplace or kitchen remodel",
        paragraphs: [
          "In Agate Bay, new gas usually arrives with a fireplace or a kitchen update: a range, a cooktop, an appliance switch. We size the run for the load, install it to code, pressure test, and coordinate meter capacity with Southwest Gas.",
          "Gas line installation is handled from planning through final pressure testing. Permits are filed through Placer County, and we coordinate with general contractors and designers when the work belongs to a larger renovation.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath plumbing in Agate Bay",
        paragraphs: [
          "Agate Bay pairs classic 1950s Tahoe cabins with newer modern homes, and the plumbing work spans both: simple fixture replacements in the cabins, full rough-in during gut remodels in the larger homes. Older homes here often have outdated drain configurations and galvanized supply lines that surface as issues during renovation.",
          "We work with homeowners, designers and general contractors on plumbing that fits the home's layout, water pressure conditions and finish standards. Surfaces around the work are protected and every connection gets tested.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Leak detection for remotely managed homes",
        paragraphs: [
          "Many Agate Bay properties are short-term rentals managed remotely or through a property management company. A slow leak behind a wall or a supply line failure during a cold snap can go undetected between turnovers, and an owner managing from a distance finds out when the guest does.",
          "Moen Flo installs on the main water supply line and monitors flow, pressure and temperature continuously, with automatic shutoff when something is wrong and real-time alerts to your phone. The freeze protection feature watches for temperature drops that could put pipes at risk during vacancy periods.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Freeze protection for 1950s cabins",
        paragraphs: [
          "The banana belt microclimate softens the snowfall but not the freezes. Exposed pipe runs in crawl spaces, exterior walls and uninsulated areas are the most vulnerable, and 1950s construction put a lot of plumbing in exactly those places. Homes closed up for portions of winter without proper winterization are at the highest risk.",
          "We locate the failure point with targeted diagnostics, thaw in a controlled way where possible, and repair or replace the damaged sections cleanly. Homes with recurring freeze risk get an assessment of insulation improvements and monitoring options.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Repairs across the Agate Bay subdivision",
        paragraphs: [
          "Running toilets, dripping faucets, failing shutoff valves and slow drains are the everyday work, and across the subdivision they turn up in systems ranging from 1950s-era plumbing to modern PEX in the newer homes.",
          "NTPUD manages sewer collection here, with regional treatment by the Tahoe-Truckee Sanitation Agency. If the issue is at the lateral connection to the NTPUD system rather than inside the house, we diagnose where it sits and coordinate the next steps with you.",
        ],
      },
    ],
    headings: {
      emergency: "When water is leaking and nobody is home",
      reviews: "What Agate Bay owners tell us",
      popular: "The plumbing Agate Bay needs most",
      faqs: "Water company, permits and winter questions",
      cta: "Talk to a plumber who knows Agate Bay",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Agate Bay?",
        answer:
          "Water service in Agate Bay is provided by Agate Bay Water Company, a private water utility regulated by the California Public Utilities Commission that has served the community for over 70 years. Sewer collection is handled by North Tahoe Public Utility District (NTPUD), with regional wastewater treatment managed by the Tahoe-Truckee Sanitation Agency (TTSA). Natural gas is provided by Southwest Gas. Electricity in the Agate Bay area is provided by Liberty Utilities.",
      },
      {
        question: "Do I need a high-altitude water heater in Agate Bay?",
        answer:
          "The banana belt microclimate does not excuse the altitude. Agate Bay sits around 6,250 to 6,300 feet, and at that height gas-fired water heaters need a high-altitude kit or a factory-configured model to burn safely and efficiently. Skip it and the unit runs dirtier, wears out faster and heats less. The cold groundwater from the Agate Bay Water Company adds a larger temperature rise on top, and the rental turnover between vacancies piles heavy-use cycles onto the same equipment.",
      },
      {
        question: "How do I protect my Agate Bay home's plumbing when I'm away?",
        answer:
          "Short-term rentals need monitoring that does not depend on anyone being home. A Moen Flo system on the main supply line tracks flow, pressure and temperature continuously and shuts the water off automatically when something is wrong, so the house is covered between turnovers and in the vacant stretches. Minimum heat and insulated runs cover the cold nights, and remote alerts mean the owner hears about trouble before the next guest does.",
      },
      {
        question: "Do I need a permit for plumbing work in Agate Bay?",
        answer:
          "Plumbing permits here come from the Placer County Building Services Division (Tahoe office), since Agate Bay is in unincorporated Placer County. Most replacements and new installations need one, and we file it as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Agate Bay?",
        answer:
          "Shut off the main first. If a pipe has already cracked, that is what keeps the house from flooding when the ice releases. Never use an open flame or a heat gun to thaw a pipe. A hair dryer, a space heater aimed at the suspected area, or towels soaked in warm water are safe. If you cannot locate the frozen section, or a pipe has already burst, call 530-587-0733. We find the failure point, thaw only where it is safe, and repair or replace the damaged section.",
      },
      {
        question: "What does winterizing an Agate Bay home involve?",
        answer:
          "Draining the lines and fixtures, protecting the traps, shutting down the water heater, and dealing with exterior hose bibs, then documenting it so it can be reversed properly in spring. For short-term rental properties, owners often prefer continuous monitoring over full seasonal shutdown to keep booking flexibility. We look at the house and give you a clear price before any work starts.",
      },
    ],
    popularServices: ["water-heaters", "kitchen-bath-plumbing", "smart-leak-shutoff", "frozen-burst-pipes"],
  },
  "donner-lake": {
    lede: "Granite framed lake cabins west of Truckee, minutes from the summit ski resorts.",
    overview:
      "Donner Lake sits at 5,936 feet on the west side of Truckee, framed by granite peaks with I-80 to the north and the summit ski resorts, Sugar Bowl, Boreal and Donner Ski Ranch, close by. Many homes here were built as vacation cabins and expanded or remodeled over the decades, which leaves mixed-era plumbing behind the walls. The lake's proximity to the summit corridor drives intense cold air drainage, colder here than in lower Truckee neighborhoods, and the combination of seasonal vacancy and heavy winter use puts real demands on every system.",
    sections: [
      {
        heading: "Water heater repair for Donner Lake cabins",
        paragraphs: [
          "Cold groundwater from TDPUD and the lake's 5,936-foot elevation mean every water heater works through a bigger temperature rise than its rating assumes, and hillside homes above the lake are higher still. The cabins that were expanded over the decades often have units that were patched rather than assessed when the house grew around them.",
          "We test the unit, name the actual failure, and tell you honestly whether a repair is worth doing or whether you are about to pay twice. The options are presented plainly and performance is confirmed before we leave.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Altitude installs with cold air drainage",
        paragraphs: [
          "At this elevation, gas-fired units require high-altitude kits or factory-configured models for safe and efficient combustion, and the cold air drainage off the summit corridor adds load that lower Truckee homes do not see. Fitting a sea-level unit here is how you get a short service life and a carbon monoxide problem.",
          "We size for the hot water the house actually uses, check the fuel source and the venting path before recommending anything, and file the permit through the Town of Truckee Building and Safety Division. Donner Lake is inside the incorporated town, so the county office is the wrong place to file, a mistake out-of-area contractors make regularly.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless for seasonal lake cabins",
        paragraphs: [
          "Tankless units are a strong fit for Donner Lake's seasonal use pattern. They eliminate standby heat loss during weeks of vacancy and deliver hot water on demand when the family arrives. Cold inlet water and altitude both cut effective output below the sea-level rating on the box, so sizing has to be done for the conditions.",
          "We size the unit for the home's actual fixture count and flow demands at altitude, confirm Southwest Gas can feed the unit, and test output at several draw points before calling it done.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair in Donner Lake winters",
        paragraphs: [
          "Southwest Gas provides natural gas service around Donner Lake, feeding furnaces, water heaters, fireplaces, cooktops and dryers. Decades of freeze and thaw cycling loosen connections, corrode fittings and tire out flex lines, and the movement is harder on piping here than in lower Truckee.",
          "If you smell gas, leave the house and call Southwest Gas first on 1-877-860-6020, then call us for the repair. We locate the fault, repair or replace the affected section, and pressure-test the line before service goes back on.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "Gas work with Town of Truckee permits",
        paragraphs: [
          "New runs around the lake usually mean a fireplace, a range, a kitchen remodel or a conversion from propane. Each needs correct sizing, code-compliant installation, a pressure test, and coordination with Southwest Gas when meter capacity is involved.",
          "Truckee has been an incorporated town since 1993, so permits go through the Town of Truckee Building and Safety Division rather than Placer County. We file it as part of the job and coordinate with your builder or designer when the gas work sits inside a bigger remodel.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath plumbing in remodeled cabins",
        paragraphs: [
          "Donner Lake's cabins were built as vacation places, then expanded and remodeled over the decades. That leaves mixed-era systems: a 1970s rough-in feeding a 2010s bathroom, galvanized supply lines behind new tile, drain configurations from before the addition went up.",
          "We work with homeowners, designers and general contractors on everything from a faucet replacement to full rough-in during a remodel. In the older sections we check the condition of existing supply lines before they become the reason new fixtures underperform.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Leak monitoring for homes left empty",
        paragraphs: [
          "Donner Lake's mix of full-time residents and seasonal owners means plenty of plumbing goes unwatched for weeks. A supply line that lets go in an empty house does not stop until somebody walks in, which is how a small failure becomes a floor replacement, and the cold microclimate makes the window between failure and discovery wider than in town.",
          "A monitor on the main line watches flow, pressure and temperature continuously, shuts the water off on its own when something is wrong, and tells your phone it did. For an owner who is away between visits, or a caretaker covering several properties around the lake, it is the most useful thing we install.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipes in Donner Lake's cold pockets",
        paragraphs: [
          "Hard freezes are routine here, and the cold air drainage off the summit corridor makes them harder than in lower Truckee. The vulnerable points are consistent: exposed runs under raised foundations, exterior hose bibs, and supply lines in uninsulated crawl spaces. Houses closed up for winter without a proper shutdown are the highest risk, but occupied homes split pipes too during long cold snaps.",
          "If a pipe has already gone, shut the main and call. We locate the failure, thaw only where it is safe, and repair or replace the damaged section. For a house that freezes in the same spot every winter, insulation improvements and a monitoring setup stop the annual repeat.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Repairs along the west Truckee shoreline",
        paragraphs: [
          "Running toilets, dripping faucets, failing shutoff valves and slow drains are the everyday work, and around the lake they turn up in systems ranging from the original cabin plumbing to modern PEX in the remodeled sections.",
          "Sewer collection is handled by Truckee Sanitary District, with regional treatment by the Tahoe-Truckee Sanitation Agency. When a drain problem turns out to sit at the lateral connection to the TSD main rather than inside the house, we work out where the boundary falls and help you coordinate the next step instead of digging first.",
        ],
      },
    ],
    headings: {
      emergency: "Burst pipe, gas smell or frozen solid",
      reviews: "What Donner Lake owners say",
      popular: "Work Donner Lake asks for first",
      faqs: "Altitude, permits and winter questions",
      cta: "Call a Donner Lake plumber",
    },
    faqs: [
      {
        question: "Who provides water and sewer service at Donner Lake?",
        answer:
          "Water and electric service in the Donner Lake area is provided by Truckee Donner Public Utility District (TDPUD), which sources 100% groundwater from the Martis Valley basin. Sewer collection is handled by Truckee Sanitary District (TSD), with regional wastewater treatment managed by the Tahoe-Truckee Sanitation Agency (TTSA). Natural gas is provided by Southwest Gas.",
      },
      {
        question: "Do I need a high-altitude water heater at Donner Lake?",
        answer:
          "Yes. Donner Lake sits at 5,936 feet, and hillside homes above the lake are higher. At that altitude, reduced oxygen levels affect combustion in gas-fired water heaters. Units installed without proper high-altitude adjustments run less efficiently, produce more carbon monoxide, and wear out faster. Most manufacturers offer factory-configured high-altitude models or conversion kits. The cold groundwater supplied by TDPUD adds further stress on heating elements and burners.",
      },
      {
        question: "How do I protect my Donner Lake home's plumbing when I'm away?",
        answer:
          "The most effective approach combines proper winterization with smart leak detection. A Moen Flo system monitors your water supply line continuously and can shut off water automatically if it detects a leak or abnormal flow. For extended winter vacancies, maintaining minimum heat levels and insulating vulnerable pipe runs reduces freeze risk. Donner Lake's proximity to the summit corridor means cold air drainage is more intense here than in lower-elevation Truckee neighborhoods.",
      },
      {
        question: "Do I need a permit for plumbing work at Donner Lake?",
        answer:
          "Donner Lake is within the Town of Truckee, so plumbing permits are issued through the Town of Truckee Building and Safety Division rather than Placer County. Most plumbing replacements and new installations require a permit. We handle the filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze at Donner Lake?",
        answer:
          "The first move is the main shutoff, so a cracked pipe does not flood the house as the ice releases. Do not thaw pipes with an open flame or a heat gun. Safe options are a hair dryer, a space heater directed at the area, or towels soaked in warm water. If the frozen section will not reveal itself, or a pipe has already burst, call 530-587-0733. We locate the failure, thaw where it is safe to do so, and repair or replace what is damaged.",
      },
      {
        question: "What does winterizing a Donner Lake home involve?",
        answer:
          "Draining the lines and fixtures, protecting the traps, shutting down the water heater, and dealing with exterior hose bibs, then documenting it so it can be reversed properly in spring. Homes that see heavy winter use and long shoulder-season vacancies often do better with continuous monitoring plus minimum heat than with a full seasonal shutdown. We look at the house and give you a clear price before any work starts.",
      },
    ],
    popularServices: ["frozen-burst-pipes", "water-heaters", "smart-leak-shutoff"],
  },
  "homewood": {
    lede: "Classic west shore cabins and lakefront homes, 5.5 miles south of Tahoe City.",
    overview:
      "Homewood sits at about 6,225 feet on the west shore, roughly 5.5 miles south of Tahoe City along Highway 89. Homewood Mountain Resort anchors the neighborhood through a TRPA-approved redevelopment that will bring new infrastructure and residential construction. The housing stock mixes classic Tahoe cabins, remodeled second homes and lakefront estates, and many properties date to the 1960s and 1970s with original plumbing systems still partially in place. TCPUD supplies water and sewer and is rebuilding the Homewood water system through the Madden Creek Water System Reconstruction Project, replacing aging 1960s-era water mains and adding modern metering and fire hydrants.",
    sections: [
      {
        heading: "Water heater repair in 1960s Homewood homes",
        paragraphs: [
          "Cold groundwater from TCPUD and 6,225 feet of elevation mean every water heater works through a bigger temperature rise than its rating assumes. In the 1960s and 1970s homes, original-era tanks have often been patched rather than properly assessed, and a unit that old rarely fails in a way a new part fixes.",
          "We test the unit, name the actual failure, and tell you honestly whether a repair is worth doing or whether you are about to pay twice. A failing thermocouple and a tank at end of life get different answers.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Water heater installs up the Homewood hillside",
        paragraphs: [
          "The lakefront sits at about 6,225 feet and the homes upslope sit higher, so altitude derating matters everywhere here. Gas-fired units require high-altitude kits or factory-configured models for safe and efficient combustion, and the venting constraints of older construction decide the placement as much as the unit does.",
          "We size for the hot water the house actually uses, check the fuel source and the venting path before recommending anything, and file the permit through the Placer County Building Services Division. Finishes get protected and performance gets verified before closeout.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless for cabins between ski visits",
        paragraphs: [
          "Tankless units are well suited to Homewood's second-home use pattern. They eliminate standby heat loss during weeks of vacancy and deliver hot water on demand when the family arrives. At this elevation, cold inlet water and altitude-adjusted combustion reduce effective output below sea-level ratings.",
          "We size the unit for the home's actual fixture count and flow demands at altitude, confirm gas supply capacity, and test output across multiple draw points before the job is complete.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair in aging Homewood systems",
        paragraphs: [
          "Southwest Gas provides natural gas service throughout Homewood, feeding furnaces, water heaters, fireplaces, cooktops and dryers. In homes where the plumbing is partially original to the 1960s and 1970s, gas piping and connections have seen decades of freeze and thaw cycling that loosens connections, corrodes fittings and tires out flex lines.",
          "If you smell gas or suspect a leak, ventilate the area and call Southwest Gas first on 1-877-860-6020, then contact us for the repair. We locate the issue, repair or replace the affected section, and pressure-test the line before restoring service.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "New gas runs for Homewood remodels",
        paragraphs: [
          "New gas runs in Homewood commonly support fireplace installations, appliance upgrades, kitchen remodels and fuel-source conversions as the older cabins get updated. The work requires proper sizing, code-compliant installation, a pressure test, and coordination with Southwest Gas for meter capacity.",
          "We handle gas line installation from planning through final pressure testing, file permits through Placer County, and coordinate with general contractors and designers when the work is part of a larger renovation.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath plumbing for west shore cabins",
        paragraphs: [
          "Homewood's mix of classic cabins, remodeled second homes and lakefront estates asks for everything from fixture swaps to full rough-in during remodels. In the 1960s and 1970s homes, original plumbing systems are often still partially in place behind the finishes that got updated first.",
          "We work with homeowners, designers and general contractors to install plumbing that fits the home's layout, water pressure conditions and finish standards, protecting surrounding surfaces during installation and testing every connection.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Leak monitoring for seasonal lakefront homes",
        paragraphs: [
          "A significant share of Homewood homes are used seasonally, and many have older plumbing routed through crawl spaces and exterior walls that are particularly vulnerable during cold snaps. A failure in an empty house runs until somebody walks in.",
          "Fitted on the main water supply line, a monitor watches flow, pressure and temperature continuously and can shut the water off on its own when something is wrong, with real-time alerts to your phone. For an owner who is away between visits, it is the most useful thing we install.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipe repair in crawl space runs",
        paragraphs: [
          "Heavy snowfall and sustained freezing temperatures are routine on the west shore. The vulnerable points here are the crawl space and exterior wall runs that so much of Homewood's older plumbing uses. Homes closed up for portions of winter without proper winterization are at the highest risk, but occupied homes freeze too during long cold snaps.",
          "Targeted diagnostics locate the failure point, controlled thawing follows where it is safe, and the damaged section is repaired or replaced cleanly. For a house with recurring freeze risk we assess insulation improvements and monitoring.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Repairs while TCPUD rebuilds the water system",
        paragraphs: [
          "Running toilets, dripping faucets, failing shutoff valves and slow drains are the everyday work, and they do not pause while the Madden Creek Water System Reconstruction Project replaces aging 1960s-era water mains, adds new fire hydrants and installs modern metering throughout the community.",
          "Sewer collection is managed by TCPUD, with regional treatment by the Tahoe-Truckee Sanitation Agency. If a drain or sewer issue involves the lateral connection to the TCPUD system rather than the house itself, we diagnose where the problem sits and coordinate the next steps with you.",
        ],
      },
    ],
    headings: {
      emergency: "A leak or no hot water before the weekend",
      reviews: "What Homewood owners tell us",
      popular: "Jobs we do most in Homewood",
      faqs: "Water system, permits and altitude questions",
      cta: "Call a Homewood plumber",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Homewood?",
        answer:
          "Water and sewer collection in Homewood is provided by Tahoe City Public Utility District (TCPUD), whose service area extends from Emerald Bay to Dollar Hill along the West Shore and North Shore. TCPUD is rebuilding the Homewood water system through the Madden Creek Water System Reconstruction Project, replacing aging 1960s-era water mains, adding new fire hydrants, and installing modern metering throughout the community. Regional wastewater treatment is handled by the Tahoe-Truckee Sanitation Agency (TTSA). Natural gas is provided by Southwest Gas. Electricity in the Homewood area is provided by Liberty Utilities.",
      },
      {
        question: "Do I need a high-altitude water heater in Homewood?",
        answer:
          "Yes. Homewood sits near 6,225 feet at the lakefront with the hillside homes higher still, and thinner air derates every gas-fired unit. A high-altitude kit or factory-configured model is what keeps combustion safe and efficient; without it the unit burns dirtier, heats less and fails sooner. TCPUD's cold groundwater adds a larger temperature rise, and in the 1960s and 1970s homes the original-era venting often has to be rethought before a new unit goes in.",
      },
      {
        question: "How do I protect my Homewood home's plumbing when I'm away?",
        answer:
          "Older crawl space plumbing makes unattended cold snaps the main threat here. A Moen Flo system on the main water supply line monitors flow, pressure and temperature continuously and shuts the water off by itself when something is wrong. For long vacancies, keep minimum heat on and protect the vulnerable runs, and lean toward monitoring over a full seasonal shutdown if the house will see mid-winter visits.",
      },
      {
        question: "Do I need a permit for plumbing work in Homewood?",
        answer:
          "Plumbing permits here come from the Placer County Building Services Division (Tahoe office), since Homewood is in unincorporated Placer County. Most replacements and new installations need one, and we file it as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Homewood?",
        answer:
          "Turn off the main water supply first, so that if a pipe has already cracked it does not flood when the ice releases. Do not use an open flame or a heat gun. Gentle heat from a hair dryer, or towels soaked in warm water, is safe. If you cannot find the frozen section, or a pipe has already burst, call 530-587-0733. We locate the failure, thaw only where it is safe, and repair or replace the damaged section.",
      },
      {
        question: "What does winterizing a Homewood home involve?",
        answer:
          "Draining the lines and fixtures, protecting the traps, shutting down the water heater, and dealing with exterior hose bibs, then documenting it so it can be reversed properly in spring. Homewood's housing ranges from compact cabins to larger lakefront homes, and the scope scales with the house. We look at the house and give you a clear price before any work starts.",
      },
    ],
    popularServices: ["water-heaters", "frozen-burst-pipes", "kitchen-bath-plumbing"],
  },
  "tahoma": {
    lede: "Laid back west shore streets near Sugar Pine Point, cabins being brought up to date.",
    overview:
      "Tahoma sits at about 6,225 feet on the west shore, roughly 8 miles south of Tahoe City along Highway 89 and near Sugar Pine Point State Park. The community has a laid-back character and level streets, with housing from original Tahoe cabins and modest seasonal cottages to remodeled homes and lakefront properties. Year-round residents mix with seasonal owners, and the full-time population is growing, which means plenty of cabins are being renovated with their legacy plumbing updated in stages. TCPUD supplies water and sewer, and it acquired the Tahoe Cedars water system in 2018: the Tahoe Cedars Water System Reconstruction is now replacing 15 miles of undersized and failing water mains, relocating over 600 service lines, and adding new fire hydrants and meters.",
    sections: [
      {
        heading: "Water heater repair for Tahoma cabins and remodels",
        paragraphs: [
          "Cold groundwater from TCPUD and 6,225 feet of elevation mean every water heater works through a bigger temperature rise than its rating assumes. In the cabins being renovated, units are often mid-story: a tank that predates the remodel, a venting path the new layout did not plan for, a burner working against altitude and cold inlet water at the same time.",
          "We find the failure before naming the fix. Thermocouple, sediment, anode rod or end of life each lead somewhere different, and we present the options plainly and confirm performance before leaving.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "High altitude installs at 6,225 feet",
        paragraphs: [
          "At Tahoma's elevation, gas-fired units require high-altitude kits or factory-configured models for safe and efficient combustion. Replacing a water heater here means accounting for elevation, cold inlet water, fuel type and the venting constraints of a cabin that has been through several renovations.",
          "We size for the home's actual hot water demand, confirm the fuel source and the venting path, and file through the Placer County Building Services Division. The installation is handled cleanly with finishes protected and performance verified before we leave.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless for year round and seasonal homes",
        paragraphs: [
          "Tahoma's mix of year-round and seasonal households makes tankless worth sizing carefully. For the seasonal homes, tankless eliminates standby heat loss during months of vacancy. For the year-round homes with several bathrooms drawing at once, the same unit has to deliver real simultaneous flow at altitude.",
          "At this elevation, cold inlet water and altitude-adjusted combustion reduce effective output below sea-level ratings. We size for the fixture count and flow the house really has, confirm gas supply capacity, and test output across multiple draw points before the job is complete.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair in older Tahoma systems",
        paragraphs: [
          "Southwest Gas provides natural gas service throughout Tahoma, feeding furnaces, water heaters, fireplaces, cooktops and dryers. In the older cabins, original gas piping and connections may have been in service for decades and are subject to corrosion, loose fittings and deteriorating flex lines.",
          "If you smell gas, leave the house and call Southwest Gas first on 1-877-860-6020, then call us for the repair. We find the fault, repair or replace the affected section, and pressure-test the line before service goes back on.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "Gas lines for kitchens, fireplaces and remodels",
        paragraphs: [
          "New gas runs in Tahoma commonly support range and cooktop upgrades, fireplace installations and kitchen remodels as the older cabins get updated. The work requires proper sizing, code-compliant installation, a pressure test, and coordination with Southwest Gas for meter capacity.",
          "We handle gas line installation from planning through final pressure testing and file permits through Placer County, coordinating with general contractors and designers when the work is part of a larger renovation.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath plumbing for classic cabins",
        paragraphs: [
          "Tahoma's classic cabins are being renovated in stages, and the plumbing work follows that rhythm: updating legacy systems while keeping the feel of the cabin. Fixture replacements in the bathrooms, valve work behind the tile, full rough-in when a renovation finally reaches the walls.",
          "We work with homeowners, designers and general contractors on everything from a faucet replacement to full rough-in during a remodel, and we check the condition of existing supply lines before new fixtures go in so old pipe does not undercut new work.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Leak detection for crawl space plumbing",
        paragraphs: [
          "Many Tahoma cabins have crawl space plumbing and older supply lines that are particularly vulnerable during winter cold snaps. A slow failure down there is out of sight and out of mind until the bill or the floor tells the story.",
          "A monitor on the main water supply line watches flow, pressure and temperature continuously and can shut the water off on its own when something is wrong, with real-time alerts to your phone. It is the practical answer for a house whose plumbing you cannot see.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipe repair in Tahoma",
        paragraphs: [
          "Sustained freezes and heavy snow are the winter norm on the west shore, and Tahoma's crawl space plumbing is right in the path. The runs through crawl spaces, exterior walls and uninsulated areas freeze first, and houses closed up without proper winterization carry the highest risk.",
          "We start with targeted diagnostics to find the failure point, thaw in a controlled way where possible, and repair or replace the damaged sections cleanly. Recurring freeze risk calls for an assessment of insulation improvements and monitoring.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Repairs alongside the Tahoe Cedars rebuild",
        paragraphs: [
          "Running toilets, dripping faucets, failing shutoff valves and slow drains are the everyday work, and they do not pause while TCPUD's Tahoe Cedars Water System Reconstruction replaces 15 miles of undersized and failing water mains and relocates over 600 service lines through the community.",
          "Sewer collection is managed by TCPUD, with regional treatment by the Tahoe-Truckee Sanitation Agency. If a drain or sewer issue involves the lateral connection to the TCPUD system rather than the house itself, we diagnose where the problem sits and coordinate the next steps with you.",
        ],
      },
    ],
    headings: {
      emergency: "A burst pipe or gas smell on the west shore",
      reviews: "What Tahoma owners and renters say",
      popular: "The work Tahoma needs most",
      faqs: "Permits, water and winter questions",
      cta: "Talk to a Tahoma plumber",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Tahoma?",
        answer:
          "Water and sewer collection in Tahoma is provided by Tahoe City Public Utility District (TCPUD), which acquired the Tahoe Cedars water system in 2018 as part of its effort to consolidate and modernize small water systems along the West Shore. The Tahoe Cedars Water System Reconstruction Project is replacing 15 miles of undersized and failing water mains, relocating over 600 water service lines, and installing new fire hydrants and residential meters. Regional wastewater treatment is handled by the Tahoe-Truckee Sanitation Agency (TTSA). Natural gas is provided by Southwest Gas. Electricity in the Tahoma area is provided by Liberty Utilities.",
      },
      {
        question: "Do I need a high-altitude water heater in Tahoma?",
        answer:
          "Yes. Tahoma sits around 6,225 feet, and that is enough altitude to derate gas-fired combustion. An unadjusted unit runs less efficiently, produces more carbon monoxide and wears out faster, which is why manufacturers sell high-altitude kits and factory-configured models. TCPUD's cold groundwater adds a bigger temperature rise, and staged cabin renovations are the moment to get both the sizing and the venting right.",
      },
      {
        question: "How do I protect my Tahoma home's plumbing when I'm away?",
        answer:
          "Crawl space plumbing you cannot see needs monitoring you do not have to watch. A Moen Flo system on the main supply line tracks flow, pressure and temperature around the clock and shuts the water off automatically when something is wrong. Keep minimum heat through the vacancy, insulate the exposed runs, and remember the older supply lines are the ones most likely to let go in a hard cold snap.",
      },
      {
        question: "Do I need a permit for plumbing work in Tahoma?",
        answer:
          "Tahoma is in unincorporated Placer County, so plumbing permits are issued through the Placer County Building Services Division (Tahoe office). Most plumbing replacements and new installations require a permit. We handle permit filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Tahoma?",
        answer:
          "Shut off the main first. If a pipe has already cracked, that is what keeps the house from flooding when the ice releases. Never use an open flame or a heat gun to thaw a pipe. A hair dryer, a space heater aimed at the suspected area, or towels soaked in warm water are safe. If you cannot locate the frozen section, or a pipe has already burst, call 530-587-0733. We find the failure point, thaw only where it is safe, and repair or replace the damaged section.",
      },
      {
        question: "What does winterizing a Tahoma home involve?",
        answer:
          "Draining the lines and fixtures, protecting the traps, shutting down the water heater, and dealing with exterior hose bibs, then documenting it so it can be reversed properly in spring. Tahoma's housing ranges from compact cabins to larger remodeled homes, and the scope scales with the house. We look at the house and give you a clear price before any work starts.",
      },
    ],
    popularServices: ["kitchen-bath-plumbing", "water-heaters", "frozen-burst-pipes"],
  },
  "meeks-bay": {
    lede: "Secluded El Dorado County shoreline on propane, between Tahoma and Emerald Bay.",
    overview:
      "Meeks Bay and the surrounding Rubicon area sit at about 6,225 feet on the southern West Shore along Highway 89 between Tahoma and Emerald Bay. This is the only community of the 24 outside Placer County and the Town of Truckee: it is in El Dorado County. There is no natural gas infrastructure here, so every gas appliance runs on propane from an individual tank on each property. Housing ranges from classic Tahoe cabins and modest mountain homes to lakefront estates along Emerald Bay Road in the stretch sometimes called the Gold Coast, in neighborhoods like Glenridge Park, Tahoe Hills and Meeks Bay Vista, and along Sweetwater Drive and Scenic Drive near Rubicon Bay and D.L. Bliss State Park. Most properties are second homes or vacation retreats. Water comes from TCPUD's Rubicon Water System, drawn from groundwater sources south of Meeks Bay, though some properties are on private wells or individual septic systems.",
    sections: [
      {
        heading: "Propane water heater repair in Meeks Bay",
        paragraphs: [
          "At about 6,225 feet with cold groundwater from TCPUD's Rubicon Water System, water heaters here work through a bigger temperature rise than their ratings assume. The fuel is the thing that sets Meeks Bay apart: propane-fired units require different orifice sizing and pressure regulation than natural gas models, and the wrong configuration affects both efficiency and safety.",
          "We diagnose before recommending anything, and when the answer is a replacement we make sure the unit is configured for propane and high altitude from the start. Installing a natural-gas-configured unit on propane, or the reverse, is a safety hazard and a common source of performance problems.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "High altitude installs configured for propane",
        paragraphs: [
          "Replacing a water heater in Meeks Bay means accounting for elevation, cold inlet water, venting constraints, and fuel: the replacement unit must be properly configured for propane, with correct orifice sizing, gas pressure regulation and BTU rating for the home's demand. Most manufacturers offer factory-configured high-altitude propane models.",
          "We evaluate the home's hot water demand and the venting path before recommending anything, and file the permit through El Dorado County, a different office than the Placer County process that covers most of the other towns we serve. The installation is handled cleanly, finishes are protected, and performance is verified before closeout.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless on propane for seasonal estates",
        paragraphs: [
          "Tankless units can be a strong fit for Meeks Bay's heavily seasonal use pattern. They eliminate standby heat loss during weeks or months of vacancy and deliver hot water on demand when the family arrives. Propane-fired tankless units are readily available from major manufacturers.",
          "At this elevation, cold inlet water and altitude-adjusted combustion reduce effective output below sea-level ratings, and proper configuration for propane fuel and high altitude is essential to performance and safety. We size for the fixture count and flow the house really has and test output across multiple draw points before calling it done.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Propane line repair in Meeks Bay",
        paragraphs: [
          "There is no natural gas infrastructure in the Meeks Bay area. All gas-fueled appliances run on propane, supplied by individual tanks on each property, feeding furnaces, water heaters, fireplaces, cooktops, dryers and outdoor appliances. Over time, connections loosen, fittings corrode and flex lines deteriorate. Propane lines are also subject to ground movement from freeze-thaw cycles, and tank-to-house supply lines can be damaged by snow loading, tree falls or snow removal operations.",
          "If you smell gas, leave the house and call your propane supplier first, then call us for the repair. We locate the fault, repair or replace the affected section, and pressure-test the line before service goes back on.",
        ],
        link: { label: "More on propane and gas line work", href: "/services/gas-services/" },
      },
      {
        heading: "Propane line installation for new appliances",
        paragraphs: [
          "New propane runs in Meeks Bay commonly support appliance hookups: ranges, dryers, fireplaces and outdoor cooking. The work requires proper sizing, code-compliant installation, and a pressure test before the appliance goes live.",
          "We handle propane line installation from planning through final pressure testing and file permits through El Dorado County. When the work is part of a larger project we coordinate with your contractor or designer so the gas lands where the plans say it should.",
        ],
        link: { label: "More on propane and gas line work", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath plumbing along the Gold Coast",
        paragraphs: [
          "The corridor from the classic cabins of Glenridge Park and Tahoe Hills to the lakefront estates along Emerald Bay Road asks for the full range: simple fixture replacements in the cabins, full rough-in work in the larger homes. Older properties often have outdated drain configurations and galvanized supply lines that surface as issues during renovation.",
          "With homeowners, designers and general contractors we install plumbing that suits the home's layout, water pressure and finish standards, protecting surrounding surfaces as we go and testing every connection.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Leak monitoring for secluded second homes",
        paragraphs: [
          "Meeks Bay is quiet, secluded and heavily seasonal, with most properties used as second homes or vacation retreats. A slow leak behind a wall can go undetected for weeks, and the homes on propane need their fuel supply verified before winter vacancy so the heating system can maintain minimum temperatures through the season.",
          "A monitor fitted on the main water supply line tracks flow, pressure and temperature around the clock and shuts the water off by itself when something is wrong, with alerts to your phone in real time. It is the practical answer for a house you drive away from for months.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipe repair between Tahoma and Emerald Bay",
        paragraphs: [
          "Heavy snowfall and sustained freezing temperatures are the winter norm on this stretch of the West Shore. Exposed pipe runs in crawl spaces, exterior walls and uninsulated areas are the most vulnerable, and homes that are closed up for portions of winter without proper winterization are at the highest risk.",
          "Targeted diagnostics find the failure point, controlled thawing is used where possible, and damaged sections are repaired or replaced cleanly. For homes that freeze again and again we assess insulation improvements and monitoring.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Repairs in El Dorado County",
        paragraphs: [
          "Running toilets, dripping faucets, failing shutoff valves and slow drains are the everyday work, and around Meeks Bay they turn up in systems ranging from original cabin plumbing to modern PEX in the remodeled estates.",
          "Sewer service for connected properties is provided by TCPUD, with regional wastewater treatment by the Tahoe-Truckee Sanitation Agency, though some properties are on individual septic systems. Permits run through El Dorado County rather than Placer County or the Town of Truckee, and we file them as part of the project when they apply.",
        ],
      },
    ],
    headings: {
      emergency: "A leak or propane issue that cannot wait",
      reviews: "What Meeks Bay owners say",
      popular: "Jobs Meeks Bay calls about",
      faqs: "Propane, permits and water questions",
      cta: "Call a Meeks Bay plumber",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Meeks Bay?",
        answer:
          "Most residential properties in the Meeks Bay and Rubicon area receive water through Tahoe City Public Utility District's Rubicon Water System, which draws from local groundwater sources south of Meeks Bay. TCPUD has been investing in the Rubicon system to improve water pressure, fire flow capacity and system resilience, and it recently acquired the Glenridge Park Water Company serving Glenridge Park Estates. Sewer service for connected properties is provided by TCPUD, with regional wastewater treatment handled by the Tahoe-Truckee Sanitation Agency. Some properties may be on private wells or individual septic systems. There is no natural gas service in the Meeks Bay area; all gas-fueled appliances run on propane. Electricity is provided by Liberty Utilities.",
      },
      {
        question: "Do I need a high-altitude water heater in Meeks Bay?",
        answer:
          "Yes. Meeks Bay sits at approximately 6,225 feet. At that elevation, reduced oxygen levels affect combustion in propane-fired and gas-fired water heaters. Units installed without proper high-altitude adjustments run less efficiently, produce more carbon monoxide, and wear out faster. Because Meeks Bay homes use propane rather than natural gas, the water heater must also be properly configured for propane fuel with the correct orifice sizing and gas pressure regulation. Most manufacturers offer factory-configured high-altitude propane models.",
      },
      {
        question: "How do I protect my Meeks Bay home's plumbing when I'm away?",
        answer:
          "The most effective approach combines smart leak detection with proper winterization. A Moen Flo system monitors your water supply line continuously and can shut off water automatically if it detects a leak or abnormal flow. For extended vacancies, maintaining minimum heat levels and insulating vulnerable pipe runs reduces freeze risk. Propane supply should be verified before winter vacancy to ensure the heating system can maintain minimum temperatures through the season.",
      },
      {
        question: "Do I need a permit for plumbing work in Meeks Bay?",
        answer:
          "Meeks Bay is in El Dorado County, so plumbing permits are issued through El Dorado County. This is different from most other communities we serve, which permit through Placer County or the Town of Truckee. Most plumbing replacements and new installations require a permit. We handle permit filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Meeks Bay?",
        answer:
          "The first move is the main shutoff, so a cracked pipe does not flood the house as the ice releases. Do not thaw pipes with an open flame or a heat gun. Safe options are a hair dryer, a space heater directed at the area, or towels soaked in warm water. If the frozen section will not reveal itself, or a pipe has already burst, call 530-587-0733. We locate the failure, thaw where it is safe to do so, and repair or replace what is damaged.",
      },
      {
        question: "What does winterizing a Meeks Bay home involve?",
        answer:
          "Draining the lines and fixtures, protecting the traps, shutting down the water heater, and dealing with exterior hose bibs, then documenting it so it can be reversed properly in spring. Homes on propane should also confirm adequate tank levels to maintain heating through the vacancy period. We look at the house and give you a clear price before any work starts.",
      },
    ],
    popularServices: ["water-heaters", "frozen-burst-pipes", "smart-leak-shutoff", "gas-services"],
  },
};
