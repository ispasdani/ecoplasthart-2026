import type { Metadata } from "next";
import { notFound } from "next/navigation";

import {
  LegalCallout,
  LegalDocument,
  LegalIdentity,
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
    pathnameKey: "/privacy-policy",
    title: dict.legal.privacy.metaTitle,
    description: dict.legal.privacy.metaDescription,
    siteName: dict.meta.siteName,
  });
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const { company } = dict;
  const t = dict.legal.privacy;
  const labels = t.identityLabels;

  // The controller's identity is read from `dict.company`, the same source the
  // footer and the JSON-LD use. Restating the CUI or the registered office in
  // the message file would let the legally binding copy drift from the rest of
  // the site the next time one of them changes.
  const identityRows = [
    { label: labels.legalName, value: company.legalName },
    { label: labels.cui, value: company.cui },
    { label: labels.tradeRegister, value: company.tradeRegister },
    { label: labels.addressLegal, value: company.addressLegal },
    { label: labels.addressOperational, value: company.addressOperational },
    {
      label: labels.email,
      value: (
        <a
          href={`mailto:${company.email}`}
          className="text-brand underline decoration-hairline underline-offset-4 transition-colors hover:text-ink"
        >
          {company.email}
        </a>
      ),
    },
    {
      label: labels.phone,
      value: (
        <a
          href={`tel:${company.phonePrimary.replace(/\s/g, "")}`}
          className="text-brand underline decoration-hairline underline-offset-4 transition-colors hover:text-ink"
        >
          {company.phonePrimary}
        </a>
      ),
    },
  ];

  return (
    <>
      <JsonLd
        graph={simplePageGraph({
          dict,
          locale,
          pathnameKey: "/privacy-policy",
          title: t.metaTitle,
          description: t.metaDescription,
          crumbLabel: dict.nav.privacy,
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
            href: localizedPath("/privacy-policy", locale),
            label: dict.nav.privacy,
          },
        ]}
      />

      <LegalDocument
        updatedLabel={dict.legal.updatedLabel}
        updatedDate={dict.legal.updatedDate}
        tocHeading={dict.legal.tocHeading}
        toc={[t.identityHeading, ...t.sections.map((s) => s.heading)]}
      >
        <LegalIdentity heading={t.identityHeading} rows={identityRows} />

        {t.sections.map((section) => (
          <LegalSectionBlock key={section.heading} section={section} />
        ))}

        <LegalCallout
          text={t.cookieCrossLink.text}
          cta={t.cookieCrossLink.cta}
          href={localizedPath("/cookie-policy", locale)}
        />
      </LegalDocument>
    </>
  );
}
