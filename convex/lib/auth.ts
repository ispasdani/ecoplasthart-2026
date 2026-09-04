import { ConvexError } from "convex/values";

import { Doc } from "../_generated/dataModel";
import { QueryCtx } from "../_generated/server";

/**
 * Shared auth/permission helpers.
 *
 * These rely on the Clerk <-> Convex integration (JWT passed to Convex).
 * Until that is wired up, `ctx.auth.getUserIdentity()` returns `null` and the
 * `require*` helpers below will throw — which is the intended behavior.
 */

/** Returns the signed-in user's row, or `null` if not signed in / not synced yet. */
export async function getCurrentUser(ctx: QueryCtx): Promise<Doc<"users"> | null> {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    return null;
  }

  return await ctx.db
    .query("users")
    .withIndex("by_clerkId", (q) => q.eq("clerkId", identity.subject))
    .unique();
}

/** Like {@link getCurrentUser} but throws if there is no matching user. */
export async function requireCurrentUser(ctx: QueryCtx): Promise<Doc<"users">> {
  const user = await getCurrentUser(ctx);
  if (!user) {
    // Surfaced verbatim in the (Romanian-only) dashboard UI.
    throw new ConvexError("Nu ești autentificat");
  }
  return user;
}

/** Throws unless the signed-in user has the `admin` role. Returns the admin row. */
export async function requireAdmin(ctx: QueryCtx): Promise<Doc<"users">> {
  const user = await requireCurrentUser(ctx);
  if (user.role !== "admin") {
    throw new ConvexError("Acces interzis: este necesar rolul de administrator");
  }
  return user;
}
