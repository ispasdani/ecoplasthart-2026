import Link from "next/link";
import { Lock } from "lucide-react";

import { cn } from "@/lib/cn";

/**
 * Blurred rate capsule paired with a clear contact action.
 *
 * Uses non-numeric bullet masks (`aria-hidden`) rather than real prices in the
 * DOM so no stale or fabricated digits are ever exposed to DevTools or search
 * engines, while giving visitors an unmistakable visual cue to contact Ecoplast
 * Hart for today's live per-kg rate.
 */
export function BlurredPriceBadge({
  maskText,
  ctaLabel,
  href,
  ariaLabel,
  className,
}: {
  maskText: string;
  ctaLabel: string;
  href?: string;
  ariaLabel?: string;
  className?: string;
}) {
  const inner = (
    <>
      <span
        aria-hidden="true"
        className="select-none font-semibold tracking-tight text-ink/70 blur-[5px]"
      >
        {maskText}
      </span>
      <span className="inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-0.5 text-[0.75rem] font-semibold text-white transition-colors group-hover:bg-brand-dark">
        <Lock aria-hidden className="size-3" strokeWidth={2.2} />
        {ctaLabel}
      </span>
    </>
  );

  const baseClass = cn(
    "group inline-flex items-center gap-2.5 rounded-full border border-hairline bg-surface-soft py-1 pl-3.5 pr-1.5 transition-all duration-200",
    href && "hover:border-brand hover:bg-canvas hover:shadow-e1",
    className,
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={baseClass}>
        {inner}
      </Link>
    );
  }

  return <span className={baseClass}>{inner}</span>;
}
