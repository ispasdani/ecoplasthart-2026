import Link from "next/link";
import type { ReactNode } from "react";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { getDictionary } from "@/lib/i18n/dictionary";
import { isLocale, localizedPath } from "@/lib/i18n/routing";
import { notFound } from "next/navigation";

const CONTACT = {
  email: "ecoplast_hart@yahoo.com",
  phone: "+40 746 152 318",
  address: "Sat Cristur, Șos. Hunedoarei nr. 13, jud. Hunedoara, România",
};

export default async function MarketingLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const home = localizedPath("/", locale);
  const about = localizedPath("/about-us", locale);

  return (
    <div className="flex min-h-full flex-col bg-white text-stone-900">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-emerald-600 focus:px-4 focus:py-2 focus:text-white"
      >
        {dict.a11y.skipToContent}
      </a>

      <header className="sticky top-0 z-20 border-b border-stone-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            href={home}
            className="flex items-center gap-2 font-semibold tracking-tight"
          >
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-600 text-white">
              ♻
            </span>
            <span className="text-lg">
              Ecoplast <span className="text-emerald-700">Hart</span>
            </span>
          </Link>

          <nav className="flex items-center gap-6 text-sm font-medium">
            <Link
              href={home}
              className="text-stone-600 transition-colors hover:text-emerald-700"
            >
              {dict.nav.home}
            </Link>
            <Link
              href={about}
              className="text-stone-600 transition-colors hover:text-emerald-700"
            >
              {dict.nav.about}
            </Link>
            <a
              href={`mailto:${CONTACT.email}`}
              className="rounded-full bg-emerald-600 px-4 py-2 text-white transition-colors hover:bg-emerald-700"
            >
              {dict.nav.contact}
            </a>
            <LocaleSwitcher current={locale} label={dict.a11y.languageSwitcher} />
          </nav>
        </div>
      </header>

      <main id="main" className="flex-1">
        {children}
      </main>

      <footer className="border-t border-stone-200 bg-stone-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <Link
              href={home}
              className="flex items-center gap-2 font-semibold tracking-tight"
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-600 text-white">
                ♻
              </span>
              <span className="text-lg">
                Ecoplast <span className="text-emerald-700">Hart</span>
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm text-stone-600">
              {dict.footer.blurb}
            </p>
          </div>
          <div className="text-sm">
            <h2 className="font-semibold text-stone-900">
              {dict.footer.contactHeading}
            </h2>
            <ul className="mt-3 space-y-1 text-stone-600">
              <li>
                <a
                  className="hover:text-emerald-700"
                  href={`mailto:${CONTACT.email}`}
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-emerald-700"
                  href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                >
                  {CONTACT.phone}
                </a>
              </li>
              <li>{CONTACT.address}</li>
            </ul>
          </div>
          <div className="text-sm">
            <h2 className="font-semibold text-stone-900">
              {dict.footer.companyHeading}
            </h2>
            <ul className="mt-3 space-y-1 text-stone-600">
              {dict.footer.company.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-stone-200 py-4 text-center text-xs text-stone-500">
          © {new Date().getFullYear()} Ecoplast Hart SRL. {dict.footer.rights}
        </div>
      </footer>
    </div>
  );
}
