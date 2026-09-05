import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { Container, Section } from "@/components/ui/layout";
import { Reveal } from "@/components/ui/reveal";

/**
 * Rendering primitives for the two legal pages (privacy, cookies).
 *
 * The content itself lives entirely in `messages/*.ts` so both locales stay in
 * lockstep; this file only decides how it looks. Each page composes its own
 * blocks in order and passes the matching table of contents, rather than the
 * component inferring one from `children` — the cookie page interleaves a
 * table between prose sections, and inference would silently drop it.
 */

export type LegalSection = {
  heading: string;
  paragraphs: readonly string[];
  bullets: readonly string[];
  footnote: string;
};

/**
 * Stable anchor id for a heading. Romanian headings carry diacritics, so the
 * string is decomposed to NFD and the combining marks stripped before
 * slugifying — `ș` and `ț` (U+0219/U+021B) decompose to a base letter plus a
 * comma-below mark, so this handles them along with `ă`, `â` and `î`.
 */
export function sectionId(heading: string): string {
  const slug = heading
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return slug || "sectiune";
}

/* ==========================================================================
   Shell — the "last updated" line, the table of contents and the prose column.
   ========================================================================== */

export function LegalDocument({
  updatedLabel,
  updatedDate,
  tocHeading,
  toc,
  children,
}: {
  updatedLabel: string;
  updatedDate: string;
  tocHeading: string;
  toc: readonly string[];
  children: ReactNode;
}) {
  return (
    <Section tone="canvas" space="md">
      <Container size="narrow">
        <Reveal>
          <p className="text-[0.8125rem] text-steel">
            {updatedLabel}:{" "}
            <time className="font-medium text-slate">{updatedDate}</time>
          </p>
        </Reveal>

        <Reveal className="mt-8">
          <nav
            aria-labelledby="legal-toc"
            className="rounded-xl border border-hairline bg-surface-soft p-6"
          >
            <h2
              id="legal-toc"
              className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-ink"
            >
              {tocHeading}
            </h2>
            <ol className="mt-4 space-y-2">
              {toc.map((heading, i) => (
                <li key={heading} className="flex gap-3 text-[0.9375rem]">
                  <span aria-hidden className="tabular-nums text-muted">
                    {i + 1}.
                  </span>
                  <a
                    href={`#${sectionId(heading)}`}
                    className="text-slate underline decoration-hairline underline-offset-4 transition-colors hover:text-brand hover:decoration-brand"
                  >
                    {heading}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </Reveal>

        <div className="mt-12 space-y-12">{children}</div>
      </Container>
    </Section>
  );
}

/* ==========================================================================
   One prose section.
   ========================================================================== */

export function LegalSectionBlock({ section }: { section: LegalSection }) {
  const id = sectionId(section.heading);

  return (
    <Reveal>
      {/* `scroll-mt` keeps the heading clear of the sticky header when the
          table of contents jumps to it. */}
      <section aria-labelledby={id} className="scroll-mt-28">
        <h2
          id={id}
          className="text-[1.375rem] font-semibold leading-snug text-ink"
        >
          {section.heading}
        </h2>

        <div className="mt-4 space-y-4">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="leading-relaxed text-slate">
              {paragraph}
            </p>
          ))}
        </div>

        {section.bullets.length ? (
          <ul className="mt-5 space-y-3">
            {section.bullets.map((bullet) => (
              <li
                key={bullet}
                className="relative pl-6 leading-relaxed text-slate"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-[0.65em] size-1.5 rounded-full bg-brand"
                />
                {bullet}
              </li>
            ))}
          </ul>
        ) : null}

        {section.footnote ? (
          <p className="mt-5 border-l-2 border-hairline pl-4 text-[0.875rem] leading-relaxed text-steel">
            {section.footnote}
          </p>
        ) : null}
      </section>
    </Reveal>
  );
}

/* ==========================================================================
   Definition list — the controller identity block on the privacy page.
   ========================================================================== */

export function LegalIdentity({
  heading,
  rows,
}: {
  heading: string;
  rows: readonly { label: string; value: ReactNode }[];
}) {
  const id = sectionId(heading);

  return (
    <Reveal>
      <section aria-labelledby={id} className="scroll-mt-28">
        <h2
          id={id}
          className="text-[1.375rem] font-semibold leading-snug text-ink"
        >
          {heading}
        </h2>

        <dl className="mt-5 divide-y divide-hairline overflow-hidden rounded-xl border border-hairline bg-surface-soft">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 px-5 py-4 sm:grid-cols-3 sm:gap-4"
            >
              <dt className="text-[0.8125rem] uppercase tracking-wider text-steel">
                {row.label}
              </dt>
              <dd className="text-[0.9375rem] text-ink sm:col-span-2">
                {row.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </Reveal>
  );
}

/* ==========================================================================
   Cookie inventory table. Scrolls inside its own container rather than
   widening the page — five columns do not fit a phone.
   ========================================================================== */

export function LegalTable({
  heading,
  intro,
  note,
  caption,
  headings,
  rows,
}: {
  heading: string;
  intro: string;
  note: string;
  caption: string;
  headings: readonly string[];
  rows: readonly (readonly string[])[];
}) {
  const id = sectionId(heading);

  return (
    <Reveal>
      <section aria-labelledby={id} className="scroll-mt-28">
        <h2
          id={id}
          className="text-[1.375rem] font-semibold leading-snug text-ink"
        >
          {heading}
        </h2>

        <p className="mt-4 leading-relaxed text-slate">{intro}</p>

        <div className="mt-6 overflow-x-auto rounded-xl border border-hairline">
          <table className="w-full min-w-[44rem] border-collapse text-left text-[0.875rem]">
            <caption className="sr-only">{caption}</caption>
            <thead>
              <tr className="bg-surface-soft">
                {headings.map((label) => (
                  <th
                    key={label}
                    scope="col"
                    className="whitespace-nowrap border-b border-hairline px-4 py-3 text-[0.75rem] font-semibold uppercase tracking-wider text-steel"
                  >
                    {label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr
                  key={row[0]}
                  className="border-b border-hairline last:border-0"
                >
                  {row.map((cell, i) => (
                    <td
                      key={headings[i]}
                      className={
                        i === 0
                          ? "px-4 py-3 align-top font-mono text-[0.8125rem] text-ink"
                          : "px-4 py-3 align-top text-slate"
                      }
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-5 border-l-2 border-hairline pl-4 text-[0.875rem] leading-relaxed text-steel">
          {note}
        </p>
      </section>
    </Reveal>
  );
}

/* ==========================================================================
   Cross-link between the two legal documents.
   ========================================================================== */

export function LegalCallout({
  text,
  cta,
  href,
}: {
  text: string;
  cta: string;
  href: string;
}) {
  return (
    <Reveal>
      <div className="rounded-xl border border-hairline bg-brand-soft p-6">
        <p className="leading-relaxed text-slate">{text}</p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-2 text-[0.9375rem] font-medium text-brand transition-colors hover:text-ink"
        >
          {cta}
          <ArrowRight aria-hidden className="size-4" />
        </Link>
      </div>
    </Reveal>
  );
}
