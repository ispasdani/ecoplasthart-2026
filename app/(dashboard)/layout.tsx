import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";

import "../globals.css";
import { ConvexClientProvider } from "@/app/providers/convex-client-provider";

// `latin-ext` is required for Romanian: ă (U+0103), ș (U+0219) and ț (U+021B)
// are outside the `latin` subset and would otherwise fall back to a system font
// mid-word. (â and î are in Latin-1, so they render either way.)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Panou de administrare",
  robots: { index: false, follow: false },
};

// The dashboard is a private, Romanian-only area — it sits outside the
// `[locale]` tree, so its copy is written inline rather than via `messages/`.
const SIDEBAR_LINKS = [
  { href: "/dashboard", label: "Prezentare generală" },
  { href: "/dashboard/content", label: "Conținut site" },
  { href: "/dashboard/media", label: "Bibliotecă media" },
  { href: "/dashboard/team", label: "Echipă" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ro-RO"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <ConvexClientProvider>
          <div className="flex min-h-full flex-col bg-stone-50 text-stone-900">
            <header className="border-b border-stone-200 bg-white">
              <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
                <div className="flex items-center gap-2 font-semibold">
                  <span className="grid h-7 w-7 place-items-center rounded-md bg-emerald-600 text-white">
                    ♻
                  </span>
                  <span>Ecoplast Hart</span>
                  <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-500">
                    Privat
                  </span>
                </div>
                <Link
                  href="/"
                  className="text-sm text-stone-600 transition-colors hover:text-emerald-700"
                >
                  Vezi site-ul ↗
                </Link>
              </div>
            </header>

            <div className="mx-auto flex w-full max-w-6xl flex-1 gap-8 px-4 py-8 sm:px-6">
              <aside className="hidden w-52 shrink-0 sm:block">
                <nav className="space-y-1 text-sm">
                  {SIDEBAR_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded-lg px-3 py-2 font-medium text-stone-600 transition-colors hover:bg-white hover:text-emerald-700"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </aside>

              <div className="min-w-0 flex-1">{children}</div>
            </div>
          </div>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
