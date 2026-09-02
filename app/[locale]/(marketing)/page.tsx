import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ConvexTasksDemo } from "@/components/convex-tasks-demo";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { absoluteUrl, isLocale, localizedPath, siteUrl } from "@/lib/i18n/routing";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const dict = await getDictionary(locale);

  return buildPageMetadata({
    locale,
    pathnameKey: "/",
    title: dict.meta.home.title,
    description: dict.meta.home.description,
    siteName: dict.meta.siteName,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const t = dict.home;

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Ecoplast Hart SRL",
    url: absoluteUrl(localizedPath("/", locale)),
    email: "ecoplast_hart@yahoo.com",
    telephone: "+40746152318",
    foundingDate: "2004-12-20",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Șos. Hunedoarei nr. 13, Sat Cristur",
      addressRegion: "Hunedoara",
      addressCountry: "RO",
    },
    vatID: "RO17059959",
    description: dict.meta.description,
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: dict.meta.siteName,
    url: siteUrl,
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            {t.hero.kicker}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-stone-600">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={localizedPath("/about-us", locale)}
              className="rounded-full bg-emerald-600 px-6 py-3 font-medium text-white transition-colors hover:bg-emerald-700"
            >
              {t.hero.ctaPrimary}
            </Link>
            <a
              href="mailto:ecoplast_hart@yahoo.com"
              className="rounded-full border border-stone-300 px-6 py-3 font-medium text-stone-800 transition-colors hover:border-emerald-600 hover:text-emerald-700"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4">
          {t.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-semibold text-emerald-700">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-stone-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <h2 className="text-3xl font-semibold tracking-tight text-stone-900">
          {t.capabilities.heading}
        </h2>
        <p className="mt-3 max-w-2xl text-stone-600">{t.capabilities.intro}</p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {t.capabilities.items.map((cap) => (
            <div
              key={cap.title}
              className="rounded-2xl border border-stone-200 p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-stone-900">
                {cap.title}
              </h3>
              <p className="mt-2 text-sm text-stone-600">{cap.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Waste streams */}
      <section className="bg-stone-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="text-3xl font-semibold tracking-tight text-stone-900">
            {t.waste.heading}
          </h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {t.waste.streams.map((stream) => (
              <li
                key={stream}
                className="rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm text-stone-700"
              >
                {stream}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Convex connection demo — temporary scaffolding */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="rounded-2xl border border-stone-200 bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-widest text-emerald-700">
            Live data
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-stone-900">
            Convex connection test
          </h2>
          <p className="mt-2 text-sm text-stone-600">
            The list below is served live from Convex (<code>api.tasks.get</code>
            ).
          </p>
          <ConvexTasksDemo />
        </div>
      </section>
    </>
  );
}
