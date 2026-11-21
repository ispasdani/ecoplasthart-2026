import { getDictionary } from "@/lib/i18n/dictionary";
import { isLocale, locales } from "@/lib/i18n/routing";
import {
  OG_IMAGE_CONTENT_TYPE,
  OG_IMAGE_SIZE,
  renderOgCard,
} from "@/lib/seo/og-card";

/**
 * The default social card every top-level page falls back to.
 * Service and article detail pages serve dedicated static cards from
 * `app/og/[locale]/services/[service]` and `app/og/[locale]/articles/[slug]`
 * using the same shared `renderOgCard` layout.
 */
export const size = OG_IMAGE_SIZE;
export const contentType = OG_IMAGE_CONTENT_TYPE;
export const alt = "Ecoplast Hart — colectare, sortare și reciclare deșeuri";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(isLocale(locale) ? locale : "ro");

  return renderOgCard({
    title: dict.meta.home.title,
    address: dict.company.addressOperational,
    phone: dict.company.phonePrimary,
  });
}
