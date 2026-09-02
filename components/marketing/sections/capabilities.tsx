import { Factory } from "lucide-react";

import { ArrowLink } from "@/components/ui/button";
import { Container, Section, SectionHeader } from "@/components/ui/layout";
import { MediaTile } from "@/components/ui/media";
import { Reveal, RevealItem, Stagger } from "@/components/ui/reveal";
import { capabilityIcons } from "@/lib/site/icons";
import type { ServiceNavItem } from "@/lib/site/nav";
import type { Messages } from "@/messages/ro";

/**
 * "Capabilities": image panel on the left, a 2×2 grid of feature blocks on the
 * right, each separated by hairlines and ending in an arrow link — the
 * reference design's technology section.
 */
export function Capabilities({
  dict,
  services,
  learnMoreLabel,
}: {
  dict: Messages;
  services: ServiceNavItem[];
  learnMoreLabel: string;
}) {
  const t = dict.home.capabilities;

  // Each capability points at the service page that covers it.
  const targets = [
    "recycling-recovery",
    "recycling-recovery",
    "cable-processing",
    "logistics",
  ] as const;

  const hrefFor = (slug: string) =>
    services.find((s) => s.slug === slug)?.href ?? "#";

  return (
    <Section tone="canvas" space="lg">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={t.eyebrow}
            heading={t.heading}
            intro={t.intro}
          />
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <MediaTile
              icon={Factory}
              variant={2}
              sizes="(min-width: 1024px) 40vw, 100vw"
              overlay={false}
              className="h-[16rem] rounded-2xl sm:h-[22rem] lg:h-full lg:min-h-[26rem]"
            />
          </Reveal>

          <Stagger className="grid gap-x-10 gap-y-9 sm:grid-cols-2 lg:col-span-7">
            {t.items.map((item, i) => {
              const Icon = capabilityIcons[i % capabilityIcons.length];
              return (
                <RevealItem key={item.title}>
                  <div className="flex h-full flex-col border-t border-hairline pt-6">
                    <Icon
                      aria-hidden
                      className="size-5 text-brand"
                      strokeWidth={1.7}
                    />
                    <h3 className="mt-4 text-[1.0625rem] font-semibold text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[0.9375rem] leading-relaxed text-slate">
                      {item.body}
                    </p>
                    <div className="mt-5">
                      <ArrowLink href={hrefFor(targets[i])}>
                        {learnMoreLabel}
                      </ArrowLink>
                    </div>
                  </div>
                </RevealItem>
              );
            })}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
