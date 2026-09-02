import { Container, Section, SectionHeader } from "@/components/ui/layout";
import { IconCircle } from "@/components/ui/button";
import { Reveal, RevealItem, Stagger } from "@/components/ui/reveal";
import { cn } from "@/lib/cn";
import { industryIcons } from "@/lib/site/icons";
import type { Messages } from "@/messages/ro";

/**
 * "Industries we serve": split header over a row of icon cards, with the
 * second card inverted to dark — the accent-card trick from the reference
 * design. Scroll-snaps horizontally on small screens rather than stacking into
 * a very tall column.
 */
export function Industries({ dict }: { dict: Messages }) {
  const t = dict.home.industries;

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
      </Container>

      <Stagger
        className={cn(
          "mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:px-6",
          "lg:mx-auto lg:grid lg:max-w-[80rem] lg:snap-none lg:grid-cols-3 lg:overflow-visible lg:px-8 lg:pb-0",
          "xl:grid-cols-6",
          "[scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
        )}
      >
        {t.items.map((item, i) => {
          const Icon = industryIcons[i % industryIcons.length];
          const inverted = i === 1;

          return (
            <RevealItem
              key={item.title}
              className="w-[15rem] shrink-0 snap-start lg:w-auto"
            >
              <article
                className={cn(
                  "flex h-full flex-col rounded-xl border p-5 transition-shadow duration-200 sm:p-6",
                  inverted
                    ? "border-transparent bg-ink text-on-dark"
                    : "border-hairline bg-canvas hover:shadow-e2",
                )}
              >
                <IconCircle tone={inverted ? "light" : "dark"}>
                  <Icon aria-hidden className="size-[1.15rem]" strokeWidth={1.7} />
                </IconCircle>

                <h3
                  className={cn(
                    "mt-8 text-[0.9375rem] font-semibold",
                    inverted ? "text-on-dark" : "text-ink",
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "mt-2 text-[0.8125rem] leading-relaxed",
                    inverted ? "text-on-dark-muted" : "text-slate",
                  )}
                >
                  {item.body}
                </p>
              </article>
            </RevealItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
