/**
 * Romanian is the source-of-truth dictionary. Its inferred shape (`Messages`)
 * is what every other locale must satisfy, so a missing or renamed key is a
 * TypeScript error in `en.ts` rather than a runtime `undefined`.
 *
 * `as const` freezes the arrays into tuples, which forces other locales to
 * provide the same number of entries (same stats, same nav items, …).
 */
export const ro = {
  meta: {
    siteName: "Ecoplast Hart",
    titleDefault:
      "Ecoplast Hart — Colectare, sortare și reciclare deșeuri | Hunedoara",
    titleTemplate: "%s | Ecoplast Hart",
    description:
      "Ecoplast Hart SRL este o companie românească de management al deșeurilor, specializată în colectarea, sortarea și reciclarea materialelor nepericuloase și periculoase, cu instalație proprie de procesare a cablurilor și flotă logistică.",
    home: {
      title: "Colectarea, sortarea și reciclarea deșeurilor în România",
      description:
        "Companie de management al deșeurilor din județul Hunedoara: colectare și transport, sortare și balotare, procesarea cablurilor Al/Cu și dotarea partenerilor pentru colectare selectivă la sursă.",
    },
    about: {
      title: "Despre noi",
      description:
        "Ecoplast Hart SRL — companie românească de reciclare înființată în 2004, în județul Hunedoara, cu instalație de procesare a cablurilor, linii de sortare și flotă logistică proprie.",
    },
  },

  nav: {
    home: "Acasă",
    about: "Despre noi",
    contact: "Contact",
  },

  a11y: {
    skipToContent: "Sari la conținutul principal",
    languageSwitcher: "Schimbă limba",
  },

  footer: {
    blurb:
      "Colectarea, sortarea și reciclarea materialelor reciclabile din 2004. Județul Hunedoara, România.",
    contactHeading: "Contact",
    companyHeading: "Companie",
    company: [
      "Ecoplast Hart SRL",
      "CUI 17059959 · J20/1943/2004",
      "CAEN 3832 — materiale reciclabile sortate",
    ],
    rights: "Toate drepturile rezervate.",
  },

  home: {
    hero: {
      kicker: "Ecoplast Hart SRL",
      title:
        "Colectarea, sortarea și reciclarea tuturor tipurilor de deșeuri.",
      subtitle:
        "O companie românească de management al deșeurilor, de tip familial, construită în jurul conformității cu ierarhia europeană a deșeurilor — de la generator, la colector, la valorificare — cu instalație proprie de procesare a cablurilor și flotă logistică.",
      ctaPrimary: "Află despre noi",
      ctaSecondary: "Solicită o colectare",
    },
    stats: [
      { value: "2004", label: "Înființată în județul Hunedoara" },
      { value: "19+", label: "Ani de experiență în reciclare" },
      { value: "13", label: "Fluxuri de deșeuri gestionate" },
      { value: "3", label: "Sisteme de management ISO" },
    ],
    capabilities: {
      heading: "Ce facem",
      intro:
        "Reinvestim profitul în capacitatea de procesare, în logistică și în oameni calificați — un model de creștere autofinanțat, axat pe valorificare reală, nu doar pe colectare.",
      items: [
        {
          title: "Colectare și transport",
          body: "Preluare la punctul dumneavoastră de generare sau la platforma noastră, cu transportul deșeurilor nepericuloase pe tot teritoriul României.",
        },
        {
          title: "Sortare și balotare",
          body: "Instalație de sortare și linii de reciclare, plus echipamente de compactare și balotare pentru carton și plastic.",
        },
        {
          title: "Procesarea cablurilor",
          body: "Instalație dedicată care transformă cablurile din Al/Cu în granule de cupru, granule de aluminiu și fracții de plastic.",
        },
        {
          title: "Dotarea partenerilor la sursă",
          body: "Ne echipăm partenerii clienți cu tocătoare, containere și big bag-uri pentru colectarea selectivă la locul de generare.",
        },
      ],
    },
    waste: {
      heading: "Fluxurile de deșeuri pe care le gestionăm",
      streams: [
        "Plastic (PET, folie, navete, tubulatură)",
        "Hârtie și carton",
        "Lemn",
        "Textile și piele",
        "Metale feroase",
        "Neferoase (Al, Cu, alamă, Pb, Zn)",
        "DEEE",
        "Sticlă",
        "Cauciuc",
        "Baterii și acumulatori",
        "Uleiuri uzate și minerale",
        "Cabluri (conductori Al/Cu)",
      ],
    },
  },

  about: {
    hero: {
      title: "Despre Ecoplast Hart",
      body: "Suntem specializați în colectarea, sortarea și reciclarea deșeurilor nepericuloase și periculoase — nemetalice (carton, hârtie, plastic, cauciuc, sticlă, lemn, textile) și metalice (feroase și neferoase). Operăm o instalație proprie de procesare a cablurilor care produce granule de cupru și aluminiu și fracții de plastic ca materii prime secundare, avem o flotă logistică de camioane și containere și ne echipăm partenerii clienți la fața locului pentru colectare selectivă.",
    },
    how: {
      heading: "Cum lucrăm",
      body: "Ecoplast Hart este poziționată în jurul conformității depline cu politica europeană de management al deșeurilor și cu circuitul generator → colector → valorificare. Creșterea este autofinanțată: profitul este reinvestit continuu în instalații de procesare, parcuri logistice și personal calificat. Derulăm și campanii de conștientizare pentru a schimba mentalitatea publicului în favoarea reciclării.",
    },
    identity: {
      heading: "Identitatea companiei",
      rows: [
        { label: "Denumire legală", value: "Ecoplast Hart SRL (S.C. Ecoplast Hart S.R.L.)" },
        { label: "Înființată", value: "20 decembrie 2004" },
        { label: "Cod fiscal (CUI)", value: "17059959" },
        { label: "Registrul comerțului", value: "J20/1943/2004 (județul Hunedoara)" },
        {
          label: "Activitate principală",
          value: "CAEN 3832 — recuperarea materialelor reciclabile sortate",
        },
        {
          label: "Sediu social",
          value: "B-dul Dacia nr. 2, Bl. E5, ap. 1, Municipiul Hunedoara",
        },
        {
          label: "Punct de lucru",
          value: "Șos. Hunedoarei nr. 13, Sat Cristur, Deva, jud. Hunedoara",
        },
      ],
    },
    certifications: {
      heading: "Certificări",
      items: [
        { code: "ISO 9001:2015", label: "Sistem de management al calității" },
        { code: "ISO 14001:2015", label: "Sistem de management de mediu" },
        { code: "ISO 45001:2018", label: "Sănătate și securitate ocupațională" },
      ],
      note: "Certificări conform declarației companiei.",
    },
  },
} as const;

/**
 * Widen the `as const` literal types back to `string` while preserving object
 * keys and tuple lengths. Other locales are typed as `Messages`, so they must
 * supply every key and match every array length, but are free to use their own
 * strings.
 */
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : { readonly [K in keyof T]: Widen<T[K]> };

export type Messages = Widen<typeof ro>;
