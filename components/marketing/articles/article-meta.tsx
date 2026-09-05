import { Badge } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import type { Locale } from "@/lib/i18n/routing";
import { formatArticleDate, type ArticleListing } from "@/lib/site/articles";

/**
 * The byline row shared by the feed and the article header: author, date,
 * reading time, and the topic as a pill.
 *
 * The date is a real `<time datetime>` so the machine-readable value stays ISO
 * while the visible text is localized — the JSON-LD `datePublished` reads from
 * the same field.
 */
export function ArticleMeta({
  article,
  locale,
  authorName,
  showTopic = true,
  className,
}: {
  article: ArticleListing;
  locale: Locale;
  authorName: string;
  showTopic?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.8125rem]",
        className,
      )}
    >
      <span className="font-medium text-charcoal">{authorName}</span>
      <span aria-hidden className="text-muted">
        ·
      </span>
      <time dateTime={article.publishedAt} className="text-steel">
        {formatArticleDate(article.publishedAt, locale)}
      </time>
      <span aria-hidden className="text-muted">
        ·
      </span>
      <span className="text-steel">{article.readTime}</span>

      {showTopic ? (
        <Badge tone="brand" className="ml-auto">
          {article.topicLabel}
        </Badge>
      ) : null}
    </div>
  );
}
