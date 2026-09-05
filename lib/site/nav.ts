import {
  localizedPath,
  serviceKeys,
  type Locale,
  type ServiceKey,
  type ServiceSlug,
} from "@/lib/i18n/routing";
import type { Messages } from "@/messages/ro";

/** `"/services/metal-waste"` → `"metal-waste"`. */
export function slugForServiceKey(key: ServiceKey): ServiceSlug {
  return key.slice("/services/".length) as ServiceSlug;
}

/**
 * The six services, resolved for one locale: localized href plus the nav
 * label/description from the dictionary. Shared by the header dropdown, the
 * footer, the services index and the "related services" rail.
 */
export function getServiceNavItems(dict: Messages, locale: Locale) {
  return serviceKeys.map((key) => {
    const slug = slugForServiceKey(key);
    const item = dict.services.items[slug];
    return {
      key,
      slug,
      href: localizedPath(key, locale),
      name: item.name,
      desc: item.navDesc,
      lead: item.lead,
      title: item.title,
      imageAlt: serviceImageAlt(dict, slug),
    };
  });
}

export type ServiceNavItem = ReturnType<typeof getServiceNavItems>[number];

/**
 * Alt text for a service photo, or `undefined` when that service has no photo.
 * Cast because only the slugs with an image carry a key, and an empty alt is
 * the correct output for a purely decorative gradient tile.
 */
export function serviceImageAlt(
  dict: Messages,
  slug: ServiceSlug,
): string | undefined {
  const alts = dict.services.imageAlts as Partial<Record<ServiceSlug, string>>;
  return alts[slug];
}

/** Google Maps deep link for the operational yard. */
export const MAPS_HREF =
  "https://www.google.com/maps/search/?api=1&query=Ecoplast+Hart+Sat+Cristur+Soseaua+Hunedoarei+13+Deva+Hunedoara";

/** Main nav destinations, resolved for one locale. */
export function getPrimaryLinks(dict: Messages, locale: Locale) {
  return {
    about: {
      href: localizedPath("/about-us", locale),
      label: dict.nav.about,
    },
    services: {
      href: localizedPath("/services", locale),
      label: dict.nav.services,
    },
    certifications: {
      href: localizedPath("/certifications", locale),
      label: dict.nav.certifications,
    },
    contact: {
      href: localizedPath("/contact", locale),
      label: dict.nav.contact,
    },
    privacy: {
      href: localizedPath("/privacy-policy", locale),
      label: dict.nav.privacy,
    },
    cookies: {
      href: localizedPath("/cookie-policy", locale),
      label: dict.nav.cookies,
    },
  };
}
