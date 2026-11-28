import type { Messages } from "./ro";

/**
 * English copy for the intent-specific landing pages. Typed against
 * `Messages["topics"]` so every key and array length mirrors `topics-ro.ts`.
 */
export const topicsEn: Messages["topics"] = {
  labels: {
    callCta: "Call now: +40 740 072 256",
    faqHeading: "Frequently asked questions",
    relatedHeading: "Useful pages",
  },
  wasteCodes: {
    heading: "Metal waste codes from the European List of Waste",
    lead: "The codes below are the ones used most often for metal waste. Codes marked with an asterisk (*) are hazardous waste and have separate rules for storage, transport and hand-over.",
    columns: {
      code: "Waste code",
      name: "Official description",
      examples: "Typical examples",
    },
    groups: [
      {
        heading: "12 01 — Waste from shaping and treating metals",
        rows: [
          {
            code: "12 01 01",
            name: "Ferrous metal filings and turnings",
            examples: "Steel turnings from lathes, milling and drilling",
          },
          {
            code: "12 01 02",
            name: "Ferrous metal dust and particles",
            examples: "Particles from grinding and cutting steel",
          },
          {
            code: "12 01 03",
            name: "Non-ferrous metal filings and turnings",
            examples: "Aluminium, brass and copper turnings",
          },
          {
            code: "12 01 04",
            name: "Non-ferrous metal dust and particles",
            examples: "Fine aluminium or brass particles",
          },
        ],
      },
      {
        heading: "15 01 and 16 — Packaging, vehicles and batteries",
        rows: [
          {
            code: "15 01 04",
            name: "Metallic packaging",
            examples: "Emptied and cleaned cans, drums and metal containers",
          },
          {
            code: "16 01 17",
            name: "Ferrous metal",
            examples: "Iron from dismantling end-of-life vehicles",
          },
          {
            code: "16 01 18",
            name: "Non-ferrous metal",
            examples: "Aluminium and copper from dismantling end-of-life vehicles",
          },
          {
            code: "16 06 01*",
            name: "Lead batteries",
            examples: "Lead-acid car and industrial batteries",
          },
        ],
      },
      {
        heading: "17 04 — Metals from construction and demolition",
        rows: [
          {
            code: "17 04 01",
            name: "Copper, bronze, brass",
            examples: "Copper pipes, fittings, taps",
          },
          {
            code: "17 04 02",
            name: "Aluminium",
            examples: "Window frames, profiles, aluminium sheet",
          },
          {
            code: "17 04 03",
            name: "Lead",
            examples: "Lead pipes and sheet",
          },
          {
            code: "17 04 04",
            name: "Zinc",
            examples: "Zinc sheet and gutters",
          },
          {
            code: "17 04 05",
            name: "Iron and steel",
            examples: "Steel structures, rebar, beams, sheet, pipes",
          },
          {
            code: "17 04 06",
            name: "Tin",
            examples: "Tin scrap",
          },
          {
            code: "17 04 07",
            name: "Mixed metals",
            examples: "Unsorted ferrous and non-ferrous metals",
          },
          {
            code: "17 04 09*",
            name: "Metal waste contaminated with hazardous substances",
            examples: "Metal with traces of oil, paint or hazardous chemicals",
          },
          {
            code: "17 04 10*",
            name: "Cables containing oil, coal tar and other hazardous substances",
            examples: "Old cables with impregnated insulation",
          },
          {
            code: "17 04 11",
            name: "Cables other than those mentioned in 17 04 10",
            examples: "Electric cables with PVC or rubber insulation",
          },
        ],
      },
      {
        heading: "19 and 20 — Mechanical treatment and municipal waste",
        rows: [
          {
            code: "19 10 01",
            name: "Iron and steel waste",
            examples: "Ferrous fraction from shredding metal waste",
          },
          {
            code: "19 10 02",
            name: "Non-ferrous waste",
            examples: "Non-ferrous fraction from shredding",
          },
          {
            code: "19 12 02",
            name: "Ferrous metal",
            examples: "Iron separated during mechanical waste sorting",
          },
          {
            code: "19 12 03",
            name: "Non-ferrous metal",
            examples: "Aluminium and copper separated during mechanical sorting",
          },
          {
            code: "20 01 40",
            name: "Metals",
            examples: "Metals collected separately from municipal waste",
          },
        ],
      },
    ],
    note: "This table is for information only. The correct code is set by the waste producer, based on the process the waste comes from. Before hand-over, confirm with us that a given code is covered by our environmental permit.",
  },
  items: {
    "scrap-pickup": {
      name: "Scrap metal pickup",
      eyebrow: "Pickup from your address",
      title: "Scrap metal pickup from your home, yard, warehouse or site",
      lead: "Got a lot of scrap, or heavy pieces you can't move? We come with a grab-crane truck, a tipper or a container, load it, weigh it on certified scales, and you get the paperwork and payment for the material.",
      metaTitle: "Scrap metal pickup from your address — Deva, Hunedoara",
      metaDescription:
        "We collect scrap metal from homes, yards, warehouses and sites in Deva, Hunedoara and the whole county: grab-crane trucks, tippers, containers. Call +40 740 072 256.",
      highlights: [
        {
          title: "Grab crane",
          body: "We load heavy and bulky pieces directly: structures, machinery, piles of scrap. You don't need your own people or equipment.",
        },
        {
          title: "Containers on site",
          body: "For longer clear-outs, renovations or building sites we leave an Abrollkipper container you fill at your own pace, and collect it when full.",
        },
        {
          title: "Weighing and paperwork",
          body: "The material is weighed on metrologically certified scales and you receive the weight ticket and purchase documents.",
        },
      ],
      guide: {
        eyebrow: "How it works",
        heading: "Scrap metal pickup from your address, explained",
        lead: "Many people put off clearing a yard, garage or warehouse because they have no way to move the scrap. Pickup from your address solves exactly that. Here's when it's worth it, how it works and how to get ready.",
        sections: [
          {
            heading: "When pickup is worth it, and when it's easier to come to us",
            body: [
              "For a few pieces that fit in a car boot or trailer, the simplest option is to bring them to our yard in Cristur, Deva. You're paid on the spot and pay nothing for transport.",
              "Pickup from your address makes sense when you have a large quantity, heavy pieces that can't be loaded by hand, or a place that must be cleared quickly (a house that's been sold, a warehouse being vacated, a building site).",
            ],
            points: [
              "Clearing a yard, attic, garage or outbuildings",
              "Demolishing houses, fences, sheds and metal structures",
              "Renovations that replace radiators, pipes or roofing",
              "Decommissioned machinery, farm equipment and plant",
              "Warehouses, workshops and depots being emptied",
              "Metal offcuts from construction sites",
            ],
          },
          {
            heading: "How pickup works, step by step",
            body: [
              "The process is simple, and we agree it with you before the truck leaves:",
            ],
            points: [
              "Call us on +40 740 072 256 or write through the contact form. Tell us what material you have, roughly how much, and the address.",
              "If needed, email us a few photos so we can choose the right vehicle: grab-crane truck, tipper or container.",
              "We tell you the transport cost in advance, so you know what's left net from the value of the material.",
              "We agree the pickup day. Our team loads the material.",
              "The material is weighed on certified scales and you receive the weight ticket and purchase documents.",
            ],
          },
          {
            heading: "How the transport cost is set",
            body: [
              "The pickup cost depends on quantity, distance to our Cristur yard, truck access and the type of material. A large load of heavy iron somewhere with good access loads quickly and costs proportionally less than a few pieces scattered across a hard-to-reach yard.",
              "There are no hidden costs: we tell you up front what transport costs and how the value of the material is calculated, and at the end you get the weight ticket.",
            ],
            points: [],
          },
          {
            heading: "How to prepare for pickup",
            body: [
              "A few simple things shorten loading and raise the value of your load:",
            ],
            points: [
              "Gather the material in one place, as close as possible to where the truck can get in.",
              "Make sure a truck can get in: gate open, no cars parked in the way, ground that can take the weight.",
              "Keep non-ferrous metals (aluminium, copper, brass, cables) separate. They're worth much more than iron.",
              "Drain machinery and vehicle parts of oil, fuel and coolant.",
              "Household appliances, gas cylinders and containers with chemicals are not loaded with scrap iron. Tell us in advance if you have any.",
            ],
          },
          {
            heading: "Where we collect scrap metal",
            body: [
              "We collect scrap metal across Hunedoara county: Deva, Hunedoara, Simeria, Călan, Orăștie, Hațeg, Brad, Petroșani and the surrounding area. For industrial loads and company contracts, our fleet works across Romania.",
            ],
            points: [],
          },
        ],
      },
      faq: [
        {
          question: "Do you collect small amounts of scrap metal?",
          answer:
            "For small amounts that fit in a car or trailer, it's usually better value to bring them to our yard in Cristur, Deva. Call us and we'll tell you honestly whether pickup is worth it for your quantity.",
        },
        {
          question: "How much does scrap metal pickup cost?",
          answer:
            "It depends on quantity, distance, truck access and the type of material. We tell you the transport cost before pickup, so you know exactly what you'll receive net for the material.",
        },
        {
          question: "What vehicles do you use?",
          answer:
            "Grab-crane trucks for heavy pieces and scrap piles, small and large tippers, and Abrollkipper trucks with containers we can leave with you for loading.",
        },
        {
          question: "Do I need to be there for the pickup?",
          answer:
            "Yes, you or an authorised person must be present to hand over the material and for the purchase documents. Private individuals need their identity card.",
        },
        {
          question: "Do you collect scrap metal from other counties?",
          answer:
            "For private individuals we mainly work in Hunedoara county. For companies and industrial quantities, we collect across Romania with our own fleet.",
        },
      ],
    },

    "scrap-metal-deva": {
      name: "Scrap metal Deva",
      eyebrow: "Scrap metal in Deva",
      title: "Scrap metal in Deva: collection centre in Cristur, on the road to Hunedoara",
      lead: "Looking for somewhere to sell scrap metal in Deva? Our yard is in Cristur, a village that belongs to Deva municipality, at Șoseaua Hunedoarei nr. 13. We buy scrap iron, cast iron, aluminium, copper, brass, cables and batteries from individuals and companies.",
      metaTitle: "Scrap metal Deva — Cristur collection centre, price per kg",
      metaDescription:
        "Authorised scrap metal collection centre in Deva (Cristur, Șos. Hunedoarei 13). We buy iron, cast iron, copper, aluminium, brass. Mon–Fri 8–17, Sat 8–13.",
      highlights: [
        {
          title: "Within Deva municipality",
          body: "Cristur is part of Deva municipality. You'll find us at Șoseaua Hunedoarei nr. 13, on the way out of town towards Hunedoara.",
        },
        {
          title: "Open Saturday mornings",
          body: "Monday–Friday 08:00–17:00 and Saturday 08:00–13:00, so you can come at the weekend after clearing the yard.",
        },
        {
          title: "Every metal in one place",
          body: "Scrap iron, cast iron, aluminium, copper, brass, cables and car batteries, graded correctly and weighed in front of you.",
        },
      ],
      guide: {
        eyebrow: "Scrap metal in Deva",
        heading: "What to know if you're selling scrap metal in Deva",
        lead: "We've worked in the Deva area since 2004. Below: how to reach us, what you can bring, what paperwork you need, and your options if the material won't fit in a private car.",
        sections: [
          {
            heading: "How to reach the Cristur collection centre",
            body: [
              "From Deva, leave town on the road towards Hunedoara. Our yard is at Șoseaua Hunedoarei nr. 13, in the village of Cristur, which is administratively part of Deva municipality. There is access for cars, trailers, vans and trucks, and vehicles are weighed on entry and exit.",
              "If you're bringing a larger quantity or materials you haven't sold before, call us first on +40 740 072 256. We'll give you today's rate and tell you how to sort the material so you get the right price.",
            ],
            points: [
              "Address: Șos. Hunedoarei nr. 13, Sat Cristur, Deva, Hunedoara county",
              "Hours: Monday–Friday 08:00–17:00, Saturday 08:00–13:00, closed Sunday",
              "Phone: +40 740 072 256",
            ],
          },
          {
            heading: "What we buy from private individuals in Deva",
            body: [
              "Most customers from Deva come after clearing out a house, garage or yard, after a renovation, or after taking down an old structure. We accept:",
            ],
            points: [
              "Heavy iron and sheet: profiles, pipes, fences, gates, roofing sheet",
              "Cast iron: old radiators, bathtubs, castings",
              "Aluminium: window frames, wheels, profiles, radiators, cans",
              "Copper and brass: pipes, fittings, taps, conductors",
              "Insulated electric cables, processed on our own line",
              "Used car batteries",
            ],
          },
          {
            heading: "What paperwork you need",
            body: [
              "As a private individual you only need your identity card. For every load you get a weight ticket and a purchase slip, and the Environment Fund contribution and income tax are withheld at source, as the law requires. You have nothing to declare afterwards.",
              "Companies in Deva sell scrap metal against an invoice, with the relevant transport and traceability documents.",
            ],
            points: [],
          },
          {
            heading: "Scrap metal pickup in Deva",
            body: [
              "If you have a lot of scrap or heavy pieces, we come to you. Being close to town, we collect from Deva and the surrounding area with grab-crane trucks, tippers or containers. You'll know the transport cost in advance.",
            ],
            points: [],
          },
          {
            heading: "For companies in Deva",
            body: [
              "Workshops, car services, construction firms, shops and factories in Deva produce metal waste constantly. We work with them under contract: we place containers on site, collect at an agreed frequency and issue the documents needed for waste management records.",
              "Besides metals, we also take other recyclable and hazardous waste streams, so a company can work with a single operator for several types of waste.",
            ],
            points: [],
          },
        ],
      },
      faq: [
        {
          question: "Where can I sell scrap metal in Deva?",
          answer:
            "At our yard in Cristur, Șos. Hunedoarei nr. 13, which is part of Deva municipality. We're open Monday–Friday 08:00–17:00 and Saturday 08:00–13:00.",
        },
        {
          question: "Are you open on Saturdays?",
          answer: "Yes, on Saturdays from 08:00 to 13:00. We're closed on Sundays.",
        },
        {
          question: "How much will I get for scrap metal in Deva?",
          answer:
            "The price depends on the grade (heavy iron, sheet, cast iron) and how clean the material is. Call us on +40 740 072 256 for today's rate, or see our prices page for details on each grade.",
        },
        {
          question: "Do you collect scrap metal in Deva?",
          answer:
            "Yes. For large quantities or heavy pieces we collect from Deva and the surrounding area with a grab-crane truck, tipper or container.",
        },
      ],
    },

    "scrap-metal-hunedoara": {
      name: "Scrap metal Hunedoara",
      eyebrow: "Scrap metal in Hunedoara",
      title: "Scrap metal in Hunedoara: drop-off, pickup and collection for homes, workshops and companies",
      lead: "Ecoplast Hart's registered office is in Hunedoara municipality, and our yard is on the road between Hunedoara and Deva, in Cristur. We buy scrap iron and non-ferrous metals from Hunedoara residents and businesses, and collect large loads with our own fleet.",
      metaTitle: "Scrap metal Hunedoara — drop-off and pickup, price per kg",
      metaDescription:
        "Selling scrap metal in Hunedoara? Our authorised yard in Cristur, on the Hunedoara–Deva road, buys iron, cast iron, copper and aluminium. Grab-crane pickup available.",
      highlights: [
        {
          title: "A Hunedoara company",
          body: "Our registered office is in Hunedoara municipality. We've worked in the area since 2004 and know what local workshops and businesses need.",
        },
        {
          title: "On the road to Deva",
          body: "Our yard in Cristur, Șos. Hunedoarei nr. 13, is on the road between Hunedoara and Deva, easy to reach by car or truck.",
        },
        {
          title: "Large-load pickup",
          body: "For demolitions, warehouses and workshops in Hunedoara we bring grab-crane trucks, tippers and Abrollkipper containers.",
        },
      ],
      guide: {
        eyebrow: "Scrap metal in Hunedoara",
        heading: "Selling scrap metal in Hunedoara: everything you need to know",
        lead: "Hunedoara is a city with a steelmaking tradition, with many workshops, warehouses and old industrial buildings. That means plenty of metal waste, from households to industrial structures. Here's how to sell it properly.",
        sections: [
          {
            heading: "Where to hand in scrap metal if you live in Hunedoara",
            body: [
              "Our yard is in the village of Cristur, at Șoseaua Hunedoarei nr. 13, on the road linking Hunedoara and Deva. Vehicles are weighed on entry and exit on certified scales, and you get the weight ticket and paperwork on the spot.",
              "Hours are Monday–Friday 08:00–17:00 and Saturday 08:00–13:00. Call ahead on +40 740 072 256 if you want today's rate or are bringing a large quantity.",
            ],
            points: [],
          },
          {
            heading: "Scrap from workshops, warehouses and industrial buildings",
            body: [
              "In Hunedoara, much of the metal waste comes from machine shops, industrial spaces being refitted and the demolition of old buildings. For this kind of work you need a partner that can take heavy material in large quantities, with complete paperwork.",
            ],
            points: [
              "Steel structures, beams, profiles and sheet from industrial buildings",
              "Decommissioned machinery and equipment",
              "Turnings and production offcuts from machine shops, in dedicated containers",
              "Electric cables from decommissioned installations",
              "Non-ferrous metals: copper, brass, aluminium, bronze",
            ],
          },
          {
            heading: "Household scrap metal",
            body: [
              "For Hunedoara residents, the most common materials are cast-iron radiators replaced during renovations, old fences and gates, roofing sheet, bicycles, metal furniture and car parts. Separate non-ferrous metals from iron before you come, as they pay much better.",
            ],
            points: [],
          },
          {
            heading: "Pickup and containers in Hunedoara",
            body: [
              "If the material won't fit in a private car, we come with a grab-crane truck or tipper, or leave a container you fill at your own pace. You'll know the transport cost before pickup.",
            ],
            points: [],
          },
          {
            heading: "Paperwork and documents",
            body: [
              "Private individuals only need their identity card. The Environment Fund contribution and income tax are withheld at source. Companies in Hunedoara sell against an invoice and receive the transport and traceability documents needed for their waste records.",
            ],
            points: [],
          },
        ],
      },
      faq: [
        {
          question: "How far is the collection centre from Hunedoara?",
          answer:
            "Our yard is in Cristur, on the road between Hunedoara and Deva, at Șoseaua Hunedoarei nr. 13, so it's a short drive.",
        },
        {
          question: "Do you collect scrap metal in Hunedoara?",
          answer:
            "Yes. For large quantities, heavy pieces, or demolition and plant-clearance work, we collect from Hunedoara with grab-crane trucks, tippers or containers.",
        },
        {
          question: "Do you buy turnings from Hunedoara workshops?",
          answer:
            "Yes. We take ferrous and non-ferrous turnings from machine shops, usually in dedicated containers collected at an agreed frequency.",
        },
        {
          question: "What paperwork do I need to sell scrap metal?",
          answer:
            "As a private individual, only your identity card. As a company, you sell against an invoice, with the relevant transport and traceability documents.",
        },
      ],
    },

    "cast-iron-radiators": {
      name: "Cast-iron radiators",
      eyebrow: "Radiators as scrap",
      title: "Cast-iron radiators as scrap: removal, weight and how to hand them in",
      lead: "Replaced your old cast-iron radiators and not sure what to do with them? Cast iron is one of the best-paid scrap grades. We buy them at our yard in Cristur, Deva, and collect large quantities.",
      metaTitle: "Cast-iron radiators for scrap — price, weight, pickup | Deva",
      metaDescription:
        "Sell old cast-iron radiators for scrap in Deva and Hunedoara. How much a section weighs, how to remove them and how to hand them in. Pickup for large quantities.",
      highlights: [
        {
          title: "Cast iron pays well",
          body: "Cast-iron radiators are graded as cast iron, paid at a level close to heavy iron and above sheet and light iron.",
        },
        {
          title: "Heavy but valuable",
          body: "A cast-iron radiator weighs a lot, so even a few radiators add up to a quantity that counts on the scales.",
        },
        {
          title: "Pickup from blocks or houses",
          body: "For renovations of apartment blocks, boiler rooms or whole houses, we come with a truck and load them ourselves.",
        },
      ],
      guide: {
        eyebrow: "Old radiator guide",
        heading: "Everything to know about selling old radiators for scrap",
        lead: "In renovations, cast-iron radiators are usually the first things to go. They're heavy, take up space and are not worth throwing away. Here's how to identify them, remove them safely and get the right price.",
        sections: [
          {
            heading: "Cast iron, steel or aluminium: what kind of radiator do you have",
            body: [
              "What the radiator is made of matters, because each material falls into a different grade with a different price.",
            ],
            points: [
              "Cast-iron radiators: thick, very heavy sections with a rough surface under the paint. A magnet sticks. Handed in as cast iron.",
              "Steel (panel) radiators: thin sheet, much lighter. A magnet sticks. Handed in as light iron.",
              "Aluminium radiators: light, usually white, with fins. A magnet doesn't stick. Handed in as aluminium and worth more per kg than cast iron.",
              "Copper or copper-brass radiators: found in vehicles and some installations. Handed in as non-ferrous.",
            ],
          },
          {
            heading: "How much does a cast-iron radiator weigh",
            body: [
              "It depends on the model, but a single section of a classic cast-iron radiator usually weighs several kilograms, and a whole flat radiator easily reaches tens of kilograms. That's why renovating the heating system of a house or block quickly produces hundreds of kilograms of cast iron.",
              "The exact weight is only known on the scales. We weigh on certified scales and give you a weight ticket.",
            ],
            points: [],
          },
          {
            heading: "How to remove radiators safely",
            body: [
              "If you have no experience with heating systems, call a plumber. If you're doing it yourself, keep a few rules in mind:",
            ],
            points: [
              "Turn off the boiler and let the system cool down completely.",
              "Close the radiator valves or drain the system, as needed.",
              "Put a container under the connections: dirty water, sometimes with sludge, will run out.",
              "Drain the radiator completely before transport. Water adds useless weight and makes a mess of the vehicle.",
              "Cast-iron radiators are very heavy: lift them with two people and wear protective gloves.",
            ],
          },
          {
            heading: "Whole or broken? And what to do with the valves",
            body: [
              "Radiators can be handed in whole; they don't need to be broken up. If you want to break them to make them easier to carry, do it carefully: cast iron breaks into sharp pieces.",
              "Valves and fittings are usually brass. If you remove them and hand them in separately as brass, you get a much better price for them than as cast iron.",
            ],
            points: [],
          },
          {
            heading: "Renovating blocks, schools and buildings: we take large quantities",
            body: [
              "Owners' associations, heating contractors and builders replacing the heating system of a whole building can end up with tonnes of cast-iron radiators. For this kind of job we come with a grab-crane truck or leave a container at the building, and companies receive the necessary documents with the invoice.",
            ],
            points: [],
          },
        ],
      },
      faq: [
        {
          question: "Do you buy old cast-iron radiators?",
          answer:
            "Yes. We buy them at our yard in Cristur, Deva, as cast iron. For large quantities we arrange pickup.",
        },
        {
          question: "Do I need to drain the radiators?",
          answer:
            "Yes, drain them completely before transport. Water adds weight you won't be paid for and can dirty the vehicle.",
        },
        {
          question: "Do you take aluminium or steel radiators too?",
          answer:
            "Yes. Aluminium radiators are paid as aluminium, and steel panel radiators as light iron. We grade them on arrival so you get the right price for each.",
        },
        {
          question: "Do I have to break the radiators before bringing them?",
          answer:
            "No. You can bring them whole. Only break them if you can't move them otherwise, and do it carefully, because cast iron breaks into sharp pieces.",
        },
        {
          question: "Do you collect radiators from blocks or houses?",
          answer:
            "Yes, for large quantities, for example when a whole building or house is being renovated. Call us on +40 740 072 256 to arrange pickup.",
        },
      ],
    },

    "plant-dismantling": {
      name: "Plant and machinery dismantling",
      eyebrow: "Plant clearance and dismantling",
      title: "Scrap metal from industrial building clearance and machinery dismantling",
      lead: "Clearing an industrial building, closing a production line or scrapping machinery? We take and recycle steel structures, machinery and decommissioned equipment with grab cranes, containers and our own fleet, with certified weighing and full traceability paperwork.",
      metaTitle: "Industrial building clearance & machinery scrapping — scrap metal",
      metaDescription:
        "We take scrap metal from industrial building clearances and machinery dismantling: steel structures, production lines, cables. Grab cranes, containers, paperwork.",
      highlights: [
        {
          title: "Heavy equipment, own fleet",
          body: "Grab-crane trucks, large tippers and Abrollkipper containers for large volumes of heavy material.",
        },
        {
          title: "Every metal, sorted",
          body: "We separate ferrous from non-ferrous metals and cables, so each fraction is recycled at its real price.",
        },
        {
          title: "Complete paperwork",
          body: "Invoice, transport and traceability documents and proof of recovery, for your waste management records.",
        },
      ],
      guide: {
        eyebrow: "How we work",
        heading: "Recovering metal from industrial clearances, from assessment to paperwork",
        lead: "A plant clearance usually means tonnes of material, tight deadlines and environmental obligations. Our job is to take the metal off site quickly, recycle it at the right price and give you the documents you need.",
        sections: [
          {
            heading: "What we take from industrial buildings and sites",
            body: [
              "We take virtually any metal fraction from a clearance or dismantling job:",
            ],
            points: [
              "Building steelwork: beams, columns, trusses, purlins, cladding sheet",
              "Decommissioned machinery, machine tools and production lines",
              "Overhead cranes, crane rails and lifting equipment",
              "Emptied and cleaned tanks, vessels and metal pipework",
              "Industrial racking, storage structures and light steel structures",
              "Electric cables and installations, processed on our granulation line",
              "Motors, drained transformers and equipment containing copper",
            ],
          },
          {
            heading: "How we work, step by step",
            body: [],
            points: [
              "You send us a description of the job, photos and the location. If needed, we visit to assess the site.",
              "We send an offer: price per tonne for each metal category and the logistics needed (containers, grab crane, transport frequency).",
              "We place containers on site and load the material with a grab crane.",
              "We transport the material to our yard in Cristur, Deva, where it is weighed on certified scales.",
              "We sort the material by category and issue the invoice and traceability documents.",
            ],
          },
          {
            heading: "Dismantling and cutting on site",
            body: [
              "Every clearance is different: some structures are already taken down and just need loading, others need cutting to transportable sizes. Tell us at the start what stage the job is at and what you need, and we'll tell you what we can take and how we'll organise the logistics.",
            ],
            points: [],
          },
          {
            heading: "Safety and environment: what we separate before collection",
            body: [
              "Industrial machinery and installations often contain oils, emulsions, batteries, electronic components or other hazardous waste. These must be separated from scrap iron and handed in through their own route. As an operator also authorised for hazardous waste, we can take some of these streams as part of the same job.",
            ],
            points: [
              "Hydraulic and engine oils drained from machinery",
              "Accumulators and batteries",
              "Electrical and electronic equipment (WEEE)",
              "Containers with chemical residues",
            ],
          },
          {
            heading: "How to get the most value from a clearance",
            body: [
              "The difference between a load sold as a single heap and a sorted one can be very large. Copper from motors and cables, brass from fittings and aluminium from profiles are worth several times more than iron. The more fractions we separate on site, the higher the total value of the job.",
              "For large jobs, we agree the price per tonne for each category before we start, so you know from the outset what value to expect.",
            ],
            points: [],
          },
        ],
      },
      faq: [
        {
          question: "Do you take scrap metal from clearing an entire industrial building?",
          answer:
            "Yes. We take the steel structures, sheet, machinery and installations from industrial building clearances, with containers, grab cranes and transport by our own fleet.",
        },
        {
          question: "What documents do I get for the metal?",
          answer:
            "Companies receive an invoice, transport and traceability documents and, on request, proof of waste recovery, as needed for waste management records.",
        },
        {
          question: "How is the price for a clearance set?",
          answer:
            "Per tonne, for each metal category (heavy iron, sheet, non-ferrous, cables), based on the day's rates, the quantity and the logistics needed. We send an offer before work starts.",
        },
        {
          question: "Do you work outside Hunedoara county?",
          answer: "Yes. For industrial work we travel across Romania with our own fleet.",
        },
        {
          question: "What do you do with oils and hazardous components from machinery?",
          answer:
            "They are separated from the scrap and handed in through the hazardous waste route. As we're also authorised for that kind of waste, we can take some of it as part of the same job.",
        },
      ],
    },

    "metal-waste-codes": {
      name: "Metal waste codes",
      eyebrow: "Guide for companies",
      title: "Metal waste codes: 17 04 05, 12 01 01 and the other common codes",
      lead: "What code does construction scrap iron have? What about workshop turnings or cables? We've gathered the most commonly used metal waste codes in one place, with examples, plus an explanation of the documents that go with each hand-over.",
      metaTitle: "Metal waste codes — 17 04 05, 12 01 01, 17 04 11 explained",
      metaDescription:
        "List of metal waste codes: 17 04 05 iron and steel, 12 01 01 ferrous turnings, 17 04 01 copper, 17 04 11 cables and more, with examples and the documents you need.",
      highlights: [
        {
          title: "The common codes, in one table",
          body: "Iron and steel, turnings, copper, aluminium, cables, packaging and metals from vehicles, with the official description and examples.",
        },
        {
          title: "Hazardous or non-hazardous",
          body: "Codes with an asterisk (*) are hazardous waste, with separate rules for storage, transport and hand-over.",
        },
        {
          title: "Documents and records",
          body: "Which documents go with metal waste in transport and what you need to keep for your waste management records.",
        },
      ],
      guide: {
        eyebrow: "Using the codes",
        heading: "How to choose the right code and which documents you need",
        lead: "A waste code isn't a formality. It appears in your waste management records, in transport documents and in reports to the authorities, and a wrong code can cause problems at an inspection.",
        sections: [
          {
            heading: "Who sets the waste code",
            body: [
              "The code is set by the waste producer, the company where the waste arises. The main criterion is the process it comes from: the same iron can have a different code depending on whether it comes from demolition (17 04 05), metalworking (12 01 01 for turnings) or vehicle dismantling (16 01 17).",
              "When you're not sure, choose the code from the chapter that describes your activity and check with the operator taking the waste. We can help you check the classification before hand-over.",
            ],
            points: [],
          },
          {
            heading: "The most common situations",
            body: [],
            points: [
              "Scrap iron from construction, demolition or plant clearance: 17 04 05",
              "Steel turnings from lathes and mills: 12 01 01",
              "Aluminium, brass or copper turnings: 12 01 03",
              "Copper or brass pipes and fittings from construction: 17 04 01",
              "Aluminium window frames and profiles from construction: 17 04 02",
              "Ordinary electric cables: 17 04 11",
              "Mixed, unsorted metals from construction: 17 04 07",
              "Metals collected separately from households: 20 01 40",
              "Lead-acid car batteries: 16 06 01*",
            ],
          },
          {
            heading: "Documents that go with metal waste in transport",
            body: [
              "Waste travels from the producer to the authorised operator with documents showing what waste is being carried, how much, where from and where to. Non-hazardous waste uses the waste loading-unloading form, and hazardous waste has additional transport approval procedures.",
              "Besides the transport documents, at hand-over you receive the weight ticket and the invoice or purchase document. Together these form the basis of your company's waste management records.",
            ],
            points: [],
          },
          {
            heading: "Waste management records and traceability",
            body: [
              "Companies that produce waste must keep records of the quantities produced, stored and handed over, by waste code, and report this data to the environmental authorities. Traceability means that for every quantity you can show, with documents, who it was handed to and that it reached an authorised operator.",
              "That's why it matters to work with an authorised operator who gives you correct documents for every transport. For reporting details, see our guides on waste records and reporting in SIM.",
            ],
            points: [],
          },
          {
            heading: "Common mistakes",
            body: [],
            points: [
              "Using the same code for all metals, although copper, aluminium and iron have different codes",
              "Classifying production turnings as 17 04 05 instead of 12 01 01 or 12 01 03",
              "Handing in metal contaminated with oil or paint as non-hazardous waste",
              "Missing transport documents for small loads",
              "Handing waste to unlicensed collectors who can't issue valid documents",
            ],
          },
        ],
      },
      faq: [
        {
          question: "What is the waste code for scrap iron?",
          answer:
            "It depends on where it comes from. Iron and steel from construction and demolition is 17 04 05. Ferrous turnings from metalworking are 12 01 01, and ferrous metal from end-of-life vehicles is 16 01 17.",
        },
        {
          question: "What does code 17 04 05 mean?",
          answer:
            "17 04 05 means “iron and steel” in the construction and demolition waste chapter. It's the code most often used for steel structures, rebar, beams, pipes and sheet from construction or clearance work.",
        },
        {
          question: "What does code 12 01 01 mean?",
          answer:
            "12 01 01 means “ferrous metal filings and turnings” and is used for steel shavings from turning, milling, drilling and other metalworking operations.",
        },
        {
          question: "What is the waste code for electric cables?",
          answer:
            "Ordinary cables are 17 04 11. Cables containing oil, coal tar or other hazardous substances are 17 04 10*, which is hazardous waste.",
        },
        {
          question: "What does the asterisk on some codes mean?",
          answer:
            "The asterisk (*) means the waste is hazardous. Such waste has stricter rules for storage, transport and hand-over and can only go to operators authorised for hazardous waste.",
        },
      ],
    },
  },
};
