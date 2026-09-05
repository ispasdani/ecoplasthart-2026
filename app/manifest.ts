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
    // `id` pins the app's identity independently of `start_url`. Without it an
    // installed shortcut is keyed on the start URL, so changing that URL later
    // registers a second app rather than updating the first.
    id: "/",
    name: dict.meta.titleDefault,
    short_name: dict.meta.siteName,
    description: dict.meta.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    lang: "ro-RO",
    dir: "ltr",
    categories: ["business", "utilities"],
    background_color: "#ffffff",
    theme_color: "#2f7d4f",
    // Static files under `public/brand/`, not the `/icon` metadata route.
    // Regenerate them with `node scripts/generate-icons.mjs`.
    //
    // 192 and 512 are the two sizes Chrome requires before it will offer to
    // install the site at all. The `maskable` entry is separate rather than an
    // extra purpose on the same file: Android crops adaptive icons to a circle
    // inscribed in the middle 80%, which would slice the corners off a mark
    // drawn to fill its tile, so that one is drawn with the safe zone in mind.
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      {
        src: "/brand/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
