import { MapPin, Truck } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container, Eyebrow } from "@/components/ui/layout";
import { MediaTile } from "@/components/ui/media";
import { FadeIn } from "@/components/ui/reveal";
import type { Messages } from "@/messages/ro";

/**
 * Hero: oversized headline on the left, supporting copy + CTAs on the right,
 * with a full-width image band beneath — the reference design's opening move.
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
    <section className="relative overflow-hidden bg-canvas">
      {/* Soft brand wash behind the headline. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(70%_100%_at_20%_0%,var(--color-brand-soft)_0%,transparent_70%)]"
      />

      <Container className="relative">
        <div className="grid gap-8 pb-12 pt-14 sm:pt-20 lg:grid-cols-12 lg:gap-12 lg:pb-16 lg:pt-24">
          <div className="lg:col-span-7">
            <FadeIn>
              <Eyebrow>{t.eyebrow}</Eyebrow>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 className="mt-5 max-w-[15ch] text-display text-balance text-ink">
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

      <Container>
        <FadeIn delay={0.3}>
          <MediaTile
            icon={Truck}
            variant={0}
            priority
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="h-[18rem] rounded-2xl sm:h-[24rem] lg:h-[30rem]"
          >
            <div className="flex h-full items-end p-5 sm:p-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3.5 py-1.5 text-[0.8125rem] font-medium text-white backdrop-blur-sm">
                <MapPin aria-hidden className="size-3.5" />
                {t.imageCaption}
              </span>
            </div>
          </MediaTile>
        </FadeIn>
      </Container>
    </section>
  );
}
