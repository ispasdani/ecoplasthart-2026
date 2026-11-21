import type { MetadataRoute } from "next";

import {
  absoluteUrl,
  languageAlternates,
  localizedPath,
  locales,
  pathnameKeys,
  type PathnameKey,
} from "@/lib/i18n/routing";
// The lean facts module, not `lib/site/articles.ts`: that one imports the icon
// maps, for the same bundle reason given on `PAGE_IMAGES` below.
import { ARTICLE_FACTS } from "@/lib/site/article-facts";

/**
 * Content photography per page, for the `<image:image>` entries.
 *
 * Declared here rather than imported from `lib/site/icons.ts`: that module
 * pulls the whole lucide barrel for its icon maps, and a metadata route has no
 * business dragging an icon library into its bundle. Keep the paths in step
 * with `serviceImages` there.
 *
 * Original photography of an industrial site competes in Google Images against
 * far weaker material than the text queries do, so it is worth declaring.
 */
const PAGE_IMAGES: Partial<Record<PathnameKey, string[]>> = {
  // Both appear in the services showcase on the homepage.
  "/": ["/images/feros.webp", "/images/hazard.webp"],
  "/services/metal-waste": ["/images/feros.webp"],
  "/services/hazardous-waste": ["/images/hazard.webp"],
  "/materials": ["/images/feros.webp", "/images/hazard.webp"],
  "/materials/ferrous-scrap": ["/images/feros.webp"],
  "/materials/lead-batteries": ["/images/hazard.webp"],
};

/**
 * One `<url>` entry per page per locale (`ro` + `en`), each with reciprocal
 * `<xhtml:link rel="alternate" hreflang="…">` entries for every locale plus
 * `x-default`. Listing every locale as its own `<loc>` follows Google's
 * multi-language sitemap spec and ensures `scripts/indexnow.mjs` submits both
 * Romanian and English URLs. Adding a page or locale in `lib/i18n/routing.ts`
 * updates this automatically.
 *
 * `changefreq` and `priority` are deliberately omitted: Google has stated it
 * ignores both, and they were previously misrepresenting the site anyway.
 *
 * `lastmod` is sent only where there is a real content-modification date:
 * each article's `updatedAt`, and the newest of those for the articles index
 * (its content is the feed). Every other page omits it rather than faking it.
 * It used to be `new Date()` everywhere, so every URL claimed to change on
 * every deploy — Google detects an unreliable `lastmod` and then discounts the
 * field across the whole site, which is worse than not sending it (audit D-01).
 * So keep `updatedAt` honest: bump it when an article's body changes, and only
 * then.
 */
const ARTICLES_PREFIX = "/articles/";

const latestArticleUpdate = Object.values(ARTICLE_FACTS)
  .map((facts) => facts.updatedAt)
  .sort()
  .at(-1);

function lastModifiedFor(key: PathnameKey): string | undefined {
  if (key === "/articles") return latestArticleUpdate;
  if (key.startsWith(ARTICLES_PREFIX)) {
    const slug = key.slice(ARTICLES_PREFIX.length) as keyof typeof ARTICLE_FACTS;
    return ARTICLE_FACTS[slug]?.updatedAt;
  }
  return undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  return pathnameKeys.flatMap((key) => {
    const images = PAGE_IMAGES[key]?.map(absoluteUrl);
    const lastModified = lastModifiedFor(key);
    const languages = languageAlternates(key);

    return locales.map((locale) => ({
      url: absoluteUrl(localizedPath(key, locale)),
      ...(lastModified ? { lastModified } : {}),
      alternates: { languages },
      ...(images ? { images } : {}),
    }));
  });
}
