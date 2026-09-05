import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  LegalCallout,
  LegalDocument,
  LegalSectionBlock,
  LegalTable,
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
    pathnameKey: "/cookie-policy",
    title: dict.legal.cookies.metaTitle,
    description: dict.legal.cookies.metaDescription,
    siteName: dict.meta.siteName,
  });
}

export default async function CookiePolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const t = dict.legal.cookies;

  // The table is authored as named fields per cookie so a translator cannot
  // silently shift a column; the column order lives here, next to the headings.
  const tableRows = t.rows.map((row) => [
    row.name,
    row.provider,
    row.purpose,
    row.duration,
    row.category,
  ]);

  return (
    <>
      <JsonLd
        graph={simplePageGraph({
          dict,
          locale,
          pathnameKey: "/cookie-policy",
          title: t.metaTitle,
          description: t.metaDescription,
          crumbLabel: dict.nav.cookies,
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
            href: localizedPath("/cookie-policy", locale),
            label: dict.nav.cookies,
          },
        ]}
      />

      <LegalDocument
        updatedLabel={dict.legal.updatedLabel}
        updatedDate={dict.legal.updatedDate}
        tocHeading={dict.legal.tocHeading}
        toc={[
          ...t.sections.map((s) => s.heading),
          t.inventoryHeading,
          ...t.trailingSections.map((s) => s.heading),
        ]}
      >
        {t.sections.map((section) => (
          <LegalSectionBlock key={section.heading} section={section} />
        ))}

        <LegalTable
          heading={t.inventoryHeading}
          intro={t.inventoryIntro}
          note={t.inventoryNote}
          caption={t.tableCaption}
          headings={t.tableHeadings}
          rows={tableRows}
        />

        {t.trailingSections.map((section) => (
          <LegalSectionBlock key={section.heading} section={section} />
        ))}

        <LegalCallout
          text={t.privacyCrossLink.text}
          cta={t.privacyCrossLink.cta}
          href={localizedPath("/privacy-policy", locale)}
        />
      </LegalDocument>
    </>
  );
}
