import type { MetadataRoute } from "next";

import {
  absoluteUrl,
  defaultLocale,
  languageAlternates,
  localizedPath,
  pathnameKeys,
} from "@/lib/i18n/routing";

/**
 * One `<url>` entry per page, keyed on the default-locale (Romanian) URL, with
 * `<xhtml:link rel="alternate" hreflang="…">` for every locale plus
 * `x-default`. Localized alternates live in `languageAlternates`, so adding a
 * page or locale in `lib/i18n/routing.ts` updates the sitemap automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pathnameKeys.map((key) => ({
    url: absoluteUrl(localizedPath(key, defaultLocale)),
    lastModified,
    changeFrequency: key === "/" ? "weekly" : "monthly",
    priority: key === "/" ? 1 : 0.8,
    alternates: {
      languages: languageAlternates(key),
    },
  }));
}
