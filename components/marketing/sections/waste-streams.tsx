import { Container, Section, SectionHeader } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";
import type { Messages } from "@/messages/ro";

/**
 * Waste-stream ticker. The track holds the list twice so the CSS marquee can
 * loop seamlessly at -50%; the duplicate is `aria-hidden` so screen readers
 * and crawlers see each stream exactly once.
 */
export function WasteStreams({ dict }: { dict: Messages }) {
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
