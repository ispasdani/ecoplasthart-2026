import Link from "next/link";

import { cn } from "@/lib/cn";

/**
 * Wordmark. The mark is a recycling-loop triangle drawn as an inline SVG so it
 * inherits `currentColor` and needs no asset request.
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
        <LoopMark className="size-[1.15rem]" />
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

function LoopMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 3.5 15 8.6h-6l1.6-2.7" />
      <path d="M19.6 16.4 16.6 11.3l3-.1-1.5 2.6" />
      <path d="M4.4 16.4h6l-1.5 2.6" />
      <path d="M9 8.6 5.6 14.3a1.6 1.6 0 0 0 1.4 2.4" />
      <path d="M15 8.6l3.4 5.7a1.6 1.6 0 0 1-1.4 2.4h-3.6" />
      <path d="M12 3.5a1.6 1.6 0 0 0-1.4.8L9 7.1" />
    </svg>
  );
}
