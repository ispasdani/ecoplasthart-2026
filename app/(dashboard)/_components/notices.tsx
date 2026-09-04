/**
 * Shared "you got here, but Convex can't read your data" banners.
 *
 * Both dashboard pages gate on the same two failure modes, so the copy — and
 * the troubleshooting steps it points at — lives in one place.
 */

/**
 * Clerk let us into `/dashboard`, but Convex never received a valid JWT — so
 * every query would come back empty. Almost always a missing/incorrect
 * `CLERK_JWT_ISSUER_DOMAIN` in the Convex environment (`convex/auth.config.ts`).
 */
export function ConvexAuthNotice() {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-6">
      <h2 className="font-semibold text-amber-900">Convex nu este autentificat</h2>
      <p className="mt-1 max-w-2xl text-sm text-amber-800">
        Ești autentificat cu Clerk, dar Convex nu acceptă token-ul de sesiune,
        așa că datele nu pot fi citite. Verifică dacă{" "}
        <code>CLERK_JWT_ISSUER_DOMAIN</code> este setat în panoul Convex
        (Settings → Environment Variables) și dacă există un template JWT în
        Clerk numit <code>convex</code>.
      </p>
    </div>
  );
}

/** Signed in with Clerk, but the webhook never mirrored the account into Convex. */
export function NotSyncedNotice() {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-6">
      <h2 className="font-semibold text-amber-900">
        Contul tău nu este încă sincronizat
      </h2>
      <p className="mt-1 max-w-2xl text-sm text-amber-800">
        Ești autentificat cu Clerk, dar nu există un rând corespunzător în
        tabelul <code>users</code> din Convex, așa că datele nu pot fi citite.
        Verifică dacă webhook-ul Clerk trimite către{" "}
        <code>&lt;CONVEX_SITE_URL&gt;/clerk</code> și dacă{" "}
        <code>CLERK_WEBHOOK_SECRET</code> este setat în variabilele de mediu
        Convex, apoi deconectează-te și autentifică-te din nou.
      </p>
    </div>
  );
}
