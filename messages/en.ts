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
      "Ecoplast Hart — Waste Collection, Sorting & Recycling | Romania",
    titleTemplate: "%s | Ecoplast Hart",
    description:
      "Ecoplast Hart SRL is a Romanian waste-management company specialising in the collection, sorting and recycling of non-hazardous and hazardous materials, with its own cable-processing facility and logistics fleet.",
    home: {
      title: "Collection, sorting and recycling of all types of waste",
      description:
        "Waste-management company in Hunedoara county, Romania: collection and transport, sorting and baling, Al/Cu cable processing, and equipping partners for selective collection at source.",
    },
    about: {
      title: "About us",
      description:
        "Ecoplast Hart SRL — a Romanian recycling company founded in 2004, based in Hunedoara county, with a cable-processing facility, sorting lines and its own logistics fleet.",
    },
  },

  nav: {
    home: "Home",
    about: "About us",
    contact: "Contact",
  },

  a11y: {
    skipToContent: "Skip to main content",
    languageSwitcher: "Change language",
  },

  footer: {
    blurb:
      "Collection, sorting and recycling of recyclable materials since 2004. Hunedoara county, Romania.",
    contactHeading: "Contact",
    companyHeading: "Company",
    company: [
      "Ecoplast Hart SRL",
      "CUI 17059959 · J20/1943/2004",
      "CAEN 3832 — sorted recyclable materials",
    ],
    rights: "All rights reserved.",
  },

  home: {
    hero: {
      kicker: "Ecoplast Hart SRL",
      title:
        "Collection, sorting and recycling of all types of waste materials.",
      subtitle:
        "A family-run Romanian waste-management company built around EU waste-hierarchy compliance — from generator to collector to recovery — with its own cable-processing facility and logistics fleet.",
      ctaPrimary: "Learn about us",
      ctaSecondary: "Request a collection",
    },
    stats: [
      { value: "2004", label: "Founded in Hunedoara county" },
      { value: "19+", label: "Years of recycling experience" },
      { value: "13", label: "Waste streams handled" },
      { value: "3", label: "ISO management systems" },
    ],
    capabilities: {
      heading: "What we do",
      intro:
        "We reinvest profit into processing capacity, logistics and qualified people — a self-funded growth model focused on real recovery, not just collection.",
      items: [
        {
          title: "Collection & transport",
          body: "Pickup at your generation site or at our yard, with transport of non-hazardous waste throughout Romania.",
        },
        {
          title: "Sorting & baling",
          body: "Sorting mill and recycling lines, plus compaction and baling facilities for cardboard and plastic.",
        },
        {
          title: "Cable processing",
          body: "A dedicated facility that turns Al/Cu cables into copper granules, aluminium granules and plastic fractions.",
        },
        {
          title: "On-site partner equipping",
          body: "We equip client partners with mills, containers and big bags for selective collection at source.",
        },
      ],
    },
    waste: {
      heading: "Waste streams we handle",
      streams: [
        "Plastic (PET, film, crates, conduit)",
        "Paper & cardboard",
        "Wood",
        "Textile & leather",
        "Ferrous metals",
        "Non-ferrous (Al, Cu, brass, Pb, Zn)",
        "WEEE",
        "Glass",
        "Rubber",
        "Batteries & accumulators",
        "Used & mineral oils",
        "Cables (Al/Cu conductors)",
      ],
    },
  },

  about: {
    hero: {
      title: "About Ecoplast Hart",
      body: "We specialise in the collection, sorting and recycling of non-hazardous and hazardous waste — non-metallic (cardboard, paper, plastic, rubber, glass, wood, textile) and metallic (ferrous and non-ferrous). We run our own cable-processing facility that outputs copper and aluminium granules and plastic fractions as secondary raw materials, operate a truck-and-container logistics fleet, and equip our client partners on-site for selective collection.",
    },
    how: {
      heading: "How we work",
      body: "Ecoplast Hart is positioned around full compliance with EU waste-management policy and the generator → collector → recovery circuit. Growth is self-funded: profit is continuously reinvested into processing facilities, logistics parks and qualified personnel. We also run awareness campaigns to shift public mentality toward recycling.",
    },
    identity: {
      heading: "Company identity",
      rows: [
        { label: "Legal name", value: "Ecoplast Hart SRL (S.C. Ecoplast Hart S.R.L.)" },
        { label: "Founded", value: "20 December 2004" },
        { label: "Fiscal code (CUI)", value: "17059959" },
        { label: "Trade register", value: "J20/1943/2004 (Hunedoara county)" },
        {
          label: "Principal activity",
          value: "CAEN 3832 — recovery of sorted recyclable materials",
        },
        {
          label: "Registered office",
          value: "B-dul Dacia nr. 2, Bl. E5, ap. 1, Municipiul Hunedoara",
        },
        {
          label: "Operational site",
          value: "Șos. Hunedoarei nr. 13, Sat Cristur, Deva, jud. Hunedoara",
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
      note: "Certifications as declared by the company.",
    },
  },
};
