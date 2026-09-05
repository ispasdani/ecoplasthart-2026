import type { MetadataRoute } from "next";

import { getDictionary } from "@/lib/i18n/dictionary";
import { defaultLocale } from "@/lib/i18n/routing";

/**
 * Web app manifest. A manifest is served per origin, not per locale, so it uses
 * the default locale (Romanian) — the same language the unprefixed routes serve.
 */
export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const dict = await getDictionary(defaultLocale);

  return {
    name: dict.meta.titleDefault,
    short_name: dict.meta.siteName,
    description: dict.meta.description,
    start_url: "/",
    display: "standalone",
    lang: "ro-RO",
    background_color: "#ffffff",
    theme_color: "#2f7d4f",
    icons: [
      { src: "/icon", sizes: "192x192", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
