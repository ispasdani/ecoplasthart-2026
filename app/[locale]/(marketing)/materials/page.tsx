import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  FileCheck2,
  MapPin,
  Phone,
  Truck,
} from "lucide-react";

import { CtaBand } from "@/components/marketing/sections/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink, IconCircle } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/layout";
import { Reveal, RevealItem, Stagger } from "@/components/ui/reveal";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { isLocale, localizedPath } from "@/lib/i18n/routing";
import { getMaterials } from "@/lib/site/materials";
import { getPrimaryLinks } from "@/lib/site/nav";
import { materialsIndexGraph } from "@/lib/site/structured-data";

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
    pathnameKey: "/materials",
    title: dict.materials.metaTitle,
    description: dict.materials.metaDescription,
    siteName: dict.meta.siteName,
  });
}

export default async function MaterialsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const links = getPrimaryLinks(dict, locale);
  const materials = getMaterials(dict, locale);
  const t = dict.materials;
  const phoneHref = `tel:${dict.company.phonePrimary.replace(/\s/g, "")}`;
  const documentsArticleHref = localizedPath(
    "/articles/documents-needed-to-sell-scrap-metal",
    locale,
  );

  return (
    <>
      <JsonLd graph={materialsIndexGraph(dict, locale)} />

      <PageHero
        eyebrow={t.eyebrow}
        title={t.index.title}
        lead={t.index.lead}
        breadcrumbLabel={dict.a11y.breadcrumb}
        crumbs={[
          { href: localizedPath("/", locale), label: dict.nav.home },
          { href: localizedPath("/materials", locale), label: dict.nav.materials },
        ]}
        aside={
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={phoneHref} trailingIcon="arrow">
              {t.labels.callForPrice}
            </ButtonLink>
            <ButtonLink href={links.contact.href} variant="secondary">
              {dict.common.requestQuote}
            </ButtonLink>
          </div>
        }
      />

      {/* Material cards */}
      <Section tone="canvas" space="lg">
        <Container>
          <Stagger className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {materials.map((material) => {
              const Icon = material.icon;
              return (
                <RevealItem key={material.slug}>
                  <Link
                    href={material.href}
                    className="group flex h-full flex-col rounded-2xl border border-hairline bg-canvas p-6 transition-all duration-200 hover:border-hairline-strong hover:shadow-e2 sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <IconCircle tone="dark" className="size-12">
                        <Icon
                          aria-hidden
                          className="size-[1.2rem]"
                          strokeWidth={1.7}
                        />
                      </IconCircle>
                      <span
                        aria-hidden
                        className="grid size-8 place-items-center rounded-full border border-hairline text-steel transition-all duration-200 group-hover:border-brand group-hover:bg-brand group-hover:text-white"
                      >
                        <ArrowUpRight className="size-4" />
                      </span>
                    </div>

                    <h2 className="mt-6 text-xl font-semibold text-ink">
                      {material.name}
                    </h2>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">
                      {material.navDesc}
                    </p>

                    <ul className="mt-5 flex-1 space-y-2 border-t border-hairline pt-5">
                      {material.accepted.slice(0, 3).map((example) => (
                        <li
                          key={example}
                          className="flex items-start gap-2 text-[0.8125rem] text-charcoal"
                        >
                          <Check
                            aria-hidden
                            className="mt-0.5 size-3.5 shrink-0 text-brand"
                            strokeWidth={2.4}
                          />
                          {example}
                        </li>
                      ))}
                    </ul>

                    <span className="mt-6 inline-flex items-center gap-1.5 text-[0.875rem] font-medium text-brand">
                      {t.index.viewDetails}
                      <ArrowRight
                        aria-hidden
                        className="size-4 transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </RevealItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      {/* Drop-off vs pickup + daily quote info */}
      <Section tone="surface" space="lg">
        <Container>
          <Stagger className="grid gap-4 md:grid-cols-3">
            <RevealItem>
              <div className="flex h-full flex-col rounded-2xl border border-hairline bg-canvas p-6 sm:p-7">
                <IconCircle tone="dark">
                  <MapPin aria-hidden className="size-[1.1rem]" strokeWidth={1.7} />
                </IconCircle>
                <h2 className="mt-6 text-[1.0625rem] font-semibold text-ink">
                  {t.index.dropOffHeading}
                </h2>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-slate">
                  {t.index.dropOffBody}
                </p>
              </div>
            </RevealItem>

            <RevealItem>
              <div className="flex h-full flex-col rounded-2xl border border-hairline bg-canvas p-6 sm:p-7">
                <IconCircle tone="dark">
                  <Truck aria-hidden className="size-[1.1rem]" strokeWidth={1.7} />
                </IconCircle>
                <h2 className="mt-6 text-[1.0625rem] font-semibold text-ink">
                  {t.index.pickupHeading}
                </h2>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-slate">
                  {t.index.pickupBody}
                </p>
              </div>
            </RevealItem>

            <RevealItem>
              <div className="flex h-full flex-col rounded-2xl border border-hairline bg-canvas p-6 sm:p-7">
                <IconCircle tone="dark">
                  <Phone aria-hidden className="size-[1.1rem]" strokeWidth={1.7} />
                </IconCircle>
                <h2 className="mt-6 text-[1.0625rem] font-semibold text-ink">
                  {t.index.priceNoteHeading}
                </h2>
                <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-slate">
                  {t.index.priceNoteBody}
                </p>
                <a
                  href={phoneHref}
                  className="mt-5 inline-flex items-center gap-1.5 text-[0.9375rem] font-semibold text-brand transition-colors hover:text-brand-dark"
                >
                  {dict.company.phonePrimary}
                  <ArrowRight aria-hidden className="size-4" />
                </a>
              </div>
            </RevealItem>
          </Stagger>

          <Reveal>
            <Link
              href={documentsArticleHref}
              className="group mt-6 flex flex-col gap-3 rounded-2xl border border-hairline bg-canvas p-6 transition-colors hover:border-hairline-strong sm:flex-row sm:items-center sm:justify-between sm:px-8"
            >
              <div className="flex items-start gap-3.5">
                <FileCheck2
                  aria-hidden
                  className="mt-0.5 size-5 shrink-0 text-brand"
                  strokeWidth={1.8}
                />
                <div>
                  <Eyebrow className="mb-1">{dict.nav.articles}</Eyebrow>
                  <p className="text-[1rem] font-semibold text-ink">
                    {t.index.documentsLinkLabel}
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1.5 text-[0.875rem] font-medium text-brand">
                {dict.articles.readArticle}
                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                />
              </span>
            </Link>
          </Reveal>
        </Container>
      </Section>

      <CtaBand dict={dict} contactHref={links.contact.href} />
    </>
  );
}
