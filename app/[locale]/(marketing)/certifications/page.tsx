import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ShieldCheck } from "lucide-react";

import { CtaBand } from "@/components/marketing/sections/cta-band";
import { ConvexPublicProvider } from "@/app/providers/convex-public-provider";
import { DocumentLibrary } from "@/components/marketing/document-library";
import { PageHero } from "@/components/marketing/page-hero";
import { Container, Section } from "@/components/ui/layout";
import { Reveal, RevealItem, Stagger } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { isLocale, localizedPath } from "@/lib/i18n/routing";
import { getPrimaryLinks } from "@/lib/site/nav";
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
    pathnameKey: "/certifications",
    title: dict.certifications.metaTitle,
    description: dict.certifications.metaDescription,
    siteName: dict.meta.siteName,
  });
}

export default async function CertificationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const links = getPrimaryLinks(dict, locale);
  const t = dict.certifications;

  return (
    <>
      <JsonLd graph={simplePageGraph({
          dict,
          locale,
          pathnameKey: "/certifications",
          title: dict.certifications.metaTitle,
          description: dict.certifications.metaDescription,
          crumbLabel: dict.nav.certifications,
        })} />

      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        breadcrumbLabel={dict.a11y.breadcrumb}
        crumbs={[
          { href: localizedPath("/", locale), label: dict.nav.home },
          {
            href: localizedPath("/certifications", locale),
            label: dict.nav.certifications,
          },
        ]}
      />

      {/* ISO systems */}
      <Section tone="canvas" space="md">
        <Container>
          <Reveal>
            <h2 className="text-heading text-ink">{t.isoHeading}</h2>
          </Reveal>

          <Stagger className="mt-8 grid gap-4 sm:grid-cols-3">
            {dict.about.certifications.items.map((cert) => (
              <RevealItem key={cert.code}>
                <div className="flex h-full flex-col rounded-xl border border-hairline bg-surface-soft p-6">
                  <ShieldCheck
                    aria-hidden
                    className="size-6 text-brand"
                    strokeWidth={1.6}
                  />
                  <p className="mt-6 text-lg font-semibold text-ink">
                    {cert.code}
                  </p>
                  <p className="mt-1 text-[0.875rem] text-slate">
                    {cert.label}
                  </p>
                </div>
              </RevealItem>
            ))}
          </Stagger>

          <Reveal>
            <p className="mt-5 text-[0.8125rem] text-steel">
              {dict.about.certifications.note}
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Uploaded documents */}
      <Section tone="surface" space="lg">
        <Container>
          <Reveal>
            <h2 className="text-heading text-ink">{t.documentsHeading}</h2>
          </Reveal>

          <Reveal className="mt-8">
            <ConvexPublicProvider>
              <DocumentLibrary
                labels={{
                  documentsIntro: t.documentsIntro,
                  loading: t.loading,
                  uncategorized: t.uncategorized,
                  categoryLabels: t.categories,
                  download: dict.common.downloadFile,
                  emptyTitle: t.empty.title,
                  emptyBody: t.empty.body,
                  contactEmail: dict.company.email,
                }}
              />
            </ConvexPublicProvider>
          </Reveal>
        </Container>
      </Section>

      <CtaBand dict={dict} contactHref={links.contact.href} />
    </>
  );
}
