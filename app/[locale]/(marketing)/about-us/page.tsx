import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { absoluteUrl, isLocale, localizedPath } from "@/lib/i18n/routing";

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
    pathnameKey: "/about-us",
    title: dict.meta.about.title,
    description: dict.meta.about.description,
    siteName: dict.meta.siteName,
  });
}

export default async function AboutUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dict = await getDictionary(locale);
  const t = dict.about;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: dict.nav.home,
        item: absoluteUrl(localizedPath("/", locale)),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: dict.nav.about,
        item: absoluteUrl(localizedPath("/about-us", locale)),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="bg-gradient-to-b from-emerald-50 to-white">
        <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6">
          <h1 className="text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-lg text-stone-600">{t.hero.body}</p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
          {t.how.heading}
        </h2>
        <p className="mt-4 text-stone-600">{t.how.body}</p>
      </section>

      <section className="bg-stone-50">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
            {t.identity.heading}
          </h2>
          <dl className="mt-6 divide-y divide-stone-200 rounded-2xl border border-stone-200 bg-white">
            {t.identity.rows.map((row) => (
              <div
                key={row.label}
                className="grid gap-1 px-6 py-4 sm:grid-cols-3 sm:gap-4"
              >
                <dt className="text-sm font-medium text-stone-500">
                  {row.label}
                </dt>
                <dd className="text-sm text-stone-900 sm:col-span-2">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
          {t.certifications.heading}
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {t.certifications.items.map((cert) => (
            <div
              key={cert.code}
              className="rounded-2xl border border-stone-200 p-5"
            >
              <div className="text-lg font-semibold text-emerald-700">
                {cert.code}
              </div>
              <div className="mt-1 text-sm text-stone-600">{cert.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-stone-500">{t.certifications.note}</p>
      </section>
    </>
  );
}
