/**
 * Facts about the company that are derived rather than written down, so they
 * cannot go stale in a dictionary nobody remembers to edit.
 */

/** Trade-registry incorporation date (J20/1943/2004). */
export const FOUNDING_DATE = "2004-12-20";

/**
 * Completed years of trading. The site previously hardcoded this ("19+", then
 * "20+"), which drifts a little further from the truth every December and, more
 * importantly, contradicts `foundingDate` in the structured data. Models and
 * reviewers both notice a site that disagrees with itself.
 */
export function yearsInBusiness(now: Date = new Date()): number {
  const start = new Date(FOUNDING_DATE);
  let years = now.getUTCFullYear() - start.getUTCFullYear();

  const beforeAnniversary =
    now.getUTCMonth() < start.getUTCMonth() ||
    (now.getUTCMonth() === start.getUTCMonth() &&
      now.getUTCDate() < start.getUTCDate());

  if (beforeAnniversary) years -= 1;
  return years;
}

/**
 * Replaces `{years}` in dictionary copy with the live figure. Kept as a token
 * substitution so the surrounding wording stays in `messages/`, where
 * translators expect it, rather than being assembled in a component.
 */
export function withYears(value: string, now?: Date): string {
  return value.replace(/\{years\}/g, String(yearsInBusiness(now)));
}
