import { Container, Section } from "@/components/ui/layout";
import { RevealItem, Stagger } from "@/components/ui/reveal";
import { withYears } from "@/lib/site/company";
import type { Messages } from "@/messages/ro";

/**
 * Four-up numeric proof band directly under the hero.
 *
 * The columns are separated by hairline rules rather than whitespace alone: at
 * 1280px four evenly-spread numbers otherwise read as unrelated fragments
 * floating in the row. Every item carries a leading rule and the first of each
 * row drops it; the last of each row adds a trailing one, so the band is
 * closed on both edges instead of trailing off after the final stat.
 *
 * The "first/last of row" rules are scoped to disjoint breakpoints (`max-lg`
 * for the two-up layout, `lg` for the four-up one) — `nth-child(odd)` and
 * `nth-child(4n+1)` have identical specificity, so overlapping them would
 * leave which rule wins up to Tailwind's class ordering.
 */
export function StatsBand({ dict }: { dict: Messages }) {
  return (
    <Section tone="canvas" space="none" className="border-y border-hairline">
      <Container>
        <Stagger
          className={[
            "grid grid-cols-2 gap-y-10 py-14 lg:grid-cols-4 lg:gap-y-0 lg:py-16",
            "[&>*]:border-l [&>*]:border-hairline [&>*]:pl-6 lg:[&>*]:pl-8",
            "max-lg:[&>*:nth-child(odd)]:border-l-0 max-lg:[&>*:nth-child(odd)]:pl-0",
            "lg:[&>*:nth-child(4n+1)]:border-l-0 lg:[&>*:nth-child(4n+1)]:pl-0",
            "max-lg:[&>*:nth-child(even)]:border-r lg:[&>*:nth-child(4n)]:border-r",
          ].join(" ")}
        >
          {dict.home.stats.map((stat) => (
            <RevealItem key={stat.label}>
              <p className="text-[2.5rem] font-semibold leading-none tracking-tight text-brand tabular-nums sm:text-[3rem]">
                {withYears(stat.value)}
              </p>
              <p className="mt-3 text-sm leading-snug text-slate">{stat.label}</p>
            </RevealItem>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
