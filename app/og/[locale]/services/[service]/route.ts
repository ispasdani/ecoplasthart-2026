import { notFound } from "next/navigation";

import { getDictionary } from "@/lib/i18n/dictionary";
import {
  isLocale,
  isServiceSlug,
  locales,
  serviceSlugs,
} from "@/lib/i18n/routing";
import { renderOgCard } from "@/lib/seo/og-card";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    serviceSlugs.map((service) => ({ locale, service })),
  );
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ locale: string; service: string }> },
) {
  const { locale, service } = await params;
  if (!isLocale(locale) || !isServiceSlug(service)) notFound();

  const dict = await getDictionary(locale);
  const item = dict.services.items[service];

  return renderOgCard({
    eyebrow: item.name,
    title: item.title,
    address: dict.company.addressOperational,
    phone: dict.company.phonePrimary,
  });
}
