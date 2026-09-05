import {
  articleKeys,
  articleKeyFromSlug,
  localeHtmlLang,
  localizedPath,
  type ArticleKey,
  type ArticleSlug,
  type Locale,
} from "@/lib/i18n/routing";
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

export const articleTopics = [
  "legislation",
  "recycling",
  "costs",
  "guides",
] as const;

export type ArticleTopic = (typeof articleTopics)[number];

export function isArticleTopic(value: string): value is ArticleTopic {
  return (articleTopics as readonly string[]).includes(value);
}

type ArticleFacts = {
  topic: ArticleTopic;
  /** ISO 8601 date. Feeds `datePublished` in JSON-LD and the `<time>` element. */
  publishedAt: string;
  /** ISO 8601 date. Bump whenever the body copy is edited. */
  updatedAt: string;
  readMinutes: number;
};

export const ARTICLE_FACTS: Record<ArticleSlug, ArticleFacts> = {
  "choosing-a-waste-collection-partner": {
    topic: "guides",
    publishedAt: "2026-08-27",
    updatedAt: "2026-08-27",
    readMinutes: 8,
  },
  "waste-codes-and-transport-documents": {
    topic: "legislation",
    publishedAt: "2026-08-11",
    updatedAt: "2026-08-11",
    readMinutes: 9,
  },
  "scrap-metal-prices-explained": {
    topic: "costs",
    publishedAt: "2026-07-23",
    updatedAt: "2026-07-23",
    readMinutes: 7,
  },
  "cable-recycling-copper-granules": {
    topic: "recycling",
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-02",
    readMinutes: 8,
  },
  "hazardous-waste-obligations": {
    topic: "legislation",
    publishedAt: "2026-06-16",
    updatedAt: "2026-06-16",
    readMinutes: 9,
  },
};

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
