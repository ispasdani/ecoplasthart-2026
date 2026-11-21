import {
  localizedPath,
  materialKeyFromSlug,
  materialKeys,
  type ArticleSlug,
  type Locale,
  type MaterialKey,
  type MaterialSlug,
  type ServiceKey,
} from "@/lib/i18n/routing";
import { materialIcons } from "@/lib/site/icons";
import type { Messages } from "@/messages/ro";

type MaterialFacts = {
  service: ServiceKey;
  articles: readonly ArticleSlug[];
  image?: string;
  video?: string;
  poster?: string;
};

export const MATERIAL_FACTS: Record<MaterialSlug, MaterialFacts> = {
  copper: {
    service: "/services/metal-waste",
    articles: [
      "copper-scrap-grades-and-prices",
      "how-to-tell-copper-brass-aluminium-apart",
      "documents-needed-to-sell-scrap-metal",
    ],
  },
  "ferrous-scrap": {
    service: "/services/metal-waste",
    image: "/images/feros.webp",
    articles: [
      "scrap-metal-prices-explained",
      "where-to-sell-scrap-metal-deva-hunedoara",
      "what-you-can-sell-as-scrap-metal",
    ],
  },
  aluminium: {
    service: "/services/metal-waste",
    articles: [
      "aluminium-scrap-recycling",
      "aluminium-cans-scrap-value",
      "how-to-tell-copper-brass-aluminium-apart",
    ],
  },
  brass: {
    service: "/services/metal-waste",
    articles: [
      "how-to-tell-copper-brass-aluminium-apart",
      "ferrous-vs-non-ferrous-waste",
      "documents-needed-to-sell-scrap-metal",
    ],
  },
  cables: {
    service: "/services/cable-processing",
    video: "/videos/cabluri.mp4",
    poster: "/images/posters/cabluri.webp",
    articles: [
      "cable-recycling-copper-granules",
      "copper-scrap-grades-and-prices",
      "waste-codes-and-transport-documents",
    ],
  },
  "lead-batteries": {
    service: "/services/hazardous-waste",
    image: "/images/hazard.webp",
    articles: [
      "used-lead-acid-batteries",
      "hazardous-waste-obligations",
      "waste-codes-and-transport-documents",
    ],
  },
};

export function materialImageAlt(
  dict: Messages,
  slug: MaterialSlug,
): string | undefined {
  const alts = dict.materials.imageAlts as Partial<Record<MaterialSlug, string>>;
  return alts[slug];
}

export function getMaterials(dict: Messages, locale: Locale) {
  return materialKeys.map((key) => getMaterialByKey(dict, locale, key));
}

export function getMaterial(
  dict: Messages,
  locale: Locale,
  slug: MaterialSlug,
) {
  return getMaterialByKey(dict, locale, materialKeyFromSlug(slug));
}

function getMaterialByKey(dict: Messages, locale: Locale, key: MaterialKey) {
  const slug = key.slice("/materials/".length) as MaterialSlug;
  const facts = MATERIAL_FACTS[slug];
  const copy = dict.materials.items[slug];

  return {
    key,
    slug,
    href: localizedPath(key, locale),
    icon: materialIcons[slug],
    variant: materialKeys.indexOf(key),
    service: facts.service,
    articles: facts.articles,
    image: facts.image,
    imageAlt: materialImageAlt(dict, slug),
    video: facts.video,
    poster: facts.poster,
    ...copy,
  };
}

export type MaterialItem = ReturnType<typeof getMaterials>[number];
