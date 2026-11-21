import { notFound } from "next/navigation";

import { getDictionary } from "@/lib/i18n/dictionary";
import {
  articleSlugs,
  isArticleSlug,
  isLocale,
  locales,
} from "@/lib/i18n/routing";
import { renderOgCard } from "@/lib/seo/og-card";
import { getArticle } from "@/lib/site/articles";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    articleSlugs.map((slug) => ({ locale, slug })),
  );
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ locale: string; slug: string }> },
) {
  const { locale, slug } = await params;
  if (!isLocale(locale) || !isArticleSlug(slug)) notFound();

  const dict = await getDictionary(locale);
  const article = getArticle(dict, locale, slug);

  return renderOgCard({
    eyebrow: `${article.topicLabel} · ${article.readTime}`,
    title: article.title,
    address: dict.company.addressOperational,
    phone: dict.company.phonePrimary,
  });
}
