import type { Messages } from "./ro";

/**
 * English commercial material-buying copy ("What we buy").
 * Typed against `Messages["materials"]` so every key and array length mirrors
 * `materials-ro.ts` exactly.
 */
export const materialsEn: Messages["materials"] = {
  eyebrow: "What we buy",
  metaTitle: "What we buy — scrap metal, copper, aluminium, brass | Deva",
  metaDescription:
    "We buy scrap iron, copper, aluminium, brass, electric cables and used lead batteries at our Cristur, Deva yard. Certified weighing and fair payment.",
  index: {
    title: "Materials we buy and collect",
    lead: "Drop off directly at our Cristur yard (Deva, Hunedoara) or schedule collection with our own fleet from factories and job sites across Romania. Every load is weighed in front of you on certified scales.",
    dropOffHeading: "Direct drop-off in Cristur, Deva",
    dropOffBody:
      "Bring sorted material to Șos. Hunedoarei nr. 13, Sat Cristur, Deva (Mon–Fri 08:00–17:00, Sat 08:00–13:00). Transparent weighing and paperwork on the spot.",
    pickupHeading: "Collection with our own fleet",
    pickupBody:
      "For companies, construction sites and larger volumes, we supply containers, tippers or a grab crane and handle all environmental traceability documents.",
    priceNoteHeading: "Daily pricing",
    priceNoteBody:
      "Metal prices move daily with LME quotations, grade, cleanliness and volume. Call us before heading to the yard for today's exact rate.",
    documentsLinkLabel: "See what documents are needed to sell scrap metal",
    viewDetails: "See grades & details",
  },
  labels: {
    gradesHeading: "Accepted grades and what drives the price",
    priceCtaNote:
      "Price per kg depends on grade, cleanliness and quantity. Call us for today's live rate.",
    callForPrice: "Call for today's price",
    acceptedHeading: "Examples of accepted materials",
    prepHeading: "How to prepare your material before drop-off",
    documentsLink: "Documents needed to sell scrap (individuals & companies)",
    parentServiceEyebrow: "Related service",
    parentServiceCta: "View the service page",
    relatedArticlesHeading: "Helpful guides about this material",
    otherMaterialsHeading: "Other materials we buy",
    allMaterialsCta: "See all materials",
    faqHeading: "Frequently asked questions",
    backToMaterials: "All materials",
  },
  imageAlts: {
    "ferrous-scrap":
      "Sorted ferrous scrap metal at the Ecoplast Hart yard in Cristur, Deva",
    "lead-batteries":
      "Dedicated containers for safe storage of used batteries and hazardous waste at Ecoplast Hart",
  },
  items: {
    copper: {
      name: "Copper",
      navDesc: "Bright copper (milberry), clean pipe/bar, burnt/tinned and radiators.",
      title: "Sell copper scrap in Deva and Hunedoara",
      lead: "We buy copper scrap from individuals, electricians, plumbers and industrial companies at our Cristur yard (Deva), or via scheduled pickup for commercial loads. Every grade is sorted accurately so you get the rate that matches its real purity.",
      metaTitle: "Sell copper scrap in Deva, Hunedoara — certified weighing",
      metaDescription:
        "Drop off or sell copper scrap in Cristur, Deva (Hunedoara): milberry, clean copper, burnt/tinned copper and radiators. Certified scales & transparent pricing.",
      grades: [
        {
          title: "Bright copper (Milberry)",
          body: "Unalloyed, stripped shiny copper wire and conductors free of oxidation, lacquer, tin coating or insulation. Commands the highest rate per kg.",
        },
        {
          title: "Clean copper (pipes, busbars, sheet)",
          body: "Plumbing or heating copper pipes, busbars and clean sheet without brass fittings, heavy solder or ferrous attachments.",
        },
        {
          title: "Burnt, oxidised or tinned copper",
          body: "Copper wire and parts with oxidation, enamel, tin plating or paint traces, as well as dismantled motor windings.",
        },
        {
          title: "Radiators and mixed copper",
          body: "Copper-brass radiators, heat exchangers and mixed assemblies, priced according to their actual copper yield.",
        },
      ],
      accepted: [
        "Stripped copper wire and conductors",
        "Copper plumbing and heating pipes",
        "Industrial copper busbars and sheet",
        "Motor and transformer copper windings",
        "Copper and copper-brass radiators",
        "Copper turnings and machining offcuts",
      ],
      preparation: [
        "Keep bright/clean copper separate from oxidised, painted or tinned pieces — mixed loads are normally graded at the lower tier.",
        "Remove brass valves, steel nuts or plastic fittings from copper pipes.",
        "Never burn insulated cables to recover copper: it is illegal, hazardous and lowers the copper grade. Bring insulated cables as-is — we process them mechanically in-house.",
        "Bring your ID card (individuals) or company invoicing/dispatch paperwork (businesses).",
      ],
      faq: [
        {
          question: "What is today's copper scrap price per kg in Deva?",
          answer:
            "Copper rates track international market benchmarks and vary substantially between bright milberry, clean pipe and mixed copper. Call +40 740 072 256 before visiting for today's exact rate for your grade and volume.",
        },
        {
          question: "Can individuals sell copper scrap, or only companies?",
          answer:
            "Both. We buy copper from private individuals (with valid ID, per Romanian law) as well as from companies and contractors, with full invoicing and environmental traceability paperwork.",
        },
        {
          question: "Should I strip cables or bring them with insulation?",
          answer:
            "For thick cables that strip easily by hand, stripped bright copper pays more per kg. For thin wires, automotive harnesses or large volumes, it is far more efficient to bring them insulated — we granulate them on our own Cristur line.",
        },
      ],
    },

    "ferrous-scrap": {
      name: "Ferrous scrap",
      navDesc: "Heavy iron, sheet metal, cast iron, steel beams and industrial scrap.",
      title: "Sell scrap iron and ferrous metal in Deva and Hunedoara",
      lead: "Authorised scrap metal yard in Cristur (Deva). We buy ferrous scrap from individuals and businesses — from household sheet metal to industrial steel structures, decommissioned machinery and turnings, with grab-crane and container pickup available.",
      metaTitle: "Scrap iron & cast iron collection centre — per-kg prices, Deva",
      metaDescription:
        "Authorised scrap iron collection centre in Cristur, Deva (Hunedoara): heavy steel, sheet metal, cast iron and structures. Fair per-kg prices & certified scales.",
      grades: [
        {
          title: "Heavy melting scrap (thick steel/iron)",
          body: "I-beams, structural steel, thick-walled pipes, heavy machinery parts and compact iron over 4–6 mm thick, free of contaminants.",
        },
        {
          title: "Light iron & sheet metal",
          body: "Thin sheet metal, clean vehicle body panels, fencing, wire, metal shelving and light demolition scrap.",
        },
        {
          title: "Cast iron",
          body: "Old cast-iron radiators, manhole covers, drained engine blocks and industrial cast-iron parts.",
        },
        {
          title: "Steel turnings & production offcuts",
          body: "Lathe/CNC shavings and factory cutting offcuts, collected directly from industrial plants in dedicated containers.",
        },
      ],
      accepted: [
        "Steel beams, profiles and structural metal",
        "Black and galvanised sheet metal & roofing offcuts",
        "Cast-iron radiators and heavy castings",
        "Drained metal automotive parts",
        "Decommissioned industrial machinery & equipment",
        "Ferrous turnings and workshop offcuts",
      ],
      preparation: [
        "Separate heavy steel from thin sheet and non-ferrous metals (aluminium, copper, brass) — non-ferrous metals pay several times more per kg.",
        "Remove non-metallic attachments (wood, plastic, rubber, concrete) that reduce net accepted weight.",
        "Ensure parts from machinery or vehicles are fully drained of oil, fuel or coolant.",
        "For large demolition or factory volumes, call ahead: we can deploy Abrollkipper containers or a grab-crane truck.",
      ],
      faq: [
        {
          question: "Is there a minimum quantity of scrap iron required?",
          answer:
            "At our Cristur yard (Deva) there is no strict minimum — small household loads are welcome. For on-site collection with our truck or grab crane, we schedule pickup based on volume and distance.",
        },
        {
          question: "How is scrap iron weighed?",
          answer:
            "All loads are weighed on metrologically certified scales in front of you. Vehicle loads are weighed gross on entry and tare on exit, with a printed weight ticket for every transaction.",
        },
        {
          question: "Do you collect demolition or factory scrap across Hunedoara county?",
          answer:
            "Yes. We serve Deva, Hunedoara, Simeria, Călan, Orăștie, Hațeg, Brad, Petroșani and nationwide for industrial volumes using our own containers, tippers and grab-crane trucks.",
        },
        {
          question: "How much is 1 kg of scrap iron and cast iron worth?",
          answer:
            "The indicative price per kg depends on thickness and cleanliness: thin sheet sits at the lower end of ferrous rates, while heavy steel (> 6 mm) and clean cast iron (radiators, castings) command the top ferrous rates. Check our updated price list or call +40 740 072 256 for today's exact rate.",
        },
      ],
    },

    aluminium: {
      name: "Aluminium",
      navDesc: "Profiles, sheet, alloy wheels, cast aluminium, radiators and cans.",
      title: "Sell aluminium scrap in Deva and Hunedoara",
      lead: "We buy all grades of aluminium scrap — from window profiles and alloy wheels to cast aluminium, sheet, aluminium cables and beverage cans. Each fraction is graded fairly at our Cristur yard in Deva.",
      metaTitle: "Aluminium scrap prices per kg — profiles, wheels, cans | Deva",
      metaDescription:
        "Sell aluminium scrap in Cristur, Deva: window profiles, sheet, cast aluminium, alloy rims and cans. Fair per-kg pricing & certified weighing.",
      grades: [
        {
          title: "Extruded profiles & clean aluminium",
          body: "Window and construction aluminium profiles (bare or painted), cleaned of steel screws, rubber seals and thermal plastic strips.",
        },
        {
          title: "Alloy rims & clean cast aluminium",
          body: "Alloy car wheels without tyres or wheel weights, plus clean cast-aluminium housings and parts without iron inserts.",
        },
        {
          title: "Sheet, wire & offset plates",
          body: "Clean aluminium sheet, steel-free aluminium conductors and printing plates.",
        },
        {
          title: "Beverage cans & iron-bearing aluminium",
          body: "Non-magnetic aluminium beverage cans and mixed aluminium assemblies containing steel inserts, graded separately.",
        },
      ],
      accepted: [
        "Aluminium window and structural profiles",
        "Alloy car wheels (without tyres)",
        "Cast aluminium housings and blocks",
        "Industrial aluminium sheet and offcuts",
        "Aluminium beverage cans",
        "Aluminium radiators and conductors",
      ],
      preparation: [
        "Use a simple magnet: pure aluminium is non-magnetic. Remove steel bolts, rivets or bushings to avoid being graded as iron-contaminated aluminium.",
        "Pull out rubber gaskets and plastic thermal breaks from window profiles.",
        "Remove tyres and valves from alloy rims before drop-off.",
        "Keep aluminium cans separate from steel tins and drain any leftover liquid.",
      ],
      faq: [
        {
          question: "Do you buy aluminium beverage cans from individuals?",
          answer:
            "Yes, we buy clean aluminium cans separated from steel cans. Keep them dry and crushed without liquid residue for the best per-kg rate.",
        },
        {
          question: "Why does aluminium with iron inserts pay less?",
          answer:
            "Iron-bearing aluminium requires extra dismantling before remelting. Removing steel screws, shafts or brackets beforehand upgrades the load to clean aluminium.",
        },
        {
          question: "Do you buy profile offcuts and turnings from factories?",
          answer:
            "Yes. We work on contract with window fabricators and industrial manufacturers, providing on-site containers and full recovery documentation.",
        },
        {
          question: "How much does 1 kg of aluminium scrap pay?",
          answer:
            "Per-kg aluminium scrap rates depend on the grade: bare aluminium wire and alloy rims pay the most, followed by clean window profiles, cast aluminium, radiators and beverage cans. Check our indicative price list or call us for today's live rate.",
        },
      ],
    },

    brass: {
      name: "Brass",
      navDesc: "Taps, plumbing fittings, valves, radiators, industrial parts and turnings.",
      title: "Sell brass scrap in Deva and Hunedoara",
      lead: "We buy yellow brass, bronze, plumbing taps, fittings, valves, radiators and CNC turnings at our Cristur yard in Deva. Accurate grade assessment and certified weighing on site.",
      metaTitle: "Brass scrap prices per kg — fittings, taps, turnings | Deva",
      metaDescription:
        "Sell brass scrap in Cristur, Deva: plumbing taps, fittings, radiators, clean yellow brass and turnings. Fair per-kg pricing on certified scales.",
      grades: [
        {
          title: "Clean yellow brass",
          body: "Plumbing fittings, connectors, rods and solid brass parts free of steel inserts, rubber gaskets or plastic parts.",
        },
        {
          title: "Mixed brass (taps & valves)",
          body: "Bathroom taps, mixers and valves that still carry steel handles or stems, priced fairly according to brass content.",
        },
        {
          title: "Brass turnings",
          body: "Dry, clean shavings from lathe and CNC machining, kept separate from steel or aluminium turnings.",
        },
        {
          title: "Brass-copper radiators",
          body: "Automotive or industrial brass-copper radiators with plastic end-tanks and steel brackets removed.",
        },
      ],
      accepted: [
        "Brass taps, mixers and plumbing valves",
        "Fittings, elbows, couplings and manifolds",
        "Brass and copper-brass radiators",
        "Industrial brass rods and machined parts",
        "CNC and lathe brass turnings",
        "Bronze bushings and bearings (sorted separately)",
      ],
      preparation: [
        "Separate brass from copper and bronze: copper has a distinct reddish tone and a higher price than yellow brass.",
        "Remove plastic handles, braided hoses and steel screws from plumbing taps.",
        "Check chrome-plated parts with a magnet — some look like brass outside but contain steel or zinc alloy underneath.",
        "Store brass turnings dry and separate from other metal shavings.",
      ],
      faq: [
        {
          question: "How can I tell brass apart from chrome-plated steel or zinc alloy?",
          answer:
            "Check with a magnet first (brass is non-magnetic), then lightly file an edge: brass reveals a warm golden-yellow colour, while zinc alloy or aluminium stays silver-grey.",
        },
        {
          question: "Do you accept chrome bathroom taps without dismantling them?",
          answer:
            "Yes, we accept them assembled as mixed brass with an adjustment for non-brass parts. Removing hoses and handles gets you the cleaner grade.",
        },
        {
          question: "Do you buy bronze separately from brass?",
          answer:
            "Yes. If you have bronze bushings, bearings or castings in a distinct lot, keep them separate from yellow brass for proper grading at intake.",
        },
        {
          question: "How much is 1 kg of brass scrap worth?",
          answer:
            "Per-kg brass rates depend on cleanliness: clean yellow brass (fittings and rods free of iron or rubber) commands the top rate, while assembled bathroom taps fall into mixed brass. Check our price list or call +40 740 072 256 for today's exact rate.",
        },
      ],
    },

    cables: {
      name: "Electric cables",
      navDesc: "Copper & aluminium cables, overhead, underground and auto harnesses.",
      title: "Sell and recycle electric cables in Deva, Hunedoara",
      lead: "We operate our own cable-processing and granulation plant at our Cristur yard in Deva. We buy insulated copper and aluminium cables — from electrical installations, demolitions, power grids and auto dismantling — with no middlemen.",
      metaTitle: "Sell copper & aluminium electric cables — Deva, Hunedoara",
      metaDescription:
        "Sell insulated copper and aluminium cables in Cristur, Deva. In-house cable granulation plant with no middlemen. Ecoplast Hart SRL.",
      grades: [
        {
          title: "Heavy copper cables (high yield)",
          body: "Power cables and thick conductors where the copper-to-insulation ratio is high.",
        },
        {
          title: "Household wires & automotive harnesses",
          body: "Building wiring, vehicle looms, telecom/data cables and appliance cords.",
        },
        {
          title: "Aluminium cables (overhead & underground)",
          body: "Insulated aluminium conductors from power distribution lines, service drops and industrial grids.",
        },
        {
          title: "Armoured or lead-sheathed cables",
          body: "Underground cables with steel tape armouring or metal sheathing, graded by structure and conductor share.",
        },
      ],
      accepted: [
        "Copper power and installation cables",
        "Overhead and underground aluminium cables",
        "Automotive wiring harnesses from workshops & dismantlers",
        "Demolition and industrial decommissioning cables",
        "Data, telecom and UTP cables",
        "Power cords and electronic equipment cables",
      ],
      preparation: [
        "Separate copper-core cables from aluminium-core cables — they have different market values and processing streams.",
        "Never burn cables: burning insulation is illegal, toxic and degrades the copper. We shred and separate them cleanly on our mechanical line.",
        "Clip off bulky plugs, steel junction boxes or heavy clamps where practical for a cleaner weight yield.",
        "For large electrical-contractor or demolition loads, call ahead so we can sample the yield and arrange transport.",
      ],
      faq: [
        {
          question: "How are insulated cables priced?",
          answer:
            "Pricing depends on the conductor metal (copper vs. aluminium) and its real metal recovery percentage versus insulation weight. Because we granulate cables directly at our own Cristur plant, there are no middleman margins.",
        },
        {
          question: "Do you accept UTP network cables or appliance cords?",
          answer:
            "Yes, we buy thin cables, data cables and power cords. Keep them separate from thick power cables so they don't dilute the average yield of your high-grade cable lot.",
        },
        {
          question: "Do you issue waste recovery paperwork for electrical contractors?",
          answer:
            "Yes. For businesses we issue invoices, HG 1061/2008 transport forms and full traceability paperwork (waste code 17 04 11 / 17 04 10* as applicable).",
        },
      ],
    },

    "lead-batteries": {
      name: "Lead-acid batteries",
      navDesc: "Used car batteries and industrial lead-acid accumulators.",
      title: "Drop off and recycle used car batteries in Deva, Hunedoara",
      lead: "Authorised facility for collecting used automotive and industrial lead-acid batteries (hazardous waste code 16 06 01*). We accept drop-offs from individuals and provide compliant collection for garages, transport fleets and industrial sites.",
      metaTitle: "Recycle used car & lead batteries in Deva, Hunedoara",
      metaDescription:
        "Legally drop off used car batteries and industrial lead-acid accumulators in Cristur, Deva. Authorised hazardous waste collector, fair payment & paperwork.",
      grades: [
        {
          title: "Car & truck lead-acid batteries (intact casing)",
          body: "Automotive, van and truck starter batteries, unopened, with intact polypropylene casings and no major leaks.",
        },
        {
          title: "Industrial & traction batteries",
          body: "Heavy batteries from forklifts, electric industrial machinery, UPS banks and backup power systems.",
        },
        {
          title: "Motorcycle & sealed lead batteries (VRLA/AGM)",
          body: "Sealed lead-acid batteries from motorcycles, alarm panels, heating backups and office UPS units.",
        },
      ],
      accepted: [
        "Used car, van and truck batteries",
        "Industrial and forklift lead-acid batteries",
        "AGM and gel lead batteries",
        "UPS and backup power lead batteries",
        "Motorcycle and agricultural machinery batteries",
        "Bulk lots from auto repair shops and fleets",
      ],
      preparation: [
        "Do not crack the casing or drain the electrolyte (sulphuric acid) — it is dangerous to skin and the environment and makes handling unsafe.",
        "Transport batteries upright inside a plastic crate or tray to prevent spills in your vehicle.",
        "Do not mix lead-acid batteries with household alkaline batteries or lithium-ion packs (phones, power tools, scooters).",
        "For repair shops and businesses, we supply leak-proof containers and issue all required hazardous-waste transfer documents.",
      ],
      faq: [
        {
          question: "Can I bring just one old car battery to the Cristur yard?",
          answer:
            "Yes. Private individuals can drop off even a single used car battery at our Cristur, Deva yard (Șos. Hunedoarei nr. 13) with a valid ID card.",
        },
        {
          question: "Should I drain the acid before bringing the battery?",
          answer:
            "No — never drain a battery. Used lead-acid batteries must be handed over intact with their electrolyte inside so they can be processed safely at authorised facilities.",
        },
        {
          question: "What paperwork do garages and fleet operators receive?",
          answer:
            "For businesses we provide a contract, hazardous-waste handover forms (code 16 06 01*) and full documentation required for APM / SIM environmental reporting.",
        },
      ],
    },
  },
};
