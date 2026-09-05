import type { Messages } from "./ro";
import { articlesEn } from "./articles-en";

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
      "Collection, sorting and recycling of non-hazardous and hazardous waste across Hunedoara and all of Romania. In-house cable plant and full traceability.",
    home: {
      title: "Waste collection, sorting and recycling — Deva, Romania",
      description:
        "We collect, sort and recycle waste for companies across Romania: scrap metal, plastic, cardboard, Al/Cu cables, used oils and WEEE.",
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
    articles: "Articles",
    contact: "Contact",
    privacy: "Privacy policy",
    cookies: "Cookie policy",
    siteMap: "Site map",
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
    mediaCredit:
      "Photographs were taken by us at the Cristur site. Video sequences are generated with artificial intelligence from our own photographs.",
    officeLabel: "Operational site",
    legalSeatLabel: "Registered office",
    legalLinksLabel: "Legal documents",
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
      { value: "{years}+", label: "Years of experience" },
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
    imageAlts: {
      "metal-waste":
        "Sorted ferrous scrap at the Cristur yard, ready for weighing and recovery",
      "hazardous-waste":
        "Labelled hazardous-waste containers, stored separately in line with environmental regulations",
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
          "Authorised collection centre for scrap iron and ferrous and non-ferrous metals (aluminium, copper, brass, lead, zinc) in Cristur, Deva. Transparent weighing.",
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
          "In-house plant for processing aluminium and copper cables: copper and aluminium granules and plastic fractions as secondary raw materials.",
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
          "Authorised hazardous waste collection in Hunedoara county: used oils, petroleum sludges, batteries, accumulators and WEEE. Full documentation.",
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

  siteMap: {
    eyebrow: "Navigation",
    title: "Site map",
    lead: "Every public page on the site, in one place.",
    servicesHeading: "Services",
    companyHeading: "Company",
    resourcesHeading: "Resources",
    legalHeading: "Legal documents",
    metaTitle: "Site map",
    metaDescription:
      "Every page on the Ecoplast Hart SRL site: collection and recycling services, certifications, contact and legal documents.",
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
    categories: {
      iso: "ISO certificates",
      environment: "Environmental permits",
      permits: "Licences and approvals",
      company: "Company documents",
      transport: "Transport and traceability",
    },
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

  legal: {
    updatedLabel: "Last updated",
    updatedDate: "5 September 2026",
    tocHeading: "Contents",

    privacy: {
      eyebrow: "Legal",
      title: "Privacy policy",
      lead: "How we collect, use and protect personal data when you contact us or browse this site.",
      metaTitle: "Privacy policy",
      metaDescription:
        "How we process personal data: what we collect, for which purposes, who we share it with, how long we keep it and what your rights are under the GDPR.",
      identityHeading: "Data controller",
      identityLabels: {
        legalName: "Legal name",
        cui: "VAT / registration number",
        tradeRegister: "Trade register",
        addressLegal: "Registered office",
        addressOperational: "Operational site",
        email: "Email",
        phone: "Phone",
      },
      sections: [
        {
          heading: "Who we are",
          paragraphs: [
            "Ecoplast Hart SRL is the controller of the personal data processed through this site, within the meaning of Regulation (EU) 2016/679 (GDPR) and Romanian Law no. 190/2018. Our identification and contact details are set out in the table above.",
            "We have not appointed a data protection officer, as our activity does not fall within the cases listed in Article 37 GDPR. Requests concerning personal data are handled directly by company management, at the email address above.",
          ],
          bullets: [],
          footnote: "",
        },
        {
          heading: "What data we collect",
          paragraphs: [
            "This site contains no forms and does not ask you to create an account. Data reaches us in two ways:",
          ],
          bullets: [
            "Data you send us directly, when you email or call us: your name, email address, phone number, the company you represent and any other information you choose to include in your message.",
            "Technical data generated automatically when you visit the site: IP address, device and browser type, referring page, pages visited and time of access. This is collected by the infrastructure hosting the site and by the traffic analytics tool.",
          ],
          footnote:
            "We do not collect special categories of data (health, beliefs, trade union membership) and we do not knowingly seek personal data from minors.",
        },
        {
          heading: "Why we process the data, and on what basis",
          paragraphs: [
            "We process data solely for the purposes below, each with its legal basis under Article 6(1) GDPR:",
          ],
          bullets: [
            "To answer your enquiry and send you a quote — basis: steps taken at your request prior to entering into a contract, point (b).",
            "To perform the contract and issue waste transport and traceability documents — basis: performance of a contract, point (b).",
            "To meet the tax, accounting and waste-reporting obligations imposed on us by law — basis: legal obligation, point (c).",
            "To keep the site working and secure, and to understand in aggregate how it is used — basis: our legitimate interest in operating and improving the site, point (f).",
          ],
          footnote:
            "We do not use your data for direct marketing, profiling, or automated decision-making that produces legal effects concerning you.",
        },
        {
          heading: "Who we share data with",
          paragraphs: [
            "We do not sell or rent personal data. We disclose it only to the suppliers who help us operate this site, acting as processors on our instructions, and to public authorities where the law requires it.",
            "The suppliers involved in running this site are:",
          ],
          bullets: [
            "Vercel Inc. — website hosting and traffic analytics.",
            "Clerk, Inc. — user authentication for the site's private administration area.",
            "Convex, Inc. — storage of the content and documents published on the site.",
          ],
          footnote:
            "These suppliers are established in the United States. Transfers outside the European Economic Area are carried out on the basis of the Standard Contractual Clauses adopted by the European Commission and, where applicable, the EU–U.S. Data Privacy Framework.",
        },
        {
          heading: "How long we keep data",
          paragraphs: [
            "We keep commercial correspondence for the duration of the discussions and, where these lead to a working relationship, for the duration of that relationship.",
            "Accounting records and waste-management records are kept for the periods required by the applicable legislation, which generally range between 3 and 10 years depending on the type of document.",
            "Technical traffic data and aggregate statistics are kept for no more than 24 months, after which they are deleted or irreversibly anonymised.",
          ],
          bullets: [],
          footnote: "",
        },
        {
          heading: "Your rights",
          paragraphs: [
            "As a data subject, the GDPR gives you the following rights in relation to your data:",
          ],
          bullets: [
            "The right of access — to find out whether we process data about you and to receive a copy of it.",
            "The right to rectification — to have inaccurate data corrected and incomplete data completed.",
            "The right to erasure — to have data deleted where we no longer have a basis for keeping it.",
            "The right to restriction of processing — to have processing paused while we verify a challenge.",
            "The right to data portability — to receive your data in a structured, commonly used format.",
            "The right to object — to object to processing based on our legitimate interest.",
            "The right not to be subject to a decision based solely on automated processing.",
          ],
          footnote:
            "You can exercise any of these rights by sending a request to our email address. We will respond within one month of receiving it. If our response does not satisfy you, you have the right to lodge a complaint with the Romanian Data Protection Authority (ANSPDCP, B-dul G-ral. Gheorghe Magheru nr. 28-30, Sector 1, Bucharest, anspdcp@dataprotection.ro) or to bring the matter before the competent court.",
        },
        {
          heading: "Data security",
          paragraphs: [
            "The site is served exclusively over an encrypted HTTPS connection, and access to the administration area is protected by authentication. We apply reasonable technical and organisational measures to protect data against unauthorised access, loss or accidental disclosure.",
            "No system is entirely invulnerable, however. If a personal data breach occurs that is likely to affect your rights, we will inform you and notify the supervisory authority within the deadlines set by the GDPR.",
          ],
          bullets: [],
          footnote: "",
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "We may update this policy when the services we rely on or the applicable legal requirements change. The version in force is always the one published on this page, and the date it was last updated is shown at the top of the document.",
          ],
          bullets: [],
          footnote: "",
        },
      ],
      cookieCrossLink: {
        text: "The details of the cookies this site sets — what they are, who sets them and how long they last — are in a separate document.",
        cta: "Read the cookie policy",
      },
    },

    cookies: {
      eyebrow: "Legal",
      title: "Cookie policy",
      lead: "Which cookies this site sets, who sets them, what they are for and how to control them from your browser.",
      metaTitle: "Cookie policy",
      metaDescription:
        "The full list of cookies used on this website: provider, purpose, duration and category, plus how to control them from your browser.",
      tableCaption: "Cookies and similar technologies used on this site",
      tableHeadings: ["Name", "Provider", "Purpose", "Duration", "Category"],
      rows: [
        {
          name: "__client_uat, __client_uat_<suffix>",
          provider: "Clerk, Inc.",
          purpose:
            "Indicates whether an authenticated session is active. Used by the site's private administration area.",
          duration: "1 year",
          category: "Strictly necessary",
        },
        {
          name: "__session",
          provider: "Clerk, Inc.",
          purpose:
            "The session token of a user signed in to the administration area.",
          duration: "7 days",
          category: "Strictly necessary",
        },
        {
          name: "__clerk_db_jwt, __clerk_db_jwt_<suffix>",
          provider: "Clerk, Inc.",
          purpose:
            "Maintains session state in the site's development and staging environments.",
          duration: "1 year",
          category: "Strictly necessary",
        },
        {
          name: "__clerk_environment, clerk_telemetry_throttler (localStorage)",
          provider: "Clerk, Inc.",
          purpose:
            "Stores the authentication service's configuration and rate-limits the technical reports sent back to the provider.",
          duration: "Until manually cleared",
          category: "Strictly necessary",
        },
      ],
      sections: [
        {
          heading: "What cookies are",
          paragraphs: [
            "A cookie is a small text file that a website saves in your browser. On later visits your browser sends it back, which lets the site “remember” certain information. The same rules apply to similar technologies such as localStorage, which stores data directly in the browser without sending it with every request.",
            "In Romania, the setting of cookies is governed by Law no. 506/2004 on the processing of personal data in the electronic communications sector, while the processing of any resulting personal data falls under the GDPR.",
          ],
          bullets: [],
          footnote: "",
        },
      ],
      inventoryHeading: "Which cookies we use",
      inventoryIntro:
        "The table below lists the cookies and similar technologies that may be set in your browser when you visit this site.",
      inventoryNote:
        "All of them are set by our authentication provider, Clerk, whose script is loaded across the whole site, including the public pages, even though the administration area is used only by our internal team. These cookies are not used for advertising and do not build a profile of your browsing behaviour.",
      trailingSections: [
        {
          heading: "Traffic analytics",
          paragraphs: [
            "We use Vercel Web Analytics to understand which pages are visited and where visitors come from. Unlike most analytics tools it sets no cookies and uses no persistent identifiers: visits are aggregated using a temporary hash, recalculated daily, from which neither the IP address nor the visitor's identity can be reconstructed.",
            "For that reason we do not ask for your consent for traffic analytics. The basis for the processing is our legitimate interest in understanding how the site is used, and you may object at any time by writing to our email address.",
          ],
          bullets: [],
          footnote: "",
        },
        {
          heading: "What we do not use",
          paragraphs: [
            "This site uses no advertising, remarketing or cross-site tracking cookies.",
          ],
          bullets: [
            "We embed no social network pixels and use no Google Analytics, Google Ads or Meta Pixel.",
            "We embed no maps, videos or other third-party hosted elements in the site's pages.",
            "We do not sell, rent or otherwise make your browsing data available to third parties.",
          ],
          footnote:
            "The operational site address is a plain link to Google Maps that opens in a new tab. Google receives data about you only if you choose to click that link.",
        },
        {
          heading: "How to control cookies",
          paragraphs: [
            "You can delete cookies that have already been set and block new ones from your browser settings. The steps differ from browser to browser:",
          ],
          bullets: [
            "Google Chrome: Settings → Privacy and security → Third-party cookies and site data.",
            "Mozilla Firefox: Settings → Privacy & Security → Cookies and Site Data.",
            "Safari: Preferences → Privacy → Manage Website Data.",
            "Microsoft Edge: Settings → Cookies and site permissions → Manage and delete cookies.",
          ],
          footnote:
            "Blocking all cookies has no effect whatsoever on reading the public pages of this site. It may, however, prevent signing in to the administration area.",
        },
        {
          heading: "Changes to this policy",
          paragraphs: [
            "We update this page whenever the cookies used on the site change. The date it was last updated is shown at the top of the document.",
          ],
          bullets: [],
          footnote: "",
        },
      ],
      privacyCrossLink: {
        text: "How we process personal data, who we share it with and what rights you have — including the controller's contact details.",
        cta: "Read the privacy policy",
      },
    },
  },

  articles: articlesEn,

  notFound: {
    title: "Page not found",
    body: "The link you followed no longer exists or has been moved.",
    cta: "Back to the homepage",
  },
};
