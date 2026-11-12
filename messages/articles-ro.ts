/**
 * Romanian article copy, split out of `ro.ts` purely for file size — it is
 * spliced back in as the `articles` key, so `Messages` still covers it and
 * `en.ts` still has to mirror it exactly.
 *
 * Everything that is not copy (topic, publication date, reading time, icon)
 * lives in `lib/site/articles.ts`, because it is the same fact in both
 * languages. Adding an article means: a `pathnames` entry and an `articleKeys`
 * entry in `lib/i18n/routing.ts`, an `ARTICLE_FACTS` entry and an icon, then
 * an `items` entry here and in `articles-en.ts` with the identical shape.
 *
 * The bodies are grounded in Romanian waste legislation as it stood at the
 * publication dates — HG 856/2002 (waste codes and records), HG 1061/2008
 * (transport documents), OUG 92/2021 (waste regime) — and every article ends
 * with `disclaimer`, because none of it is legal advice.
 */
export const articlesRo = {
  eyebrow: "Resurse",
  title: "Articole și ghiduri",
  lead: "Ghiduri practice despre colectarea, codificarea, transportul și reciclarea deșeurilor industriale — scrise de echipa care face asta zilnic la punctul de lucru din Cristur.",
  metaTitle: "Articole și ghiduri despre gestionarea deșeurilor",
  metaDescription:
    "Ghiduri practice despre colectarea, codificarea, transportul și reciclarea deșeurilor industriale în România, de la echipa Ecoplast Hart.",

  latestHeading: "Cele mai recente",
  topicsHeading: "Subiecte",
  filteredBy: "Filtrat după",
  clearFilter: "Șterge filtrul",
  empty: "Nu există încă articole pe acest subiect.",
  readArticle: "Citește",
  moreArticles: "Alte articole",
  backToArticles: "Toate articolele",

  authorLabel: "Autor",
  dateLabel: "Publicat",
  updatedLabel: "Actualizat",
  readLabel: "Durată",
  readTime: "{minutes} min de citit",

  keyPointsHeading: "Pe scurt",
  faqHeading: "Întrebări frecvente",
  relatedServiceEyebrow: "Serviciul nostru",
  relatedServiceCta: "Vezi serviciul",
  disclaimer:
    "Materialul are caracter informativ și rezumă practica noastră la data publicării. Legislația de mediu se modifică frecvent — pentru situația concretă a firmei tale, verifică textele în vigoare și consultă agenția pentru protecția mediului sau un consultant de specialitate.",

  author: {
    name: "Echipa Ecoplast Hart",
    role: "Operațiuni și conformitate",
  },

  topics: {
    legislation: "Legislație",
    recycling: "Reciclare",
    costs: "Costuri",
    guides: "Ghiduri",
  },

  items: {
    "choosing-a-waste-collection-partner": {
      metaTitle: "Cum alegi o firmă de colectare a deșeurilor",
      metaDescription:
        "Autorizație de mediu, coduri acceptate, documente de trasabilitate și transport propriu: ce verifici înainte să semnezi un contract de colectare a deșeurilor.",
      title:
        "Cum alegi o firmă de colectare a deșeurilor: ce verifici înainte de contract",
      excerpt:
        "Prețul pe tonă este ultimul criteriu care contează. Înaintea lui vin autorizația, codurile acceptate și documentele pe care le primești la fiecare ridicare.",
      lead: "Responsabilitatea pentru un deșeu nu pleacă odată cu camionul. Dacă operatorul cu care lucrezi nu este autorizat pentru codul respectiv sau nu îți poate documenta traseul materialului, problema rămâne a firmei tale. Iată ce verificăm noi înșine când preluăm o relație — și ce merită să verifici și tu.",
      sections: [
        {
          heading: "Autorizația de mediu și codurile pentru care este emisă",
          body: [
            "Orice operator care colectează, stochează temporar sau tratează deșeuri are nevoie de autorizație de mediu emisă de agenția județeană pentru protecția mediului. Documentul nu este un simplu certificat de existență: în anexele lui sunt listate exact codurile de deșeuri pe care operatorul are voie să le preia și operațiile pe care le poate face cu ele.",
            "Cere autorizația în copie și caută în ea codul tău. O firmă autorizată pentru 15 01 01 — ambalaje de hârtie și carton — nu are voie să îți ridice uleiul uzat, oricât de convenabil ar fi prețul. Verifică și termenul de valabilitate: o autorizație expirată transformă fiecare ridicare într-o neconformitate la primul control.",
          ],
        },
        {
          heading: "Ce se întâmplă cu materialul după ce pleacă din curte",
          body: [
            "Colectarea este doar primul pas al ierarhiei deșeurilor. Întrebarea utilă este ce urmează: materialul este sortat și valorificat, sau doar transbordat către un alt intermediar care îl duce, în cele din urmă, la depozitare?",
            "Un operator care sortează și procesează pe propria platformă îți poate arăta unde ajunge fiecare fracție. Noi facem sortarea, balotarea și procesarea cablurilor la punctul de lucru din Cristur, așa că lanțul se scurtează cu cel puțin un intermediar — iar prețul reflectă valoarea reală a materialului, nu marja unui șir de revânzători.",
          ],
        },
        {
          heading: "Documentele pe care le primești la fiecare ridicare",
          body: [
            "La fiecare transport de deșeuri nepericuloase te interesează formularul de încărcare-descărcare prevăzut de HG 1061/2008, completat corect, cu cantitatea cântărită și codul deșeului. Pentru deșeurile periculoase discuția se mută la formularul de expediție și la aprobarea prealabilă a transportului.",
            "Aceste documente sunt baza evidenței gestiunii deșeurilor pe care firma ta o ține conform HG 856/2002 și a raportării anuale în Sistemul Integrat de Mediu. Dacă un operator îți spune că „se rezolvă și fără hârtii”, costul acelei simplificări îl plătești tu, la control.",
          ],
        },
        {
          heading: "Logistica, cântarul și capacitatea de reacție",
          body: [
            "Un contract bun descrie concret ce containere primești, la ce interval se ridică, în cât timp se răspunde la o solicitare suplimentară și cum se cântărește materialul. Un operator cu flotă proprie — camioane Abrollkipper, basculante, macara cu graifăr — își controlează programul; unul care subcontractează transportul îți transmite mai departe întârzierile altcuiva.",
            "Cere cântar verificat metrologic și bon de cântar la fiecare intrare. Diferența dintre o estimare vizuală și o cântărire documentată se vede în factură lună de lună, iar la deșeurile metalice se vede foarte repede.",
          ],
        },
      ],
      keyPoints: [
        "Cere autorizația de mediu și caută în anexă exact codul de deșeu pe care îl generezi.",
        "Un operator care sortează și procesează pe platformă proprie scurtează lanțul și plătește materialul la valoarea lui reală.",
        "Formularul de încărcare-descărcare și bonul de cântar nu sunt birocrație — sunt dovada ta la control.",
      ],
      faq: [
        {
          question:
            "Mai răspund pentru deșeurile mele după ce le ridică transportatorul?",
          answer:
            "Da, atât timp cât nu poți dovedi că le-ai predat unui operator autorizat pentru codul respectiv, cu documentele de transport completate. Trasabilitatea documentată este exact ceea ce transferă răspunderea.",
        },
        {
          question: "Ce documente ar trebui să îmi rămână după fiecare ridicare?",
          answer:
            "Formularul de încărcare-descărcare — sau formularul de expediție, pentru deșeuri periculoase —, bonul de cântar și, la final de lună, centralizatorul cantităților pe coduri, pentru evidența gestiunii deșeurilor.",
        },
        {
          question:
            "Contează dacă firma de colectare are propria platformă de sortare?",
          answer:
            "Contează la două capitole: prețul, pentru că dispare marja intermediarilor, și trasabilitatea, pentru că operatorul poate arăta unde a ajuns fiecare fracție în loc să indice un alt colector.",
        },
      ],
    },

    "waste-codes-and-transport-documents": {
      metaTitle: "Coduri de deșeuri și formulare de transport",
      metaDescription:
        "Cum alegi codul de deșeu corect din lista HG 856/2002, ce formulare cere HG 1061/2008 la transport și cum ții evidența gestiunii deșeurilor.",
      title:
        "Coduri de deșeuri și formulare de transport: ghid practic pentru firma generatoare",
      excerpt:
        "Șase cifre și un asterisc decid ce documente îți trebuie, cine are voie să îți ridice materialul și cum raportezi la final de an.",
      lead: "Cele mai multe neconformități pe deșeuri nu vin din rea-credință, ci dintr-o încadrare greșită făcută o dată și repetată apoi luni întregi. Codul de deșeu este punctul din care pornește tot restul: autorizația necesară colectorului, formularele de transport, condițiile de stocare și raportarea anuală.",
      sections: [
        {
          heading: "Cum este construită lista codurilor de deșeuri",
          body: [
            "Lista europeană a deșeurilor, preluată în legislația română prin HG 856/2002 și actualizată prin Decizia 2014/955/UE, organizează deșeurile în capitole, după activitatea care le generează sau după tipul materialului. Codul are șase cifre: primele două indică capitolul, următoarele două subcapitolul, ultimele două deșeul propriu-zis.",
            "Codurile marcate cu asterisc sunt periculoase, iar asteriscul schimbă tot: regimul de stocare, documentele de transport, operatorii care au voie să le preia. Două intrări vecine în listă pot arăta aproape identic și se gestionează complet diferit — un acumulator cu plumb și o baterie alcalină sunt exemplul clasic.",
          ],
        },
        {
          heading: "Cum alegi codul corect",
          body: [
            "Regula practică: pornești de la capitolele care descriu procesul care a generat deșeul și abia dacă nu găsești nimic acolo cobori la capitolul 16, „deșeuri nespecificate în altă parte”. Codurile care se termină în 99 sunt ultima opțiune, nu prima — la un control se citesc ca semn că încadrarea nu a fost făcută.",
            "Pentru perechile „oglindă” — același material cu și fără asterisc, în funcție de substanțele periculoase pe care le conține — încadrarea se face pe baza compoziției, nu a aspectului. Un ambalaj metalic golit, care a conținut vopsea sau solvent, nu intră la ambalaje metalice curate, iar diferența se stabilește plecând de la fișa cu date de securitate a produsului original.",
          ],
        },
        {
          heading: "Documentele de transport",
          body: [
            "Pentru deșeurile nepericuloase, HG 1061/2008 cere formularul de încărcare-descărcare, completat în exemplare pentru expeditor, transportator și destinatar. Fără el, un transport oprit în trafic devine problema tuturor celor trei.",
            "Pentru deșeurile periculoase, aceeași hotărâre impune un formular de expediție și o procedură de aprobare prealabilă a transportului, cu informarea agențiilor de mediu implicate. Este pasul care surprinde cel mai des firmele aflate la prima expediere de ulei uzat sau de ambalaje contaminate: transportul nu se poate organiza în aceeași zi.",
          ],
        },
        {
          heading: "Evidența și raportarea anuală",
          body: [
            "Firma generatoare ține evidența gestiunii deșeurilor pe coduri, cu cantități și destinație, conform HG 856/2002. În practică, asta înseamnă o centralizare lunară a bonurilor de cântar și a formularelor de transport — mult mai simplu de ținut la zi decât de reconstituit în ianuarie.",
            "Datele se raportează anual în Sistemul Integrat de Mediu al Agenției Naționale pentru Protecția Mediului. Dacă operatorul tău de colectare îți trimite lunar un centralizator pe coduri, raportarea devine o formalitate; dacă nu, devine o arheologie a facturilor.",
          ],
        },
      ],
      keyPoints: [
        "Codul are șase cifre; asteriscul îl mută în regimul deșeurilor periculoase, cu alte documente și alți operatori autorizați.",
        "Codurile care se termină în 99 sunt ultima opțiune de încadrare, nu prima.",
        "Deșeurile periculoase cer aprobare prealabilă a transportului — se planifică, nu se expediază spontan.",
      ],
      faq: [
        {
          question: "Ce înseamnă asteriscul din dreptul unui cod de deșeu?",
          answer:
            "Că deșeul este clasificat ca periculos. Se schimbă condițiile de stocare, formularele de transport, autorizația necesară colectorului și modul în care se raportează cantitatea.",
        },
        {
          question: "Cine completează formularul de încărcare-descărcare?",
          answer:
            "Se completează la încărcare și se semnează de expeditor, transportator și destinatar, fiecare păstrând un exemplar pentru evidența proprie.",
        },
        {
          question: "Ce fac dacă nu găsesc un cod potrivit pentru deșeul meu?",
          answer:
            "Reia căutarea în capitolul care descrie procesul care l-a generat, apoi în capitolul 16. Dacă tot nu se potrivește nimic, discută încadrarea cu operatorul autorizat și cu agenția de mediu înainte de prima expediere.",
        },
      ],
    },

    "scrap-metal-prices-explained": {
      metaTitle: "Cum se stabilește prețul la fier vechi",
      metaDescription:
        "Cotații internaționale, calitatea sortării, impuritățile și costul de transport: din ce se compune, de fapt, prețul pe tonă la fier vechi și deșeuri neferoase.",
      title:
        "Cum se stabilește prețul la fier vechi și la deșeurile metalice",
      excerpt:
        "Prețul pe tonă nu este o cifră arbitrară. Se compune din cotația metalului, calitatea sortării, impuritățile reținute la recepție și costul cursei.",
      lead: "Două oferte pot arăta foarte diferit pe hârtie și pot ajunge la aceeași sumă pe factură — sau invers. Dacă înțelegi din ce se compune prețul la deșeuri metalice, poți compara corect ofertele și, mai important, poți influența partea care depinde de tine.",
      sections: [
        {
          heading: "De unde pornește prețul",
          body: [
            "Prețul plătit pentru un metal reciclabil nu se stabilește la poarta depozitului. Pornește de la cotațiile internaționale — bursa metalelor de la Londra pentru cupru, aluminiu, plumb, zinc și nichel, respectiv indicii regionali pentru fier vechi — peste care se aplică un discount ce acoperă procesarea, transportul și riscul de calitate.",
            "De aceea prețul se schimbă săptămânal, uneori zilnic, și de aceea o ofertă „valabilă permanent” ar trebui să dea de gândit. Ce poate fi stabil este formula: referința publică, discountul aplicat și condițiile de recepție.",
          ],
        },
        {
          heading: "Calitatea sortării face diferența",
          body: [
            "Un metal curat, sortat pe tip și eliberat de atașamente nemetalice, se apropie de cotația de referință. Același metal amestecat cu alte fracții intră într-o categorie inferioară, pentru că cineva va trebui să facă sortarea în locul tău — iar costul acela se scade din prețul tău.",
            "Diferența este cea mai vizibilă la neferoase: cuprul curat, aluminiul de profil și alama sortată se plătesc net mai bine decât un amestec neferos. La fier vechi contează grosimea tablei, dimensiunea bucăților și dacă materialul intră în container fără prelucrare suplimentară.",
          ],
        },
        {
          heading: "Impuritățile și tara",
          body: [
            "Recepția înseamnă cântărire și evaluare. Din cantitatea brută se scad tara — containerul, paletul, vehiculul gol — și impuritățile: pământ, apă, beton, lemn, plastic, izolații. Un lot de fier vechi umed sau cu pământ pierde procente bune la recepție, iar discuția este cu atât mai simplă cu cât cântarul și evaluarea sunt documentate.",
            "Cere de fiecare dată bon de cântar cu brut, tara și net, plus mențiunea impurităților reținute. Este singurul mod de a compara corect două oferte: un preț nominal mai mare, cu o deducere mai agresivă, poate ieși sub un preț nominal mai mic cu recepție corectă.",
          ],
        },
        {
          heading: "Logistica și constanța fluxului",
          body: [
            "Transportul se plătește pe cursă, nu pe tonă, așa că un container plecat pe jumătate gol mută costul în prețul pe tonă. Densitatea contează: tabla presată și materialul debitat la dimensiune încarcă un container mult mai eficient decât piesele voluminoase.",
            "Constanța contează la fel de mult. Un flux previzibil, cu ridicări programate și material pregătit la ora convenită, susține un preț mai bun decât o ridicare ocazională, pentru că logistica se poate planifica. Aici se explică, cel mai des, diferența dintre două oferte care par identice pe hârtie.",
          ],
        },
      ],
      keyPoints: [
        "Prețul pornește de la cotații publice, peste care se aplică un discount de procesare, transport și risc de calitate.",
        "Sortarea pe tip și eliminarea atașamentelor nemetalice sunt cea mai rapidă cale de a crește prețul încasat.",
        "Bonul de cântar cu brut, tara și net este singura bază corectă de comparație între două oferte.",
      ],
      faq: [
        {
          question: "De ce diferă prețul la fier vechi de la o săptămână la alta?",
          answer:
            "Pentru că urmează cotațiile internaționale ale metalelor și cererea topitoriilor. Ofertele serioase se dau pentru o perioadă precizată, nu pe termen nelimitat.",
        },
        {
          question: "Cât pierd dacă predau material nesortat?",
          answer:
            "Depinde de amestec, dar la neferoase diferența dintre material sortat pe tip și un amestec este substanțială, pentru că sortarea trebuie făcută oricum — doar că de altcineva, pe costul lui.",
        },
        {
          question: "Ce este tara și cum se stabilește?",
          answer:
            "Este greutatea containerului sau a vehiculului gol, care se scade din brut. Se determină prin cântărire înainte sau după descărcare, iar valoarea trebuie să apară pe bonul de cântar alături de brut și net.",
        },
      ],
    },

    "cable-recycling-copper-granules": {
      metaTitle: "Reciclarea cablurilor: granule de cupru și aluminiu",
      metaDescription:
        "Cum se procesează cablurile electrice uzate: tocare, separare granulometrică și densimetrică, granule de cupru și aluminiu ca materie primă secundară.",
      title: "Reciclarea cablurilor electrice: de la deșeu la granule de cupru",
      excerpt:
        "Un cablu scos din uz este un material compozit. Valoarea lui reală apare abia după ce conductorul este separat mecanic de izolație.",
      lead: "Cablurile electrice sunt printre puținele deșeuri industriale în care diferența dintre „predat ca atare” și „procesat corect” se măsoară direct în bani. Explicăm ce se întâmplă în instalația de la Cristur și ce poți face tu, la sursă, ca materialul să ajungă la valoarea lui.",
      sections: [
        {
          heading: "Ce intră în instalație",
          body: [
            "Din punctul de vedere al reciclării, un cablu scos din uz este un material compozit: conductor de cupru sau de aluminiu, izolație de PVC sau poliolefine, uneori ecranare, armătură de oțel și umplutură. Valoarea stă în conductor, dar recuperarea lui curată depinde de cât de bine se separă restul.",
            "Procesăm cabluri de rețea aeriană și subterană, cabluri industriale, cablaje auto și cabluri din echipamente electrice și electronice. Fiecare tip are alt raport între metal și izolație, iar acest raport este ceea ce determină, la recepție, prețul pe tonă de cablu brut.",
          ],
        },
        {
          heading: "Tocare, separare, granule",
          body: [
            "Procesul mecanic începe cu tocarea în trepte, care reduce cablul la fragmente de câțiva milimetri și rupe legătura fizică dintre conductor și izolație. Urmează cernerea granulometrică și separarea densimetrică — pe masă vibrantă sau în curent de aer — care exploatează diferența mare de densitate dintre metal și polimer.",
            "Rezultă granule de cupru sau de aluminiu cu puritate ridicată, gata să intre în topire, și o fracție de plastic care se valorifică separat. Procedeul este pur mecanic: nu se arde nimic. Arderea izolației este atât ilegală, cât și sursa unor emisii pe care nicio recuperare de metal nu le justifică.",
          ],
        },
        {
          heading: "De ce granule și nu cablu brut",
          body: [
            "Un cablu vândut ca atare se plătește la un preț care încorporează incertitudinea: cumpărătorul nu știe exact cât metal va scoate din el, așa că își acoperă riscul în ofertă. Granulele sunt un produs cu specificație — tip de metal, puritate, granulometrie — și se tranzacționează aproape de cotația metalului.",
            "Pentru firma care generează cabluri uzate, asta înseamnă că valoarea se recuperează acolo unde se face procesarea. Cu instalație proprie la Cristur, diferența rămâne în lanț în loc să se oprească la un intermediar, și se poate reflecta în prețul de recepție.",
          ],
        },
        {
          heading: "Cum pregătești cablurile pentru predare",
          body: [
            "Separă cablurile pe categorii mari — cupru față de aluminiu, cabluri de putere față de cablaje subțiri de date — și ține-le curate de pământ, beton și apă. Nu este nevoie să le dezizolezi: instalația face asta mai bine, mai repede și fără pierderea de metal pe care o produce o decojire manuală.",
            "Tamburii goi, armăturile de oțel și accesoriile metalice se predau separat, ca deșeu feros. Iar dacă vorbim de cantități care justifică un container, ridicarea se programează cu tot cu containerul potrivit, ca să nu plătești transport pentru aer.",
          ],
        },
      ],
      keyPoints: [
        "Cablul este un compozit: valoarea reală se vede abia după separarea conductorului de izolație.",
        "Procesarea este pur mecanică — tocare, cernere, separare densimetrică. Arderea izolației este ilegală și distruge valoarea.",
        "Granulele au specificație și se plătesc aproape de cotația metalului; cablul brut se plătește cu discountul incertitudinii.",
      ],
      faq: [
        {
          question: "Trebuie să dezizolez cablurile înainte de a le preda?",
          answer:
            "Nu. Instalația separă conductorul de izolație cu pierderi mai mici decât orice decojire manuală, iar timpul investit în dezizolare rareori se recuperează în preț.",
        },
        {
          question: "Ce se întâmplă cu plasticul rezultat?",
          answer:
            "Fracția de PVC și poliolefine rezultată din separare se valorifică separat, ca materie primă secundară — nu se elimină.",
        },
        {
          question: "Se pot procesa și cablurile cu armătură de oțel?",
          answer:
            "Da. Armătura se separă în proces și se valorifică drept deșeu feros, iar conductorul urmează traseul normal către granulare.",
        },
      ],
    },

    "hazardous-waste-obligations": {
      metaTitle: "Deșeuri periculoase: obligațiile firmelor",
      metaDescription:
        "Uleiuri uzate, ambalaje contaminate, acumulatori, DEEE: cum identifici deșeurile periculoase, cum le stochezi și ce documente cere transportul lor.",
      title:
        "Deșeuri periculoase în industrie: ce obligații are firma ta și cum le acoperi",
      excerpt:
        "Majoritatea firmelor industriale generează deșeuri periculoase fără să le numească așa. Inventarul onest este prima obligație și cea mai ieftină.",
      lead: "Un butoi de ulei uzat lăsat lângă hala de producție și un bidon de solvent golit sunt, legal, aceeași categorie de problemă. Regimul deșeurilor periculoase are reguli proprii de stocare, de transport și de raportare — iar diferența dintre o firmă pregătită și una surprinsă se face în câteva decizii de amenajare.",
      sections: [
        {
          heading: "Ce face un deșeu periculos",
          body: [
            "Un deșeu este periculos dacă prezintă cel puțin una dintre proprietățile de pericol definite la nivel european — inflamabil, toxic, coroziv, ecotoxic și așa mai departe. În lista de coduri, acestea sunt intrările marcate cu asterisc, iar OUG 92/2021 privind regimul deșeurilor stabilește regulile de gestionare.",
            "În practică, majoritatea firmelor industriale generează deșeuri periculoase fără să le numească așa: ulei uzat de la utilaje, ambalaje care au conținut vopsele, adezivi sau solvenți, lavete și absorbanți contaminați, acumulatori cu plumb, tuburi fluorescente. Prima obligație este un inventar onest al fluxurilor.",
          ],
        },
        {
          heading: "Stocarea temporară la generator",
          body: [
            "Până la ridicare, deșeurile periculoase se stochează separat pe tipuri, în ambalaje etichetate, într-o zonă delimitată, acoperită și cu retenție pentru lichide. Amestecarea a două fluxuri periculoase, sau a unuia periculos cu unul nepericulos, este interzisă — și transformă întreaga cantitate în deșeu periculos.",
            "Eticheta trebuie să indice codul deșeului și proprietățile de pericol, iar zona trebuie să fie accesibilă pentru încărcare fără traversarea spațiilor de producție. Sunt lucruri mărunte, care se rezolvă într-o zi la amenajare și care se reproșează ani la rând la controale.",
          ],
        },
        {
          heading: "Transportul: aprobare prealabilă și formular de expediție",
          body: [
            "Spre deosebire de deșeurile nepericuloase, cele periculoase nu se pot expedia spontan. HG 1061/2008 prevede o procedură de aprobare prealabilă a transportului, cu formular de expediție și informarea agențiilor pentru protecția mediului implicate, la care se adaugă cerințele ADR acolo unde materialul intră sub incidența transportului de mărfuri periculoase.",
            "Consecința practică este simplă: planifică. O expediere de ulei uzat sau de ambalaje contaminate se organizează cu zile înainte, nu în ziua în care s-a umplut butoiul. Un operator care lucrează curent cu aceste fluxuri pregătește documentația în paralel cu programarea transportului.",
          ],
        },
        {
          heading: "Evidența, raportarea și ce ceri de la operator",
          body: [
            "Cantitățile generate, stocate și predate se înregistrează în evidența gestiunii deșeurilor și se raportează anual în Sistemul Integrat de Mediu. Pentru fluxurile speciale — uleiuri uzate, baterii și acumulatori, DEEE, ambalaje — se aplică suplimentar legislația dedicată fiecăruia, cu propriile obligații de predare către operatori autorizați.",
            "De la operatorul de colectare cere trei lucruri: autorizația de mediu care acoperă explicit codurile tale periculoase, documentele de transport complete la fiecare expediere și confirmarea operației de tratare aplicate. Cu acestea trei la dosar, un control pe deșeuri periculoase devine o verificare de formă.",
          ],
        },
      ],
      keyPoints: [
        "Asteriscul din cod și proprietățile de pericol decid regimul; inventarul corect al fluxurilor este prima obligație.",
        "Stocare separată, ambalaje etichetate, zonă cu retenție — amestecarea fluxurilor transformă totul în deșeu periculos.",
        "Transportul cere aprobare prealabilă și formular de expediție: se planifică, nu se improvizează.",
      ],
      faq: [
        {
          question: "Uleiul uzat de la utilaje este deșeu periculos?",
          answer:
            "Da. Uleiurile uzate figurează în lista de coduri cu intrări marcate ca periculoase și se predau operatorilor autorizați pentru aceste coduri, cu documentele de transport aferente.",
        },
        {
          question:
            "Pot stoca mai multe tipuri de deșeuri periculoase în același recipient?",
          answer:
            "Nu. Amestecarea categoriilor este interzisă, iar rezultatul se gestionează integral ca deșeu periculos, la costul celei mai stricte categorii din amestec.",
        },
        {
          question: "Cât durează organizarea unui transport de deșeuri periculoase?",
          answer:
            "Depinde de flux și de agențiile implicate, dar trebuie tratat ca o operațiune planificată cu câteva zile înainte, din cauza aprobării prealabile a transportului.",
        },
      ],
    },

    "packaging-waste-recycling-obligations": {
      metaTitle: "Obligații privind ambalajele: ce trebuie să facă firmele",
      metaDescription:
        "Ce prevede Legea 249/2015 pentru firmele care introduc ambalaje pe piața din România: conformare individuală, transfer de responsabilitate, raportare și operatori autorizați.",
      title:
        "Obligații privind ambalajele: ce trebuie să facă orice firmă care utilizează ambalaje",
      excerpt:
        "Dacă ambalezi, etichetezi sau introduci pe piață produse ambalate, ești producător de ambalaje în sens legal. Obligația de recuperare urmează ambalajul, nu clientul.",
      lead: "Cele mai multe neconformități pe ambalaje vin de la firme care nu știau că sunt producători. Legea 249/2015 privind ambalajele și deșeurile de ambalaje definește termenul larg: dacă firma ta ambalează, umple sau etichetează bunuri care ajung pe piață — sau le importă deja ambalate — ești producător, și obligația de a asigura valorificarea îți aparține.",
      sections: [
        {
          heading: "Cine este producător de ambalaje conform legii române",
          body: [
            "Legea 249/2015, care transpune Directiva europeană privind ambalajele și deșeurile de ambalaje, definește producătorul de ambalaje ca orice persoană care ambalează, umple, etichetează sau importă bunuri ambalate pe piața din România cu titlu profesional. Intră în această categorie producătorii, importatorii, distribuitorii care introduc mărfuri în ambalaje și comercianții care folosesc ambalaje de serviciu (pungi, cutii) la punctul de vânzare.",
            "Obligația este proporțională cu cantitatea introdusă pe piață și cu tipul de material — sticlă, plastic, hârtie, metal, lemn și materiale compozite se urmăresc separat. Dacă firma ta generează mai mult de o tonă de ambalaje pe an, obligația de raportare este anuală; sub acest prag, obligația există în continuare, dar sarcina documentară este mai mică.",
          ],
        },
        {
          heading:
            "Conformare individuală sau transfer de responsabilitate la o organizație",
          body: [
            "Legea 249/2015 le oferă producătorilor două căi. Conformarea individuală presupune organizarea unui sistem propriu de preluare, documentarea valorificării și transmiterea unui raport anual la agenția județeană pentru protecția mediului și la Registrul Național al Ambalajelor. Această cale este viabilă pentru producătorii mari, cu logistică proprie.",
            "Calea mai frecventă este transferul de responsabilitate: producătorul semnează un contract cu o organizație de transfer al răspunderii (OTR) acreditată, care agregă obligația mai multor producători și finanțează valorificarea în numele lor. Contractul trebuie să preceadă prima tonă introdusă pe piață în orice an calendaristic, iar sumele transferate acoperă costurile organizației și operațiunile efective de reciclare.",
          ],
        },
        {
          heading: "Ce operatori se iau în calcul pentru țintele de valorificare",
          body: [
            "Nu orice firmă care preia cartonul sau plasticul tău contează pentru țintele de valorificare a ambalajelor. Se califică numai operatorii de deșeuri cu autorizație de mediu care acoperă explicit valorificarea fracțiilor de ambalaje și care trimit materialul la reciclatori licențiați. OTR-ul, sau, în cazul conformării individuale, generatorul însuși, trebuie să dețină documentația care dovedește lanțul complet.",
            "Colectăm, sortăm și balotăm mai multe fracții de ambalaje — carton și hârtie, folii și plastic rigid, metal — iar documentele pe care le emitem la fiecare ridicare pot fi folosite ca dovadă în dosarul tău de conformare. Dacă lucrezi printr-un OTR, acesta va confirma ce lanțuri se califică; dacă gestionezi obligația direct, cere operatorului de colectare confirmarea valorificării sau tratării care intră în raportul anual.",
          ],
        },
        {
          heading: "Documentele și raportul anual",
          body: [
            "Raportul anual în Registrul Național al Ambalajelor acoperă cantitățile de ambalaje introduse pe piață pe fiecare material și valorificarea corespunzătoare obținută, pe fracție. Se depune până pe 25 martie pentru anul calendaristic anterior. Omiterea lui atrage amenzi, dar consecința practică mai dureroasă este că reînnoirea autorizațiilor firmei-mamă cere adesea un dosar curat de conformare la ambalaje.",
            "Evidențele care stau la baza raportului — bonuri de cântar, confirmări de valorificare, chitanțe de transfer la OTR — se păstrează cinci ani. În practică, asta înseamnă un dosar pe an, actualizat la fiecare ridicare, nu o reconstituire în fiecare februarie.",
          ],
        },
      ],
      keyPoints: [
        "Dacă firma ta ambalează, umple, etichetează sau importă bunuri ambalate pe piața din România, ești producător de ambalaje și obligația de valorificare îți revine.",
        "Transferul de responsabilitate la un OTR acreditat este calea standard pentru majoritatea firmelor; contractul trebuie să preceadă prima tonă introdusă pe piață în fiecare an.",
        "Se iau în calcul numai operatorii autorizați pentru valorificarea fracțiilor de ambalaje — păstrează documentele cinci ani.",
      ],
      faq: [
        {
          question:
            "Dacă import cantități mici de bunuri ambalate, sunt totuși producător?",
          answer:
            "Da, conform Legii 249/2015, importul declanșează obligația de producător indiferent de volum. Formatul raportului anual și pragurile minime variază cu cantitatea, dar obligația de a asigura valorificarea este aceeași.",
        },
        {
          question: "Ce este un OTR și cum știu că este acreditat?",
          answer:
            "O organizație de transfer al răspunderii (OTR) este acreditată de Ministerul Mediului și înscrisă în Registrul Național al Ambalajelor. Verifică registrul înainte de a semna orice contract — un intermediar neacreditat nu transferă răspunderea.",
        },
        {
          question:
            "Pot contabiliza baloturile de carton pe care le trimit direct la o fabrică de hârtie?",
          answer:
            "Da, dacă poți documenta lanțul: autorizația colectorului care acoperă codul relevant, formularul de transport și confirmarea din partea instalației receptoare că materialul a mers la valorificare și nu la eliminare. Fără documente, tona nu se ia în calcul.",
        },
      ],
    },

    "aluminium-scrap-recycling": {
      metaTitle:
        "Reciclarea aluminiului: categorii, prețuri și pregătire la sursă",
      metaDescription:
        "Profile, piese turnate, șpan, cablu și folie: cum se clasifică, prețuiesc și procesează deșeurile de aluminiu. Ce să separi la sursă pentru a recupera valoarea maximă.",
      title:
        "Reciclarea deșeurilor de aluminiu: categorii, prețuri și ce faci la sursă",
      excerpt:
        "Aluminiul se reciclează la infinit și se recuperează cu o fracție din energia topiturii primare. Dar categoria pe care o predai decide cât de aproape de cotația de la Londra ești plătit.",
      lead: "Dintre toate neferoasele care trec prin platforma noastră, aluminiul este cel la care pregătirea la sursă face cea mai vizibilă diferență în preț. Chimia fizică a reciclării aluminiului tolerează o gamă largă de categorii — dar piața prețuiește fiecare categorie separat, iar diferența dintre cea mai bună și cea mai slabă poate fi destul de mare încât să merite o discuție.",
      sections: [
        {
          heading: "De ce reciclarea aluminiului merită atenție",
          body: [
            "Reciclarea aluminiului economisește aproximativ 95% din energia necesară topiturii primare, deoarece retopirea și recularea consumă mult mai puțin decât extracția aluminiului din bauxită. Acest fapt se traduce direct în valoare economică: aluminiul își păstrează valoarea prin cicluri de reciclare într-un mod în care puține materiale o fac.",
            "London Metal Exchange publică zilnic prețuri de referință pentru aluminiu primar și mai multe clase de aliaje. Aluminiul secundar (reciclat) se tranzacționează cu un discount față de cel primar, dar diferența se îngustează semnificativ pentru material curat, bine sortat. Aceasta este pârghia pe care o controlează generatorul.",
          ],
        },
        {
          heading: "Principalele categorii și ce le diferențiază",
          body: [
            "Profilul extrudat curat — tâmplărie, secțiuni structurale, radiatoare — este categoria premium. Este o singură clasă de aliaj; tratamentele de suprafață precum vopseaua sau anodizarea contează mai puțin la nivelul topitoriei, dar inserțiile și elementele de fixare din oțel neîndepărtate contează. Profilurile mixte din familii diferite de aliaje, sau cele cu accesorii din oțel, cad într-o categorie inferioară, deoarece elementele de aliere trebuie gestionate la topire.",
            "Aluminiul turnat — blocuri motoare, carcase de cutii de viteze, jante — este o altă familie de aliaje și trebuie ținut separat de aliajele deformate. Amestecul turnat cu deformat este greșeala care costă cel mai mult la recepție, pentru că o topitorie care cumpără pentru o aplicație nu poate folosi cealaltă, iar lotul amestecat se prețuiește la valoarea categoriei mai mici.",
          ],
        },
        {
          heading: "Strunjiri, șpan și aluminiu mărunțit",
          body: [
            "Strunjirile și șpanul de aluminiu sunt materiale cu densitate mai mică și suprafață specifică mare, ceea ce înseamnă mai multă oxidare și mai mult lichid de răcire sau ulei de tăiere prins. Se cântăresc cu deduceri pentru umiditate și contaminare și merg la topitorii secundare care lucrează specific cu șpan, nu la cele care retopesc material compact.",
            "Aluminiul mărunțit — din caroserii auto, procesare în flux mixt — este categoria cea mai variabilă, deoarece compoziția aliajelor este necunoscută până la spectrometrie. Dacă poți ține familiile de aliaje identificabile separate înainte de tocător, acel pas merită luat. Odată intrat la tocător, amestecul de aliaje este fixat și la fel este și plafonul de preț.",
          ],
        },
        {
          heading: "Folie, doze și aluminiu mic-format mixt",
          body: [
            "Folia de aluminiu și ambalajele — tăvi alimentare, capace, recipiente cu pereți subțiri — reprezintă o categorie distinctă, deoarece raportul mare suprafață/masă și prezența frecventă a reziduurilor alimentare, lacurilor și laminatelor din hârtie sau plastic cer o cale de procesare diferită față de materialul structural. Ține-le separate de profile și piese turnate.",
            "Dozele de băuturi, dacă sunt curate și necontaminate, sunt o fracție valorificabilă — dar pentru un generator industrial volumele sunt de obicei mici. Întrebarea practică este dacă ajung într-un container separat sau într-un lot mixt unde sunt o fracție minoră și tratate ca atare.",
          ],
        },
      ],
      keyPoints: [
        "Aluminiul se reciclează la infinit, iar reciclarea lui economisește aproximativ 95% din energia necesară topiturii primare.",
        "Separarea aliajelor deformate (profile, tablă) de aliajele turnate (piese motor, jante) este cel mai impactant pas de sortare.",
        "Strunjirile și șpanul suportă deduceri pentru umiditate și lichide de răcire; menținerea lor uscate și separate de profiluri curate păstrează prețul.",
      ],
      faq: [
        {
          question:
            "Afectează anodizarea sau vopseaua profilurilor de aluminiu prețul?",
          answer:
            "Tratamentele de suprafață ard sau sunt gestionate în procesul de rafinare, deci contează mai puțin decât compoziția aliajului. Factorul mai important este îndepărtarea elementelor de fixare din oțel și menținerea profilurilor din aceeași familie de aliaje împreună.",
        },
        {
          question:
            "Pot amesteca cablul de aluminiu cu cel de cupru în același container?",
          answer:
            "Nu. Cablul de aluminiu și cel de cupru sunt categorii separate, prețuite față de cotații de referință diferite. Amestecul lor înseamnă că ambele fracții sunt plătite la cea mai mică dintre cele două valori, iar costul sortării se scade din preț.",
        },
        {
          question:
            "Cum se stabilește prețul pentru strunjirile de aluminiu?",
          answer:
            "Pornind de la referința LME pentru clasa de aliaj relevantă, minus deducerile pentru umiditate, contaminare cu lichid de răcire, fines (așchii foarte mici care se oxidează rapid) și procesare. Strunjirile curate și uscate dintr-un aliaj cunoscut se plătesc semnificativ mai bine decât un amestec de șpan umed sau înmuiat în ulei.",
        },
      ],
    },
    "weee-recycling-guide-for-companies": {
      metaTitle: "Ghid de reciclare DEEE pentru companii",
      metaDescription:
        "Cum trebuie să gestioneze firmele Deșeurile de Echipamente Electrice și Electronice (DEEE), cerințele legale și practicile sigure de reciclare.",
      title: "Reciclarea DEEE: Ghid complet pentru companii",
      excerpt:
        "Casarea corectă a echipamentelor IT și electronicelor nu este doar o opțiune ecologică, ci o obligație legală. Iată cum se gestionează corect DEEE-urile.",
      lead: "Orice modernizare a biroului sau înlocuire de echipamente generează Deșeuri de Echipamente Electrice și Electronice (DEEE). Gestionarea corectă a acestui flux asigură securitatea datelor, conformitatea de mediu și recuperarea materialelor. Află care sunt obligațiile tale și cum să colaborezi cu un colector autorizat.",
      sections: [
        {
          heading: "Identificarea DEEE-urilor în compania ta",
          body: [
            "Calculatoarele, monitoarele, serverele, dar și electrocasnicele din chicinetă sau unele scule electrice intră în categoria DEEE. Acestea conțin atât substanțe periculoase (plumb, mercur, agenți de ignifugare), cât și materiale valoroase (aur, cupru, aluminiu).",
            "Recunoașterea corectă a echipamentelor care reprezintă DEEE este primul pas pentru a te asigura că nu ajung în deșeurile municipale, fapt care este și ilegal, și dăunător mediului.",
          ],
        },
        {
          heading: "Obligații legale și trasabilitate",
          body: [
            "Conform legislației, companiile trebuie să predea DEEE-urile exclusiv către operatori autorizați pentru colectare și tratare. Eliminarea acestora prin canale neautorizate sau la groapa de gunoi poate atrage amenzi semnificative din partea Gărzii de Mediu.",
            "La predarea echipamentelor, asigură-te că primești documentația legală necesară, cum ar fi formularul de încărcare-descărcare sau anexa de transport, pentru a dovedi trasabilitatea în cazul unui control.",
          ],
        },
        {
          heading: "Securitatea datelor la casarea IT",
          body: [
            "Înainte de reciclarea echipamentelor IT, securitatea datelor este prioritară. Asigură-te că toate mediile de stocare (HDD, SSD) sunt șterse ireversibil sau distruse fizic.",
            "Un partener de reciclare profesionist oferă deseori servicii de distrugere securizată și eliberează un certificat de distrugere, oferindu-ți siguranța că datele sensibile ale companiei nu vor fi compromise.",
          ],
        },
      ],
      keyPoints: [
        "DEEE-urile trebuie colectate și predate separat de restul deșeurilor.",
        "Colaborează exclusiv cu operatori autorizați pentru gestionarea deșeurilor electronice.",
        "Asigură-te că datele sunt șterse în siguranță înainte de predarea echipamentelor IT.",
      ],
      faq: [
        {
          question: "Pot arunca electronicele vechi la gunoiul menajer?",
          answer:
            "Nu. Este interzis prin lege și poluează grav mediul, deoarece electronicele conțin metale grele și substanțe toxice care ajung în sol și în pânza freatică.",
        },
        {
          question: "Primesc un document justificativ pentru casare?",
          answer:
            "Da. Un operator autorizat îți va elibera formularul de încărcare-descărcare conform HG 1061/2008, care este dovada legală a predării corecte a deșeurilor.",
        },
      ],
    },
    "industrial-plastic-waste-recycling": {
      metaTitle: "Reciclarea deșeurilor de plastic industrial",
      metaDescription:
        "Cum pot companiile de producție să sorteze și să recicleze masele plastice, tipuri de polimeri și beneficiile sortării corecte.",
      title: "Deșeurile de plastic industrial: Strategii de sortare și reciclare",
      excerpt:
        "Nu toate plasticele sunt la fel. Află cum sortarea la sursă a deșeurilor din plastic crește valoarea de reciclare și scade costurile de eliminare.",
      lead: "Procesele de producție și ambalare generează cantități semnificative de deșeuri din plastic. Totuși, plasticul amestecat are o valoare de piață redusă, în timp ce polimerii curați și sortați (precum PE, PP sau PET) sunt foarte căutați. Iată cum să îți organizezi fluxurile de plastic pentru o valorificare maximă.",
      sections: [
        {
          heading: "Importanța sortării la sursă",
          body: [
            "Amestecarea diferitelor tipuri de plastice face reciclarea dificilă și costisitoare. Când polimerii sunt amestecați, valoarea lor scade drastic, existând riscul să fie direcționați spre incinerare sau depozitare în loc de reciclare.",
            "Implementarea unui sistem clar de sortare la punctul de generare — asigurând pubele sau containere separate pentru fiecare tip de polimer — garantează că materialul rămâne curat și ușor reciclabil.",
          ],
        },
        {
          heading: "Mase plastice industriale comune: PE, PP și PET",
          body: [
            "Folia de polietilenă (PE), lăzile din polipropilenă (PP) și flacoanele PET sunt printre cele mai comune materiale plastice industriale. Fiecare are un proces specific de reciclare și o valoare distinctă pe piață.",
            "Păstrarea foliei transparente de PE separat de cea colorată, precum și asigurarea că recipientele din PP nu conțin reziduuri majore de produs, sunt pași simpli care cresc semnificativ valoarea de piață a deșeului.",
          ],
        },
        {
          heading: "Balotarea și optimizarea logisticii",
          body: [
            "Transportul plasticului vrac înseamnă, în mare parte, transportul aerului. Deoarece deșeurile de plastic au o densitate redusă, logistica poate deveni rapid cel mai mare cost în procesul de reciclare.",
            "Utilizarea unei prese de balotat la punctul de lucru reduce costurile logistice prin compactarea deșeurilor în baloți denși, optimizând astfel spațiul în camioane și reducând numărul curselor necesare.",
          ],
        },
      ],
      keyPoints: [
        "Sortează deșeurile de plastic pe tipuri de polimeri pentru a le menține valoarea.",
        "Evită contaminarea materialelor plastice cu uleiuri sau alte substanțe periculoase.",
        "Balotarea plasticului direct la punctul de lucru reduce drastic costurile de transport.",
      ],
      faq: [
        {
          question: "Pot fi reciclate toate tipurile de plastic industrial?",
          answer:
            "Majoritatea termoplasticelor pot fi reciclate, cu condiția să fie curate și sortate pe tipuri. Materialele compozite, plasticele multistrat sau cele puternic contaminate sunt mult mai greu de reciclat.",
        },
        {
          question: "Am nevoie de o presă de balotat pentru deșeurile din plastic?",
          answer:
            "Este extrem de recomandată dacă generați volume mari. O presă de balotat reduce frecvența transporturilor, eliberează spațiu și face deșeurile mult mai atractive pentru reciclatori.",
        },
      ],
    },

    "why-companies-sell-scrap-metal": {
      metaTitle: "De ce vând companiile și oamenii fier vechi",
      metaDescription:
        "Spațiu eliberat, conformare de mediu și bani din material altfel inert: de ce companiile și persoanele fizice aleg să vândă fierul vechi unui colector autorizat.",
      title: "De ce vând companiile și oamenii fier vechi: motivele din spatele deciziei",
      excerpt:
        "Fierul vechi nu e gunoi, e materie primă cu preț de piață. Iată de ce companiile scapă de stocul mort și persoanele fizice de electrocasnice vechi, aducând ambele bani în loc de costuri.",
      lead: "Un utilaj scos din uz sau un electrocasnic stricat ocupă loc și, lăsat acolo, nu face decât să ruginească. Diferența dintre a-l trata ca gunoi și a-l trata ca marfă este un singur telefon către un colector autorizat. Iată ce pune în mișcare decizia, atât pentru companii, cât și pentru persoane fizice.",
      sections: [
        {
          heading: "Valoarea materialului nu dispare când echipamentul iese din uz",
          body: [
            "Fierul vechi, cuprul, aluminiul și alama rămân metale cu preț de piață indiferent de forma pe care o au — profil, țeavă, carcasă sau conductor. Prețul lor urmărește cotațiile internaționale ale metalelor, nu starea vizuală a piesei, așa că un utilaj ruginit poate valora la fel de mult, la kilogram, ca unul curat.",
            "Diferența dintre neferoase și feroase este uriașă: cuprul și aluminiul se plătesc de multe ori mai mult pe kilogram decât fierul vechi. De aceea merită să știi ce ai înainte să suni un colector — poate schimba radical suma de pe bonul de cântar.",
          ],
        },
        {
          heading: "Pentru companii: eliberarea spațiului și obligațiile de mediu",
          body: [
            "O linie de producție oprită, utilaje înlocuite la o modernizare sau un stoc de materie primă care nu mai corespunde unui proiect abandonat ocupă spațiu care costă bani — chirie, asigurare, timp de gestiune. Vânzarea materialului transformă acel cost lunar într-o încasare unică.",
            "Există și o latură de conformare: deșeurile metalice depozitate necontrolat, fără evidență de gestiune sau fără un operator autorizat care să le preia, pot deveni un subiect de discuție la un control de mediu. Predarea documentată către un colector autorizat închide subiectul, cu bon de cântar și, la cerere, certificat de valorificare.",
          ],
        },
        {
          heading: "Pentru persoane fizice: decluttering și un venit suplimentar",
          body: [
            "O renovare, o casă golită după o moștenire sau un garaj plin de piese auto vechi generează fier vechi și metale neferoase pe care majoritatea oamenilor le-ar arunca la gunoiul menajer dacă nu ar exista un centru de colectare care le preia contra cost. Rezultatul: spațiu recuperat și un mic venit din ceva care oricum urma să dispară.",
            "Diferența față de o companie este scara, nu principiul: cantitățile sunt mai mici, dar prețul pe kilogram este același. Contează totuși, la fel ca la o firmă, cui predai materialul — un centru autorizat cântărește corect și eliberează dovada predării.",
          ],
        },
        {
          heading: "Cum se stabilește ce primești la cântar",
          body: [
            "Prețul final depinde de tipul de metal, de puritatea lui — un cablu cu izolație plătește mai puțin decât conductorul curat — și de cotația zilei pentru metalele neferoase, care fluctuează la fel ca orice marfă tranzacționată internațional.",
            "Un cântar verificat metrologic și un bon emis la fiecare recepție sunt singura garanție că suma corespunde cantității reale. Detaliem mecanismul complet al prețului, cu exemple pentru fier vechi, cupru și aluminiu, în articolul dedicat prețurilor la fier vechi.",
          ],
        },
      ],
      keyPoints: [
        "Fierul vechi și metalele neferoase își păstrează valoarea de piață chiar și scoase din uz — de aceea companiile și persoanele fizice aleg să le vândă, nu să le arunce.",
        "Pentru companii, motivul e mixt: bani din material altfel inert, plus eliberarea spațiului de depozitare și închiderea unui subiect de conformare de mediu.",
        "Pentru persoane fizice, vânzarea de fier vechi e o sursă simplă de venit — dar tot contează dacă centrul care preia materialul este autorizat.",
      ],
      faq: [
        {
          question: "Pot vinde fier vechi ca persoană fizică sau doar companiile au voie?",
          answer:
            "Pot și persoanele fizice. Un centru autorizat preia materialul de la oricine, de obicei pe bază de act de identitate, și emite un bon de cântar pentru fiecare predare.",
        },
        {
          question: "De ce diferă prețul de la o zi la alta?",
          answer:
            "Metalele neferoase — cupru, aluminiu, alamă — urmăresc cotații internaționale care fluctuează zilnic. Fierul vechi este mai stabil, dar și el se ajustează periodic în funcție de cererea industriei siderurgice.",
        },
        {
          question: "Ce documente primesc la predare?",
          answer:
            "Un bon de cântar la fiecare recepție, obligatoriu. Companiile care au nevoie de dovadă suplimentară pentru raportarea de mediu pot cere și un certificat de valorificare — explicăm diferența dintre cele două în articolul despre certificate.",
        },
      ],
    },

    "ferrous-vs-non-ferrous-waste": {
      metaTitle: "Deșeuri feroase și neferoase: diferențe și cum se colectează",
      metaDescription:
        "Ce înseamnă metale feroase și neferoase, cum se recunosc, ce coduri de deșeu au și de ce prețul de colectare diferă atât de mult între ele.",
      title: "Deșeuri feroase și neferoase: diferențe, coduri și cum se colectează",
      excerpt:
        "Un magnet și câteva secunde sunt de-ajuns să afli dacă un metal e feros sau neferos — dar diferența dintre ele îți schimbă radical prețul și modul de colectare.",
      lead: "„Fier vechi” este termenul pe care îl folosim pentru orice deșeu metalic, dar din punct de vedere tehnic el acoperă doar jumătate din poveste. Cealaltă jumătate — metalele neferoase — se colectează, se cântărește și mai ales se plătește diferit. Iată ce separă cele două categorii și de ce merită să le ții separate.",
      sections: [
        {
          heading: "Ce înseamnă „feros” și „neferos”",
          body: [
            "Metalele feroase conțin fier: oțelul, fonta, tabla și structurile metalice de construcție intră toate în această categorie. Testul practic este magnetul — dacă se lipește, metalul este feros.",
            "Metalele neferoase nu conțin fier sau îl conțin în urme nesemnificative: cuprul, aluminiul, alama, plumbul, zincul și aliajele lor. Nu sunt magnetice, iar diferențele de culoare le fac deseori recognoscibile cu ochiul liber — cuprul roșiatic, alama gălbuie, aluminiul gri-mat.",
          ],
        },
        {
          heading: "Codurile de deșeu și de ce contează separarea",
          body: [
            "Lista europeană a deșeurilor, preluată în legislația română prin HG 856/2002, tratează metalele ca familii de coduri distincte — de exemplu capitolul 17 04 separă cuprul, aluminiul, plumbul, zincul, fierul și oțelul sub subcoduri diferite, chiar și atunci când provin din același șantier sau aceeași hală.",
            "Separarea pe coduri nu este doar birocrație: ea determină și ce poate face operatorul cu materialul mai departe. Un operator autorizat pentru fier vechi nu este automat autorizat și pentru deșeuri neferoase — verifică asta la fel cum verifici orice alt cod, atunci când alegi un colector.",
          ],
        },
        {
          heading: "De ce diferă atât de mult prețul de colectare",
          body: [
            "Cuprul și aluminiul se tranzacționează la cotații internaționale de câteva ori mai mari pe kilogram decât fierul vechi. Un transport de metale neferoase amestecate cu fier vechi, necântărit separat, se plătește la prețul celui mai ieftin metal din încărcătură — pierzi diferența de valoare a materialului bun.",
            "Fierul vechi compensează prin volum: nu are prețul pe kilogram al cuprului, dar apare în cantități mult mai mari — structuri, tablă, profile — ceea ce îl face rentabil chiar și la o cotație modestă.",
          ],
        },
        {
          heading: "Cum se colectează în practică",
          body: [
            "La recepție, materialul trece prin verificare vizuală și, unde e cazul, testul magnetului, apoi se cântărește separat pe categorii — feroase, neferoase, aliaje mixte. Structurile voluminoase de fier vechi se ridică frecvent cu macara cu graifăr, direct de la punctul de generare.",
            "Noi cântărim fiecare categorie separat, la punctul de lucru din Cristur, cu cântar verificat metrologic, exact ca să nu se piardă valoarea neferoaselor în masa fierului vechi — vezi detaliile la colectarea fierului vechi și a deșeurilor metalice.",
          ],
        },
      ],
      keyPoints: [
        "Testul cu magnetul separă rapid feroasele (magnetice) de neferoase (nemagnetice) — cupru, aluminiu, alamă, plumb, zinc.",
        "Neferoasele au preț pe kilogram mult mai mare decât feroasele; amestecate într-un singur transport, scad valoarea totală la prețul celui mai ieftin metal din încărcătură.",
        "Separarea la sursă, chiar și aproximativă, se reflectă direct în bonul de cântar.",
      ],
      faq: [
        {
          question: "Cum recunosc dacă un deșeu metalic e feros sau neferos, fără echipament special?",
          answer:
            "Un magnet obișnuit este suficient pentru primul test — feroasele se lipesc, neferoasele nu. Culoarea ajută la a doua verificare: roșiatic pentru cupru, gălbui pentru alamă, gri-mat pentru aluminiu.",
        },
        {
          question: "Se pot preda amestecate feroase și neferoase?",
          answer:
            "Se pot preda, dar nu e recomandat: colectorul le separă oricum la recepție, iar loturile nesortate se cântăresc și se plătesc de regulă la prețul celui mai ieftin metal din amestec.",
        },
        {
          question: "Aliajele precum alama sau bronzul intră la feroase sau neferoase?",
          answer:
            "La neferoase. Deși pot conține urme de alte metale, alama și bronzul se cântăresc și se plătesc separat de fierul vechi, la o cotație proprie.",
        },
      ],
    },

    "waste-recovery-and-destruction-certificates": {
      metaTitle: "Certificatul de valorificare și certificatul de distrugere a deșeurilor",
      metaDescription:
        "Ce sunt certificatul de valorificare și certificatul de distrugere, cui îi folosesc și cum le obții de la un colector autorizat de deșeuri.",
      title: "Certificatul de valorificare și certificatul de distrugere: ce sunt și cui folosesc",
      excerpt:
        "Bonul de cântar dovedește o predare. Certificatul de valorificare sau de distrugere dovedește ce s-a întâmplat cu materialul după aceea — și multe firme au nevoie exact de asta.",
      lead: "Pentru multe firme, predarea deșeurilor se oprește la bonul de cântar și formularul de transport. Pentru cele care raportează la un audit de mediu, la un client mare sau la propria certificare ISO, urmează o întrebare în plus: ce dovadă ai că materialul chiar a fost reciclat sau distrus, și nu doar mutat în altă parte? La asta răspund certificatele de valorificare și de distrugere.",
      sections: [
        {
          heading: "Ce este certificatul de valorificare",
          body: [
            "Certificatul de valorificare este documentul prin care operatorul confirmă că un lot de deșeuri predat a fost efectiv procesat și reintrodus în circuitul industrial ca materie primă secundară — nu doar transportat și depozitat mai departe de altcineva.",
            "Firmele îl folosesc ca dovadă în raportarea anuală din Sistemul Integrat de Mediu, ca probă pentru certificarea ISO 14001 sau ca răspuns la cerințele de furnizori responsabili din auditurile clienților mari, tot mai frecvente în contractele industriale.",
          ],
        },
        {
          heading: "Ce este certificatul de distrugere și când e nevoie de el",
          body: [
            "Certificatul de distrugere atestă că un echipament sau un lot de materiale a fost dezmembrat sau distrus definitiv, nu revândut sau reintrodus în circulație. Este relevant mai ales pentru echipamentele IT scoase din uz — servere, stații de lucru, unități de stocare — unde miza principală este securitatea datelor, nu doar mediul.",
            "Este util și pentru casarea mijloacelor fixe din contabilitatea firmei: un certificat de distrugere susține înregistrarea corectă a scoaterii din gestiune a unui activ, cu dovadă că bunul chiar a ieșit din circuit.",
          ],
        },
        {
          heading: "Diferența față de formularul de încărcare-descărcare",
          body: [
            "Formularul de încărcare-descărcare, prevăzut de HG 1061/2008, dovedește un singur moment: predarea fizică a materialului către transportator, cu cantitatea cântărită și codul deșeului. El răspunde la întrebarea „ce a plecat și când”.",
            "Certificatul de valorificare sau de distrugere răspunde la întrebarea următoare: „ce s-a întâmplat cu el după aceea”. Pentru o trasabilitate completă, o firmă auditată are nevoie de amândouă — unul dovedește predarea, celălalt rezultatul final.",
          ],
        },
        {
          heading: "Cum obții aceste documente de la colector",
          body: [
            "Cere-le încă din faza de contract, nu după prima ridicare — la fel cum verifici autorizația de mediu și codurile acceptate. Un operator care doar transbordează materialul către un alt intermediar nu îți poate elibera un certificat de valorificare credibil, pentru că nu controlează ce se întâmplă cu el mai departe.",
            "Un operator care procesează efectiv materialul pe platforma proprie — sortare, balotare, granulare — poate documenta traseul complet și emite certificatul pe bază reală, nu declarativă. Stabilește de la început dacă documentul se emite per lot sau centralizat, periodic.",
          ],
        },
      ],
      keyPoints: [
        "Bonul de cântar dovedește predarea; certificatul de valorificare sau de distrugere dovedește ce s-a întâmplat cu materialul după aceea.",
        "Certificatul de distrugere e esențial pentru echipamentele IT cu date sensibile și pentru casarea mijloacelor fixe din contabilitate.",
        "Doar un operator care procesează efectiv materialul poate elibera un certificat de valorificare credibil, nu unul care doar îl transbordează mai departe.",
      ],
      faq: [
        {
          question: "Cine are nevoie de certificat de valorificare?",
          answer:
            "Firmele care raportează în Sistemul Integrat de Mediu, cele certificate ISO 14001 și cele care trebuie să demonstreze practici responsabile de mediu în auditurile de furnizori ale clienților mari.",
        },
        {
          question: "Certificatul de distrugere înlocuiește formularul de transport?",
          answer:
            "Nu, sunt complementare. Formularul de transport dovedește predarea materialului; certificatul de distrugere dovedește rezultatul final — că a fost dezmembrat sau distrus definitiv.",
        },
        {
          question: "Cât durează să primesc certificatul?",
          answer:
            "Depinde de operator și de mărimea lotului — de regulă se emite la cerere sau periodic, după ce materialul a fost efectiv procesat. Discută termenul cu operatorul înainte de a semna contractul, ca să știi la ce să te aștepți.",
        },
      ],
    },

    "how-waste-container-rental-works": {
      metaTitle: "Cum funcționează închirierea containerelor pentru deșeuri",
      metaDescription:
        "De la solicitare la ridicare: cum funcționează închirierea containerelor pentru deșeuri industriale, ce dimensiuni există și cum se calculează costul.",
      title: "Cum funcționează închirierea containerelor pentru deșeuri industriale",
      excerpt:
        "Un telefon, o dimensiune de container și un interval de ridicare — dar între ele sunt câteva decizii care influențează direct costul final.",
      lead: "O ridicare programată funcționează bine pentru un flux constant de deșeuri. Nu funcționează la fel de bine pentru o hală golită dintr-un foc sau o linie de producție oprită definitiv. Pentru situațiile astea există închirierea de containere — iată cum se derulează, de la primul telefon până la cântarul final.",
      sections: [
        {
          heading: "Când merită un container în locul ridicărilor programate",
          body: [
            "Ridicările programate au sens pentru deșeul pe care îl generezi constant — ambalaje, resturi de producție. Un container are sens pentru volumul punctual: o renovare de hală, oprirea unei linii, un stoc de materie primă scos din uz dintr-o dată.",
            "Diferența practică este flexibilitatea: containerul stă la tine cât ai nevoie să-l umpli, în loc să aștepți următoarea rută programată de colectare — util mai ales când volumul e mare și imprevizibil ca timp de generare.",
          ],
        },
        {
          heading: "Dimensiuni și tipuri de containere",
          body: [
            "Containerele Abrollkipper vin în capacități diferite, alese în funcție de volumul estimat, nu de greutate — un criteriu important, pentru că deșeurile au densități foarte diferite. Un container plin cu folie de plastic cântărește o fracțiune din unul plin cu fier vechi de aceeași dimensiune.",
            "Alegerea dimensiunii ține cont și de spațiul de manevră disponibil la punctul de lucru — lățimea porții, spațiul pentru basculantă la ridicare — un detaliu care merită discutat înainte de livrare, nu la fața locului.",
          ],
        },
        {
          heading: "Cum se calculează costul",
          body: [
            "Costul final depinde de dimensiunea containerului, de distanța de transport, de durata închirierii și de ce se află de fapt în el la ridicare. Un container cu deșeu mixt, nevalorificabil, este o cheltuială pură de eliminare.",
            "Un container în care predomină metalul poate întoarce situația: materialul cântărit la ridicare poate genera o încasare care compensează parțial sau integral costul închirierii. Cântărirea la ridicare este cea care stabilește suma finală, nu estimarea inițială.",
          ],
        },
        {
          heading: "Procesul, de la solicitare la ridicare",
          body: [
            "Totul pornește de la o estimare a volumului și a tipului de deșeu predominant, urmată de livrarea containerului gol la punctul de lucru. Intervalul de umplere se stabilește de comun acord, fie fix, fie la cerere.",
            "La ridicare, materialul se cântărește, iar transportul se documentează cu formularul de încărcare-descărcare prevăzut de HG 1061/2008 — aceleași documente ca la orice altă predare de deșeuri nepericuloase.",
          ],
        },
      ],
      keyPoints: [
        "Un container e potrivit pentru volume neregulate sau punctuale — o curățenie, o linie oprită — nu pentru fluxul constant al unei producții.",
        "Dimensiunea containerului se alege după volum, nu după greutate: deșeurile au densități foarte diferite.",
        "Dacă în container predomină metalul, costul poate deveni parțial sau integral o încasare, în funcție de ce se cântărește la ridicare.",
      ],
      faq: [
        {
          question: "Cât timp pot ține containerul la mine?",
          answer:
            "Se stabilește la comandă, în funcție de ritmul de umplere — de la câteva zile la câteva săptămâni. Discută intervalul din start, ca să fie clar în contract și să nu apară costuri neașteptate.",
        },
        {
          question: "Ce se întâmplă dacă amestec tipuri diferite de deșeu în același container?",
          answer:
            "Este posibil, dar crește costul: un amestec nu mai poate fi valorificat la fel de eficient ca fracțiile separate și poate necesita sortare suplimentară înainte de procesare.",
        },
        {
          question: "Am nevoie de o autorizație specială ca să comand un container?",
          answer:
            "Nu tu, ci operatorul trebuie să fie autorizat pentru codurile deșeului pe care îl generezi — verifică asta la fel cum ai verifica orice alt colector, înainte de a semna.",
        },
      ],
    },

    "waste-records-and-sim-reporting": {
      metaTitle: "Evidența gestiunii deșeurilor și raportarea în SIM",
      metaDescription:
        "Ce trebuie să conțină evidența lunară a gestiunii deșeurilor conform HG 856/2002, cum raportezi anual în SIM la ANPM și ce documente păstrezi pentru control.",
      title:
        "Evidența gestiunii deșeurilor și raportarea anuală în SIM: ghid pentru firme",
      excerpt:
        "O evidență ținută lunar, pe coduri, face raportarea anuală o formalitate. Una reconstituită în martie din facturi face din ea o problemă.",
      lead: "Orice firmă care generează deșeuri — de la un atelier mic la o fabrică — are obligația să țină evidența lor și să o raporteze anual. Obligația nu este nouă, dar controalele au devenit mai atente, iar datele din Sistemul Integrat de Mediu se compară tot mai des cu cele raportate de colectori. Iată cum arată o evidență care trece fără emoții de un control.",
      sections: [
        {
          heading: "Cine are obligația și ce înseamnă evidența gestiunii deșeurilor",
          body: [
            "OUG 92/2021 privind regimul deșeurilor obligă producătorii și deținătorii de deșeuri să țină evidența gestiunii lor, iar formatul este cel din anexa 1 la HG 856/2002. Nu contează dacă ai autorizație de mediu sau doar o activitate de birou: dacă generezi deșeuri din activitatea economică, obligația există.",
            "Evidența se ține lunar, separat pentru fiecare tip de deșeu, identificat prin codul lui din lista europeană. Pentru fiecare cod se trec cantitatea generată, cantitatea valorificată, eliminată sau stocată temporar, precum și operatorul căruia i-a fost predată.",
          ],
        },
        {
          heading: "De unde iau datele: bonuri de cântar și formulare de transport",
          body: [
            "Cifrele din evidență nu se estimează, se documentează. Sursa lor sunt formularele de încărcare-descărcare emise la fiecare transport, conform HG 1061/2008, bonurile de cântar și, pentru deșeurile periculoase, formularele de expediție.",
            "De aceea contează să lucrezi cu un colector care cântărește fiecare predare și îți trimite documentele lunar, centralizate pe coduri. Când cantitățile din evidența ta coincid cu cele raportate de operator, controlul se încheie repede; când nu coincid, diferența trebuie explicată.",
          ],
        },
        {
          heading: "Raportarea anuală în SIM",
          body: [
            "Datele din evidența lunară se centralizează anual și se raportează în SIM — Sistemul Integrat de Mediu administrat de ANPM —, pe baza unui cont creat de firmă în platformă. Termenul este anunțat de ANPM pentru fiecare sesiune de raportare; în ultimii ani, raportarea pentru anul anterior s-a făcut în primul trimestru.",
            "Dacă evidența a fost ținută lunar, raportarea înseamnă o simplă adunare pe coduri. Dacă nu, înseamnă reconstituirea unui an întreg din facturi și e-mailuri, cu riscul ca cifrele să nu se potrivească cu cele declarate de colectori pentru aceleași predări.",
          ],
        },
        {
          heading: "Ce păstrezi și cât timp",
          body: [
            "Păstrează evidența împreună cu documentele justificative: formularele de transport, bonurile de cântar, contractele cu operatorii și copiile autorizațiilor de mediu ale acestora. Legislația prevede o perioadă minimă de păstrare de cel puțin trei ani, iar în practică merită păstrate mai mult.",
            "Organizează dosarul pe ani și pe coduri de deșeu. La un control, prima cerere este de obicei evidența pe ultimul an, urmată de documentele care susțin câteva cantități alese la întâmplare — iar un dosar ordonat scurtează mult discuția.",
          ],
        },
      ],
      keyPoints: [
        "Evidența se ține lunar, pe fiecare cod de deșeu, în formatul din anexa 1 la HG 856/2002 — nu se reconstituie la final de an.",
        "Cantitățile vin din bonuri de cântar și formulare de transport; cere-le colectorului centralizate lunar.",
        "Raportarea anuală se face în SIM, la termenul anunțat de ANPM, iar documentele justificative se păstrează minimum trei ani.",
      ],
      faq: [
        {
          question: "Trebuie să țin evidența dacă am o firmă mică, fără producție?",
          answer:
            "Da, dacă activitatea ta generează deșeuri — ambalaje, echipamente IT scoase din uz, deșeuri de la întreținere. Volumul mic simplifică evidența, dar nu o elimină.",
        },
        {
          question: "Ce se întâmplă dacă nu raportez la timp în SIM?",
          answer:
            "Nedepunerea sau raportarea incorectă se sancționează contravențional conform OUG 92/2021. În plus, lipsa raportării iese ușor la iveală, pentru că și colectorul raportează cantitățile preluate de la tine.",
        },
        {
          question: "Mă poate ajuta colectorul cu datele pentru raportare?",
          answer:
            "Da. Noi trimitem clienților documentele de transport și centralizatorul cantităților pe coduri, iar la cerere o situație anuală, astfel încât cifrele din evidența lor să corespundă cu ce am preluat efectiv.",
        },
      ],
    },

    "used-oil-collection-for-companies": {
      metaTitle: "Colectarea uleiurilor uzate de la firme: stocare și predare",
      metaDescription:
        "Cum stochezi corect uleiul uzat în firmă, ce coduri de deșeu se folosesc, de ce nu se amestecă cu alte lichide și ce documente primești la predarea către un colector autorizat.",
      title:
        "Colectarea uleiurilor uzate de la firme: cum le stochezi și cum le predai",
      excerpt:
        "Un litru de ulei uzat poate compromite mii de litri de apă. Pentru firmă, el compromite și dosarul de mediu, dacă nu este stocat și predat corect.",
      lead: "Service-urile auto, flotele de transport, atelierele de prelucrare și orice fabrică cu utilaje hidraulice generează ulei uzat. Este un deșeu periculos, cu reguli clare de stocare și predare, dar și unul care se regenerează sau se valorifică energetic foarte bine — cu condiția să ajungă curat la colector.",
      sections: [
        {
          heading: "Ce este uleiul uzat și cum se codifică",
          body: [
            "Gestionarea uleiurilor uzate este reglementată de HG 235/2007, care stabilește obligațiile generatorilor și ale colectorilor. Uleiurile uzate se încadrează în capitolul 13 al listei deșeurilor, iar toate codurile relevante sunt marcate cu asterisc: sunt deșeuri periculoase.",
            "Încadrarea depinde de tipul uleiului: uleiurile minerale de motor, de transmisie și de ungere neclorurate au un cod, uleiurile hidraulice minerale altul, iar conținutul separatoarelor de hidrocarburi are propriul subcapitol. Codul corect contează pentru că stabilește tratamentul și documentele.",
          ],
        },
        {
          heading: "Regula de aur: nu amesteca",
          body: [
            "Uleiul uzat curat poate fi regenerat sau valorificat energetic. Uleiul amestecat cu apă, solvenți, antigel, combustibil sau uleiuri clorurate devine mult mai greu de tratat și mai scump de eliminat — iar HG 235/2007 interzice explicit amestecarea uleiurilor uzate cu alte substanțe.",
            "În practică, asta înseamnă recipiente separate pentru fiecare tip: un butoi pentru uleiul de motor, altul pentru cel hidraulic, iar antigelul, filtrele de ulei și materialele absorbante îmbibate în recipientele lor, cu codurile lor.",
          ],
        },
        {
          heading: "Stocarea temporară la generator",
          body: [
            "Uleiul uzat se păstrează în recipiente închise, etanșe, rezistente și etichetate cu tipul deșeului și codul lui, pe o suprafață impermeabilă, ferită de intemperii. Butoaiele se așază ideal pe o cuvă de retenție sau pe un palet colector, care să rețină o eventuală scurgere.",
            "Stocarea la generator este temporară: nu este un depozit. Programează predarea înainte ca recipientele să se umple, iar evidența cantităților se ține lunar, ca la orice alt deșeu.",
          ],
        },
        {
          heading: "Predarea către un colector autorizat",
          body: [
            "Uleiul uzat se predă doar unui operator autorizat pentru codul respectiv. Fiind deșeu periculos, transportul se face cu formularul de expediție și cu aprobarea prealabilă prevăzute de HG 1061/2008, cantitatea fiind confirmată la recepție.",
            "Noi preluăm uleiuri uzate și minerale, precum și șlamuri petroliere, cu transport propriu și documentele aferente. Pentru fluxuri constante putem stabili un program fix de ridicare, astfel încât stocul din curtea ta să rămână mic.",
          ],
        },
      ],
      keyPoints: [
        "Uleiul uzat este deșeu periculos (capitolul 13 al listei deșeurilor), reglementat de HG 235/2007.",
        "Nu îl amesteca cu apă, antigel, solvenți sau alte tipuri de ulei: amestecul scade șansele de valorificare și crește costul.",
        "Stochează-l în recipiente închise și etichetate, pe suprafață impermeabilă, și predă-l doar cu formular de expediție.",
      ],
      faq: [
        {
          question: "Pot preda uleiul uzat oricărei firme de colectare?",
          answer:
            "Nu. Operatorul trebuie să aibă autorizație de mediu care să includă codul exact al uleiului tău. Cere copia autorizației și verifică anexa cu coduri înainte de prima predare.",
        },
        {
          question: "Ce fac cu filtrele de ulei și cârpele îmbibate?",
          answer:
            "Sunt deșeuri periculoase separate, cu coduri proprii. Se colectează în recipiente distincte, nu împreună cu uleiul lichid, și se predau tot pe bază de formular de expediție.",
        },
        {
          question: "Există o cantitate minimă pentru ridicare?",
          answer:
            "Depinde de distanță și de frecvență. Pentru clienții cu flux constant stabilim ridicări periodice; pentru cantități mici, punctuale, contactează-ne și găsim varianta cea mai eficientă.",
        },
      ],
    },

    "copper-scrap-grades-and-prices": {
      metaTitle: "Prețul cuprului la colectare: sorturi și ce influențează prețul",
      metaDescription:
        "De ce cuprul lucios se plătește mai bine decât cel ars sau cositorit, cum se evaluează cablurile și radiatoarele și ce poți face ca să primești prețul maxim pe kg.",
      title: "Prețul cuprului la colectare: sorturi, impurități și cum obții mai mult pe kg",
      excerpt:
        "„Cât dați pe cupru?” are cel puțin cinci răspunsuri corecte. Diferența dintre ele ține de sortare, nu de negociere.",
      lead: "Cuprul este, după greutate, cel mai valoros metal care ajunge de obicei la un centru de colectare. Tocmai de aceea diferența dintre un sort și altul se simte imediat în bani. Iată cum se clasifică deșeul de cupru la recepție și ce poți face înainte de predare ca să primești prețul sortului superior.",
      sections: [
        {
          heading: "De unde vine prețul cuprului",
          body: [
            "Prețul de pornire este cotația cuprului la bursa de metale de la Londra (LME), exprimată în dolari pe tonă și convertită la cursul zilei. Din ea, fiecare colector scade costurile de procesare și transport până la topitorie și marja proprie, iar ce rămâne depinde de cât de aproape este materialul tău de cuprul pur.",
            "De aceea prețurile afișate de centrele de colectare se schimbă des, uneori de la o săptămână la alta. Un preț bun astăzi nu garantează același preț luna viitoare, iar comparațiile între colectori au sens doar pentru același sort, în aceeași zi.",
          ],
        },
        {
          heading: "Sorturile de cupru: de la lucios la amestecat",
          body: [
            "Sortul cel mai bine plătit este cuprul lucios: sârmă sau bară curată, fără izolație, fără cositor, fără oxidare puternică. Urmează cuprul curat dar oxidat sau ars, apoi cuprul cositorit, vopsit ori cu lipituri, iar la final cuprul amestecat cu alte metale — țevi cu fitinguri din alamă, bobinaje cu tole de fier.",
            "Alama și bronzul sunt aliaje ale cuprului, dar se plătesc separat și mai puțin. Un sac de cupru lucios în care s-au strecurat câteva robinete de alamă poate fi încadrat în întregime la sortul inferior, așa că merită ținute separat.",
          ],
        },
        {
          heading: "Cablurile, radiatoarele și motoarele",
          body: [
            "Cablurile cu izolație nu se plătesc ca un cupru, ci după randamentul lor: cât cupru conțin raportat la greutatea totală. Un cablu gros, de energie, are un randament mare; unul subțire, de date sau auto, mult mai mic, iar prețul pe kg reflectă exact această diferență.",
            "Radiatoarele cupru-aluminiu, motoarele electrice și transformatoarele au și ele prețuri proprii, stabilite după conținutul estimat de cupru. Noi procesăm cablurile în instalația proprie de granulare, așa că le putem evalua după cuprul real recuperat, nu după o estimare prudentă.",
          ],
        },
        {
          heading: "Cum pregătești cuprul ca să primești mai mult",
          body: [
            "Separă cuprul pe sorturi încă de la sursă: lucios, oxidat, cositorit, alamă, cabluri. Îndepărtează fitingurile de oțel, șuruburile, bucățile de plastic și pământul, care altfel se scad la cântar sau coboară tot lotul într-un sort inferior.",
            "Nu arde cablurile ca să scoți izolația. Pe lângă faptul că arderea deșeurilor este interzisă și poluează, cuprul ars se plătește mai puțin decât cel lucios, iar cablul întreg poate fi predat direct pentru procesare. Cântărirea se face la recepție, în fața ta, pe cântar verificat metrologic.",
          ],
        },
      ],
      keyPoints: [
        "Prețul pornește de la cotația LME a cuprului și scade cu cât materialul este mai departe de cuprul pur.",
        "Cuprul lucios se plătește cel mai bine; oxidat, cositorit sau amestecat coboară în sorturi inferioare.",
        "Separă alama, cablurile și cuprul curat și nu arde niciodată izolația — scade prețul și este ilegal.",
      ],
      faq: [
        {
          question: "De ce primesc mai puțin pe cabluri decât pe cupru?",
          answer:
            "Pentru că la cablu plătești și izolația, care nu are valoarea cuprului. Prețul se calculează după randamentul de cupru: cablurile groase de energie au randament mare, cele subțiri mult mai mic.",
        },
        {
          question: "Merită să dezizolez singur cablurile?",
          answer:
            "La cablurile groase, dezizolarea mecanică poate merita, pentru că obții cupru lucios. La cele subțiri, efortul rar se justifică — le procesăm noi în instalația de granulare. Arderea izolației nu este o opțiune.",
        },
        {
          question: "Cumpărați cupru și de la persoane fizice?",
          answer:
            "Da. Cântărim la recepție, în fața ta, și emitem bon de cântar pentru fiecare predare. Pentru persoane fizice este necesar actul de identitate.",
        },
      ],
    },

    "used-lead-acid-batteries": {
      metaTitle: "Acumulatori auto uzați: colectare, stocare și predare",
      metaDescription:
        "De ce acumulatorii cu plumb sunt deșeuri periculoase, cum îi stochezi fără scurgeri de acid, ce cod de deșeu au și cum îi predai unui colector autorizat.",
      title: "Acumulatori auto și industriali uzați: cum îi stochezi și cum îi predai corect",
      excerpt:
        "Un acumulator uzat este aproape în întregime reciclabil — cu condiția să ajungă întreg, cu electrolitul în el, la un colector autorizat.",
      lead: "Flotele de transport, service-urile, depozitele cu stivuitoare și orice firmă cu surse de alimentare neîntreruptibilă ajung să aibă acumulatori uzați. Plumbul, plasticul și electrolitul din ei se recuperează aproape integral, dar până atunci acumulatorul rămâne un deșeu periculos, cu reguli stricte.",
      sections: [
        {
          heading: "De ce acumulatorul cu plumb este deșeu periculos",
          body: [
            "Un acumulator plumb-acid conține plumb și compuși de plumb, toxici, și electrolit pe bază de acid sulfuric, coroziv. De aceea este încadrat la codul 16 06 01*, cu asterisc, și se gestionează după regulile deșeurilor periculoase: stocare controlată, transport cu formular de expediție, predare doar către operatori autorizați.",
            "Bateriile portabile — alcaline, litiu-ion, nichel-metal hidrură — au coduri diferite și nu se amestecă cu acumulatorii auto. Separarea pe tipuri este primul pas pentru o predare fără probleme.",
          ],
        },
        {
          heading: "Ce se recuperează dintr-un acumulator",
          body: [
            "La reciclare, acumulatorul este mărunțit, iar componentele se separă: grila și pasta de plumb merg la topire și devin plumb secundar, carcasa din polipropilenă devine granule de plastic, iar electrolitul este neutralizat sau recuperat.",
            "Rata de recuperare este foarte ridicată, motiv pentru care acumulatorii uzați au valoare la predare. Valoarea depinde însă de starea lor: un acumulator spart, din care s-a scurs acidul, este mai greu de manipulat și mai puțin valoros.",
          ],
        },
        {
          heading: "Stocarea în siguranță la firmă",
          body: [
            "Păstrează acumulatorii întregi, în poziție verticală, cu bușoanele la locul lor, pe o suprafață rezistentă la acid sau într-un recipient de colectare dedicat. Nu-i stivui direct unul peste altul fără separare și nu-i ține în bătaia ploii.",
            "Nu goli niciodată electrolitul. Acidul scurs pe sol sau în canalizare este o poluare reală și o sancțiune sigură, iar un acumulator golit nu este mai ușor de predat, ci mai greu.",
          ],
        },
        {
          heading: "Predarea și documentele",
          body: [
            "Acumulatorii uzați se predau unui operator autorizat pentru codul 16 06 01*, cu formular de expediție pentru deșeuri periculoase. Cantitatea se cântărește la recepție și intră în evidența lunară a gestiunii deșeurilor, ca orice alt cod.",
            "Preluăm acumulatori auto și industriali uzați, cu transport propriu și documentele aferente, alături de uleiurile uzate și DEEE-urile pe care un service sau o flotă le generează de obicei în paralel. O singură ridicare poate acoperi toate aceste fluxuri.",
          ],
        },
      ],
      keyPoints: [
        "Acumulatorii plumb-acid au codul 16 06 01* și sunt deșeuri periculoase.",
        "Păstrează-i întregi, verticali și cu electrolitul în ei; nu-i goli și nu-i amesteca cu bateriile portabile.",
        "Predă-i doar unui operator autorizat pentru cod, cu formular de expediție și cântărire la recepție.",
      ],
      faq: [
        {
          question: "Plătiți pentru acumulatorii uzați?",
          answer:
            "Acumulatorii plumb-acid au valoare datorită plumbului, așa că predarea poate genera o încasare. Prețul depinde de cotația plumbului și de starea acumulatorilor — contactează-ne pentru o ofertă la zi.",
        },
        {
          question: "Pot preda acumulatorii împreună cu bateriile de laptop?",
          answer:
            "În aceeași ridicare, da, dar în recipiente separate: bateriile litiu-ion au alt cod, alte riscuri (inclusiv de incendiu) și alt flux de reciclare.",
        },
        {
          question: "Ce fac cu un acumulator spart, din care curge acid?",
          answer:
            "Pune-l într-un recipient etanș rezistent la acid, absoarbe scurgerea cu material absorbant și predă-l ca atare, menționând starea lui la programare. Materialul absorbant îmbibat devine și el deșeu periculos.",
        },
      ],
    },

    "construction-and-demolition-waste": {
      metaTitle: "Deșeuri din construcții și demolări: ce se recuperează",
      metaDescription:
        "Ce deșeuri rezultă din construcții și demolări, cum le sortezi pe șantier pentru costuri mai mici, ce coduri se folosesc și ce materiale se pot vinde, nu doar elimina.",
      title:
        "Deșeuri din construcții și demolări: cum sortezi pe șantier ca să plătești mai puțin",
      excerpt:
        "Un container de moloz amestecat costă. Același volum, separat în metal, lemn și beton, poate costa mult mai puțin — sau chiar aduce bani.",
      lead: "Demolările și renovările de hale produc volume mari de deșeuri într-un timp scurt. Cea mai mare parte din ele nu este gunoi, ci material recuperabil: fier, cabluri, lemn, plastic, beton care poate deveni agregat. Diferența dintre o cheltuială și o economie se face pe șantier, prin sortare.",
      sections: [
        {
          heading: "Ce deșeuri rezultă dintr-un șantier",
          body: [
            "Deșeurile din construcții și demolări sunt grupate în capitolul 17 al listei deșeurilor. Aici găsești betonul, cărămizile și țiglele, lemnul, sticla și plasticul, metalele — fier și oțel, cupru, aluminiu —, cablurile, precum și amestecurile de deșeuri de construcții.",
            "Capitolul conține și coduri periculoase, cu asterisc: materialele cu azbest, solul contaminat, deșeurile cu gudron de huilă. Acestea se identifică înainte de demolare și se gestionează separat, de operatori autorizați special pentru ele.",
          ],
        },
        {
          heading: "De ce contează sortarea pe șantier",
          body: [
            "Un container cu deșeuri amestecate se încadrează la codul pentru amestecuri și ajunge, de regulă, la sortare sau la depozitare, ambele plătite. Aceleași materiale, separate pe șantier, au fiecare destinația lor: metalul se vinde, lemnul și plasticul se valorifică, betonul curat poate fi concasat și refolosit.",
            "Directiva-cadru europeană privind deșeurile, transpusă în România prin OUG 92/2021, stabilește o țintă de cel puțin 70% pentru pregătirea pentru reutilizare, reciclarea și valorificarea deșeurilor nepericuloase din construcții și demolări. Sortarea la sursă este singurul mod realist de a ajunge acolo.",
          ],
        },
        {
          heading: "Metalul din demolări: partea care aduce bani",
          body: [
            "Structurile metalice, armăturile, tubulatura, tabla, cablurile și instalațiile electrice sunt, de obicei, cea mai valoroasă fracție dintr-o demolare industrială. Un container separat pentru fier și altul pentru neferoase și cabluri pot acoperi o parte importantă din costul total al eliminării.",
            "Avem echipamente pentru fierul vechi voluminos — macara cu graifăr, camioane Abrollkipper, basculante de mare tonaj — și preluăm direct de pe șantier. Metalul se cântărește la recepție, iar suma se calculează pe sort.",
          ],
        },
        {
          heading: "Organizarea pe șantier și documentele",
          body: [
            "Planifică din start câte containere îți trebuie și pentru ce fracții: de regulă metal, lemn, plastic și moloz curat, plus un container pentru restul. Etichetează-le clar și explică echipelor ce merge unde — un singur sac de gunoi menajer poate compromite un container de beton curat.",
            "Fiecare transport pleacă de pe șantier cu formularul de încărcare-descărcare prevăzut de HG 1061/2008, iar cantitățile intră în evidența gestiunii deșeurilor a firmei care generează deșeul — de obicei constructorul sau beneficiarul, în funcție de contract.",
          ],
        },
      ],
      keyPoints: [
        "Deșeurile din construcții și demolări sunt în capitolul 17 al listei; materialele cu azbest și solul contaminat sunt periculoase și se gestionează separat.",
        "Un container amestecat costă; fracțiile separate — metal, lemn, plastic, moloz curat — costă mai puțin sau se vând.",
        "Metalul și cablurile din demolare pot acoperi o parte importantă din costul total al eliminării.",
      ],
      faq: [
        {
          question: "Preluați și moloz, nu doar metal?",
          answer:
            "Punem la dispoziție containere pentru metal, lemn, plastic și moloz reciclabil. Pentru moloz, condiția este să fie curat, fără gunoi menajer sau materiale periculoase amestecate.",
        },
        {
          question: "Cine trebuie să țină evidența deșeurilor de pe un șantier?",
          answer:
            "Firma care generează deșeul — de obicei constructorul sau beneficiarul lucrării, după cum stabilește contractul. Clarifică acest lucru din start, ca formularele de transport să fie emise pe numele corect.",
        },
        {
          question: "Ce fac dacă găsesc azbest la demolare?",
          answer:
            "Oprește lucrul în zona respectivă și apelează la un operator autorizat special pentru deșeuri cu azbest. Nu îl amesteca în containerele obișnuite: este periculos pentru sănătate, iar amestecul contaminează tot containerul.",
        },
      ],
    },

    "where-to-sell-scrap-metal-deva-hunedoara": {
      metaTitle: "Unde vinzi fier vechi în Deva și Hunedoara",
      metaDescription:
        "Centru de fier vechi în Deva (Cristur), pe Șoseaua Hunedoarei nr. 13: ce primim, program, cântar verificat și ridicare de la domiciliu pentru cantități mari.",
      title: "Unde vinzi fier vechi în Deva și Hunedoara: ce trebuie să știi înainte să pleci de acasă",
      excerpt:
        "Ai strâns fier vechi în curte sau în garaj? Iată unde îl poți duce în zona Deva–Hunedoara, ce să iei cu tine și cum să nu pierzi bani la cântar.",
      lead: "Fie că ai o grămadă de fier vechi rămasă după o renovare, o mașină de spălat stricată sau câteva țevi de cupru, întrebarea e aceeași: unde le duci ca să primești un preț corect? Îți spunem cum funcționează la noi, la centrul din Cristur, între Deva și Hunedoara.",
      sections: [
        {
          heading: "Unde ne găsești",
          body: [
            "Centrul nostru de colectare este pe Șoseaua Hunedoarei nr. 13, în Sat Cristur, Deva — pe drumul dintre Deva și Hunedoara, ușor de găsit și cu loc de manevră pentru mașini, remorci și camioane.",
            "Suntem deschiși de luni până vineri, între 8:00 și 17:00, și sâmbăta între 8:00 și 13:00. Dacă vii cu o cantitate mare sau cu ceva neobișnuit, sună-ne înainte, ca să fim pregătiți cu utilajul potrivit.",
          ],
        },
        {
          heading: "Ce primim",
          body: [
            "Primim fier vechi de orice fel — tablă, țevi, profile, fontă, piese de mașini, unelte stricate — și metale neferoase: cupru, alamă, aluminiu, plumb, zinc. Luăm și cabluri electrice cu izolație, acumulatori auto, electrocasnice și electronice stricate.",
            "Dacă nu știi sigur dacă un lucru se primește, fă o poză și trimite-ne-o sau sună-ne. E mai simplu decât să-l cari degeaba.",
          ],
        },
        {
          heading: "Cum se cântărește și cum se plătește",
          body: [
            "Totul se cântărește pe loc, în fața ta, pe un cântar verificat metrologic. Primești bon de cântar pentru fiecare predare, cu greutatea și tipul de metal.",
            "Prețul depinde de ce aduci: fierul vechi are un preț, cuprul altul, aluminiul altul. Dacă le aduci amestecate, totul se plătește la prețul celui mai ieftin, așa că merită să le separi acasă.",
          ],
        },
        {
          heading: "Ai multă marfă? Venim noi după ea",
          body: [
            "Pentru firme sau pentru cantități mari — o hală golită, o construcție demolată, un utilaj vechi — venim noi cu camionul și cu macaraua cu graifăr, oriunde în județul Hunedoara și nu numai.",
            "Ne spui ce ai și cam cât, iar noi îți spunem când putem veni. Cântărirea se face la noi, la centru, și primești toate actele.",
          ],
        },
      ],
      keyPoints: [
        "Centrul nostru e în Cristur, Deva, pe Șoseaua Hunedoarei nr. 13 — luni–vineri 8–17, sâmbătă 8–13.",
        "Primim fier vechi, cupru, alamă, aluminiu, cabluri, acumulatori și electrocasnice stricate.",
        "Separă metalele acasă: amestecate, se plătesc la prețul celui mai ieftin.",
      ],
      faq: [
        {
          question: "Cumpărați fier vechi și de la persoane fizice?",
          answer:
            "Da. Vii cu buletinul, cântărim pe loc și primești banii împreună cu bonul de cântar.",
        },
        {
          question: "Veniți să ridicați fierul vechi de acasă?",
          answer:
            "Pentru cantități mari, da — avem camioane și macara cu graifăr. Pentru câteva bucăți, de obicei e mai simplu să le aduci tu la centru.",
        },
        {
          question: "Cât dați pe kilogramul de fier vechi?",
          answer:
            "Prețul se schimbă des, după piața metalelor. Sună-ne în ziua în care vrei să vii și îți spunem prețul la zi pentru ce ai.",
        },
      ],
    },

    "documents-needed-to-sell-scrap-metal": {
      metaTitle: "Ce acte îți trebuie ca să vinzi fier vechi",
      metaDescription:
        "Ce acte trebuie să ai când vinzi fier vechi ca persoană fizică sau ca firmă, de ce suma primită e mai mică decât prețul brut și ce nu se poate preda la fier vechi.",
      title: "Ce acte îți trebuie ca să vinzi fier vechi (persoană fizică sau firmă)",
      excerpt:
        "Pentru o persoană fizică, de obicei e suficient buletinul. Pentru o firmă, lucrurile stau puțin diferit. Iată ce să iei cu tine.",
      lead: "Mulți oameni vin la fier vechi și află abia la cântar că le lipsește un act sau că nu pot preda un anumit obiect. Ca să nu faci drumul de două ori, iată ce îți trebuie, explicat simplu.",
      sections: [
        {
          heading: "Dacă ești persoană fizică",
          body: [
            "Ai nevoie de actul de identitate — buletinul sau cartea de identitate. Centrul de colectare este obligat să înregistreze cine predă metalul, așa că fără act nu se poate face predarea.",
            "Pentru fiecare predare primești un bon de cântar cu greutatea și tipul de metal. Păstrează-l: este dovada că ai predat legal materialul.",
          ],
        },
        {
          heading: "De ce primești mai puțin decât prețul brut",
          body: [
            "Când vinzi fier vechi ca persoană fizică, centrul de colectare reține din suma brută impozitul pe venit și contribuția la Fondul pentru mediu, așa cum prevede legea. De aceea suma pe care o primești în mână este mai mică decât prețul brut.",
            "Când compari prețurile între centre, întreabă întotdeauna dacă prețul spus este brut sau net. Altfel poți compara două lucruri diferite.",
          ],
        },
        {
          heading: "Dacă vinzi în numele unei firme",
          body: [
            "O firmă predă fierul vechi pe bază de documente: un aviz sau o factură, iar transportul se face cu formularul de încărcare-descărcare a deșeurilor. Plata se face prin bancă, nu cash.",
            "Dacă firma ta generează fier vechi constant, merită un contract cu un colector autorizat: ridicări programate, documente lunare și prețuri clare.",
          ],
        },
        {
          heading: "Ce nu poți preda la fier vechi",
          body: [
            "Nu se primesc obiecte care par furate sau care aparțin domeniului public: capace de canal, indicatoare rutiere, șine de cale ferată, cabluri de telecomunicații sau de curent tăiate de pe stâlpi, grilaje de la morminte. Centrele de colectare au obligația să le refuze și să anunțe poliția.",
            "Butelii de gaz, recipiente sub presiune sau cu resturi de chimicale nu se aduc așa cum sunt, pentru că sunt periculoase. Sună-ne înainte și îți spunem cum se pot preda în siguranță.",
          ],
        },
      ],
      keyPoints: [
        "Persoanele fizice au nevoie doar de buletin; primesc bon de cântar la fiecare predare.",
        "Din suma brută se rețin impozitul și contribuția la Fondul pentru mediu — întreabă mereu de prețul net.",
        "Capacele de canal, indicatoarele, cablurile de pe stâlpi și buteliile nu se primesc.",
      ],
      faq: [
        {
          question: "Pot vinde fier vechi fără buletin?",
          answer:
            "Nu. Centrul de colectare trebuie să înregistreze identitatea celui care predă, așa că actul de identitate este obligatoriu.",
        },
        {
          question: "Pot vinde fier vechi pentru altcineva, de exemplu pentru un vecin?",
          answer:
            "Predarea se face pe numele tău, cu buletinul tău, iar tu răspunzi pentru proveniența materialului. Ai grijă ce aduci în numele altcuiva.",
        },
        {
          question: "Primesc banii pe loc?",
          answer:
            "Persoanele fizice primesc banii pe loc, după cântărire. Firmele primesc plata prin transfer bancar, pe baza documentelor.",
        },
      ],
    },

    "what-you-can-sell-as-scrap-metal": {
      metaTitle: "Ce poți duce la fier vechi: listă practică",
      metaDescription:
        "Listă simplă cu ce se primește la fier vechi: din casă, din curte, din garaj și din atelier. Plus ce merită separat ca să primești mai mulți bani.",
      title: "Ce poți duce la fier vechi: listă practică pentru casă, curte și garaj",
      excerpt:
        "Calorifere vechi, o bicicletă ruginită, țevi, tablă, o mașină de spălat stricată — multe lucruri pe care le-ai arunca se pot vinde la kilogram.",
      lead: "Înainte să arunci ceva metalic, verifică lista de mai jos. Multe obiecte din casă și din curte au valoare la fier vechi, iar unele — cele din cupru, alamă sau aluminiu — valorează de câteva ori mai mult decât fierul obișnuit.",
      sections: [
        {
          heading: "Din casă",
          body: [
            "Calorifere din fontă sau din tablă, cazane și boilere vechi, oale și tigăi, tacâmuri, mobilier metalic, paturi și scaune cu cadru metalic, rafturi metalice. Toate se primesc ca fier vechi.",
            "Electrocasnicele stricate — mașini de spălat, frigidere, aragazuri, cuptoare cu microunde — se primesc și ele, dar ca deșeuri electrice și electronice, separat de fierul vechi. Nu le demonta tu: mai ales frigiderele conțin gaze care nu trebuie eliberate.",
          ],
        },
        {
          heading: "Din curte și din garaj",
          body: [
            "Garduri și porți vechi, plasă de sârmă, tablă de pe acoperiș, țevi de apă, biciclete, roabe, unelte stricate, jante de oțel fără cauciuc, piese de mașină, motoare de mașini de tuns iarba.",
            "Acumulatorul vechi de la mașină se primește și el, dar pune-l separat și nu-l goli de lichid: acidul din el este periculos.",
          ],
        },
        {
          heading: "Ce valorează mai mult: neferoasele",
          body: [
            "Cuprul (țevi de cupru, sârmă de cupru, bobinaje), alama (robinete, clanțe, fitinguri galbene), aluminiul (profile de geam, jante de aluminiu, oale, doze) și plumbul se plătesc mult mai bine decât fierul vechi.",
            "De aceea merită să le pui în saci separați. Un robinet de alamă aruncat printre fiare se plătește la preț de fier — deci pierzi bani fără să-ți dai seama.",
          ],
        },
        {
          heading: "Cablurile electrice",
          body: [
            "Cablurile vechi de curent, prelungitoarele stricate și cablurile de la electrocasnice se primesc cu tot cu izolație. Se plătesc după cât cupru sau aluminiu au în ele: cablurile groase mai bine, cele subțiri mai puțin.",
            "Nu le arde ca să scoți plasticul. Este interzis, poluează și, în plus, cuprul ars se plătește mai prost decât cablul întreg. Noi avem instalație proprie care separă cuprul de plastic.",
          ],
        },
      ],
      keyPoints: [
        "Calorifere, țevi, tablă, garduri, biciclete, unelte și piese de mașină — toate se primesc la fier vechi.",
        "Cuprul, alama, aluminiul și plumbul valorează mult mai mult — pune-le separat.",
        "Electrocasnicele, acumulatorii și cablurile se primesc, dar separat și fără să le demontezi sau să le arzi.",
      ],
      faq: [
        {
          question: "Primiți frigidere și mașini de spălat?",
          answer:
            "Da, ca deșeuri electrice și electronice. Adu-le întregi, fără să scoți compresorul sau alte piese.",
        },
        {
          question: "Se primesc conservele și dozele?",
          answer:
            "Dozele de aluminiu da, și se plătesc mai bine decât fierul. Conservele din tablă se primesc ca fier vechi ușor, dar în cantități mici valorează puțin.",
        },
        {
          question: "Trebuie să curăț fierul vechi înainte?",
          answer:
            "Nu trebuie să fie lustruit, dar scoate pe cât posibil lemnul, plasticul, cauciucul și pământul. Ce nu e metal se scade la cântar.",
        },
      ],
    },

    "aluminium-cans-scrap-value": {
      metaTitle: "Doze de aluminiu la fier vechi: merită să le strângi?",
      metaDescription:
        "Cât valorează dozele de aluminiu, cum le strângi ca să ocupe puțin loc, cum le deosebești de cele din tablă și unde le predai în zona Deva–Hunedoara.",
      title: "Doze de aluminiu la fier vechi: merită să le strângi și cum le predai",
      excerpt:
        "O doză cântărește foarte puțin, dar un sac plin se adună repede. Iată când merită și cum să le pregătești.",
      lead: "Dozele de suc și de bere sunt din aluminiu, un metal care se reciclează la nesfârșit fără să-și piardă calitatea. Pentru tine, asta înseamnă că nu sunt gunoi, ci material care se vinde la kilogram. Nu te îmbogățești din ele, dar nici nu le arunca.",
      sections: [
        {
          heading: "Cât de mult trebuie să strângi",
          body: [
            "O doză goală de 0,5 l cântărește în jur de 15 grame. Asta înseamnă că pentru un kilogram îți trebuie aproximativ 60–70 de doze.",
            "Pentru o familie, sunt câteva luni de strâns. Pentru un bar, un restaurant sau o firmă de evenimente, dozele se adună într-o săptămână — iar acolo chiar merită să le predai regulat.",
          ],
        },
        {
          heading: "Cum le deosebești de dozele de tablă",
          body: [
            "Cele mai multe doze de băuturi sunt din aluminiu, dar există și unele din tablă de oțel. Testul e simplu: apropie un magnet. Dacă se lipește, e tablă de oțel și se plătește ca fier vechi; dacă nu, e aluminiu.",
            "Conservele de mâncare (fasole, pateu, pește) sunt de obicei din tablă de oțel, deci pune-le separat de dozele de aluminiu.",
          ],
        },
        {
          heading: "Cum le strângi ca să ocupe puțin loc",
          body: [
            "Clătește-le rapid, ca să nu atragă insecte, și turtește-le cu piciorul. Turtite, încap de câteva ori mai multe într-un sac.",
            "Nu le amesteca cu sticle de plastic, hârtie sau resturi de mâncare. Dozele curate și separate se plătesc la prețul aluminiului; un sac amestecat se plătește mai puțin sau deloc.",
          ],
        },
        {
          heading: "Unde le predai",
          body: [
            "Le poți aduce la centrul nostru din Cristur, Deva, pe Șoseaua Hunedoarei nr. 13. Le cântărim pe loc și primești banii și bonul de cântar.",
            "Dacă ai un bar, un restaurant sau o firmă care strânge doze în cantitate mare, putem stabili ridicări regulate cu container sau saci mari.",
          ],
        },
      ],
      keyPoints: [
        "Ai nevoie de aproximativ 60–70 de doze pentru un kilogram de aluminiu.",
        "Testul cu magnetul: dacă se lipește, e tablă de oțel, nu aluminiu.",
        "Turtește-le, ține-le curate și separate de plastic și hârtie.",
      ],
      faq: [
        {
          question: "Se plătesc dozele mai bine decât fierul vechi?",
          answer:
            "Da, aluminiul se plătește de câteva ori mai bine decât fierul obișnuit pe kilogram. Doar că dozele sunt foarte ușoare, deci îți trebuie multe.",
        },
        {
          question: "Ce fac cu dozele care au garanție SGR?",
          answer:
            "Dozele cu simbolul de garanție SGR se returnează la magazin, unde primești înapoi garanția. Pentru ele, varianta asta e mai avantajoasă decât vânzarea la kilogram.",
        },
        {
          question: "Trebuie să scot inelul de la doză?",
          answer:
            "Nu. Inelul e tot din aluminiu și rămâne pe doză.",
        },
      ],
    },

    "how-to-tell-copper-brass-aluminium-apart": {
      metaTitle: "Cum deosebești cuprul, alama, aluminiul și fierul",
      metaDescription:
        "Teste simple cu magnet, culoare și greutate ca să recunoști cuprul, alama, aluminiul, plumbul și fierul vechi — și să nu le vinzi pe toate la prețul fierului.",
      title: "Cum deosebești cuprul, alama, aluminiul și fierul vechi: teste simple acasă",
      excerpt:
        "Un magnet și puțină atenție la culoare îți pot aduce mai mulți bani la fier vechi. Iată cum recunoști fiecare metal.",
      lead: "La centrul de colectare, fiecare metal are prețul lui. Dacă aduci totul amestecat, cuprul și alama ajung plătite ca fier. Cu câteva teste simple, făcute acasă, poți separa metalele și poți primi prețul corect pentru fiecare.",
      sections: [
        {
          heading: "Primul test: magnetul",
          body: [
            "Ia un magnet de frigider și apropie-l de metal. Dacă se lipește puternic, este fier sau oțel — fier vechi obișnuit. Dacă nu se lipește deloc, ai un metal neferos: cupru, alamă, aluminiu, plumb sau inox.",
            "Acest singur test te ajută să separi rapid grămada în două: ce se plătește ca fier și ce merită pus deoparte.",
          ],
        },
        {
          heading: "Cuprul și alama: după culoare",
          body: [
            "Cuprul are o culoare roșiatică, arămie. Când e vechi, se închide la culoare spre maro sau capătă pete verzi. Îl găsești în țevi de instalații, sârmă din cabluri și bobinaje de motoare.",
            "Alama este galbenă, aurie. O găsești în robinete, clanțe, fitinguri, bucșe și cartușe. E mai grea decât pare și nu se lipește de magnet. Pune-le separat: cuprul se plătește mai bine decât alama.",
          ],
        },
        {
          heading: "Aluminiul și plumbul: după greutate",
          body: [
            "Aluminiul este argintiu și foarte ușor. Profilele de geam, jantele de aluminiu, oalele vechi, dozele și radiatoarele de la mașini sunt de obicei din aluminiu. Dacă iei în mână o bucată mare și e surprinzător de ușoară, probabil e aluminiu.",
            "Plumbul este gri-închis, foarte greu și moale — îl poți zgâria ușor cu o cheie. Îl găsești în greutăți de echilibrare, plăci vechi și acumulatori. Spală-te pe mâini după ce îl atingi.",
          ],
        },
        {
          heading: "Inoxul și piesele amestecate",
          body: [
            "Inoxul arată ca oțelul, dar de obicei nu se lipește de magnet sau se lipește foarte slab. Îl găsești în chiuvete, oale și echipamente de bucătărie. Pune-l separat și întreabă-ne de preț.",
            "Multe obiecte sunt amestecate: un robinet de alamă cu mâner de oțel, un motor cu carcasă de fier și bobinaj de cupru. Dacă se pot desface ușor, desfă-le. Dacă nu, adu-le așa și le evaluăm noi la cântar.",
          ],
        },
      ],
      keyPoints: [
        "Magnetul se lipește = fier sau oțel. Nu se lipește = neferos, care valorează mai mult.",
        "Roșiatic = cupru, galben-auriu = alamă, argintiu și ușor = aluminiu, gri și foarte greu = plumb.",
        "Separă-le în saci diferiți înainte să vii la cântar.",
      ],
      faq: [
        {
          question: "Care metal se plătește cel mai bine?",
          answer:
            "De obicei cuprul curat, apoi alama, apoi aluminiul. Fierul vechi obișnuit se plătește cel mai puțin pe kilogram, dar se adună în cantități mari.",
        },
        {
          question: "Cum îmi dau seama dacă o țeavă e din cupru sau doar vopsită?",
          answer:
            "Zgârie ușor suprafața cu o cheie sau cu o pilă. Dacă dedesubt e roșiatic, e cupru. Dacă apare gri și se lipește magnetul, e oțel vopsit.",
        },
        {
          question: "Nu sunt sigur ce metal am. Ce fac?",
          answer:
            "Adu-l la centru sau trimite-ne o poză. Îl verificăm la recepție și îți spunem ce este și cât valorează.",
        },
      ],
    },
  },
} as const;
