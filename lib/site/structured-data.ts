/**
 * Every page's JSON-LD, built in one place.
 *
 * Two rules drive the shape of this file.
 *
 * 1. One `@graph` per page, not an array of loose root objects. Pages used to
 *    emit several unconnected `@context` roots, which describes several
 *    unrelated things that happen to share a page rather than one company.
 *
 * 2. Entities are declared once and referenced by `@id` everywhere else. The
 *    service pages previously inlined a fresh `Organization` as `provider`, so
 *    six services across two locales asserted twelve separate companies.
 *
 * Adding a page: build its graph here and render it with `<JsonLd>`, so the
 * node IDs stay consistent across the site.
 */

import {
  absoluteUrl,
  localeHtmlLang,
  localizedPath,
  serviceKeyFromSlug,
  siteUrl,
  type Locale,
  type PathnameKey,
  type ServiceSlug,
} from "@/lib/i18n/routing";
import { MAPS_HREF, getServiceNavItems } from "@/lib/site/nav";
import type { Messages } from "@/messages/ro";

/** Stable node identifiers. Referenced, never redefined. */
export const ORGANIZATION_ID = `${siteUrl}#organization`;
export const LOCAL_BUSINESS_ID = `${siteUrl}#localbusiness`;
export const WEBSITE_ID = `${siteUrl}#website`;

/** Trade-registry incorporation date. */
const FOUNDING_DATE = "2004-12-20";

const POSTAL_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "Șos. Hunedoarei nr. 13, Sat Cristur",
  addressLocality: "Deva",
  addressRegion: "Hunedoara",
  addressCountry: "RO",
} as const;

const OPENING_HOURS = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Saturday"],
    opens: "08:00",
    closes: "13:00",
  },
] as const;

/**
 * Where collections actually run. A bare Country node carries no local signal,
 * and local intent is where a yard in Cristur wins.
 */
const AREA_SERVED = [
  { "@type": "AdministrativeArea", name: "Județul Hunedoara" },
  ...[
    "Deva",
    "Hunedoara",
    "Simeria",
    "Călan",
    "Orăștie",
    "Hațeg",
    "Brad",
    "Petroșani",
  ].map((name) => ({ "@type": "City", name })),
  { "@type": "Country", name: "Romania" },
];

/**
 * Photographs of the operation. These replace an earlier `image` that pointed
 * at a page URL rather than an image — invalid, and silently discarded.
 * Dedicated yard photography in 1:1, 4:3 and 16:9 crops should supersede these.
 */
const BUSINESS_IMAGES = ["/images/feros.webp", "/images/hazard.webp"].map(
  absoluteUrl,
);

/** Strips the display spacing from a phone number for `telephone` values. */
const tel = (value: string) => value.replace(/\s/g, "");

function organizationNode(dict: Messages) {
  const c = dict.company;

  return {
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: c.shortName,
    legalName: c.legalName,
    // Always the default-locale root: one entity has one home, regardless of
    // which locale's page happens to be describing it.
    url: siteUrl,
    email: c.email,
    telephone: tel(c.phonePrimary),
    foundingDate: FOUNDING_DATE,
    vatID: `RO${c.cui}`,
    taxID: c.cui,
    description: dict.meta.description,
    image: BUSINESS_IMAGES,
    address: POSTAL_ADDRESS,
    areaServed: AREA_SERVED,
    // Globally unique registry keys. These let Google and LLMs match the site
    // to ANAF/registry records with certainty rather than by name similarity.
    identifier: [
      { "@type": "PropertyValue", name: "CUI", value: c.cui },
      {
        "@type": "PropertyValue",
        name: "Registrul Comerțului",
        value: c.tradeRegister,
      },
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: tel(c.phonePrimary),
        email: c.email,
        availableLanguage: ["ro", "en"],
        areaServed: "RO",
      },
    ],
    // `logo` and `sameAs` are deliberately absent rather than guessed.
    //
    // `logo` requires a real logo asset on a permanently stable URL. It is the
    // hard requirement for Google's logo rich result, and inventing a mark
    // would put a fabricated logo in the company knowledge panel.
    //
    // `sameAs` requires profiles that exist: a verified Google Business
    // Profile, LinkedIn, and the registry-aggregator records.
    //
    // See audit items B-01 and B-02.
  };
}

function localBusinessNode(dict: Messages, locale: Locale) {
  const c = dict.company;

  return {
    // `RecyclingCenter` is a first-class schema.org subtype of LocalBusiness
    // and classifies this operation precisely, where the generic parent did not.
    "@type": "RecyclingCenter",
    "@id": LOCAL_BUSINESS_ID,
    name: c.legalName,
    parentOrganization: { "@id": ORGANIZATION_ID },
    url: absoluteUrl(localizedPath("/contact", locale)),
    image: BUSINESS_IMAGES,
    email: c.email,
    telephone: tel(c.phonePrimary),
    address: POSTAL_ADDRESS,
    hasMap: MAPS_HREF,
    openingHoursSpecification: OPENING_HOURS,
    areaServed: AREA_SERVED,
    // `geo` omitted on purpose: the coordinates have to be the truck entrance
    // on Șos. Hunedoarei nr. 13, and a guessed pin is worse than none —
    // drivers navigate to it. See audit item B-07.
  };
}

function webSiteNode(dict: Messages, locale: Locale) {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: dict.meta.siteName,
    url: siteUrl,
    inLanguage: localeHtmlLang[locale],
    publisher: { "@id": ORGANIZATION_ID },
  };
}

function webPageNode({
  locale,
  pathnameKey,
  title,
  description,
}: {
  locale: Locale;
  pathnameKey: PathnameKey;
  title: string;
  description: string;
}) {
  const url = absoluteUrl(localizedPath(pathnameKey, locale));

  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORGANIZATION_ID },
    inLanguage: localeHtmlLang[locale],
  };
}

type Crumb = { name: string; url: string };

function breadcrumbNode(crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${crumbs[crumbs.length - 1].url}#breadcrumb`,
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

function homeCrumb(dict: Messages, locale: Locale): Crumb {
  return { name: dict.nav.home, url: absoluteUrl(localizedPath("/", locale)) };
}

function servicesCrumb(dict: Messages, locale: Locale): Crumb {
  return {
    name: dict.nav.services,
    url: absoluteUrl(localizedPath("/services", locale)),
  };
}

function graph(nodes: unknown[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/* -------------------------------------------------------------- per page */

export function homeGraph(dict: Messages, locale: Locale) {
  const services = getServiceNavItems(dict, locale);

  return graph([
    organizationNode(dict),
    localBusinessNode(dict, locale),
    webSiteNode(dict, locale),
    webPageNode({
      locale,
      pathnameKey: "/",
      title: dict.meta.home.title,
      description: dict.meta.home.description,
    }),
    {
      "@type": "ItemList",
      "@id": `${absoluteUrl(localizedPath("/", locale))}#services`,
      name: dict.nav.services,
      itemListElement: services.map((service, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: service.name,
        url: absoluteUrl(service.href),
      })),
    },
  ]);
}

export function servicesIndexGraph(dict: Messages, locale: Locale) {
  const services = getServiceNavItems(dict, locale);

  return graph([
    organizationNode(dict),
    webSiteNode(dict, locale),
    webPageNode({
      locale,
      pathnameKey: "/services",
      title: dict.meta.services.title,
      description: dict.meta.services.description,
    }),
    breadcrumbNode([homeCrumb(dict, locale), servicesCrumb(dict, locale)]),
    {
      "@type": "ItemList",
      "@id": `${absoluteUrl(localizedPath("/services", locale))}#list`,
      itemListElement: services.map((service, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: service.name,
        url: absoluteUrl(service.href),
      })),
    },
  ]);
}

export function serviceDetailGraph(
  dict: Messages,
  locale: Locale,
  slug: ServiceSlug,
) {
  const item = dict.services.items[slug];
  const pathnameKey = serviceKeyFromSlug(slug);
  const url = absoluteUrl(localizedPath(pathnameKey, locale));

  return graph([
    organizationNode(dict),
    webSiteNode(dict, locale),
    webPageNode({
      locale,
      pathnameKey,
      title: item.metaTitle,
      description: item.metaDescription,
    }),
    breadcrumbNode([
      homeCrumb(dict, locale),
      servicesCrumb(dict, locale),
      { name: item.name, url },
    ]),
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: item.title,
      description: item.metaDescription,
      url,
      serviceType: item.name,
      // A reference, not a second copy of the company.
      provider: { "@id": ORGANIZATION_ID },
      areaServed: AREA_SERVED,
    },
  ]);
}

export function contactGraph(dict: Messages, locale: Locale) {
  return graph([
    organizationNode(dict),
    localBusinessNode(dict, locale),
    webSiteNode(dict, locale),
    webPageNode({
      locale,
      pathnameKey: "/contact",
      title: dict.contact.metaTitle,
      description: dict.contact.metaDescription,
    }),
    breadcrumbNode([
      homeCrumb(dict, locale),
      {
        name: dict.nav.contact,
        url: absoluteUrl(localizedPath("/contact", locale)),
      },
    ]),
  ]);
}

/** About and Certifications: a page node plus a two-level breadcrumb. */
export function simplePageGraph({
  dict,
  locale,
  pathnameKey,
  title,
  description,
  crumbLabel,
}: {
  dict: Messages;
  locale: Locale;
  pathnameKey: PathnameKey;
  title: string;
  description: string;
  crumbLabel: string;
}) {
  return graph([
    organizationNode(dict),
    webSiteNode(dict, locale),
    webPageNode({ locale, pathnameKey, title, description }),
    breadcrumbNode([
      homeCrumb(dict, locale),
      { name: crumbLabel, url: absoluteUrl(localizedPath(pathnameKey, locale)) },
    ]),
  ]);
}

/**
 * A closing script tag inside a string value would otherwise terminate the
 * surrounding script element. Escaping `<` is the standard defence and leaves
 * the JSON semantically identical.
 */
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
