"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  localeLabels,
  locales,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n/routing";

/**
 * Renders one link per locale pointing at the translated equivalent of the
 * current page. Uses real `<a>` links (via `<Link>`) with `hreflang` so the
 * relationship is crawlable, not just a client-side toggle.
 */
export function LocaleSwitcher({
  current,
  label,
}: {
  current: Locale;
  label: string;
}) {
  const pathname = usePathname();

  return (
    <div
      className="flex items-center gap-1 text-xs font-medium"
      role="group"
      aria-label={label}
    >
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-1">
          {i > 0 && <span className="text-stone-300">/</span>}
          {locale === current ? (
            <span aria-current="true" className="text-emerald-700">
              {shortLabel(locale)}
            </span>
          ) : (
            <Link
              href={switchLocalePath(pathname, locale)}
              hrefLang={locale}
              prefetch={false}
              className="text-stone-500 transition-colors hover:text-emerald-700"
            >
              <span className="sr-only">{localeLabels[locale]}</span>
              <span aria-hidden>{shortLabel(locale)}</span>
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}

function shortLabel(locale: Locale): string {
  return locale.toUpperCase();
}
