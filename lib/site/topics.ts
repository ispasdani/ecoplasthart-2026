import {
  articleKeys,
  localizedPath,
  materialKeys,
  serviceKeys,
  topicKeyFromSlug,
  topicKeys,
  type ArticleSlug,
  type Locale,
  type MaterialSlug,
  type PathnameKey,
  type ServiceKey,
  type ServiceSlug,
  type TopicKey,
  type TopicSlug,
} from "@/lib/i18n/routing";
import { getArticle } from "@/lib/site/articles";
import type { Messages } from "@/messages/ro";

/**
 * Facts for the intent-specific landing pages under `topicKeys`. Copy lives in
 * `messages/topics-*.ts`; this file only says where each page sits in the site
 * (breadcrumb parent, related service) and which pages it links to.
 */
type TopicFacts = {
  /** Breadcrumb parent between Home and the page itself. */
  parent: "/services" | "/materials" | null;
  /** The service this page's `Service` node is related to, if any. */
  service?: ServiceKey;
  /** City the page is about, used as the `Service` node's `areaServed`. */
  city?: string;
  /** Internal links rendered in the "related pages" block. */
  related: readonly PathnameKey[];
};

export const TOPIC_FACTS: Record<TopicSlug, TopicFacts> = {
  "scrap-pickup": {
    parent: "/materials",
    service: "/services/logistics",
    related: [
      "/materials/ferrous-scrap",
      "/topics/plant-dismantling",
      "/topics/cast-iron-radiators",
      "/services/logistics",
      "/prices",
      "/articles/how-waste-container-rental-works",
    ],
  },
  "scrap-metal-deva": {
    parent: "/materials",
    service: "/services/metal-waste",
    city: "Deva",
    related: [
      "/materials/ferrous-scrap",
      "/prices",
      "/topics/scrap-pickup",
      "/topics/scrap-metal-hunedoara",
      "/materials/copper",
      "/articles/where-to-sell-scrap-metal-deva-hunedoara",
    ],
  },
  "scrap-metal-hunedoara": {
    parent: "/materials",
    service: "/services/metal-waste",
    city: "Hunedoara",
    related: [
      "/materials/ferrous-scrap",
      "/prices",
      "/topics/scrap-pickup",
      "/topics/scrap-metal-deva",
      "/topics/plant-dismantling",
      "/articles/where-to-sell-scrap-metal-deva-hunedoara",
    ],
  },
  "cast-iron-radiators": {
    parent: "/materials",
    service: "/services/metal-waste",
    related: [
      "/materials/ferrous-scrap",
      "/materials/aluminium",
      "/topics/scrap-pickup",
      "/prices",
      "/articles/what-you-can-sell-as-scrap-metal",
      "/articles/how-to-tell-copper-brass-aluminium-apart",
    ],
  },
  "plant-dismantling": {
    parent: "/services",
    service: "/services/metal-waste",
    related: [
      "/services/metal-waste",
      "/services/logistics",
      "/materials/cables",
      "/topics/metal-waste-codes",
      "/articles/waste-recovery-and-destruction-certificates",
      "/articles/construction-and-demolition-waste",
    ],
  },
  "metal-waste-codes": {
    parent: null,
    related: [
      "/articles/waste-codes-and-transport-documents",
      "/articles/waste-records-and-sim-reporting",
      "/articles/ferrous-vs-non-ferrous-waste",
      "/services/metal-waste",
      "/topics/plant-dismantling",
      "/articles/choosing-a-waste-collection-partner",
    ],
  },
};

export function getTopic(dict: Messages, locale: Locale, slug: TopicSlug) {
  const key = topicKeyFromSlug(slug);
  return {
    key,
    slug,
    href: localizedPath(key, locale),
    ...TOPIC_FACTS[slug],
    ...dict.topics.items[slug],
  };
}

export function getTopics(dict: Messages, locale: Locale) {
  return topicKeys.map((key) =>
    getTopic(dict, locale, key.slice("/topics/".length) as TopicSlug),
  );
}

export type TopicItem = ReturnType<typeof getTopic>;

/**
 * Human label for an internal link target. Covers the page families topic
 * pages link to; anything else falls back to the route's nav label.
 */
export function labelForKey(
  dict: Messages,
  locale: Locale,
  key: PathnameKey,
): string {
  if ((materialKeys as readonly string[]).includes(key)) {
    return dict.materials.items[key.slice("/materials/".length) as MaterialSlug]
      .title;
  }
  if ((serviceKeys as readonly string[]).includes(key)) {
    return dict.services.items[key.slice("/services/".length) as ServiceSlug]
      .title;
  }
  if ((topicKeys as readonly string[]).includes(key)) {
    return dict.topics.items[(key as TopicKey).slice("/topics/".length) as TopicSlug]
      .title;
  }
  if ((articleKeys as readonly string[]).includes(key)) {
    return getArticle(
      dict,
      locale,
      key.slice("/articles/".length) as ArticleSlug,
    ).title;
  }
  if (key === "/prices") return dict.prices.title;
  return localizedPath(key, locale);
}
