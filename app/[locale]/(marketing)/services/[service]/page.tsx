import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";

import { CtaBand } from "@/components/marketing/sections/cta-band";
import { Process } from "@/components/marketing/sections/process";
import { PageHero } from "@/components/marketing/page-hero";
import { ButtonLink, IconCircle } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/layout";
import { MediaTile } from "@/components/ui/media";
import { Reveal, RevealItem, Stagger } from "@/components/ui/reveal";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import {
  absoluteUrl,
  isLocale,
  isServiceSlug,
  localizedPath,
  serviceKeyFromSlug,
  serviceSlugs,
} from "@/lib/i18n/routing";
import { serviceIcons, serviceImages, serviceVideos } from "@/lib/site/icons";
import { getPrimaryLinks, getServiceNavItems } from "@/lib/site/nav";

/** All six services × both locales are prerendered at build time. */
export function generateStaticParams() {
  return serviceSlugs.map((service) => ({ service }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}): Promise<Metadata> {
  const { locale, service } = await params;
  if (!isLocale(locale) || !isServiceSlug(service)) return {};

  const dict = await getDictionary(locale);
  const item = dict.services.items[service];

  return buildPageMetadata({
    locale,
    pathnameKey: serviceKeyFromSlug(service),
    title: item.metaTitle,
    description: item.metaDescription,
    siteName: dict.meta.siteName,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service } = await params;
  if (!isLocale(locale) || !isServiceSlug(service)) notFound();

  const dict = await getDictionary(locale);
  const links = getPrimaryLinks(dict, locale);
  const allServices = getServiceNavItems(dict, locale);

  const item = dict.services.items[service];
  const pathnameKey = serviceKeyFromSlug(service);
  const href = localizedPath(pathnameKey, locale);
  const Icon = serviceIcons[service];
  const related = allServices.filter((s) => s.slug !== service).slice(0, 3);
  const variant = serviceSlugs.indexOf(service);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: item.title,
      description: item.metaDescription,
      url: absoluteUrl(href),
      serviceType: item.name,
      provider: {
        "@type": "Organization",
        name: dict.company.legalName,
        url: absoluteUrl(localizedPath("/", locale)),
      },
      areaServed: { "@type": "Country", name: "Romania" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: dict.nav.home,
          item: absoluteUrl(localizedPath("/", locale)),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: dict.nav.services,
          item: absoluteUrl(localizedPath("/services", locale)),
        },
        { "@type": "ListItem", position: 3, name: item.name, item: absoluteUrl(href) },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow={item.name}
        title={item.title}
        lead={item.lead}
        breadcrumbLabel={dict.a11y.breadcrumb}
        crumbs={[
          { href: localizedPath("/", locale), label: dict.nav.home },
          { href: localizedPath("/services", locale), label: dict.nav.services },
          { href, label: item.name },
        ]}
        aside={
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={links.contact.href} trailingIcon="arrow">
              {dict.common.requestQuote}
            </ButtonLink>
            <ButtonLink
              href={`tel:${dict.company.phonePrimary.replace(/\s/g, "")}`}
              variant="secondary"
            >
              {dict.company.phonePrimary}
            </ButtonLink>
          </div>
        }
      />

      {/* Highlights + accepted materials */}
      <Section tone="canvas" space="lg">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <Stagger className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
                {item.highlights.map((highlight) => (
                  <RevealItem key={highlight.title}>
                    <div className="h-full border-t border-hairline pt-6">
                      <h2 className="text-[1.0625rem] font-semibold text-ink">
                        {highlight.title}
                      </h2>
                      <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">
                        {highlight.body}
                      </p>
                    </div>
                  </RevealItem>
                ))}
              </Stagger>

              <Reveal>
                <div className="mt-12 rounded-2xl border border-hairline bg-surface-soft p-6 sm:p-8">
                  <Eyebrow className="mb-5">
                    {dict.common.acceptedMaterials}
                  </Eyebrow>
                  <ul className="grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {item.accepted.map((material) => (
                      <li
                        key={material}
                        className="flex items-start gap-2.5 text-[0.9375rem] text-charcoal"
                      >
                        <Check
                          aria-hidden
                          className="mt-0.5 size-4 shrink-0 text-brand"
                          strokeWidth={2.4}
                        />
                        {material}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>

            <Reveal className="lg:col-span-5">
              <MediaTile
                icon={Icon}
                src={serviceImages[service]}
                video={serviceVideos[service]}
                variant={variant}
                overlay={false}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-[18rem] rounded-2xl sm:h-[24rem] lg:sticky lg:top-28 lg:h-[30rem]"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      <Process dict={dict} />

      {/* Related services */}
      <Section tone="canvas" space="lg">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <h2 className="text-heading text-ink">
                {dict.common.relatedServices}
              </h2>
              <ButtonLink
                href={links.services.href}
                variant="secondary"
                size="sm"
                trailingIcon="arrow"
              >
                {dict.common.seeAllServices}
              </ButtonLink>
            </div>
          </Reveal>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-3">
            {related.map((other) => {
              const OtherIcon = serviceIcons[other.slug];
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
                      {other.desc}
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
