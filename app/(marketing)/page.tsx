"use client";

import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const STATS = [
  { value: "2004", label: "Founded in Hunedoara county" },
  { value: "19+", label: "Years of recycling experience" },
  { value: "13", label: "Waste streams handled" },
  { value: "3", label: "ISO management systems" },
];

const WASTE_STREAMS = [
  "Plastic (PET, film, crates, conduit)",
  "Paper & cardboard",
  "Wood",
  "Textile & leather",
  "Ferrous metals",
  "Non-ferrous (Al, Cu, brass, Pb, Zn)",
  "WEEE / DEEE",
  "Glass",
  "Rubber",
  "Batteries & accumulators",
  "Used & mineral oils",
  "Cables (Al/Cu conductors)",
];

const CAPABILITIES = [
  {
    title: "Collection & transport",
    body: "Pickup at your generation site or at our yard, with transport of non-hazardous waste throughout Romania.",
  },
  {
    title: "Sorting & baling",
    body: "Sorting mill and recycling lines, plus compaction and baling facilities for cardboard and plastic.",
  },
  {
    title: "Cable processing",
    body: "A dedicated facility that turns Al/Cu cables into copper granules, aluminium granules and plastic fractions.",
  },
  {
    title: "On-site partner equipping",
    body: "We equip client partners with mills, containers and big bags for selective collection at source.",
  },
];

export default function HomePage() {
  const tasks = useQuery(api.tasks.get);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Ecoplast Hart SRL
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            Collection, sorting and recycling of all types of waste materials.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone-600">
            A family-run Romanian waste-management company built around EU
            waste-hierarchy compliance — from generator to collector to recovery —
            with its own cable-processing facility and logistics fleet.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/about-us"
              className="rounded-full bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700"
            >
              Learn about us
            </Link>
            <a
              href="mailto:ecoplast_hart@yahoo.com"
              className="rounded-full border border-stone-300 px-6 py-3 font-medium text-stone-800 transition-colors hover:border-emerald-600 hover:text-emerald-700"
            >
              Request a collection
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-semibold text-emerald-700">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-stone-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-stone-900">
          What we do
        </h2>
        <p className="mt-3 max-w-2xl text-stone-600">
          We reinvest profit into processing capacity, logistics and qualified
          people — a self-funded growth model focused on real recovery, not just
          collection.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.title}
              className="rounded-2xl border border-stone-200 p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-stone-900">{cap.title}</h3>
              <p className="mt-2 text-sm text-stone-600">{cap.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Waste streams */}
      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900">
            Waste streams we handle
          </h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {WASTE_STREAMS.map((stream) => (
              <li
                key={stream}
                className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm text-stone-700"
              >
                {stream}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Convex connection demo */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="rounded-2xl border border-stone-200 bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Live data
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900">
            Convex connection test
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            The list below is served live from Convex (<code>api.tasks.get</code>).
            Once the dashboard is wired up, website content will be published
            through Convex the same way.
          </p>

          <div className="mt-6">
            {tasks === undefined ? (
              <p className="text-sm text-stone-500">Loading tasks…</p>
            ) : tasks.length === 0 ? (
              <p className="text-sm text-stone-500">
                No tasks yet. Run <code>npx convex import --table tasks sampleData.jsonl</code>.
              </p>
            ) : (
              <ul className="space-y-2">
                {tasks.map(({ _id, text }) => (
                  <li
                    key={_id}
                    className="rounded-lg border border-stone-200 bg-stone-50 px-4 py-2 text-sm text-stone-800"
                  >
                    {text}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
