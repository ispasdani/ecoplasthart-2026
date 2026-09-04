"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const SECTIONS = [
  {
    title: "Conținut site",
    body: "Editează secțiunea de deschidere, capabilitățile și listele de fluxuri de deșeuri afișate pe site-ul public.",
  },
  {
    title: "Bibliotecă media",
    body: "Încarcă fotografii din incintă, cu utilajele și cu echipa, pentru a fi folosite pe site.",
  },
  {
    title: "Echipă",
    body: "Vezi cine are cont și stabilește cine are dreptul să publice conținut.",
  },
];

export default function DashboardOverviewPage() {
  const tasks = useQuery(api.tasks.get);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Prezentare generală
        </h1>
        <p className="mt-1 max-w-2xl text-sm text-stone-600">
          Zonă privată pentru familia și angajații Ecoplast Hart. Accesul este
          protejat cu Clerk, iar conturile noi apar automat în secțiunea Echipă.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {SECTIONS.map((section) => (
          <div
            key={section.title}
            className="rounded-2xl border border-stone-200 bg-white p-5"
          >
            <h2 className="font-semibold text-stone-900">{section.title}</h2>
            <p className="mt-1 text-sm text-stone-600">{section.body}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-stone-200 bg-white p-6">
        <h2 className="font-semibold text-stone-900">Date Convex</h2>
        <p className="mt-1 text-sm text-stone-600">
          Tabelul demonstrativ <code>tasks</code> — de înlocuit cu colecțiile
          reale de conținut.
        </p>
        <div className="mt-4">
          {tasks === undefined ? (
            <p className="text-sm text-stone-500">Se încarcă…</p>
          ) : (
            <ul className="space-y-2">
              {tasks.map(({ _id, text }) => (
                <li
                  key={_id}
                  className="rounded-lg border border-stone-200 bg-stone-50 px-4 py-2 text-sm"
                >
                  {text}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
