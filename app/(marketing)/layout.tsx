import Link from "next/link";
import type { ReactNode } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About us" },
];

const CONTACT = {
  email: "ecoplast_hart@yahoo.com",
  phone: "+40 746 152 318",
  address: "Sat Cristur, Șos. Hunedoarei nr. 13, jud. Hunedoara, România",
};

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-600 text-white">
        ♻
      </span>
      <span className="text-lg">
        Ecoplast <span className="text-emerald-700">Hart</span>
      </span>
    </Link>
  );
}

export default function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col bg-white text-stone-900">
      <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Logo />
          <nav className="flex items-center gap-6 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-stone-600 transition-colors hover:text-emerald-700"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded-full bg-emerald-600 px-4 py-2 text-white transition-colors hover:bg-emerald-700"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm text-stone-600">
              Collection, sorting and recycling of recyclable materials since 2004.
              Hunedoara county, Romania.
            </p>
          </div>
          <div className="text-sm">
            <h3 className="font-semibold text-stone-900">Contact</h3>
            <ul className="mt-3 space-y-1 text-stone-600">
              <li>
                <a className="hover:text-emerald-700" href={`mailto:${CONTACT.email}`}>
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a className="hover:text-emerald-700" href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>
                  {CONTACT.phone}
                </a>
              </li>
              <li>{CONTACT.address}</li>
            </ul>
          </div>
          <div className="text-sm">
            <h3 className="font-semibold text-stone-900">Company</h3>
            <ul className="mt-3 space-y-1 text-stone-600">
              <li>Ecoplast Hart SRL</li>
              <li>CUI 17059959 · J20/1943/2004</li>
              <li>CAEN 3832 — sorted recyclable materials</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-200 py-4 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} Ecoplast Hart SRL. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
