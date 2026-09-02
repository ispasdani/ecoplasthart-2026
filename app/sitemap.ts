import type { MetadataRoute } from "next";

import {
  absoluteUrl,
  defaultLocale,
  languageAlternates,
  localizedPath,
  pathnameKeys,
  type PathnameKey,
} from "@/lib/i18n/routing";

/** Homepage first, then services, then everything else. */
function priorityFor(key: PathnameKey): number {
  if (key === "/") return 1;
  if (key === "/services") return 0.9;
  if (key.startsWith("/services/")) return 0.8;
  return 0.7;
}

function changeFrequencyFor(
  key: PathnameKey,
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (key === "/") return "weekly";
  if (key === "/certifications") return "weekly";
  return "monthly";
}

/**
 * One `<url>` entry per page, keyed on the default-locale (Romanian) URL, with
 * `<xhtml:link rel="alternate" hreflang="…">` for every locale plus
 * `x-default`. Adding a page or locale in `lib/i18n/routing.ts` updates this
 * automatically.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return pathnameKeys.map((key) => ({
    url: absoluteUrl(localizedPath(key, defaultLocale)),
    lastModified,
    changeFrequency: changeFrequencyFor(key),
    priority: priorityFor(key),
    alternates: {
      languages: languageAlternates(key),
    },
  }));
}
