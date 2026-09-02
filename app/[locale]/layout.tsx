import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";

import "../globals.css";
import { ConvexClientProvider } from "@/app/providers/convex-client-provider";
import { getDictionary } from "@/lib/i18n/dictionary";
import {
  isLocale,
  localeHtmlLang,
  locales,
  openGraphLocale,
  siteUrl,
  type Locale,
} from "@/lib/i18n/routing";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/** Pre-render every locale at build time; reject anything else. */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = await getDictionary(locale);

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.meta.titleDefault,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    // No `alternates` here on purpose: canonical/hreflang are per-page, and a
    // shallow-merged wrong canonical would be worse than none. Each page sets
    // its own via `buildPageMetadata`.
    openGraph: {
      type: "website",
      siteName: dict.meta.siteName,
      locale: openGraphLocale[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map((l) => openGraphLocale[l]),
      title: dict.meta.titleDefault,
      description: dict.meta.description,
      url: "/",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.titleDefault,
      description: dict.meta.description,
    },
  };
}

export default async function LocaleRootLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={localeHtmlLang[locale as Locale]}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ConvexClientProvider>{children}</ConvexClientProvider>
      </body>
    </html>
  );
}
