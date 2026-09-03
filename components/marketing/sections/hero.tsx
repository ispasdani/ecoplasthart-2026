import { MapPin } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container, Eyebrow } from "@/components/ui/layout";
import { FadeIn } from "@/components/ui/reveal";
import type { Messages } from "@/messages/ro";

/**
 * Hero: oversized headline on the left, supporting copy + CTAs on the right,
 * over a full-bleed video band that fills the rest of the first screen.
 *
 * The section is sized to the viewport minus the sticky header (h-16, lg:4.5rem)
 * so the video's bottom edge lands exactly at the fold rather than 64px past it.
 * `svh` rather than `vh` — on mobile browsers `vh` measures the *largest*
 * viewport, so the band would sit under the collapsing URL bar on first paint.
 */
export function Hero({
  dict,
  ctaHref,
  servicesHref,
}: {
  dict: Messages;
  ctaHref: string;
  servicesHref: string;
}) {
  const t = dict.home.hero;

  return (
    <section className="relative flex min-h-[calc(100svh-4rem)] flex-col bg-canvas lg:min-h-[calc(100svh-4.5rem)]">
      <Container>
        <div className="grid gap-8 pb-10 pt-8 sm:pt-10 lg:grid-cols-12 lg:gap-12 lg:pb-12 lg:pt-12">
          <div className="lg:col-span-7">
            <FadeIn>
              <Eyebrow>{t.eyebrow}</Eyebrow>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="mt-4 max-w-[15ch] text-display text-balance text-ink">
                {t.title}
              </h1>
            </FadeIn>
          </div>

          <div className="flex flex-col justify-end lg:col-span-5">
            <FadeIn delay={0.16}>
              <p className="max-w-lg text-[1.0625rem] leading-relaxed text-slate">
                {t.subtitle}
              </p>
            </FadeIn>
            <FadeIn delay={0.24}>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href={ctaHref} size="lg" trailingIcon="arrow">
                  {t.ctaPrimary}
                </ButtonLink>
                <ButtonLink href={servicesHref} size="lg" variant="secondary">
                  {t.ctaSecondary}
                </ButtonLink>
              </div>
            </FadeIn>
          </div>
        </div>
      </Container>

      {/*
        Full-bleed video band. `flex-1` lets it absorb whatever height the copy
        leaves over, with a floor so it never collapses on short landscape
        viewports. `bg-brand-deep` sits underneath so a still-loading (or
        unsupported) video reads as a deliberate dark band, not a white gap.
      */}
      <FadeIn delay={0.3} className="relative min-h-[16rem] flex-1">
        <div className="absolute inset-0 overflow-hidden bg-brand-deep">
          <video
            className="size-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden
            tabIndex={-1}
          >
            <source src="/videos/herobox-video.mov" />
          </video>

          <div
            aria-hidden
            className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/25 to-transparent"
          />

          <Container className="absolute inset-x-0 bottom-0">
            <div className="pb-5 sm:pb-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3.5 py-1.5 text-[0.8125rem] font-medium text-white backdrop-blur-sm">
                <MapPin aria-hidden className="size-3.5" />
                {t.imageCaption}
              </span>
            </div>
          </Container>
        </div>
      </FadeIn>
    </section>
  );
}
