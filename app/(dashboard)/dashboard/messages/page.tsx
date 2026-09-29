"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

type Status = "unread" | "read" | "contacted" | "archived";

const STATUS_LABELS: Record<Status, string> = {
  unread: "Necitit",
  read: "Citit",
  contacted: "Contactat",
  archived: "Arhivat",
};

export default function MessagesPage() {
  const messages = useQuery(api.messages.list);
  const updateMessage = useMutation(api.messages.updateMessage);

  const [savingId, setSavingId] = useState<string | null>(null);

  if (messages === undefined) {
    return <div className="text-sm text-stone-500">Se încarcă mesajele…</div>;
  }

  const handleStatusChange = async (id: Id<"messages">, newStatus: Status) => {
    setSavingId(id);
    await updateMessage({ id, status: newStatus });
    setSavingId(null);
  };

  const handleNotesChange = async (id: Id<"messages">, newNotes: string) => {
    setSavingId(id);
    await updateMessage({ id, notes: newNotes });
    setSavingId(null);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-stone-900">
          Mesaje
        </h1>
        <p className="mt-1 max-w-2xl text-sm text-stone-600">
          Aici apar mesajele trimise prin formularul de contact de pe site.
        </p>
      </div>

      <div className="space-y-4">
        {messages.length === 0 ? (
          <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center text-sm text-stone-500">
            Nu aveți niciun mesaj momentan.
          </div>
        ) : (
          messages.map((message) => (
            <div
              key={message._id}
              className={`rounded-2xl border bg-white p-6 transition-colors ${
                message.status === "unread" ? "border-emerald-200 bg-emerald-50/30" : "border-stone-200"
              }`}
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="font-semibold text-stone-900 text-lg">
                      {message.firstName} {message.lastName}
                    </h3>
                    <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-stone-600">
                      {message.email && (
                        <a href={`mailto:${message.email}`} className="hover:text-emerald-700 underline underline-offset-2">
                          {message.email}
                        </a>
                      )}
                      {message.phone && (
                        <a href={`tel:${message.phone}`} className="hover:text-emerald-700 underline underline-offset-2">
                          {message.phone}
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <div className="rounded-lg bg-stone-50 p-4 text-sm text-stone-800 whitespace-pre-wrap border border-stone-100">
                    {message.message}
                  </div>
                </div>

                <div className="flex flex-col gap-4 min-w-[200px] shrink-0 md:pl-6 md:border-l md:border-stone-100">
                  <div>
                    <label className="block text-xs font-medium text-stone-500 mb-1">
                      Status
                    </label>
                    <select
                      value={message.status}
                      onChange={(e) => handleStatusChange(message._id, e.target.value as Status)}
                      disabled={savingId === message._id}
                      className="w-full rounded-md border border-stone-200 bg-white px-3 py-1.5 text-sm outline-none transition-colors focus:border-emerald-500 disabled:opacity-50"
                    >
                      {Object.entries(STATUS_LABELS).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-stone-500 mb-1">
                      Notițe interne
                    </label>
                    <textarea
                      defaultValue={message.notes || ""}
                      onBlur={(e) => {
                        if (e.target.value !== (message.notes || "")) {
                          handleNotesChange(message._id, e.target.value);
                        }
                      }}
                      disabled={savingId === message._id}
                      placeholder="Adaugă o notiță..."
                      rows={3}
                      className="w-full rounded-md border border-stone-200 bg-white px-3 py-2 text-sm outline-none transition-colors focus:border-emerald-500 resize-none disabled:opacity-50"
                    />
                    <p className="mt-1 text-[0.65rem] text-stone-400">Se salvează automat la debifare (click în afară).</p>
                  </div>
                  
                  {savingId === message._id && (
                    <span className="text-xs text-emerald-600 animate-pulse">Se salvează...</span>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
