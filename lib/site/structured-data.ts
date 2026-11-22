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
  articleKeyFromSlug,
  localeHtmlLang,
  localizedPath,
  materialKeyFromSlug,
  serviceKeyFromSlug,
  siteUrl,
  type ArticleSlug,
  type Locale,
  type MaterialSlug,
  type PathnameKey,
  type ServiceSlug,
} from "@/lib/i18n/routing";
import { FOUNDING_DATE } from "@/lib/site/company";
import { getArticle, getArticles } from "@/lib/site/articles";
import { getMaterial, getMaterials } from "@/lib/site/materials";
import { MAPS_HREF, getServiceNavItems } from "@/lib/site/nav";
import { PRICE_CATEGORIES, PRICES_UPDATED_AT } from "@/lib/site/prices";
import type { Messages } from "@/messages/ro";

/** Stable node identifiers. Referenced, never redefined. */
export const ORGANIZATION_ID = `${siteUrl}#organization`;
export const LOCAL_BUSINESS_ID = `${siteUrl}#localbusiness`;
export const WEBSITE_ID = `${siteUrl}#website`;

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
 * IPTC digital source types. The controlled vocabulary every major platform
 * has standardised on for “how was this made”, carried here as a
 * `PropertyValue` because schema.org has no native property for it.
 *
 * `digitalCapture` is a positive claim, not boilerplate: the photography on
 * this site was shot at the yard, and asserting that is worth doing precisely
 * because the video on the site was not (see `SYNTHETIC_MEDIA`).
 */
const IPTC_SOURCE_TYPE = "https://cv.iptc.org/newscodes/digitalsourcetype/";

function digitalSourceType(value: string) {
  return {
    "@type": "PropertyValue",
    name: "digitalSourceType",
    propertyID: IPTC_SOURCE_TYPE,
    value,
  };
}

/**
 * Only the homepage hero background video (`/videos/herobox-video.mp4`) is
 * AI-generated (conditioned on the company's own photographs), so that clip is
 * `trainedAlgorithmicMedia`. All other operational clips (`trucks.mp4`,
 * `verificare.mp4`, `cabluri.mp4`, `graifer.mp4`, `infrastructura.mp4`) and
 * all site photographs are original yard captures (`digitalCapture`).
 * Attach the appropriate IPTC source type when marking up `VideoObject` nodes.
 */
export const SYNTHETIC_MEDIA_SOURCE_TYPE = "trainedAlgorithmicMedia";

const BUSINESS_IMAGE_PATHS = ["/images/feros.webp", "/images/hazard.webp"] as const;

const BUSINESS_IMAGE_IDS = BUSINESS_IMAGE_PATHS.map((path) => ({
  "@id": `${absoluteUrl(path)}#image`,
}));

/**
 * Photographs of the operation, as full `ImageObject` nodes rather than bare
 * URLs, so the company’s ownership travels with them.
 *
 * This is original photography of an industrial site — genuinely scarce
 * material that competitors fill with stock — so it is worth claiming
 * explicitly rather than publishing anonymously. Including `license` (all
 * rights reserved terms) and `acquireLicensePage` (contact page for reuse
 * permission) satisfies Google Images' full Image Metadata schema cleanly.
 */
function businessImages(locale: Locale) {
  const license = absoluteUrl(localizedPath("/terms", locale));
  const acquireLicensePage = absoluteUrl(localizedPath("/contact", locale));

  return BUSINESS_IMAGE_PATHS.map((path) => ({
    "@type": "ImageObject",
    "@id": `${absoluteUrl(path)}#image`,
    url: absoluteUrl(path),
    contentUrl: absoluteUrl(path),
    creditText: "Ecoplast Hart SRL",
    creator: { "@id": ORGANIZATION_ID },
    copyrightHolder: { "@id": ORGANIZATION_ID },
    copyrightNotice: "© Ecoplast Hart SRL",
    license,
    acquireLicensePage,
    additionalProperty: digitalSourceType("digitalCapture"),
  }));
}

/**
 * The company mark on a stable, crawlable URL — the same recycling loop the
 * site header renders, generated by `scripts/generate-icons.mjs`.
 *
 * This is what Google reads for the logo rich result and the knowledge panel.
 * It is declared as an `ImageObject` with explicit dimensions rather than a
 * bare URL string so the dimensions do not depend on Google fetching the file
 * before it can use it. 512px clears the 112px minimum with room to spare.
 */
const LOGO = {
  "@type": "ImageObject",
  "@id": `${siteUrl}#logo`,
  url: absoluteUrl("/brand/logo.png"),
  contentUrl: absoluteUrl("/brand/logo.png"),
  width: 512,
  height: 512,
  caption: "Ecoplast Hart",
} as const;

/** Strips the display spacing from a phone number for `telephone` values. */
const tel = (value: string) => value.replace(/\s/g, "");

function organizationNode(dict: Messages, locale: Locale) {
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
    logo: LOGO,
    image: businessImages(locale),
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
    // `sameAs` is still deliberately absent rather than guessed. It requires
    // profiles that exist and that this company controls: a verified Google
    // Business Profile, a LinkedIn page, the registry-aggregator records.
    // Pointing it at a URL that turns out to be a different Ecoplast would
    // merge two companies in Google's entity graph. See audit item B-02.
    //
    // (B-01, the missing `logo`, is resolved above.)
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
    image: BUSINESS_IMAGE_IDS,
    email: c.email,
    telephone: tel(c.phonePrimary),
    address: POSTAL_ADDRESS,
    hasMap: MAPS_HREF,
    openingHoursSpecification: OPENING_HOURS,
    areaServed: AREA_SERVED,
    // The truck entrance on Șos. Hunedoarei nr. 13, confirmed by the owner —
    // drivers navigate to this pin, so don't replace it with a geocoded guess.
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.832648,
      longitude: 22.946901,
    },
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

function materialsCrumb(dict: Messages, locale: Locale): Crumb {
  return {
    name: dict.nav.materials,
    url: absoluteUrl(localizedPath("/materials", locale)),
  };
}

function graph(nodes: unknown[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

/* -------------------------------------------------------------- per page */

export function homeGraph(dict: Messages, locale: Locale) {
  const services = getServiceNavItems(dict, locale);

  return graph([
    organizationNode(dict, locale),
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
    organizationNode(dict, locale),
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
    organizationNode(dict, locale),
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

export function materialsIndexGraph(dict: Messages, locale: Locale) {
  const materials = getMaterials(dict, locale);

  return graph([
    organizationNode(dict, locale),
    localBusinessNode(dict, locale),
    webSiteNode(dict, locale),
    webPageNode({
      locale,
      pathnameKey: "/materials",
      title: dict.materials.metaTitle,
      description: dict.materials.metaDescription,
    }),
    breadcrumbNode([homeCrumb(dict, locale), materialsCrumb(dict, locale)]),
    {
      "@type": "ItemList",
      "@id": `${absoluteUrl(localizedPath("/materials", locale))}#list`,
      name: dict.materials.index.title,
      itemListElement: materials.map((material, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: material.name,
        url: absoluteUrl(material.href),
      })),
    },
  ]);
}

export function materialDetailGraph(
  dict: Messages,
  locale: Locale,
  slug: MaterialSlug,
) {
  const material = getMaterial(dict, locale, slug);
  const pathnameKey = materialKeyFromSlug(slug);
  const url = absoluteUrl(localizedPath(pathnameKey, locale));

  return graph([
    organizationNode(dict, locale),
    localBusinessNode(dict, locale),
    webSiteNode(dict, locale),
    {
      ...webPageNode({
        locale,
        pathnameKey,
        title: material.metaTitle,
        description: material.metaDescription,
      }),
      "@type": ["WebPage", "FAQPage"],
      mainEntity: material.faq.map((entry) => ({
        "@type": "Question",
        name: entry.question,
        acceptedAnswer: { "@type": "Answer", text: entry.answer },
      })),
    },
    breadcrumbNode([
      homeCrumb(dict, locale),
      materialsCrumb(dict, locale),
      { name: material.name, url },
    ]),
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: material.title,
      description: material.metaDescription,
      url,
      serviceType: material.name,
      provider: { "@id": ORGANIZATION_ID },
      areaServed: AREA_SERVED,
      isRelatedTo: {
        "@id": `${absoluteUrl(localizedPath(material.service, locale))}#service`,
      },
    },
  ]);
}

export function pricesPageGraph(dict: Messages, locale: Locale) {
  const url = absoluteUrl(localizedPath("/prices", locale));
  const t = dict.prices;
  const rows = PRICE_CATEGORIES.flatMap((category) =>
    category.rows.map((row) => ({
      category,
      row,
      grade: t.grades[row.id],
    })),
  );

  return graph([
    organizationNode(dict, locale),
    localBusinessNode(dict, locale),
    webSiteNode(dict, locale),
    {
      ...webPageNode({
        locale,
        pathnameKey: "/prices",
        title: t.metaTitle,
        description: t.metaDescription,
      }),
      "@type": ["WebPage", "FAQPage"],
      dateModified: PRICES_UPDATED_AT,
      mainEntity: t.faq.map((entry) => ({
        "@type": "Question",
        name: entry.question,
        acceptedAnswer: { "@type": "Answer", text: entry.answer },
      })),
    },
    breadcrumbNode([
      homeCrumb(dict, locale),
      { name: dict.nav.prices, url },
    ]),
    {
      "@type": "ItemList",
      "@id": `${url}#price-list`,
      name: t.title,
      numberOfItems: rows.length,
      itemListElement: rows.map(({ category, grade }, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Offer",
          name: grade.label,
          description: grade.details,
          url: absoluteUrl(localizedPath(category.material, locale)),
          priceCurrency: "RON",
          offeredBy: { "@id": ORGANIZATION_ID },
        },
      })),
    },
  ]);
}

function articlesCrumb(dict: Messages, locale: Locale): Crumb {
  return {
    name: dict.nav.articles,
    url: absoluteUrl(localizedPath("/articles", locale)),
  };
}

/**
 * Each article's own statically generated OG card doubles as its `image`.
 * Google requires an image on `Article`/`BlogPosting` for the rich result, and
 * pointing at the article's dedicated card gives every post a unique, honest
 * representation rather than reusing the homepage card.
 */
function articleImage(locale: Locale, slug: ArticleSlug) {
  return {
    "@type": "ImageObject",
    url: absoluteUrl(`/og/${locale}/articles/${slug}`),
    width: 1200,
    height: 630,
  };
}

/** The feed: a `Blog` whose posts are listed, plus the usual page nodes. */
export function articlesIndexGraph(dict: Messages, locale: Locale) {
  const articles = getArticles(dict, locale);
  const url = absoluteUrl(localizedPath("/articles", locale));

  return graph([
    organizationNode(dict, locale),
    webSiteNode(dict, locale),
    webPageNode({
      locale,
      pathnameKey: "/articles",
      title: dict.articles.metaTitle,
      description: dict.articles.metaDescription,
    }),
    breadcrumbNode([homeCrumb(dict, locale), articlesCrumb(dict, locale)]),
    {
      "@type": "Blog",
      "@id": `${url}#blog`,
      name: dict.articles.title,
      description: dict.articles.metaDescription,
      url,
      inLanguage: localeHtmlLang[locale],
      publisher: { "@id": ORGANIZATION_ID },
      blogPost: articles.map((article) => ({
        "@type": "BlogPosting",
        "@id": `${absoluteUrl(article.href)}#article`,
        headline: article.title,
        url: absoluteUrl(article.href),
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
      })),
    },
  ]);
}

/**
 * One article.
 *
 * The page node carries both `WebPage` and `FAQPage`, rather than emitting a
 * second free-standing `FAQPage` root: the questions are part of this page,
 * not a separate document that happens to share the URL. `BlogPosting` then
 * points at it via `mainEntityOfPage`.
 *
 * `author` is the company, referenced by `@id` — not a fabricated byline.
 * Google is explicit that `author` must be the entity that actually wrote the
 * piece, and an organisation is a valid one.
 */
export function articleDetailGraph(
  dict: Messages,
  locale: Locale,
  slug: ArticleSlug,
) {
  const article = getArticle(dict, locale, slug);
  const pathnameKey = articleKeyFromSlug(slug);
  const url = absoluteUrl(localizedPath(pathnameKey, locale));

  return graph([
    organizationNode(dict, locale),
    webSiteNode(dict, locale),
    {
      ...webPageNode({
        locale,
        pathnameKey,
        title: article.metaTitle,
        description: article.metaDescription,
      }),
      "@type": ["WebPage", "FAQPage"],
      mainEntity: article.faq.map((entry) => ({
        "@type": "Question",
        name: entry.question,
        acceptedAnswer: { "@type": "Answer", text: entry.answer },
      })),
    },
    breadcrumbNode([
      homeCrumb(dict, locale),
      articlesCrumb(dict, locale),
      { name: article.title, url },
    ]),
    {
      "@type": "BlogPosting",
      "@id": `${url}#article`,
      headline: article.title,
      description: article.excerpt,
      articleSection: article.topicLabel,
      url,
      mainEntityOfPage: { "@id": `${url}#webpage` },
      datePublished: article.publishedAt,
      dateModified: article.updatedAt,
      inLanguage: localeHtmlLang[locale],
      wordCount: countWords(article),
      timeRequired: `PT${article.readMinutes}M`,
      image: articleImage(locale, slug),
      author: { "@id": ORGANIZATION_ID },
      publisher: { "@id": ORGANIZATION_ID },
      isPartOf: {
        "@id": `${absoluteUrl(localizedPath("/articles", locale))}#blog`,
      },
      // Same `@id` the service page declares, so the two graphs join: this
      // article is about that service, matching the visible callout.
      about: {
        "@id": `${absoluteUrl(localizedPath(article.service, locale))}#service`,
      },
    },
  ]);
}

/**
 * `wordCount` over the prose that actually renders, so the number stays true
 * when an article is edited. Counting is naive on purpose — it only has to be
 * the right order of magnitude.
 */
function countWords(article: { lead: string; sections: readonly { body: readonly string[] }[] }) {
  const text = [
    article.lead,
    ...article.sections.flatMap((section) => section.body),
  ].join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}

export function contactGraph(dict: Messages, locale: Locale) {
  return graph([
    organizationNode(dict, locale),
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
    organizationNode(dict, locale),
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
