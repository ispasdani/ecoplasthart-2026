import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/cn";

/* ==========================================================================
   Buttons — always pill-shaped (`rounded-full`), per design.md.
   Primary is ink (near-black) to match the reference design; brand green is
   reserved for accents, links and iconography.
   ========================================================================== */

const VARIANT = {
  primary:
    "bg-ink text-on-dark hover:bg-charcoal active:bg-charcoal shadow-e1",
  secondary:
    "bg-transparent text-ink border border-hairline-strong hover:border-ink hover:bg-canvas",
  brand: "bg-brand text-white hover:bg-brand-dark active:bg-brand-dark",
  onDark: "bg-canvas text-ink hover:bg-on-dark",
  onDarkOutline:
    "bg-transparent text-on-dark border border-hairline-dark hover:border-on-dark hover:bg-white/5",
  ghost: "bg-transparent text-ink hover:bg-surface",
} as const;

const SIZE = {
  sm: "h-9 px-4 text-[0.8125rem]",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-[0.9375rem] sm:h-[3.25rem] sm:px-8",
} as const;

const BASE =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-full font-medium " +
  "transition-colors duration-200 ease-out whitespace-nowrap " +
  "disabled:pointer-events-none disabled:opacity-50";

type ButtonVariant = keyof typeof VARIANT;
type ButtonSize = keyof typeof SIZE;

type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  /** Appends a trailing arrow glyph. */
  trailingIcon?: "arrow" | "arrow-up-right" | "none";
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  trailingIcon = "none",
  ...rest
}: ButtonBaseProps & ComponentProps<"button">) {
  return (
    <button
      className={cn(BASE, VARIANT[variant], SIZE[size], className)}
      {...rest}
    >
      {children}
      <TrailingIcon kind={trailingIcon} />
    </button>
  );
}

export function ButtonLink({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  trailingIcon = "none",
  external = false,
  ...rest
}: ButtonBaseProps & {
  href: string;
  external?: boolean;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">) {
  const classes = cn(BASE, VARIANT[variant], SIZE[size], className);

  // `mailto:`/`tel:`/off-site links bypass the client router.
  if (external || /^(mailto:|tel:|https?:)/.test(href)) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
        <TrailingIcon kind={trailingIcon} />
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
      <TrailingIcon kind={trailingIcon} />
    </Link>
  );
}

function TrailingIcon({ kind }: { kind: ButtonBaseProps["trailingIcon"] }) {
  if (kind === "arrow") {
    return <ArrowRight aria-hidden className="size-4 shrink-0" />;
  }
  if (kind === "arrow-up-right") {
    return <ArrowUpRight aria-hidden className="size-4 shrink-0" />;
  }
  return null;
}

/* ==========================================================================
   ArrowLink — the "Learn More →" pattern with a circled arrow that nudges on
   hover. Used across feature rows and cards.
   ========================================================================== */

export function ArrowLink({
  href,
  children,
  tone = "light",
  className,
}: {
  href: string;
  children: ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group/arrow inline-flex items-center gap-2.5 text-sm font-medium transition-colors",
        tone === "dark"
          ? "text-on-dark hover:text-white"
          : "text-ink hover:text-brand",
        className,
      )}
    >
      <span>{children}</span>
      <span
        aria-hidden
        className={cn(
          "grid size-7 place-items-center rounded-full border transition-all duration-200 ease-out",
          "group-hover/arrow:translate-x-0.5",
          tone === "dark"
            ? "border-hairline-dark group-hover/arrow:border-on-dark"
            : "border-hairline-strong group-hover/arrow:border-brand group-hover/arrow:bg-brand group-hover/arrow:text-white",
        )}
      >
        <ArrowRight className="size-3.5" />
      </span>
    </Link>
  );
}

/* ==========================================================================
   IconCircle — filled disc holding a Lucide icon. Inverts on dark cards.
   ========================================================================== */

export function IconCircle({
  children,
  tone = "dark",
  className,
}: {
  children: ReactNode;
  tone?: "dark" | "light" | "brand";
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={cn(
        "grid size-11 shrink-0 place-items-center rounded-full",
        tone === "dark" && "bg-ink text-on-dark",
        tone === "light" && "bg-canvas text-ink",
        tone === "brand" && "bg-brand text-white",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ==========================================================================
   Badge / Tag — pill status chips and waste-stream tags.
   ========================================================================== */

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: ReactNode;
  tone?: "neutral" | "brand" | "on-dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[0.75rem] font-medium",
        tone === "neutral" && "border border-hairline bg-canvas text-slate",
        tone === "brand" && "bg-brand-soft text-brand-dark",
        tone === "on-dark" && "border border-hairline-dark text-on-dark-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
