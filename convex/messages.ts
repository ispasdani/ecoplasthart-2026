import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
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
