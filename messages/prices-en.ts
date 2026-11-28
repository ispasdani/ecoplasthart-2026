import type { Messages } from "./ro";

/**
 * English copy for the scrap-metal prices page (`/en/scrap-metal-prices`).
 * Typed against `Messages["prices"]` so every key and array length mirrors
 * `prices-ro.ts` exactly.
 */
export const pricesEn: Messages["prices"] = {
  eyebrow: "Scrap metal prices 2026",
  metaTitle: "Scrap metal prices 2026 — iron, cast iron, aluminium, copper, brass",
  metaDescription:
    "Check today's per-kg buying rates for scrap iron, cast iron, aluminium, copper, brass, cables and auto batteries in 2026 at our Cristur, Deva yard.",
  title: "2026 scrap iron and metal prices — daily rates (RON/kg)",
  lead: "Per-kilogram buying rates for ferrous scrap, cast iron, aluminium, copper, brass, electric cables and lead-acid batteries are updated daily based on LME quotations, grade cleanliness and volume. Call or message us for today's live quote at our Cristur yard in Deva.",
  updatedLabel: "Rates updated daily · catalogue reviewed",
  disclaimerTitle: "Why are figures blurred? We confirm live rates tailored to your load",
  disclaimerBody:
    "Scrap metal markets move daily, and pricing varies widely by grade, purity and tonnage. Call us or send a quick message and we will give you today's exact rate right away — with zero surprises at the scale.",
  callForQuote: "Call for today's rate",
  unlockCta: "Get price",
  unlockAriaPrefix: "Contact us for today's rate for",
  blurredNote: "Daily rate on request",
  tableHeaders: {
    grade: "Material grade",
    details: "What it includes",
    range: "Price / kg (daily rate)",
  },
  materialPageLink: "Accepted grades & preparation guide",
  categories: {
    ferrous: {
      name: "Scrap iron and cast iron",
      shortNav: "Iron & cast iron",
      summary:
        "Ferrous scrap accepted at our Cristur, Deva yard or collected on site using our tippers, roll-off containers and grab-crane trucks.",
    },
    aluminium: {
      name: "Aluminium scrap",
      shortNav: "Aluminium",
      summary:
        "Extruded profiles, alloy rims, cast aluminium, clean sheet, bare wire, radiators and beverage cans — graded transparently.",
    },
    copper: {
      name: "Copper scrap",
      shortNav: "Copper",
      summary:
        "Bright copper (milberry), clean plumbing pipe and busbars, burnt/oxidised copper and copper-brass radiators.",
    },
    brass: {
      name: "Brass and bronze",
      shortNav: "Brass",
      summary:
        "Plumbing fittings, taps, valves, industrial machined parts and clean brass turnings.",
    },
    cables: {
      name: "Insulated electric cables",
      shortNav: "Cables",
      summary:
        "Processed directly on our own Cristur granulation line with no middlemen — rates track actual copper or aluminium yield.",
    },
    batteries: {
      name: "Used lead-acid batteries",
      shortNav: "Batteries",
      summary:
        "Spent car and industrial lead-acid batteries collected under full hazardous-waste authorisation (code 16 06 01*).",
    },
  },
  grades: {
    "ferrous-heavy": {
      label: "Heavy melting scrap (thick iron/steel)",
      details: "I-beams, structural profiles, thick pipes and solid parts (> 6 mm), clean.",
    },
    "cast-iron": {
      label: "Cast iron",
      details: "Cast-iron radiators, drained engine blocks, covers and heavy castings.",
    },
    "ferrous-mixed": {
      label: "Medium / mixed scrap iron",
      details: "Mixed ferrous scrap from households, workshops or light dismantling.",
    },
    "ferrous-sheet": {
      label: "Sheet metal & light iron",
      details: "Roofing sheet, fencing, shelving, wire and cleaned body panels.",
    },
    "ferrous-turnings": {
      label: "Industrial steel turnings",
      details: "Lathe and milling shavings collected in dedicated factory containers.",
    },
    "aluminium-wire": {
      label: "Clean aluminium wire / conductors",
      details: "Stripped aluminium conductors without steel core or insulation.",
    },
    "aluminium-rims": {
      label: "Alloy car wheels",
      details: "Clean alloy rims with tyres, valves and balancing weights removed.",
    },
    "aluminium-profiles": {
      label: "Aluminium window profiles",
      details: "Extruded profiles cleared of steel screws, rubber seals and plastic strips.",
    },
    "aluminium-cast": {
      label: "Cast aluminium & clean sheet",
      details: "Housings, cast parts and clean sheet without iron inserts.",
    },
    "aluminium-radiators": {
      label: "Aluminium radiators",
      details: "Automotive or heating aluminium radiators free of plastic tanks and steel.",
    },
    "aluminium-cans": {
      label: "Aluminium beverage cans",
      details: "Non-magnetic aluminium drink cans, drained dry and kept separate from steel.",
    },
    "copper-milberry": {
      label: "Bright copper (Milberry)",
      details: "Stripped shiny wire and conductors free of oxidation, enamel or tin.",
    },
    "copper-clean": {
      label: "Clean copper (pipes, busbars, sheet)",
      details: "Plumbing pipes, busbars and clean sheet free of brass fittings or solder.",
    },
    "copper-burnt": {
      label: "Burnt, oxidised or tinned copper",
      details: "Oxidised, enamelled or tinned conductors and dismantled motor windings.",
    },
    "copper-radiators": {
      label: "Copper / copper-brass radiators",
      details: "Clean heat exchangers and radiators without steel end frames.",
    },
    "brass-clean": {
      label: "Clean yellow brass",
      details: "Fittings, connectors, rods and solid brass free of steel or plastic.",
    },
    "brass-mixed": {
      label: "Mixed brass (taps & valves)",
      details: "Bathroom mixers and valves with minor steel or gasket attachments.",
    },
    "brass-turnings": {
      label: "Brass turnings",
      details: "Clean, dry CNC/lathe brass shavings kept separate from other metals.",
    },
    "cables-copper-heavy": {
      label: "Heavy copper power cables",
      details: "High-yield copper cables (NYY, CYABY, etc.) with thick conductors.",
    },
    "cables-copper-light": {
      label: "Light copper wire & auto harnesses",
      details: "Building wiring, vehicle looms, UTP data cables and appliance cords.",
    },
    "cables-aluminium": {
      label: "Insulated aluminium cables",
      details: "Overhead or underground cables with aluminium conductors.",
    },
    "lead-batteries-auto": {
      label: "Car & industrial lead-acid batteries",
      details: "Intact spent lead-acid batteries handled under environmental compliance.",
    },
  },
  infoCards: [
    {
      heading: "How to get the best rate per kg",
      body: "Separate ferrous scrap from non-ferrous metals (aluminium, copper, brass) and remove steel bolts, plastic or rubber attachments. Mixed loads are typically graded at the lower tier.",
    },
    {
      heading: "Statutory withholding for private individuals",
      body: "Under Romanian tax and environmental rules, authorised yards withhold and remit the 2% Environment Fund contribution and applicable 10% income tax on purchase slips issued to private individuals.",
    },
    {
      heading: "Tailored B2B quotes for companies & bulk loads",
      body: "For factories, workshops and demolition contractors, we offer negotiated per-tonne pricing, reverse-charge invoicing, dedicated containers and nationwide fleet pickup.",
    },
  ],
  guidesHeading: "Useful guides on scrap pricing and drop-off",
  documentsLinkLabel: "Documents needed to sell scrap metal (individuals & companies)",
  howPricesWorkLinkLabel: "How scrap metal and metal waste prices are actually set",
  guide: {
    eyebrow: "Scrap price guide",
    heading: "How today's scrap metal price is set, and how to get more per kg",
    lead: "The price you get at a collection centre isn't arbitrary. It depends on the international metals market, the grade of the material, how clean it is and the quantity. Here's how it works, so you know what to expect before you set off.",
    sections: [
      {
        heading: "What drives the scrap metal price today",
        body: [
          "Scrap iron is a raw material for steel mills and foundries, so its price follows steel demand. When construction and industry are busy, mills buy more and the price rises. When demand drops, so does the per-kg price at collection centres.",
          "Non-ferrous metals (copper, aluminium, brass, lead) are priced daily against London Metal Exchange (LME) quotes. That's why the copper or aluminium price can change from one day to the next, even when the iron price stays stable.",
        ],
        points: [
          "Demand from steel mills and foundries in Romania and the region",
          "LME quotes for copper, aluminium, lead, zinc and nickel",
          "The leu/euro and leu/dollar exchange rates",
          "Energy and transport costs to the smelter",
          "Season: demand usually rises with the construction season",
        ],
      },
      {
        heading: "Why prices differ so much between grades",
        body: [
          "For ferrous scrap, heavy iron and clean cast iron get the best rates because they melt with little loss. Thin sheet and light iron get the lowest: they rust faster, take up a lot of volume and yield less when melted.",
          "For non-ferrous metals the gaps are even bigger. Bright copper (milberry) is worth noticeably more than burnt or tinned copper, and clean brass more than taps with iron parts. For cables, the price depends on how much metal the cable contains relative to insulation. A thick power cable yields far more than a thin car wiring harness.",
        ],
        points: [],
      },
      {
        heading: "How to work out what you'll be paid for scrap",
        body: [
          "The formula is simple: the net weight of each grade multiplied by that grade's price per kilogram. Net weight is the difference between the loaded vehicle weighed on entry and the empty vehicle weighed on exit.",
          "For private individuals, the centre withholds the Environment Fund contribution and income tax from that amount at source, as the law requires. Companies are paid on invoice, usually under the VAT reverse-charge mechanism. So when you compare offers, always ask whether the price quoted on the phone is before or after deductions.",
        ],
        points: [],
      },
      {
        heading: "How to get a better price per kilogram",
        body: [
          "Sorting makes a bigger difference to what you are paid than negotiating. A few simple steps raise the value of your load:",
        ],
        points: [
          "Separate non-ferrous metals (aluminium, copper, brass, stainless steel) from iron. Use a magnet: whatever doesn't stick is usually worth much more.",
          "Separate heavy iron from sheet, and cast iron from the rest.",
          "Remove plastic, wood, rubber, seals and iron screws from non-ferrous parts.",
          "Drain vehicle parts and machinery of oil, fuel and coolant.",
          "Bring larger quantities in one go rather than many small trips. For large loads the price can be negotiated.",
          "Call ahead for today's rate, especially for copper and aluminium, where prices move daily.",
        ],
      },
      {
        heading: "Prices for companies and large volumes",
        body: [
          "For factories, machine shops, construction and demolition firms and industrial plant clearances, we work with negotiated prices per tonne, based on grade, volume and collection frequency. We provide dedicated containers, transport with our own fleet and complete traceability and recovery paperwork.",
          "Send us the material type, estimated quantity and location through the contact form and we'll reply with a concrete offer.",
        ],
        points: [],
      },
    ],
  },
  faqHeading: "Frequently asked questions about 2026 scrap metal prices",
  faq: [
    {
      question: "How much is 1 kg of scrap iron worth in 2026?",
      answer:
        "Scrap iron rates move with mill demand and vary clearly by grade: heavy melting steel (> 6 mm) and clean cast iron earn top ferrous rates, followed by mixed iron and thin sheet metal. Call +40 740 072 256 or use our contact form for today's live rate and bulk quotes.",
    },
    {
      question: "What is the scrap price for 1 kg of cast iron?",
      answer:
        "Clean cast iron (cast-iron radiators, industrial castings and oil-drained engine blocks) sits in the upper ferrous tier alongside heavy steel. Call us ahead of your visit to confirm today's rate for your volume.",
    },
    {
      question: "How much does 1 kg of aluminium scrap pay in 2026?",
      answer:
        "Aluminium scrap rates depend strongly on alloy and cleanliness: bare aluminium wire and clean alloy rims pay the highest tier, followed by clean extruded profiles, cast aluminium, radiators and beverage cans. Contact us for today's exact per-kg quote.",
    },
    {
      question: "What is the per-kg rate for brass and copper scrap?",
      answer:
        "Copper and brass track daily London Metal Exchange (LME) movements. Bright copper (milberry), clean copper pipe and clean yellow brass (free of iron or rubber) command top non-ferrous rates. Call +40 740 072 256 for today's live buying quote.",
    },
    {
      question: "How do weighing and payment work at the scrap yard?",
      answer:
        "Every load is weighed in front of you on metrologically certified scales, with a printed weight ticket showing gross, tare and net weight. Individuals receive a purchase slip with valid ID; companies are paid on invoice with full traceability paperwork.",
    },
    {
      question: "Where is the Ecoplast Hart yard and what are the opening hours?",
      answer:
        "Our operational yard is at Șos. Hunedoarei nr. 13, Sat Cristur, Deva (between Deva and Hunedoara). Opening hours are Mon–Fri 08:00–17:00 and Sat 08:00–13:00. For commercial and industrial loads, we arrange direct pickup with our own fleet.",
    },
    {
      question: "What is the scrap metal price today?",
      answer:
        "Today's price depends on the grade: heavy iron and cast iron get the best ferrous rate, sheet and light iron the lowest. Non-ferrous rates are updated daily in line with the LME. Call us on +40 740 072 256 and we'll give you today's price for your material and quantity on the spot.",
    },
    {
      question: "Why is the yard price lower than the LME quote?",
      answer:
        "The LME quote is the price of pure metal, delivered in large lots to exchange standard. Scrap has to be sorted, transported, sometimes processed (cables, for example, must be granulated) and delivered to a smelter, and it contains impurities. The collection centre's price reflects those costs and the material's real yield.",
    },
    {
      question: "Is the price the same for a small load and for several tonnes?",
      answer:
        "The base price per kg is set by grade and cleanliness. For large or regular volumes, or collections from companies, we can negotiate a price per tonne and include transport and containers. Tell us the estimated quantity and we'll send you an offer.",
    },
  ],
  crossLink: {
    eyebrow: "2026 Daily Rates",
    title: "Check today's per-kg scrap iron and metal rates",
    description:
      "Browse all accepted grades (heavy iron, cast iron, sheet, aluminium, copper, brass, cables, batteries) and request today's live quote.",
    cta: "See daily rates",
    rangePrefix: "Price / kg",
  },
};
