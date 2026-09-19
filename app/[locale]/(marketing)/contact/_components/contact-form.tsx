"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

export function ContactForm() {
  const submitMessage = useMutation(api.messages.submit);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;

    if (!email && !phone) {
      setError("Te rugăm să introduci fie adresa de email, fie numărul de telefon.");
      setIsSubmitting(false);
      return;
    }

    try {
      await submitMessage({
        firstName,
        lastName,
        email: email || undefined,
        phone: phone || undefined,
        message,
      });
      setIsSuccess(true);
    } catch (err: any) {
      setError(err.message || "A apărut o eroare. Vă rugăm să încercați din nou.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="rounded-2xl border border-hairline bg-canvas p-6 sm:p-8 text-center">
        <h3 className="text-xl font-semibold text-ink">Mesajul a fost trimis!</h3>
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate">
          Îți mulțumim că ne-ai contactat. Vom reveni cu un răspuns în cel mai scurt timp posibil.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-hairline bg-canvas p-6 sm:p-8">
      <h2 className="text-xl font-semibold text-ink mb-6">Trimite-ne un mesaj</h2>
      
      {error && (
        <div className="mb-6 rounded-lg bg-red-50 p-4 text-sm text-red-800">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-ink mb-1.5">
              Prenume *
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              required
              className="w-full rounded-lg border border-hairline bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-ink mb-1.5">
              Nume *
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              required
              className="w-full rounded-lg border border-hairline bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full rounded-lg border border-hairline bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-ink mb-1.5">
            Telefon
          </label>
          <input
            type="tel"
            name="phone"
            id="phone"
            className="w-full rounded-lg border border-hairline bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand"
          />
          <p className="mt-1.5 text-xs text-slate">Te rugăm să introduci fie adresa de email, fie numărul de telefon.</p>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-ink mb-1.5">
            Mesaj *
          </label>
          <textarea
            name="message"
            id="message"
            required
            rows={4}
            className="w-full rounded-lg border border-hairline bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand resize-none"
          />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Se trimite..." : "Trimite mesajul"}
        </Button>
      </form>
    </div>
  );
}
