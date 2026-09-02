import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Building2, ShieldCheck } from "lucide-react";

import { CtaBand } from "@/components/marketing/sections/cta-band";
import { PageHero } from "@/components/marketing/page-hero";
import { Container, Section, SectionHeader } from "@/components/ui/layout";
import { MediaTile } from "@/components/ui/media";
import { Reveal, RevealItem, Stagger } from "@/components/ui/reveal";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { absoluteUrl, isLocale, localizedPath } from "@/lib/i18n/routing";
import { valueIcons } from "@/lib/site/icons";
import { getPrimaryLinks } from "@/lib/site/nav";

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
  const links = getPrimaryLinks(dict, locale);
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

      <PageHero
        eyebrow={t.eyebrow}
        title={t.hero.title}
        lead={t.hero.lead}
        breadcrumbLabel={dict.a11y.breadcrumb}
        crumbs={[
          { href: localizedPath("/", locale), label: dict.nav.home },
          { href: localizedPath("/about-us", locale), label: dict.nav.about },
        ]}
      />

      {/* Story + approach, alongside an image panel */}
      <Section tone="canvas" space="lg">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-5">
              <MediaTile
                icon={Building2}
                variant={1}
                overlay={false}
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="h-[16rem] rounded-2xl sm:h-[22rem] lg:sticky lg:top-28 lg:h-[28rem]"
              />
            </Reveal>

            <div className="space-y-12 lg:col-span-7">
              <Reveal>
                <h2 className="text-heading text-balance text-ink">
                  {t.story.heading}
                </h2>
                <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate">
                  {t.story.body}
                </p>
              </Reveal>

              <Reveal>
                <div className="border-t border-hairline pt-12">
                  <h2 className="text-heading text-balance text-ink">
                    {t.approach.heading}
                  </h2>
                  <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate">
                    {t.approach.body}
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Values */}
      <Section tone="surface" space="lg">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow={t.values.eyebrow}
              heading={t.values.heading}
              layout="stacked"
            />
          </Reveal>

          <Stagger className="mt-12 grid gap-4 sm:grid-cols-3">
            {t.values.items.map((item, i) => {
              const Icon = valueIcons[i % valueIcons.length];
              return (
                <RevealItem key={item.title}>
                  <div className="flex h-full flex-col rounded-xl border border-hairline bg-canvas p-6">
                    <Icon
                      aria-hidden
                      className="size-6 text-brand"
                      strokeWidth={1.6}
                    />
                    <h3 className="mt-6 text-[1.0625rem] font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">
                      {item.body}
                    </p>
                  </div>
                </RevealItem>
              );
            })}
          </Stagger>
        </Container>
      </Section>

      {/* Registry identity + ISO */}
      <Section tone="canvas" space="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:col-span-7">
              <h2 className="text-heading text-balance text-ink">
                {t.identity.heading}
              </h2>
              <dl className="mt-8 divide-y divide-hairline overflow-hidden rounded-xl border border-hairline">
                {t.identity.rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid gap-1 bg-canvas px-5 py-4 sm:grid-cols-3 sm:gap-4 sm:px-6"
                  >
                    <dt className="text-[0.8125rem] font-medium text-steel">
                      {row.label}
                    </dt>
                    <dd className="text-[0.9375rem] text-ink sm:col-span-2">
                      {row.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal className="lg:col-span-5">
              <h2 className="text-heading text-balance text-ink">
                {t.certifications.heading}
              </h2>
              <ul className="mt-8 space-y-3">
                {t.certifications.items.map((cert) => (
                  <li
                    key={cert.code}
                    className="flex items-start gap-4 rounded-xl border border-hairline bg-surface-soft p-5"
                  >
                    <ShieldCheck
                      aria-hidden
                      className="mt-0.5 size-5 shrink-0 text-brand"
                      strokeWidth={1.7}
                    />
                    <div>
                      <p className="text-[0.9375rem] font-semibold text-ink">
                        {cert.code}
                      </p>
                      <p className="mt-0.5 text-[0.8125rem] text-slate">
                        {cert.label}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-[0.8125rem] leading-relaxed text-steel">
                {t.certifications.note}
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      <CtaBand dict={dict} contactHref={links.contact.href} />
    </>
  );
}
