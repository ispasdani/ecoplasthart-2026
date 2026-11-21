import {
  articleKeys,
  articleKeyFromSlug,
  localeHtmlLang,
  localizedPath,
  type ArticleKey,
  type ArticleSlug,
  type Locale,
} from "@/lib/i18n/routing";
import { ARTICLE_FACTS, articleTopics } from "@/lib/site/article-facts";
import { articleIcons } from "@/lib/site/icons";
import type { Messages } from "@/messages/ro";

/**
 * Everything about an article that is *not* copy.
 *
 * Copy lives in `messages/articles-{ro,en}.ts` under `articles.items.<slug>`,
 * because it has to exist twice; the publication date, topic and illustration
 * are the same fact in both languages, so they live here once. Same split the
 * services use between `lib/site/icons.ts` and `services.items`.
 */

export {
  ARTICLE_FACTS,
  articleTopics,
  isArticleTopic,
  type ArticleTopic,
} from "@/lib/site/article-facts";

/** One article, resolved for a locale: facts + copy + localized href. */
export type ArticleListing = ReturnType<typeof getArticles>[number];

/**
 * Every article for one locale, newest first.
 *
 * The order comes from `publishedAt`, not from the declaration order in
 * `articleKeys`, so adding an older piece later still slots into the right
 * place in the feed.
 */
export function getArticles(dict: Messages, locale: Locale) {
  return articleKeys
    .map((key) => getArticleByKey(dict, locale, key))
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getArticle(dict: Messages, locale: Locale, slug: ArticleSlug) {
  return getArticleByKey(dict, locale, articleKeyFromSlug(slug));
}

/**
 * Picks topically related articles rather than blindly repeating the 3 newest
 * posts on every page. Scores shared commercial material (+4), shared parent
 * service (+2), and shared topic (+1), with recency as the tie-breaker.
 */
export function getRelatedArticles(
  dict: Messages,
  locale: Locale,
  currentSlug: ArticleSlug,
  limit = 3,
) {
  const current = getArticle(dict, locale, currentSlug);

  return getArticles(dict, locale)
    .filter((candidate) => candidate.slug !== currentSlug)
    .map((candidate) => {
      let score = 0;
      if (current.material && candidate.material === current.material) score += 4;
      if (candidate.service === current.service) score += 2;
      if (candidate.topic === current.topic) score += 1;
      return { candidate, score };
    })
    .sort(
      (a, b) =>
        b.score - a.score ||
        b.candidate.publishedAt.localeCompare(a.candidate.publishedAt),
    )
    .slice(0, limit)
    .map(({ candidate }) => candidate);
}

function getArticleByKey(dict: Messages, locale: Locale, key: ArticleKey) {
  const slug = key.slice("/articles/".length) as ArticleSlug;
  const facts = ARTICLE_FACTS[slug];
  const copy = dict.articles.items[slug];

  return {
    key,
    slug,
    href: localizedPath(key, locale),
    icon: articleIcons[slug],
    /** Picks one of `MediaTile`'s gradients, so adjacent tiles never match. */
    variant: articleKeys.indexOf(key),
    topic: facts.topic,
    topicLabel: dict.articles.topics[facts.topic],
    publishedAt: facts.publishedAt,
    updatedAt: facts.updatedAt,
    readMinutes: facts.readMinutes,
    service: facts.service,
    material: facts.material,
    readTime: dict.articles.readTime.replace(
      "{minutes}",
      String(facts.readMinutes),
    ),
    ...copy,
  };
}

/**
 * The topics that actually have at least one article, in `articleTopics`
 * order. Deriving it means an empty topic never renders a filter chip that
 * leads to an empty page.
 */
export function getUsedTopics(dict: Messages) {
  const used = new Set(Object.values(ARTICLE_FACTS).map((a) => a.topic));
  return articleTopics
    .filter((topic) => used.has(topic))
    .map((topic) => ({ topic, label: dict.articles.topics[topic] }));
}

/** `"2026-08-27"` → `"27 august 2026"` / `"August 27, 2026"`. */
export function formatArticleDate(isoDate: string, locale: Locale): string {
  return new Date(`${isoDate}T00:00:00Z`).toLocaleDateString(
    localeHtmlLang[locale],
    { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" },
  );
}
