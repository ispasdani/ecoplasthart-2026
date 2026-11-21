import { notFound } from "next/navigation";

import { getDictionary } from "@/lib/i18n/dictionary";
import {
  isLocale,
  isMaterialSlug,
  locales,
  materialSlugs,
} from "@/lib/i18n/routing";
import { renderOgCard } from "@/lib/seo/og-card";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    materialSlugs.map((material) => ({ locale, material })),
  );
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ locale: string; material: string }> },
) {
  const { locale, material } = await params;
  if (!isLocale(locale) || !isMaterialSlug(material)) notFound();

  const dict = await getDictionary(locale);
  const item = dict.materials.items[material];

  return renderOgCard({
    eyebrow: `${dict.materials.eyebrow} · ${item.name}`,
    title: item.title,
    address: dict.company.addressOperational,
    phone: dict.company.phonePrimary,
  });
}
