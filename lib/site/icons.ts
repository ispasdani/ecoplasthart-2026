import {
  Award,
  BatteryCharging,
  Building2,
  Cable,
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

import type { ServiceSlug } from "@/lib/i18n/routing";

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
