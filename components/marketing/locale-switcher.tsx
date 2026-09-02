"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";
import {
  localeLabels,
  locales,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n/routing";

/**
 * Renders one link per locale pointing at the translated equivalent of the
 * current page. Real `<a hreflang>` links rather than a client-side toggle, so
 * the relationship stays crawlable.
 */
export function LocaleSwitcher({
  current,
  label,
  tone = "light",
  className,
}: {
  current: Locale;
  label: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label={label}
      className={cn(
        "flex items-center gap-0.5 rounded-full border p-0.5",
        tone === "dark" ? "border-hairline-dark" : "border-hairline",
        className,
      )}
    >
      {locales.map((locale) => {
        const active = locale === current;

        if (active) {
          return (
            <span
              key={locale}
              aria-current="true"
              className={cn(
                "rounded-full px-2.5 py-1 text-[0.75rem] font-semibold",
                tone === "dark"
                  ? "bg-white/10 text-on-dark"
                  : "bg-ink text-on-dark",
              )}
            >
              {locale.toUpperCase()}
            </span>
          );
        }

        return (
          <Link
            key={locale}
            href={switchLocalePath(pathname, locale)}
            hrefLang={locale}
            prefetch={false}
            className={cn(
              "rounded-full px-2.5 py-1 text-[0.75rem] font-semibold transition-colors",
              tone === "dark"
                ? "text-on-dark-muted hover:text-on-dark"
                : "text-steel hover:text-ink",
            )}
          >
            <span className="sr-only">{localeLabels[locale]}</span>
            <span aria-hidden>{locale.toUpperCase()}</span>
          </Link>
        );
      })}
    </div>
  );
}
