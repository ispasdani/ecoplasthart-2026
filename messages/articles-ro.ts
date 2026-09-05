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
  },
} as const;
