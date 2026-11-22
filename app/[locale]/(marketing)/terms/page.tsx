import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  LegalCallout,
  LegalDocument,
  LegalSectionBlock,
} from "@/components/marketing/legal-document";
import { PageHero } from "@/components/marketing/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { isLocale, localizedPath } from "@/lib/i18n/routing";
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
    pathnameKey: "/terms",
    title: dict.legal.terms.metaTitle,
    description: dict.legal.terms.metaDescription,
    siteName: dict.meta.siteName,
  });
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const t = dict.legal.terms;

  return (
    <>
      <JsonLd
        graph={simplePageGraph({
          dict,
          locale,
          pathnameKey: "/terms",
          title: t.metaTitle,
          description: t.metaDescription,
          crumbLabel: dict.nav.terms,
        })}
      />

      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        breadcrumbLabel={dict.a11y.breadcrumb}
        crumbs={[
          { href: localizedPath("/", locale), label: dict.nav.home },
          {
            href: localizedPath("/terms", locale),
            label: dict.nav.terms,
          },
        ]}
      />

      <LegalDocument
        updatedLabel={dict.legal.updatedLabel}
        updatedDate={t.updatedDate}
        tocHeading={dict.legal.tocHeading}
        toc={t.sections.map((s) => s.heading)}
      >
        {t.sections.map((section) => (
          <LegalSectionBlock key={section.heading} section={section} />
        ))}

        <LegalCallout
          text={t.contactCrossLink.text}
          cta={t.contactCrossLink.cta}
          href={localizedPath("/contact", locale)}
        />
      </LegalDocument>
    </>
  );
}
