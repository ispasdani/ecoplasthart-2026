import type { ElementType, ReactNode } from "react";

import { cn } from "@/lib/cn";

/* ==========================================================================
   Container — 1280px max width with responsive gutters (design.md: Grid).
   ========================================================================== */

export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  /** `narrow` is for long-form prose columns; `wide` for full bleed-ish grids. */
  size?: "narrow" | "default" | "wide";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        size === "narrow" && "max-w-3xl",
        size === "default" && "max-w-[80rem]",
        size === "wide" && "max-w-[90rem]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ==========================================================================
   Section — vertical rhythm + surface tone in one place.
   ========================================================================== */

const TONE_CLASS = {
  canvas: "bg-canvas text-ink",
  surface: "bg-surface text-ink",
  soft: "bg-surface-soft text-ink",
  brand: "bg-brand-soft text-ink",
  dark: "bg-brand-deep text-on-dark",
} as const;

const SPACE_CLASS = {
  none: "",
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20 lg:py-24",
  lg: "py-20 sm:py-28 lg:py-32",
} as const;

export function Section({
  children,
  className,
  tone = "canvas",
  space = "lg",
  id,
  as: Tag = "section",
}: {
  children: ReactNode;
  className?: string;
  tone?: keyof typeof TONE_CLASS;
  space?: keyof typeof SPACE_CLASS;
  id?: string;
  as?: ElementType;
}) {
  return (
    <Tag
      id={id}
      className={cn(TONE_CLASS[tone], SPACE_CLASS[space], className)}
    >
      {children}
    </Tag>
  );
}

/* ==========================================================================
   Eyebrow — the "/SECTION LABEL" micro-heading. The leading slash is a
   deliberate signature borrowed from the reference design.
   ========================================================================== */

export function Eyebrow({
  children,
  className,
  tone = "brand",
}: {
  children: ReactNode;
  className?: string;
  tone?: "brand" | "muted" | "on-dark";
}) {
  return (
    <p
      className={cn(
        "text-[0.6875rem] font-semibold uppercase tracking-[0.14em]",
        tone === "brand" && "text-brand",
        tone === "muted" && "text-steel",
        tone === "on-dark" && "text-on-dark-muted",
        className,
      )}
    >
      <span aria-hidden className="mr-1 opacity-60">
        /
      </span>
      {children}
    </p>
  );
}

/* ==========================================================================
   SectionHeader — eyebrow + heading + intro, in the two layouts used across
   the site: stacked (centered-ish, left aligned) and split (heading left,
   intro right), which is the reference design's dominant pattern.
   ========================================================================== */

export function SectionHeader({
  eyebrow,
  heading,
  intro,
  action,
  layout = "split",
  tone = "light",
  className,
  headingId,
}: {
  eyebrow?: string;
  heading: string;
  intro?: string;
  action?: ReactNode;
  layout?: "split" | "stacked";
  tone?: "light" | "dark";
  className?: string;
  headingId?: string;
}) {
  const isDark = tone === "dark";

  return (
    <div
      className={cn(
        layout === "split" &&
          "grid gap-6 md:grid-cols-12 md:items-end md:gap-10",
        className,
      )}
    >
      <div className={cn(layout === "split" && "md:col-span-7")}>
        {eyebrow ? (
          <Eyebrow tone={isDark ? "on-dark" : "brand"} className="mb-4">
            {eyebrow}
          </Eyebrow>
        ) : null}
        <h2
          id={headingId}
          className={cn(
            "text-heading text-balance",
            isDark ? "text-on-dark" : "text-ink",
          )}
        >
          {heading}
        </h2>
      </div>

      {intro || action ? (
        <div
          className={cn(
            layout === "split" ? "md:col-span-5" : "mt-5 max-w-2xl",
            "flex flex-col items-start gap-5",
          )}
        >
          {intro ? (
            <p
              className={cn(
                "text-[0.9375rem] leading-relaxed sm:text-base",
                isDark ? "text-on-dark-muted" : "text-slate",
              )}
            >
              {intro}
            </p>
          ) : null}
          {action}
        </div>
      ) : null}
    </div>
  );
}
