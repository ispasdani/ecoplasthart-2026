import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

import { PageHero } from "@/components/marketing/page-hero";
import { ButtonLink, IconCircle } from "@/components/ui/button";
import { Container, Section } from "@/components/ui/layout";
import { MediaTile } from "@/components/ui/media";
import { Reveal, RevealItem, Stagger } from "@/components/ui/reveal";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { absoluteUrl, isLocale, localizedPath } from "@/lib/i18n/routing";
import { MAPS_HREF, getServiceNavItems } from "@/lib/site/nav";

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
    pathnameKey: "/contact",
    title: dict.contact.metaTitle,
    description: dict.contact.metaDescription,
    siteName: dict.meta.siteName,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  const dict = await getDictionary(locale);
  const t = dict.contact;
  const company = dict.company;
  const services = getServiceNavItems(dict, locale);

  const tel = (value: string) => `tel:${value.replace(/\s/g, "")}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.legalName,
    image: absoluteUrl(localizedPath("/", locale)),
    url: absoluteUrl(localizedPath("/contact", locale)),
    email: company.email,
    telephone: company.phonePrimary.replace(/\s/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Șos. Hunedoarei nr. 13, Sat Cristur",
      addressLocality: "Deva",
      addressRegion: "Hunedoara",
      addressCountry: "RO",
    },
    hasMap: MAPS_HREF,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "13:00",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        breadcrumbLabel={dict.a11y.breadcrumb}
        crumbs={[
          { href: localizedPath("/", locale), label: dict.nav.home },
          { href: localizedPath("/contact", locale), label: dict.nav.contact },
        ]}
        aside={
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href={`mailto:${company.email}`} trailingIcon="arrow">
              {dict.common.sendEmail}
            </ButtonLink>
            <ButtonLink href={tel(company.phonePrimary)} variant="secondary">
              {company.phonePrimary}
            </ButtonLink>
          </div>
        }
      />

      {/* Channels */}
      <Section tone="canvas" space="lg">
        <Container>
          <Reveal>
            <h2 className="text-heading text-ink">{t.channelsHeading}</h2>
          </Reveal>

          <Stagger className="mt-10 grid gap-4 md:grid-cols-3">
            <RevealItem>
              <ContactCard
                icon={<Mail aria-hidden className="size-[1.15rem]" strokeWidth={1.7} />}
                label={t.emailLabel}
              >
                <a
                  href={`mailto:${company.email}`}
                  className="break-all text-[0.9375rem] font-medium text-ink transition-colors hover:text-brand"
                >
                  {company.email}
                </a>
              </ContactCard>
            </RevealItem>

            <RevealItem>
              <ContactCard
                icon={<Phone aria-hidden className="size-[1.15rem]" strokeWidth={1.7} />}
                label={t.phoneLabel}
              >
                <div className="space-y-1">
                  {[
                    company.phonePrimary,
                    company.phoneSecondary,
                    company.phoneTertiary,
                  ].map((phone) => (
                    <a
                      key={phone}
                      href={tel(phone)}
                      className="block text-[0.9375rem] font-medium text-ink transition-colors hover:text-brand"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </ContactCard>
            </RevealItem>

            <RevealItem>
              <ContactCard
                icon={<Clock aria-hidden className="size-[1.15rem]" strokeWidth={1.7} />}
                label={t.hoursHeading}
              >
                <ul className="space-y-1 text-[0.9375rem] text-charcoal">
                  <li>{t.hoursWeekdays}</li>
                  <li>{t.hoursSaturday}</li>
                  <li className="text-steel">{t.hoursSunday}</li>
                </ul>
              </ContactCard>
            </RevealItem>
          </Stagger>
        </Container>
      </Section>

      {/* Locations */}
      <Section tone="surface" space="lg">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <Reveal className="lg:col-span-6">
              <MediaTile
                icon={MapPin}
                variant={1}
                overlay={false}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="h-[16rem] rounded-2xl sm:h-[22rem] lg:h-full lg:min-h-[24rem]"
              />
            </Reveal>

            <div className="space-y-8 lg:col-span-6">
              <Reveal>
                <div className="rounded-2xl border border-hairline bg-canvas p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-ink">
                    {t.officeHeading}
                  </h2>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-slate">
                    {t.officeBody}
                  </p>
                  <address className="mt-5 not-italic text-[0.9375rem] font-medium text-ink">
                    {company.addressOperational}
                  </address>
                  <div className="mt-6">
                    <ButtonLink
                      href={MAPS_HREF}
                      variant="secondary"
                      size="sm"
                      trailingIcon="arrow-up-right"
                      external
                    >
                      {t.directionsCta}
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>

              <Reveal>
                <div className="rounded-2xl border border-hairline bg-canvas p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-ink">
                    {t.legalHeading}
                  </h2>
                  <address className="mt-3 not-italic text-[0.9375rem] leading-relaxed text-slate">
                    {company.addressLegal}
                  </address>
                  <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3 border-t border-hairline pt-5 text-[0.875rem]">
                    <div>
                      <dt className="text-steel">CUI</dt>
                      <dd className="font-medium text-ink">{company.cui}</dd>
                    </div>
                    <div>
                      <dt className="text-steel">Reg. com.</dt>
                      <dd className="font-medium text-ink">
                        {company.tradeRegister}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-steel">{company.caen}</dt>
                      <dd className="font-medium text-ink">
                        {dict.about.identity.rows[4].value.split("—")[1]?.trim() ??
                          "—"}
                      </dd>
                    </div>
                  </dl>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Quick links back into services */}
      <Section tone="canvas" space="md">
        <Container>
          <Reveal>
            <h2 className="text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-steel">
              {dict.nav.services}
            </h2>
          </Reveal>
          <Stagger className="mt-5 flex flex-wrap gap-2.5">
            {services.map((service) => (
              <RevealItem key={service.slug}>
                <ButtonLink
                  href={service.href}
                  variant="secondary"
                  size="sm"
                  trailingIcon="arrow"
                >
                  {service.name}
                </ButtonLink>
              </RevealItem>
            ))}
          </Stagger>
        </Container>
      </Section>
    </>
  );
}

function ContactCard({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-hairline bg-canvas p-6">
      <IconCircle tone="dark">{icon}</IconCircle>
      <p className="mt-6 text-[0.75rem] font-semibold uppercase tracking-[0.12em] text-steel">
        {label}
      </p>
      <div className="mt-2">{children}</div>
    </div>
  );
}
