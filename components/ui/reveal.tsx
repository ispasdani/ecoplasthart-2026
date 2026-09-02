import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/cn";

/**
 * Scroll-reveal primitives — CSS only, no client component.
 *
 * These deliberately avoid a JS animation library. A motion library has to
 * server-render the element at `opacity: 0` and rely on hydration to reveal it,
 * which means a slow or failed script leaves the copy invisible — unacceptable
 * on a site whose whole point is being indexed and read. The CSS in
 * `globals.css` instead animates on a scroll-progress timeline where the
 * browser supports it, and renders plain visible content everywhere else.
 *
 * Keeping these as Server Components also keeps the marketing pages free of
 * client JS entirely.
 */

/** A single element that rises into view as it is scrolled into the viewport. */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  /** Stagger step (unitless index), when siblings aren't inside a `Stagger`. */
  delay?: number;
}) {
  return (
    <div
      className={cn("reveal", className)}
      style={delay ? ({ "--reveal-delay": delay } as CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}

/**
 * Cascades its direct children. Pair with `RevealItem` — the `.stagger` class
 * assigns each child an increasing `--reveal-delay` via `:nth-child`, so no
 * index has to be threaded through props.
 */
export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("stagger", className)}>{children}</div>;
}

export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={cn("reveal", className)}>{children}</div>;
}

/**
 * Entrance for above-the-fold content. Animates on load rather than on scroll,
 * since the hero is already in view on first paint.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  /** Seconds. */
  delay?: number;
}) {
  return (
    <div
      className={cn("rise", className)}
      style={
        delay
          ? ({ "--rise-delay": `${delay}s` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </div>
  );
}
