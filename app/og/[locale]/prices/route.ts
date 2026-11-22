import { notFound } from "next/navigation";

import { getDictionary } from "@/lib/i18n/dictionary";
import { isLocale, locales } from "@/lib/i18n/routing";
import { renderOgCard } from "@/lib/seo/og-card";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ locale: string }> },
) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);

  return renderOgCard({
    eyebrow: dict.prices.eyebrow,
    title: dict.prices.title,
    address: dict.company.addressOperational,
    phone: dict.company.phonePrimary,
  });
}
