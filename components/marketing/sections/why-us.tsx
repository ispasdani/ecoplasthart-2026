import { Container, Section, SectionHeader } from "@/components/ui/layout";
import { RevealItem, Reveal, Stagger } from "@/components/ui/reveal";
import { whyIcons } from "@/lib/site/icons";
import type { Messages } from "@/messages/ro";

/**
 * "Why choose us": split header, then a four-column row of icon + title + body
 * separated by hairlines — the reference design's value-prop strip.
 */
export function WhyUs({ dict }: { dict: Messages }) {
  const t = dict.home.why;

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

        <Stagger className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
          {t.items.map((item, i) => {
            const Icon = whyIcons[i % whyIcons.length];
            return (
              <RevealItem key={item.title}>
                <div className="h-full border-t border-hairline pt-6">
                  <Icon
                    aria-hidden
                    className="size-6 text-brand"
                    strokeWidth={1.6}
                  />
                  <h3 className="mt-5 text-[1.0625rem] font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">
                    {item.body}
                  </p>
                </div>
              </RevealItem>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
