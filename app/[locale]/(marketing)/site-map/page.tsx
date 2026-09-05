import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/marketing/page-hero";
import { Container, Section } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { isLocale, localizedPath } from "@/lib/i18n/routing";
import { getArticles } from "@/lib/site/articles";
import { getPrimaryLinks, getServiceNavItems } from "@/lib/site/nav";
import { simplePageGraph } from "@/lib/site/structured-data";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);

  return buildPageMetadata({
    locale,
    pathnameKey: "/site-map",
    title: dict.siteMap.metaTitle,
    description: dict.siteMap.metaDescription,
    siteName: dict.meta.siteName,
  });
}

/**
 * Human-readable index of every public page.
 *
 * Two jobs. For a crawler it guarantees one internal link to every URL from a
 * page that is itself linked site-wide, which the XML sitemap does not do —
 * XML is a discovery hint, internal links carry weight. For a visitor who
 * cannot find something it is the fallback the 404 page also leans on.
 *
 * Sections are grouped rather than listed flat so the grouping itself says
 * something about how the site is organised.
 */
export default async function SiteMapPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const links = getPrimaryLinks(dict, locale);
  const services = getServiceNavItems(dict, locale);
  const articles = getArticles(dict, locale);
  const t = dict.siteMap;

  const groups = [
    {
      heading: t.servicesHeading,
      items: [
        { href: links.services.href, label: dict.nav.servicesOverview },
        ...services.map((s) => ({ href: s.href, label: s.name })),
      ],
    },
    {
      heading: t.companyHeading,
      items: [
        { href: localizedPath("/", locale), label: dict.nav.home },
        { href: links.about.href, label: dict.nav.about },
        { href: links.certifications.href, label: dict.nav.certifications },
        { href: links.contact.href, label: dict.nav.contact },
      ],
    },
    {
      heading: t.resourcesHeading,
      items: [
        { href: links.articles.href, label: dict.articles.title },
        ...articles.map((article) => ({
          href: article.href,
          label: article.title,
        })),
      ],
    },
    {
      heading: t.legalHeading,
      items: [
        { href: links.privacy.href, label: dict.nav.privacy },
        { href: links.cookies.href, label: dict.nav.cookies },
        { href: localizedPath("/site-map", locale), label: dict.nav.siteMap },
      ],
    },
  ];

  return (
    <>
      <JsonLd
        graph={simplePageGraph({
          dict,
          locale,
          pathnameKey: "/site-map",
          title: t.metaTitle,
          description: t.metaDescription,
          crumbLabel: dict.nav.siteMap,
        })}
      />

      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        breadcrumbLabel={dict.a11y.breadcrumb}
        crumbs={[
          { href: localizedPath("/", locale), label: dict.nav.home },
          { href: localizedPath("/site-map", locale), label: dict.nav.siteMap },
        ]}
      />

      <Section tone="canvas" space="lg">
        <Container>
          <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {groups.map((group) => (
              <Reveal key={group.heading}>
                <nav aria-label={group.heading}>
                  <h2 className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-slate">
                    {group.heading}
                  </h2>

                  <ul className="mt-5">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block border-b border-hairline py-3 text-[0.9375rem] text-charcoal transition-colors hover:text-brand"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
