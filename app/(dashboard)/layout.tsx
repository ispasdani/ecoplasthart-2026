import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

const SIDEBAR_LINKS = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/content", label: "Website content" },
  { href: "/dashboard/media", label: "Media library" },
  { href: "/dashboard/team", label: "Team" },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col bg-stone-50 text-stone-900">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2 font-semibold">
            <span className="grid h-7 w-7 place-items-center rounded-md bg-emerald-600 text-white">
              ♻
            </span>
            <span>Ecoplast Hart</span>
            <span className="rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-500">
              Private
            </span>
          </div>
          <Link
            href="/"
            className="text-sm text-stone-600 transition-colors hover:text-emerald-700"
          >
            View website ↗
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
  );
}
