import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArticleListItem } from "@/components/marketing/articles/article-list-item";
import { ArticlesSidebar } from "@/components/marketing/articles/articles-sidebar";
import { CtaBand } from "@/components/marketing/sections/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { Container, Section } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { isLocale, localizedPath } from "@/lib/i18n/routing";
import { getArticles, getUsedTopics, isArticleTopic } from "@/lib/site/articles";
import { getPrimaryLinks } from "@/lib/site/nav";
import { articlesIndexGraph } from "@/lib/site/structured-data";

/**
 * Reading `searchParams` for the topic filter opts this page into dynamic
 * rendering, unlike every other marketing page. That is a deliberate trade:
 * the render touches nothing but the in-memory dictionary — no I/O, no
 * database — while the alternative (client-side filtering) would put the
 * site's only client JavaScript on a marketing page for the sake of four
 * filter chips. The article pages themselves stay prerendered.
 */
type ArticlesPageProps = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ topic?: string }>;
};

export async function generateMetadata({
  params,
  searchParams,
}: ArticlesPageProps): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = await getDictionary(locale);
  const { topic } = await searchParams;

  const metadata = buildPageMetadata({
    locale,
    pathnameKey: "/articles",
    title: dict.articles.metaTitle,
    description: dict.articles.metaDescription,
    siteName: dict.meta.siteName,
  });

  // A `?topic=` view is a filtered slice of this same page: useful to a
  // reader, duplicate content to a crawler. The canonical already points at
  // the unfiltered URL; `noindex, follow` says the same thing to the crawlers
  // that weigh canonicals as a hint rather than a directive, while still
  // letting the links out of the page be followed.
  if (topic) {
    return { ...metadata, robots: { index: false, follow: true } };
  }

  return metadata;
}

export default async function ArticlesPage({
  params,
  searchParams,
}: ArticlesPageProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const links = getPrimaryLinks(dict, locale);
  const t = dict.articles;

  const basePath = localizedPath("/articles", locale);
  const allArticles = getArticles(dict, locale);
  const topics = getUsedTopics(dict);

  const { topic: rawTopic } = await searchParams;
  const activeTopic =
    rawTopic && isArticleTopic(rawTopic) ? rawTopic : undefined;

  const articles = activeTopic
    ? allArticles.filter((article) => article.topic === activeTopic)
    : allArticles;

  return (
    <>
      <JsonLd graph={articlesIndexGraph(dict, locale)} />

      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        breadcrumbLabel={dict.a11y.breadcrumb}
        crumbs={[
          { href: localizedPath("/", locale), label: dict.nav.home },
          { href: basePath, label: dict.nav.articles },
        ]}
      />

      <Section tone="canvas" space="lg">
        <Container>
          {activeTopic ? (
            <div className="mb-10 flex flex-wrap items-center gap-3 border-b border-hairline pb-6 text-[0.875rem]">
              <span className="text-steel">
                {t.filteredBy}{" "}
                <span className="font-medium text-ink">
                  {dict.articles.topics[activeTopic]}
                </span>
              </span>
              <Link
                href={basePath}
                className="font-medium text-brand underline underline-offset-4 transition-colors hover:text-brand-dark"
              >
                {t.clearFilter}
              </Link>
            </div>
          ) : null}

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-8">
              {articles.length > 0 ? (
                <div className="divide-y divide-hairline">
                  {articles.map((article) => (
                    <Reveal key={article.slug}>
                      <ArticleListItem
                        article={article}
                        locale={locale}
                        authorName={t.author.name}
                        readLabel={t.readArticle}
                      />
                    </Reveal>
                  ))}
                </div>
              ) : (
                <p className="text-[0.9375rem] text-slate">{t.empty}</p>
              )}
            </div>

            <aside className="lg:col-span-4">
              <ArticlesSidebar
                articles={allArticles}
                locale={locale}
                topics={topics}
                activeTopic={activeTopic}
                basePath={basePath}
                latestHeading={t.latestHeading}
                topicsHeading={t.topicsHeading}
              />
            </aside>
          </div>
        </Container>
      </Section>

      <CtaBand dict={dict} contactHref={links.contact.href} />
    </>
  );
}
