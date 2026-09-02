import Link from "next/link";

import { Container } from "@/components/ui/layout";

/**
 * 404 inside the locale tree. Renders within `app/[locale]/layout.tsx`, so it
 * inherits the `<html>` shell — but not the marketing header/footer, which
 * live in the `(marketing)` route group below it.
 */
export default function LocaleNotFound() {
  return (
    <Container>
      <div className="grid min-h-[70vh] place-items-center py-24 text-center">
        <div>
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-brand">
            <span aria-hidden className="mr-1 opacity-60">
              /
            </span>
            404
          </p>
          <h1 className="mt-4 text-display-sm text-ink">
            Pagina nu a fost găsită
          </h1>
          <p className="mt-4 text-[0.9375rem] text-slate">
            Linkul pe care l-ai urmat nu mai există sau a fost mutat.
            <br />
            <span className="text-steel">
              The page you were looking for could not be found.
            </span>
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex h-12 items-center rounded-full bg-ink px-7 text-[0.9375rem] font-medium text-on-dark transition-colors hover:bg-charcoal"
          >
            Ecoplast Hart
          </Link>
        </div>
      </div>
    </Container>
  );
}
