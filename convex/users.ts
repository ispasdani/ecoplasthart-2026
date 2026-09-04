import { ConvexError, v } from "convex/values";

import { roleValidator } from "./schema";
import { internalMutation, mutation, query } from "./_generated/server";
import { getCurrentUser, requireAdmin, requireCurrentUser } from "./lib/auth";

/**
 * The currently signed-in user's row (or `null`).
 *
 * Handy for the client to know its own role without a round-trip through Clerk.
 */
export const current = query({
  args: {},
  handler: async (ctx) => {
    return await getCurrentUser(ctx);
  },
});

export const getByClerkId = query({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
      .unique();
  },
});

export const getById = query({
  args: { userId: v.id("users") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.userId);
  },
});

/**
 * Full member/admin roster — powers `/dashboard/team`.
 *
 * Readable by any signed-in member: the dashboard is already a private area and
 * members need to see who else can publish. Changing a role stays admin-only,
 * see {@link setRole}.
 */
export const list = query({
  args: {},
  handler: async (ctx) => {
    await requireCurrentUser(ctx);
    return await ctx.db.query("users").collect();
  },
});

/**
 * Promote / demote a user. Admin-only.
 *
 * An admin cannot demote themselves (avoids locking everyone out).
 */
export const setRole = mutation({
  args: { userId: v.id("users"), role: roleValidator },
  handler: async (ctx, args) => {
    const admin = await requireAdmin(ctx);

    // These two messages are rendered verbatim in the dashboard, which is
    // Romanian-only. The `internalMutation` errors below are not, so they
    // stay in English.
    const target = await ctx.db.get(args.userId);
    if (!target) {
      throw new ConvexError("Utilizatorul nu a fost găsit");
    }

    if (target._id === admin._id && args.role !== "admin") {
      throw new ConvexError("Nu îți poți retrage propriul rol de administrator");
    }

    await ctx.db.patch(args.userId, { role: args.role });
  },
});

/* -------------------------------------------------------------------------- */
/* Clerk webhook sync (internal — called from the Clerk -> Convex webhook)     */
/* -------------------------------------------------------------------------- */

export const createUser = internalMutation({
  args: {
    clerkId: v.string(),
    email: v.string(),
    name: v.string(),
    imageUrl: v.optional(v.string()),
    // Defaults to "member"; pass "admin" to seed an admin.
    role: v.optional(roleValidator),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
      .unique();

    if (existing) {
      await ctx.db.patch(existing._id, {
        email: args.email,
        name: args.name,
        imageUrl: args.imageUrl,
      });
      return existing._id;
    }

    return await ctx.db.insert("users", {
      clerkId: args.clerkId,
      email: args.email,
      name: args.name,
      imageUrl: args.imageUrl,
      role: args.role ?? "member",
    });
  },
});

export const updateUser = internalMutation({
  args: {
    clerkId: v.string(),
    email: v.optional(v.string()),
    name: v.optional(v.string()),
    imageUrl: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
      .unique();

    if (!user) {
      throw new ConvexError("User not found");
    }

    await ctx.db.patch(user._id, {
      ...(args.email !== undefined ? { email: args.email } : {}),
      ...(args.name !== undefined ? { name: args.name } : {}),
      ...(args.imageUrl !== undefined ? { imageUrl: args.imageUrl } : {}),
    });
  },
});

/**
 * Seed / fix a user's role from the Convex dashboard or CLI:
 *   npx convex run users:setRoleByClerkId '{"clerkId":"user_...","role":"admin"}'
 *
 * `internal` — not reachable from the client. Use `setRole` for in-app changes.
 */
export const setRoleByClerkId = internalMutation({
  args: { clerkId: v.string(), role: roleValidator },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
      .unique();

    if (!user) {
      throw new ConvexError("User not found");
    }

    await ctx.db.patch(user._id, { role: args.role });
  },
});

export const deleteUser = internalMutation({
  args: { clerkId: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerkId", (q) => q.eq("clerkId", args.clerkId))
      .unique();

    if (!user) {
      throw new ConvexError("User not found");
    }

    await ctx.db.delete(user._id);
  },
});
