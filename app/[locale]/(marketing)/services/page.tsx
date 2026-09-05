import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check } from "lucide-react";

import { CtaBand } from "@/components/marketing/sections/cta-band";
import { Process } from "@/components/marketing/sections/process";
import { PageHero } from "@/components/marketing/page-hero";
import { IconCircle } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/layout";
import { Reveal, RevealItem, Stagger } from "@/components/ui/reveal";
import { JsonLd } from "@/components/seo/json-ld";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { isLocale, localizedPath } from "@/lib/i18n/routing";
import { serviceIcons } from "@/lib/site/icons";
import { getPrimaryLinks, getServiceNavItems } from "@/lib/site/nav";
import { servicesIndexGraph } from "@/lib/site/structured-data";

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
    pathnameKey: "/services",
    title: dict.meta.services.title,
    description: dict.meta.services.description,
    siteName: dict.meta.siteName,
  });
}

export default async function ServicesIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const links = getPrimaryLinks(dict, locale);
  const services = getServiceNavItems(dict, locale);

  return (
    <>
      <JsonLd graph={servicesIndexGraph(dict, locale)} />

      <PageHero
        eyebrow={dict.services.eyebrow}
        title={dict.services.index.title}
        lead={dict.services.index.lead}
        breadcrumbLabel={dict.a11y.breadcrumb}
        crumbs={[
          { href: localizedPath("/", locale), label: dict.nav.home },
          { href: localizedPath("/services", locale), label: dict.nav.services },
        ]}
      />

      <Section tone="canvas" space="lg">
        <Container>
          <Stagger className="grid gap-4 md:grid-cols-2">
            {services.map((service) => {
              const item = dict.services.items[service.slug];
              const Icon = serviceIcons[service.slug];

              return (
                <RevealItem key={service.slug}>
                  <Link
                    href={service.href}
                    className="group flex h-full flex-col rounded-2xl border border-hairline bg-canvas p-6 transition-all duration-200 hover:border-hairline-strong hover:shadow-e2 sm:p-8"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <IconCircle tone="dark" className="size-12">
                        <Icon
                          aria-hidden
                          className="size-[1.25rem]"
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

                    <h2 className="mt-7 text-xl font-semibold text-ink">
                      {service.name}
                    </h2>
                    <p className="mt-2.5 flex-1 text-[0.9375rem] leading-relaxed text-slate">
                      {item.lead}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-hairline pt-5">
                      {item.highlights.map((highlight) => (
                        <li
                          key={highlight.title}
                          className="inline-flex items-center gap-1.5 text-[0.8125rem] text-charcoal"
                        >
                          <Check
                            aria-hidden
                            className="size-3.5 shrink-0 text-brand"
                            strokeWidth={2.4}
                          />
                          {highlight.title}
                        </li>
                      ))}
                    </ul>
                  </Link>
                </RevealItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      <Process dict={dict} />

      <Reveal>
        <CtaBand dict={dict} contactHref={links.contact.href} />
      </Reveal>
    </>
  );
}
