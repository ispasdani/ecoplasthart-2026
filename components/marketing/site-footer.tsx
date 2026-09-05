import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

import { Logo } from "@/components/marketing/logo";
import { Container } from "@/components/ui/layout";
import type { Messages } from "@/messages/ro";

export type FooterLink = { href: string; label: string };

/**
 * Dark multi-column footer (design.md `footer-region`), collapsing from a
 * 12-column grid to a single stacked column on mobile.
 */
export function SiteFooter({
  dict,
  homeHref,
  serviceLinks,
  companyLinks,
  legalLinks,
  mapsHref,
}: {
  dict: Messages;
  homeHref: string;
  serviceLinks: FooterLink[];
  companyLinks: FooterLink[];
  /** Privacy and cookie policies — rendered in the bottom legal strip. */
  legalLinks: FooterLink[];
  mapsHref: string;
}) {
  const { company, footer } = dict;
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-deep text-on-dark">
      <Container>
        <div className="grid gap-12 py-16 sm:py-20 lg:grid-cols-12 lg:gap-8">
          {/* Brand + blurb */}
          <div className="lg:col-span-4">
            <Logo href={homeHref} tone="dark" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-on-dark-muted">
              {footer.blurb}
            </p>

            <dl className="mt-7 space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <dt className="mt-0.5">
                  <Mail aria-hidden className="size-4 text-brand-mid" />
                  <span className="sr-only">{dict.contact.emailLabel}</span>
                </dt>
                <dd>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-on-dark transition-colors hover:text-brand-mid"
                  >
                    {company.email}
                  </a>
                </dd>
              </div>
              <div className="flex items-start gap-3">
                <dt className="mt-0.5">
                  <Phone aria-hidden className="size-4 text-brand-mid" />
                  <span className="sr-only">{dict.contact.phoneLabel}</span>
                </dt>
                <dd className="space-y-1">
                  <a
                    href={`tel:${company.phonePrimary.replace(/\s/g, "")}`}
                    className="block text-on-dark transition-colors hover:text-brand-mid"
                  >
                    {company.phonePrimary}
                  </a>
                  <a
                    href={`tel:${company.phoneSecondary.replace(/\s/g, "")}`}
                    className="block text-on-dark-muted transition-colors hover:text-brand-mid"
                  >
                    {company.phoneSecondary}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Services */}
          <nav aria-label={footer.servicesHeading} className="lg:col-span-3">
            <h2 className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-on-dark">
              {footer.servicesHeading}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-on-dark-muted transition-colors hover:text-on-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label={footer.companyHeading} className="lg:col-span-2">
            <h2 className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-on-dark">
              {footer.companyHeading}
            </h2>
            <ul className="mt-4 space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-on-dark-muted transition-colors hover:text-on-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Addresses */}
          <div className="lg:col-span-3">
            <h2 className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-on-dark">
              {footer.contactHeading}
            </h2>
            <div className="mt-4 space-y-5 text-sm">
              <div>
                <p className="text-[0.75rem] uppercase tracking-wider text-stone">
                  {footer.officeLabel}
                </p>
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-start gap-2 text-on-dark-muted transition-colors hover:text-on-dark"
                >
                  <MapPin aria-hidden className="mt-0.5 size-4 shrink-0 text-brand-mid" />
                  <span>{company.addressOperational}</span>
                </a>
              </div>
              <div>
                <p className="text-[0.75rem] uppercase tracking-wider text-stone">
                  {footer.legalSeatLabel}
                </p>
                <p className="mt-1 text-on-dark-muted">{company.addressLegal}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal strip */}
        <div className="border-t border-hairline-dark py-6 text-[0.8125rem] text-on-dark-muted">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {year} {company.legalName}. {footer.rights}
            </p>

            <nav aria-label={footer.legalLinksLabel}>
              <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="transition-colors hover:text-on-dark"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <p className="mt-4 max-w-3xl text-on-dark-muted">
            {footer.mediaCredit}
          </p>

          <p className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
            <span>CUI {company.cui}</span>
            <span aria-hidden className="hidden sm:inline">
              ·
            </span>
            <span>{company.tradeRegister}</span>
            <span aria-hidden className="hidden sm:inline">
              ·
            </span>
            <span>{company.caen}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
