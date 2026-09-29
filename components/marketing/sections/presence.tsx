import { Container, Section, SectionHeader } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";
import EuropeMap from "@/components/svgs/EuropeMap";
import type { Messages } from "@/messages/ro";

export function Presence({ dict }: { dict: Messages }) {
  const t = dict.about.presence;

  return (
    <Section tone="canvas" space="lg">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-center">
          <Reveal className="lg:col-span-7">
            <h2 className="text-heading text-balance text-ink">
              {t.heading}
            </h2>
            <p className="mt-6 text-[1.0625rem] font-medium leading-relaxed text-ink">
              {t.intro}
            </p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-slate">
              {t.info}
            </p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed text-slate">
              {t.info2}
            </p>
          </Reveal>

          <Reveal className="lg:col-span-5 flex justify-center">
            <EuropeMap labels={dict.common.countries} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
