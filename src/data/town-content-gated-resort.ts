// Town page content for the gated and resort towns, written against each town's own
// brief (docs/town-briefs/<slug>.md) and the live page facts in docs/crawl/.
// Matches the TownContent interface in ./town-content.ts. Gated towns lead with
// estate-scale system complexity and gate/estate-manager coordination; resort towns
// lead with HOA/association context and seasonal occupancy patterns.
// Every service named here is a real Brimer service; nothing from the never-claim
// list appears anywhere in the copy.

import type { TownContent } from "./town-content";

export const townContentGatedResort: Record<string, TownContent> = {
  "martis-camp": {
    lede: "A 2,177-acre private gated community with 671 custom homesites, from 5,900 to 7,100 feet.",
    overview:
      "Martis Camp is a 2,177-acre private gated community in Martis Valley, with 671 custom homesites on estate properties averaging over 1.5 acres and cabin sites near the Family Barn amenity core. Elevations run from 5,900 to 7,100 feet, and most homes are second residences for Bay Area and Silicon Valley families, many of them managed by estate management companies. Plumbing here cycles between heavy use during ski season and summer and extended vacancy through the shoulder months, which is exactly the pattern that punishes neglected systems. We know the plumbing in these homes and the conditions they face, whether the family is in residence or the property sits between visits.",
    sections: [
      {
        heading: "Water heater repair where five bathrooms is standard",
        paragraphs: [
          "Martis Camp water heaters serve homes with five to seven bathrooms across multiple zones, so a unit that looks oversized on paper works hard in practice. Cold groundwater from NCSD's Martis Valley Water System arrives well below typical municipal temperatures, and the 1,200 feet of elevation change across the community means performance derates from sea-level ratings everywhere inside the gates.",
          "Homes that sit vacant between visits are especially prone to sediment buildup and thermal cycling wear. Whether it is a failing thermocouple, a tank full of sediment, or inconsistent output from a unit approaching end of life, we diagnose before recommending and confirm performance before we leave.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Installing water heaters at 7,100 feet",
        paragraphs: [
          "At elevations from 5,900 to 7,100 feet, thinner air changes combustion, so a gas-fired unit needs a high-altitude kit or a factory high-altitude model to burn safely and efficiently. We size for the hot water the house actually uses across its zones, check the fuel source and the venting path before recommending anything, and protect finishes during the work.",
          "Permits run through the Placer County Building Services Division, and visible exterior venting can also fall under the community's architectural review process, which we coordinate as part of the job.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless systems for Martis Camp's guest wings",
        paragraphs: [
          "Tankless suits Martis Camp's second-home pattern because there is no standby loss while nobody is in residence, and it delivers hot water on demand when the family arrives. The catch is the same across the community: cold inlet water and altitude-adjusted combustion cut effective output below the sea-level rating on the box.",
          "Estate-scale homes with high simultaneous demand across multiple bathrooms and guest wings need careful sizing to perform reliably. We size for actual simultaneous demand at the home's elevation, confirm Southwest Gas can feed the unit, and test output at several draw points before calling it done.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair and the Schaffer Mill Road gatehouse",
        paragraphs: [
          "Southwest Gas feeds furnaces, water heaters, fireplaces, cooktops, dryers, and the extensive outdoor amenities that define Martis Camp entertaining: fire pits, outdoor kitchens, and patio heaters. Outdoor gas infrastructure also takes ground movement from freeze-thaw cycles and the occasional hit from snow clearing equipment.",
          "If you smell gas, leave the area and call Southwest Gas first on 1-877-860-6020, then call us for the repair. We locate the fault, repair or replace the affected section, and pressure-test before service goes back on, coordinating access through estate managers and the Schaffer Mill Road gatehouse.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "New gas lines in Martis Camp's outdoor living spaces",
        paragraphs: [
          "New runs in Martis Camp commonly support fireplaces, appliance upgrades, kitchen remodels, and outdoor living additions, from fire features to outdoor kitchens. The work needs proper sizing for estate-scale demand, code-compliant installation, and coordination with Southwest Gas when meter capacity is involved.",
          "Permits are filed through Placer County, and the community's architectural review process applies when the work sits inside a larger project, which we coordinate with your general contractor and designer.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath work behind premium finishes",
        paragraphs: [
          "Martis Camp homes feature custom construction with premium fixtures throughout, from custom shower systems to designer faucets, and many need specialized hookups for high-end appliances. The mineral content in NCSD's groundwater can shorten fixture life over time, which makes material selection and proper installation matter more here than they do elsewhere.",
          "We work with homeowners, designers, and general contractors on everything from fixture replacements to full rough-in during remodels, protecting surrounding finishes throughout, testing every connection, and leaving the workspace clean.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Moen Flo for estates that sit empty for months",
        paragraphs: [
          "Most Martis Camp homes sit vacant for weeks or months between visits, and in a home with premium finishes and plumbing spread across multiple zones, a slow leak behind a wall compounds quickly before anyone walks in. A monitor on the main line watches flow, pressure, and temperature continuously, shuts the water off on its own when something is wrong, and alerts your phone.",
          "The shoulder months of April through May and October through November carry the highest freeze risk, when temperatures can still drop below freezing while homes sit empty between ski season and summer. The system's freeze alerts catch that drop early, which is why we recommend it for owners managing the property remotely.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipe repair across Martis Camp's microclimates",
        paragraphs: [
          "The community's 1,200-foot elevation spread creates real microclimate variation, with the upper ridgeline homesites facing colder conditions than the properties near Martis Creek. The vulnerable points are consistent: exposed runs in exterior walls, crawl spaces, and unconditioned guest wings, and homes closed up without proper winterization carry the highest risk.",
          "If a pipe has already gone, shut the main and call. We locate the failure, thaw only where it is safe, and repair or replace the damaged section. For a home that freezes in the same spot every winter, we assess the run and recommend insulation improvements and monitoring that stop the annual repeat.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Everyday plumbing repairs, diagnosed systems first",
        paragraphs: [
          "Running toilets, dripping faucets, sewer line issues, and failing shutoff valves are the everyday work. In homes with plumbing spread across multiple zones and long piping runs, diagnosing a problem takes a systems-level view rather than a component guess.",
          "Sewer collection is managed by Truckee Sanitary District, with regional treatment by TTSA. When a drain issue turns out to sit at the lateral connection to the TSD main rather than inside the house, we work out where the boundary falls and help you coordinate the next step instead of digging first.",
        ],
      },
    ],
    headings: {
      emergency: "Burst pipe, gas smell or no water at the estate",
      reviews: "What Martis Camp homeowners say",
      popular: "Jobs we do most inside the gates",
      faqs: "Estate-scale questions we hear often",
      cta: "Get a Martis Camp plumber on the phone",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Martis Camp?",
        answer:
          "Water service in Martis Camp is provided by Northstar Community Services District (NCSD) through the Martis Valley Water System. NCSD took full ownership and operation of the system in 2015, serving Martis Camp along with Lahontan and Schaffer's Mill, and the water is 100% groundwater from the Martis Valley Aquifer. Sewer collection is handled by Truckee Sanitary District (TSD), with regional wastewater treatment managed by the Tahoe-Truckee Sanitation Agency (TTSA). Natural gas is provided by Southwest Gas.",
      },
      {
        question: "Do I need a high-altitude water heater in Martis Camp?",
        answer:
          "Yes. Martis Camp ranges from 5,900 to 7,100 feet, and at that elevation reduced oxygen affects combustion in gas-fired water heaters. A unit installed without high-altitude adjustment runs less efficiently, produces more carbon monoxide, and wears out faster. Most manufacturers offer factory-configured high-altitude models or conversion kits. The cold groundwater from NCSD adds further load, requiring a larger temperature rise to reach standard output.",
      },
      {
        question: "How do I protect my Martis Camp home's plumbing when I'm away?",
        answer:
          "The most effective approach combines smart leak detection with proper winterization. A Moen Flo system monitors the supply line continuously and can shut the water off automatically if it detects a leak or abnormal flow. For extended vacancies, keeping minimum heat on and insulating vulnerable pipe runs reduces freeze risk. The shoulder months of April through May and October through November carry the highest risk, because temperatures can still drop below freezing while homes sit vacant between ski season and summer use.",
      },
      {
        question: "Do I need a permit for plumbing work in Martis Camp?",
        answer:
          "Martis Camp is in unincorporated Placer County, so plumbing permits are issued through the Placer County Building Services Division (Tahoe office). Most replacements and new installations require one. The community's architectural review process may also apply to visible modifications. We handle permit filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Martis Camp?",
        answer:
          "Turn off the main water supply first, so a pipe that has already cracked does not flood the house when the ice releases. Do not use an open flame or a heat gun. Gentle heat from a hair dryer, or towels soaked in warm water, is safe. If you cannot find the frozen section, or a pipe has already burst, call 530-587-0733. If an estate manager oversees the property, we coordinate access through the Schaffer Mill Road gatehouse and provide documentation of all work performed.",
      },
      {
        question: "How much does it cost to winterize plumbing in Martis Camp?",
        answer:
          "It depends on the size of the home, the number of fixtures, and the complexity of the plumbing system. Martis Camp homes tend to have more extensive plumbing than typical mountain residences, with five to seven bathrooms, guest wings, and integrated mechanical systems that add to the scope. We evaluate the home's specific systems and give clear pricing before any work starts. For year-round protection instead of a seasonal shutdown, a Moen Flo smart leak detection system combined with insulation on exposed lines provides continuous monitoring without draining the system.",
      },
    ],
    popularServices: ["water-heaters", "smart-leak-shutoff", "gas-services", "frozen-burst-pipes"],
  },
  "lahontan": {
    lede: "The Truckee-Tahoe area's first master-planned gated community, set at 6,500 feet along the Tom Weiskopf course.",
    overview:
      "Lahontan was the first master-planned gated community in the Truckee-Tahoe area, breaking ground in 1996 with the Tom Weiskopf championship course opening in 1998. Roughly 400 of the 509 lots have been built as of 2025, and the community's architectural standards have long emphasized Old Tahoe style construction: heavy stonework, custom timberwork, and natural materials. Most homes are second residences or seasonal properties held to high construction standards, from the estate homes along the championship and par-3 courses to the properties bordering Martis Creek and the meadow open space. That combination of custom construction and seasonal use is the whole story for plumbing here.",
    sections: [
      {
        heading: "Water heater repair for Lahontan's Old Tahoe stone homes",
        paragraphs: [
          "At 6,500 feet, cold groundwater from NCSD's Martis Valley Water System enters well below typical municipal temperatures, and gas-fired units operate below their sea-level ratings. Many Lahontan homes run multiple water heaters serving different zones of the house, which multiplies the failure points.",
          "The community's earliest homes date to the late 1990s, and units that have cycled through decades of seasonal use are now showing it. Whether it is a failing thermocouple, sediment in a tank, or inconsistent output across zones, we diagnose first and confirm performance before we leave.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Installing water heaters at 6,500 feet",
        paragraphs: [
          "At 6,500 feet, a gas-fired unit needs a high-altitude kit or a factory high-altitude model to burn safely and efficiently. We size for the home's actual demand, check fuel source and venting path, and coordinate with the Lahontan Design Review Committee when the work affects the mechanical room layout or exterior venting.",
          "Permits run through the Placer County Building Services Division (Tahoe office), which we file as part of the project.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless for seasonal Lahontan homes",
        paragraphs: [
          "Tankless fits Lahontan's seasonal pattern: no standby loss during extended vacancy, hot water on demand when the family arrives. For larger estate homes with high simultaneous demand across multiple bathrooms and guest wings, a properly sized system handles the load without running short.",
          "At this elevation, cold inlet water and altitude-adjusted combustion still require careful sizing to perform reliably. We size for actual simultaneous demand, confirm gas supply capacity, and test output at multiple draw points.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair in homes built since 1996",
        paragraphs: [
          "Gas fireplaces are a defining architectural element in Lahontan, and some homes have multiple hearths. Southwest Gas feeds the full list: furnaces, water heaters, cooktops, dryers, and outdoor amenities. The earliest homes have been through decades of seasonal temperature swings since construction began in 1996, and that cycling loosens connections, corrodes fittings, and tires out flex lines.",
          "If you smell gas, leave the area and call Southwest Gas first on 1-877-860-6020, then call us. We locate the fault, repair or replace the affected section, and pressure-test before restoring service.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "Gas line installation with Lahontan design review",
        paragraphs: [
          "New runs commonly support fireplaces, appliance upgrades, kitchen remodels, and outdoor living additions. The work needs proper sizing, code-compliant installation, and coordination with Southwest Gas when meter capacity is involved.",
          "Permits are filed through Placer County, and we coordinate with general contractors, designers, and the Lahontan Design Review Committee when the work is part of a larger project or new build.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath plumbing under natural stone finishes",
        paragraphs: [
          "Lahontan's Old Tahoe style means heavy natural stone and custom materials, and the finish protection during plumbing work matters as much as the work itself. Projects range from fixture replacements and faucet swaps to full rough-in during remodels.",
          "We work with homeowners, designers, and general contractors to install plumbing that fits the layout and finish standards, protecting stone and custom millwork throughout, testing every connection, and leaving the workspace clean.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Moen Flo monitoring for second homes that sit empty",
        paragraphs: [
          "Most Lahontan homes are second residences or seasonal properties, so a slow leak behind a wall or a supply line failure during a cold snap can go undetected until the owner returns, by which time damage to custom stonework, millwork, and finishes has compounded. The community's large lot sizes and custom construction make water damage restoration especially costly here.",
          "A monitor on the main line watches flow, pressure, and temperature continuously and shuts the water off on its own when something is wrong. For an owner managing the property remotely, it provides real-time alerts and remote shutoff from a phone.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipe repair in Lahontan's guest wings",
        paragraphs: [
          "Exposed runs in crawl spaces, exterior walls, and guest wings that go unused for extended periods are the most vulnerable. Because Lahontan's custom construction means pipe routing varies significantly from home to home, locating a freeze point takes familiarity with how these homes are built.",
          "If a pipe has already gone, shut the main and call. We locate the failure, thaw only where it is safe, and repair or replace the damaged section. For homes that freeze in the same spot every winter, we assess the run and recommend insulation improvements and monitoring.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Plumbing repairs across building generations",
        paragraphs: [
          "Lahontan's homes span early builds dating to the late 1990s through recent custom construction, and each generation presents its own plumbing characteristics and maintenance patterns. Running toilets, dripping faucets, failing shutoff valves, and slow drains show up differently in each era.",
          "Sewer collection is managed by Truckee Sanitary District, with regional treatment by TTSA. When a drain issue turns out to sit at the lateral connection to the TSD main rather than inside the house, we work out where the boundary falls and help you coordinate the next step.",
        ],
      },
    ],
    headings: {
      emergency: "Burst pipe, gas smell or no water this weekend",
      reviews: "What Lahontan homeowners say",
      popular: "The jobs Lahontan homes call us for",
      faqs: "Questions about altitude, permits and vacancy",
      cta: "Call for a Lahontan plumber",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Lahontan?",
        answer:
          "Water service in Lahontan is provided by Northstar Community Services District (NCSD) through the Martis Valley Water System. NCSD took full ownership of the system in 2015, serving Lahontan along with Martis Camp and Schaffer's Mill, and the water is 100% groundwater from the Martis Valley Aquifer. Sewer collection is handled by Truckee Sanitary District (TSD), with regional wastewater treatment managed by the Tahoe-Truckee Sanitation Agency (TTSA). Natural gas is provided by Southwest Gas.",
      },
      {
        question: "Do I need a high-altitude water heater in Lahontan?",
        answer:
          "Yes. Lahontan sits at approximately 6,500 feet, and at that elevation reduced oxygen affects combustion in gas-fired water heaters. A unit installed without high-altitude adjustment runs less efficiently, produces more carbon monoxide, and wears out faster. Most manufacturers offer factory-configured high-altitude models or conversion kits. The cold groundwater from NCSD adds further load, requiring a larger temperature rise to reach standard output.",
      },
      {
        question: "How do I protect my Lahontan home's plumbing when I'm away?",
        answer:
          "The most effective approach combines smart leak detection with proper winterization. A Moen Flo system monitors the supply line continuously and can shut the water off automatically if it detects a leak or abnormal flow. For extended vacancies, keeping minimum heat on and insulating vulnerable pipe runs reduces freeze risk. The shoulder months in Martis Valley carry particular risk because temperatures can still drop below freezing while homes sit vacant between ski season and summer.",
      },
      {
        question: "Do I need a permit for plumbing work in Lahontan?",
        answer:
          "Lahontan is in unincorporated Placer County, so plumbing permits are issued through the Placer County Building Services Division (Tahoe office). Most replacements and new installations require one. The Lahontan Design Review Committee may also be involved for modifications that affect the exterior or visible mechanical elements of the home. We handle permit filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Lahontan?",
        answer:
          "Turn off the main water supply first, so a pipe that has already cracked does not flood the house when the ice releases. Do not use an open flame or a heat gun. Gentle heat from a hair dryer, or towels soaked in warm water, is safe. If you cannot find the frozen section, or a pipe has already burst, call 530-587-0733. Because pipe routing varies from home to home here, we locate the failure point with the home's construction in mind.",
      },
      {
        question: "How much does it cost to winterize plumbing in Lahontan?",
        answer:
          "It depends on the size of the home, the number of fixtures, and the complexity of the plumbing system. Lahontan homes tend to be larger custom builds with multiple bathrooms, guest wings, and high-end mechanical systems that add to the scope. We evaluate the home's specific systems and give clear pricing before any work starts. For year-round protection instead of a seasonal shutdown, a Moen Flo smart leak detection system combined with insulation on exposed lines provides continuous monitoring without draining the system.",
      },
    ],
    popularServices: ["water-heaters", "smart-leak-shutoff", "gas-services"],
  },
  "schaffers-mill": {
    lede: "A gated Martis Valley community, still building out, of custom homes and Mountain Lodge townhomes.",
    overview:
      "Schaffer's Mill was established in 2004 and named for George Schaffer, known as the Father of Truckee, and it is still actively building out with roughly three quarters of lots developed as of 2025. The community mixes full-time residents, second-home owners, and vacation rental properties, from custom homes along the Johnny Miller championship golf course to the Mountain Lodge townhomes near Clubhouse Village and the newer Alpine Ridge homesites at the upper elevations. That means we work on both newer construction and homes approaching two decades of use, each with its own plumbing considerations.",
    sections: [
      {
        heading: "Water heater repair in Schaffer's Mill's first phases",
        paragraphs: [
          "Schaffer's Mill was established in 2004, and with roughly three quarters of lots developed as of 2025, the community holds both newer construction and homes approaching two decades of use. Water heaters from the community's earliest phases are now reaching replacement age. Cold groundwater from NCSD's Martis Valley Water System adds load on every unit.",
          "Whether it is a failing thermocouple, sediment buildup, or inconsistent output from a unit that has cycled through years of seasonal vacancy, we diagnose before recommending and confirm performance before we leave.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Installing water heaters for townhomes and custom homes",
        paragraphs: [
          "Mountain Lodge townhomes and custom homes present different installation access and sizing requirements, and we evaluate the fuel source, venting path, and hot water demand before recommending a unit. At this elevation, gas-fired units need high-altitude kits or factory high-altitude models to burn safely and efficiently.",
          "Permits run through the Placer County Building Services Division, and for new construction on the community's remaining undeveloped lots, the plumbing permit sits inside the broader building approval process.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless systems for Schaffer's Mill rental turnover",
        paragraphs: [
          "Tankless fits a community with Schaffer's Mill's mix of full-time residents, second-home owners, and vacation rentals: no standby loss during vacancy, hot water on demand when the owner or guests arrive. For custom homes with higher simultaneous demand, properly sized systems handle multiple fixtures at once.",
          "Cold inlet water and altitude-adjusted combustion still require careful sizing. We size for the home's actual fixture demand at elevation, confirm gas supply capacity, and test output at multiple draw points.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair as seasonal wear adds up",
        paragraphs: [
          "Southwest Gas feeds furnaces, water heaters, fireplaces, cooktops, dryers, and outdoor amenities across the community. Construction here is relatively new, but gas connections and flex lines still deteriorate, and appliances that cycle through seasonal use and vacancy wear in patterns different from full-time-use homes.",
          "If you smell gas, leave the area and call Southwest Gas first on 1-877-860-6020, then call us. We locate the fault, repair or replace the affected section, and pressure-test before restoring service.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "New gas lines in Schaffer's Mill remodels",
        paragraphs: [
          "New runs commonly support fireplaces, appliance upgrades, kitchen remodels, and outdoor living additions. The work needs proper sizing, code-compliant installation, and coordination with Southwest Gas when meter capacity is involved.",
          "Permits are filed through Placer County, and we coordinate with general contractors and designers when the work is part of a remodel or new build.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath plumbing in mountain modern homes",
        paragraphs: [
          "Schaffer's Mill's mountain modern construction means clean lines and quality finishes that need careful protection during plumbing work. Projects range from fixture replacements and faucet swaps to full rough-in during remodels, in both custom homes and Mountain Lodge townhomes.",
          "We work with homeowners, designers, and general contractors to install plumbing that fits the layout, water pressure, and finish standards, testing every connection and leaving the workspace clean.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Moen Flo for vacant Schaffer's Mill properties",
        paragraphs: [
          "In a community with Schaffer's Mill's rental and second-home mix, a slow leak behind a wall or a supply line failure during a cold snap can go undetected for days or weeks in a vacant property, and damage compounds before anyone discovers it. A monitor on the main line watches flow, pressure, and temperature continuously and shuts the water off on its own when something is wrong.",
          "For owners managing the property remotely, it provides real-time alerts and remote shutoff from a phone, plus freeze alerts when temperatures drop toward risky levels.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipe repair from the canyon floor to Alpine Ridge",
        paragraphs: [
          "The upper-elevation Alpine Ridge homesites experience colder conditions than the lower sections of the community, so freeze risk varies within the gates. Properties that sit vacant between seasonal visits or rental bookings face the highest risk because failures go undetected.",
          "If a pipe has already gone, shut the main and call. We locate the failure, thaw only where it is safe, and repair or replace the damaged section. For a home that freezes in the same spot every winter, we assess the run and recommend insulation improvements and monitoring.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Plumbing repairs as the community matures",
        paragraphs: [
          "Schaffer's Mill's housing stock is newer than many Truckee communities, but plumbing components still wear, and homes from the earliest phases now need the kind of maintenance that comes with fifteen to twenty years of use. Running toilets, dripping faucets, failing shutoff valves, and slow drains turn up on a predictable schedule.",
          "Sewer collection is managed by Truckee Sanitary District, with regional treatment by TTSA. When a drain issue turns out to sit at the lateral connection to the TSD main, we work out where the boundary falls and help you coordinate the next step.",
        ],
      },
    ],
    headings: {
      emergency: "Burst pipe, gas smell or no water at the Mill",
      reviews: "What Schaffer's Mill homeowners say",
      popular: "Jobs we do most from Mountain Lodge to Alpine Ridge",
      faqs: "Questions we get from Mill homeowners",
      cta: "Get a Schaffer's Mill plumber on the phone",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Schaffer's Mill?",
        answer:
          "Water service in Schaffer's Mill is provided by Northstar Community Services District (NCSD) through the Martis Valley Water System. NCSD took full ownership of the system in 2015, serving Schaffer's Mill along with Martis Camp and Lahontan, and the water is 100% groundwater from the Martis Valley Aquifer. Sewer collection is handled by Truckee Sanitary District (TSD), with regional wastewater treatment managed by the Tahoe-Truckee Sanitation Agency (TTSA). Natural gas is provided by Southwest Gas.",
      },
      {
        question: "Do I need a high-altitude water heater in Schaffer's Mill?",
        answer:
          "Yes. Schaffer's Mill sits at Martis Valley elevations where reduced oxygen affects combustion in gas-fired water heaters. A unit installed without high-altitude adjustment runs less efficiently, produces more carbon monoxide, and wears out faster. Most manufacturers offer factory-configured high-altitude models or conversion kits. The cold groundwater from NCSD adds further load, requiring a larger temperature rise to reach standard output.",
      },
      {
        question: "How do I protect my Schaffer's Mill home's plumbing when I'm away?",
        answer:
          "The most effective approach combines smart leak detection with proper winterization. A Moen Flo system monitors the supply line continuously and can shut the water off automatically if it detects a leak or abnormal flow. For extended vacancies, keeping minimum heat on and insulating vulnerable pipe runs reduces freeze risk. We can assess your property's specific vulnerabilities and recommend the right combination of protection.",
      },
      {
        question: "Do I need a permit for plumbing work in Schaffer's Mill?",
        answer:
          "Schaffer's Mill is in unincorporated Placer County, so plumbing permits are issued through the Placer County Building Services Division (Tahoe office). Most replacements and new installations require one. For new construction on the community's remaining undeveloped lots, the plumbing permit sits inside the broader building approval process. We handle permit filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Schaffer's Mill?",
        answer:
          "Turn off the main water supply first, so a pipe that has already cracked does not flood the house when the ice releases. Do not use an open flame or a heat gun. Gentle heat from a hair dryer, or towels soaked in warm water, is safe. If you cannot find the frozen section, or a pipe has already burst, call 530-587-0733. Properties at the upper Alpine Ridge homesites face colder conditions, so we prioritize those on winter calls.",
      },
      {
        question: "How much does it cost to winterize plumbing in Schaffer's Mill?",
        answer:
          "It depends on the size of the home, the number of fixtures, and the complexity of the plumbing system. A Mountain Lodge townhome with a straightforward layout is less involved than winterizing a custom home with multiple bathrooms and outdoor plumbing. We evaluate the property's specific systems and give clear pricing before any work starts. For year-round protection instead of a seasonal shutdown, a Moen Flo smart leak detection system combined with insulation on exposed lines provides continuous monitoring without draining the system.",
      },
    ],
    popularServices: ["water-heaters", "frozen-burst-pipes", "smart-leak-shutoff"],
  },
  "grays-crossing": {
    lede: "An open mountain modern community at 5,500 feet, trail-linked to downtown Truckee.",
    overview:
      "Gray's Crossing sits at roughly 5,500 feet, lower than most Martis Valley communities, which means relatively less snowfall while winter temperatures still drop well below freezing. Unlike its gated neighbors, it is an open community with a trail network that connects directly to downtown Truckee by bike, and the housing stock is almost entirely mountain modern. Custom homes along the Peter Jacobsen championship golf course, the Fairway Townhomes on Annies Loop, and the newer Village at Gray's Crossing residences draw a healthy mix of full-time residents and second-home owners.",
    sections: [
      {
        heading: "Water heater repair in Gray's Crossing's open community",
        paragraphs: [
          "Gray's Crossing mixes full-time residents and second-home owners, so some water heaters cycle daily while others sit inactive between visits, and both patterns wear differently. Water comes from TDPUD through the community's facilities district arrangement.",
          "Whether it is a failing thermocouple, sediment from inactivity, or inconsistent output from a unit that has seen hard daily use, we diagnose before recommending and confirm performance before we leave.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Installing water heaters at 5,500 feet",
        paragraphs: [
          "At roughly 5,500 feet, gas-fired units still need high-altitude kits or factory-configured models to burn safely and efficiently. The mountain modern construction throughout Gray's Crossing, with open floor plans and specific mechanical room configurations, often decides the installation approach and venting path as much as the unit does.",
          "We size for the home's actual hot water use, check fuel source and venting, and file the permit through the Town of Truckee Building and Safety Division.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless for full-time families in Gray's Crossing",
        paragraphs: [
          "Tankless pulls double duty in Gray's Crossing. For second-home owners it eliminates standby loss during vacancy; for full-time families it delivers continuous hot water without running a large tank around the clock. The lower elevation here means slightly less altitude derating than in higher communities.",
          "Cold inlet water and altitude-adjusted combustion still require careful sizing. We size for the home's fixture count and flow demands, confirm gas supply capacity, and test output across draw points before calling it done.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair where fireplaces anchor the living room",
        paragraphs: [
          "In many Gray's Crossing homes, the gas fireplace anchors the open-concept living space, so a gas problem is a comfort problem the same evening. Over time, connections loosen, fittings corrode, and flex lines deteriorate, particularly through seasonal temperature cycling.",
          "If you smell gas, leave the area and call Southwest Gas first on 1-877-860-6020, then call us. We locate the fault, repair or replace the affected section, and pressure-test before restoring service.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "New gas lines in the Village at Gray's Crossing",
        paragraphs: [
          "The community keeps developing, with the Village at Gray's Crossing adding new townhome residences, and new runs commonly support fireplaces, ranges, patio heaters, and standby generators. The work needs proper sizing, code-compliant installation, and coordination with Southwest Gas when meter capacity is involved.",
          "Permits are filed through the Town of Truckee Building and Safety Division as part of the job.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath work behind glass and open floor plans",
        paragraphs: [
          "The large windows and open floor plans common in Gray's Crossing homes sometimes complicate access to plumbing behind walls, and the work has to be done without disturbing the home's clean aesthetic. Projects range from fixture replacements and faucet swaps to full rough-in during remodels.",
          "We protect finishes throughout, test every connection, and leave the workspace clean, coordinating with your designer or contractor when the plumbing sits inside a larger project.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Moen Flo alerts for Gray's Crossing commuters and travelers",
        paragraphs: [
          "Freeze protection is not only a second-home concern. Even full-time residents face undetected leaks behind walls or under floors while at work or traveling. A monitor on the main line watches flow, pressure, and temperature continuously and shuts the water off on its own when something is wrong.",
          "It provides real-time alerts and remote shutoff from a phone, giving homeowners peace of mind whether they are home or away.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipe repair in Gray's Crossing winters",
        paragraphs: [
          "Gray's Crossing sits lower than most Martis Valley communities, which means relatively less snowfall, but winter temperatures still drop well below freezing. Exposed pipe runs, exterior hose bibs, and supply lines in crawl spaces stay vulnerable, and properties that sit vacant during cold stretches face the highest risk.",
          "If a pipe has already gone, shut the main and call. We locate the failure, thaw only where it is safe, and repair or replace the damaged section. For repeat freeze spots, we assess the run and recommend insulation improvements and monitoring.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Plumbing repairs in newer mountain modern builds",
        paragraphs: [
          "Gray's Crossing's housing stock is relatively new, with most homes built from the mid-2000s onward, but plumbing components still wear, and the mountain modern construction style brings its own access and service considerations. Running toilets, dripping faucets, failing shutoff valves, and slow drains are the everyday calls.",
          "Sewer collection is managed by Truckee Sanitary District, with regional treatment by TTSA. When a drain issue turns out to sit at the lateral connection to the TSD main, we work out where the boundary falls and help you coordinate the next step.",
        ],
      },
    ],
    headings: {
      emergency: "Burst pipe, gas smell or no water tonight",
      reviews: "What Gray's Crossing homeowners say",
      popular: "The work Gray's Crossing homes need most",
      faqs: "Altitude, permits and freeze questions, answered",
      cta: "Talk to a plumber who knows Gray's Crossing",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Gray's Crossing?",
        answer:
          "Water and electric service in Gray's Crossing is provided by Truckee Donner Public Utility District (TDPUD) through a community facilities district arrangement. Sewer collection is handled by Truckee Sanitary District (TSD), with regional wastewater treatment managed by the Tahoe-Truckee Sanitation Agency (TTSA). Natural gas is provided by Southwest Gas.",
      },
      {
        question: "Do I need a high-altitude water heater in Gray's Crossing?",
        answer:
          "Yes. Gray's Crossing sits at approximately 5,500 feet, which is lower than many Truckee communities but still high enough to affect gas combustion in water heaters. A unit installed without high-altitude adjustment runs less efficiently, produces more carbon monoxide, and wears out faster. Most manufacturers offer factory-configured high-altitude models or conversion kits.",
      },
      {
        question: "How do I protect my Gray's Crossing home's plumbing when I'm away?",
        answer:
          "The most effective approach combines smart leak detection with proper winterization. A Moen Flo system monitors the supply line continuously and can shut the water off automatically if it detects a leak or abnormal flow. For extended vacancies, keeping minimum heat on and insulating vulnerable pipe runs reduces freeze risk. While Gray's Crossing gets less snow than higher-elevation communities, winter temperatures still drop well below freezing.",
      },
      {
        question: "Do I need a permit for plumbing work in Gray's Crossing?",
        answer:
          "Gray's Crossing is within the Town of Truckee, so plumbing permits are issued through the Town of Truckee Building and Safety Division. Most replacements and new installations require one. We handle permit filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Gray's Crossing?",
        answer:
          "Turn off the main water supply first, so a pipe that has already cracked does not flood the house when the ice releases. Do not use an open flame or a heat gun. Gentle heat from a hair dryer, or towels soaked in warm water, is safe. If you cannot find the frozen section, or a pipe has already burst, call 530-587-0733. Properties that sit vacant during cold stretches face the highest risk, so we check those first on winter calls.",
      },
      {
        question: "How much does it cost to winterize plumbing in Gray's Crossing?",
        answer:
          "It depends on the size of the home, the number of fixtures, and the complexity of the plumbing system. Gray's Crossing homes are generally newer construction with modern plumbing, which can simplify the process compared to older mountain homes. We evaluate the home's specific systems and give clear pricing before any work starts.",
      },
    ],
    popularServices: ["water-heaters", "gas-services", "kitchen-bath-plumbing"],
  },
  "old-greenwood": {
    lede: "A gated resort community of custom homesites, villas, cabins and fractional residences at 5,900 feet.",
    overview:
      "Old Greenwood pairs roughly 100 custom homesites with villas, luxury cabins, townhomes, and fractional residences, so plumbing needs range from full-time residential maintenance to seasonal vacation-home care and shared-ownership coordination. The Jack Nicklaus Signature Golf Course anchors the community, with the Pavilion swim and fitness center and the Meadow nine fairways nearby. It is also a certified Audubon International community, and its proximity to I-80 makes it one of the most accessible resort communities in the Truckee-Tahoe corridor.",
    sections: [
      {
        heading: "Water heater repair across Old Greenwood's property types",
        paragraphs: [
          "Old Greenwood's ownership mix, from roughly one hundred custom homesites to villas, luxury cabins, townhomes, and fractional residences, means water heaters see everything from full-time daily use to the inconsistent patterns of seasonal and fractional ownership, which wears components differently than steady residential use.",
          "Whether it is a failing thermocouple, sediment buildup, or inconsistent output from a unit approaching end of life, we diagnose before recommending and confirm performance before we leave.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Installing water heaters in cabins, villas and estate homes",
        paragraphs: [
          "Custom estate homes, villas, cabins, and townhomes each present different installation access and sizing requirements, so the recommendation starts with the property type, not the unit. At 5,900 feet, gas-fired units need high-altitude kits or factory-configured models to burn safely and efficiently.",
          "We size for the property's actual hot water use, check fuel source and venting path, and file the permit through the Placer County Building Services Division.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless for Old Greenwood's fractional rotations",
        paragraphs: [
          "Tankless suits Old Greenwood's fractional and seasonal pattern: no standby loss between owner rotations, hot water on demand when the owner or guest arrives. For custom homes with higher simultaneous demand, properly sized systems handle multiple fixtures running at once.",
          "Cold inlet water and altitude-adjusted combustion still require careful sizing. We size for actual simultaneous demand, confirm gas supply capacity, and test output at multiple draw points.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair in timber and stone construction",
        paragraphs: [
          "The timber and stone construction common in Old Greenwood homes often frames a gas fireplace as the central feature, and gas also feeds furnaces, water heaters, cooktops, dryers, and outdoor amenities. Homes that cycle between seasonal use and vacancy put connections, fittings, and flex lines through repeated expansion and contraction.",
          "If you smell gas, leave the area and call Southwest Gas first on 1-877-860-6020, then call us. We locate the fault, repair or replace the affected section, and pressure-test before restoring service.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "New gas lines for Old Greenwood fireplaces and fire pits",
        paragraphs: [
          "New runs in Old Greenwood commonly support fireplaces, fire features, appliance upgrades, and kitchen remodels, whether the work is in a custom estate home or a townhome unit. Proper sizing, code-compliant installation, and coordination with Southwest Gas for meter capacity are required in every case.",
          "Permits are filed through Placer County as part of the job.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath plumbing that respects the finishes",
        paragraphs: [
          "Timber and stone finishes are the signature of Old Greenwood construction, and plumbing work here has to respect them. Projects range from fixture replacements and faucet swaps in villas and cabins to full rough-in during remodels of estate homes.",
          "We protect finishes throughout, test every connection, and leave the workspace clean, working with homeowners, designers, and contractors as the project requires.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Moen Flo for homes between fractional owner stays",
        paragraphs: [
          "Properties that sit vacant between seasonal visits or fractional ownership rotations face the highest risk, because a slow leak behind a wall or a supply line failure during a cold snap can go undetected for days or weeks before anyone walks in. A monitor on the main line watches flow, pressure, and temperature continuously and shuts the water off on its own when something is wrong.",
          "For owners and management companies coordinating between stays, it provides real-time alerts and remote shutoff from a phone, plus freeze alerts during cold stretches.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipe repair off I-80's easiest winter access",
        paragraphs: [
          "Old Greenwood's proximity to I-80 makes it one of the most accessible resort communities in the Truckee-Tahoe corridor, which matters when a pipe bursts on a winter weekend. Exposed runs in crawl spaces, exterior walls, and unconditioned areas stay the vulnerable points, and vacant properties between visits face the highest risk.",
          "If a pipe has already gone, shut the main and call. We locate the failure, thaw only where it is safe, and repair or replace the damaged section. For repeat freeze spots, we assess the run and recommend insulation improvements and monitoring.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Plumbing repairs coordinated with your management company",
        paragraphs: [
          "The range of property types means we work on systems from townhome plumbing to custom estate installations, each with its own access and service patterns. For fractional ownership properties, we coordinate maintenance and winterization procedures with the management company so coverage holds between owner rotations.",
          "Sewer collection is managed by Truckee Sanitary District, with regional treatment by TTSA. When a drain issue turns out to sit at the lateral connection to the TSD main, we work out where the boundary falls and help you coordinate the next step.",
        ],
      },
    ],
    headings: {
      emergency: "Burst pipe, gas smell or no water between owner stays",
      reviews: "What Old Greenwood homeowners say",
      popular: "Jobs we do most across the property types",
      faqs: "Questions about fractional ownership and permits",
      cta: "Get an Old Greenwood plumber on the phone",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Old Greenwood?",
        answer:
          "Water and electric service in Old Greenwood is provided by Truckee Donner Public Utility District (TDPUD) through a community facilities district arrangement (CFD 03-1). Sewer collection is handled by Truckee Sanitary District (TSD), with regional wastewater treatment managed by the Tahoe-Truckee Sanitation Agency (TTSA). Natural gas is provided by Southwest Gas.",
      },
      {
        question: "Do I need a high-altitude water heater in Old Greenwood?",
        answer:
          "Yes. Old Greenwood sits at approximately 5,900 feet, and at that elevation reduced oxygen affects combustion in gas-fired water heaters. A unit installed without high-altitude adjustment runs less efficiently, produces more carbon monoxide, and wears out faster. Most manufacturers offer factory-configured high-altitude models or conversion kits.",
      },
      {
        question: "How do I protect my Old Greenwood home's plumbing when I'm away?",
        answer:
          "The most effective approach combines smart leak detection with proper winterization. A Moen Flo system monitors the supply line continuously and can shut the water off automatically if it detects a leak or abnormal flow. For extended vacancies, keeping minimum heat on and insulating vulnerable pipe runs reduces freeze risk. For fractional ownership properties, coordinating winterization procedures with the management company helps ensure coverage between owner rotations.",
      },
      {
        question: "Do I need a permit for plumbing work in Old Greenwood?",
        answer:
          "Old Greenwood is in unincorporated Placer County, so plumbing permits are issued through the Placer County Building Services Division (Tahoe office). Most replacements and new installations require one. We handle permit filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Old Greenwood?",
        answer:
          "Turn off the main water supply first, so a pipe that has already cracked does not flood the house when the ice releases. Do not use an open flame or a heat gun. Gentle heat from a hair dryer, or towels soaked in warm water, is safe. If you cannot find the frozen section, or a pipe has already burst, call 530-587-0733. The community's proximity to I-80 generally keeps winter access workable for our technicians.",
      },
      {
        question: "How much does it cost to winterize plumbing in Old Greenwood?",
        answer:
          "It depends on the size of the home, the number of fixtures, and the complexity of the plumbing system. A townhome or cabin with a straightforward layout is less involved than winterizing a custom estate home with multiple bathrooms and outdoor plumbing. We evaluate the property's specific systems and give clear pricing before any work starts.",
      },
    ],
    popularServices: ["water-heaters", "frozen-burst-pipes", "smart-leak-shutoff"],
  },
  "tahoe-donner": {
    lede: "A large HOA community north of Truckee, 6,000 to 7,400 feet, with over 80 percent seasonal homes.",
    overview:
      "Tahoe Donner is a large HOA-managed planned community north of Truckee, running from 6,000 to 7,400 feet with roughly 400 inches of annual snowfall. Over 80 percent of homes are used seasonally, and the housing stock spans original 1970s and 1980s builds to recently remodeled homes. Plumbing here has to handle months of vacancy, hard freezes, and the thermal cycling of intermittent use, with freeze protection a year-round necessity rather than a seasonal afterthought.",
    sections: [
      {
        heading: "Water heater repair in Tahoe Donner's 1970s-era homes",
        paragraphs: [
          "Many Tahoe Donner homes were built in the 1970s and 1980s, and while most original water heaters have been replaced, the replacements were not always sized or configured for the altitude and how the home is actually used. Cold groundwater from TDPUD enters well below 50 degrees for much of the year, which means longer recovery and harder-working elements, burners, and anode rods.",
          "Homes that sit vacant between visits are especially prone to sediment buildup and thermal cycling wear. Whether it is a failing thermocouple, a corroded tank, or inconsistent output from a unit sitting idle, we present clear options and confirm performance before we leave.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Installing water heaters at 7,000 feet and up",
        paragraphs: [
          "Tahoe Donner runs from 6,000 to 7,400 feet, and at 6,750 feet and above most gas-fired units need high-altitude kits or factory-configured high-altitude models to maintain safe and efficient combustion. We size for the hot water the house actually uses, check fuel source and venting path, and protect finishes during the work.",
          "Permits are filed through the Town of Truckee Building and Safety Division as part of the job.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless sizing for Tahoe Donner's seasonal homes",
        paragraphs: [
          "Tankless fits Tahoe Donner's seasonal ownership: no standby loss during months of vacancy, hot water on demand when the family arrives. But a unit that performs well at sea level can underdeliver at 7,000 feet without proper sizing and setup, because cold inlet water and high-altitude combustion both cut effective output.",
          "We size for the home's actual simultaneous demand at its elevation, confirm gas supply capacity, and test output at multiple draw points before calling it done.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair after decades of temperature swings",
        paragraphs: [
          "Gas lines in Tahoe Donner supply furnaces, water heaters, fireplaces, cooktops, dryers, and outdoor appliances, and many have been through decades of seasonal temperature swings. That cycling loosens connections, corrodes fittings, and deteriorates flex lines.",
          "If you smell gas, leave the area and call Southwest Gas first on 1-877-860-6020, then call us. We locate the fault, repair or replace the affected section, and pressure-test before restoring service.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "New gas lines in Tahoe Donner remodels",
        paragraphs: [
          "Whether you are adding a gas fireplace, running a line to a new range or patio heater, or connecting a standby generator, the work needs proper sizing, code-compliant installation, and coordination with Southwest Gas when meter capacity is involved.",
          "Permits are filed through the Town of Truckee Building and Safety Division, and we coordinate with general contractors and designers when the gas work sits inside a larger remodel.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath work when galvanized lines remain",
        paragraphs: [
          "Kitchen and bath projects in Tahoe Donner range from fixture swaps and faucet replacements to full rough-in during remodels. Older galvanized supply lines are still common in original builds, and we assess their condition before new fixtures go in, recommending repiping where the lines would undermine the work.",
          "We work with homeowners, designers, and general contractors on everything from a faucet replacement to full rough-in, testing every connection and leaving the workspace clean.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Moen Flo for Tahoe Donner's seasonal majority",
        paragraphs: [
          "With over 80 percent of Tahoe Donner homes used seasonally, a slow leak behind a wall or a supply line failure during a cold snap can go undetected for weeks, and damage compounds in an unoccupied home. A monitor on the main line watches flow, pressure, and temperature continuously and shuts the water off on its own when something is wrong.",
          "For seasonal owners who want protection between visits, it provides real-time alerts and remote shutoff from a phone, with freeze alerts when temperatures drop.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipe repair after Tahoe Donner cold snaps",
        paragraphs: [
          "Roughly 400 inches of annual snowfall and hard freezes define winter in Tahoe Donner. The vulnerable points are exposed runs under raised foundations, exterior hose bibs, and supply lines in uninsulated crawl spaces. Homes closed up for winter without proper winterization face the highest risk, but occupied homes freeze too during extended cold snaps well below zero.",
          "If a pipe has already gone, shut the main and call. We locate the failure, thaw only where it is safe, and repair or replace the damaged section. For a house that freezes in the same spot every winter, we assess the run and recommend insulation improvements and monitoring.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Plumbing repairs from 1970s builds to modern PEX",
        paragraphs: [
          "Tahoe Donner's age and variety mean we work on systems ranging from original 1970s-era plumbing to modern PEX in recently remodeled homes. Running toilets, dripping faucets, failing shutoff valves, and slow drains show up across all of it.",
          "Sewer collection is managed by Truckee Sanitary District, with regional treatment by TTSA. When a drain issue turns out to sit at the lateral connection to the TSD main, we work out where the boundary falls and help you coordinate the next step.",
        ],
      },
    ],
    headings: {
      emergency: "Burst pipe, gas smell or no water after a cold snap",
      reviews: "What Tahoe Donner homeowners say",
      popular: "Jobs we do most in the association",
      faqs: "Seasonal ownership questions we hear often",
      cta: "Call the plumber Tahoe Donner owners use",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Tahoe Donner?",
        answer:
          "Water and electric service in Tahoe Donner is provided by Truckee Donner Public Utility District (TDPUD). Sewer collection is handled by Truckee Sanitary District (TSD), with regional wastewater treatment managed by the Tahoe-Truckee Sanitation Agency (TTSA). Natural gas is provided by Southwest Gas.",
      },
      {
        question: "Do I need a high-altitude water heater in Tahoe Donner?",
        answer:
          "Yes. Tahoe Donner ranges from 6,750 to over 7,400 feet, and at that elevation reduced oxygen affects combustion in gas-fired water heaters. A unit installed without high-altitude adjustment runs less efficiently, produces more carbon monoxide, and wears out faster. Most manufacturers offer factory-configured high-altitude models or conversion kits. The cold groundwater from TDPUD, entering well below 50 degrees for much of the year, adds further load on burners and elements.",
      },
      {
        question: "How do I protect my Tahoe Donner home's plumbing when I'm away?",
        answer:
          "The most effective approach combines proper winterization with smart leak detection. A Moen Flo system monitors the supply line continuously and can shut the water off automatically if it detects a leak or abnormal flow. For extended winter vacancies, keeping minimum heat on and insulating vulnerable pipe runs reduces freeze risk considerably. We can walk the house and tell you which of those it actually needs.",
      },
      {
        question: "Do I need a permit for plumbing work in Tahoe Donner?",
        answer:
          "Tahoe Donner is within the Town of Truckee, so plumbing permits are issued through the Town of Truckee Building and Safety Division. Most replacements and new installations require one. We handle permit filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Tahoe Donner?",
        answer:
          "Turn off the main water supply first, so a pipe that has already cracked does not flood the house when the ice releases. Do not use an open flame or a heat gun. Gentle heat from a hair dryer, or towels soaked in warm water, is safe. If you cannot find the frozen section, or a pipe has already burst, call 530-587-0733. Homes closed up without proper winterization face the highest risk, but even occupied homes freeze during extended cold snaps well below zero.",
      },
      {
        question: "How much does it cost to winterize plumbing in Tahoe Donner?",
        answer:
          "It depends on the size of the home, the number of fixtures, and the complexity of the plumbing system. A smaller Tahoe Donner cabin with a straightforward layout is less involved than winterizing a larger home with multiple bathrooms and outdoor plumbing. We evaluate the home's specific systems and give clear pricing before any work starts.",
      },
    ],
    popularServices: ["water-heaters", "frozen-burst-pipes", "smart-leak-shutoff", "kitchen-bath-plumbing"],
  },
  "northstar": {
    lede: "A resort community of 808 homes and 672 condos across six associations, on one district's water and sewer.",
    overview:
      "Northstar runs the full spectrum from compact rental condos in the Village to custom estates on Highlands View Road: roughly 808 single-family homes and 672 condominium units across six condo associations, plus ski-in and ski-out properties at Mountainside and the original Northstar homes near the Recreation Center. Heavy short-term rental use means plumbing systems see intense bursts of guest demand followed by quiet stretches of vacancy. We work across all of it, from Aspen Grove and Gold Bend condos to the custom homes above the slopes.",
    sections: [
      {
        heading: "Water heater repair in Northstar's rental condos",
        paragraphs: [
          "A compact Village condo with a single bathroom has different water heater needs than a custom home on Highlands View Road with multiple zones, and Northstar has both in large numbers. Cold groundwater from NCSD and the community's elevation put stress on every unit, and properties with heavy rental turnover cycle their water heaters harder than owner-occupied homes.",
          "Whether it is a failing thermocouple, sediment in a tank, inconsistent output from a unit approaching end of life, or a system that cannot keep up with guest demand during peak rental weekends, we present clear options and confirm performance before we leave.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Installing water heaters in tight condo mechanical closets",
        paragraphs: [
          "Condos and townhomes often have limited mechanical closets that constrain unit sizing and venting options, while custom homes may run multiple water heaters serving different zones. We evaluate the property's hot water demand, fuel source, venting path, and space constraints before recommending a replacement.",
          "Permits run through the Placer County Building Services Division, and in condo and townhome settings, HOA approval may also be required for modifications that affect shared walls or common systems.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless for vacation rental turnover",
        paragraphs: [
          "Tankless fits Northstar's rental pattern: no standby loss during vacancy, on-demand hot water when guests arrive. For custom homes with high simultaneous demand, properly sized systems handle multiple showers and appliances running at once.",
          "Cold inlet water and altitude-adjusted combustion still require careful sizing. We size for actual simultaneous demand at elevation, confirm gas supply capacity, and test output at multiple draw points.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair across Northstar's six condo associations",
        paragraphs: [
          "Gas lines supply furnaces, water heaters, fireplaces, cooktops, dryers, and outdoor appliances across both single-family homes and condo complexes. Connections loosen, fittings corrode, and flex lines deteriorate, particularly on appliances that cycle through heavy rental use and seasonal temperature swings.",
          "If you smell gas, leave the area and call Southwest Gas first on 1-877-860-6020, then call us. We locate the fault, repair or replace the affected section, and pressure-test before restoring service.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "New gas lines with Northstar HOA coordination",
        paragraphs: [
          "New runs commonly support fireplaces, appliance upgrades, kitchen remodels, and outdoor living additions. The work needs proper sizing, code-compliant installation, and coordination with Southwest Gas when meter capacity is involved.",
          "In condo and townhome settings, gas line work may also require HOA coordination and approval, and we work with general contractors, designers, and property management when the project spans ownership and common areas.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath fixtures that survive rental turnover",
        paragraphs: [
          "Kitchen and bath projects here range from fixture replacements and faucet swaps in rental-ready condos to full rough-in during remodels of custom homes. Rental properties prioritize durable, guest-proof fixture choices that hold up under heavy turnover, which changes what we recommend.",
          "We work with homeowners, property managers, designers, and general contractors to install plumbing that fits the property's layout, water pressure, and finish standards, testing every connection and leaving the workspace clean.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Moen Flo watching rentals between check-ins",
        paragraphs: [
          "Rental units face particular risk because plumbing failures between guest stays can go unnoticed until the next check-in, and a slow leak behind a wall or a supply line failure during a vacancy compounds quickly. A monitor on the main line watches flow, pressure, and temperature continuously and shuts the water off on its own when something is wrong.",
          "For owners managing rental properties remotely, it provides real-time alerts and remote shutoff from a phone, with freeze alerts during extended cold snaps.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipe repair in Northstar's 1970s and 1980s condos",
        paragraphs: [
          "Northstar's plumbing sees intense bursts of use followed by quiet stretches, and the older condo construction from the 1970s and 1980s can have supply lines in vulnerable locations that were not built to current insulation standards. Exposed runs in crawl spaces and exterior walls are the first to go.",
          "If a pipe has already gone, shut the main and call. We locate the failure, thaw only where it is safe, and repair or replace the damaged section. For properties that freeze in the same spot every winter, we assess the run and recommend insulation improvements and monitoring.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Plumbing repairs from condos to Highlands View estates",
        paragraphs: [
          "The variety of property types means we work on systems ranging from original condo plumbing to modern PEX installations in recently built custom homes. Running toilets, dripping faucets, failing shutoff valves, and slow drains turn up across all of it.",
          "Water and sewer service are both provided by Northstar Community Services District, with wastewater conveyed to Truckee Sanitary District and treated regionally by TTSA. When a drain issue turns out to sit at the lateral connection to the NCSD collection system, we work out where the boundary falls and help you coordinate the next step.",
        ],
      },
    ],
    headings: {
      emergency: "Burst pipe, gas smell or no water before check-in",
      reviews: "What Northstar owners and managers say",
      popular: "Jobs we do most across the resort",
      faqs: "Rental, HOA and altitude questions answered",
      cta: "Get a Northstar plumber on the phone",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Northstar?",
        answer:
          "Water and sewer service in Northstar is provided by Northstar Community Services District (NCSD). NCSD was formed in 1991 and manages water distribution, sewer collection, fire protection, snow removal, and road maintenance for the community. Wastewater collected by NCSD is conveyed to Truckee Sanitary District (TSD) and treated regionally by the Tahoe-Truckee Sanitation Agency (TTSA). Natural gas is provided by Southwest Gas.",
      },
      {
        question: "Do I need a high-altitude water heater in Northstar?",
        answer:
          "Yes. Northstar's elevation affects gas combustion in water heaters. A unit installed without high-altitude adjustment runs less efficiently, produces more carbon monoxide, and wears out faster. Most manufacturers offer factory-configured high-altitude models or conversion kits. The cold groundwater from NCSD adds further load, requiring a larger temperature rise to reach standard output, whether the property is a custom home or a condo unit.",
      },
      {
        question: "How do I protect my Northstar property's plumbing when it's vacant?",
        answer:
          "The most effective approach combines smart leak detection with proper winterization. A Moen Flo system monitors the supply line continuously and can shut the water off automatically if it detects a leak or abnormal flow. For rental properties, coordinating winterization procedures with your property management company helps ensure coverage between guest stays and during seasonal closures. Keeping minimum heat on and insulating vulnerable runs reduces freeze risk further.",
      },
      {
        question: "Do I need a permit for plumbing work in Northstar?",
        answer:
          "Northstar is in unincorporated Placer County, so plumbing permits are issued through the Placer County Building Services Division (Tahoe office). Most replacements and new installations require one. In condo and townhome settings, HOA approval may also be required for modifications that affect shared walls or common systems. We handle permit filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Northstar?",
        answer:
          "Turn off the main water supply first, so a pipe that has already cracked does not flood the property when the ice releases. Do not use an open flame or a heat gun. Gentle heat from a hair dryer, or towels soaked in warm water, is safe. If you cannot find the frozen section, or a pipe has already burst, call 530-587-0733. Rental units between guest stays deserve a fast look, since a burst pipe can run until the next check-in.",
      },
      {
        question: "How much does it cost to winterize plumbing in Northstar?",
        answer:
          "It depends on the size of the property, the number of fixtures, and the complexity of the plumbing system. A compact condo with a single bathroom and straightforward plumbing is less involved than winterizing a custom home with multiple bathrooms and outdoor plumbing. We evaluate the property's specific systems and give clear pricing before any work starts.",
      },
    ],
    popularServices: ["water-heaters", "frozen-burst-pipes", "smart-leak-shutoff"],
  },
  "olympic-valley": {
    lede: "Home of Palisades Tahoe, at 6,200 feet, with 1960s cabins and new subdivisions side by side.",
    overview:
      "Olympic Valley is home to Palisades Tahoe, the site of the 1960 Winter Olympics and one of the largest ski resorts in the Lake Tahoe region. The valley holds roughly 924 year-round residents alongside about 663 residential homes and more than 1,100 condominiums, and it swells significantly during ski season and summer. Eight newer subdivisions have been developed over the past two decades alongside original 1950s-era cabins, so plumbing ages and configurations vary widely across the valley floor at 6,200 feet.",
    sections: [
      {
        heading: "Water heater repair at Olympic Valley's 6,200 feet",
        paragraphs: [
          "The groundwater supplied by Olympic Valley Public Service District enters cold, and the approximately 6,200-foot valley floor elevation affects combustion efficiency and recovery times on gas-fired units. Homes and condos that sit vacant between ski weekends or between seasons are especially prone to sediment buildup and thermal cycling wear.",
          "Larger custom homes in the newer subdivisions often carry higher hot water demand across multiple bathrooms and zones. Whether it is a failing thermocouple, sediment in a tank, or inconsistent output, we diagnose before recommending and confirm performance before we leave.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Installing water heaters in 1950s cabins and new builds",
        paragraphs: [
          "Eight newer subdivisions have risen over the past two decades alongside original 1950s-era cabins, so the valley holds a wide range of plumbing ages and configurations. Compact condos may need a single unit while custom homes run multiple zones, and each calls for different sizing.",
          "At 6,200 feet, gas-fired units need high-altitude kits or factory-configured models for safe and efficient combustion. We evaluate hot water demand, fuel source, and venting path, and file the permit through the Placer County Building Services Division.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless for Olympic Valley's four bath custom homes",
        paragraphs: [
          "Tankless suits the valley's seasonal pattern, with no standby loss between visits. But cold inlet water and altitude-adjusted combustion reduce effective output below sea-level ratings, and custom homes with four or more bathrooms plus guest wings need careful sizing to handle simultaneous draw from showers, kitchen fixtures, and laundry without temperature drop.",
          "We size for actual simultaneous demand at the home's elevation, confirm gas supply capacity, and test output at multiple draw points before calling it done.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair under 400 inches of snow",
        paragraphs: [
          "The valley averages roughly 400 inches of snowfall per year, and outdoor gas infrastructure takes ground movement from freeze-thaw cycles plus damage from heavy snow loading and snow removal operations. Gas feeds furnaces, water heaters, fireplaces, cooktops, dryers, and outdoor amenities including fire pits and patio heaters.",
          "If you smell gas, leave the area and call Southwest Gas first on 1-877-860-6020, then call us. We locate the fault, repair or replace the affected section, and pressure-test before restoring service.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "New gas lines for Olympic Valley fire features",
        paragraphs: [
          "Many custom homes in the valley include outdoor gas infrastructure for fire features, built-in grills, and patio heaters, and new construction in the developing subdivisions keeps generating demand for gas line work. The work needs proper sizing, code-compliant installation, and coordination with Southwest Gas when meter capacity is involved.",
          "Permits are filed through Placer County, and we coordinate with general contractors, designers, and architects when the work is part of a larger project.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath work across the valley's generations",
        paragraphs: [
          "Many of the original 1950s and 1960s cabins have been extensively renovated or replaced, and each generation of construction introduces different plumbing standards and materials. Projects range from fixture replacements in older condos to full rough-in during new construction and major remodels.",
          "We read the house before recommending anything, protect finishes throughout, test every connection, and leave the workspace clean.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Moen Flo for condos with shared walls",
        paragraphs: [
          "Most Olympic Valley properties spend significant stretches unmonitored between visits, and a slow leak behind a wall or a supply line failure during a cold snap can go undetected for weeks. Condominiums carry additional risk because water damage in one unit can reach neighboring units before anyone finds the source.",
          "A monitor on the main line watches flow, pressure, and temperature continuously and shuts the water off on its own when something is wrong, with real-time alerts and remote shutoff for owners managing the property from elsewhere.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipe repair in Olympic Valley cold snaps",
        paragraphs: [
          "The valley averages roughly 400 inches of snowfall per year, and temperatures regularly drop well below zero during winter cold snaps. Exposed runs in crawl spaces, exterior walls, and unconditioned spaces are the most vulnerable, and condominiums with plumbing routed through shared walls and common areas face particular risk when the units on either side sit vacant and unheated.",
          "If a pipe has already gone, shut the main and call. We locate the failure, thaw only where it is safe, and repair or replace the damaged section. For repeat freeze spots, we assess the run and recommend insulation improvements and monitoring.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Plumbing repairs on the OVPSD system boundary",
        paragraphs: [
          "The valley's range of housing means we work on systems from older condominium plumbing to modern installations in recently built custom homes. Running toilets, dripping faucets, failing shutoff valves, and slow drains are the everyday calls.",
          "Sewer collection is managed by Olympic Valley Public Service District, with wastewater treatment handled regionally by TTSA. When a drain issue turns out to sit at the lateral connection to the OVPSD system, we work out where the boundary falls and help you coordinate the next step.",
        ],
      },
    ],
    headings: {
      emergency: "Burst pipe, gas smell or no water in the valley",
      reviews: "What Olympic Valley homeowners say",
      popular: "Jobs we do most in the valley and its condos",
      faqs: "Questions about 6,200 feet, permits and vacancy",
      cta: "Get an Olympic Valley plumber on the phone",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Olympic Valley?",
        answer:
          "Water and sewer service in Olympic Valley is provided by Olympic Valley Public Service District (OVPSD). OVPSD has served the valley since 1964 and also provides fire protection, solid waste collection, and emergency medical services. The district sources its water from local groundwater within the valley, and its service area covers Olympic Valley only, separate from neighboring Alpine Meadows, which is served by Alpine Springs County Water District. Electricity in the area is provided by Liberty Utilities. Natural gas is provided by Southwest Gas.",
      },
      {
        question: "Do I need a high-altitude water heater in Olympic Valley?",
        answer:
          "Yes. The Olympic Valley floor sits at approximately 6,200 feet, and at that elevation reduced oxygen affects combustion in gas-fired water heaters. A unit installed without high-altitude adjustment runs less efficiently, produces more carbon monoxide, and wears out faster. Most manufacturers offer factory-configured high-altitude models or conversion kits. The cold groundwater supplied by OVPSD adds further load on heating elements and burners.",
      },
      {
        question: "How do I protect my Olympic Valley home's plumbing when I'm away?",
        answer:
          "The most effective approach combines smart leak detection with proper winterization. A Moen Flo system monitors the supply line continuously and can shut the water off automatically if it detects a leak or abnormal flow. For extended vacancies, keeping minimum heat on and insulating vulnerable pipe runs reduces freeze risk. Olympic Valley's heavy snowfall and cold temperatures make freeze protection particularly important for homes that sit vacant between ski weekends or between seasons.",
      },
      {
        question: "Do I need a permit for plumbing work in Olympic Valley?",
        answer:
          "Olympic Valley is in unincorporated Placer County, so plumbing permits are issued through the Placer County Building Services Division (Tahoe office). Most replacements and new installations require one. We handle permit filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Olympic Valley?",
        answer:
          "Turn off the main water supply first, so a pipe that has already cracked does not flood the property when the ice releases. Do not use an open flame or a heat gun. Gentle heat from a hair dryer, or towels soaked in warm water, is safe. If you cannot find the frozen section, or a pipe has already burst, call 530-587-0733. Condos with plumbing in shared walls deserve a fast look, since a failure can reach neighboring units.",
      },
      {
        question: "How much does it cost to winterize plumbing in Olympic Valley?",
        answer:
          "It depends on the size of the property, the number of fixtures, and the complexity of the plumbing system. Olympic Valley properties range from compact condominiums to large custom homes with multiple zones, and winterization scope scales accordingly. We evaluate the property's specific systems and give clear pricing before any work starts.",
      },
    ],
    popularServices: ["frozen-burst-pipes", "water-heaters", "gas-services", "smart-leak-shutoff"],
  },
  "alpine-meadows": {
    lede: "A canyon community from 6,185 to 6,835 feet, where Bear Creek runs through the center.",
    overview:
      "Alpine Meadows is a wooded canyon community where elevations run from 6,185 feet at the mouth to 6,835 feet near the ski area lodge, with peaks above reaching over 8,600 feet. Bear Creek runs through the center, and many homes sit along the creek or other riparian areas. About 462 single-family homes and 130 condominiums house a permanent population near 500, with seasonal residents, vacation renters, and day visitors swelling the numbers in ski season and summer. All essential services, water, sewer, fire protection, parks, and garbage, come from one district: Alpine Springs County Water District.",
    sections: [
      {
        heading: "Water heater repair in Alpine Meadows' cold canyon",
        paragraphs: [
          "The groundwater supplied by Alpine Springs County Water District enters cold, and the elevation range across the community affects combustion efficiency and recovery times on gas-fired units. The canyon setting concentrates cold air, and homes at the upper elevations near the ski area face particularly harsh winter conditions.",
          "Properties that sit vacant between visits are prone to sediment buildup and thermal cycling wear. Whether it is a failing thermocouple, a corroded tank, or inconsistent output, we diagnose before recommending and confirm performance before we leave.",
        ],
        link: { label: "More on water heater repair", href: "/services/water-heaters/" },
      },
      {
        heading: "Installing water heaters from the canyon mouth upward",
        paragraphs: [
          "The community runs from 6,185 feet at the canyon mouth to 6,835 feet near the ski area lodge, and conditions at the top of the canyon differ meaningfully from those at the bottom. Many canyon homes have compact mechanical spaces, which constrains unit sizing and venting.",
          "Gas-fired units need high-altitude kits or factory-configured models for safe and efficient combustion. We evaluate hot water demand, fuel source, and venting path, and file the permit through the Placer County Building Services Division.",
        ],
        link: { label: "More on water heater installation", href: "/services/water-heaters/" },
      },
      {
        heading: "Tankless sizing for Alpine Meadows' elevation range",
        paragraphs: [
          "Tankless suits a community where many homes sit vacant between visits, with no standby loss while nobody is there. At canyon elevations, cold inlet water and altitude-adjusted combustion reduce effective output below sea-level ratings.",
          "Sizing has to account for the home's actual simultaneous demand at the specific elevation of the property within the community. We size for that number, confirm gas supply capacity, and test output at multiple draw points.",
        ],
        link: { label: "More on tankless systems", href: "/services/water-heaters/" },
      },
      {
        heading: "Gas line repair on the canyon's steep terrain",
        paragraphs: [
          "The canyon's steep terrain and heavy snowfall subject outdoor gas infrastructure to ground movement from freeze-thaw cycles and damage from snow clearing operations and natural settling. Gas feeds furnaces, water heaters, fireplaces, cooktops, dryers, and outdoor appliances across the community.",
          "If you smell gas, leave the area and call Southwest Gas first on 1-877-860-6020, then call us. We locate the fault, repair or replace the affected section, and pressure-test before restoring service.",
        ],
        link: { label: "More on gas line repair", href: "/services/gas-services/" },
      },
      {
        heading: "New gas lines near Bear Creek setbacks",
        paragraphs: [
          "Bear Creek runs through the center of the community, and many homes sit along the creek or other riparian areas, where setbacks can influence gas line routing and require careful planning. Extensions for new appliances and fire features are common as homeowners upgrade their properties.",
          "The work needs proper sizing, code-compliant installation, and coordination with Southwest Gas when meter capacity is involved. Permits are filed through Placer County, and we coordinate with general contractors, designers, and architects on larger renovations.",
        ],
        link: { label: "More on gas line installation", href: "/services/gas-services/" },
      },
      {
        heading: "Kitchen and bath updates in repeatedly remodeled homes",
        paragraphs: [
          "Many Alpine Meadows homes have been through one or more rounds of remodeling, and each renovation is an opportunity to update supply lines, drain configurations, and fixture connections that predate the current work. Projects span fixture replacements and faucet swaps to full rough-in during renovations and additions.",
          "We protect finishes throughout, test every connection, and leave the workspace clean, coordinating with your contractor when the plumbing sits inside a bigger project.",
        ],
        link: { label: "More on kitchen and bath plumbing", href: "/services/kitchen-bath-plumbing/" },
      },
      {
        heading: "Moen Flo for Alpine Meadows' long vacancies",
        paragraphs: [
          "The canyon's cold temperatures and elevation make freeze-related failures a particular concern during vacancy periods, and a slow leak behind a wall or a supply line failure during a cold snap can go undetected until the owner returns or the damage becomes visible. A monitor on the main line watches flow, pressure, and temperature continuously and shuts the water off on its own when something is wrong.",
          "For owners managing the property from elsewhere, it provides real-time alerts and remote shutoff from a phone, with freeze alerts during the coldest stretches.",
        ],
        link: { label: "More on smart leak shutoff", href: "/services/smart-leak-shutoff/" },
      },
      {
        heading: "Frozen pipe repair where the canyon concentrates cold",
        paragraphs: [
          "The canyon concentrates cold air, and homes at the upper elevations near the ski area face colder conditions than those near the canyon mouth. Exposed runs in crawl spaces, exterior walls, and uninsulated areas are the most vulnerable, and homes that sit vacant during winter without proper winterization or monitoring face the highest risk.",
          "If a pipe has already gone, shut the main and call. We locate the failure, thaw only where it is safe, and repair or replace the damaged section. For repeat freeze spots, we assess the run and recommend insulation improvements and monitoring.",
        ],
        link: { label: "More on frozen and burst pipes", href: "/services/frozen-burst-pipes/" },
      },
      {
        heading: "Plumbing repairs on the ASCWD service boundary",
        paragraphs: [
          "The variety of housing means we work on systems from original ski cabin plumbing to modern installations in recently built or renovated homes. Running toilets, dripping faucets, failing shutoff valves, and slow drains are the everyday calls.",
          "Sewer collection is managed by Alpine Springs County Water District, with regional treatment by TTSA. When a drain issue turns out to sit at the lateral connection to the ASCWD system, we work out where the boundary falls and help you coordinate the next step.",
        ],
      },
    ],
    headings: {
      emergency: "Burst pipe, gas smell or no water in the canyon",
      reviews: "What Alpine Meadows homeowners say",
      popular: "Jobs we do most from canyon mouth to lodge",
      faqs: "Canyon cold, access and permit questions",
      cta: "Get an Alpine Meadows plumber on the phone",
    },
    faqs: [
      {
        question: "Who provides water and sewer service in Alpine Meadows?",
        answer:
          "Water and sewer service in Alpine Meadows is provided by Alpine Springs County Water District (ASCWD). ASCWD is a special district that also provides fire protection, parks, and garbage service to the community. The district's water comes from local groundwater sources within the canyon, and its service area covers Alpine Meadows only, separate from neighboring Olympic Valley, which is served by Olympic Valley Public Service District. Electricity in the area is provided by Liberty Utilities. Natural gas is provided by Southwest Gas.",
      },
      {
        question: "Do I need a high-altitude water heater in Alpine Meadows?",
        answer:
          "Yes. Alpine Meadows ranges from 6,185 feet at the canyon mouth to 6,835 feet near the ski area lodge, and at those elevations reduced oxygen affects combustion in gas-fired water heaters. A unit installed without high-altitude adjustment runs less efficiently, produces more carbon monoxide, and wears out faster. Most manufacturers offer factory-configured high-altitude models or conversion kits. The cold groundwater from ASCWD adds further load on heating elements and burners.",
      },
      {
        question: "How do I protect my Alpine Meadows home's plumbing when I'm away?",
        answer:
          "The most effective approach combines smart leak detection with proper winterization. A Moen Flo system monitors the supply line continuously and can shut the water off automatically if it detects a leak or abnormal flow. For extended vacancies, keeping minimum heat on and insulating vulnerable pipe runs reduces freeze risk. Alpine Meadows' canyon setting concentrates cold air, making freeze protection especially important for homes at higher elevations or in shaded areas.",
      },
      {
        question: "Do I need a permit for plumbing work in Alpine Meadows?",
        answer:
          "Alpine Meadows is in unincorporated Placer County, so plumbing permits are issued through the Placer County Building Services Division (Tahoe office). Most replacements and new installations require one. We handle permit filing as part of the project when it applies.",
      },
      {
        question: "What should I do if my pipes freeze in Alpine Meadows?",
        answer:
          "Turn off the main water supply first, so a pipe that has already cracked does not flood the house when the ice releases. Do not use an open flame or a heat gun. Gentle heat from a hair dryer, or towels soaked in warm water, is safe. If you cannot find the frozen section, or a pipe has already burst, call 530-587-0733. Homes at the upper elevations of the canyon often need a faster look during cold snaps.",
      },
      {
        question: "How much does it cost to winterize plumbing in Alpine Meadows?",
        answer:
          "It depends on the size of the home, the number of fixtures, and the complexity of the plumbing system. Alpine Meadows homes range from compact cabins to larger properties with multiple bathrooms, and homes at the upper elevations of the canyon often have more extensive winterization needs due to colder conditions. We evaluate the home's specific systems and give clear pricing before any work starts.",
      },
    ],
    popularServices: ["frozen-burst-pipes", "water-heaters", "smart-leak-shutoff", "gas-services"],
  },
};
