import type { Locale, MaterialKey, MaterialSlug } from "@/lib/i18n/routing";

/**
 * Single source of truth for the scrap-metal pricing catalogue structure
 * (`/preturi-fier-vechi` / `/en/scrap-metal-prices`).
 *
 * Kept dependency-free (only routing types) so `app/sitemap.ts`, JSON-LD
 * builders, material pages and the prices page share the exact same catalogue
 * and revision date without pulling UI/icon bundles into metadata routes.
 *
 * Prices are intentionally NOT published as static numbers: live daily quotes
 * are confirmed by phone or contact form based on LME/mill rates, grade
 * cleanliness and volume. Visual rows render a blurred mask paired with a
 * direct contact CTA.
 */
export const PRICES_UPDATED_AT = "2026-11-22";

export type PriceGradeId =
  | "ferrous-heavy"
  | "cast-iron"
  | "ferrous-mixed"
  | "ferrous-sheet"
  | "ferrous-turnings"
  | "aluminium-wire"
  | "aluminium-rims"
  | "aluminium-profiles"
  | "aluminium-cast"
  | "aluminium-radiators"
  | "aluminium-cans"
  | "copper-milberry"
  | "copper-clean"
  | "copper-burnt"
  | "copper-radiators"
  | "brass-clean"
  | "brass-mixed"
  | "brass-turnings"
  | "cables-copper-heavy"
  | "cables-copper-light"
  | "cables-aluminium"
  | "lead-batteries-auto";

export type PriceCategoryId =
  | "ferrous"
  | "aluminium"
  | "copper"
  | "brass"
  | "cables"
  | "batteries";

export type PriceRowSpec = {
  id: PriceGradeId;
  /** Purely visual non-numeric placeholder width for the blurred price pill. */
  mask: "short" | "wide";
};

export type PriceCategorySpec = {
  id: PriceCategoryId;
  material: MaterialKey;
  materialSlug: MaterialSlug;
  rows: readonly PriceRowSpec[];
};

export const PRICE_CATEGORIES: readonly PriceCategorySpec[] = [
  {
    id: "ferrous",
    material: "/materials/ferrous-scrap",
    materialSlug: "ferrous-scrap",
    rows: [
      { id: "ferrous-heavy", mask: "short" },
      { id: "cast-iron", mask: "short" },
      { id: "ferrous-mixed", mask: "short" },
      { id: "ferrous-sheet", mask: "short" },
      { id: "ferrous-turnings", mask: "short" },
    ],
  },
  {
    id: "aluminium",
    material: "/materials/aluminium",
    materialSlug: "aluminium",
    rows: [
      { id: "aluminium-wire", mask: "wide" },
      { id: "aluminium-rims", mask: "wide" },
      { id: "aluminium-profiles", mask: "wide" },
      { id: "aluminium-cast", mask: "short" },
      { id: "aluminium-radiators", mask: "short" },
      { id: "aluminium-cans", mask: "short" },
    ],
  },
  {
    id: "copper",
    material: "/materials/copper",
    materialSlug: "copper",
    rows: [
      { id: "copper-milberry", mask: "wide" },
      { id: "copper-clean", mask: "wide" },
      { id: "copper-burnt", mask: "wide" },
      { id: "copper-radiators", mask: "wide" },
    ],
  },
  {
    id: "brass",
    material: "/materials/brass",
    materialSlug: "brass",
    rows: [
      { id: "brass-clean", mask: "wide" },
      { id: "brass-mixed", mask: "wide" },
      { id: "brass-turnings", mask: "wide" },
    ],
  },
  {
    id: "cables",
    material: "/materials/cables",
    materialSlug: "cables",
    rows: [
      { id: "cables-copper-heavy", mask: "wide" },
      { id: "cables-copper-light", mask: "wide" },
      { id: "cables-aluminium", mask: "short" },
    ],
  },
  {
    id: "batteries",
    material: "/materials/lead-batteries",
    materialSlug: "lead-batteries",
    rows: [{ id: "lead-batteries-auto", mask: "short" }],
  },
] as const;

export function formatBlurredMask(
  mask: "short" | "wide",
  locale: Locale,
): string {
  const unit = locale === "ro" ? "lei/kg" : "RON/kg";
  return mask === "wide" ? `••,•• ${unit}` : `•,•• ${unit}`;
}

export function formatPriceDate(isoDate: string, locale: Locale): string {
  const [year, month, day] = isoDate.split("-").map(Number);
  const date = new Date(Date.UTC(year, (month ?? 1) - 1, day ?? 1));
  return new Intl.DateTimeFormat(locale === "ro" ? "ro-RO" : "en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(date);
}

/**
 * Resolves the price-page section anchor for a given material slug so
 * `/ce-cumparam` and `/ce-cumparam/[material]` link straight to the right
 * category table.
 */
export function getPriceCategoryForMaterial(
  slug: MaterialSlug,
): PriceCategoryId | undefined {
  return PRICE_CATEGORIES.find((c) => c.materialSlug === slug)?.id;
}
