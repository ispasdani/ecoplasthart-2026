import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/ui/layout";
import { getDictionary } from "@/lib/i18n/dictionary";
import { defaultLocale, localizedPath } from "@/lib/i18n/routing";
import { getServiceNavItems } from "@/lib/site/nav";

/**
 * 404 inside the locale tree. Renders within `app/[locale]/layout.tsx`, so it
 * inherits the `<html>` shell — but not the marketing header/footer, which
 * live in the `(marketing)` route group below it.
 *
 * Next does not pass route params to `not-found`, so the locale of the URL that
 * missed is unknowable here. The copy stays bilingual and the links use the
 * default-locale (Romanian) slugs, which is where the traffic is.
 *
 * The links matter beyond politeness: a 404 with a single link back to the
 * homepage is a dead end that spends crawl budget and loses the visitor. This
 * one offers every service, so both a crawler and a person have somewhere to go.
 */
export default async function LocaleNotFound() {
  const dict = await getDictionary(defaultLocale);
  const services = getServiceNavItems(dict, defaultLocale);

  return (
    <Container>
      <div className="mx-auto max-w-3xl py-24 sm:py-32">
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
            The page you were looking for could not be found — one of the links
            below may be what you need.
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

          <Link
            href={localizedPath("/about-us", defaultLocale)}
            className="mt-6 inline-block text-[0.875rem] text-slate underline-offset-4 transition-colors hover:text-ink hover:underline"
          >
            {dict.nav.about}
          </Link>
        </div>
      </div>
    </Container>
  );
}
