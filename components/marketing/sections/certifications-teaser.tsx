import { ShieldCheck } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container, Eyebrow, Section } from "@/components/ui/layout";
import { Reveal, RevealItem, Stagger } from "@/components/ui/reveal";
import type { Messages } from "@/messages/ro";

/** ISO strip on the homepage, linking through to the documents page. */
export function CertificationsTeaser({
  dict,
  href,
}: {
  dict: Messages;
  href: string;
}) {
  const t = dict.home.certifications;

  return (
    <Section tone="surface" space="md">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow className="mb-4">{t.eyebrow}</Eyebrow>
            <h2 className="text-heading text-balance text-ink">{t.heading}</h2>
            <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-slate">
              {t.intro}
            </p>
            <div className="mt-7">
              <ButtonLink href={href} variant="secondary" trailingIcon="arrow">
                {t.cta}
              </ButtonLink>
            </div>
          </Reveal>

          <Stagger className="grid gap-3 sm:grid-cols-3 lg:col-span-7">
            {dict.about.certifications.items.map((cert) => (
              <RevealItem key={cert.code}>
                <div className="flex h-full flex-col rounded-xl border border-hairline bg-canvas p-5">
                  <ShieldCheck
                    aria-hidden
                    className="size-5 text-brand"
                    strokeWidth={1.7}
                  />
                  <p className="mt-5 text-[0.9375rem] font-semibold text-ink">
                    {cert.code}
                  </p>
                  <p className="mt-1 text-[0.8125rem] leading-snug text-slate">
                    {cert.label}
                  </p>
                </div>
              </RevealItem>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
