/**
 * Romanian is the source-of-truth dictionary. Its inferred shape (`Messages`)
 * is what every other locale must satisfy, so a missing or renamed key is a
 * TypeScript error in `en.ts` rather than a runtime `undefined`.
 *
 * `as const` freezes the arrays into tuples, which forces other locales to
 * provide the same number of entries (same stats, same nav items, …).
 *
 * Content is grounded in `knowledge/ecoplast-hart-knowledge-graph.md`.
 */
export const ro = {
  meta: {
    siteName: "Ecoplast Hart",
    titleDefault:
      "Ecoplast Hart — Colectare, sortare și reciclare deșeuri | Deva, Hunedoara",
    titleTemplate: "%s | Ecoplast Hart",
    description:
      "Ecoplast Hart SRL colectează, sortează și reciclează deșeuri nepericuloase și periculoase în județul Hunedoara și în toată România. Instalație proprie de procesare cabluri, flotă de containere și trasabilitate completă a documentelor.",
    // Per-page titles. These are plain strings so the parent layout's
    // `%s | Ecoplast Hart` template appends the brand exactly once.
    home: {
      title: "Colectare, sortare și reciclare deșeuri — Deva, Hunedoara",
      description:
        "Colectăm, sortăm și reciclăm deșeuri pentru companii din toată România: fier vechi, plastic, carton, cabluri Al/Cu, uleiuri uzate și DEEE. Containere la sursă și documente complete.",
    },
    about: {
      title: "Despre noi — companie de reciclare din 2004",
      description:
        "Ecoplast Hart SRL, companie românească de reciclare înființată în 2004 în județul Hunedoara: instalație de procesare cabluri, stație de sortare și flotă logistică proprie.",
    },
    services: {
      title: "Servicii de colectare și reciclare deșeuri",
      description:
        "Colectare deșeuri, valorificare și reciclare, fier vechi, procesare cabluri, deșeuri periculoase și transport cu containere. Servicii pentru companii în toată România.",
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
      "Șos. Hunedoarei nr. 13, Sat Cristur, Deva, jud. Hunedoara",
    addressLegal:
      "B-dul Dacia nr. 2, Bl. E5, ap. 1, Municipiul Hunedoara, jud. Hunedoara",
    cui: "17059959",
    tradeRegister: "J20/1943/2004",
    caen: "CAEN 3832",
    foundedYear: "2004",
  },

  nav: {
    home: "Acasă",
    about: "Despre noi",
    services: "Servicii",
    servicesOverview: "Toate serviciile",
    servicesOverviewDesc:
      "Vezi întreaga gamă de servicii de management al deșeurilor.",
    certifications: "Certificări",
    contact: "Contact",
    privacy: "Politica de confidențialitate",
    cookies: "Politica de cookie-uri",
    cta: "Solicită o ofertă",
    openMenu: "Deschide meniul",
    closeMenu: "Închide meniul",
  },

  common: {
    learnMore: "Află mai multe",
    viewAll: "Vezi toate",
    seeAllServices: "Vezi toate serviciile",
    requestQuote: "Solicită o ofertă",
    requestCollection: "Solicită o colectare",
    contactUs: "Contactează-ne",
    callUs: "Sună-ne",
    sendEmail: "Trimite un e-mail",
    backToServices: "Înapoi la servicii",
    acceptedMaterials: "Materiale acceptate",
    howItWorks: "Cum funcționează",
    downloadFile: "Descarcă",
    viewDocument: "Vezi documentul",
    relatedServices: "Servicii conexe",
  },

  a11y: {
    skipToContent: "Sari la conținutul principal",
    languageSwitcher: "Schimbă limba",
    breadcrumb: "Navigare structurală",
    previous: "Anterior",
    next: "Următor",
  },

  footer: {
    blurb:
      "Colectarea, sortarea și reciclarea materialelor reciclabile din 2004. Un partener autorizat pentru gestionarea responsabilă a deșeurilor în județul Hunedoara și în toată România.",
    servicesHeading: "Servicii",
    companyHeading: "Companie",
    contactHeading: "Contact",
    legalHeading: "Date firmă",
    rights: "Toate drepturile rezervate.",
    officeLabel: "Punct de lucru",
    legalSeatLabel: "Sediu social",
    legalLinksLabel: "Documente legale",
  },

  home: {
    hero: {
      eyebrow: "Ecoplast Hart SRL · Din 2004",
      title: "Deșeurile tale, gestionate responsabil.",
      subtitle:
        "Colectăm, sortăm și reciclăm deșeuri nepericuloase și periculoase pentru companii din toată România — cu documentație completă, transport propriu și valorificare reală, nu doar colectare.",
      ctaPrimary: "Solicită o ofertă",
      ctaSecondary: "Vezi serviciile",
      imageCaption: "Punct de lucru Cristur, Deva",
    },
    stats: [
      { value: "2004", label: "Anul înființării" },
      { value: "20+", label: "Ani de experiență" },
      { value: "13", label: "Fluxuri de deșeuri" },
      { value: "3", label: "Sisteme ISO" },
    ],
    why: {
      eyebrow: "De ce noi",
      heading: "Un partener stabil pentru deșeurile companiei tale",
      intro:
        "Fie că vrei să eficientizezi colectarea la punctul de lucru, să reduci costurile de eliminare sau să pui la punct documentația de mediu, lucrăm cu tine până la rezultat.",
      items: [
        {
          title: "Acoperire națională",
          body: "Transportăm deșeuri nepericuloase pe tot teritoriul României, cu flotă și containere proprii.",
        },
        {
          title: "Soluții personalizate",
          body: "Nu credem în soluții universale. Dimensionăm fluxul, containerele și frecvența pe specificul tău.",
        },
        {
          title: "Conformitate completă",
          body: "Lucrăm în conformitate cu legislația de mediu și ierarhia europeană a deșeurilor: generator → colector → valorificare.",
        },
        {
          title: "Valorificare reală",
          body: "Reinvestim continuu în capacitatea de procesare, ca materialul preluat să ajungă efectiv materie primă secundară.",
        },
      ],
    },
    services: {
      eyebrow: "Servicii",
      heading: "Soluții complete de management al deșeurilor",
      intro:
        "De la o singură colectare punctuală până la un contract-cadru cu raportare lunară — acoperim întreg circuitul.",
    },
    industries: {
      eyebrow: "Industrii deservite",
      heading: "Soluții adaptate fiecărui tip de activitate",
      intro:
        "Fiecare industrie generează alt mix de deșeuri și are alte obligații de raportare. De aceea construim soluția pornind de la ce produci, nu de la ce avem noi în ofertă.",
      items: [
        {
          title: "Industrie & producție",
          body: "Preluăm constant deșeurile tehnologice, ambalajele și rebuturile din liniile de producție.",
        },
        {
          title: "Construcții & demolări",
          body: "Containere la șantier pentru metal, lemn, plastic și moloz reciclabil, cu ridicare programată.",
        },
        {
          title: "Retail & distribuție",
          body: "Carton și folie balotate la sursă, cu ridicare rapidă și evidență clară pe fiecare punct de lucru.",
        },
        {
          title: "Energie & utilități",
          body: "Cabluri Al/Cu, echipamente scoase din uz și transformatoare — procesate în instalația proprie.",
        },
        {
          title: "Auto & service",
          body: "Uleiuri uzate, baterii și acumulatori, piese metalice și cablaje auto, preluate cu documente.",
        },
        {
          title: "Instituții publice",
          body: "Contracte de colectare selectivă pentru primării, școli și instituții, cu raportare periodică.",
        },
      ],
    },
    capabilities: {
      eyebrow: "Capabilități",
      heading: "Infrastructură proprie, de la colectare la materia primă",
      intro:
        "Nu subcontractăm miezul operațiunii. Instalațiile, containerele și camioanele sunt ale noastre.",
      items: [
        {
          title: "Stație de sortare",
          body: "Linii de sortare și echipamente dedicate pe fluxuri, pentru separarea corectă a materialelor.",
        },
        {
          title: "Compactare și balotare",
          body: "Prese pentru carton și plastic, care reduc volumul și cresc valoarea materialului.",
        },
        {
          title: "Procesare cabluri",
          body: "Instalație care transformă cablurile Al/Cu în granule de cupru, aluminiu și fracții de plastic.",
        },
        {
          title: "Flotă logistică",
          body: "Camioane Abrollkipper, basculante de mic și mare tonaj, containere și macara cu graifăr.",
        },
      ],
    },
    streams: {
      eyebrow: "Fluxuri de deșeuri",
      heading: "Ce preluăm",
      intro:
        "Nepericuloase și periculoase, metalice și nemetalice. Dacă nu găsești fluxul tău în listă, întreabă-ne.",
      items: [
        "Plastic (PET, folie, navete, tubulatură)",
        "Hârtie și carton",
        "Lemn",
        "Textile și piele",
        "Metale feroase (fier vechi)",
        "Neferoase (Al, Cu, alamă, Pb, Ni, Zn)",
        "DEEE — echipamente electrice",
        "Sticlă",
        "Cauciuc",
        "Baterii și acumulatori",
        "Uleiuri uzate și minerale",
        "Cabluri (conductori Al/Cu)",
        "Deșeuri periculoase",
      ],
    },
    process: {
      eyebrow: "Cum lucrăm",
      heading: "Cinci pași de la primul telefon la raportul final",
      intro:
        "Un proces previzibil, cu documente complete la fiecare ridicare.",
      steps: [
        {
          title: "Evaluare",
          body: "Analizăm tipul și volumul de deșeu generat și stabilim împreună fluxul potrivit.",
        },
        {
          title: "Dotare",
          body: "Livrăm containerele, big bag-urile sau presele necesare colectării selective la sursă.",
        },
        {
          title: "Colectare",
          body: "Ridicăm la frecvența agreată, cu transport propriu și cântărire la recepție.",
        },
        {
          title: "Valorificare & raportare",
          body: "Sortăm, procesăm și îți predăm documentele de trasabilitate necesare raportării de mediu.",
        },
        {
          title: "Finalizare",
          body: "Închidem ciclul: confirmăm cantitățile valorificate, arhivăm documentele și ajustăm fluxul pentru ridicarea următoare.",
        },
      ],
    },
    certifications: {
      eyebrow: "Certificări",
      heading: "Documente și autorizații, la vedere",
      intro:
        "Publicăm autorizațiile și certificatele noastre pentru ca departamentul tău de mediu să le poată descărca direct.",
      cta: "Vezi documentele",
    },
    cta: {
      heading: "Spune-ne ce deșeu generezi",
      body: "Îți răspundem cu o soluție concretă: ce containere sunt necesare, la ce frecvență ridicăm și ce documente primești.",
      primary: "Solicită o ofertă",
      secondary: "Sună-ne acum",
    },
  },

  about: {
    eyebrow: "Despre noi",
    hero: {
      title: "Douăzeci de ani de reciclare, construiți pas cu pas",
      lead: "Ecoplast Hart SRL este o companie românească de familie, înființată în 2004 în județul Hunedoara. Ne-am specializat în colectarea, sortarea și reciclarea deșeurilor nepericuloase și periculoase — nemetalice (carton, hârtie, plastic, cauciuc, sticlă, lemn, textile) și metalice (feroase și neferoase).",
    },
    story: {
      heading: "O creștere autofinanțată",
      body: "Nu am crescut prin fuziuni sau capital extern, ci reinvestind profitul, an de an, în instalații de procesare, parcuri logistice și oameni calificați. Astăzi operăm o instalație proprie de procesare a cablurilor, care produce granule de cupru și aluminiu și fracții de plastic ca materii prime secundare, și o flotă de camioane și containere care acoperă întreg teritoriul României.",
    },
    approach: {
      heading: "Conformitate, nu doar colectare",
      body: "Ne poziționăm în jurul conformității depline cu politica europeană de management al deșeurilor și cu circuitul generator → colector → valorificare. Pentru clienții noștri asta înseamnă un lucru simplu: fiecare kilogram preluat are documente, iar materialul chiar ajunge să fie reciclat. Derulăm și campanii de conștientizare pentru a schimba mentalitatea publicului în favoarea reciclării.",
    },
    values: {
      eyebrow: "Valorile noastre",
      heading: "Ce ne ghidează",
      items: [
        {
          title: "Trasabilitate",
          body: "Fiecare transport are documentele lui. Fără excepții și fără scurtături.",
        },
        {
          title: "Responsabilitate de mediu",
          body: "Obiectivul este valorificarea reală a materialului, nu mutarea problemei mai departe.",
        },
        {
          title: "Relații pe termen lung",
          body: "Majoritatea clienților noștri lucrează cu noi de ani buni. Asta e măsura care contează.",
        },
      ],
    },
    identity: {
      heading: "Identitatea companiei",
      rows: [
        {
          label: "Denumire legală",
          value: "Ecoplast Hart SRL (S.C. Ecoplast Hart S.R.L.)",
        },
        { label: "Înființată", value: "20 decembrie 2004" },
        { label: "Cod fiscal (CUI)", value: "17059959" },
        {
          label: "Registrul comerțului",
          value: "J20/1943/2004 (județul Hunedoara)",
        },
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
        {
          code: "ISO 45001:2018",
          label: "Sănătate și securitate ocupațională",
        },
      ],
      note: "Certificări conform declarației companiei. Documentele scanate sunt disponibile în secțiunea Certificări.",
    },
  },

  services: {
    eyebrow: "Servicii",
    index: {
      title: "Servicii de management al deșeurilor",
      lead: "Acoperim întreg circuitul, de la containerul de la poarta ta până la materia primă secundară livrată către reciclatori. Alege serviciul care te interesează sau spune-ne ce deșeu generezi și îți propunem noi soluția.",
    },
    items: {
      "waste-collection": {
        name: "Colectare deșeuri",
        navDesc: "Ridicare programată de la punctul tău de lucru.",
        title: "Colectare deșeuri pentru companii",
        lead: "Preluăm deșeurile direct de la punctul tău de generare sau la platforma noastră din Cristur, la o frecvență stabilită împreună. Îți punem la dispoziție containerele și big bag-urile necesare colectării selective la sursă.",
        highlights: [
          {
            title: "Containere la sursă",
            body: "Livrăm containere dimensionate pe volumul real, plus big bag-uri și tocătoare pentru reducerea volumului.",
          },
          {
            title: "Ridicare programată",
            body: "Stabilim un calendar fix sau ridicăm la cerere, în funcție de ritmul tău de producție.",
          },
          {
            title: "Documente la fiecare transport",
            body: "Primești formularele de încărcare-descărcare și evidența cantităților pentru raportarea de mediu.",
          },
        ],
        accepted: [
          "Hârtie și carton",
          "Plastic și folie",
          "Lemn",
          "Metale feroase și neferoase",
          "Sticlă",
          "Textile",
        ],
        metaTitle: "Colectare deșeuri industriale — companii",
        metaDescription:
          "Colectare deșeuri pentru companii în Hunedoara și toată România: containere la sursă, ridicare programată și documente complete de trasabilitate. Ecoplast Hart SRL.",
      },
      "recycling-recovery": {
        name: "Valorificare și reciclare",
        navDesc: "Sortare, balotare și transformare în materie primă.",
        title: "Valorificarea și reciclarea deșeurilor",
        lead: "Materialul preluat intră în stația noastră de sortare, unde este separat pe fracții, compactat și balotat. Rezultatul pleacă mai departe către reciclatori ca materie primă secundară — asta înseamnă valorificare reală, nu depozitare.",
        highlights: [
          {
            title: "Stație de sortare",
            body: "Linii de sortare cu echipamente dedicate pe fluxuri, pentru o separare curată a fracțiilor.",
          },
          {
            title: "Compactare și balotare",
            body: "Prese pentru carton și plastic care reduc volumul și cresc valoarea de piață a materialului.",
          },
          {
            title: "Circuit conform",
            body: "Respectăm ierarhia europeană a deșeurilor pe traseul generator → colector → valorificare.",
          },
        ],
        accepted: [
          "Carton și hârtie",
          "PET și folie",
          "Navete și tubulatură din plastic",
          "Lemn",
          "Cauciuc",
          "Textile și piele",
        ],
        metaTitle: "Valorificare și reciclare deșeuri",
        metaDescription:
          "Sortare, compactare și balotare deșeuri reciclabile în stația proprie din Cristur, Deva. Materialul devine materie primă secundară. Ecoplast Hart SRL.",
      },
      "metal-waste": {
        name: "Deșeuri metalice & fier vechi",
        navDesc: "Feroase și neferoase, cântărite și plătite corect.",
        title: "Colectare fier vechi și deșeuri metalice",
        lead: "Preluăm deșeuri metalice feroase și neferoase, de la fier vechi și tablă până la aluminiu, cupru, alamă, plumb, nichel și zinc. Cântărim la recepție, în fața ta, și emiți documentele pe loc.",
        highlights: [
          {
            title: "Feroase",
            body: "Fier vechi, tablă, fontă, profile și structuri metalice, preluate inclusiv cu macara cu graifăr.",
          },
          {
            title: "Neferoase",
            body: "Aluminiu, cupru, alamă, plumb, nichel, zinc, precum și aliaje mixte.",
          },
          {
            title: "Cântărire transparentă",
            body: "Cântar verificat metrologic la punctul de lucru și bon de cântar pentru fiecare recepție.",
          },
        ],
        accepted: [
          "Fier vechi și tablă",
          "Fontă și oțel",
          "Aluminiu (profile, doze, tablă)",
          "Cupru și alamă",
          "Plumb, nichel, zinc",
          "Aliaje mixte",
        ],
        metaTitle: "Colectare fier vechi și deșeuri metalice — Hunedoara",
        metaDescription:
          "Centru autorizat de colectare fier vechi, metale feroase și neferoase (aluminiu, cupru, alamă, plumb, zinc) în Cristur, Deva, județul Hunedoara. Cântărire transparentă.",
      },
      "cable-processing": {
        name: "Procesare cabluri",
        navDesc: "Cabluri Al/Cu transformate în granule.",
        title: "Procesarea și reciclarea cablurilor",
        lead: "Operăm o instalație dedicată care recuperează conductorii din cabluri de aluminiu și cupru — aeriene, subterane, auto sau din electronice. Rezultatul: granule de cupru, granule de aluminiu și fracții de plastic, toate reintroduse în circuitul industrial.",
        highlights: [
          {
            title: "Instalație proprie",
            body: "Procesarea se face integral la punctul nostru de lucru, fără intermediari.",
          },
          {
            title: "Granule de Cu și Al",
            body: "Conductorii sunt separați și granulați la puritate ridicată, gata pentru turnătorii.",
          },
          {
            title: "Fracția de plastic recuperată",
            body: "Izolația nu ajunge la groapă: este separată și valorificată ca fracție de plastic.",
          },
        ],
        accepted: [
          "Cabluri electrice aeriene",
          "Cabluri subterane",
          "Cablaje auto",
          "Cabluri din electronice",
          "Conductori din aluminiu",
          "Conductori din cupru",
        ],
        metaTitle: "Procesare și reciclare cabluri Al/Cu",
        metaDescription:
          "Instalație proprie de procesare a cablurilor de aluminiu și cupru: granule de cupru, granule de aluminiu și fracții de plastic ca materii prime secundare. Ecoplast Hart SRL.",
      },
      "hazardous-waste": {
        name: "Deșeuri periculoase",
        navDesc: "Uleiuri uzate, baterii, acumulatori și DEEE.",
        title: "Deșeuri periculoase și DEEE",
        lead: "Suntem autorizați pentru colectarea și stocarea deșeurilor periculoase: uleiuri uzate și minerale, șlamuri petroliere, baterii și acumulatori uzați, precum și echipamente electrice și electronice scoase din uz.",
        highlights: [
          {
            title: "Uleiuri uzate",
            body: "Colectare de la service-uri, flote și unități industriale, în recipiente etanșe puse la dispoziție de noi.",
          },
          {
            title: "Baterii și acumulatori",
            body: "Preluăm baterii auto și acumulatori industriali uzați, cu documentele aferente.",
          },
          {
            title: "DEEE",
            body: "Echipamente electrice și electronice scoase din uz, de la frigidere la echipamente IT.",
          },
        ],
        accepted: [
          "Uleiuri uzate și minerale",
          "Șlamuri petroliere",
          "Baterii auto",
          "Acumulatori industriali",
          "DEEE (frigidere, televizoare, IT)",
          "Ambalaje contaminate",
        ],
        metaTitle: "Deșeuri periculoase, uleiuri uzate, baterii și DEEE",
        metaDescription:
          "Colectare autorizată de deșeuri periculoase în județul Hunedoara: uleiuri uzate, șlamuri petroliere, baterii și acumulatori, DEEE. Documentație completă. Ecoplast Hart SRL.",
      },
      logistics: {
        name: "Transport și containere",
        navDesc: "Flotă proprie, containere și macara cu graifăr.",
        title: "Transport deșeuri și închiriere containere",
        lead: "Flota proprie ne permite să ridicăm rapid, oriunde în România. Camioane Abrollkipper, basculante de mic și mare tonaj, containere de diverse capacități și macara cu graifăr pentru materiale voluminoase.",
        highlights: [
          {
            title: "Containere la cerere",
            body: "Punem la dispoziție containere dimensionate pe volumul și tipul de deșeu generat.",
          },
          {
            title: "Transport național",
            body: "Transportăm deșeuri nepericuloase pe tot teritoriul României, cu documentele de însoțire.",
          },
          {
            title: "Manipulare grea",
            body: "Macara cu graifăr pentru încărcarea materialelor voluminoase direct de la sursă.",
          },
        ],
        accepted: [
          "Containere Abrollkipper",
          "Big bag-uri",
          "Basculante mic tonaj",
          "Basculante mare tonaj",
          "Macara cu graifăr",
          "Transport intern România",
        ],
        metaTitle: "Transport deșeuri și închiriere containere",
        metaDescription:
          "Flotă proprie pentru transport deșeuri în toată România: camioane Abrollkipper, basculante, containere de diverse capacități și macara cu graifăr. Ecoplast Hart SRL.",
      },
    },
  },

  certifications: {
    eyebrow: "Certificări",
    title: "Certificări, autorizații și documente",
    lead: "Publicăm aici documentele care atestă că lucrăm autorizat și conform: certificate ISO, autorizații de mediu și alte acte pe care departamentul tău de mediu le poate descărca direct.",
    isoHeading: "Sisteme de management",
    documentsHeading: "Documente disponibile",
    documentsIntro:
      "Fișierele de mai jos sunt încărcate și actualizate de echipa noastră.",
    empty: {
      title: "Niciun document încărcat încă",
      body: "Documentele vor apărea aici imediat ce sunt încărcate. Între timp, ni le poți cere direct pe e-mail.",
    },
    loading: "Se încarcă documentele…",
    categories: {
      iso: "Certificate ISO",
      environment: "Autorizații de mediu",
      permits: "Licențe și avize",
      company: "Documente companie",
      transport: "Transport și trasabilitate",
    },
    uncategorized: "Alte documente",
    metaTitle: "Certificări și autorizații",
    metaDescription:
      "Certificate ISO 9001, ISO 14001 și ISO 45001, autorizații de mediu și documente oficiale Ecoplast Hart SRL, disponibile pentru descărcare.",
  },

  contact: {
    eyebrow: "Contact",
    title: "Hai să vorbim despre deșeurile tale",
    lead: "Spune-ne ce tip de deșeu generezi și în ce cantitate, iar noi îți răspundem cu o propunere concretă: containere necesare, frecvență de ridicare și documentele pe care le primești.",
    channelsHeading: "Cum ne găsești",
    emailLabel: "E-mail",
    phoneLabel: "Telefon",
    officeHeading: "Punct de lucru",
    officeBody:
      "Platforma noastră din Sat Cristur, pe Șoseaua Hunedoarei, între Deva și Hunedoara. Aici se face recepția, cântărirea și procesarea materialelor.",
    legalHeading: "Sediu social",
    hoursHeading: "Program",
    hoursWeekdays: "Luni – Vineri: 08:00 – 17:00",
    hoursSaturday: "Sâmbătă: 08:00 – 13:00",
    hoursSunday: "Duminică: închis",
    directionsCta: "Deschide în Google Maps",
    metaTitle: "Contact",
    metaDescription:
      "Contactează Ecoplast Hart SRL: telefon, e-mail și punctul de lucru din Sat Cristur, Deva, județul Hunedoara. Solicită o ofertă pentru colectarea deșeurilor.",
  },

  /**
   * Legal pages. The content is deliberately specific about which third-party
   * services actually run on this site — a generic template would describe
   * cookies we do not set and omit the ones we do, which is the failure mode
   * ANSPDCP actually sanctions.
   *
   * `updatedDate` is written by hand rather than derived from the build date:
   * a policy that claims to change on every deploy tells the reader nothing.
   * Bump it when the content below changes.
   */
  legal: {
    updatedLabel: "Ultima actualizare",
    updatedDate: "5 septembrie 2026",
    tocHeading: "Cuprins",

    privacy: {
      eyebrow: "Legal",
      title: "Politica de confidențialitate",
      lead: "Cum colectăm, folosim și protejăm datele cu caracter personal atunci când ne contactezi sau navighezi pe acest site.",
      metaTitle: "Politica de confidențialitate",
      metaDescription:
        "Cum prelucrează Ecoplast Hart SRL datele cu caracter personal: ce date colectăm, în ce scopuri și temeiuri legale, cui le divulgăm, cât le păstrăm și care sunt drepturile tale conform GDPR.",
      identityHeading: "Operatorul de date",
      identityLabels: {
        legalName: "Denumire",
        cui: "Cod unic de înregistrare",
        tradeRegister: "Registrul Comerțului",
        addressLegal: "Sediu social",
        addressOperational: "Punct de lucru",
        email: "E-mail",
        phone: "Telefon",
      },
      sections: [
        {
          heading: "Cine suntem",
          paragraphs: [
            "Ecoplast Hart SRL este operatorul datelor cu caracter personal prelucrate prin acest site, în sensul Regulamentului (UE) 2016/679 (GDPR) și al Legii nr. 190/2018. Datele noastre de identificare și de contact sunt cele din tabelul de mai sus.",
            "Nu am desemnat un responsabil cu protecția datelor, întrucât activitatea noastră nu se încadrează în situațiile prevăzute la art. 37 din GDPR. Solicitările privind datele personale sunt tratate direct de conducerea societății, la adresa de e-mail de mai sus.",
          ],
          bullets: [],
          footnote: "",
        },
        {
          heading: "Ce date colectăm",
          paragraphs: [
            "Acest site nu conține formulare și nu îți cere să îți creezi un cont. Datele ajung la noi în două moduri:",
          ],
          bullets: [
            "Date pe care ni le transmiți direct, atunci când ne scrii pe e-mail sau ne suni: nume, adresă de e-mail, număr de telefon, denumirea companiei pe care o reprezinți și orice alte informații pe care alegi să le incluzi în mesaj.",
            "Date tehnice generate automat la vizitarea site-ului: adresa IP, tipul dispozitivului și al browserului, pagina de proveniență, paginile vizitate și momentul accesării. Acestea sunt colectate de infrastructura care găzduiește site-ul și de instrumentul de analiză a traficului.",
          ],
          footnote:
            "Nu colectăm categorii speciale de date (date privind sănătatea, convingerile, apartenența sindicală) și nu solicităm date personale de la minori.",
        },
        {
          heading: "De ce prelucrăm datele și în ce temei",
          paragraphs: [
            "Prelucrăm datele exclusiv pentru scopurile de mai jos, fiecare cu temeiul său legal din art. 6 alin. (1) GDPR:",
          ],
          bullets: [
            "Pentru a răspunde solicitărilor tale și a-ți transmite o ofertă — temei: demersuri precontractuale efectuate la cererea ta, lit. b).",
            "Pentru a derula relația contractuală și a emite documentele de transport și de trasabilitate a deșeurilor — temei: executarea contractului, lit. b).",
            "Pentru a respecta obligațiile fiscale, contabile și de raportare a deșeurilor prevăzute de lege — temei: obligație legală, lit. c).",
            "Pentru a menține site-ul funcțional și sigur și pentru a înțelege, la nivel agregat, cum este folosit — temei: interesul nostru legitim de a opera și îmbunătăți site-ul, lit. f).",
          ],
          footnote:
            "Nu folosim datele tale pentru marketing direct, profilare sau luarea de decizii automate care să producă efecte juridice asupra ta.",
        },
        {
          heading: "Cui divulgăm datele",
          paragraphs: [
            "Nu vindem și nu închiriem date cu caracter personal. Le divulgăm doar furnizorilor care ne ajută să operăm site-ul, în calitate de persoane împuternicite care acționează pe baza instrucțiunilor noastre, precum și autorităților publice atunci când legea ne obligă.",
            "Furnizorii care intervin în funcționarea acestui site sunt:",
          ],
          bullets: [
            "Vercel Inc. — găzduirea site-ului și analiza traficului.",
            "Clerk, Inc. — autentificarea utilizatorilor în zona privată de administrare a site-ului.",
            "Convex, Inc. — stocarea conținutului și a documentelor publicate pe site.",
          ],
          footnote:
            "Acești furnizori sunt stabiliți în Statele Unite ale Americii. Transferurile de date în afara Spațiului Economic European se efectuează pe baza clauzelor contractuale standard adoptate de Comisia Europeană și, după caz, a Cadrului transatlantic privind confidențialitatea datelor (EU–U.S. Data Privacy Framework).",
        },
        {
          heading: "Cât timp păstrăm datele",
          paragraphs: [
            "Păstrăm corespondența comercială pe durata discuțiilor și, dacă acestea se finalizează cu o colaborare, pe durata relației contractuale.",
            "Documentele financiar-contabile și evidențele privind gestiunea deșeurilor sunt păstrate pe termenele impuse de legislația aplicabilă, care în general variază între 3 și 10 ani, în funcție de tipul documentului.",
            "Datele tehnice de trafic și statisticile agregate sunt păstrate cel mult 24 de luni, după care sunt șterse sau anonimizate ireversibil.",
          ],
          bullets: [],
          footnote: "",
        },
        {
          heading: "Drepturile tale",
          paragraphs: [
            "În calitate de persoană vizată, GDPR îți conferă următoarele drepturi în legătură cu datele tale:",
          ],
          bullets: [
            "Dreptul de acces — să afli dacă prelucrăm date despre tine și să primești o copie a acestora.",
            "Dreptul la rectificare — să ceri corectarea datelor inexacte sau completarea celor incomplete.",
            "Dreptul la ștergere — să ceri ștergerea datelor, atunci când nu mai avem un temei pentru a le păstra.",
            "Dreptul la restricționarea prelucrării — să ceri suspendarea prelucrării cât timp verificăm o contestație.",
            "Dreptul la portabilitate — să primești datele într-un format structurat, folosit în mod curent.",
            "Dreptul la opoziție — să te opui prelucrărilor întemeiate pe interesul nostru legitim.",
            "Dreptul de a nu face obiectul unei decizii bazate exclusiv pe prelucrarea automată.",
          ],
          footnote:
            "Îți poți exercita oricare dintre aceste drepturi printr-o cerere transmisă la adresa noastră de e-mail. Îți răspundem în cel mult o lună de la primirea cererii. Dacă răspunsul nostru nu te mulțumește, ai dreptul să depui o plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (B-dul G-ral. Gheorghe Magheru nr. 28-30, Sector 1, București, anspdcp@dataprotection.ro) sau să te adresezi instanței de judecată competente.",
        },
        {
          heading: "Securitatea datelor",
          paragraphs: [
            "Site-ul este servit exclusiv prin conexiune criptată HTTPS, iar accesul la zona de administrare este protejat prin autentificare. Aplicăm măsuri tehnice și organizatorice rezonabile pentru a proteja datele împotriva accesului neautorizat, pierderii sau divulgării accidentale.",
            "Niciun sistem nu este însă complet invulnerabil. Dacă are loc o încălcare a securității datelor care îți poate afecta drepturile, te informăm și notificăm autoritatea de supraveghere în termenele prevăzute de GDPR.",
          ],
          bullets: [],
          footnote: "",
        },
        {
          heading: "Modificări ale acestei politici",
          paragraphs: [
            "Putem actualiza această politică atunci când se schimbă serviciile pe care le folosim sau cerințele legale aplicabile. Versiunea în vigoare este întotdeauna cea publicată pe această pagină, iar data ultimei actualizări este afișată la începutul documentului.",
          ],
          bullets: [],
          footnote: "",
        },
      ],
      cookieCrossLink: {
        text: "Detaliile despre cookie-urile instalate de acest site — ce sunt, cine le pune și cât durează — sunt într-un document separat.",
        cta: "Vezi politica de cookie-uri",
      },
    },

    cookies: {
      eyebrow: "Legal",
      title: "Politica de cookie-uri",
      lead: "Ce cookie-uri instalează acest site, cine le pune, la ce folosesc și cum le poți controla din browser.",
      metaTitle: "Politica de cookie-uri",
      metaDescription:
        "Lista completă a cookie-urilor folosite pe site-ul Ecoplast Hart: furnizor, scop, durată și categorie, plus instrucțiuni pentru a le controla din browser.",
      tableCaption: "Cookie-uri și tehnologii similare folosite pe acest site",
      tableHeadings: ["Nume", "Furnizor", "Scop", "Durată", "Categorie"],
      rows: [
        {
          name: "__client_uat, __client_uat_<sufix>",
          provider: "Clerk, Inc.",
          purpose:
            "Indică dacă există o sesiune autentificată activă. Folosit de zona privată de administrare a site-ului.",
          duration: "1 an",
          category: "Strict necesar",
        },
        {
          name: "__session",
          provider: "Clerk, Inc.",
          purpose:
            "Token-ul de sesiune al utilizatorului autentificat în zona de administrare.",
          duration: "7 zile",
          category: "Strict necesar",
        },
        {
          name: "__clerk_db_jwt, __clerk_db_jwt_<sufix>",
          provider: "Clerk, Inc.",
          purpose:
            "Menține starea sesiunii în mediile de dezvoltare și de testare ale site-ului.",
          duration: "1 an",
          category: "Strict necesar",
        },
        {
          name: "__clerk_environment, clerk_telemetry_throttler (localStorage)",
          provider: "Clerk, Inc.",
          purpose:
            "Stochează configurația serviciului de autentificare și limitează frecvența raportărilor tehnice trimise către furnizor.",
          duration: "Până la ștergerea manuală",
          category: "Strict necesar",
        },
      ],
      sections: [
        {
          heading: "Ce sunt cookie-urile",
          paragraphs: [
            "Un cookie este un fișier text de mici dimensiuni pe care un site îl salvează în browserul tău. La vizitele următoare browserul îl trimite înapoi, iar site-ul poate astfel să „își amintească” anumite informații. Aceleași reguli se aplică tehnologiilor similare, precum localStorage, care stochează date direct în browser fără să le trimită cu fiecare cerere.",
            "În România, instalarea cookie-urilor este reglementată de Legea nr. 506/2004 privind prelucrarea datelor cu caracter personal în sectorul comunicațiilor electronice, iar prelucrarea datelor personale rezultate intră sub incidența GDPR.",
          ],
          bullets: [],
          footnote: "",
        },
      ],
      inventoryHeading: "Ce cookie-uri folosim",
      inventoryIntro:
        "Tabelul de mai jos listează cookie-urile și tehnologiile similare care pot fi instalate în browserul tău atunci când vizitezi acest site.",
      inventoryNote:
        "Toate sunt instalate de furnizorul nostru de autentificare, Clerk, al cărui script este încărcat pe întregul site, inclusiv pe paginile publice, deși zona de administrare este folosită exclusiv de echipa noastră internă. Aceste cookie-uri nu sunt folosite pentru publicitate și nu construiesc un profil al comportamentului tău de navigare.",
      trailingSections: [
        {
          heading: "Analiza traficului",
          paragraphs: [
            "Folosim Vercel Web Analytics pentru a înțelege ce pagini sunt vizitate și de unde vin vizitatorii. Spre deosebire de majoritatea instrumentelor de analiză, acesta nu instalează cookie-uri și nu folosește identificatori persistenți: vizitele sunt agregate pe baza unei valori hash temporare, recalculate zilnic, din care nu se poate reconstitui adresa IP sau identitatea vizitatorului.",
            "Din acest motiv nu îți cerem consimțământul pentru analiza traficului. Temeiul prelucrării este interesul nostru legitim de a înțelege cum este folosit site-ul, iar te poți opune oricând printr-un mesaj la adresa noastră de e-mail.",
          ],
          bullets: [],
          footnote: "",
        },
        {
          heading: "Ce nu folosim",
          paragraphs: [
            "Acest site nu folosește cookie-uri de publicitate, de remarketing sau de urmărire între site-uri.",
          ],
          bullets: [
            "Nu integrăm pixeli de rețele sociale și nu folosim Google Analytics, Google Ads sau Meta Pixel.",
            "Nu încorporăm hărți, clipuri video sau alte elemente găzduite de terți în paginile site-ului.",
            "Nu vindem, nu închiriem și nu punem la dispoziția terților date despre navigarea ta.",
          ],
          footnote:
            "Adresa punctului de lucru este un simplu link către Google Maps, care se deschide într-o filă nouă. Google primește date despre tine doar dacă alegi să dai clic pe acel link.",
        },
        {
          heading: "Cum controlezi cookie-urile",
          paragraphs: [
            "Poți șterge cookie-urile deja instalate și poți bloca instalarea altora noi din setările browserului. Instrucțiunile diferă de la un browser la altul:",
          ],
          bullets: [
            "Google Chrome: Setări → Confidențialitate și securitate → Cookie-uri și alte date ale site-urilor.",
            "Mozilla Firefox: Setări → Confidențialitate și securitate → Cookie-uri și date despre site-uri.",
            "Safari: Preferințe → Confidențialitate → Gestionare date site-uri web.",
            "Microsoft Edge: Setări → Cookie-uri și permisiuni site → Gestionare și ștergere cookie-uri.",
          ],
          footnote:
            "Blocarea tuturor cookie-urilor nu afectează în niciun fel consultarea paginilor publice ale acestui site. Poate însă împiedica autentificarea în zona de administrare.",
        },
        {
          heading: "Modificări ale acestei politici",
          paragraphs: [
            "Actualizăm această pagină ori de câte ori se schimbă cookie-urile folosite pe site. Data ultimei actualizări este afișată la începutul documentului.",
          ],
          bullets: [],
          footnote: "",
        },
      ],
      privacyCrossLink: {
        text: "Cum prelucrăm datele cu caracter personal, cui le divulgăm și ce drepturi ai — inclusiv datele de contact ale operatorului.",
        cta: "Vezi politica de confidențialitate",
      },
    },
  },

  notFound: {
    title: "Pagina nu a fost găsită",
    body: "Linkul pe care l-ai urmat nu mai există sau a fost mutat.",
    cta: "Înapoi la pagina principală",
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
