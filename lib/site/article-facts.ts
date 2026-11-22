import type { ArticleSlug, MaterialKey, ServiceKey } from "@/lib/i18n/routing";

/**
 * Article facts with no dependencies beyond routing types.
 *
 * Split out of `lib/site/articles.ts` so `app/sitemap.ts` can read the real
 * `updatedAt` dates without importing `lib/site/icons.ts` (and with it the
 * whole lucide barrel) into a metadata route. `articles.ts` re-exports the
 * public names, so the rest of the app imports from there as before.
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
  /**
   * The service page this article feeds. Rendered as a callout on the article
   * so informational traffic has a direct path to the page that converts, and
   * so the service pages collect internal links from every related article.
   */
  service: ServiceKey;
  /**
   * Optional commercial material page this article feeds (e.g. copper article
   * → `/ce-cumparam/cupru`). Rendered as a direct conversion callout above the
   * broader service card so informational searches flow straight to the
   * matching buying page.
   */
  material?: MaterialKey;
  /**
   * When true, render a direct callout to `/preturi-fier-vechi`
   * (`/en/scrap-metal-prices`) so price-intent readers can jump straight to
   * current per-kg ranges.
   */
  showPricesCta?: boolean;
};

export const ARTICLE_FACTS: Record<ArticleSlug, ArticleFacts> = {
  "choosing-a-waste-collection-partner": {
    topic: "guides",
    service: "/services/waste-collection",
    publishedAt: "2026-08-27",
    updatedAt: "2026-08-27",
    readMinutes: 8,
  },
  "waste-codes-and-transport-documents": {
    topic: "legislation",
    service: "/services/logistics",
    publishedAt: "2026-08-11",
    updatedAt: "2026-08-11",
    readMinutes: 9,
  },
  "scrap-metal-prices-explained": {
    topic: "costs",
    service: "/services/metal-waste",
    material: "/materials/ferrous-scrap",
    showPricesCta: true,
    publishedAt: "2026-07-23",
    updatedAt: "2026-11-22",
    readMinutes: 8,
  },
  "cable-recycling-copper-granules": {
    topic: "recycling",
    service: "/services/cable-processing",
    material: "/materials/cables",
    publishedAt: "2026-07-02",
    updatedAt: "2026-07-02",
    readMinutes: 8,
  },
  "hazardous-waste-obligations": {
    topic: "legislation",
    service: "/services/hazardous-waste",
    publishedAt: "2026-06-16",
    updatedAt: "2026-06-16",
    readMinutes: 9,
  },
  "packaging-waste-recycling-obligations": {
    topic: "legislation",
    service: "/services/recycling-recovery",
    publishedAt: "2026-09-10",
    updatedAt: "2026-09-10",
    readMinutes: 8,
  },
  "aluminium-scrap-recycling": {
    topic: "recycling",
    service: "/services/metal-waste",
    material: "/materials/aluminium",
    showPricesCta: true,
    publishedAt: "2026-09-01",
    updatedAt: "2026-09-01",
    readMinutes: 7,
  },
  "weee-recycling-guide-for-companies": {
    topic: "guides",
    service: "/services/hazardous-waste",
    publishedAt: "2026-09-19",
    updatedAt: "2026-09-19",
    readMinutes: 6,
  },
  "industrial-plastic-waste-recycling": {
    topic: "recycling",
    service: "/services/recycling-recovery",
    publishedAt: "2026-09-18",
    updatedAt: "2026-09-18",
    readMinutes: 7,
  },
  "why-companies-sell-scrap-metal": {
    topic: "guides",
    service: "/services/metal-waste",
    material: "/materials/ferrous-scrap",
    publishedAt: "2026-09-22",
    updatedAt: "2026-09-22",
    readMinutes: 6,
  },
  "ferrous-vs-non-ferrous-waste": {
    topic: "recycling",
    service: "/services/metal-waste",
    material: "/materials/ferrous-scrap",
    publishedAt: "2026-09-24",
    updatedAt: "2026-09-24",
    readMinutes: 7,
  },
  "waste-recovery-and-destruction-certificates": {
    topic: "legislation",
    service: "/services/recycling-recovery",
    publishedAt: "2026-09-26",
    updatedAt: "2026-09-26",
    readMinutes: 7,
  },
  "how-waste-container-rental-works": {
    topic: "guides",
    service: "/services/logistics",
    publishedAt: "2026-09-29",
    updatedAt: "2026-09-29",
    readMinutes: 6,
  },
  "waste-records-and-sim-reporting": {
    topic: "legislation",
    service: "/services/waste-collection",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    readMinutes: 7,
  },
  "used-oil-collection-for-companies": {
    topic: "legislation",
    service: "/services/hazardous-waste",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    readMinutes: 7,
  },
  "copper-scrap-grades-and-prices": {
    topic: "costs",
    service: "/services/metal-waste",
    material: "/materials/copper",
    showPricesCta: true,
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    readMinutes: 7,
  },
  "used-lead-acid-batteries": {
    topic: "recycling",
    service: "/services/hazardous-waste",
    material: "/materials/lead-batteries",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    readMinutes: 6,
  },
  "construction-and-demolition-waste": {
    topic: "guides",
    service: "/services/logistics",
    publishedAt: "2026-10-01",
    updatedAt: "2026-10-01",
    readMinutes: 7,
  },
  "where-to-sell-scrap-metal-deva-hunedoara": {
    topic: "guides",
    service: "/services/metal-waste",
    material: "/materials/ferrous-scrap",
    showPricesCta: true,
    publishedAt: "2026-10-04",
    updatedAt: "2026-10-04",
    readMinutes: 5,
  },
  "documents-needed-to-sell-scrap-metal": {
    topic: "guides",
    service: "/services/metal-waste",
    material: "/materials/ferrous-scrap",
    publishedAt: "2026-10-04",
    updatedAt: "2026-10-04",
    readMinutes: 5,
  },
  "what-you-can-sell-as-scrap-metal": {
    topic: "recycling",
    service: "/services/metal-waste",
    material: "/materials/ferrous-scrap",
    publishedAt: "2026-10-04",
    updatedAt: "2026-10-04",
    readMinutes: 5,
  },
  "aluminium-cans-scrap-value": {
    topic: "recycling",
    service: "/services/metal-waste",
    material: "/materials/aluminium",
    showPricesCta: true,
    publishedAt: "2026-10-04",
    updatedAt: "2026-10-04",
    readMinutes: 4,
  },
  "how-to-tell-copper-brass-aluminium-apart": {
    topic: "recycling",
    service: "/services/metal-waste",
    material: "/materials/brass",
    publishedAt: "2026-10-04",
    updatedAt: "2026-10-04",
    readMinutes: 5,
  },
};
