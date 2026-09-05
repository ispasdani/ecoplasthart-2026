import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/next";

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

/**
 * Tints the browser chrome on Android and iOS Safari. Two entries so the bar
 * matches whichever scheme the visitor is in rather than forcing one.
 */
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#101c15" },
  ],
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};

  const dict = await getDictionary(locale);

  const ogImages = [
    {
      url: `/${locale}/opengraph-image`,
      width: 1200,
      height: 630,
      alt: `${dict.meta.siteName} — ${dict.meta.titleDefault}`,
    },
  ];

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: dict.meta.titleDefault,
      template: dict.meta.titleTemplate,
    },
    description: dict.meta.description,
    applicationName: dict.meta.siteName,
    authors: [{ name: dict.company.legalName, url: siteUrl }],
    creator: dict.company.legalName,
    publisher: dict.company.legalName,
    // iOS autolinks anything that reads like a phone number, which mangles the
    // CUI and trade-register numbers in the footer. Real numbers are explicit
    // `tel:` links, so nothing is lost by turning the heuristic off.
    formatDetection: { telephone: false, address: false, email: false },
    // Inherited by every page: `buildPageMetadata` never sets `robots`, and
    // Next merges the field shallowly, so the parent value survives.
    //
    // The defaults Google applies without this are conservative — a ~160-char
    // snippet and a thumbnail small enough that most results show none at all.
    // `max-image-preview: large` is the one that decides whether the OG card
    // appears beside the result on mobile, and it has to be granted explicitly.
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    // Search Console's HTML-tag verification method. Left undefined until the
    // token is in the environment — Next then omits the tag entirely, which is
    // correct; a placeholder string would be a failed verification instead.
    verification: process.env.GOOGLE_SITE_VERIFICATION
      ? { google: process.env.GOOGLE_SITE_VERIFICATION }
      : undefined,
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
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.titleDefault,
      description: dict.meta.description,
      images: ogImages,
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
        <Analytics />
      </body>
    </html>
  );
}
