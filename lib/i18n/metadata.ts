import type { Metadata } from "next";

import {
  languageAlternates,
  localizedPath,
  locales,
  openGraphLocale,
  siteUrl,
  type Locale,
  type PathnameKey,
} from "./routing";

/**
 * Builds a complete, SEO-correct `Metadata` object for one page in one locale.
 *
 * Next.js merges `metadata` shallowly and REPLACES `openGraph` / `twitter`
 * wholesale when a child segment sets them — it does not deep-merge with the
 * layout. So every page must emit the full set of OG/Twitter fields itself;
 * this helper is the single place that does it.
 */
export function buildPageMetadata({
  locale,
  pathnameKey,
  title,
  description,
  siteName,
}: {
  locale: Locale;
  pathnameKey: PathnameKey;
  title: string;
  description: string;
  siteName: string;
}): Metadata {
  const path = localizedPath(pathnameKey, locale);

  // Next only auto-attaches a file-based `opengraph-image` when the segment
  // does not set `openGraph` itself. Every page here does (see above), so the
  // image has to be referenced explicitly or no card is emitted at all.
  const images = [
    {
      url: `/${locale}/opengraph-image`,
      width: 1200,
      height: 630,
      alt: `${siteName} — ${title}`,
    },
  ];

  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    alternates: {
      canonical: path,
      languages: languageAlternates(pathnameKey),
    },
    openGraph: {
      type: "website",
      siteName,
      locale: openGraphLocale[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => openGraphLocale[l]),
      title,
      description,
      url: path,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images,
    },
  };
}
