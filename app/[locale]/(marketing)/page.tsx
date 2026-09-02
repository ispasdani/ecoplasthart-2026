import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Capabilities } from "@/components/marketing/sections/capabilities";
import { CertificationsTeaser } from "@/components/marketing/sections/certifications-teaser";
import { CtaBand } from "@/components/marketing/sections/cta-band";
import { Hero } from "@/components/marketing/sections/hero";
import { Industries } from "@/components/marketing/sections/industries";
import { Process } from "@/components/marketing/sections/process";
import { ServicesShowcase } from "@/components/marketing/sections/services-showcase";
import { StatsBand } from "@/components/marketing/sections/stats";
import { WasteStreams } from "@/components/marketing/sections/waste-streams";
import { WhyUs } from "@/components/marketing/sections/why-us";
import { getDictionary } from "@/lib/i18n/dictionary";
import { buildPageMetadata } from "@/lib/i18n/metadata";
import { absoluteUrl, isLocale, localizedPath, siteUrl } from "@/lib/i18n/routing";
import { MAPS_HREF, getPrimaryLinks, getServiceNavItems } from "@/lib/site/nav";

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
  const links = getPrimaryLinks(dict, locale);
  const services = getServiceNavItems(dict, locale);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: dict.company.legalName,
      alternateName: dict.company.shortName,
      url: absoluteUrl(localizedPath("/", locale)),
      email: dict.company.email,
      telephone: dict.company.phonePrimary.replace(/\s/g, ""),
      foundingDate: "2004-12-20",
      vatID: `RO${dict.company.cui}`,
      taxID: dict.company.cui,
      description: dict.meta.description,
      areaServed: { "@type": "Country", name: "Romania" },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Șos. Hunedoarei nr. 13, Sat Cristur",
        addressLocality: "Deva",
        addressRegion: "Hunedoara",
        addressCountry: "RO",
      },
      hasMap: MAPS_HREF,
      makesOffer: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          url: absoluteUrl(service.href),
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteUrl}#website`,
      name: dict.meta.siteName,
      url: siteUrl,
      inLanguage: locale === "ro" ? "ro-RO" : "en",
      publisher: { "@id": `${siteUrl}#organization` },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Hero
        dict={dict}
        ctaHref={links.contact.href}
        servicesHref={links.services.href}
      />
      <StatsBand dict={dict} />
      <WhyUs dict={dict} />
      <ServicesShowcase
        dict={dict}
        services={services}
        servicesHref={links.services.href}
      />
      <Industries dict={dict} />
      <Capabilities
        dict={dict}
        services={services}
        learnMoreLabel={dict.common.learnMore}
      />
      <Process dict={dict} />
      <WasteStreams dict={dict} />
      <CertificationsTeaser dict={dict} href={links.certifications.href} />
      <CtaBand dict={dict} contactHref={links.contact.href} />
    </>
  );
}
