import Image from "next/image";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/cn";

/**
 * Image slot with a designed fallback.
 *
 * The company's own photography isn't in the repo yet, so every tile renders a
 * deliberate abstract graphic (layered brand gradients + a diagonal weave + a
 * ghosted icon) instead of a grey box. Pass `src` once real photos exist and
 * the tile swaps to `next/image` with no other changes; pass `video` for a
 * silent, looping background clip that layers on top of that same graphic, so
 * the tile still reads as designed while the file loads or if it can't play.
 */

const ART = [
  // deep forest → brand green
  "bg-[radial-gradient(120%_120%_at_15%_0%,#2f7d4f_0%,#1c4a30_45%,#101c15_100%)]",
  // sage → slate
  "bg-[radial-gradient(120%_120%_at_85%_10%,#8c9c83_0%,#4f6b52_50%,#16241a_100%)]",
  // steel green, cooler
  "bg-[radial-gradient(110%_130%_at_20%_100%,#4f9a6c_0%,#24513a_55%,#0f1d16_100%)]",
  // near-black with a green rim
  "bg-[radial-gradient(130%_110%_at_100%_0%,#3d6b4c_0%,#1a2c20_50%,#0d150f_100%)]",
] as const;

const WEAVE =
  "repeating-linear-gradient(135deg,rgba(255,255,255,0.05)_0px,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_9px)";

export function MediaTile({
  src,
  alt = "",
  video,
  icon: Icon,
  variant = 0,
  className,
  imageClassName,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  children,
  overlay = true,
}: {
  src?: string;
  alt?: string;
  /** Looping background clip, e.g. `"/videos/trucks.mov"`. Ignored when `src` is set. */
  video?: string;
  icon?: LucideIcon;
  /** Picks one of four gradient treatments so adjacent tiles differ. */
  variant?: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  /** Overlaid content, e.g. a title block pinned to the bottom. */
  children?: React.ReactNode;
  overlay?: boolean;
}) {
  const art = ART[variant % ART.length];

  return (
    <div
      className={cn(
        "group relative isolate overflow-hidden rounded-xl bg-brand-deep",
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(
            "object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]",
            imageClassName,
          )}
        />
      ) : (
        <div aria-hidden className={cn("absolute inset-0", art)}>
          <div
            className="absolute inset-0 opacity-70"
            style={{ backgroundImage: WEAVE }}
          />
          {Icon ? (
            <Icon
              className="absolute -bottom-6 -right-6 size-48 text-white/[0.07] transition-transform duration-700 ease-out group-hover:scale-105 sm:size-64"
              strokeWidth={1}
            />
          ) : null}
        </div>
      )}

      {!src && video ? (
        <video
          /* No hover scale: the footage already moves, and zooming it on top of that reads as a glitch. */
          className="absolute inset-0 size-full object-cover motion-reduce:hidden"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden
          tabIndex={-1}
        >
          <source src={video} />
        </video>
      ) : null}

      {/*
        Real media runs bright at the top (sky, sky-lit yards), which would
        swallow the white corner badge tiles overlay there. The gradient art is
        dark enough not to need this, and `overlay` gates it so purely
        decorative tiles — nothing to protect — show the media clean.
      */}
      {overlay && (src || video) ? (
        <div
          aria-hidden
          className={cn(
            "absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/50 to-transparent",
            // A video tile falls back to that dark art under reduced motion, so
            // its scrim goes too. A still is always on screen and always needs it.
            !src && "motion-reduce:hidden",
          )}
        />
      ) : null}

      {overlay ? (
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/75 via-black/30 to-transparent"
        />
      ) : null}

      {children ? <div className="relative z-10 h-full">{children}</div> : null}
    </div>
  );
}

/**
 * Title + description block pinned to the bottom of a `MediaTile`, matching the
 * reference design's image cards.
 */
export function MediaCaption({
  title,
  body,
  size = "md",
}: {
  title: string;
  body?: string;
  size?: "sm" | "md";
}) {
  return (
    <div
      className={cn(
        "flex h-full flex-col justify-end",
        size === "md" ? "p-5 sm:p-6" : "p-4 sm:p-5",
      )}
    >
      <h3
        className={cn(
          "font-semibold text-white",
          size === "md" ? "text-lg sm:text-xl" : "text-[0.9375rem] sm:text-base",
        )}
      >
        {title}
      </h3>
      {body ? (
        <p
          className={cn(
            "mt-1.5 max-w-md text-white/70",
            size === "md" ? "text-sm" : "text-[0.8125rem] leading-snug",
          )}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
