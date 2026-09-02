import Link from "next/link";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

/**
 * Global 404. There is no root `app/layout.tsx` (each branch — `[locale]` and
 * `(dashboard)` — owns its own root layout), so this file renders its own
 * `<html>` shell. Defaults to Romanian, the primary locale.
 */
export default function GlobalNotFound() {
  return (
    <html
      lang="ro-RO"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="grid min-h-full place-items-center bg-white px-6 text-center text-stone-900">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            404
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">
            Pagina nu a fost găsită
          </h1>
          <p className="mt-2 text-sm text-stone-600">
            Page not found.
          </p>
          <Link
            href="/"
            className="mt-6 inline-block rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
          >
            Ecoplast Hart →
          </Link>
        </div>
      </body>
    </html>
  );
}
