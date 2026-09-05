import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ArticleMeta } from "@/components/marketing/articles/article-meta";
import { MediaTile } from "@/components/ui/media";
import type { Locale } from "@/lib/i18n/routing";
import type { ArticleListing } from "@/lib/site/articles";

/**
 * One row of the article feed: square thumbnail on the left, title, excerpt
 * and byline on the right, collapsing to a stacked card on small screens.
 *
 * The whole row is not a single link on purpose — the title and the "Read"
 * affordance are separate anchors to the same href, which keeps the excerpt
 * selectable and gives screen readers one meaningful link name instead of a
 * block containing everything.
 */
export function ArticleListItem({
  article,
  locale,
  authorName,
  readLabel,
}: {
  article: ArticleListing;
  locale: Locale;
  authorName: string;
  readLabel: string;
}) {
  return (
    <article className="grid grid-cols-1 gap-5 py-8 first:pt-0 sm:grid-cols-[10rem_1fr] sm:gap-8">
      <Link href={article.href} tabIndex={-1} aria-hidden className="block">
        <MediaTile
          icon={article.icon}
          variant={article.variant}
          overlay={false}
          className="aspect-[4/3] w-full sm:aspect-square sm:size-40"
        />
      </Link>

      <div className="flex flex-col justify-between gap-4">
        <div>
          <h2 className="text-[1.1875rem] font-semibold leading-snug text-ink sm:text-xl">
            <Link
              href={article.href}
              className="transition-colors hover:text-brand"
            >
              {article.title}
            </Link>
          </h2>
          <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">
            {article.excerpt}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <ArticleMeta
            article={article}
            locale={locale}
            authorName={authorName}
            showTopic={false}
            className="sm:flex-1"
          />

          <Link
            href={article.href}
            className="group inline-flex shrink-0 items-center gap-1.5 text-[0.8125rem] font-medium text-ink transition-colors hover:text-brand"
          >
            {readLabel}
            <span className="sr-only">: {article.title}</span>
            <ArrowRight
              aria-hidden
              className="size-4 transition-transform group-hover:translate-x-0.5"
              strokeWidth={2}
            />
          </Link>
        </div>
      </div>
    </article>
  );
}
