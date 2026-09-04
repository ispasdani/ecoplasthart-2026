/**
 * Categories for the documents published on `/certificari`.
 *
 * `files.category` stores one of these **keys**, not a display label, so the
 * public page can render each group in the visitor's language
 * (`dict.certifications.categories`) while the dashboard stays Romanian.
 * Anything else in the column — a value typed by hand, or a row created before
 * the keys existed — is displayed verbatim on both sides.
 */
export const DOCUMENT_CATEGORIES = [
  { key: "iso", label: "Certificate ISO" },
  { key: "environment", label: "Autorizații de mediu" },
  { key: "permits", label: "Licențe și avize" },
  { key: "company", label: "Documente companie" },
  { key: "transport", label: "Transport și trasabilitate" },
] as const;

export type DocumentCategoryKey = (typeof DOCUMENT_CATEGORIES)[number]["key"];

const LABELS: Record<string, string> = Object.fromEntries(
  DOCUMENT_CATEGORIES.map((category) => [category.key, category.label]),
);

/** Romanian label for a stored category value (dashboard side). */
export function documentCategoryLabel(category: string): string {
  return LABELS[category] ?? category;
}

/** Localized label for a stored category value (public site side). */
export function localizedCategoryLabel(
  category: string,
  labels: Record<string, string>,
): string {
  return labels[category] ?? category;
}
