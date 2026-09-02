import { Phone } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";
import type { Messages } from "@/messages/ro";

/**
 * Dark closing CTA (design.md `cta-banner-dark`), used at the foot of every
 * marketing page.
 */
export function CtaBand({
  dict,
  contactHref,
  eyebrow,
}: {
  dict: Messages;
  contactHref: string;
  eyebrow?: string;
}) {
  const t = dict.home.cta;
  const phone = dict.company.phonePrimary;

  return (
    <Section tone="canvas" space="md">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-brand-deep px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_120%_at_85%_0%,rgba(79,154,108,0.28)_0%,transparent_60%)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(135deg,rgba(255,255,255,0.035) 0px,rgba(255,255,255,0.035) 1px,transparent 1px,transparent 10px)",
              }}
            />

            <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7">
                {eyebrow ? (
                  <Eyebrow tone="on-dark" className="mb-4">
                    {eyebrow}
                  </Eyebrow>
                ) : null}
                <h2 className="max-w-[18ch] text-display-sm text-balance text-on-dark">
                  {t.heading}
                </h2>
                <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-on-dark-muted">
                  {t.body}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
                <ButtonLink
                  href={contactHref}
                  size="lg"
                  variant="onDark"
                  trailingIcon="arrow"
                >
                  {t.primary}
                </ButtonLink>
                <ButtonLink
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  size="lg"
                  variant="onDarkOutline"
                >
                  <Phone aria-hidden className="size-4" />
                  {t.secondary}
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
