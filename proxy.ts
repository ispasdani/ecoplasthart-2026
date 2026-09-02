import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

import { resolveI18n } from "@/lib/i18n/proxy-routing";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  // Locale routing first: canonicalise `/ro/*`, redirect wrong-locale slugs,
  // and rewrite localized slugs onto the internal `/[locale]/*` tree.
  const i18n = resolveI18n(req);

  if (isProtectedRoute(req)) {
    await auth.protect();
  }

  // `resolveI18n` returns `null` for excluded paths (dashboard, api, assets),
  // in which case Clerk falls back to its own `NextResponse.next()`.
  return i18n ?? undefined;
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|txt|xml)).*)",
    // Always run for Clerk's auto-proxy path
    "/__clerk/:path*",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
