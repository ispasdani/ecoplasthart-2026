import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { Container, Eyebrow } from "@/components/ui/layout";
import { FadeIn } from "@/components/ui/reveal";

export type Crumb = { href: string; label: string };

/**
 * Standard hero for inner pages: breadcrumb, eyebrow, H1 and a lead paragraph,
 * over the same soft brand wash as the homepage hero.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
  breadcrumbLabel,
  aside,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  crumbs?: Crumb[];
  breadcrumbLabel: string;
  aside?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-hairline bg-canvas">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-[radial-gradient(60%_120%_at_15%_0%,var(--color-brand-soft)_0%,transparent_65%)]"
      />

      <Container className="relative">
        <div className="py-12 sm:py-16 lg:py-20">
          {crumbs?.length ? (
            <FadeIn>
              <nav aria-label={breadcrumbLabel} className="mb-8">
                <ol className="flex flex-wrap items-center gap-1.5 text-[0.8125rem] text-steel">
                  {crumbs.map((crumb, i) => (
                    <li key={crumb.href} className="flex items-center gap-1.5">
                      {i > 0 ? (
                        <ChevronRight aria-hidden className="size-3.5 text-muted" />
                      ) : null}
                      <Link
                        href={crumb.href}
                        className="transition-colors hover:text-ink"
                      >
                        {crumb.label}
                      </Link>
                    </li>
                  ))}
                </ol>
              </nav>
            </FadeIn>
          ) : null}

          <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              {eyebrow ? (
                <FadeIn delay={0.04}>
                  <Eyebrow>{eyebrow}</Eyebrow>
                </FadeIn>
              ) : null}
              <FadeIn delay={0.08}>
                <h1 className="mt-4 max-w-[18ch] text-display-sm text-balance text-ink">
                  {title}
                </h1>
              </FadeIn>
            </div>

            <div className="flex flex-col justify-end lg:col-span-5">
              {lead ? (
                <FadeIn delay={0.16}>
                  <p className="max-w-xl text-[1.0625rem] leading-relaxed text-slate">
                    {lead}
                  </p>
                </FadeIn>
              ) : null}
              {aside ? <FadeIn delay={0.24}>{aside}</FadeIn> : null}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
