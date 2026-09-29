import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Quote } from "lucide-react";

import { CtaBand } from "@/components/marketing/sections/cta-band";
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
    pathnameKey: "/reviews",
    title: dict.meta.reviews.title,
    description: dict.meta.reviews.description,
    siteName: dict.meta.siteName,
  });
}

export default async function ReviewsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const links = getPrimaryLinks(dict, locale);
  const t = dict.reviews;

  return (
    <>
      <JsonLd graph={simplePageGraph({
          dict,
          locale,
          pathnameKey: "/reviews",
          title: dict.meta.reviews.title,
          description: dict.meta.reviews.description,
          crumbLabel: dict.nav.reviews,
        })} />

      <PageHero
        title={t.hero.title}
        lead={t.hero.subtitle}
        breadcrumbLabel={dict.a11y.breadcrumb}
        crumbs={[
          { href: localizedPath("/", locale), label: dict.nav.home },
          { href: localizedPath("/reviews", locale), label: dict.nav.reviews },
        ]}
      />

      <Section tone="canvas" space="lg">
        <Container>
          <Stagger className="grid gap-6 sm:grid-cols-2">
            {t.testimonials.map((testimonial, idx) => (
              <RevealItem key={idx}>
                <div className="flex h-full flex-col justify-between rounded-xl border border-hairline bg-surface p-8 shadow-sm">
                  <div>
                    <Quote
                      aria-hidden
                      className="size-8 text-brand/20 mb-6"
                      strokeWidth={1.6}
                    />
                    <p className="text-[1.0625rem] italic leading-relaxed text-ink">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="mt-8 border-t border-hairline pt-4">
                    <p className="text-[0.9375rem] font-semibold text-ink">
                      {testimonial.author}
                    </p>
                  </div>
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
