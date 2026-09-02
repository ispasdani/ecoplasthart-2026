"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const SECTIONS = [
  {
    title: "Website content",
    body: "Edit the hero, capabilities and waste-stream lists shown on the public site.",
  },
  {
    title: "Media library",
    body: "Upload photos of the yard, equipment and team for use across the site.",
  },
  {
    title: "Team",
    body: "Invite family members and staff who are allowed to publish content.",
  },
];

export default function DashboardOverviewPage() {
  const tasks = useQuery(api.tasks.get);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Overview</h1>
        <p className="mt-1 text-sm text-stone-600">
          Private area for the Ecoplast Hart family and staff. Authentication is
          not wired up yet — add a Convex Auth / Clerk check in this layout before
          going live.
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
        <h2 className="font-semibold text-stone-900">Convex data</h2>
        <p className="mt-1 text-sm text-stone-600">
          Sample <code>tasks</code> table — replace with real content collections.
        </p>
        <div className="mt-4">
          {tasks === undefined ? (
            <p className="text-sm text-stone-500">Loading…</p>
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
