import Link from "next/link";
import { Recycle } from "lucide-react";

import { cn } from "@/lib/cn";

/**
 * Wordmark. The mark is lucide's recycling loop, so it inherits `currentColor`
 * and needs no asset request.
 */
export function Logo({
  href,
  tone = "light",
  className,
  label = "Ecoplast Hart",
}: {
  href: string;
  tone?: "light" | "dark";
  className?: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={cn(
        "group inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap font-semibold tracking-tight",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "grid size-9 place-items-center rounded-lg transition-colors",
          tone === "dark" ? "bg-brand text-white" : "bg-brand text-white",
        )}
      >
        <Recycle className="size-[1.15rem]" strokeWidth={2} />
      </span>
      <span
        className={cn(
          "text-[1.0625rem] leading-none",
          tone === "dark" ? "text-on-dark" : "text-ink",
        )}
      >
        Ecoplast<span className="text-brand"> Hart</span>
      </span>
    </Link>
  );
}
