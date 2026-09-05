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
  },
} as const;
