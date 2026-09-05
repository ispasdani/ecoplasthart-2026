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
 * `x-default`. Adding a page or locale in `lib/i18n/routing.ts` updates this
 * automatically.
 *
 * `changefreq` and `priority` are deliberately omitted: Google has stated it
 * ignores both, and they were previously misrepresenting the site anyway.
 *
 * `lastmod` is also omitted rather than faked. It was `new Date()`, so every
 * URL claimed to change on every deploy — including deploys that touched only
 * CSS. Google detects an unreliable `lastmod` and then discounts the field
 * across the whole site, which is worse than not sending it. Restore it once
 * there is a real per-page content-modification date to report (audit D-01).
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return pathnameKeys.map((key) => ({
    url: absoluteUrl(localizedPath(key, defaultLocale)),
    alternates: {
      languages: languageAlternates(key),
    },
  }));
}
