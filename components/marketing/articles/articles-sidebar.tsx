import Link from "next/link";

import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n/routing";
import { formatArticleDate, type ArticleListing } from "@/lib/site/articles";
import type { ArticleTopic } from "@/lib/site/articles";

/**
 * Feed sidebar: the three most recent articles as a numbered list, then the
 * topic filters.
 *
 * The topic chips are plain links carrying `?topic=`, so filtering works with
 * no client JavaScript and each filtered view is a real, shareable URL. The
 * index page marks those views `noindex` — they are useful to a reader and
 * duplicate content to a crawler.
 */
export function ArticlesSidebar({
  articles,
  locale,
  topics,
  activeTopic,
  basePath,
  latestHeading,
  topicsHeading,
  excludeSlug,
}: {
  articles: ArticleListing[];
  locale: Locale;
  topics: { topic: ArticleTopic; label: string }[];
  activeTopic?: ArticleTopic;
  /** Localized `/articles` path — the target of the topic links. */
  basePath: string;
  latestHeading: string;
  topicsHeading: string;
  excludeSlug?: string;
}) {
  const latest = articles
    .filter((article) => article.slug !== excludeSlug)
    .slice(0, 3);

  return (
    <div className="flex flex-col gap-10 lg:sticky lg:top-28">
      <section aria-labelledby="articles-latest">
        <h2
          id="articles-latest"
          className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-slate"
        >
          {latestHeading}
        </h2>

        <ol className="mt-5 flex flex-col gap-5">
          {latest.map((article, index) => (
            <li
              key={article.slug}
              className="grid grid-cols-[1.75rem_1fr] gap-3"
            >
              <span
                aria-hidden
                className="text-[0.8125rem] font-semibold tabular-nums text-muted"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-[0.9375rem] font-medium leading-snug text-ink">
                  <Link
                    href={article.href}
                    className="transition-colors hover:text-brand"
                  >
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-1 text-[0.75rem] text-steel">
                  <time dateTime={article.publishedAt}>
                    {formatArticleDate(article.publishedAt, locale)}
                  </time>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <nav aria-labelledby="articles-topics">
        <h2
          id="articles-topics"
          className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-slate"
        >
          {topicsHeading}
        </h2>

        <ul className="mt-5 flex flex-wrap gap-2">
          {topics.map(({ topic, label }) => {
            const isActive = topic === activeTopic;
            return (
              <li key={topic}>
                <Link
                  href={isActive ? basePath : `${basePath}?topic=${topic}`}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "inline-flex rounded-full border px-3 py-1.5 text-[0.75rem] font-medium transition-colors",
                    isActive
                      ? "border-brand bg-brand-soft text-brand-dark"
                      : "border-hairline-strong text-charcoal hover:border-brand hover:text-brand",
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
