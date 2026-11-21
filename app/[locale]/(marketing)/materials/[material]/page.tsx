import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  FileCheck2,
  Phone,
} from "lucide-react";

import { ArticleSummaryCard } from "@/components/marketing/articles/article-summary-card";
import { PageHero } from "@/components/marketing/page-hero";
import { CtaBand } from "@/components/marketing/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink, IconCircle } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/layout";
import { MediaTile } from "@/components/ui/media";
import { Reveal, RevealItem, Stagger } from "@/components/ui/reveal";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import {
  isLocale,
  isMaterialSlug,
  localizedPath,
  materialKeyFromSlug,
  materialSlugs,
} from "@/lib/i18n/routing";
import { getArticle } from "@/lib/site/articles";
import { getMaterial, getMaterials } from "@/lib/site/materials";
import { getPrimaryLinks, getServiceNavItems } from "@/lib/site/nav";
import { materialDetailGraph } from "@/lib/site/structured-data";

export function generateStaticParams() {
  return materialSlugs.map((material) => ({ material }));
}

export const dynamicParams = false;

type MaterialPageProps = {
  params: Promise<{ locale: string; material: string }>;
};

export async function generateMetadata({
  params,
}: MaterialPageProps): Promise<Metadata> {
  const { locale, material } = await params;
  if (!isLocale(locale) || !isMaterialSlug(material)) return {};

  const dict = await getDictionary(locale);
  const item = dict.materials.items[material];

  return buildPageMetadata({
    locale,
    pathnameKey: materialKeyFromSlug(material),
    title: item.metaTitle,
    description: item.metaDescription,
    siteName: dict.meta.siteName,
    ogImagePath: `/og/${locale}/materials/${material}`,
  });
}

export default async function MaterialDetailPage({ params }: MaterialPageProps) {
  const { locale, material: slug } = await params;
  if (!isLocale(locale) || !isMaterialSlug(slug)) notFound();

  const dict = await getDictionary(locale);
  const links = getPrimaryLinks(dict, locale);
  const material = getMaterial(dict, locale, slug);
  const allMaterials = getMaterials(dict, locale);
  const otherMaterials = allMaterials.filter((m) => m.slug !== slug).slice(0, 3);
  const parentService = getServiceNavItems(dict, locale).find(
    (s) => s.key === material.service,
  );
  const relatedArticles = material.articles.map((articleSlug) =>
    getArticle(dict, locale, articleSlug),
  );

  const t = dict.materials.labels;
  const Icon = material.icon;
  const phoneHref = `tel:${dict.company.phonePrimary.replace(/\s/g, "")}`;
  const materialsHref = localizedPath("/materials", locale);
  const documentsArticleHref = localizedPath(
    "/articles/documents-needed-to-sell-scrap-metal",
    locale,
  );

  return (
    <>
      <JsonLd graph={materialDetailGraph(dict, locale, slug)} />

      <PageHero
        eyebrow={dict.materials.eyebrow}
        title={material.title}
        lead={material.lead}
        breadcrumbLabel={dict.a11y.breadcrumb}
        crumbs={[
          { href: localizedPath("/", locale), label: dict.nav.home },
          { href: materialsHref, label: dict.nav.materials },
          { href: material.href, label: material.name },
        ]}
        aside={
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={phoneHref} trailingIcon="arrow">
              {t.callForPrice}
            </ButtonLink>
            <ButtonLink href={links.contact.href} variant="secondary">
              {dict.common.requestQuote}
            </ButtonLink>
          </div>
        }
      />

      {/* Grades + Accepted materials + Media */}
      <Section tone="canvas" space="lg">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Reveal>
                <h2 className="text-heading text-ink">{t.gradesHeading}</h2>
              </Reveal>

              <Stagger className="mt-8 grid gap-x-8 gap-y-8 sm:grid-cols-2">
                {material.grades.map((grade) => (
                  <RevealItem key={grade.title}>
                    <div className="h-full border-t border-hairline pt-5">
                      <h3 className="text-[1.0625rem] font-semibold text-ink">
                        {grade.title}
                      </h3>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">
                        {grade.body}
                      </p>
                    </div>
                  </RevealItem>
                ))}
              </Stagger>

              {/* Price callout */}
              <Reveal>
                <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-hairline bg-surface-feature p-6 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-3">
                    <Phone
                      aria-hidden
                      className="mt-0.5 size-5 shrink-0 text-brand"
                      strokeWidth={2}
                    />
                    <p className="text-[0.9375rem] leading-relaxed text-ink">
                      {t.priceCtaNote}
                    </p>
                  </div>
                  <ButtonLink
                    href={phoneHref}
                    size="sm"
                    className="shrink-0"
                  >
                    {dict.company.phonePrimary}
                  </ButtonLink>
                </div>
              </Reveal>

              {/* Accepted list */}
              <Reveal>
                <div className="mt-10 rounded-2xl border border-hairline bg-surface-soft p-6 sm:p-8">
                  <Eyebrow className="mb-5">{t.acceptedHeading}</Eyebrow>
                  <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {material.accepted.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-[0.9375rem] text-charcoal"
                      >
                        <Check
                          aria-hidden
                          className="mt-0.5 size-4 shrink-0 text-brand"
                          strokeWidth={2.4}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Preparation steps */}
              <Reveal>
                <div className="mt-12">
                  <h2 className="text-heading text-ink">{t.prepHeading}</h2>
                  <ol className="mt-6 space-y-4">
                    {material.preparation.map((step, i) => (
                      <li
                        key={step}
                        className="flex items-start gap-4 rounded-xl border border-hairline bg-canvas p-5"
                      >
                        <span className="grid size-7 shrink-0 place-items-center rounded-full bg-surface text-[0.8125rem] font-semibold text-brand">
                          {i + 1}
                        </span>
                        <p className="text-[0.9375rem] leading-relaxed text-slate">
                          {step}
                        </p>
                      </li>
                    ))}
                  </ol>

                  <Link
                    href={documentsArticleHref}
                    className="mt-5 inline-flex items-center gap-2 text-[0.875rem] font-medium text-brand transition-colors hover:text-brand-dark"
                  >
                    <FileCheck2 aria-hidden className="size-4" />
                    {t.documentsLink}
                    <ArrowRight aria-hidden className="size-3.5" />
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <div className="space-y-6 lg:sticky lg:top-28">
                <MediaTile
                  icon={Icon}
                  src={material.image}
                  alt={material.imageAlt ?? ""}
                  video={material.video}
                  poster={material.poster}
                  variant={material.variant}
                  overlay={false}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-[18rem] rounded-2xl sm:h-[24rem] lg:h-[26rem]"
                />

                {parentService ? (
                  <Link
                    href={parentService.href}
                    className="group block rounded-2xl border border-hairline bg-surface-soft p-6 transition-colors hover:border-hairline-strong"
                  >
                    <Eyebrow className="mb-2.5">{t.parentServiceEyebrow}</Eyebrow>
                    <p className="text-[1.0625rem] font-semibold text-ink">
                      {parentService.name}
                    </p>
                    <p className="mt-1.5 text-[0.875rem] leading-relaxed text-slate">
                      {parentService.desc}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-brand">
                      {t.parentServiceCta}
                      <ArrowRight
                        aria-hidden
                        className="size-4 transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                ) : null}

                <Link
                  href={materialsHref}
                  className="group inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-steel transition-colors hover:text-ink"
                >
                  <ArrowLeft
                    aria-hidden
                    className="size-4 transition-transform group-hover:-translate-x-0.5"
                    strokeWidth={2}
                  />
                  {t.backToMaterials}
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ — plain visible markup matching FAQPage JSON-LD */}
      <Section tone="surface" space="lg">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="text-heading text-ink">{t.faqHeading}</h2>
            </Reveal>
            <dl className="mt-8 flex flex-col gap-7">
              {material.faq.map((entry) => (
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

      {/* Related articles */}
      {relatedArticles.length > 0 ? (
        <Section tone="canvas" space="lg" className="border-b border-hairline">
          <Container>
            <Reveal>
              <h2 className="text-heading text-ink">
                {t.relatedArticlesHeading}
              </h2>
            </Reveal>
            <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArticles.map((article) => (
                <RevealItem key={article.slug} className="h-full">
                  <ArticleSummaryCard article={article} locale={locale} />
                </RevealItem>
              ))}
            </Stagger>
          </Container>
        </Section>
      ) : null}

      {/* Other materials */}
      <Section tone="canvas" space="lg">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-heading text-ink">
                {t.otherMaterialsHeading}
              </h2>
              <ButtonLink
                href={materialsHref}
                variant="secondary"
                size="sm"
                trailingIcon="arrow"
              >
                {t.allMaterialsCta}
              </ButtonLink>
            </div>
          </Reveal>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-3">
            {otherMaterials.map((other) => {
              const OtherIcon = other.icon;
              return (
                <RevealItem key={other.slug}>
                  <Link
                    href={other.href}
                    className="group flex h-full flex-col rounded-xl border border-hairline bg-canvas p-6 transition-all duration-200 hover:border-hairline-strong hover:shadow-e2"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <IconCircle tone="dark">
                        <OtherIcon
                          aria-hidden
                          className="size-[1.05rem]"
                          strokeWidth={1.7}
                        />
                      </IconCircle>
                      <ArrowUpRight
                        aria-hidden
                        className="size-4 text-steel transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                      />
                    </div>
                    <h3 className="mt-6 text-[1.0625rem] font-semibold text-ink">
                      {other.name}
                    </h3>
                    <p className="mt-2 text-[0.875rem] leading-relaxed text-slate">
                      {other.navDesc}
                    </p>
                  </Link>
                </RevealItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      <CtaBand dict={dict} contactHref={links.contact.href} />
    </>
  );
}
