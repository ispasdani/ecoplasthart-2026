"use client";

import { useQuery } from "convex/react";

import { api } from "@/convex/_generated/api";

/**
 * Temporary Convex connectivity check. This is a Client Component island so the
 * surrounding marketing page can stay a Server Component (rendered to static
 * HTML for SEO). Remove once real content is served from Convex via
 * `fetchQuery` on the server.
 */
export function ConvexTasksDemo() {
  const tasks = useQuery(api.tasks.get);

  return (
    <div className="mt-6">
      {tasks === undefined ? (
        <p className="text-sm text-stone-500">Loading tasks…</p>
      ) : tasks.length === 0 ? (
        <p className="text-sm text-stone-500">
          No tasks yet. Run{" "}
          <code>npx convex import --table tasks sampleData.jsonl</code>.
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
  );
}
