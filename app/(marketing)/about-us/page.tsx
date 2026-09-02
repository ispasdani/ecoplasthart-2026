import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Ecoplast Hart SRL — a Romanian recycling company founded in 2004, based in Hunedoara county, with a cable-processing facility, sorting lines and a logistics fleet.",
};

const IDENTITY: { label: string; value: string }[] = [
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
];

const CERTIFICATIONS = [
  { code: "ISO 9001:2015", label: "Quality Management System" },
  { code: "ISO 14001:2015", label: "Environmental Management System" },
  { code: "ISO 45001:2018", label: "Occupational Health & Safety" },
];

export default function AboutUsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            About Ecoplast Hart
          </h1>
          <p className="mt-6 text-lg text-stone-600">
            We specialise in the collection, sorting and recycling of non-hazardous
            and hazardous waste — non-metallic (cardboard, paper, plastic, rubber,
            glass, wood, textile) and metallic (ferrous and non-ferrous). We run our
            own cable-processing facility that outputs copper and aluminium granules
            and plastic fractions as secondary raw materials, operate a
            truck-and-container logistics fleet, and equip our client partners
            on-site for selective collection.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
          How we work
        </h2>
        <p className="mt-4 text-stone-600">
          Ecoplast Hart is positioned around full compliance with EU
          waste-management policy and the generator → collector → recovery circuit.
          Growth is self-funded: profit is continuously reinvested into processing
          facilities, logistics parks and qualified personnel. We also run awareness
          campaigns to shift public mentality toward recycling.
        </p>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
            Company identity
          </h2>
          <dl className="mt-6 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
            {IDENTITY.map((row) => (
              <div
                key={row.label}
                className="grid gap-1 px-6 py-4 sm:grid-cols-3 sm:gap-4"
              >
                <dt className="text-sm font-medium text-stone-500">{row.label}</dt>
                <dd className="text-sm text-stone-900 sm:col-span-2">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
          Certifications
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.code}
              className="rounded-2xl border border-stone-200 p-5"
            >
              <div className="text-lg font-semibold text-emerald-700">
                {cert.code}
              </div>
              <div className="mt-1 text-sm text-stone-600">{cert.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-stone-500">
          Certifications as declared by the company.
        </p>
      </section>
    </>
  );
}
