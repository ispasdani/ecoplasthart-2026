import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/marketing/site-footer";
import { SiteHeader } from "@/components/marketing/site-header";
import { getDictionary } from "@/lib/i18n/dictionary";
import { isLocale, localizedPath } from "@/lib/i18n/routing";
import {
  MAPS_HREF,
  getPrimaryLinks,
  getServiceNavItems,
} from "@/lib/site/nav";

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
  const homeHref = localizedPath("/", locale);
  const links = getPrimaryLinks(dict, locale);
  const services = getServiceNavItems(dict, locale);

  return (
    <div className="flex min-h-full flex-col bg-canvas">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-medium focus:text-on-dark"
      >
        {dict.a11y.skipToContent}
      </a>

      <SiteHeader
        locale={locale}
        homeHref={homeHref}
        links={links}
        services={services.map(({ slug, href, name, desc }) => ({
          slug,
          href,
          name,
          desc,
        }))}
        labels={{
          cta: dict.nav.cta,
          ctaHref: links.contact.href,
          servicesOverview: dict.nav.servicesOverview,
          servicesOverviewDesc: dict.nav.servicesOverviewDesc,
          openMenu: dict.nav.openMenu,
          closeMenu: dict.nav.closeMenu,
          languageSwitcher: dict.a11y.languageSwitcher,
        }}
      />

      <main id="main" className="flex-1">
        {children}
      </main>

      <SiteFooter
        dict={dict}
        homeHref={homeHref}
        mapsHref={MAPS_HREF}
        serviceLinks={services.map(({ href, name }) => ({
          href,
          label: name,
        }))}
        companyLinks={[
          { href: links.about.href, label: dict.nav.about },
          { href: links.services.href, label: dict.nav.services },
          { href: links.certifications.href, label: dict.nav.certifications },
          { href: links.contact.href, label: dict.nav.contact },
        ]}
      />
    </div>
  );
}
