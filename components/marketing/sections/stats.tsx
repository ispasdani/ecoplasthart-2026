import { Container, Section } from "@/components/ui/layout";
import { RevealItem, Stagger } from "@/components/ui/reveal";
import type { Messages } from "@/messages/ro";

/** Four-up numeric proof band directly under the hero. */
export function StatsBand({ dict }: { dict: Messages }) {
  return (
    <Section tone="canvas" space="none" className="border-y border-hairline">
      <Container>
        <Stagger className="grid grid-cols-2 gap-x-6 gap-y-9 py-12 lg:grid-cols-4 lg:py-14">
          {dict.home.stats.map((stat) => (
            <RevealItem key={stat.label}>
              <p className="text-[2.25rem] font-semibold leading-none tracking-tight text-brand sm:text-[2.75rem]">
                {stat.value}
              </p>
              <p className="mt-2.5 text-sm text-slate">{stat.label}</p>
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
