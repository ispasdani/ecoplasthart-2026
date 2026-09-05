import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { ArrowUpRight } from "lucide-react";

import "./globals.css";
import { getDictionary } from "@/lib/i18n/dictionary";
import { defaultLocale, localizedPath } from "@/lib/i18n/routing";
import { getServiceNavItems } from "@/lib/site/nav";

// `latin-ext` is required for Romanian: ă (U+0103), ș (U+0219) and ț (U+021B)
// are outside the `latin` subset. Without it "Pagina nu a fost găsită" renders
// with a system-font substitution mid-word.
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  // Not preloaded: the mono face renders only inside the legal-document
  // tables, so preloading it on every page put two font requests in front of
  // the LCP element (measured as a text button, not an image) competing with
  // the sans face that actually paints it. It still loads on the pages that
  // use it, just on demand.
  preload: false,
  subsets: ["latin", "latin-ext"],
});

/**
 * Global 404, and the one that actually serves unmatched URLs: there is no root
 * `app/layout.tsx` (each branch — `[locale]` and `(dashboard)` — owns its own
 * root layout), so this file renders its own `<html>` shell.
 *
 * The links are the point. A 404 offering only the homepage is a dead end that
 * spends crawl budget and loses the visitor; this one routes both to every
 * service. Copy defaults to Romanian, the primary locale, with an English line
 * underneath since the URL that missed could have come from either tree.
 */
export default async function GlobalNotFound() {
  const dict = await getDictionary(defaultLocale);
  const services = getServiceNavItems(dict, defaultLocale);

  return (
    <html
      lang="ro-RO"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full bg-canvas px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-brand">
            <span aria-hidden className="mr-1 opacity-60">
              /
            </span>
            404
          </p>

          <h1 className="mt-4 text-display-sm text-ink">
            Pagina nu a fost găsită
          </h1>

          <p className="mt-4 text-[0.9375rem] leading-relaxed text-slate">
            Linkul pe care l-ai urmat nu mai există sau a fost mutat. Poate te
            ajută una dintre paginile de mai jos.
            <br />
            <span className="text-steel">
              The page you were looking for could not be found — one of the
              links below may be what you need.
            </span>
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href={localizedPath("/", defaultLocale)}
              className="inline-flex h-12 items-center rounded-full bg-ink px-7 text-[0.9375rem] font-medium text-on-dark transition-colors hover:bg-charcoal"
            >
              {dict.nav.home}
            </Link>
            <Link
              href={localizedPath("/contact", defaultLocale)}
              className="inline-flex h-12 items-center rounded-full border border-hairline-strong px-7 text-[0.9375rem] font-medium text-ink transition-colors hover:border-ink"
            >
              {dict.nav.cta}
            </Link>
          </div>

          <div className="mt-14 border-t border-hairline pt-8">
            <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-slate">
              {dict.nav.services}
            </h2>

            <ul className="mt-5 grid gap-x-8 gap-y-1 sm:grid-cols-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="group flex items-center justify-between gap-3 border-b border-hairline py-3 text-[0.9375rem] text-charcoal transition-colors hover:text-brand"
                  >
                    {service.name}
                    <ArrowUpRight
                      aria-hidden
                      className="size-4 shrink-0 text-steel transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                    />
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[0.875rem] text-slate">
              <Link
                href={localizedPath("/about-us", defaultLocale)}
                className="underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                {dict.nav.about}
              </Link>
              <Link
                href={localizedPath("/certifications", defaultLocale)}
                className="underline-offset-4 transition-colors hover:text-ink hover:underline"
              >
                {dict.nav.certifications}
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
