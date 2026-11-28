import { Check } from "lucide-react";

import { Container, Eyebrow, Section } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";

export type LongformGuideSection = {
  readonly heading: string;
  readonly body: readonly string[];
  readonly points: readonly string[];
};

export type LongformGuideContent = {
  readonly eyebrow: string;
  readonly heading: string;
  readonly lead: string;
  readonly sections: readonly LongformGuideSection[];
};

/**
 * Long-form, crawlable guide copy rendered as plain headings, paragraphs and
 * lists. Used on commercial pages (material pages, the prices page) so they
 * carry the depth of content the head keywords need, without hiding any of it
 * behind tabs or accordions.
 */
export function LongformGuide({
  guide,
  tone = "canvas",
}: {
  guide: LongformGuideContent;
  tone?: "canvas" | "surface";
}) {
  return (
    <Section tone={tone} space="lg">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <Eyebrow className="mb-4">{guide.eyebrow}</Eyebrow>
            <h2 className="text-heading text-ink">{guide.heading}</h2>
            <p className="mt-4 text-[1.0625rem] leading-relaxed text-slate">
              {guide.lead}
            </p>
          </Reveal>

          <div className="mt-12 flex flex-col gap-12">
            {guide.sections.map((section) => (
              <Reveal key={section.heading}>
                <section>
                  <h3 className="text-xl font-semibold text-ink sm:text-[1.375rem]">
                    {section.heading}
                  </h3>
                  {section.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="mt-4 text-[0.9375rem] leading-relaxed text-slate sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.points.length > 0 ? (
                    <ul className="mt-5 flex flex-col gap-3">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-start gap-2.5 text-[0.9375rem] leading-relaxed text-charcoal"
                        >
                          <Check
                            aria-hidden
                            className="mt-1 size-4 shrink-0 text-brand"
                            strokeWidth={2.4}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </section>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
