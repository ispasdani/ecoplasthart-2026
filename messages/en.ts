import type { Messages } from "./ro";

/**
 * English dictionary. Typed as `Messages`, so it must mirror `ro.ts` exactly —
 * every key, and every array with the same length. TypeScript fails the build
 * otherwise.
 */
export const en: Messages = {
  meta: {
    siteName: "Ecoplast Hart",
    titleDefault:
      "Ecoplast Hart — Waste Collection, Sorting & Recycling | Deva, Romania",
    titleTemplate: "%s | Ecoplast Hart",
    description:
      "Ecoplast Hart SRL collects, sorts and recycles non-hazardous and hazardous waste across Hunedoara county and all of Romania. In-house cable-processing plant, own container fleet, and full document traceability.",
    home: {
      title: "Waste collection, sorting and recycling — Deva, Romania",
      description:
        "We collect, sort and recycle waste for companies across Romania: scrap metal, plastic, cardboard, Al/Cu cables, used oils and WEEE. Containers at source and complete paperwork.",
    },
    about: {
      title: "About us — a recycling company since 2004",
      description:
        "Ecoplast Hart SRL, a Romanian recycling company founded in 2004 in Hunedoara county: cable-processing plant, sorting facility and its own logistics fleet.",
    },
    services: {
      title: "Waste collection and recycling services",
      description:
        "Waste collection, recovery and recycling, scrap metal, cable processing, hazardous waste and container transport. Services for businesses across Romania.",
    },
  },

  company: {
    legalName: "Ecoplast Hart SRL",
    shortName: "Ecoplast Hart",
    email: "ecoplast_hart@yahoo.com",
    phonePrimary: "+40 746 152 318",
    phoneSecondary: "+40 254 746 515",
    phoneTertiary: "+40 254 236 228",
    addressOperational:
      "Șos. Hunedoarei nr. 13, Sat Cristur, Deva, Hunedoara county",
    addressLegal:
      "B-dul Dacia nr. 2, Bl. E5, ap. 1, Hunedoara, Hunedoara county",
    cui: "17059959",
    tradeRegister: "J20/1943/2004",
    caen: "NACE 3832",
    foundedYear: "2004",
  },

  nav: {
    home: "Home",
    about: "About us",
    services: "Services",
    servicesOverview: "All services",
    servicesOverviewDesc: "See our full range of waste-management services.",
    certifications: "Certifications",
    contact: "Contact",
    cta: "Request a quote",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },

  common: {
    learnMore: "Learn more",
    viewAll: "View all",
    seeAllServices: "See all services",
    requestQuote: "Request a quote",
    requestCollection: "Request a collection",
    contactUs: "Contact us",
    callUs: "Call us",
    sendEmail: "Send an email",
    backToServices: "Back to services",
    acceptedMaterials: "Accepted materials",
    howItWorks: "How it works",
    downloadFile: "Download",
    viewDocument: "View document",
    relatedServices: "Related services",
  },

  a11y: {
    skipToContent: "Skip to main content",
    languageSwitcher: "Change language",
    breadcrumb: "Breadcrumb",
    previous: "Previous",
    next: "Next",
  },

  footer: {
    blurb:
      "Collecting, sorting and recycling recyclable materials since 2004. An authorised partner for responsible waste management in Hunedoara county and across Romania.",
    servicesHeading: "Services",
    companyHeading: "Company",
    contactHeading: "Contact",
    legalHeading: "Company details",
    rights: "All rights reserved.",
    officeLabel: "Operational site",
    legalSeatLabel: "Registered office",
  },

  home: {
    hero: {
      eyebrow: "Ecoplast Hart SRL · Since 2004",
      title: "Your waste, handled responsibly.",
      subtitle:
        "We collect, sort and recycle non-hazardous and hazardous waste for companies across Romania — with complete documentation, our own transport, and real recovery rather than just collection.",
      ctaPrimary: "Request a quote",
      ctaSecondary: "See our services",
      imageCaption: "Cristur site, Deva",
    },
    stats: [
      { value: "2004", label: "Year founded" },
      { value: "20+", label: "Years of experience" },
      { value: "13", label: "Waste streams" },
      { value: "3", label: "ISO systems" },
    ],
    why: {
      eyebrow: "Why us",
      heading: "A stable partner for your company's waste",
      intro:
        "Whether you want to streamline collection at your site, reduce disposal costs or get your environmental paperwork in order, we work with you all the way to the result.",
      items: [
        {
          title: "National coverage",
          body: "We transport non-hazardous waste throughout Romania, with our own fleet and containers.",
        },
        {
          title: "Tailored solutions",
          body: "We don't believe in one-size-fits-all. We size the stream, the containers and the frequency around you.",
        },
        {
          title: "Full compliance",
          body: "We work in line with environmental legislation and the EU waste hierarchy: generator → collector → recovery.",
        },
        {
          title: "Real recovery",
          body: "We keep reinvesting in processing capacity so the material we take actually becomes a secondary raw material.",
        },
      ],
    },
    services: {
      eyebrow: "Services",
      heading: "End-to-end waste-management solutions",
      intro:
        "From a single one-off collection to a framework contract with monthly reporting — we cover the whole circuit.",
    },
    industries: {
      eyebrow: "Industries we serve",
      heading: "Solutions tailored to every type of operation",
      intro:
        "Every industry generates a different waste mix and carries different reporting obligations. That's why we build the solution around what you produce, not around what we happen to offer.",
      items: [
        {
          title: "Industry & manufacturing",
          body: "Regular pickup of process waste, packaging and production rejects straight off the line.",
        },
        {
          title: "Construction & demolition",
          body: "On-site containers for metal, wood, plastic and recyclable rubble, with scheduled pickup.",
        },
        {
          title: "Retail & distribution",
          body: "Cardboard and film baled at source, with fast pickup and clear records per location.",
        },
        {
          title: "Energy & utilities",
          body: "Al/Cu cables, decommissioned equipment and transformers — processed at our own plant.",
        },
        {
          title: "Automotive & workshops",
          body: "Used oils, batteries and accumulators, metal parts and car wiring, collected with full paperwork.",
        },
        {
          title: "Public institutions",
          body: "Selective collection contracts for town halls, schools and institutions, with periodic reporting.",
        },
      ],
    },
    capabilities: {
      eyebrow: "Capabilities",
      heading: "Our own infrastructure, from collection to raw material",
      intro:
        "We don't subcontract the core of the operation. The plants, the containers and the trucks are ours.",
      items: [
        {
          title: "Sorting facility",
          body: "Sorting lines with stream-specific equipment for a clean separation of materials.",
        },
        {
          title: "Compaction & baling",
          body: "Presses for cardboard and plastic that cut volume and raise the material's market value.",
        },
        {
          title: "Cable processing",
          body: "A plant that turns Al/Cu cables into copper granules, aluminium granules and plastic fractions.",
        },
        {
          title: "Logistics fleet",
          body: "Roll-off trucks, small- and large-tonnage tippers, containers and a grab crane.",
        },
      ],
    },
    streams: {
      eyebrow: "Waste streams",
      heading: "What we take",
      intro:
        "Non-hazardous and hazardous, metallic and non-metallic. If your stream isn't on the list, just ask.",
      items: [
        "Plastic (PET, film, crates, conduit)",
        "Paper & cardboard",
        "Wood",
        "Textiles & leather",
        "Ferrous metals (scrap iron)",
        "Non-ferrous (Al, Cu, brass, Pb, Ni, Zn)",
        "WEEE — electrical equipment",
        "Glass",
        "Rubber",
        "Batteries & accumulators",
        "Used & mineral oils",
        "Cables (Al/Cu conductors)",
        "Hazardous waste",
      ],
    },
    process: {
      eyebrow: "How we work",
      heading: "Five steps from the first call to the final report",
      intro: "A predictable process, with complete paperwork at every pickup.",
      steps: [
        {
          title: "Assessment",
          body: "We look at the type and volume of waste you generate and agree the right stream together.",
        },
        {
          title: "Equipping",
          body: "We deliver the containers, big bags or presses needed for selective collection at source.",
        },
        {
          title: "Collection",
          body: "We pick up at the agreed frequency, with our own transport and weighing on receipt.",
        },
        {
          title: "Recovery & reporting",
          body: "We sort, process and hand you the traceability documents your environmental reporting needs.",
        },
        {
          title: "Completion",
          body: "We close the loop: confirm the recovered quantities, archive the paperwork and fine-tune the flow for the next pickup.",
        },
      ],
    },
    certifications: {
      eyebrow: "Certifications",
      heading: "Documents and authorisations, out in the open",
      intro:
        "We publish our authorisations and certificates so your environmental team can download them directly.",
      cta: "View documents",
    },
    cta: {
      heading: "Tell us what waste you generate",
      body: "We'll come back with something concrete: which containers you need, how often we collect, and what documents you receive.",
      primary: "Request a quote",
      secondary: "Call us now",
    },
  },

  about: {
    eyebrow: "About us",
    hero: {
      title: "Twenty years of recycling, built step by step",
      lead: "Ecoplast Hart SRL is a Romanian family-run company founded in 2004 in Hunedoara county. We specialise in the collection, sorting and recycling of non-hazardous and hazardous waste — non-metallic (cardboard, paper, plastic, rubber, glass, wood, textiles) and metallic (ferrous and non-ferrous).",
    },
    story: {
      heading: "Self-funded growth",
      body: "We didn't grow through mergers or outside capital, but by reinvesting profit, year after year, into processing plants, logistics yards and qualified people. Today we run our own cable-processing facility, producing copper and aluminium granules and plastic fractions as secondary raw materials, and a fleet of trucks and containers covering all of Romania.",
    },
    approach: {
      heading: "Compliance, not just collection",
      body: "We position ourselves around full compliance with EU waste-management policy and the generator → collector → recovery circuit. For our clients that means something simple: every kilogram we take has paperwork, and the material genuinely gets recycled. We also run awareness campaigns to shift public attitudes toward recycling.",
    },
    values: {
      eyebrow: "Our values",
      heading: "What guides us",
      items: [
        {
          title: "Traceability",
          body: "Every shipment has its documents. No exceptions and no shortcuts.",
        },
        {
          title: "Environmental responsibility",
          body: "The goal is genuine recovery of the material, not moving the problem somewhere else.",
        },
        {
          title: "Long-term relationships",
          body: "Most of our clients have worked with us for years. That's the measure that counts.",
        },
      ],
    },
    identity: {
      heading: "Company identity",
      rows: [
        {
          label: "Legal name",
          value: "Ecoplast Hart SRL (S.C. Ecoplast Hart S.R.L.)",
        },
        { label: "Founded", value: "20 December 2004" },
        { label: "Fiscal code (CUI)", value: "17059959" },
        {
          label: "Trade register",
          value: "J20/1943/2004 (Hunedoara county)",
        },
        {
          label: "Principal activity",
          value: "NACE 3832 — recovery of sorted recyclable materials",
        },
        {
          label: "Registered office",
          value: "B-dul Dacia nr. 2, Bl. E5, ap. 1, Hunedoara",
        },
        {
          label: "Operational site",
          value: "Șos. Hunedoarei nr. 13, Sat Cristur, Deva, Hunedoara county",
        },
      ],
    },
    certifications: {
      heading: "Certifications",
      items: [
        { code: "ISO 9001:2015", label: "Quality Management System" },
        { code: "ISO 14001:2015", label: "Environmental Management System" },
        { code: "ISO 45001:2018", label: "Occupational Health & Safety" },
      ],
      note: "Certifications as declared by the company. Scanned documents are available in the Certifications section.",
    },
  },

  services: {
    eyebrow: "Services",
    index: {
      title: "Waste-management services",
      lead: "We cover the whole circuit, from the container at your gate to the secondary raw material delivered to recyclers. Pick the service you're interested in, or tell us what waste you generate and we'll propose the solution.",
    },
    items: {
      "waste-collection": {
        name: "Waste collection",
        navDesc: "Scheduled pickup from your site.",
        title: "Waste collection for businesses",
        lead: "We collect waste directly from your generation point or at our yard in Cristur, at a frequency we agree together. We supply the containers and big bags needed for selective collection at source.",
        highlights: [
          {
            title: "Containers at source",
            body: "We deliver containers sized to your real volume, plus big bags and mills to reduce bulk.",
          },
          {
            title: "Scheduled pickup",
            body: "We set a fixed calendar or collect on demand, depending on your production rhythm.",
          },
          {
            title: "Paperwork every trip",
            body: "You receive loading/unloading forms and quantity records for environmental reporting.",
          },
        ],
        accepted: [
          "Paper & cardboard",
          "Plastic and film",
          "Wood",
          "Ferrous and non-ferrous metals",
          "Glass",
          "Textiles",
        ],
        metaTitle: "Industrial waste collection for businesses",
        metaDescription:
          "Waste collection for companies in Hunedoara and across Romania: containers at source, scheduled pickup and complete traceability documents. Ecoplast Hart SRL.",
      },
      "recycling-recovery": {
        name: "Recycling & recovery",
        navDesc: "Sorting, baling and conversion into raw material.",
        title: "Waste recovery and recycling",
        lead: "The material we collect enters our sorting facility, where it is separated into fractions, compacted and baled. The output goes on to recyclers as a secondary raw material — that's real recovery, not storage.",
        highlights: [
          {
            title: "Sorting facility",
            body: "Sorting lines with stream-dedicated equipment for a clean separation of fractions.",
          },
          {
            title: "Compaction & baling",
            body: "Presses for cardboard and plastic that cut volume and raise the material's market value.",
          },
          {
            title: "Compliant circuit",
            body: "We follow the EU waste hierarchy along the generator → collector → recovery route.",
          },
        ],
        accepted: [
          "Cardboard and paper",
          "PET and film",
          "Plastic crates and conduit",
          "Wood",
          "Rubber",
          "Textiles and leather",
        ],
        metaTitle: "Waste recovery and recycling",
        metaDescription:
          "Sorting, compaction and baling of recyclable waste at our own facility in Cristur, Deva. The material becomes a secondary raw material. Ecoplast Hart SRL.",
      },
      "metal-waste": {
        name: "Metal waste & scrap",
        navDesc: "Ferrous and non-ferrous, weighed and paid fairly.",
        title: "Scrap metal and metal waste collection",
        lead: "We take ferrous and non-ferrous metal waste, from scrap iron and sheet metal to aluminium, copper, brass, lead, nickel and zinc. We weigh on receipt, in front of you, and issue the documents on the spot.",
        highlights: [
          {
            title: "Ferrous",
            body: "Scrap iron, sheet, cast iron, profiles and metal structures, including grab-crane loading.",
          },
          {
            title: "Non-ferrous",
            body: "Aluminium, copper, brass, lead, nickel, zinc, as well as mixed alloys.",
          },
          {
            title: "Transparent weighing",
            body: "A metrologically verified scale on site and a weighing ticket for every receipt.",
          },
        ],
        accepted: [
          "Scrap iron and sheet metal",
          "Cast iron and steel",
          "Aluminium (profiles, cans, sheet)",
          "Copper and brass",
          "Lead, nickel, zinc",
          "Mixed alloys",
        ],
        metaTitle: "Scrap metal and metal waste collection — Hunedoara",
        metaDescription:
          "Authorised collection centre for scrap iron, ferrous and non-ferrous metals (aluminium, copper, brass, lead, zinc) in Cristur, Deva, Hunedoara county. Transparent weighing.",
      },
      "cable-processing": {
        name: "Cable processing",
        navDesc: "Al/Cu cables turned into granules.",
        title: "Cable processing and recycling",
        lead: "We run a dedicated plant that recovers conductors from aluminium and copper cables — overhead, underground, automotive or from electronics. The output: copper granules, aluminium granules and plastic fractions, all fed back into the industrial cycle.",
        highlights: [
          {
            title: "In-house plant",
            body: "Processing happens entirely at our own site, with no intermediaries.",
          },
          {
            title: "Cu and Al granules",
            body: "Conductors are separated and granulated to high purity, ready for foundries.",
          },
          {
            title: "Plastic fraction recovered",
            body: "The insulation doesn't go to landfill: it is separated and recovered as a plastic fraction.",
          },
        ],
        accepted: [
          "Overhead power cables",
          "Underground cables",
          "Automotive wiring",
          "Cables from electronics",
          "Aluminium conductors",
          "Copper conductors",
        ],
        metaTitle: "Al/Cu cable processing and recycling",
        metaDescription:
          "In-house plant for processing aluminium and copper cables: copper granules, aluminium granules and plastic fractions as secondary raw materials. Ecoplast Hart SRL.",
      },
      "hazardous-waste": {
        name: "Hazardous waste",
        navDesc: "Used oils, batteries, accumulators and WEEE.",
        title: "Hazardous waste and WEEE",
        lead: "We are authorised for the collection and storage of hazardous waste: used and mineral oils, petroleum sludges, spent batteries and accumulators, as well as end-of-life electrical and electronic equipment.",
        highlights: [
          {
            title: "Used oils",
            body: "Collection from workshops, fleets and industrial sites, in sealed containers we provide.",
          },
          {
            title: "Batteries & accumulators",
            body: "We take car batteries and spent industrial accumulators, with the corresponding paperwork.",
          },
          {
            title: "WEEE",
            body: "End-of-life electrical and electronic equipment, from fridges to IT hardware.",
          },
        ],
        accepted: [
          "Used and mineral oils",
          "Petroleum sludges",
          "Car batteries",
          "Industrial accumulators",
          "WEEE (fridges, TVs, IT)",
          "Contaminated packaging",
        ],
        metaTitle: "Hazardous waste, used oils, batteries and WEEE",
        metaDescription:
          "Authorised hazardous waste collection in Hunedoara county: used oils, petroleum sludges, batteries and accumulators, WEEE. Full documentation. Ecoplast Hart SRL.",
      },
      logistics: {
        name: "Transport & containers",
        navDesc: "Own fleet, containers and grab crane.",
        title: "Waste transport and container hire",
        lead: "Our own fleet lets us collect fast, anywhere in Romania. Roll-off trucks, small- and large-tonnage tippers, containers in various capacities, and a grab crane for bulky materials.",
        highlights: [
          {
            title: "Containers on request",
            body: "We provide containers sized to the volume and type of waste you generate.",
          },
          {
            title: "National transport",
            body: "We transport non-hazardous waste throughout Romania, with accompanying documents.",
          },
          {
            title: "Heavy handling",
            body: "A grab crane for loading bulky materials directly at source.",
          },
        ],
        accepted: [
          "Roll-off containers",
          "Big bags",
          "Small-tonnage tippers",
          "Large-tonnage tippers",
          "Grab crane",
          "Domestic transport in Romania",
        ],
        metaTitle: "Waste transport and container hire",
        metaDescription:
          "Own fleet for waste transport across Romania: roll-off trucks, tippers, containers in various capacities and a grab crane. Ecoplast Hart SRL.",
      },
    },
  },

  certifications: {
    eyebrow: "Certifications",
    title: "Certifications, authorisations and documents",
    lead: "Here we publish the documents proving that we operate under proper authorisation: ISO certificates, environmental permits and other papers your environmental team can download directly.",
    isoHeading: "Management systems",
    documentsHeading: "Available documents",
    documentsIntro: "The files below are uploaded and kept current by our team.",
    empty: {
      title: "No documents uploaded yet",
      body: "Documents will appear here as soon as they are uploaded. In the meantime, you can request them from us by email.",
    },
    loading: "Loading documents…",
    uncategorized: "Other documents",
    metaTitle: "Certifications and authorisations",
    metaDescription:
      "ISO 9001, ISO 14001 and ISO 45001 certificates, environmental permits and official Ecoplast Hart SRL documents, available for download.",
  },

  contact: {
    eyebrow: "Contact",
    title: "Let's talk about your waste",
    lead: "Tell us what type of waste you generate and in what quantity, and we'll come back with a concrete proposal: the containers needed, the pickup frequency, and the documents you receive.",
    channelsHeading: "How to reach us",
    emailLabel: "Email",
    phoneLabel: "Phone",
    officeHeading: "Operational site",
    officeBody:
      "Our yard in Sat Cristur, on Șoseaua Hunedoarei, between Deva and Hunedoara. This is where receipt, weighing and processing take place.",
    legalHeading: "Registered office",
    hoursHeading: "Opening hours",
    hoursWeekdays: "Monday – Friday: 08:00 – 17:00",
    hoursSaturday: "Saturday: 08:00 – 13:00",
    hoursSunday: "Sunday: closed",
    directionsCta: "Open in Google Maps",
    metaTitle: "Contact",
    metaDescription:
      "Contact Ecoplast Hart SRL: phone, email and our site in Sat Cristur, Deva, Hunedoara county. Request a quote for waste collection.",
  },

  notFound: {
    title: "Page not found",
    body: "The link you followed no longer exists or has been moved.",
    cta: "Back to the homepage",
  },
};
