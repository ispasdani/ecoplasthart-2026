import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CalendarClock,
  FileCheck2,
  Info,
  Phone,
  Scale,
  TrendingUp,
  Truck,
} from "lucide-react";

import { BlurredPriceBadge } from "@/components/marketing/blurred-price-pill";
import { LongformGuide } from "@/components/marketing/longform-guide";
import { PageHero } from "@/components/marketing/page-hero";
import { CtaBand } from "@/components/marketing/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink, IconCircle } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/layout";
import { Reveal, RevealItem, Stagger } from "@/components/ui/reveal";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { isLocale, localizedPath } from "@/lib/i18n/routing";
import { materialIcons } from "@/lib/site/icons";
import { getPrimaryLinks } from "@/lib/site/nav";
import {
  PRICE_CATEGORIES,
  PRICES_UPDATED_AT,
  formatBlurredMask,
  formatPriceDate,
} from "@/lib/site/prices";
import { pricesPageGraph } from "@/lib/site/structured-data";

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
    pathnameKey: "/prices",
    title: dict.prices.metaTitle,
    description: dict.prices.metaDescription,
    siteName: dict.meta.siteName,
    ogImagePath: `/og/${locale}/prices`,
  });
}

const INFO_ICONS = [Scale, FileCheck2, Truck] as const;

export default async function PricesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const links = getPrimaryLinks(dict, locale);
  const t = dict.prices;
  const phoneHref = `tel:${dict.company.phonePrimary.replace(/\s/g, "")}`;
  const updatedDateLabel = formatPriceDate(PRICES_UPDATED_AT, locale);
  const documentsArticleHref = localizedPath(
    "/articles/documents-needed-to-sell-scrap-metal",
    locale,
  );
  const howPricesWorkHref = localizedPath(
    "/articles/scrap-metal-prices-explained",
    locale,
  );

  return (
    <>
      <JsonLd graph={pricesPageGraph(dict, locale)} />

      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        breadcrumbLabel={dict.a11y.breadcrumb}
        crumbs={[
          { href: localizedPath("/", locale), label: dict.nav.home },
          { href: localizedPath("/prices", locale), label: dict.nav.prices },
        ]}
        aside={
          <div className="mt-7 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface-soft px-4 py-1.5 text-[0.8125rem] font-medium text-charcoal">
              <CalendarClock aria-hidden className="size-3.5 text-brand" />
              <span>{t.updatedLabel}:</span>
              <time dateTime={PRICES_UPDATED_AT} className="font-semibold text-ink">
                {updatedDateLabel}
              </time>
            </div>

            <div className="flex flex-wrap gap-3">
              <ButtonLink href={phoneHref} trailingIcon="arrow">
                {t.callForQuote}
              </ButtonLink>
              <ButtonLink href={links.contact.href} variant="secondary">
                {dict.common.requestQuote}
              </ButtonLink>
            </div>
          </div>
        }
      />

      {/* Quick category navigation + Disclaimer + Price tables */}
      <Section tone="canvas" space="lg">
        <Container>
          {/* Category jump pills */}
          <Reveal>
            <nav
              aria-label={t.eyebrow}
              className="flex flex-wrap gap-2 border-b border-hairline pb-6"
            >
              {PRICE_CATEGORIES.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="rounded-full border border-hairline bg-surface-soft px-4 py-2 text-[0.875rem] font-medium text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  {t.categories[category.id].shortNav}
                </a>
              ))}
            </nav>
          </Reveal>

          {/* Disclaimer / call callout */}
          <Reveal>
            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-hairline bg-surface-feature p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7">
              <div className="flex items-start gap-3.5">
                <Info
                  aria-hidden
                  className="mt-0.5 size-5 shrink-0 text-brand"
                  strokeWidth={2}
                />
                <div className="max-w-2xl">
                  <p className="text-[0.9375rem] font-semibold text-ink">
                    {t.disclaimerTitle}
                  </p>
                  <p className="mt-1 text-[0.875rem] leading-relaxed text-slate">
                    {t.disclaimerBody}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2.5">
                <ButtonLink href={phoneHref} size="sm">
                  <Phone aria-hidden className="size-3.5" />
                  {dict.company.phonePrimary}
                </ButtonLink>
                <ButtonLink
                  href={links.contact.href}
                  variant="secondary"
                  size="sm"
                  trailingIcon="arrow"
                >
                  {dict.common.requestQuote}
                </ButtonLink>
              </div>
            </div>
          </Reveal>

          {/* Category tables */}
          <div className="mt-12 space-y-12">
            {PRICE_CATEGORIES.map((category) => {
              const catCopy = t.categories[category.id];
              const materialHref = localizedPath(category.material, locale);
              const Icon = materialIcons[category.materialSlug];

              return (
                <section
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-28 rounded-2xl border border-hairline bg-canvas p-6 sm:p-8"
                >
                  <div className="flex flex-col gap-4 border-b border-hairline pb-6 sm:flex-row sm:items-end sm:justify-between">
                    <div className="flex items-start gap-4">
                      <IconCircle tone="dark" className="size-11 shrink-0">
                        <Icon
                          aria-hidden
                          className="size-[1.15rem]"
                          strokeWidth={1.7}
                        />
                      </IconCircle>
                      <div>
                        <h2 className="text-xl font-semibold text-ink sm:text-[1.375rem]">
                          {catCopy.name}
                        </h2>
                        <p className="mt-1.5 max-w-2xl text-[0.9375rem] leading-relaxed text-slate">
                          {catCopy.summary}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={materialHref}
                      className="group inline-flex shrink-0 items-center gap-1.5 text-[0.875rem] font-medium text-brand transition-colors hover:text-brand-dark"
                    >
                      {t.materialPageLink}
                      <ArrowRight
                        aria-hidden
                        className="size-4 transition-transform group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>

                  <div className="mt-4 overflow-x-auto">
                    <table className="w-full min-w-[34rem] border-collapse text-left">
                      <thead>
                        <tr className="border-b border-hairline text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-steel">
                          <th scope="col" className="py-3 pr-4">
                            {t.tableHeaders.grade}
                          </th>
                          <th scope="col" className="py-3 pr-4">
                            {t.tableHeaders.details}
                          </th>
                          <th scope="col" className="py-3 text-right">
                            {t.tableHeaders.range}
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-hairline">
                        {category.rows.map((row) => {
                          const grade = t.grades[row.id];
                          return (
                            <tr key={row.id} className="align-top">
                              <td className="py-4 pr-4 text-[0.9375rem] font-semibold text-ink">
                                {grade.label}
                              </td>
                              <td className="py-4 pr-4 text-[0.875rem] leading-relaxed text-slate">
                                {grade.details}
                              </td>
                              <td className="whitespace-nowrap py-4 text-right">
                                <BlurredPriceBadge
                                  maskText={formatBlurredMask(row.mask, locale)}
                                  ctaLabel={t.unlockCta}
                                  href={links.contact.href}
                                  ariaLabel={`${t.unlockAriaPrefix} ${grade.label}`}
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </section>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Key pricing, tax & B2B context */}
      <Section tone="surface" space="lg">
        <Container>
          <Stagger className="grid gap-4 md:grid-cols-3">
            {t.infoCards.map((card, i) => {
              const Icon = INFO_ICONS[i] ?? Scale;
              return (
                <RevealItem key={card.heading}>
                  <div className="flex h-full flex-col rounded-2xl border border-hairline bg-canvas p-6 sm:p-7">
                    <IconCircle tone="dark">
                      <Icon
                        aria-hidden
                        className="size-[1.1rem]"
                        strokeWidth={1.7}
                      />
                    </IconCircle>
                    <h2 className="mt-6 text-[1.0625rem] font-semibold text-ink">
                      {card.heading}
                    </h2>
                    <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-slate">
                      {card.body}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </Stagger>

          {/* Helpful guides cross-links */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Reveal>
              <Link
                href={howPricesWorkHref}
                className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-hairline bg-canvas p-6 transition-colors hover:border-hairline-strong"
              >
                <div className="flex items-start gap-3.5">
                  <TrendingUp
                    aria-hidden
                    className="mt-0.5 size-5 shrink-0 text-brand"
                    strokeWidth={1.8}
                  />
                  <div>
                    <Eyebrow className="mb-1">{t.guidesHeading}</Eyebrow>
                    <p className="text-[0.9375rem] font-semibold text-ink">
                      {t.howPricesWorkLinkLabel}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  aria-hidden
                  className="size-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </Reveal>

            <Reveal>
              <Link
                href={documentsArticleHref}
                className="group flex h-full items-center justify-between gap-4 rounded-2xl border border-hairline bg-canvas p-6 transition-colors hover:border-hairline-strong"
              >
                <div className="flex items-start gap-3.5">
                  <FileCheck2
                    aria-hidden
                    className="mt-0.5 size-5 shrink-0 text-brand"
                    strokeWidth={1.8}
                  />
                  <div>
                    <Eyebrow className="mb-1">{dict.nav.articles}</Eyebrow>
                    <p className="text-[0.9375rem] font-semibold text-ink">
                      {t.documentsLinkLabel}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  aria-hidden
                  className="size-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5"
                />
              </Link>
            </Reveal>
          </div>
        </Container>
      </Section>

      <LongformGuide guide={t.guide} tone="canvas" />

      {/* FAQ — plain visible markup matching FAQPage JSON-LD */}
      <Section tone="surface" space="lg">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="text-heading text-ink">{t.faqHeading}</h2>
            </Reveal>
            <dl className="mt-8 flex flex-col gap-7">
              {t.faq.map((entry) => (
                <div
                  key={entry.question}
                  className="border-b border-hairline pb-7 last:border-b-0 last:pb-0"
                >
                  <dt className="text-[1.0625rem] font-semibold text-ink">
                    {entry.question}
                  </dt>
                  <dd className="mt-2 text-[0.9375rem] leading-relaxed text-slate">
                    {entry.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>
      </Section>

      <CtaBand dict={dict} contactHref={links.contact.href} />
    </>
  );
}
