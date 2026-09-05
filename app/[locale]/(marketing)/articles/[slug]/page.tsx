import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check, ChevronRight } from "lucide-react";

import { ArticleSummaryCard } from "@/components/marketing/articles/article-summary-card";
import { CtaBand } from "@/components/marketing/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { Badge } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/layout";
import { MediaTile } from "@/components/ui/media";
import { Reveal, RevealItem, Stagger } from "@/components/ui/reveal";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import {
  articleKeyFromSlug,
  articleSlugs,
  isArticleSlug,
  isLocale,
  localizedPath,
} from "@/lib/i18n/routing";
import {
  formatArticleDate,
  getArticle,
  getArticles,
} from "@/lib/site/articles";
import { getPrimaryLinks } from "@/lib/site/nav";
import { articleDetailGraph } from "@/lib/site/structured-data";

/** All five articles × both locales are prerendered at build time. */
export function generateStaticParams() {
  return articleSlugs.map((slug) => ({ slug }));
}

export const dynamicParams = false;

type ArticlePageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isArticleSlug(slug)) return {};

  const dict = await getDictionary(locale);
  const article = getArticle(dict, locale, slug);

  const metadata = buildPageMetadata({
    locale,
    pathnameKey: articleKeyFromSlug(slug),
    title: article.metaTitle,
    description: article.metaDescription,
    siteName: dict.meta.siteName,
  });

  return {
    ...metadata,
    openGraph: {
      ...metadata.openGraph,
      // `article`, not `website`: the dates below only carry meaning under
      // this OG type, and they are what a feed reader or a social preview
      // uses to order and age the piece.
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [dict.company.legalName],
      section: article.topicLabel,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isArticleSlug(slug)) notFound();

  const dict = await getDictionary(locale);
  const links = getPrimaryLinks(dict, locale);
  const t = dict.articles;

  const article = getArticle(dict, locale, slug);
  const articlesHref = localizedPath("/articles", locale);
  const related = getArticles(dict, locale)
    .filter((candidate) => candidate.slug !== slug)
    .slice(0, 3);

  const facts = [
    { label: t.authorLabel, value: t.author.name },
    {
      label: t.dateLabel,
      value: formatArticleDate(article.publishedAt, locale),
      dateTime: article.publishedAt,
    },
    { label: t.readLabel, value: article.readTime },
  ];

  return (
    <>
      <JsonLd graph={articleDetailGraph(dict, locale, slug)} />

      <Section tone="canvas" space="md" className="border-b border-hairline">
        <Container>
          <nav aria-label={dict.a11y.breadcrumb} className="mb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-[0.8125rem] text-steel">
              <li>
                <Link
                  href={localizedPath("/", locale)}
                  className="transition-colors hover:text-ink"
                >
                  {dict.nav.home}
                </Link>
              </li>
              <li className="flex items-center gap-1.5">
                <ChevronRight aria-hidden className="size-3.5 text-muted" />
                <Link
                  href={articlesHref}
                  className="transition-colors hover:text-ink"
                >
                  {dict.nav.articles}
                </Link>
              </li>
              <li className="flex min-w-0 items-center gap-1.5">
                <ChevronRight aria-hidden className="size-3.5 text-muted" />
                <span className="truncate text-charcoal">{article.title}</span>
              </li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-12 lg:gap-x-16">
            {/* Article identity rail — mirrors the feed's thumbnail column. */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <MediaTile
                  icon={article.icon}
                  variant={article.variant}
                  overlay={false}
                  className="aspect-[4/3] w-full sm:aspect-square"
                />

                <dl className="mt-6 border-t border-hairline">
                  {facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex items-baseline justify-between gap-4 border-b border-hairline py-3.5 text-[0.875rem]"
                    >
                      <dt className="font-medium text-ink">{fact.label}</dt>
                      <dd className="text-right text-slate">
                        {fact.dateTime ? (
                          <time dateTime={fact.dateTime}>{fact.value}</time>
                        ) : (
                          fact.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>

                <Link
                  href={articlesHref}
                  className="group mt-6 inline-flex items-center gap-1.5 text-[0.8125rem] font-medium text-steel transition-colors hover:text-ink"
                >
                  <ArrowLeft
                    aria-hidden
                    className="size-4 transition-transform group-hover:-translate-x-0.5"
                    strokeWidth={2}
                  />
                  {t.backToArticles}
                </Link>
              </div>
            </aside>

            {/* Body */}
            <article className="lg:col-span-8">
              <Badge tone="brand">{article.topicLabel}</Badge>

              <h1 className="mt-5 text-display-sm text-balance text-ink">
                {article.title}
              </h1>

              <p className="mt-6 text-[1.0625rem] leading-relaxed text-slate sm:text-[1.125rem]">
                {article.lead}
              </p>

              {/* Summary box — the answer a reader (or an AI overview) is
                  most likely to lift, kept above the body on purpose. */}
              <div className="mt-10 rounded-2xl border border-hairline bg-surface-soft p-6 sm:p-8">
                <Eyebrow className="mb-5">{t.keyPointsHeading}</Eyebrow>
                <ul className="flex flex-col gap-3">
                  {article.keyPoints.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[0.9375rem] leading-relaxed text-charcoal"
                    >
                      <Check
                        aria-hidden
                        className="mt-1 size-4 shrink-0 text-brand"
                        strokeWidth={2.4}
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-12 flex flex-col gap-10">
                {article.sections.map((section) => (
                  <section key={section.heading}>
                    <h2 className="text-[1.25rem] font-semibold leading-snug text-ink sm:text-[1.375rem]">
                      {section.heading}
                    </h2>
                    <div className="mt-4 flex flex-col gap-4">
                      {section.body.map((paragraph) => (
                        <p
                          key={paragraph}
                          className="text-[1rem] leading-[1.75] text-slate"
                        >
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>

              {/* FAQ — plain markup, no disclosure widget: the answers must be
                  in the rendered text for the JSON-LD `FAQPage` to be honest. */}
              <section className="mt-14 border-t border-hairline pt-10">
                <h2 className="text-heading text-ink">{t.faqHeading}</h2>
                <dl className="mt-8 flex flex-col gap-7">
                  {article.faq.map((entry) => (
                    <div key={entry.question}>
                      <dt className="text-[1.0625rem] font-semibold text-ink">
                        {entry.question}
                      </dt>
                      <dd className="mt-2 text-[0.9375rem] leading-relaxed text-slate">
                        {entry.answer}
                      </dd>
                    </div>
                  ))}
                </dl>
              </section>

              <p className="mt-12 border-l-2 border-hairline-strong pl-5 text-[0.8125rem] leading-relaxed text-steel">
                {t.disclaimer}
              </p>
            </article>
          </div>
        </Container>
      </Section>

      {/* More articles */}
      <Section tone="surface" space="lg">
        <Container>
          <Reveal>
            <h2 className="text-heading text-ink">{t.moreArticles}</h2>
          </Reveal>

          <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((other) => (
              <RevealItem key={other.slug} className="h-full">
                <ArticleSummaryCard article={other} locale={locale} />
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      <CtaBand dict={dict} contactHref={links.contact.href} />
    </>
  );
}
