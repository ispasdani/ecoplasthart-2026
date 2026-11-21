import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/ui/button";
import { Container, Eyebrow, Section, SectionHeader } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";
import type { MaterialItem } from "@/lib/site/materials";
import type { Messages } from "@/messages/ro";

/**
 * Waste-stream ticker paired with direct links into the commercial
 * `/ce-cumparam/*` material pages so homepage authority flows straight to
 * high-intent buying/drop-off URLs.
 *
 * The marquee track holds the list twice so CSS can loop seamlessly at -50%;
 * the duplicate is `aria-hidden` so screen readers and crawlers see each
 * stream exactly once.
 */
export function WasteStreams({
  dict,
  materials,
  materialsHref,
}: {
  dict: Messages;
  materials: readonly MaterialItem[];
  materialsHref: string;
}) {
  const t = dict.home.streams;
  const items = [...t.items];

  return (
    <Section tone="canvas" space="lg" className="overflow-hidden">
      <Container>
        <Reveal>
          <SectionHeader
            eyebrow={t.eyebrow}
            heading={t.heading}
            intro={t.intro}
            action={
              <ButtonLink
                href={materialsHref}
                variant="secondary"
                size="sm"
                trailingIcon="arrow"
              >
                {dict.materials.labels.allMaterialsCta}
              </ButtonLink>
            }
          />
        </Reveal>
      </Container>

      <Reveal className="relative mt-12">
        {/* Edge fades so the loop reads as continuous. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-canvas to-transparent sm:w-28"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-canvas to-transparent sm:w-28"
        />

        <div className="marquee-track">
          <StreamRow items={items} />
          <StreamRow items={items} duplicate />
        </div>
      </Reveal>

      <Container>
        <Reveal className="mt-10 border-t border-hairline pt-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Eyebrow>{dict.materials.eyebrow}</Eyebrow>
            <div className="flex flex-wrap gap-2.5">
              {materials.map((material) => (
                <Link
                  key={material.slug}
                  href={material.href}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-hairline bg-surface-soft px-4 py-2 text-[0.875rem] font-medium text-ink transition-colors hover:border-brand hover:text-brand"
                >
                  {material.name}
                  <ArrowRight
                    aria-hidden
                    className="size-3.5 text-steel transition-transform group-hover:translate-x-0.5 group-hover:text-brand"
                  />
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

function StreamRow({
  items,
  duplicate = false,
}: {
  items: readonly string[];
  duplicate?: boolean;
}) {
  return (
    <ul
      className="flex shrink-0 items-center gap-3 pr-3"
      aria-hidden={duplicate || undefined}
    >
      {items.map((item) => (
        <li
          key={item}
          className="whitespace-nowrap rounded-full border border-hairline bg-surface-soft px-5 py-2.5 text-[0.875rem] text-charcoal"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
