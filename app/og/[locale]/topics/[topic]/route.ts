import { notFound } from "next/navigation";

import { getDictionary } from "@/lib/i18n/dictionary";
import {
  isLocale,
  isTopicSlug,
  locales,
  topicSlugs,
} from "@/lib/i18n/routing";
import { renderOgCard } from "@/lib/seo/og-card";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    topicSlugs.map((topic) => ({ locale, topic })),
  );
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ locale: string; topic: string }> },
) {
  const { locale, topic } = await params;
  if (!isLocale(locale) || !isTopicSlug(topic)) notFound();

  const dict = await getDictionary(locale);
  const item = dict.topics.items[topic];

  return renderOgCard({
    eyebrow: item.eyebrow,
    title: item.title,
    address: dict.company.addressOperational,
    phone: dict.company.phonePrimary,
  });
}
