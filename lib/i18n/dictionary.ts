import "server-only";

import type { Locale } from "./routing";
import type { Messages } from "@/messages/ro";

/**
 * Locale → lazy dictionary loader. Each entry is a dynamic `import()` so the
 * bundler code-splits per language and only the requested locale's strings are
 * ever loaded. These run on the server only (Server Components / Route
 * Handlers), so the strings never reach the client bundle.
 */
const loaders: Record<Locale, () => Promise<Messages>> = {
  ro: () => import("@/messages/ro").then((m) => m.ro),
  en: () => import("@/messages/en").then((m) => m.en),
};

const cache = new Map<Locale, Promise<Messages>>();

export function getDictionary(locale: Locale): Promise<Messages> {
  let entry = cache.get(locale);
  if (!entry) {
    entry = loaders[locale]();
    cache.set(locale, entry);
  }
  return entry;
}
