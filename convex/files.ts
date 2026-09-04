import { ConvexError, v } from "convex/values";

import { mutation, query } from "./_generated/server";
import { requireAdmin } from "./lib/auth";

/**
 * Step 1 of an upload. Admin-only.
 *
 * Returns a short-lived URL. The client POSTs the raw file bytes to it and gets
 * back a `{ storageId }`, which it then passes to {@link saveFile}.
 */
export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx) => {
    await requireAdmin(ctx);
    return await ctx.storage.generateUploadUrl();
  },
});

/**
 * Step 2 of an upload. Admin-only.
 *
 * Records an already-uploaded blob so it can be listed and displayed.
 */
export const saveFile = mutation({
  args: {
    storageId: v.id("_storage"),
    title: v.string(),
    description: v.optional(v.string()),
    fileName: v.optional(v.string()),
    contentType: v.optional(v.string()),
    size: v.optional(v.number()),
    category: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const admin = await requireAdmin(ctx);

    return await ctx.db.insert("files", {
      storageId: args.storageId,
      title: args.title,
      description: args.description,
      fileName: args.fileName,
      contentType: args.contentType,
      size: args.size,
      category: args.category,
      uploadedBy: admin._id,
    });
  },
});

/** Update the editable metadata of a file record. Admin-only. */
export const updateFile = mutation({
  args: {
    fileId: v.id("files"),
    title: v.optional(v.string()),
    description: v.optional(v.string()),
    category: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    const file = await ctx.db.get(args.fileId);
    if (!file) {
      throw new ConvexError("Fișierul nu a fost găsit");
    }

    await ctx.db.patch(args.fileId, {
      ...(args.title !== undefined ? { title: args.title } : {}),
      ...(args.description !== undefined ? { description: args.description } : {}),
      ...(args.category !== undefined ? { category: args.category } : {}),
    });
  },
});

/** Delete a file record and its underlying blob. Admin-only. */
export const deleteFile = mutation({
  args: { fileId: v.id("files") },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);

    const file = await ctx.db.get(args.fileId);
    if (!file) {
      throw new ConvexError("Fișierul nu a fost găsit");
    }

    await ctx.storage.delete(file.storageId);
    await ctx.db.delete(args.fileId);
  },
});

/**
 * List files for display on the page, newest first, each with a ready-to-use
 * download/preview `url`. Public — anyone can view.
 */
export const list = query({
  args: { category: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const files =
      args.category !== undefined
        ? await ctx.db
            .query("files")
            .withIndex("by_category", (q) => q.eq("category", args.category))
            .order("desc")
            .collect()
        : await ctx.db.query("files").order("desc").collect();

    return await Promise.all(
      files.map(async (file) => ({
        ...file,
        url: await ctx.storage.getUrl(file.storageId),
      })),
    );
  },
});

export const getById = query({
  args: { fileId: v.id("files") },
  handler: async (ctx, args) => {
    const file = await ctx.db.get(args.fileId);
    if (!file) {
      return null;
    }

    return { ...file, url: await ctx.storage.getUrl(file.storageId) };
  },
});
