/**
 * Romanian copy for the intent-specific landing pages (`topicKeys`): pickup,
 * city pages, cast-iron radiators, plant dismantling and the metal waste-code
 * reference. Spliced into `messages/ro.ts` under `topics`, so `Messages`
 * enforces shape parity in `messages/topics-en.ts`.
 */
export const topicsRo = {
  labels: {
    callCta: "Sună acum: 0740 072 256",
    faqHeading: "Întrebări frecvente",
    relatedHeading: "Pagini utile",
  },
  wasteCodes: {
    heading: "Coduri de deșeuri metalice din Lista europeană a deșeurilor",
    lead: "Codurile de mai jos sunt cele folosite cel mai des pentru deșeurile metalice. Codurile marcate cu asterisc (*) sunt deșeuri periculoase și au reguli separate de stocare, transport și predare.",
    columns: {
      code: "Cod deșeu",
      name: "Denumire oficială",
      examples: "Exemple uzuale",
    },
    groups: [
      {
        heading: "12 01 — Deșeuri din prelucrarea metalelor",
        rows: [
          {
            code: "12 01 01",
            name: "Pilitură și șpan feros",
            examples: "Șpan de oțel din strunjire, frezare, găurire",
          },
          {
            code: "12 01 02",
            name: "Praf și particule feroase",
            examples: "Particule din polizare și debitare oțel",
          },
          {
            code: "12 01 03",
            name: "Pilitură și șpan neferos",
            examples: "Șpan de aluminiu, alamă, cupru",
          },
          {
            code: "12 01 04",
            name: "Praf și particule neferoase",
            examples: "Particule fine de aluminiu sau alamă",
          },
        ],
      },
      {
        heading: "15 01 și 16 — Ambalaje, vehicule și baterii",
        rows: [
          {
            code: "15 01 04",
            name: "Ambalaje metalice",
            examples: "Doze, butoaie și bidoane metalice golite și curățate",
          },
          {
            code: "16 01 17",
            name: "Metale feroase",
            examples: "Fier rezultat din dezmembrarea vehiculelor scoase din uz",
          },
          {
            code: "16 01 18",
            name: "Metale neferoase",
            examples: "Aluminiu, cupru din dezmembrarea vehiculelor scoase din uz",
          },
          {
            code: "16 06 01*",
            name: "Baterii cu plumb",
            examples: "Acumulatori auto și industriali plumb-acid",
          },
        ],
      },
      {
        heading: "17 04 — Metale din construcții și demolări",
        rows: [
          {
            code: "17 04 01",
            name: "Cupru, bronz, alamă",
            examples: "Țevi de cupru, fitinguri, robineți",
          },
          {
            code: "17 04 02",
            name: "Aluminiu",
            examples: "Tâmplărie, profile, tablă de aluminiu",
          },
          {
            code: "17 04 03",
            name: "Plumb",
            examples: "Țevi și foi de plumb",
          },
          {
            code: "17 04 04",
            name: "Zinc",
            examples: "Tablă și jgheaburi din zinc",
          },
          {
            code: "17 04 05",
            name: "Fier și oțel",
            examples: "Structuri metalice, armături, grinzi, tablă, țevi",
          },
          {
            code: "17 04 06",
            name: "Staniu",
            examples: "Resturi din staniu",
          },
          {
            code: "17 04 07",
            name: "Amestecuri metalice",
            examples: "Metale feroase și neferoase nesortate",
          },
          {
            code: "17 04 09*",
            name: "Deșeuri metalice contaminate cu substanțe periculoase",
            examples: "Metal cu urme de ulei, vopsele sau chimicale periculoase",
          },
          {
            code: "17 04 10*",
            name: "Cabluri cu conținut de ulei, gudron sau alte substanțe periculoase",
            examples: "Cabluri vechi cu izolație impregnată",
          },
          {
            code: "17 04 11",
            name: "Cabluri, altele decât cele specificate la 17 04 10",
            examples: "Cabluri electrice cu izolație din PVC sau cauciuc",
          },
        ],
      },
      {
        heading: "19 și 20 — Tratare mecanică și deșeuri municipale",
        rows: [
          {
            code: "19 10 01",
            name: "Deșeuri de fier și oțel",
            examples: "Fracția feroasă din mărunțirea deșeurilor metalice",
          },
          {
            code: "19 10 02",
            name: "Deșeuri neferoase",
            examples: "Fracția neferoasă din mărunțire",
          },
          {
            code: "19 12 02",
            name: "Metale feroase",
            examples: "Fier separat la sortarea mecanică a deșeurilor",
          },
          {
            code: "19 12 03",
            name: "Metale neferoase",
            examples: "Aluminiu, cupru separate la sortarea mecanică",
          },
          {
            code: "20 01 40",
            name: "Metale",
            examples: "Metale colectate separat din deșeurile municipale",
          },
        ],
      },
    ],
    note: "Tabelul are rol informativ. Codul corect îl stabilește generatorul deșeului, după procesul din care provine deșeul. Înainte de predare, confirmă cu noi că un anumit cod este acoperit de autorizația noastră de mediu.",
  },
  items: {
    "scrap-pickup": {
      name: "Ridicare fier vechi",
      eyebrow: "Ridicare de la adresă",
      title: "Ridicare fier vechi de la domiciliu, curte, hală sau șantier",
      lead: "Ai fier vechi mult sau greu și nu ai cum să îl transporți? Venim noi cu camion cu macara cu graifăr, basculantă sau container, îl încărcăm, îl cântărim pe cântar verificat metrologic și primești actele și banii pentru material.",
      metaTitle: "Ridicare fier vechi de la domiciliu — Deva, Hunedoara, județ",
      metaDescription:
        "Ridicăm fier vechi de la domiciliu, curte, hale și șantiere în Deva, Hunedoara și tot județul: camion cu graifăr, basculante, containere. Sună la 0740 072 256.",
      highlights: [
        {
          title: "Macara cu graifăr",
          body: "Încărcăm direct piesele grele și voluminoase: structuri, utilaje, grămezi de fier vechi. Nu ai nevoie de oameni sau utilaje proprii.",
        },
        {
          title: "Containere la tine",
          body: "Pentru curățenii mai lungi, renovări sau șantiere lăsăm un container Abrollkipper pe care îl încarci în ritmul tău și îl ridicăm când e plin.",
        },
        {
          title: "Cântărire și acte",
          body: "Materialul se cântărește pe cântar verificat metrologic, iar tu primești bonul de cântar și documentele de achiziție.",
        },
      ],
      guide: {
        eyebrow: "Cum funcționează",
        heading: "Ridicarea fierului vechi de la adresă, explicată pe scurt",
        lead: "Mulți oameni amână curățenia în curte, în garaj sau în hală pentru că nu au cum să transporte fierul vechi. Ridicarea de la adresă rezolvă exact asta. Iată când merită, cum decurge și cum te pregătești.",
        sections: [
          {
            heading: "Când merită să chemi ridicarea și când e mai simplu să vii tu",
            body: [
              "Pentru câteva bucăți care încap în portbagaj sau într-o remorcă, cel mai simplu este să le aduci direct la punctul nostru de lucru din Cristur, Deva. Primești banii pe loc și nu plătești transport.",
              "Ridicarea de la adresă merită când ai o cantitate mare, piese grele care nu se pot încărca manual sau un loc din care materialul trebuie scos repede (o casă vândută, o hală care se eliberează, un șantier).",
            ],
            points: [
              "Curățenie de curte, pod, garaj sau anexe gospodărești",
              "Demolări de case, garduri, șoproane și construcții metalice",
              "Renovări cu înlocuirea caloriferelor, țevilor sau acoperișului",
              "Utilaje, mașini agricole și echipamente casate",
              "Hale, ateliere și depozite care se golesc",
              "Resturi metalice de pe șantiere de construcții",
            ],
          },
          {
            heading: "Cum decurge ridicarea, pas cu pas",
            body: [
              "Procesul este simplu și îl stabilim împreună înainte să plece camionul:",
            ],
            points: [
              "Ne suni la 0740 072 256 sau ne scrii prin formularul de contact. Spune-ne ce material ai, cam ce cantitate și adresa.",
              "Dacă e nevoie, ne trimiți câteva fotografii pe e-mail, ca să alegem vehiculul potrivit: camion cu graifăr, basculantă sau container.",
              "Îți comunicăm dinainte costul transportului, ca să știi cât rămâne net din valoarea materialului.",
              "Stabilim ziua ridicării. Echipa noastră încarcă materialul.",
              "Materialul este cântărit pe cântar verificat metrologic și primești bonul de cântar și documentele de achiziție.",
            ],
          },
          {
            heading: "Cum se stabilește costul transportului",
            body: [
              "Costul ridicării depinde de cantitate, de distanța până la punctul nostru de lucru din Cristur, de accesul camionului și de tipul materialului. Un lot mare de fier greu, într-un loc cu acces bun, se încarcă repede și costă proporțional mai puțin decât câteva bucăți răspândite într-o curte greu accesibilă.",
              "Nu există costuri ascunse: îți spunem dinainte cât costă transportul și cum se calculează valoarea materialului, iar la final primești bonul de cântar.",
            ],
            points: [],
          },
          {
            heading: "Cum te pregătești pentru ridicare",
            body: [
              "Câteva lucruri simple scurtează încărcarea și îți cresc valoarea lotului:",
            ],
            points: [
              "Strânge materialul într-un singur loc, cât mai aproape de locul unde poate intra camionul.",
              "Asigură acces pentru un camion: poartă deschisă, fără mașini parcate în cale, teren care suportă greutatea.",
              "Pune separat metalele neferoase (aluminiu, cupru, alamă, cabluri). Valorează mult mai mult decât fierul.",
              "Golește utilajele și piesele auto de ulei, combustibil și antigel.",
              "Electrocasnicele, buteliile și recipientele cu substanțe chimice nu se încarcă împreună cu fierul vechi. Spune-ne dinainte dacă ai așa ceva.",
            ],
          },
          {
            heading: "Unde ridicăm fier vechi",
            body: [
              "Ridicăm fier vechi din tot județul Hunedoara: Deva, Hunedoara, Simeria, Călan, Orăștie, Hațeg, Brad, Petroșani și localitățile din jur. Pentru loturi industriale și contracte cu firme, flota noastră lucrează în toată România.",
            ],
            points: [],
          },
        ],
      },
      faq: [
        {
          question: "Ridicați și cantități mici de fier vechi?",
          answer:
            "Pentru cantități mici, care încap într-o mașină sau o remorcă, este de obicei mai avantajos să le aduci la punctul nostru de lucru din Cristur, Deva. Sună-ne și îți spunem sincer dacă merită ridicarea pentru cantitatea ta.",
        },
        {
          question: "Cât costă ridicarea fierului vechi?",
          answer:
            "Costul depinde de cantitate, distanță, accesul camionului și tipul materialului. Îți comunicăm costul transportului înainte de ridicare, ca să știi exact cât primești net pentru material.",
        },
        {
          question: "Cu ce vehicule veniți?",
          answer:
            "Folosim camioane cu macara cu graifăr pentru piese grele și grămezi de fier, basculante de mic și mare tonaj și camioane Abrollkipper cu containere pe care le putem lăsa la tine pentru încărcare.",
        },
        {
          question: "Trebuie să fiu de față la ridicare?",
          answer:
            "Da, tu sau o persoană împuternicită trebuie să fie prezentă, pentru predarea materialului și pentru documentele de achiziție. Persoanele fizice au nevoie de cartea de identitate.",
        },
        {
          question: "Ridicați fier vechi și din alte județe?",
          answer:
            "Pentru persoane fizice lucrăm în principal în județul Hunedoara. Pentru firme și cantități industriale, ridicăm din toată România cu flota proprie.",
        },
      ],
    },

    "scrap-metal-deva": {
      name: "Fier vechi Deva",
      eyebrow: "Fier vechi în Deva",
      title: "Fier vechi Deva: centru de colectare în Cristur, pe drumul spre Hunedoara",
      lead: "Cauți unde să vinzi fier vechi în Deva? Punctul nostru de lucru este în Cristur, sat care aparține de municipiul Deva, pe Șoseaua Hunedoarei nr. 13. Cumpărăm fier vechi, fontă, aluminiu, cupru, alamă, cabluri și acumulatori de la persoane fizice și firme.",
      metaTitle: "Fier vechi Deva — centru colectare Cristur, preț pe kg",
      metaDescription:
        "Centru autorizat de colectare fier vechi în Deva (Cristur, Șos. Hunedoarei 13). Cumpărăm fier, fontă, cupru, aluminiu, alamă. L–V 8–17, S 8–13. Tel. 0740 072 256.",
      highlights: [
        {
          title: "În municipiul Deva",
          body: "Cristur face parte din municipiul Deva. Ne găsești pe Șoseaua Hunedoarei nr. 13, la ieșirea din oraș spre Hunedoara.",
        },
        {
          title: "Program extins sâmbăta",
          body: "Luni–Vineri 08:00–17:00 și Sâmbătă 08:00–13:00, ca să poți veni și în weekend după curățenia din curte.",
        },
        {
          title: "Toate metalele într-un loc",
          body: "Fier vechi, fontă, aluminiu, cupru, alamă, cabluri și acumulatori auto, sortate corect și cântărite în fața ta.",
        },
      ],
      guide: {
        eyebrow: "Fier vechi în Deva",
        heading: "Ce trebuie să știi dacă vinzi fier vechi în Deva",
        lead: "Activăm în zona Deva din 2004. Mai jos găsești cum ajungi la noi, ce poți aduce, ce acte îți trebuie și ce opțiuni ai dacă materialul nu poate fi transportat cu mașina personală.",
        sections: [
          {
            heading: "Cum ajungi la centrul de colectare din Cristur",
            body: [
              "Din Deva, ieși din oraș pe drumul spre Hunedoara. Punctul nostru de lucru este pe Șoseaua Hunedoarei nr. 13, în satul Cristur, care aparține administrativ de municipiul Deva. Accesul este pentru autoturisme, remorci, dube și camioane, iar vehiculul se cântărește la intrare și la ieșire.",
              "Dacă vii cu o cantitate mai mare sau cu materiale pe care nu le-ai mai predat, sună-ne înainte la 0740 072 256. Îți spunem cotația zilei și cum să sortezi materialul ca să primești prețul corect.",
            ],
            points: [
              "Adresa: Șos. Hunedoarei nr. 13, Sat Cristur, Deva, jud. Hunedoara",
              "Program: Luni–Vineri 08:00–17:00, Sâmbătă 08:00–13:00, Duminică închis",
              "Telefon: 0740 072 256",
            ],
          },
          {
            heading: "Ce cumpărăm de la persoane fizice din Deva",
            body: [
              "Majoritatea clienților din Deva vin după o curățenie în casă, garaj sau curte, după o renovare sau după ce au demontat o construcție veche. Primim:",
            ],
            points: [
              "Fier vechi greu și tablă: profile, țevi, garduri, porți, tablă de acoperiș",
              "Fontă: calorifere vechi, căzi, piese turnate",
              "Aluminiu: tâmplărie, jante, profile, radiatoare, doze",
              "Cupru și alamă: țevi, fitinguri, robineți, conductori",
              "Cabluri electrice cu izolație, procesate pe instalația noastră",
              "Acumulatori auto uzați",
            ],
          },
          {
            heading: "Ce acte îți trebuie",
            body: [
              "Ca persoană fizică ai nevoie doar de cartea de identitate. Pentru fiecare predare primești bonul de cântar și borderoul de achiziție, iar contribuția la Fondul pentru Mediu și impozitul pe venit se rețin la sursă, conform legii. Nu mai ai nimic de declarat ulterior.",
              "Firmele din Deva vând fier vechi pe bază de factură, cu documentele de transport și trasabilitate aferente.",
            ],
            points: [],
          },
          {
            heading: "Ridicare fier vechi din Deva",
            body: [
              "Dacă ai mult fier vechi sau piese grele, venim noi. Fiind aproape de oraș, ridicăm din Deva și din localitățile din jur cu camion cu macara cu graifăr, basculante sau containere. Costul transportului îl afli dinainte.",
            ],
            points: [],
          },
          {
            heading: "Pentru firmele din Deva",
            body: [
              "Ateliere, service-uri auto, firme de construcții, magazine și fabrici din Deva generează deșeuri metalice în mod constant. Pentru ele lucrăm pe bază de contract: punem containere la sediu, ridicăm la frecvența stabilită și emitem documentele necesare pentru evidența gestiunii deșeurilor.",
              "Pe lângă metale, preluăm și alte fluxuri de deșeuri reciclabile și periculoase, așa că o firmă poate lucra cu un singur operator pentru mai multe tipuri de deșeuri.",
            ],
            points: [],
          },
        ],
      },
      faq: [
        {
          question: "Unde pot vinde fier vechi în Deva?",
          answer:
            "La punctul nostru de lucru din Cristur, Șos. Hunedoarei nr. 13, care face parte din municipiul Deva. Suntem deschiși Luni–Vineri 08:00–17:00 și Sâmbătă 08:00–13:00.",
        },
        {
          question: "Sunteți deschiși sâmbăta?",
          answer:
            "Da, sâmbăta între 08:00 și 13:00. Duminica suntem închiși.",
        },
        {
          question: "Cât primesc pe fier vechi în Deva?",
          answer:
            "Prețul depinde de sort (fier greu, tablă, fontă) și de curățenia materialului. Sună-ne la 0740 072 256 pentru cotația zilei sau vezi pagina noastră de prețuri pentru detalii pe fiecare sort.",
        },
        {
          question: "Ridicați fier vechi din Deva?",
          answer:
            "Da. Pentru cantități mari sau piese grele ridicăm din Deva și din localitățile din jur cu camion cu macara cu graifăr, basculantă sau container.",
        },
      ],
    },

    "scrap-metal-hunedoara": {
      name: "Fier vechi Hunedoara",
      eyebrow: "Fier vechi în Hunedoara",
      title: "Fier vechi Hunedoara: predare, ridicare și colectare pentru case, ateliere și firme",
      lead: "Ecoplast Hart are sediul social în municipiul Hunedoara, iar punctul de lucru este pe drumul dintre Hunedoara și Deva, în Cristur. Cumpărăm fier vechi și metale neferoase de la locuitorii și firmele din Hunedoara și ridicăm cu flota proprie loturile mari.",
      metaTitle: "Fier vechi Hunedoara — predare și ridicare, preț pe kg",
      metaDescription:
        "Vinzi fier vechi în Hunedoara? Centrul nostru autorizat din Cristur, pe drumul Hunedoara–Deva, cumpără fier, fontă, cupru, aluminiu. Ridicare cu graifăr. 0740 072 256.",
      highlights: [
        {
          title: "Firmă din Hunedoara",
          body: "Sediul nostru social este în municipiul Hunedoara. Lucrăm în zonă din 2004 și cunoaștem bine nevoile atelierelor și firmelor de aici.",
        },
        {
          title: "Pe drumul spre Deva",
          body: "Punctul de lucru din Cristur, Șos. Hunedoarei nr. 13, este pe drumul dintre Hunedoara și Deva, ușor de găsit cu mașina sau cu camionul.",
        },
        {
          title: "Ridicare loturi mari",
          body: "Pentru demolări, hale și ateliere din Hunedoara venim cu macara cu graifăr, basculante și containere Abrollkipper.",
        },
      ],
      guide: {
        eyebrow: "Fier vechi în Hunedoara",
        heading: "Vânzarea fierului vechi în Hunedoara: tot ce ai nevoie să știi",
        lead: "Hunedoara este un oraș cu tradiție siderurgică, cu multe ateliere, hale și clădiri industriale vechi. Asta înseamnă și multe deșeuri metalice, de la gospodării până la structuri industriale. Iată cum le valorifici corect.",
        sections: [
          {
            heading: "Unde predai fier vechi dacă locuiești în Hunedoara",
            body: [
              "Punctul nostru de lucru este în satul Cristur, pe Șoseaua Hunedoarei nr. 13, pe drumul care leagă Hunedoara de Deva. Vehiculul se cântărește la intrare și la ieșire, pe cântar verificat metrologic, iar tu primești bonul de cântar și actele pe loc.",
              "Programul este Luni–Vineri 08:00–17:00 și Sâmbătă 08:00–13:00. Sună înainte la 0740 072 256 dacă vrei cotația zilei sau dacă aduci o cantitate mare.",
            ],
            points: [],
          },
          {
            heading: "Fier vechi din ateliere, hale și clădiri industriale",
            body: [
              "În Hunedoara multe deșeuri metalice provin din ateliere mecanice, din spații industriale care se reamenajează și din demolarea unor construcții vechi. Pentru astfel de lucrări contează să ai un partener care poate prelua material greu și în cantitate mare, cu documente complete.",
            ],
            points: [
              "Structuri metalice, grinzi, profile și tablă din hale",
              "Utilaje și echipamente scoase din uz",
              "Șpan și resturi de producție din atelierele mecanice, în containere dedicate",
              "Cabluri electrice din instalații dezafectate",
              "Metale neferoase: cupru, alamă, aluminiu, bronz",
            ],
          },
          {
            heading: "Fier vechi din gospodărie",
            body: [
              "Pentru locuitorii din Hunedoara, cele mai frecvente materiale sunt caloriferele din fontă înlocuite la renovare, garduri și porți vechi, tablă de acoperiș, biciclete, mobilier metalic și piese auto. Separă metalele neferoase de fier înainte să vii, pentru că se plătesc mult mai bine.",
            ],
            points: [],
          },
          {
            heading: "Ridicare și containere în Hunedoara",
            body: [
              "Dacă materialul nu poate fi transportat cu mașina personală, venim noi cu camion cu macara cu graifăr, cu basculantă sau lăsăm un container pe care îl încarci în ritmul tău. Costul transportului îl afli înainte de ridicare.",
            ],
            points: [],
          },
          {
            heading: "Acte și documente",
            body: [
              "Persoanele fizice au nevoie doar de cartea de identitate. Contribuția la Fondul pentru Mediu și impozitul pe venit se rețin la sursă. Firmele din Hunedoara vând pe bază de factură și primesc documentele de transport și trasabilitate necesare pentru evidența deșeurilor.",
            ],
            points: [],
          },
        ],
      },
      faq: [
        {
          question: "Cât de departe este centrul de colectare de Hunedoara?",
          answer:
            "Punctul nostru de lucru este în Cristur, pe drumul dintre Hunedoara și Deva, pe Șoseaua Hunedoarei nr. 13, așa că ajungi repede cu mașina.",
        },
        {
          question: "Ridicați fier vechi din Hunedoara?",
          answer:
            "Da. Pentru cantități mari, piese grele sau lucrări de demolare și dezafectare ridicăm din Hunedoara cu camion cu macara cu graifăr, basculante sau containere.",
        },
        {
          question: "Cumpărați și șpan de la atelierele din Hunedoara?",
          answer:
            "Da. Preluăm șpan feros și neferos din atelierele mecanice, de regulă în containere dedicate, cu ridicare la frecvența stabilită.",
        },
        {
          question: "Ce acte îmi trebuie ca să vând fier vechi?",
          answer:
            "Ca persoană fizică, doar cartea de identitate. Ca firmă, vinzi pe factură, cu documentele de transport și trasabilitate aferente.",
        },
      ],
    },

    "cast-iron-radiators": {
      name: "Calorifere din fontă",
      eyebrow: "Calorifere la fier vechi",
      title: "Calorifere din fontă la fier vechi: demontare, greutate și cum le predai",
      lead: "Ai schimbat caloriferele vechi din fontă și nu știi ce să faci cu ele? Fonta este una dintre cele mai bine plătite categorii de fier vechi. Le cumpărăm la punctul de lucru din Cristur, Deva, iar pentru cantități mari venim după ele.",
      metaTitle: "Calorifere fontă la fier vechi — preț, greutate, ridicare | Deva",
      metaDescription:
        "Vinde caloriferele vechi din fontă la fier vechi în Deva și Hunedoara. Cât cântărește un element, cum le demontezi și cum se predau. Ridicare pentru cantități mari.",
      highlights: [
        {
          title: "Fonta se plătește bine",
          body: "Caloriferele din fontă intră la categoria fontă, plătită la un nivel apropiat de fierul greu, peste tablă și fierul ușor.",
        },
        {
          title: "Grele, dar valoroase",
          body: "Un calorifer din fontă cântărește mult. De aceea câteva calorifere înseamnă deja o cantitate care contează la cântar.",
        },
        {
          title: "Ridicare de la bloc sau casă",
          body: "Pentru renovări de blocuri, centrale termice sau case întregi, venim cu camionul și le încărcăm noi.",
        },
      ],
      guide: {
        eyebrow: "Ghid calorifere vechi",
        heading: "Tot ce trebuie să știi despre caloriferele vechi la fier vechi",
        lead: "La renovări, caloriferele din fontă sunt de obicei primele lucruri care pleacă. Sunt grele, ocupă loc și nu merită aruncate. Iată cum le recunoști, cum le demontezi în siguranță și cum obții prețul corect.",
        sections: [
          {
            heading: "Fontă, oțel sau aluminiu: ce fel de calorifer ai",
            body: [
              "Contează din ce este făcut caloriferul, pentru că fiecare material se încadrează la alt sort și are alt preț.",
            ],
            points: [
              "Calorifere din fontă: elemente groase, foarte grele, cu suprafață aspră sub vopsea. Magnetul se prinde. Se predau la categoria fontă.",
              "Calorifere din oțel (tip panou): tablă subțire, mult mai ușoare. Magnetul se prinde. Se predau ca fier ușor.",
              "Calorifere din aluminiu: ușoare, de obicei albe, cu aripioare. Magnetul nu se prinde. Se predau la aluminiu și valorează mai mult pe kg decât fonta.",
              "Radiatoare din cupru sau cupru-alamă: se găsesc la mașini și la unele instalații. Se predau la neferoase.",
            ],
          },
          {
            heading: "Cât cântărește un calorifer din fontă",
            body: [
              "Greutatea depinde de model, dar un singur element de calorifer clasic din fontă cântărește de regulă câteva kilograme, iar un calorifer întreg de apartament ajunge ușor la zeci de kilograme. De aceea o renovare a instalației de încălzire dintr-o casă sau dintr-un bloc produce rapid sute de kilograme de fontă.",
              "Greutatea exactă se stabilește doar la cântar. Noi cântărim pe cântar verificat metrologic și îți dăm bonul de cântar.",
            ],
            points: [],
          },
          {
            heading: "Cum demontezi caloriferele în siguranță",
            body: [
              "Dacă nu ai experiență cu instalațiile de încălzire, cheamă un instalator. Dacă te ocupi singur, ține cont de câteva reguli:",
            ],
            points: [
              "Oprește centrala și lasă instalația să se răcească complet.",
              "Închide robinetele caloriferului sau golește instalația, după caz.",
              "Pune un vas sub racorduri: din calorifer curge apă murdară, uneori cu nămol.",
              "Golește complet caloriferul înainte de transport. Apa adaugă greutate inutilă și murdărește mașina.",
              "Caloriferele din fontă sunt foarte grele: ridică-le în doi și folosește mănuși de protecție.",
            ],
          },
          {
            heading: "Întregi sau sparte? Ce faci cu robinetele",
            body: [
              "Caloriferele se pot preda întregi, nu trebuie sparte. Dacă vrei să le spargi ca să le transporți mai ușor, fă-o cu grijă: fonta se sparge în bucăți ascuțite.",
              "Robinetele și racordurile sunt de obicei din alamă. Dacă le demontezi și le predai separat, la alamă, primești pentru ele un preț mult mai bun decât la fontă.",
            ],
            points: [],
          },
          {
            heading: "Renovări de blocuri, școli și clădiri: preluăm cantități mari",
            body: [
              "Asociațiile de proprietari, firmele de instalații și constructorii care înlocuiesc instalația de încălzire dintr-o clădire întreagă pot avea tone de calorifere din fontă. Pentru astfel de lucrări venim cu camion cu macara cu graifăr sau lăsăm un container la clădire, iar firmele primesc documentele necesare pe factură.",
            ],
            points: [],
          },
        ],
      },
      faq: [
        {
          question: "Cumpărați calorifere vechi din fontă?",
          answer:
            "Da. Le cumpărăm la punctul de lucru din Cristur, Deva, la categoria fontă. Pentru cantități mari organizăm ridicarea.",
        },
        {
          question: "Trebuie să golesc caloriferele de apă?",
          answer:
            "Da, golește-le complet înainte de transport. Apa adaugă greutate care nu se plătește și poate murdări vehiculul.",
        },
        {
          question: "Primiți și calorifere din aluminiu sau oțel?",
          answer:
            "Da. Caloriferele din aluminiu se plătesc la aluminiu, iar cele din oțel tip panou la fier ușor. Le sortăm la recepție ca să primești prețul corect pentru fiecare.",
        },
        {
          question: "Trebuie să sparg caloriferele înainte să le aduc?",
          answer:
            "Nu. Le poți aduce întregi. Doar dacă nu le poți transporta altfel, le poți sparge, cu grijă, pentru că fonta se sparge în bucăți ascuțite.",
        },
        {
          question: "Ridicați caloriferele de la bloc sau de la casă?",
          answer:
            "Da, pentru cantități mari, de exemplu la renovarea unei clădiri sau a unei case întregi. Sună-ne la 0740 072 256 și stabilim ridicarea.",
        },
      ],
    },

    "plant-dismantling": {
      name: "Dezafectări hale și utilaje",
      eyebrow: "Dezafectări și dezmembrări",
      title: "Fier vechi din dezafectări de hale și dezmembrări de utilaje",
      lead: "Eliberezi o hală, închizi o linie de producție sau casezi utilaje? Preluăm și valorificăm structurile metalice, utilajele și echipamentele scoase din uz, cu macara cu graifăr, containere și flotă proprie, cu cântărire metrologică și documente complete de trasabilitate.",
      metaTitle: "Dezafectări hale și dezmembrări utilaje — valorificare fier vechi",
      metaDescription:
        "Preluăm fier vechi din dezafectări de hale industriale și dezmembrări de utilaje: structuri metalice, linii de producție, cabluri. Graifăr, containere, documente.",
      highlights: [
        {
          title: "Utilaje grele, flotă proprie",
          body: "Camioane cu macara cu graifăr, basculante de mare tonaj și containere Abrollkipper pentru volume mari de material greu.",
        },
        {
          title: "Toate metalele, sortate",
          body: "Separăm feroasele de neferoase și de cabluri, ca fiecare fracție să fie valorificată la prețul ei real.",
        },
        {
          title: "Documente complete",
          body: "Factură, documente de transport și trasabilitate și dovada valorificării, pentru evidența gestiunii deșeurilor.",
        },
      ],
      guide: {
        eyebrow: "Cum lucrăm",
        heading: "Valorificarea metalelor din dezafectări industriale, de la evaluare la documente",
        lead: "O dezafectare înseamnă de obicei tone de material, termene strânse și obligații de mediu. Rolul nostru este să preluăm metalul de pe amplasament repede, să îl valorificăm la prețul corect și să îți dăm documentele de care ai nevoie.",
        sections: [
          {
            heading: "Ce preluăm din hale și de pe platforme industriale",
            body: [
              "Preluăm practic orice fracție metalică rezultată dintr-o dezafectare sau dezmembrare:",
            ],
            points: [
              "Structuri metalice de hale: grinzi, stâlpi, ferme, pane, tablă de învelitoare",
              "Utilaje, mașini-unelte și linii de producție scoase din uz",
              "Poduri rulante, căi de rulare și echipamente de ridicare",
              "Rezervoare, recipiente și conducte metalice golite și curățate",
              "Rafturi industriale, structuri de depozitare și construcții metalice ușoare",
              "Cabluri electrice și instalații, procesate pe instalația noastră de granulare",
              "Motoare, transformatoare golite și echipamente cu conținut de cupru",
            ],
          },
          {
            heading: "Cum lucrăm, pas cu pas",
            body: [],
            points: [
              "Ne trimiți descrierea lucrării, fotografii și locația. Dacă e nevoie, venim să evaluăm amplasamentul.",
              "Îți facem o ofertă: preț pe tonă pentru fiecare categorie de metal și logistica necesară (containere, graifăr, frecvența transporturilor).",
              "Punem containerele pe amplasament și încărcăm materialul cu macara cu graifăr.",
              "Transportăm materialul la punctul nostru de lucru din Cristur, Deva, unde este cântărit pe cântar verificat metrologic.",
              "Sortăm materialul pe categorii și emitem factura și documentele de trasabilitate.",
            ],
          },
          {
            heading: "Demontare și debitare pe amplasament",
            body: [
              "Fiecare dezafectare este diferită: unele structuri sunt deja demontate și trebuie doar încărcate, altele trebuie debitate la dimensiuni transportabile. Spune-ne de la început în ce stadiu este lucrarea și ce ai nevoie, iar noi îți spunem ce putem prelua și cum organizăm logistica.",
            ],
            points: [],
          },
          {
            heading: "Siguranță și mediu: ce separăm înainte de preluare",
            body: [
              "Utilajele și instalațiile industriale conțin adesea uleiuri, emulsii, baterii, componente electronice sau alte deșeuri periculoase. Acestea trebuie separate de fierul vechi și predate pe circuitul lor. Ca operator autorizat și pentru deșeuri periculoase, putem prelua o parte dintre aceste fluxuri în cadrul aceleiași lucrări.",
            ],
            points: [
              "Uleiuri hidraulice și de motor golite din utilaje",
              "Acumulatori și baterii",
              "Echipamente electrice și electronice (DEEE)",
              "Recipiente cu reziduuri de substanțe chimice",
            ],
          },
          {
            heading: "Cum obții cea mai bună valoare din dezafectare",
            body: [
              "Diferența dintre un lot vândut „la grămadă” și unul sortat poate fi foarte mare. Cuprul din motoare și cabluri, alama din armături și aluminiul din profile valorează de câteva ori mai mult decât fierul. Cu cât separăm mai multe fracții pe amplasament, cu atât valoarea totală a lucrării crește.",
              "Pentru lucrări mari, discutăm prețul pe tonă pentru fiecare categorie înainte de început, ca să știi de la început la ce valoare să te aștepți.",
            ],
            points: [],
          },
        ],
      },
      faq: [
        {
          question: "Preluați fier vechi din dezafectarea unei hale întregi?",
          answer:
            "Da. Preluăm structurile metalice, tabla, utilajele și instalațiile rezultate din dezafectarea halelor industriale, cu containere, macara cu graifăr și transport cu flota proprie.",
        },
        {
          question: "Ce documente primesc pentru metalul predat?",
          answer:
            "Firmele primesc factură, documentele de transport și trasabilitate și, la cerere, dovada valorificării deșeurilor, necesare pentru evidența gestiunii deșeurilor.",
        },
        {
          question: "Cum se stabilește prețul pentru o dezafectare?",
          answer:
            "Prețul se stabilește pe tonă, pentru fiecare categorie de metal (fier greu, tablă, neferoase, cabluri), în funcție de cotațiile zilei, de cantitate și de logistica necesară. Îți facem o ofertă înainte de începerea lucrării.",
        },
        {
          question: "Lucrați și în afara județului Hunedoara?",
          answer:
            "Da. Pentru lucrări industriale ne deplasăm în toată România cu flota proprie.",
        },
        {
          question: "Ce faceți cu uleiurile și componentele periculoase din utilaje?",
          answer:
            "Acestea se separă de fierul vechi și se predau pe circuitul deșeurilor periculoase. Fiind autorizați și pentru astfel de deșeuri, putem prelua o parte dintre ele în aceeași lucrare.",
        },
      ],
    },

    "metal-waste-codes": {
      name: "Coduri deșeuri metalice",
      eyebrow: "Ghid pentru firme",
      title: "Coduri de deșeuri metalice: 17 04 05, 12 01 01 și celelalte coduri uzuale",
      lead: "Ce cod are fierul vechi din construcții? Dar șpanul din atelier sau cablurile? Am strâns într-un singur loc codurile de deșeuri metalice folosite cel mai des, cu exemple, plus explicații despre documentele care însoțesc predarea.",
      metaTitle: "Coduri deșeuri metalice — 17 04 05, 12 01 01, 17 04 11 explicate",
      metaDescription:
        "Lista codurilor de deșeuri metalice: 17 04 05 fier și oțel, 12 01 01 șpan feros, 17 04 01 cupru, 17 04 11 cabluri și altele, cu exemple și documentele necesare.",
      highlights: [
        {
          title: "Codurile uzuale, într-un tabel",
          body: "Fier și oțel, șpan, cupru, aluminiu, cabluri, ambalaje și metale din vehicule, cu denumirea oficială și exemple.",
        },
        {
          title: "Periculos sau nepericulos",
          body: "Codurile cu asterisc (*) sunt deșeuri periculoase și au reguli separate de stocare, transport și predare.",
        },
        {
          title: "Documente și evidență",
          body: "Ce documente însoțesc transportul deșeurilor metalice și ce trebuie să păstrezi pentru evidența gestiunii deșeurilor.",
        },
      ],
      guide: {
        eyebrow: "Cum folosești codurile",
        heading: "Cum alegi codul corect și ce documente ai nevoie",
        lead: "Codul de deșeu nu este o formalitate. El apare în evidența gestiunii deșeurilor, în documentele de transport și în raportările către autorități, iar un cod greșit poate crea probleme la control.",
        sections: [
          {
            heading: "Cine stabilește codul deșeului",
            body: [
              "Codul îl stabilește generatorul deșeului, adică firma în care a apărut deșeul. Criteriul principal este procesul din care provine: același fier poate avea cod diferit dacă rezultă dintr-o demolare (17 04 05), din prelucrarea metalelor (12 01 01 pentru șpan) sau din dezmembrarea unui vehicul (16 01 17).",
              "Când nu ești sigur, alege codul din capitolul care descrie activitatea ta și discută cu operatorul care preia deșeul. Noi te putem ajuta să verifici încadrarea înainte de predare.",
            ],
            points: [],
          },
          {
            heading: "Cele mai frecvente situații",
            body: [],
            points: [
              "Fier vechi din construcții, demolări sau dezafectări: 17 04 05",
              "Șpan de oțel din strunjire și frezare: 12 01 01",
              "Șpan de aluminiu, alamă sau cupru: 12 01 03",
              "Țevi și fitinguri din cupru sau alamă din construcții: 17 04 01",
              "Tâmplărie și profile din aluminiu din construcții: 17 04 02",
              "Cabluri electrice obișnuite: 17 04 11",
              "Metale amestecate, nesortate, din construcții: 17 04 07",
              "Metale colectate separat de la populație: 20 01 40",
              "Acumulatori auto plumb-acid: 16 06 01*",
            ],
          },
          {
            heading: "Documentele care însoțesc transportul deșeurilor metalice",
            body: [
              "Transportul deșeurilor de la generator la operatorul autorizat se face cu documente care arată ce deșeu se transportă, ce cantitate, de unde și unde. Pentru deșeurile nepericuloase se folosește formularul de încărcare-descărcare a deșeurilor, iar pentru deșeurile periculoase există proceduri suplimentare de aprobare a transportului.",
              "Pe lângă documentele de transport, la predare primești bonul de cântar și factura sau documentul de achiziție. Toate acestea sunt baza evidenței gestiunii deșeurilor pe care o ține firma ta.",
            ],
            points: [],
          },
          {
            heading: "Evidența gestiunii deșeurilor și trasabilitatea",
            body: [
              "Firmele care generează deșeuri trebuie să țină evidența cantităților produse, stocate și predate, pe fiecare cod de deșeu, și să raporteze aceste date autorităților de mediu. Trasabilitatea înseamnă că pentru fiecare cantitate poți arăta, cu documente, cui a fost predată și că a ajuns la un operator autorizat.",
              "De aceea contează să lucrezi cu un operator autorizat, care îți dă documente corecte pentru fiecare transport. Pentru detalii despre raportare, vezi și ghidurile noastre despre evidența deșeurilor și raportarea în SIM.",
            ],
            points: [],
          },
          {
            heading: "Greșeli frecvente",
            body: [],
            points: [
              "Folosirea aceluiași cod pentru toate metalele, deși cuprul, aluminiul și fierul au coduri diferite",
              "Încadrarea șpanului din producție la 17 04 05 în loc de 12 01 01 sau 12 01 03",
              "Predarea metalului contaminat cu ulei sau vopsele ca deșeu nepericulos",
              "Lipsa documentelor de transport pentru loturile mici",
              "Predarea către colectori fără autorizație, care nu pot emite documente valabile",
            ],
          },
        ],
      },
      faq: [
        {
          question: "Ce cod are fierul vechi?",
          answer:
            "Depinde de proveniență. Fierul și oțelul din construcții și demolări au codul 17 04 05. Șpanul feros din prelucrarea metalelor are codul 12 01 01, iar metalele feroase din vehicule scoase din uz au codul 16 01 17.",
        },
        {
          question: "Ce înseamnă codul 17 04 05?",
          answer:
            "17 04 05 înseamnă „fier și oțel” din capitolul deșeurilor din construcții și demolări. Este codul folosit cel mai des pentru structuri metalice, armături, grinzi, țevi și tablă rezultate din lucrări de construcții sau dezafectări.",
        },
        {
          question: "Ce înseamnă codul 12 01 01?",
          answer:
            "12 01 01 înseamnă „pilitură și șpan feros” și se folosește pentru așchiile de oțel rezultate din strunjire, frezare, găurire și alte operațiuni de prelucrare a metalelor.",
        },
        {
          question: "Ce cod au cablurile electrice?",
          answer:
            "Cablurile obișnuite au codul 17 04 11. Cablurile care conțin ulei, gudron sau alte substanțe periculoase au codul 17 04 10*, care este deșeu periculos.",
        },
        {
          question: "Ce înseamnă asteriscul de la unele coduri?",
          answer:
            "Asteriscul (*) arată că deșeul este periculos. Acestea au reguli mai stricte de stocare, transport și predare și pot fi predate doar operatorilor autorizați pentru deșeuri periculoase.",
        },
      ],
    },
  },
} as const;
