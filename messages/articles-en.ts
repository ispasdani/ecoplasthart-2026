/**
 * English article copy. Mirrors `articles-ro.ts` exactly — same keys, same
 * array lengths — because `en.ts` is typed as `Messages`, which is derived
 * from the Romanian dictionary.
 *
 * The legal references stay Romanian (HG 856/2002, HG 1061/2008, OUG
 * 92/2021): the audience for the English pages is the environmental or
 * procurement contact of a foreign group operating in Romania, and they need
 * the actual Romanian instrument names to find them.
 */
export const articlesEn = {
  eyebrow: "Resources",
  title: "Articles & guides",
  lead: "Practical guides on collecting, coding, transporting and recycling industrial waste — written by the team that does it every day at the Cristur yard.",
  metaTitle: "Waste management articles and guides",
  metaDescription:
    "Practical guides on collecting, coding, transporting and recycling industrial waste in Romania, from the Ecoplast Hart team.",

  latestHeading: "Latest",
  topicsHeading: "Topics",
  filteredBy: "Filtered by",
  clearFilter: "Clear filter",
  empty: "No articles on this topic yet.",
  readArticle: "Read",
  moreArticles: "More articles",
  backToArticles: "All articles",

  authorLabel: "Author",
  dateLabel: "Published",
  updatedLabel: "Updated",
  readLabel: "Length",
  readTime: "{minutes} min read",

  keyPointsHeading: "In short",
  faqHeading: "Frequently asked questions",
  disclaimer:
    "This article is informational and reflects our practice at the date of publication. Romanian environmental legislation changes frequently — for your company's specific situation, check the texts in force and consult the environmental protection agency or a specialist adviser.",

  author: {
    name: "The Ecoplast Hart team",
    role: "Operations & compliance",
  },

  topics: {
    legislation: "Regulation",
    recycling: "Recycling",
    costs: "Costs",
    guides: "Guides",
  },

  items: {
    "choosing-a-waste-collection-partner": {
      metaTitle: "How to choose a waste collection company",
      metaDescription:
        "Environmental permit, accepted waste codes, traceability paperwork and in-house transport: what to check before signing a waste collection contract.",
      title:
        "How to choose a waste collection company: what to check before you sign",
      excerpt:
        "Price per tonne is the last criterion that matters. Before it come the permit, the accepted codes, and the paperwork you get on every pickup.",
      lead: "Responsibility for a waste stream does not leave with the truck. If your operator is not permitted for that particular code, or cannot document where the material went, the problem stays with your company. Here is what we check ourselves when we take on a new account — and what is worth checking on your side.",
      sections: [
        {
          heading: "The environmental permit, and the codes it was issued for",
          body: [
            "Any operator that collects, temporarily stores or treats waste needs an environmental permit issued by the county environmental protection agency. That document is not a certificate of existence: its annexes list exactly which waste codes the operator may accept and which operations it may perform on them.",
            "Ask for a copy and look for your own code in it. A company permitted for 15 01 01 — paper and cardboard packaging — may not take your used oil, however attractive the price. Check the expiry date too: an expired permit turns every pickup into a non-conformity at the first inspection.",
          ],
        },
        {
          heading: "What happens to the material once it leaves your yard",
          body: [
            "Collection is only the first step of the waste hierarchy. The useful question is what comes next: is the material sorted and recovered, or simply transferred to another intermediary who eventually sends it to landfill?",
            "An operator that sorts and processes on its own site can show you where each fraction ends up. We sort, bale and process cables at the Cristur yard, which removes at least one intermediary from the chain — and the price then reflects the real value of the material rather than the margin of a line of resellers.",
          ],
        },
        {
          heading: "The paperwork you get on every pickup",
          body: [
            "For every non-hazardous waste movement, what matters is the loading–unloading form required by HG 1061/2008, filled in correctly, with the weighed quantity and the waste code. For hazardous waste the conversation moves to the consignment form and to prior approval of the transport.",
            "These documents are the basis of the waste records your company keeps under HG 856/2002 and of the annual report in the Integrated Environmental System. If an operator tells you it can all be sorted out without the paperwork, you are the one who pays for that shortcut at the next inspection.",
          ],
        },
        {
          heading: "Logistics, the weighbridge, and response time",
          body: [
            "A good contract states concretely which containers you get, how often they are emptied, how quickly an extra request is answered, and how the material is weighed. An operator with its own fleet — roll-off trucks, tippers, a grab crane — controls its own schedule; one that subcontracts transport passes somebody else's delays on to you.",
            "Insist on a calibrated weighbridge and a weight ticket on every intake. The difference between a visual estimate and a documented weighing shows up on the invoice month after month, and with scrap metal it shows up fast.",
          ],
        },
      ],
      keyPoints: [
        "Ask for the environmental permit and find your exact waste code in its annexes.",
        "An operator that sorts and processes on its own site shortens the chain and pays the material at its real value.",
        "The loading–unloading form and the weight ticket are not bureaucracy — they are your evidence at an inspection.",
      ],
      faq: [
        {
          question:
            "Am I still responsible for my waste after the carrier collects it?",
          answer:
            "Yes, for as long as you cannot prove you handed it to an operator permitted for that code, with the transport paperwork completed. Documented traceability is precisely what transfers responsibility.",
        },
        {
          question: "Which documents should I be left with after each pickup?",
          answer:
            "The loading–unloading form — or the consignment form, for hazardous waste — the weight ticket, and at month end a summary of quantities by code for your waste records.",
        },
        {
          question:
            "Does it matter whether the collector has its own sorting facility?",
          answer:
            "It matters in two places: price, because the intermediaries' margin disappears, and traceability, because the operator can show where each fraction went instead of pointing at another collector.",
        },
      ],
    },

    "waste-codes-and-transport-documents": {
      metaTitle: "Waste codes and transport documents",
      metaDescription:
        "How to pick the right waste code from the HG 856/2002 list, which forms HG 1061/2008 requires for transport, and how to keep your waste records.",
      title:
        "Waste codes and transport documents: a practical guide for waste generators",
      excerpt:
        "Six digits and an asterisk decide which paperwork you need, who may collect your material, and how you report at year end.",
      lead: "Most waste non-conformities do not come from bad faith. They come from one wrong classification, made once and then repeated for months. The waste code is where everything else starts: the permit your collector needs, the transport forms, the storage conditions and the annual report.",
      sections: [
        {
          heading: "How the waste code list is built",
          body: [
            "The European List of Waste, transposed into Romanian law by HG 856/2002 and updated by Decision 2014/955/EU, organises waste into chapters, either by the activity that generates it or by the type of material. The code has six digits: the first two give the chapter, the next two the sub-chapter, the last two the waste itself.",
            "Codes marked with an asterisk are hazardous, and that asterisk changes everything: storage regime, transport documents, which operators may accept the material. Two neighbouring entries can look almost identical and be handled completely differently — a lead-acid battery and an alkaline battery are the classic example.",
          ],
        },
        {
          heading: "Choosing the right code",
          body: [
            "The practical rule: start from the chapters that describe the process which generated the waste, and only if nothing fits there drop down to chapter 16, \"wastes not otherwise specified\". Codes ending in 99 are the last option, not the first — at an inspection they read as a sign that no real classification was done.",
            "For mirror entries — the same material with and without an asterisk, depending on the hazardous substances it contains — classification follows composition, not appearance. An emptied metal container that held paint or solvent does not belong with clean metal packaging, and the safety data sheet of the original product is where the distinction starts.",
          ],
        },
        {
          heading: "Transport documents",
          body: [
            "For non-hazardous waste, HG 1061/2008 requires the loading–unloading form, completed in copies for the consignor, the carrier and the consignee. Without it, a shipment stopped in traffic becomes a problem for all three.",
            "For hazardous waste the same act imposes a consignment form and a prior transport approval procedure involving the environmental agencies concerned. This is the step that most often catches out companies making their first shipment of used oil or contaminated packaging: the transport cannot be arranged the same day.",
          ],
        },
        {
          heading: "Records and annual reporting",
          body: [
            "The generating company keeps waste records by code, with quantities and destination, under HG 856/2002. In practice that means a monthly consolidation of weight tickets and transport forms — far easier to keep current than to reconstruct in January.",
            "The data is reported annually in the National Environmental Protection Agency's Integrated Environmental System. If your collector sends you a monthly summary by code, reporting is a formality; if it does not, reporting becomes archaeology through invoices.",
          ],
        },
      ],
      keyPoints: [
        "The code has six digits; the asterisk moves it into the hazardous regime, with different paperwork and different permitted operators.",
        "Codes ending in 99 are the classification of last resort, not the first choice.",
        "Hazardous waste transport needs prior approval — it is planned, not dispatched on the spot.",
      ],
      faq: [
        {
          question: "What does the asterisk next to a waste code mean?",
          answer:
            "That the waste is classified as hazardous. Storage conditions, transport forms, the permit the collector needs and the way the quantity is reported all change.",
        },
        {
          question: "Who fills in the loading–unloading form?",
          answer:
            "It is completed at loading and signed by the consignor, the carrier and the consignee, each keeping a copy for their own records.",
        },
        {
          question: "What if I cannot find a code that fits my waste?",
          answer:
            "Search again in the chapter describing the process that generated it, then in chapter 16. If nothing still fits, agree the classification with your permitted operator and the environmental agency before the first shipment.",
        },
      ],
    },

    "scrap-metal-prices-explained": {
      metaTitle: "How scrap metal prices are set",
      metaDescription:
        "Exchange quotations, sorting quality, contamination deductions and haulage cost: what the price per tonne of ferrous and non-ferrous scrap is actually made of.",
      title: "How scrap metal and metal waste prices are actually set",
      excerpt:
        "The price per tonne is not an arbitrary number. It is the metal quotation, the sorting quality, the contamination deducted at intake, and the cost of the run.",
      lead: "Two quotes can look very different on paper and land at the same figure on the invoice — or the other way round. Once you understand what a scrap price is made of, you can compare offers properly and, more usefully, influence the part that depends on you.",
      sections: [
        {
          heading: "Where the price starts",
          body: [
            "The price paid for a recyclable metal is not decided at the yard gate. It starts from international quotations — the London metal exchange for copper, aluminium, lead, zinc and nickel, and regional indices for ferrous scrap — with a discount applied on top to cover processing, haulage and quality risk.",
            "That is why the price moves weekly, sometimes daily, and why an offer that is \"valid indefinitely\" should give you pause. What can be stable is the formula: the public reference, the discount applied, and the intake conditions.",
          ],
        },
        {
          heading: "Sorting quality makes the difference",
          body: [
            "Clean metal, sorted by type and stripped of non-metallic attachments, sits close to the reference quotation. The same metal mixed with other fractions drops into a lower grade, because somebody will have to do the sorting in your place — and that cost comes out of your price.",
            "The gap is widest in non-ferrous. Clean copper, aluminium profile and sorted brass are paid substantially better than a mixed non-ferrous lot. In ferrous scrap what counts is plate thickness, piece size, and whether the material goes into a container without further preparation.",
          ],
        },
        {
          heading: "Contamination and tare",
          body: [
            "Intake means weighing and assessment. Tare — the container, the pallet, the empty vehicle — and contamination such as soil, water, concrete, wood, plastic and insulation are deducted from the gross weight. A wet or soil-laden load of ferrous scrap loses real percentage points at intake, and the conversation is much easier when the weighing and the assessment are documented.",
            "Ask every time for a weight ticket showing gross, tare and net, plus a note of the contamination deducted. It is the only sound basis for comparing two offers: a higher headline price with an aggressive deduction can end up below a lower headline price with a fair intake.",
          ],
        },
        {
          heading: "Logistics and a steady flow",
          body: [
            "Haulage is paid per run, not per tonne, so a container that leaves half empty pushes that cost into the price per tonne. Density matters: baled sheet and material cut to size fill a container far more efficiently than bulky pieces.",
            "Consistency matters just as much. A predictable flow, with scheduled pickups and material ready at the agreed time, supports a better price than an occasional collection, because the logistics can be planned. That is usually where the difference between two seemingly identical offers actually lives.",
          ],
        },
      ],
      keyPoints: [
        "The price starts from public quotations, with a discount applied for processing, haulage and quality risk.",
        "Sorting by type and removing non-metallic attachments is the fastest way to raise what you are paid.",
        "A weight ticket showing gross, tare and net is the only fair basis for comparing two offers.",
      ],
      faq: [
        {
          question: "Why does the scrap price change from one week to the next?",
          answer:
            "Because it tracks international metal quotations and mill demand. Serious offers are given for a stated period, not open-endedly.",
        },
        {
          question: "How much do I lose by handing over unsorted material?",
          answer:
            "It depends on the mix, but in non-ferrous the gap between material sorted by type and a mixed lot is substantial, because the sorting has to happen anyway — just at somebody else's cost.",
        },
        {
          question: "What is tare and how is it determined?",
          answer:
            "It is the weight of the container or of the empty vehicle, deducted from the gross. It is established by weighing before or after unloading, and the figure must appear on the weight ticket alongside gross and net.",
        },
      ],
    },

    "cable-recycling-copper-granules": {
      metaTitle: "Cable recycling: copper and aluminium granules",
      metaDescription:
        "How end-of-life electrical cable is processed: granulation, screening and density separation into copper and aluminium granules as secondary raw material.",
      title: "Recycling electrical cable: from waste to copper granules",
      excerpt:
        "An end-of-life cable is a composite material. Its real value only appears once the conductor is mechanically separated from the insulation.",
      lead: "Electrical cable is one of the few industrial waste streams where the difference between \"handed over as is\" and \"properly processed\" is measured directly in money. Here is what happens inside the Cristur plant, and what you can do at source so the material reaches its value.",
      sections: [
        {
          heading: "What goes into the plant",
          body: [
            "From a recycling point of view, an end-of-life cable is a composite: a copper or aluminium conductor, PVC or polyolefin insulation, sometimes screening, steel armour and filler. The value is in the conductor, but recovering it clean depends on how well everything else separates.",
            "We process overhead and underground network cable, industrial cable, automotive harnesses and cable from electrical and electronic equipment. Each type has a different metal-to-insulation ratio, and that ratio is what sets the price per tonne of raw cable at intake.",
          ],
        },
        {
          heading: "Granulation, separation, granules",
          body: [
            "The mechanical process starts with staged granulation, reducing the cable to fragments a few millimetres across and breaking the physical bond between conductor and insulation. Screening by particle size follows, then density separation — on a shaking table or in an air stream — which exploits the large density difference between metal and polymer.",
            "The output is high-purity copper or aluminium granules, ready to go straight to melting, plus a plastic fraction that is recovered separately. The process is purely mechanical: nothing is burned. Burning insulation is both illegal and a source of emissions that no amount of metal recovery justifies.",
          ],
        },
        {
          heading: "Why granules rather than raw cable",
          body: [
            "Cable sold as it comes is paid at a price that prices in uncertainty: the buyer does not know exactly how much metal will come out of it, so the risk is covered in the offer. Granules are a specified product — metal type, purity, particle size — and trade close to the metal quotation.",
            "For a company generating waste cable, that means the value is recovered where the processing happens. With our own plant at Cristur, the difference stays in the chain instead of stopping at an intermediary, and it can show up in the intake price.",
          ],
        },
        {
          heading: "Preparing cable for collection",
          body: [
            "Separate cable into broad categories — copper versus aluminium, power cable versus thin data harnesses — and keep it free of soil, concrete and water. There is no need to strip it: the plant does that better, faster and without the metal loss that manual stripping causes.",
            "Empty drums, steel armour and metal fittings go separately, as ferrous scrap. And if the quantity justifies a container, schedule the pickup together with the right container, so you are not paying haulage for air.",
          ],
        },
      ],
      keyPoints: [
        "Cable is a composite: its real value only shows once the conductor is separated from the insulation.",
        "Processing is purely mechanical — granulation, screening, density separation. Burning insulation is illegal and destroys value.",
        "Granules are a specified product priced close to the metal quotation; raw cable is priced with an uncertainty discount.",
      ],
      faq: [
        {
          question: "Do I need to strip the cable before handing it over?",
          answer:
            "No. The plant separates conductor from insulation with smaller losses than any manual stripping, and the time spent stripping is rarely recovered in the price.",
        },
        {
          question: "What happens to the plastic that comes out?",
          answer:
            "The PVC and polyolefin fraction produced by separation is recovered separately as secondary raw material — it is not disposed of.",
        },
        {
          question: "Can steel-armoured cable be processed too?",
          answer:
            "Yes. The armour is separated during the process and recovered as ferrous scrap, while the conductor follows the normal route to granulation.",
        },
      ],
    },

    "hazardous-waste-obligations": {
      metaTitle: "Hazardous waste: what companies must do",
      metaDescription:
        "Used oils, contaminated packaging, batteries, WEEE: how to identify hazardous waste, how to store it, and what paperwork its transport requires.",
      title:
        "Hazardous waste in industry: what your company must do, and how to cover it",
      excerpt:
        "Most industrial companies generate hazardous waste without calling it that. An honest inventory is the first obligation, and the cheapest one.",
      lead: "A drum of used oil left beside the production hall and an emptied solvent can are, legally, the same class of problem. The hazardous waste regime has its own rules for storage, transport and reporting — and the difference between a prepared company and a surprised one comes down to a handful of layout decisions.",
      sections: [
        {
          heading: "What makes a waste hazardous",
          body: [
            "A waste is hazardous if it displays at least one of the hazard properties defined at European level — flammable, toxic, corrosive, ecotoxic and so on. In the code list these are the entries marked with an asterisk, and OUG 92/2021 on the waste regime sets out the management rules.",
            "In practice most industrial companies generate hazardous waste without calling it that: used machine oil, packaging that held paint, adhesive or solvent, contaminated wipes and absorbents, lead-acid batteries, fluorescent tubes. The first obligation is an honest inventory of the streams.",
          ],
        },
        {
          heading: "Temporary storage at the generator",
          body: [
            "Until collection, hazardous waste is stored separately by type, in labelled containers, in a marked, covered area with spill containment for liquids. Mixing two hazardous streams, or a hazardous one with a non-hazardous one, is prohibited — and turns the whole quantity into hazardous waste.",
            "The label must state the waste code and the hazard properties, and the area must be reachable for loading without crossing production space. These are small things, settled in a day at the layout stage, that get raised at inspections for years.",
          ],
        },
        {
          heading: "Transport: prior approval and the consignment form",
          body: [
            "Unlike non-hazardous waste, hazardous waste cannot be shipped on the spot. HG 1061/2008 provides for a prior transport approval procedure, with a consignment form and notification of the environmental protection agencies concerned, on top of ADR requirements where the material falls under dangerous goods transport.",
            "The practical consequence is simple: plan. A shipment of used oil or contaminated packaging is arranged days in advance, not on the day the drum fills up. An operator that handles these streams routinely prepares the documentation in parallel with scheduling the transport.",
          ],
        },
        {
          heading: "Records, reporting, and what to ask of your operator",
          body: [
            "Quantities generated, stored and handed over go into the waste records and are reported annually in the Integrated Environmental System. Special streams — used oils, batteries and accumulators, WEEE, packaging — carry their own dedicated legislation on top, each with its own obligation to hand over to permitted operators.",
            "Ask your collector for three things: an environmental permit that explicitly covers your hazardous codes, complete transport documents on every shipment, and confirmation of the treatment operation applied. With those three on file, a hazardous waste inspection becomes a formality.",
          ],
        },
      ],
      keyPoints: [
        "The asterisk in the code and the hazard properties decide the regime; a correct inventory of streams is the first obligation.",
        "Separate storage, labelled containers, a bunded area — mixing streams turns everything into hazardous waste.",
        "Transport requires prior approval and a consignment form: it is planned, not improvised.",
      ],
      faq: [
        {
          question: "Is used machine oil hazardous waste?",
          answer:
            "Yes. Used oils appear in the code list with entries marked as hazardous and must go to operators permitted for those codes, with the corresponding transport documents.",
        },
        {
          question:
            "Can I store several types of hazardous waste in the same container?",
          answer:
            "No. Mixing categories is prohibited, and the result is handled entirely as hazardous waste, at the cost of the strictest category in the mixture.",
        },
        {
          question: "How long does arranging a hazardous waste shipment take?",
          answer:
            "It depends on the stream and the agencies involved, but treat it as an operation planned several days ahead, because of the prior transport approval.",
        },
      ],
    },

    "packaging-waste-recycling-obligations": {
      metaTitle: "Packaging waste recycling obligations for companies in Romania",
      metaDescription:
        "What Legea 249/2015 requires of companies that put packaging on the Romanian market: individual compliance, transfer of responsibility, reporting and permitted operators.",
      title:
        "Packaging waste obligations: what every company that uses packaging must do",
      excerpt:
        "Putting a product in a box makes you a packaging producer in the legal sense. The obligation to recycle follows the packaging, not the customer.",
      lead: "Most packaging waste non-conformities come from companies that did not know they were producers in the first place. Legea 249/2015 on packaging and packaging waste defines the term broadly: if your company packs, fills or labels goods that reach the market — or imports them already packed — you are a producer, and the obligation to ensure recovery attaches to you.",
      sections: [
        {
          heading: "Who counts as a packaging producer under Romanian law",
          body: [
            "Legea 249/2015, transposing the EU Packaging and Packaging Waste Directive, defines a packaging producer as anyone who professionally packs, fills, labels or imports packaged goods on the Romanian market. This includes manufacturers, importers, distributors who put goods into packaging, and retailers who use service packaging (bags, boxes) at the point of sale.",
            "The obligation is proportional to the quantity placed on the market and to the type of material — glass, plastics, paper, metal, wood and composite are tracked separately. If your company generates more than one tonne of packaging per year, the reporting obligation is annual; below that threshold the obligation still exists but the documentary burden is lighter.",
          ],
        },
        {
          heading:
            "Individual compliance versus transfer of responsibility to an organisation",
          body: [
            "Legea 249/2015 gives producers two routes. Individual compliance means setting up your own take-back scheme, documenting recovery and sending an annual report to the county environmental agency and the National Packaging Register. This route is viable for very large producers with their own logistics.",
            "The more common route is transfer of responsibility: the producer signs a contract with an accredited packaging responsibility organisation (OTR), which aggregates the obligation across many producers and funds recovery on their behalf. The contract must precede the first tonne placed on the market in any calendar year, and the amounts transferred cover the organisation's operating costs and the actual recycling operations.",
          ],
        },
        {
          heading: "Which operators count towards the recovery target",
          body: [
            "Not every company that takes your cardboard or plastic counts towards the packaging recovery target. Only waste operators with an environmental permit that explicitly covers the recovery of packaging fractions — and that send material to licensed recyclers — qualify. The OTR or, in the individual compliance route, the generator itself must hold the documentation that proves the full chain.",
            "We collect, sort and bale several packaging fractions — cardboard and paper, plastic films and rigid plastics, metal — and the documentation we issue on every pickup is usable as evidence in your compliance file. If you work through an OTR, your OTR will confirm what chains qualify; if you manage the obligation directly, ask the collector for the recovery or treatment confirmation that goes into your annual report.",
          ],
        },
        {
          heading: "Documentation and the annual report",
          body: [
            "The annual report in the National Packaging Register covers quantities of each packaging material placed on the market and the corresponding recovery achieved, by fraction. It is due by 25 March for the previous calendar year. Missing it carries fines, but the practical consequence that tends to sting more is that permit renewals for the parent company often require a clean packaging compliance record.",
            "The records underlying the report — weight tickets, recovery confirmations, OTR transfer receipts — should be retained for five years. In practice that means a folder per year, updated as each collection takes place, rather than a reconstruction exercise every February.",
          ],
        },
      ],
      keyPoints: [
        "If your company packs, fills, labels or imports packaged goods on the Romanian market, you are a packaging producer and the recovery obligation applies to you.",
        "Transferring responsibility to an accredited OTR is the standard route for most companies; the contract must precede the first tonne placed on the market each year.",
        "Only waste operators permitted for packaging recovery fractions count towards the target — keep the documentation for five years.",
      ],
      faq: [
        {
          question:
            "If I import only small amounts of packaged goods, am I still a producer?",
          answer:
            "Yes, under Legea 249/2015 imports trigger the producer obligation regardless of volume. The annual report format and minimum thresholds vary by quantity, but the obligation to ensure recovery is the same.",
        },
        {
          question: "What is an OTR and how do I know it is accredited?",
          answer:
            "An organisation for transferring responsibility (OTR) is accredited by the Ministry of Environment and listed in the National Packaging Register. Check the register before signing any contract — an unaccredited intermediary does not transfer liability.",
        },
        {
          question:
            "Can I count cardboard bales I send directly to a paper mill?",
          answer:
            "Yes, if you can document the chain: the collector's permit covering the relevant code, the transport form and confirmation from the receiving facility that the material went to recovery rather than disposal. Without documentation, the tonne does not count.",
        },
      ],
    },

    "aluminium-scrap-recycling": {
      metaTitle:
        "Aluminium scrap recycling: grades, prices and how to prepare your waste",
      metaDescription:
        "Profiles, castings, turnings, cable and foil: how aluminium waste is graded, priced and processed. What to separate at source to recover the most value.",
      title:
        "Recycling aluminium scrap: grades, prices and what to do at source",
      excerpt:
        "Aluminium is infinitely recyclable and recovered at a fraction of the energy primary smelting needs. But the grade you hand over decides how close to the London quotation you get paid.",
      lead: "Of all the non-ferrous metals that cross our yard, aluminium is the one where source preparation makes the most visible difference to the price. The physical chemistry of aluminium recycling tolerates a wide range of grades — but the market prices each grade separately, and the gap between the best and the worst can be large enough to be worth a conversation.",
      sections: [
        {
          heading: "Why aluminium is worth recycling carefully",
          body: [
            "Recycling aluminium saves roughly 95 % of the energy that primary smelting requires, because re-melting and re-casting consumes far less than extracting aluminium from bauxite. That environmental fact translates directly into economic value: aluminium keeps its worth through recycling cycles in a way that most materials do not.",
            "The London Metal Exchange publishes daily reference prices for primary aluminium and several alloy classes. Secondary (recycled) aluminium trades at a discount to primary, but the spread narrows significantly for clean, well-sorted material. That is the lever a generator controls.",
          ],
        },
        {
          heading: "Main grades and what separates them",
          body: [
            "Clean extruded profile — window frames, structural sections, heat sinks — is the premium grade. It is one alloy class; surface coatings such as paint or anodising do not matter much at the smelter level, but iron inserts and fasteners still attached do. Mixed profiles from different alloy families, or profiles with steel hardware, fall into a lower grade because alloying elements have to be managed at the melt.",
            "Cast aluminium — engine blocks, gearbox housings, wheels — is a different alloy family and must be kept separate from wrought alloys. Mixing cast and wrought is the mistake that costs the most at intake, because a smelter buying for one application cannot use the other, and the mixed lot is priced at the less valuable grade.",
          ],
        },
        {
          heading: "Turnings, swarf and shredded aluminium",
          body: [
            "Aluminium turnings and machining swarf are lower-density material with a large surface area, which means more oxide and more trapped coolant or cutting oil. They are weighed with deductions for moisture and contamination, and they go to secondary smelters that specifically handle turnings rather than to primary remelters.",
            "Shredded aluminium — from car bodies, mixed-stream processing — is the most variable grade, because the alloy mix is unknown until spectrometry. If you can keep identifiable alloy families separate before they reach the shredder, that step is worth taking. Once in the shredder, the alloy mix is fixed and so is the price ceiling.",
          ],
        },
        {
          heading: "Foil, cans and mixed small-format aluminium",
          body: [
            "Aluminium foil and packaging — food trays, lidding, thin-walled containers — is a distinct grade, because the high surface-to-mass ratio and the frequent presence of food residues, lacquers and paper or plastic laminates require a different processing path from structural material. Keep it separate from profiles and cast alloys.",
            "Beverage cans, if clean and uncontaminated, are a recoverable fraction — but for an industrial generator volumes are usually small. The practical question is whether they reach a separate container or go into a mixed lot where they are a minor fraction and treated accordingly.",
          ],
        },
      ],
      keyPoints: [
        "Aluminium is infinitely recyclable and recycling it saves roughly 95 % of the energy that primary smelting requires.",
        "Separating wrought alloys (profiles, sheet) from cast alloys (engine parts, wheels) is the most impactful sorting step.",
        "Turnings and swarf carry moisture and coolant deductions; keeping them dry and separate from clean profiles preserves the price.",
      ],
      faq: [
        {
          question:
            "Does the anodising or paint on aluminium profiles affect the price?",
          answer:
            "Surface coatings burn off or are managed in the refining process, so they matter less than alloy composition. The more important factor is removing iron fasteners and keeping profiles of the same alloy family together.",
        },
        {
          question:
            "Can I mix aluminium cable and copper cable in the same container?",
          answer:
            "No. Aluminium cable and copper cable are separate grades priced against different reference quotations. Mixing them means both fractions are paid at the lower of the two, and the sorting cost comes out of the price.",
        },
        {
          question:
            "How is the price for aluminium turnings determined?",
          answer:
            "From the LME reference for the relevant alloy class, less deductions for moisture, coolant contamination, fines (very small chips that oxidise quickly) and processing. Clean, dry turnings from a known alloy fetch considerably more than a wet or oil-soaked swarf mix.",
        },
      ],
    },
    "weee-recycling-guide-for-companies": {
      metaTitle: "WEEE Recycling Guide for Companies",
      metaDescription:
        "How businesses should manage Waste Electrical and Electronic Equipment (WEEE), compliance requirements, and safe recycling practices.",
      title: "WEEE Recycling: A Complete Guide for Companies",
      excerpt:
        "Proper disposal of IT equipment and electronics is not just an environmental choice—it's a legal obligation. Here is how to handle WEEE correctly.",
      lead: "Every office upgrade or equipment replacement generates Waste Electrical and Electronic Equipment (WEEE). Managing this waste stream correctly ensures data security, environmental compliance, and material recovery. Learn what your obligations are and how to partner with a certified collector.",
      sections: [
        {
          heading: "Identifying WEEE in your business",
          body: [
            "Computers, monitors, servers, but also breakroom appliances, lighting equipment, and even some tools fall under the WEEE category. They contain hazardous substances like lead, mercury, and flame retardants, as well as valuable materials like gold, copper, and aluminum.",
            "Recognizing which items are considered WEEE is the first step in ensuring they don't end up in general waste streams, which is both illegal and harmful to the environment.",
          ],
        },
        {
          heading: "Legal obligations and compliance",
          body: [
            "Companies must ensure WEEE is handed over only to authorized operators for collection, treatment, and recycling. Disposing of WEEE through unauthorized channels can result in significant fines and legal repercussions.",
            "When handing over WEEE, ensure you receive the appropriate legal documentation, such as the loading-unloading form or the consignment note, to prove compliance during any environmental audit.",
          ],
        },
        {
          heading: "Data security and physical destruction",
          body: [
            "Before recycling IT equipment, consider data security. Ensure all storage media (hard drives, SSDs) are securely wiped or physically destroyed.",
            "A professional recycling partner can often provide secure destruction services and issue a certificate of destruction, giving you peace of mind that sensitive company data will not be compromised.",
          ],
        },
      ],
      keyPoints: [
        "WEEE must be collected separately from general waste.",
        "Only work with certified operators for e-waste.",
        "Ensure data is wiped before handing over IT equipment.",
      ],
      faq: [
        {
          question: "Can I throw old electronics in the regular trash?",
          answer:
            "No, it's illegal and harmful to the environment. Electronics contain toxic substances that can leach into soil and water if landfilled.",
        },
        {
          question: "Do I get a certificate of destruction?",
          answer:
            "Yes, a certified partner will provide the necessary paperwork, which serves as proof that the equipment was disposed of legally and responsibly.",
        },
      ],
    },
    "industrial-plastic-waste-recycling": {
      metaTitle: "Industrial Plastic Waste Recycling",
      metaDescription:
        "How manufacturing companies can sort and recycle industrial plastics, types of recoverable polymers, and the benefits of proper sorting.",
      title: "Industrial Plastic Waste: Sorting and Recycling Strategies",
      excerpt:
        "Not all plastics are the same. Discover how sorting industrial plastic waste at the source increases its recycling value and lowers your disposal costs.",
      lead: "Manufacturing and packaging processes generate significant amounts of plastic waste. However, mixed plastic has little to no market value, whereas clean, sorted polymers (like PE, PP, or PET) are highly sought after. Here is how to organize your plastic streams for maximum recovery.",
      sections: [
        {
          heading: "The importance of sorting at the source",
          body: [
            "Mixing different types of plastics makes recycling difficult and expensive. When plastics are mixed, their value drops drastically, and they may end up being incinerated or landfilled instead of recycled.",
            "Implementing a clear sorting system at the point of generation—providing separate bins for different polymer types—ensures the material remains clean and highly recyclable.",
          ],
        },
        {
          heading: "Common industrial plastics: PE, PP, and PET",
          body: [
            "Polyethylene (PE) foils, Polypropylene (PP) crates, and PET bottles are among the most common industrial plastics. Each has specific recycling processes and distinct market values.",
            "Keeping clear PE foil separate from colored foil, and ensuring PP containers are free of significant product residue, are simple steps that significantly increase the material's marketability.",
          ],
        },
        {
          heading: "Baling and logistics",
          body: [
            "Transporting unbaled plastic is mostly transporting air. Because plastic waste is low-density, logistics can quickly become the highest cost in the recycling process.",
            "Using a baler on-site reduces logistical costs by compacting the waste into dense bales, which optimizes truck space and reduces the number of collections needed.",
          ],
        },
      ],
      keyPoints: [
        "Sort plastic waste by polymer type to retain its value.",
        "Avoid contamination with oils or hazardous substances.",
        "Baling plastics on-site drastically reduces transport costs.",
      ],
      faq: [
        {
          question: "Can all types of industrial plastic be recycled?",
          answer:
            "Most thermoplastics can be recycled, provided they are clean and sorted by type. Composite materials or heavily contaminated plastics are much harder to recycle.",
        },
        {
          question: "Do I need a baler for my plastic waste?",
          answer:
            "It is highly recommended if you generate large volumes. A baler cuts down on transport frequency and makes your plastic waste much more attractive to recyclers.",
        },
      ],
    },

    "why-companies-sell-scrap-metal": {
      metaTitle: "Why companies and individuals sell scrap metal",
      metaDescription:
        "Freed-up space, environmental compliance, and cash from material that would otherwise sit idle: why companies and individuals sell scrap metal to a licensed collector.",
      title: "Why companies and individuals sell scrap metal",
      excerpt:
        "Scrap metal isn't waste — it's raw material with a market price. Here's why companies clear out dead stock and individuals part with old appliances, and both come out ahead.",
      lead: "A decommissioned machine or a broken appliance takes up space, and left where it is, it only rusts. The difference between treating it as junk and treating it as merchandise is one phone call to a licensed collector. Here is what drives that decision, for companies and individuals alike.",
      sections: [
        {
          heading: "The material's value doesn't disappear when the equipment does",
          body: [
            "Scrap steel, copper, aluminium and brass remain metals with a market price regardless of shape — profile, pipe, housing or conductor. Their price tracks international metal quotations, not the visual condition of the piece, so a rusty machine can be worth just as much per kilogram as a clean one.",
            "The gap between non-ferrous and ferrous metal is large: copper and aluminium often sell for several times more per kilogram than scrap steel. Knowing what you actually have before you call a collector can change the final weighbridge figure significantly.",
          ],
        },
        {
          heading: "For companies: freeing up space and closing a compliance question",
          body: [
            "A halted production line, equipment replaced during a modernisation, or raw material left over from a cancelled project takes up space that costs money — rent, insurance, management time. Selling the material turns that recurring cost into a one-off payment.",
            "There is a compliance angle too: metal waste stored without proper records or without a licensed operator to take it away can become a talking point at an environmental inspection. Documented handover to a licensed collector closes the subject, with a weighbridge slip and, on request, a recovery certificate.",
          ],
        },
        {
          heading: "For individuals: decluttering and a bit of extra income",
          body: [
            "A renovation, a house cleared after an inheritance, or a garage full of old car parts all generate scrap steel and non-ferrous metal that most people would simply throw out with household waste if there were no collection point paying for it. The result: reclaimed space and a small income from something that was headed for the bin anyway.",
            "The difference from a company is scale, not principle: the quantities are smaller, but the price per kilogram is the same. It still matters, just as it does for a business, who you hand the material to — a licensed centre weighs it correctly and gives you proof of the handover.",
          ],
        },
        {
          heading: "How the weighbridge figure is set",
          body: [
            "The final price depends on the type of metal, its purity — an insulated cable pays less than a bare conductor — and the day's quotation for non-ferrous metals, which moves the same way any internationally traded commodity does.",
            "A metrologically verified scale and a slip issued at every reception are the only guarantee that the amount matches the actual quantity. We break down the full pricing mechanism, with examples for scrap steel, copper and aluminium, in the article on scrap metal prices.",
          ],
        },
      ],
      keyPoints: [
        "Scrap steel and non-ferrous metals keep their market value even once decommissioned — that's why companies and individuals sell them instead of throwing them out.",
        "For companies, the reason is twofold: cash from otherwise idle material, plus freed-up storage space and one less compliance question to answer.",
        "For individuals, selling scrap metal is a simple source of income — but who you hand the material to still matters.",
      ],
      faq: [
        {
          question: "Can I sell scrap metal as an individual, or is it companies only?",
          answer:
            "Individuals can sell too. A licensed centre accepts material from anyone, usually against an ID, and issues a weighbridge slip for every handover.",
        },
        {
          question: "Why does the price change from one day to the next?",
          answer:
            "Non-ferrous metals — copper, aluminium, brass — track international quotations that move daily. Scrap steel is more stable, but it too is adjusted periodically based on demand from the steel industry.",
        },
        {
          question: "What paperwork do I get on handover?",
          answer:
            "A weighbridge slip at every reception, always. Companies that need extra proof for environmental reporting can also request a recovery certificate — we explain the difference between the two in the article on certificates.",
        },
      ],
    },

    "ferrous-vs-non-ferrous-waste": {
      metaTitle: "Ferrous vs non-ferrous waste: differences and how it's collected",
      metaDescription:
        "What ferrous and non-ferrous metals mean, how to tell them apart, which waste codes apply, and why the collection price differs so much between them.",
      title: "Ferrous vs non-ferrous waste: differences, codes, and how it's collected",
      excerpt:
        "A magnet and a few seconds are enough to tell whether a metal is ferrous or non-ferrous — but the difference changes your price and how it gets collected.",
      lead: "\"Scrap metal\" is the catch-all term we use for any metal waste, but technically it only covers half the story. The other half — non-ferrous metals — gets collected, weighed, and above all paid differently. Here is what separates the two categories and why it's worth keeping them apart.",
      sections: [
        {
          heading: "What \"ferrous\" and \"non-ferrous\" actually mean",
          body: [
            "Ferrous metals contain iron: steel, cast iron, sheet metal and structural steelwork all fall into this category. The practical test is a magnet — if it sticks, the metal is ferrous.",
            "Non-ferrous metals contain no iron, or only insignificant traces: copper, aluminium, brass, lead, zinc and their alloys. They are not magnetic, and colour often gives them away to the naked eye — reddish copper, yellowish brass, matte grey aluminium.",
          ],
        },
        {
          heading: "Waste codes, and why separation matters",
          body: [
            "The European Waste List, transposed into Romanian law through HG 856/2002, treats metals as distinct code families — chapter 17 04, for instance, separates copper, aluminium, lead, zinc, iron and steel under different sub-codes, even when they come from the same site or the same production hall.",
            "Separating by code isn't just paperwork: it also determines what the operator is allowed to do with the material next. An operator licensed for scrap steel isn't automatically licensed for non-ferrous waste too — check that the same way you'd check any other code when choosing a collector.",
          ],
        },
        {
          heading: "Why the collection price differs so much",
          body: [
            "Copper and aluminium trade at international quotations several times higher per kilogram than scrap steel. A load of non-ferrous metal mixed in with scrap steel and not weighed separately gets paid at the price of the cheapest metal in the load — you lose the value gap of the better material.",
            "Scrap steel makes up for it in volume: it doesn't carry copper's price per kilogram, but it turns up in much larger quantities — structural steel, sheet metal, profiles — which keeps it profitable even at a modest quotation.",
          ],
        },
        {
          heading: "How it's collected in practice",
          body: [
            "On reception, material goes through a visual check and, where relevant, the magnet test, then gets weighed separately by category — ferrous, non-ferrous, mixed alloys. Bulky scrap steel structures are frequently lifted with a grapple crane, straight from the point of generation.",
            "We weigh each category separately at our Cristur site, on a metrologically verified scale, precisely so the value of the non-ferrous fraction doesn't get lost in the mass of scrap steel — see the details on our scrap metal and metal waste collection page.",
          ],
        },
      ],
      keyPoints: [
        "The magnet test quickly separates ferrous (magnetic) from non-ferrous (non-magnetic) metals — copper, aluminium, brass, lead, zinc.",
        "Non-ferrous metals carry a much higher price per kilogram than ferrous ones; mixed into a single load, they drag the total value down to the price of the cheapest metal in it.",
        "Sorting at source, even roughly, shows up directly on the weighbridge slip.",
      ],
      faq: [
        {
          question: "How do I tell if a piece of metal waste is ferrous or non-ferrous, without special equipment?",
          answer:
            "An ordinary magnet is enough for the first test — ferrous metals stick, non-ferrous ones don't. Colour helps with a second check: reddish for copper, yellowish for brass, matte grey for aluminium.",
        },
        {
          question: "Can ferrous and non-ferrous metal be handed over mixed together?",
          answer:
            "They can, but it isn't recommended: the collector separates them on reception anyway, and unsorted loads are typically weighed and paid at the price of the cheapest metal in the mix.",
        },
        {
          question: "Do alloys like brass or bronze count as ferrous or non-ferrous?",
          answer:
            "Non-ferrous. Even though they may contain traces of other metals, brass and bronze are weighed and paid separately from scrap steel, at their own quotation.",
        },
      ],
    },

    "waste-recovery-and-destruction-certificates": {
      metaTitle: "Waste recovery and destruction certificates explained",
      metaDescription:
        "What a recovery certificate and a destruction certificate are, who needs them, and how to get them from a licensed waste collector.",
      title: "Recovery and destruction certificates: what they are and who needs them",
      excerpt:
        "A weighbridge slip proves a handover happened. A recovery or destruction certificate proves what happened to the material afterwards — and a lot of companies need exactly that.",
      lead: "For many companies, handing over waste stops at the weighbridge slip and the transport form. For companies that report to an environmental audit, a large client, or their own ISO certification, there's a further question: what proof do you have that the material was actually recycled or destroyed, rather than just moved somewhere else? That's what recovery and destruction certificates answer.",
      sections: [
        {
          heading: "What a recovery certificate is",
          body: [
            "A recovery certificate is the document by which the operator confirms that a batch of waste handed over was actually processed and put back into industrial circulation as secondary raw material — not just transported and left for someone else to deal with.",
            "Companies use it as evidence in their annual reporting under the Integrated Environmental System, as proof for ISO 14001 certification, or as an answer to the responsible-supplier requirements that show up more and more often in large clients' supplier audits.",
          ],
        },
        {
          heading: "What a destruction certificate is, and when you need one",
          body: [
            "A destruction certificate attests that a piece of equipment or a batch of materials was permanently dismantled or destroyed, not resold or put back into circulation. It matters most for decommissioned IT equipment — servers, workstations, storage units — where the main stake is data security, not just the environment.",
            "It's also useful for writing off fixed assets in a company's accounts: a destruction certificate backs up the correct removal of an asset from the books, with proof that the item genuinely left circulation.",
          ],
        },
        {
          heading: "How it differs from the transport form",
          body: [
            "The loading-unloading form required by HG 1061/2008 proves a single moment: the physical handover of material to the carrier, with the weighed quantity and the waste code. It answers \"what left, and when.\"",
            "A recovery or destruction certificate answers the next question: \"what happened to it afterwards.\" For full traceability, an audited company needs both — one proves the handover, the other proves the final outcome.",
          ],
        },
        {
          heading: "How to get these documents from your collector",
          body: [
            "Ask for them at the contract stage, not after the first pickup — the same way you'd check the environmental permit and the accepted codes. An operator that only forwards material to another intermediary can't credibly issue a recovery certificate, because it doesn't control what happens to the material next.",
            "An operator that actually processes the material on its own site — sorting, baling, granulating — can document the full route and issue the certificate on a real basis, not a declarative one. Settle upfront whether the document is issued per batch or on a periodic, consolidated basis.",
          ],
        },
      ],
      keyPoints: [
        "A weighbridge slip proves the handover; a recovery or destruction certificate proves what happened to the material afterwards.",
        "A destruction certificate matters most for IT equipment holding sensitive data, and for writing off fixed assets in the accounts.",
        "Only an operator that actually processes the material can issue a credible recovery certificate — not one that just forwards it on.",
      ],
      faq: [
        {
          question: "Who needs a recovery certificate?",
          answer:
            "Companies reporting under the Integrated Environmental System, ISO 14001-certified companies, and those that need to demonstrate responsible environmental practices in large clients' supplier audits.",
        },
        {
          question: "Does a destruction certificate replace the transport form?",
          answer:
            "No, they're complementary. The transport form proves the material was handed over; the destruction certificate proves the final outcome — that it was permanently dismantled or destroyed.",
        },
        {
          question: "How long does it take to get the certificate?",
          answer:
            "It depends on the operator and the size of the batch — typically issued on request or periodically, once the material has actually been processed. Discuss the timeline with your operator before signing the contract, so you know what to expect.",
        },
      ],
    },

    "how-waste-container-rental-works": {
      metaTitle: "How waste container rental works",
      metaDescription:
        "From request to pickup: how waste container rental works for industrial waste, what sizes are available, and how the cost is calculated.",
      title: "How waste container rental works for industrial waste",
      excerpt:
        "A phone call, a container size and a pickup window — but a few decisions in between directly shape the final cost.",
      lead: "Scheduled pickups work well for a steady stream of waste. They don't work as well for a hall cleared out in one go, or a production line shut down for good. That's what container rental is for — here is how it runs, from the first phone call to the final weighing.",
      sections: [
        {
          heading: "When a container beats scheduled pickups",
          body: [
            "Scheduled pickups make sense for waste you generate constantly — packaging, production offcuts. A container makes sense for a one-off volume: a hall renovation, a line shutdown, a batch of raw material decommissioned all at once.",
            "The practical difference is flexibility: the container sits on site for as long as it takes you to fill it, instead of you waiting for the next scheduled collection route — useful especially when the volume is large and unpredictable in timing.",
          ],
        },
        {
          heading: "Sizes and types of containers",
          body: [
            "Abrollkipper containers come in different capacities, chosen by estimated volume, not weight — an important distinction, because waste streams have very different densities. A container full of plastic film weighs a fraction of one full of scrap steel of the same size.",
            "Choosing the size also depends on the manoeuvring space available on site — gate width, room for the truck at pickup — a detail worth settling before delivery, not on the day itself.",
          ],
        },
        {
          heading: "How the cost is calculated",
          body: [
            "The final cost depends on the container size, the transport distance, the rental duration, and what's actually inside it at pickup. A container of mixed, non-recoverable waste is a pure disposal cost.",
            "A container where metal predominates can flip that: the material weighed at pickup can generate a payment that partly or fully offsets the rental cost. The weighing at pickup, not the initial estimate, is what sets the final figure.",
          ],
        },
        {
          heading: "The process, from request to pickup",
          body: [
            "It starts with an estimate of the volume and the predominant waste type, followed by delivery of the empty container to your site. The filling window is agreed together — either fixed or on-call.",
            "At pickup, the material is weighed, and the transport is documented with the loading-unloading form required by HG 1061/2008 — the same paperwork as any other non-hazardous waste handover.",
          ],
        },
      ],
      keyPoints: [
        "A container suits irregular or one-off volumes — a cleanout, a shutdown line — not the steady stream of a running production.",
        "Container size is chosen by volume, not weight: waste streams have very different densities.",
        "If metal predominates in the container, the cost can become partly or fully a payment, depending on what's weighed at pickup.",
      ],
      faq: [
        {
          question: "How long can I keep the container on site?",
          answer:
            "It's agreed at the time of the order, based on your expected filling pace — anywhere from a few days to a few weeks. Settle the window upfront so it's clear in the contract and no unexpected costs come up.",
        },
        {
          question: "What happens if I mix different waste types in the same container?",
          answer:
            "It's possible, but it raises the cost: a mixed load can't be recovered as efficiently as sorted fractions and may need additional sorting before processing.",
        },
        {
          question: "Do I need a special permit to order a container?",
          answer:
            "You don't, but the operator needs to be licensed for the waste codes you generate — check that the same way you'd check any other collector, before you sign.",
        },
      ],
    },
  },
} as const;
