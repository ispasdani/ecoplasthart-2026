import { Container, Section, SectionHeader } from "@/components/ui/layout";
import { Reveal, RevealItem, Stagger } from "@/components/ui/reveal";
import type { Messages } from "@/messages/ro";

/** Numbered five-step process rail. */
export function Process({ dict }: { dict: Messages }) {
  const t = dict.home.process;

  return (
    <Section tone="surface" space="lg">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={t.eyebrow}
            heading={t.heading}
            intro={t.intro}
          />
        </Reveal>

        <Stagger className="mt-14 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {t.steps.map((step, i) => (
            <RevealItem key={step.title}>
              <div className="relative h-full">
                {/* Connector line between steps, only on the 5-across row. */}
                {i < t.steps.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute left-12 right-0 top-[1.125rem] hidden h-px bg-hairline-strong xl:block"
                  />
                ) : null}

                <span className="relative grid size-9 place-items-center rounded-full border border-hairline-strong bg-canvas text-[0.8125rem] font-semibold text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 text-[1.0625rem] font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-slate">
                  {step.body}
                </p>
              </div>
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
