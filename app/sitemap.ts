import type { MetadataRoute } from "next";

import {
  absoluteUrl,
  defaultLocale,
  languageAlternates,
  localizedPath,
  pathnameKeys,
  type PathnameKey,
} from "@/lib/i18n/routing";

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
};

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
  return pathnameKeys.map((key) => {
    const images = PAGE_IMAGES[key];

    return {
      url: absoluteUrl(localizedPath(key, defaultLocale)),
      alternates: {
        languages: languageAlternates(key),
      },
      ...(images ? { images: images.map(absoluteUrl) } : {}),
    };
  });
}
