import { ConvexError, v } from "convex/values";
import { internalMutation, mutation, query } from "./_generated/server";
import { internal } from "./_generated/api";
import { requireCurrentUser } from "./lib/auth";

export const submit = mutation({
  args: {
    firstName: v.string(),
    lastName: v.string(),
    email: v.optional(v.string()),
    phone: v.optional(v.string()),
    message: v.string(),
  },
  handler: async (ctx, args) => {
    if (!args.email && !args.phone) {
      throw new ConvexError("Trebuie să furnizați o adresă de email sau un număr de telefon.");
    }

    await ctx.db.insert("messages", {
      ...args,
      status: "unread",
    });
  },
});

export const list = query({
  args: {},
  handler: async (ctx) => {
    // Both members and admins can view messages
    await requireCurrentUser(ctx);

    const messages = await ctx.db.query("messages").order("desc").collect();
    return messages;
  },
});

export const updateMessage = mutation({
  args: {
    id: v.id("messages"),
    status: v.optional(
      v.union(
        v.literal("unread"),
        v.literal("read"),
        v.literal("contacted"),
        v.literal("archived")
      )
    ),
    notes: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await requireCurrentUser(ctx);

    const message = await ctx.db.get(args.id);
    if (!message) {
      throw new ConvexError("Mesajul nu a fost găsit");
    }

    await ctx.db.patch(args.id, {
      ...(args.status !== undefined ? { status: args.status } : {}),
      ...(args.notes !== undefined ? { notes: args.notes } : {}),
    });
  },
});

/**
 * Contact-form messages are kept for 12 months from receipt — the period
 * stated in the privacy policy and in the notice under the form. Run by hand
 * from the Convex dashboard for now (the daily cron in `crons.ts` is
 * commented out); deletes in batches and reschedules itself if more remain.
 */
const RETENTION_MS = 365 * 24 * 60 * 60 * 1000;
const PURGE_BATCH = 200;

export const purgeExpired = internalMutation({
  args: {},
  handler: async (ctx) => {
    const cutoff = Date.now() - RETENTION_MS;
    const expired = await ctx.db
      .query("messages")
      .withIndex("by_creation_time", (q) => q.lt("_creationTime", cutoff))
      .take(PURGE_BATCH);

    for (const message of expired) {
      await ctx.db.delete(message._id);
    }

    if (expired.length === PURGE_BATCH) {
      await ctx.scheduler.runAfter(0, internal.messages.purgeExpired, {});
    }
  },
});
