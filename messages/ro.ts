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
