import {
  Award,
  BatteryCharging,
  Building2,
  Cable,
  ClipboardList,
  Container,
  Factory,
  FileCheck2,
  Fuel,
  Handshake,
  HardHat,
  Landmark,
  Layers,
  MapPinned,
  Package,
  Recycle,
  Scale,
  Settings2,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Trash2,
  Truck,
  Zap,
  type LucideIcon,
} from "lucide-react";

import type { ArticleSlug, ServiceSlug } from "@/lib/i18n/routing";

/**
 * Icons live here, not in the dictionaries — they're presentation, not copy,
 * and both locales must share them. Keyed by the same slugs/indexes the
 * message files use, so the two stay in step.
 */

export const serviceIcons: Record<ServiceSlug, LucideIcon> = {
  "waste-collection": Trash2,
  "recycling-recovery": Recycle,
  "metal-waste": Scale,
  "cable-processing": Cable,
  "hazardous-waste": Fuel,
  logistics: Truck,
};

/**
 * Background photography for the service tiles, keyed the same way as the
 * icons. Takes precedence over `serviceVideos` — a slug listed in both renders
 * the still. Slugs in neither keep the gradient artwork.
 */
export const serviceImages: Partial<Record<ServiceSlug, string>> = {
  "metal-waste": "/images/feros.webp",
  "hazardous-waste": "/images/hazard.webp",
};

/**
 * Background clips for the service tiles, keyed the same way as the icons.
 * Only the slugs listed here get a video; the rest keep the gradient artwork.
 */
export const serviceVideos: Partial<Record<ServiceSlug, string>> = {
  "waste-collection": "/videos/trucks.mov",
  "recycling-recovery": "/videos/verificare.mp4",
  "cable-processing": "/videos/cabluri.mp4",
  logistics: "/videos/graifer.mp4",
};

/**
 * Illustration for each article tile. The articles have no photography of
 * their own, so the tile falls back to `MediaTile`'s gradient artwork with
 * this icon ghosted into it — the same treatment the service tiles use.
 */
export const articleIcons: Record<ArticleSlug, LucideIcon> = {
  "choosing-a-waste-collection-partner": Handshake,
  "waste-codes-and-transport-documents": ClipboardList,
  "scrap-metal-prices-explained": Scale,
  "cable-recycling-copper-granules": Cable,
  "hazardous-waste-obligations": Fuel,
};

/** Matches the order of `home.industries.items` in the dictionaries. */
export const industryIcons: readonly LucideIcon[] = [
  Factory,
  HardHat,
  ShoppingBag,
  Zap,
  Settings2,
  Landmark,
];

/** Matches the order of `home.capabilities.items`. */
export const capabilityIcons: readonly LucideIcon[] = [
  Layers,
  Package,
  Cable,
  Container,
];

/** Matches the order of `home.why.items`. */
export const whyIcons: readonly LucideIcon[] = [
  MapPinned,
  Sparkles,
  ShieldCheck,
  Recycle,
];

/** Matches the order of `about.values.items`. */
export const valueIcons: readonly LucideIcon[] = [
  FileCheck2,
  Recycle,
  Handshake,
];

export const miscIcons = {
  certificate: Award,
  document: FileCheck2,
  building: Building2,
  battery: BatteryCharging,
} as const;
