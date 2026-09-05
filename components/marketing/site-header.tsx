"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { Logo } from "@/components/marketing/logo";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/layout";
import { LocaleSwitcher } from "@/components/marketing/locale-switcher";
import { cn } from "@/lib/cn";
import { serviceIcons } from "@/lib/site/icons";
import type { Locale, ServiceSlug } from "@/lib/i18n/routing";

/**
 * Open/close transitions are plain CSS, not a JS animation library.
 * requestAnimationFrame is throttled in background tabs and low-power modes,
 * which can leave an rAF-driven drawer stranded off-screen; CSS transitions are
 * compositor-driven and always land on their end state.
 */

export type NavServiceItem = {
  slug: ServiceSlug;
  href: string;
  name: string;
  desc: string;
};

export type SiteHeaderProps = {
  locale: Locale;
  homeHref: string;
  links: {
    about: { href: string; label: string };
    services: { href: string; label: string };
    certifications: { href: string; label: string };
    articles: { href: string; label: string };
    contact: { href: string; label: string };
  };
  services: NavServiceItem[];
  labels: {
    cta: string;
    ctaHref: string;
    servicesOverview: string;
    servicesOverviewDesc: string;
    openMenu: string;
    closeMenu: string;
    languageSwitcher: string;
  };
};

export function SiteHeader({
  locale,
  homeHref,
  links,
  services,
  labels,
}: SiteHeaderProps) {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(true);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);

  // Elevate the bar once the page scrolls, matching the reference design's
  // flat-on-hero / bordered-on-scroll behaviour.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Any navigation closes both menus. Adjusted during render rather than in an
  // effect — React re-runs this component before committing, so the menus never
  // paint open on the new route (see react.dev "adjusting state on prop change").
  const [lastPathname, setLastPathname] = useState(pathname);
  if (lastPathname !== pathname) {
    setLastPathname(pathname);
    setDropdownOpen(false);
    setMobileOpen(false);
  }

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setDropdownOpen(false);
      setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  // Close the dropdown when a click lands outside it.
  useEffect(() => {
    if (!dropdownOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!servicesRef.current?.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [dropdownOpen]);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const scheduleClose = useCallback(() => {
    cancelClose();
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 140);
  }, [cancelClose]);

  const isActive = (href: string) =>
    href === homeHref ? pathname === href : pathname.startsWith(href);

  const servicesActive = pathname.startsWith(links.services.href);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-shadow duration-200",
          "border-b bg-canvas/85 backdrop-blur-md supports-[backdrop-filter]:bg-canvas/70",
          scrolled ? "border-hairline shadow-e1" : "border-transparent",
        )}
      >
      <Container>
        <div className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
          <Logo href={homeHref} />

          {/* ---------- Desktop nav ---------- */}
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            <NavLink href={links.about.href} active={isActive(links.about.href)}>
              {links.about.label}
            </NavLink>

            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => {
                cancelClose();
                setDropdownOpen(true);
              }}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                onClick={() => setDropdownOpen((open) => !open)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
                  servicesActive || dropdownOpen
                    ? "text-ink"
                    : "text-slate hover:text-ink",
                )}
              >
                {links.services.label}
                <ChevronDown
                  aria-hidden
                  className={cn(
                    "size-4 transition-transform duration-200",
                    dropdownOpen && "rotate-180",
                  )}
                />
              </button>

              <div
                inert={!dropdownOpen}
                className={cn(
                  "absolute left-1/2 top-full z-50 w-[38rem] -translate-x-1/2 pt-3",
                  "origin-top transition-all duration-200 ease-out",
                  dropdownOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-1 opacity-0",
                )}
              >
                <div className="overflow-hidden rounded-2xl border border-hairline bg-canvas shadow-e4">
                  <ul className="grid grid-cols-2 gap-1 p-2.5">
                    {services.map((service) => {
                      const Icon = serviceIcons[service.slug];
                      return (
                        <li key={service.slug}>
                          <Link
                            href={service.href}
                            className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-surface"
                          >
                            <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-surface text-brand transition-colors group-hover:bg-brand group-hover:text-white">
                              <Icon aria-hidden className="size-[1.05rem]" />
                            </span>
                            <span className="min-w-0">
                              <span className="block text-[0.875rem] font-medium text-ink">
                                {service.name}
                              </span>
                              <span className="mt-0.5 block text-[0.8125rem] leading-snug text-steel">
                                {service.desc}
                              </span>
                            </span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>

                  <Link
                    href={links.services.href}
                    className="group flex items-center justify-between gap-4 border-t border-hairline bg-surface-soft px-5 py-3.5 transition-colors hover:bg-surface"
                  >
                    <span>
                      <span className="block text-[0.875rem] font-medium text-ink">
                        {labels.servicesOverview}
                      </span>
                      <span className="text-[0.8125rem] text-steel">
                        {labels.servicesOverviewDesc}
                      </span>
                    </span>
                    <ArrowRight
                      aria-hidden
                      className="size-4 shrink-0 text-brand transition-transform group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </div>
            </div>

            <NavLink
              href={links.certifications.href}
              active={isActive(links.certifications.href)}
            >
              {links.certifications.label}
            </NavLink>
            <NavLink
              href={links.articles.href}
              active={isActive(links.articles.href)}
            >
              {links.articles.label}
            </NavLink>
            <NavLink
              href={links.contact.href}
              active={isActive(links.contact.href)}
            >
              {links.contact.label}
            </NavLink>
          </nav>

          {/* ---------- Right rail ---------- */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Wrapped rather than toggling `hidden` on the button itself:
                `Button` hardcodes `inline-flex`, and the two display utilities
                would fight on stylesheet order rather than class order. */}
            <div className="hidden sm:block">
              <LocaleSwitcher current={locale} label={labels.languageSwitcher} />
            </div>
            <div className="hidden sm:block">
              <ButtonLink href={labels.ctaHref} size="sm">
                {labels.cta}
              </ButtonLink>
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label={labels.openMenu}
              aria-expanded={mobileOpen}
              className="grid size-10 place-items-center rounded-full border border-hairline text-ink transition-colors hover:bg-surface lg:hidden"
            >
              <Menu aria-hidden className="size-[1.15rem]" />
            </button>
          </div>
        </div>
        </Container>
      </header>

      {/* ----------------------------------------------------------------
          Mobile drawer — a sibling of <header>, not a child.
          The header's `backdrop-filter` establishes a containing block for
          fixed-position descendants, which would collapse `fixed inset-0`
          down to the 64px header box instead of the viewport.
          ---------------------------------------------------------------- */}
      <div
        inert={!mobileOpen}
        className={cn(
          "fixed inset-0 z-[60] lg:hidden",
          mobileOpen ? "" : "pointer-events-none",
        )}
      >
        <button
          type="button"
          tabIndex={mobileOpen ? 0 : -1}
          aria-label={labels.closeMenu}
          onClick={() => setMobileOpen(false)}
          className={cn(
            "absolute inset-0 bg-ink/40 backdrop-blur-sm transition-opacity duration-200",
            mobileOpen ? "opacity-100" : "opacity-0",
          )}
        />

        <div
          role="dialog"
          aria-modal={mobileOpen}
          aria-label={links.services.label}
          className={cn(
            "absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-canvas shadow-e4",
            "transition-transform duration-300 ease-out",
            mobileOpen ? "translate-x-0" : "translate-x-full",
          )}
        >
          <div className="flex h-16 shrink-0 items-center justify-between border-b border-hairline px-5">
            <Logo href={homeHref} />
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              aria-label={labels.closeMenu}
              className="grid size-10 place-items-center rounded-full border border-hairline text-ink transition-colors hover:bg-surface"
            >
              <X aria-hidden className="size-[1.15rem]" />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="flex-1 overflow-y-auto overscroll-contain px-5 py-6"
          >
            <ul className="space-y-1">
              <li>
                <MobileLink href={links.about.href}>
                  {links.about.label}
                </MobileLink>
              </li>

              <li>
                <button
                  type="button"
                  onClick={() => setServicesExpanded((v) => !v)}
                  aria-expanded={servicesExpanded}
                  className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-[1.0625rem] font-medium text-ink transition-colors hover:bg-surface"
                >
                  {links.services.label}
                  <ChevronDown
                    aria-hidden
                    className={cn(
                      "size-[1.15rem] text-steel transition-transform duration-200",
                      servicesExpanded && "rotate-180",
                    )}
                  />
                </button>

                {servicesExpanded ? (
                  <ul className="mt-1 space-y-0.5 border-l border-hairline pl-3">
                    {services.map((service) => {
                      const Icon = serviceIcons[service.slug];
                      return (
                        <li key={service.slug}>
                          <Link
                            href={service.href}
                            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[0.9375rem] text-slate transition-colors hover:bg-surface hover:text-ink"
                          >
                            <Icon
                              aria-hidden
                              className="size-[1.05rem] shrink-0 text-brand"
                            />
                            {service.name}
                          </Link>
                        </li>
                      );
                    })}
                    <li>
                      <Link
                        href={links.services.href}
                        className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-[0.9375rem] font-medium text-brand transition-colors hover:bg-surface"
                      >
                        {labels.servicesOverview}
                        <ArrowRight aria-hidden className="size-4" />
                      </Link>
                    </li>
                  </ul>
                ) : null}
              </li>

              <li>
                <MobileLink href={links.certifications.href}>
                  {links.certifications.label}
                </MobileLink>
              </li>
              <li>
                <MobileLink href={links.articles.href}>
                  {links.articles.label}
                </MobileLink>
              </li>
              <li>
                <MobileLink href={links.contact.href}>
                  {links.contact.label}
                </MobileLink>
              </li>
            </ul>
          </nav>

          <div className="shrink-0 space-y-4 border-t border-hairline px-5 py-5">
            <ButtonLink
              href={labels.ctaHref}
              size="lg"
              className="w-full"
              trailingIcon="arrow"
            >
              {labels.cta}
            </ButtonLink>
            <div className="flex justify-center">
              <LocaleSwitcher current={locale} label={labels.languageSwitcher} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NavLink({
  href,
  children,
  active,
}: {
  href: string;
  children: React.ReactNode;
  active: boolean;
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-full px-3.5 py-2 text-sm font-medium transition-colors",
        active ? "text-ink" : "text-slate hover:text-ink",
      )}
    >
      {children}
    </Link>
  );
}

function MobileLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="block rounded-xl px-3 py-3 text-[1.0625rem] font-medium text-ink transition-colors hover:bg-surface"
    >
      {children}
    </Link>
  );
}
