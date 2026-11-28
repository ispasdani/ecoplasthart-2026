import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

import { LongformGuide } from "@/components/marketing/longform-guide";
import { PageHero } from "@/components/marketing/page-hero";
import { CtaBand } from "@/components/marketing/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { ButtonLink } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/layout";
import { Reveal, RevealItem, Stagger } from "@/components/ui/reveal";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import {
  isLocale,
  isTopicSlug,
  localizedPath,
  topicKeyFromSlug,
  topicSlugs,
} from "@/lib/i18n/routing";
import { getPrimaryLinks } from "@/lib/site/nav";
import { topicDetailGraph } from "@/lib/site/structured-data";
import { getTopic, labelForKey } from "@/lib/site/topics";

export function generateStaticParams() {
  return topicSlugs.map((topic) => ({ topic }));
}

export const dynamicParams = false;

type TopicPageProps = {
  params: Promise<{ locale: string; topic: string }>;
};

export async function generateMetadata({
  params,
}: TopicPageProps): Promise<Metadata> {
  const { locale, topic } = await params;
  if (!isLocale(locale) || !isTopicSlug(topic)) return {};

  const dict = await getDictionary(locale);
  const item = dict.topics.items[topic];

  return buildPageMetadata({
    locale,
    pathnameKey: topicKeyFromSlug(topic),
    title: item.metaTitle,
    description: item.metaDescription,
    siteName: dict.meta.siteName,
    ogImagePath: `/og/${locale}/topics/${topic}`,
  });
}

export default async function TopicPage({ params }: TopicPageProps) {
  const { locale, topic: slug } = await params;
  if (!isLocale(locale) || !isTopicSlug(slug)) notFound();

  const dict = await getDictionary(locale);
  const links = getPrimaryLinks(dict, locale);
  const topic = getTopic(dict, locale, slug);
  const t = dict.topics.labels;
  const phoneHref = `tel:${dict.company.phonePrimary.replace(/\s/g, "")}`;

  const crumbs = [{ href: localizedPath("/", locale), label: dict.nav.home }];
  if (topic.parent === "/services") {
    crumbs.push({ href: links.services.href, label: dict.nav.services });
  } else if (topic.parent === "/materials") {
    crumbs.push({ href: links.materials.href, label: dict.nav.materials });
  }
  crumbs.push({ href: topic.href, label: topic.name });

  const codes = slug === "metal-waste-codes" ? dict.topics.wasteCodes : null;

  return (
    <>
      <JsonLd graph={topicDetailGraph(dict, locale, slug)} />

      <PageHero
        eyebrow={topic.eyebrow}
        title={topic.title}
        lead={topic.lead}
        breadcrumbLabel={dict.a11y.breadcrumb}
        crumbs={crumbs}
        aside={
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={phoneHref} trailingIcon="arrow">
              {t.callCta}
            </ButtonLink>
            <ButtonLink href={links.contact.href} variant="secondary">
              {dict.common.requestQuote}
            </ButtonLink>
          </div>
        }
      />

      {/* Key facts */}
      <Section tone="surface" space="lg">
        <Container>
          <Stagger className="grid gap-4 md:grid-cols-3">
            {topic.highlights.map((highlight) => (
              <RevealItem key={highlight.title}>
                <div className="flex h-full flex-col rounded-2xl border border-hairline bg-canvas p-6 sm:p-7">
                  <h2 className="text-[1.0625rem] font-semibold text-ink">
                    {highlight.title}
                  </h2>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-slate">
                    {highlight.body}
                  </p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Waste-code reference table (codes page only) */}
      {codes ? (
        <Section tone="canvas" space="lg">
          <Container>
            <div className="max-w-3xl">
              <Reveal>
                <h2 className="text-heading text-ink">{codes.heading}</h2>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate">
                  {codes.lead}
                </p>
              </Reveal>
            </div>

            <div className="mt-10 flex flex-col gap-10">
              {codes.groups.map((group) => (
                <Reveal key={group.heading}>
                  <h3 className="text-xl font-semibold text-ink">
                    {group.heading}
                  </h3>
                  <div className="mt-4 overflow-x-auto rounded-2xl border border-hairline">
                    <table className="w-full min-w-[36rem] border-collapse text-left text-[0.9375rem]">
                      <thead className="bg-surface-soft text-[0.8125rem] uppercase tracking-[0.08em] text-slate">
                        <tr>
                          <th scope="col" className="px-4 py-3 font-semibold">
                            {codes.columns.code}
                          </th>
                          <th scope="col" className="px-4 py-3 font-semibold">
                            {codes.columns.name}
                          </th>
                          <th scope="col" className="px-4 py-3 font-semibold">
                            {codes.columns.examples}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {group.rows.map((row) => (
                          <tr
                            key={row.code}
                            className="border-t border-hairline align-top"
                          >
                            <th
                              scope="row"
                              className="whitespace-nowrap px-4 py-3 font-semibold text-ink"
                            >
                              {row.code}
                            </th>
                            <td className="px-4 py-3 text-charcoal">{row.name}</td>
                            <td className="px-4 py-3 text-slate">{row.examples}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="mt-6 max-w-3xl text-[0.875rem] leading-relaxed text-steel">
              {codes.note}
            </p>
          </Container>
        </Section>
      ) : null}

      <LongformGuide guide={topic.guide} tone={codes ? "surface" : "canvas"} />

      {/* FAQ — plain visible markup matching FAQPage JSON-LD */}
      <Section tone={codes ? "canvas" : "surface"} space="lg">
        <Container>
          <div className="max-w-3xl">
            <Reveal>
              <h2 className="text-heading text-ink">{t.faqHeading}</h2>
            </Reveal>
            <dl className="mt-8 flex flex-col gap-7">
              {topic.faq.map((entry) => (
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

      {/* Related pages */}
      <Section tone="canvas" space="lg">
        <Container>
          <Reveal>
            <h2 className="text-heading text-ink">{t.relatedHeading}</h2>
          </Reveal>
          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topic.related.map((key) => (
              <RevealItem key={key} className="h-full">
                <Link
                  href={localizedPath(key, locale)}
                  className="group flex h-full items-start justify-between gap-4 rounded-xl border border-hairline bg-canvas p-6 transition-all duration-200 hover:border-hairline-strong hover:shadow-e2"
                >
                  <span className="text-[0.9375rem] font-semibold leading-snug text-ink">
                    {labelForKey(dict, locale, key)}
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="size-4 shrink-0 text-steel transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  />
                </Link>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CtaBand dict={dict} contactHref={links.contact.href} />
    </>
  );
}
