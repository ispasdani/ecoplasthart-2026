import Link from "next/link";

import { MediaTile } from "@/components/ui/media";
import type { Locale } from "@/lib/i18n/routing";
import { formatArticleDate, type ArticleListing } from "@/lib/site/articles";

/** Compact card used by the "more articles" grid under an article. */
export function ArticleSummaryCard({
  article,
  locale,
}: {
  article: ArticleListing;
  locale: Locale;
}) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-hairline bg-canvas p-5 transition-all duration-200 hover:border-hairline-strong hover:shadow-e2">
      <Link href={article.href} tabIndex={-1} aria-hidden className="block">
        <MediaTile
          icon={article.icon}
          variant={article.variant}
          overlay={false}
          className="aspect-video w-full"
        />
      </Link>

      <h3 className="mt-5 text-[1.0625rem] font-semibold leading-snug text-ink">
        <Link href={article.href} className="transition-colors hover:text-brand">
          {article.title}
        </Link>
      </h3>

      <p className="mt-2 line-clamp-3 text-[0.875rem] leading-relaxed text-slate">
        {article.excerpt}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-[0.75rem] text-steel">
        <time dateTime={article.publishedAt}>
          {formatArticleDate(article.publishedAt, locale)}
        </time>
        <span aria-hidden className="text-muted">
          ·
        </span>
        <span>{article.readTime}</span>
      </div>
    </article>
  );
}
