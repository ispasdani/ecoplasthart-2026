import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

import { CtaBand } from "@/components/marketing/sections/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { Container, Section, SectionHeader } from "@/components/ui/layout";
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
    pathnameKey: "/how-it-works",
    title: dict.meta.howItWorks.title,
    description: dict.meta.howItWorks.description,
    siteName: dict.meta.siteName,
  });
}

export default async function HowItWorksPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const links = getPrimaryLinks(dict, locale);
  const t = dict.howItWorks;

  return (
    <>
      <JsonLd graph={simplePageGraph({
          dict,
          locale,
          pathnameKey: "/how-it-works",
          title: dict.meta.howItWorks.title,
          description: dict.meta.howItWorks.description,
          crumbLabel: dict.nav.howItWorks,
        })} />

      <PageHero
        title={t.hero.title}
        lead={t.hero.subtitle}
        breadcrumbLabel={dict.a11y.breadcrumb}
        crumbs={[
          { href: localizedPath("/", locale), label: dict.nav.home },
          { href: localizedPath("/how-it-works", locale), label: dict.nav.howItWorks },
        ]}
      />

      <Section tone="canvas" space="lg">
        <Container>
          <Reveal>
            <SectionHeader
              heading={t.hero.title}
              layout="stacked"
            />
          </Reveal>

          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step, idx) => (
              <RevealItem key={idx}>
                <div className="flex h-full flex-col rounded-xl border border-hairline bg-surface p-6 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand/10 text-brand mb-6">
                    <CheckCircle2 className="size-6" strokeWidth={2} />
                  </div>
                  <h3 className="text-[1.0625rem] font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">
                    {step.desc}
                  </p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CtaBand dict={dict} contactHref={links.contact.href} />
    </>
  );
}
