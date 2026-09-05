/**
 * Framework-agnostic i18n routing config.
 *
 * Kept dependency-free so it can be imported from `proxy.ts` (edge runtime),
 * Route Handlers (`sitemap.ts`, `robots.ts`), Server Components and Client
 * Components alike.
 *
 * URL strategy (chosen for SEO):
 *   - Romanian is the default locale and is served WITHOUT a path prefix
 *     (`/`, `/despre-noi`) so all link authority concentrates on the primary
 *     market's clean URLs.
 *   - English is served under `/en` (`/en`, `/en/about-us`).
 *   - Each route has a localized slug so Romanian pages target Romanian
 *     keywords (`/servicii/reciclare-cabluri`, not `/services/cable-recycling`).
 */

export const locales = ["ro", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "ro";

export const localeLabels: Record<Locale, string> = {
  ro: "Română",
  en: "English",
};

/** BCP-47 tags for `<html lang>` / hreflang / OpenGraph. */
export const localeHtmlLang: Record<Locale, string> = {
  ro: "ro-RO",
  en: "en",
};

export const openGraphLocale: Record<Locale, string> = {
  ro: "ro_RO",
  en: "en_US",
};

/**
 * Absolute origin of the production site, no trailing slash.
 *
 * There is deliberately NO production fallback. The previous default here was
 * `https://ecoplasthart.ro` — a domain that was never registered — and because
 * every absolute URL on the site derives from this one value, it propagated
 * into every canonical tag, all hreflang tags, `og:url`, the sitemap, the
 * `Host:`/`Sitemap:` lines in robots.txt and the JSON-LD entity `@id`. Every
 * page told Google it was a duplicate of an unreachable URL, so the site was
 * crawled and then dropped from the index.
 *
 * The failure mode that made it survive so long was the fallback looking
 * plausible. Fail the build instead, and fall back in development to
 * `localhost`, which is obviously wrong the moment it shows up in output.
 */
function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!raw) {
    if (process.env.NODE_ENV !== "production") return "http://localhost:3000";

    throw new Error(
      "NEXT_PUBLIC_SITE_URL is not set. It must be the absolute production " +
        "origin (e.g. https://www.ecoplasthart.com). Canonical URLs, hreflang, " +
        "the sitemap, robots.txt and the JSON-LD entity @id all derive from " +
        "it. Set it in the Vercel project environment variables for every " +
        "environment — .env.local alone does not reach a deployed build.",
    );
  }

  const trimmed = raw.replace(/\/+$/, "");

  // Origin only: protocol + host (+ optional port). A stray path, a missing
  // protocol or a trailing slash all produce subtly malformed absolute URLs
  // that validate as strings but not as canonicals.
  if (!/^https?:\/\/[^/\s]+$/.test(trimmed)) {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL must be a bare origin including the protocol, ` +
        `with no path or trailing slash (e.g. https://www.ecoplasthart.com). ` +
        `Received: ${JSON.stringify(raw)}`,
    );
  }

  return trimmed;
}

export const siteUrl = resolveSiteUrl();

/**
 * Canonical route key (matches the folder path under `app/[locale]/…`) →
 * the public slug per locale. The canonical key is what the App Router folder
 * is named; the proxy rewrites the localized slug to it.
 *
 * When adding a page: create `app/[locale]/(marketing)/<key>/page.tsx` and add
 * an entry here. That's the single source of truth for URLs, the sitemap,
 * hreflang tags and the locale switcher.
 */
export const pathnames = {
  "/": { ro: "/", en: "/" },
  "/about-us": { ro: "/despre-noi", en: "/about-us" },
  "/services": { ro: "/servicii", en: "/services" },
  "/services/waste-collection": {
    ro: "/servicii/colectare-deseuri",
    en: "/services/waste-collection",
  },
  "/services/recycling-recovery": {
    ro: "/servicii/valorificare-reciclare",
    en: "/services/recycling-recovery",
  },
  "/services/metal-waste": {
    ro: "/servicii/deseuri-metalice-fier-vechi",
    en: "/services/metal-waste",
  },
  "/services/cable-processing": {
    ro: "/servicii/procesare-reciclare-cabluri",
    en: "/services/cable-processing",
  },
  "/services/hazardous-waste": {
    ro: "/servicii/deseuri-periculoase",
    en: "/services/hazardous-waste",
  },
  "/services/logistics": {
    ro: "/servicii/transport-si-containere",
    en: "/services/logistics",
  },
  "/certifications": { ro: "/certificari", en: "/certifications" },
  "/contact": { ro: "/contact", en: "/contact" },
  "/privacy-policy": {
    ro: "/politica-de-confidentialitate",
    en: "/privacy-policy",
  },
  "/cookie-policy": { ro: "/politica-cookie", en: "/cookie-policy" },
  "/site-map": { ro: "/harta-site", en: "/site-map" },
} as const satisfies Record<string, Record<Locale, string>>;

export type PathnameKey = keyof typeof pathnames;

export const pathnameKeys = Object.keys(pathnames) as PathnameKey[];

/**
 * The six service detail routes, in nav/display order. These are `pathnames`
 * keys under `/services/`, and the trailing segment is the `[service]` param
 * of `app/[locale]/(marketing)/services/[service]/page.tsx`.
 */
export const serviceKeys = [
  "/services/waste-collection",
  "/services/recycling-recovery",
  "/services/metal-waste",
  "/services/cable-processing",
  "/services/hazardous-waste",
  "/services/logistics",
] as const satisfies readonly PathnameKey[];

export type ServiceKey = (typeof serviceKeys)[number];

/** `"/services/metal-waste"` → `"metal-waste"` (the `[service]` route param). */
export type ServiceSlug = ServiceKey extends `/services/${infer S}` ? S : never;

export const serviceSlugs = serviceKeys.map(
  (key) => key.slice("/services/".length) as ServiceSlug,
);

export function isServiceSlug(value: string): value is ServiceSlug {
  return (serviceSlugs as string[]).includes(value);
}

export function serviceKeyFromSlug(slug: ServiceSlug): ServiceKey {
  return `/services/${slug}` as ServiceKey;
}

export function isLocale(value: string | undefined): value is Locale {
  return !!value && (locales as readonly string[]).includes(value);
}

function normalize(path: string): string {
  if (!path || path === "") return "/";
  const trimmed = path.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

/**
 * Public href for a route key in a locale, e.g.
 *   localizedPath("/about-us", "ro") -> "/despre-noi"
 *   localizedPath("/about-us", "en") -> "/en/about-us"
 */
export function localizedPath(key: PathnameKey, locale: Locale): string {
  const slug = pathnames[key][locale];
  const prefix = locale === defaultLocale ? "" : `/${locale}`;
  if (slug === "/") return prefix || "/";
  return `${prefix}${slug}`;
}

/** Prefix an absolute path onto the site origin. */
export function absoluteUrl(path: string): string {
  return path === "/" ? siteUrl : `${siteUrl}${path}`;
}

/**
 * hreflang map for a route key. Always includes `x-default` pointing at the
 * default locale, per Google's guidance.
 */
export function languageAlternates(
  key: PathnameKey,
): Record<string, string> {
  const entries: Record<string, string> = {};
  for (const locale of locales) {
    entries[localeHtmlLang[locale]] = absoluteUrl(localizedPath(key, locale));
  }
  entries["x-default"] = absoluteUrl(localizedPath(key, defaultLocale));
  return entries;
}

/**
 * Reverse lookup used by the proxy: given a locale and a locale-stripped
 * pathname, return the canonical route key whose slug matches exactly.
 */
export function keyForLocalizedPath(
  locale: Locale,
  localePath: string,
): PathnameKey | null {
  const clean = normalize(localePath);
  for (const key of pathnameKeys) {
    if (normalize(pathnames[key][locale]) === clean) return key;
  }
  return null;
}

/**
 * Parse a *browser* pathname (what `usePathname()` returns, e.g. `/despre-noi`
 * or `/en/about-us`) into its locale and — if it maps to a known page — the
 * canonical route key.
 */
export function routeInfoFromPublicPath(pathname: string): {
  locale: Locale;
  key: PathnameKey | null;
} {
  const segments = pathname.split("/");
  const first = segments[1];
  const locale: Locale = isLocale(first) ? first : defaultLocale;
  const rest = isLocale(first)
    ? "/" + segments.slice(2).join("/")
    : pathname;
  return { locale, key: keyForLocalizedPath(locale, rest) };
}

/**
 * Given the current browser pathname, return the equivalent path in `target`.
 * Falls back to a plain prefix swap for pages not in the `pathnames` map
 * (e.g. future dynamic content routes).
 */
export function switchLocalePath(pathname: string, target: Locale): string {
  const { key } = routeInfoFromPublicPath(pathname);
  if (key) return localizedPath(key, target);

  const segments = pathname.split("/");
  const rest = isLocale(segments[1])
    ? "/" + segments.slice(2).join("/")
    : pathname;
  const cleaned = normalize(rest);
  if (target === defaultLocale) return cleaned;
  return cleaned === "/" ? `/${target}` : `/${target}${cleaned}`;
}
