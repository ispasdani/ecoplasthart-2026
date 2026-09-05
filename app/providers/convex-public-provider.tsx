"use client";

import { ConvexProvider, ConvexReactClient } from "convex/react";
import type { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

/**
 * Convex without Clerk, for the public marketing tree.
 *
 * The marketing pages render no Clerk UI and read only `files.list`, which is
 * an unauthenticated query. Mounting `ConvexClientProvider` above them pulled
 * `ClerkProvider` — and with it a third-party connection to
 * `clerk.ecoplasthart.com` plus the full `clerk.browser.js` bundle — onto every
 * public page, including the homepage, for visitors who never sign in.
 *
 * Wrap the specific component that queries Convex with this instead. The
 * Clerk-aware `ConvexClientProvider` stays where authentication is genuinely
 * needed, in the dashboard layout.
 */
export function ConvexPublicProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
