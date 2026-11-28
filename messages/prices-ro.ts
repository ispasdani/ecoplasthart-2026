/**
 * Romanian copy for the scrap-metal prices page (`/preturi-fier-vechi`).
 * Spliced into `messages/ro.ts` under `prices`, so `Messages` enforces 100%
 * shape parity in `messages/prices-en.ts`.
 */
export const pricesRo = {
  eyebrow: "Prețuri fier vechi 2026",
  metaTitle: "Preț fier vechi 2026 — 1 kg fier, fontă, aluminiu, cupru, alamă",
  metaDescription:
    "Află prețul zilei pe kg la fier vechi, fontă, aluminiu, cupru, alamă, cabluri și baterii auto în 2026 la centrul autorizat Ecoplast Hart din Cristur, Deva.",
  title: "Prețuri fier vechi și metale 2026 — cotația zilei (lei/kg)",
  lead: "Cotațiile pe kilogram pentru fier vechi, fontă, aluminiu, cupru, alamă, cabluri electrice și acumulatori se actualizează zilnic în funcție de bursă (LME), sort, curățenie și cantitate. Contactează-ne telefonic sau prin formular pentru prețul exact de astăzi la punctul de lucru din Cristur, Deva.",
  updatedLabel: "Cotații actualizate zilnic · catalog revizuit",
  disclaimerTitle: "De ce sunt ascunse cifrele din tabel? Prețurile se confirmă direct pentru lotul tău",
  disclaimerBody:
    "Piața metalelor reciclabile fluctuează zilnic, iar diferența de preț între sorturi, curățenie și cantitate este semnificativă. Sună-ne sau trimite-ne un mesaj și îți comunicăm pe loc cotația reală de astăzi — fără surprize la cântar.",
  callForQuote: "Sună pentru prețul de azi",
  unlockCta: "Cere prețul",
  unlockAriaPrefix: "Contactează-ne pentru cotația de azi la",
  blurredNote: "Cotație zilnică la cerere",
  tableHeaders: {
    grade: "Sort / categorie material",
    details: "Ce include",
    range: "Preț / kg (cotația zilei)",
  },
  materialPageLink: "Detalii, pregătire și sorturi acceptate",
  categories: {
    ferrous: {
      name: "Fier vechi și fontă",
      shortNav: "Fier vechi & fontă",
      summary:
        "Deșeuri metalice feroase preluate la centrul de colectare din Cristur, Deva sau ridicate cu basculante, containere și macara cu graifăr.",
    },
    aluminium: {
      name: "Aluminiu la fier vechi",
      shortNav: "Aluminiu",
      summary:
        "Profile, jante auto, aluminiu turnat, tablă, sârmă curată, radiatoare și doze de aluminiu — sortate corect pe categorii.",
    },
    copper: {
      name: "Cupru",
      shortNav: "Cupru",
      summary:
        "Cupru lucios (milberry), țevi și bare curate, cupru ars/oxidat și radiatoare din cupru-alamă.",
    },
    brass: {
      name: "Alamă și bronz",
      shortNav: "Alamă",
      summary:
        "Fitinguri sanitare, robineți, vane, piese industriale și șpan curat din alamă.",
    },
    cables: {
      name: "Cabluri electrice (cu izolație)",
      shortNav: "Cabluri",
      summary:
        "Procesate pe instalația noastră proprie de granulare din Cristur, fără intermediari — prețul depinde de randamentul de cupru sau aluminiu.",
    },
    batteries: {
      name: "Acumulatori auto plumb-acid",
      shortNav: "Acumulatori",
      summary:
        "Baterii auto și acumulatori industriali uzați preluați autorizat (cod deșeu 16 06 01*), cu trasabilitate completă.",
    },
  },
  grades: {
    "ferrous-heavy": {
      label: "Fier vechi greu (gros)",
      details: "Grinzi, profile I/U, țevi groase și piese masive (> 6 mm), curate.",
    },
    "cast-iron": {
      label: "Fontă (fier vechi)",
      details: "Calorifere din fontă, blocuri motor golite de ulei, capace și piese turnate.",
    },
    "ferrous-mixed": {
      label: "Fier vechi mediu / amestec",
      details: "Piese feroase combinate din gospodărie, ateliere sau demolări.",
    },
    "ferrous-sheet": {
      label: "Tablă și fier ușor (subțire)",
      details: "Tablă de acoperiș, garduri, rafturi, sârmă și caroserii curățate.",
    },
    "ferrous-turnings": {
      label: "Șpan feros industrial",
      details: "Așchii din strunjire și frezare, colectate în containere de la fabrici.",
    },
    "aluminium-wire": {
      label: "Sârmă / conductori aluminiu curat",
      details: "Conductori decojiți din aluminiu, fără miez din oțel și fără izolație.",
    },
    "aluminium-rims": {
      label: "Jante auto din aluminiu",
      details: "Jante din aliaj curate, fără anvelope, valve sau plumbi de echilibrare.",
    },
    "aluminium-profiles": {
      label: "Profile aluminiu (tâmplărie)",
      details: "Profile extrudate din aluminiu curățate de șuruburi, garnituri și plastic.",
    },
    "aluminium-cast": {
      label: "Aluminiu turnat și tablă curată",
      details: "Carcase, piese turnate și tablă curată fără inserții din fier.",
    },
    "aluminium-radiators": {
      label: "Radiatoare din aluminiu",
      details: "Radiatoare auto sau termice din aluminiu, fără capace de plastic și fier.",
    },
    "aluminium-cans": {
      label: "Doze de aluminiu",
      details: "Doze de băuturi din aluminiu (nemagnetice), uscate și separate de oțel.",
    },
    "copper-milberry": {
      label: "Cupru milberry (lucios)",
      details: "Sârmă și conductori decojiți, strălucitori, fără oxidare, lac sau cositor.",
    },
    "copper-clean": {
      label: "Cupru curat (țevi, bare, tablă)",
      details: "Țevi din instalații, bare și tablă curată fără robineți sau lipituri grele.",
    },
    "copper-burnt": {
      label: "Cupru ars, oxidat sau cositorit",
      details: "Conductori oxidați, emailați, cositoriți și bobinaje din motoare.",
    },
    "copper-radiators": {
      label: "Radiatoare cupru / cupru-alamă",
      details: "Schimbătoare de căldură și radiatoare curate, fără rame din fier.",
    },
    "brass-clean": {
      label: "Alamă curată (galbenă)",
      details: "Fitinguri, racorduri, bare și piese masive fără inserții din fier sau plastic.",
    },
    "brass-mixed": {
      label: "Alamă mixtă (robineți, baterii)",
      details: "Baterii sanitare și vane cu componente minore din oțel sau garnituri.",
    },
    "brass-turnings": {
      label: "Șpan de alamă",
      details: "Așchii CNC/strung curate și uscate, separate de alte metale.",
    },
    "cables-copper-heavy": {
      label: "Cabluri groase din cupru",
      details: "Cabluri de forță (NYY, CYABY etc.) cu randament ridicat de cupru.",
    },
    "cables-copper-light": {
      label: "Cabluri subțiri cupru & cablaje auto",
      details: "Instalații casnice, cablaje auto, cabluri UTP și cordoane electrice.",
    },
    "cables-aluminium": {
      label: "Cabluri izolate din aluminiu",
      details: "Cabluri aeriene sau subterane cu conductor din aluminiu.",
    },
    "lead-batteries-auto": {
      label: "Baterii auto / acumulatori plumb-acid",
      details: "Acumulatori uzați întregi, nedeteriorați, preluați conform normelor de mediu.",
    },
  },
  infoCards: [
    {
      heading: "Cum obții cel mai bun preț pe kg",
      body: "Separă fierul vechi de metalele neferoase (aluminiu, cupru, alamă) și scoate șuruburile din fier, plasticul sau cauciucul. Un lot amestecat se încadrează de regulă la sortul inferior.",
    },
    {
      heading: "Rețineri legale la persoane fizice",
      body: "La vânzarea deșeurilor metalice de către persoane fizice cu cartea de identitate, centrul autorizat reține și virează la sursă contribuția la Fondul de Mediu (2%) și impozitul pe venit (10%) aplicabil conform Codului Fiscal.",
    },
    {
      heading: "Oferte B2B pentru firme și cantități mari",
      body: "Pentru fabrici, ateliere și șantiere de demolări, stabilim prețuri negociate pe tonă, facturare cu taxare inversă, containere dedicate și transport cu flota proprie în Hunedoara și toată România.",
    },
  ],
  guidesHeading: "Ghiduri utile despre prețuri și predare",
  documentsLinkLabel: "Ce acte îți trebuie ca să vinzi fier vechi (persoane fizice și firme)",
  howPricesWorkLinkLabel: "Cum se stabilește, de fapt, prețul la fier vechi și metale",
  guide: {
    eyebrow: "Ghid prețuri fier vechi",
    heading: "Cum se formează prețul la fier vechi azi și cum obții mai mult pe kg",
    lead: "Prețul pe care îl primești la centrul de colectare nu este întâmplător. Depinde de piața internațională a metalelor, de sortul materialului, de cât de curat este și de cantitate. Iată cum funcționează, ca să știi la ce să te aștepți înainte să pleci de acasă.",
    sections: [
      {
        heading: "Ce influențează prețul fierului vechi astăzi",
        body: [
          "Fierul vechi este materie primă pentru oțelării și turnătorii, așa că prețul lui urmează cererea de oțel. Când construcțiile și industria merg bine, oțelăriile cumpără mai mult și prețul crește. Când cererea scade, scade și prețul pe kilogram la centrele de colectare.",
          "Metalele neferoase (cupru, aluminiu, alamă, plumb) se raportează zilnic la cotațiile Bursei de Metale de la Londra (LME). De aceea prețul cuprului sau al aluminiului se poate schimba de la o zi la alta, chiar și când prețul fierului rămâne stabil.",
        ],
        points: [
          "Cererea oțelăriilor și a turnătoriilor din România și din regiune",
          "Cotațiile LME pentru cupru, aluminiu, plumb, zinc și nichel",
          "Cursul de schimb leu/euro și leu/dolar",
          "Costurile cu energia și transportul până la topitorie",
          "Sezonul: cererea crește de obicei odată cu sezonul de construcții",
        ],
      },
      {
        heading: "De ce diferă atât de mult prețul între sorturi",
        body: [
          "La feroase, fierul greu și fonta curată primesc cele mai bune cotații, pentru că se topesc cu pierderi mici. Tabla subțire și fierul ușor au prețul cel mai mic: ruginesc mai repede, ocupă volum mare și au randament mai slab la topire.",
          "La neferoase diferențele sunt și mai mari. Cuprul lucios (milberry) valorează vizibil mai mult decât cuprul ars sau cositorit, iar alama curată mai mult decât robineții cu piese din fier. La cabluri, prețul depinde de câtă metal conține cablul față de izolație. Un cablu gros de forță are randament mult mai mare decât un cablaj auto subțire.",
        ],
        points: [],
      },
      {
        heading: "Cum calculezi cât primești pe fier vechi",
        body: [
          "Formula este simplă: greutatea netă a fiecărui sort, înmulțită cu prețul pe kilogram al sortului respectiv. Greutatea netă este diferența dintre cântărirea vehiculului plin la intrare și cântărirea vehiculului gol la ieșire.",
          "Pentru persoane fizice, din suma rezultată centrul reține la sursă contribuția la Fondul pentru Mediu și impozitul pe venit, conform legii. Pentru firme, plata se face pe factură, de regulă cu taxare inversă a TVA. De aceea, când compari oferte, întreabă întotdeauna dacă prețul spus la telefon este înainte sau după rețineri.",
        ],
        points: [],
      },
      {
        heading: "Cum obții un preț mai bun pe kilogram",
        body: [
          "Cea mai mare diferență de bani o face sortarea, nu negocierea. Câteva lucruri simple îți cresc valoarea lotului:",
        ],
        points: [
          "Separă metalele neferoase (aluminiu, cupru, alamă, inox) de fier. Folosește un magnet: ce nu se prinde valorează de obicei mult mai mult.",
          "Separă fierul greu de tablă și fonta de restul fierului.",
          "Scoate plasticul, lemnul, cauciucul, garniturile și șuruburile din fier din piesele neferoase.",
          "Golește piesele auto și utilajele de ulei, combustibil și antigel.",
          "Adu cantități mai mari o dată, nu multe drumuri mici. Pentru loturi mari, prețul se poate negocia.",
          "Sună înainte pentru cotația zilei, mai ales la cupru și aluminiu, unde prețul se mișcă zilnic.",
        ],
      },
      {
        heading: "Prețuri pentru firme și cantități mari",
        body: [
          "Pentru fabrici, ateliere mecanice, firme de construcții și demolări sau dezafectări industriale, lucrăm cu prețuri negociate pe tonă, în funcție de sort, volum și frecvența ridicărilor. Punem la dispoziție containere dedicate, transport cu flota proprie și documentele complete de trasabilitate și valorificare.",
          "Trimite-ne prin formularul de contact tipul de material, cantitatea estimată și locația, iar noi îți răspundem cu o ofertă concretă.",
        ],
        points: [],
      },
    ],
  },
  faqHeading: "Întrebări frecvente despre prețul la fier vechi în 2026",
  faq: [
    {
      question: "Cât este 1 kg de fier vechi în 2026?",
      answer:
        "Prețul pe kilogram la fier vechi se modifică frecvent în funcție de cererea combinatelor și diferă clar între categorii: fierul greu (gros, peste 6 mm) și fonta curată primesc cele mai bune cotații, urmate de fierul mediu și de tabla subțire. Pentru cotația exactă de astăzi sau o ofertă pe cantitate, sună-ne la +40 740 072 256 sau completează formularul de contact.",
    },
    {
      question: "Care este prețul pentru 1 kg de fontă la fier vechi?",
      answer:
        "Fonta curată (calorifere din fontă, piese turnate, blocuri motor golite complet de ulei) se încadrează în categoria superioară a deșeurilor feroase, la nivel apropiat de fierul greu. Sună-ne înainte de vizită ca să îți confirmăm prețul zilei pentru cantitatea ta.",
    },
    {
      question: "Cât este 1 kg de aluminiu la fier vechi în 2026?",
      answer:
        "Prețul aluminiului la fier vechi depinde foarte mult de sort și curățenie: sârma curată din aluminiu și jantele auto fără anvelope au cele mai mari cotații, urmate de profilele de tâmplărie curate, aluminiul turnat, radiatoarele și dozele de aluminiu. Contactează-ne pentru cotația exactă de azi pe fiecare sort.",
    },
    {
      question: "Cât costă 1 kg de alamă și 1 kg de cupru la centrul de colectare?",
      answer:
        "Cuprul și alama urmăresc zilnic cotațiile bursei metalelor (LME). Cuprul lucios (milberry) și cuprul curat, respectiv alama galbenă curată (fără fier sau garnituri), obțin cele mai bune prețuri pe kg. Ne poți suna la +40 740 072 256 pentru cotația actualizată din ziua predării.",
    },
    {
      question: "Cum se face cântărirea și plata la centrul de colectare fier vechi?",
      answer:
        "Toate materialele se cântăresc în fața ta pe cântare verificate metrologic, cu bon de cântar care arată brutul, tara și greutatea netă. Pentru persoane fizice se emite borderou de achiziție pe baza cărții de identitate, iar pentru companii se lucrează pe bază de factură și documente de trasabilitate.",
    },
    {
      question: "Unde pot preda fier vechi și care este programul centrului Ecoplast Hart?",
      answer:
        "Punctul nostru de lucru este situat pe Șos. Hunedoarei nr. 13, Sat Cristur, Deva (între Deva și Hunedoara). Programul este Luni–Vineri 08:00–17:00 și Sâmbătă 08:00–13:00. Pentru loturi comerciale și industriale, organizăm ridicare directă cu flota proprie.",
    },
    {
      question: "Care este prețul la fier vechi azi?",
      answer:
        "Prețul de azi depinde de sort: fierul greu și fonta au cea mai bună cotație dintre feroase, iar tabla și fierul ușor pe cea mai mică. Pentru metalele neferoase, cotația se actualizează zilnic după bursa LME. Sună-ne la +40 740 072 256 și îți spunem pe loc prețul de azi pentru materialul și cantitatea ta.",
    },
    {
      question: "De ce prețul primit la centru este mai mic decât cotația LME?",
      answer:
        "Cotația LME este prețul metalului pur, livrat în cantități mari, la standard de bursă. Fierul vechi și deșeurile neferoase trebuie sortate, transportate, uneori procesate (de exemplu cablurile, care trebuie granulate) și livrate la topitorie, iar materialul are impurități. Prețul de la centrul de colectare ține cont de aceste costuri și de randamentul real al materialului.",
    },
    {
      question: "Prețul este același pentru o cantitate mică și pentru câteva tone?",
      answer:
        "Prețul de bază pe kg este stabilit după sort și curățenie. Pentru cantități mari, livrate constant sau ridicate de la firme, putem negocia un preț pe tonă și putem include transportul și containerele. Spune-ne cantitatea estimată și îți facem o ofertă.",
    },
  ],
  crossLink: {
    eyebrow: "Cotațiile zilei 2026",
    title: "Află prețul zilei pe kg la fier vechi și metale",
    description:
      "Vezi toate sorturile acceptate (fier greu, fontă, tablă, aluminiu, cupru, alamă, cabluri, acumulatori) și cere cotația exactă de azi.",
    cta: "Vezi cotațiile zilei",
    rangePrefix: "Preț / kg",
  },
} as const;
