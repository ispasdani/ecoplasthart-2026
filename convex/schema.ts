import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

/**
 * User roles.
 *
 * - `member`: family / company members. Can view content and files.
 * - `admin`: can additionally upload and manage files, and manage roles.
 */
export const roleValidator = v.union(v.literal("member"), v.literal("admin"));

export default defineSchema({
  // Starter demo table (used by the marketing/dashboard scaffolding). Safe to
  // remove once those pages are replaced with real content.
  tasks: defineTable({
    text: v.string(),
    isCompleted: v.optional(v.boolean()),
  }),

  users: defineTable({
    // Clerk's user id (`identity.subject`). Source of truth for auth linkage.
    clerkId: v.string(),
    email: v.string(),
    name: v.string(),
    imageUrl: v.optional(v.string()),
    role: roleValidator,
  })
    .index("by_clerkId", ["clerkId"])
    .index("by_email", ["email"])
    .index("by_role", ["role"]),

  files: defineTable({
    // Handle to the blob in Convex file storage.
    storageId: v.id("_storage"),
    // Human-friendly title shown on the page.
    title: v.string(),
    description: v.optional(v.string()),
    // Original upload metadata (best-effort, provided by the client).
    fileName: v.optional(v.string()),
    contentType: v.optional(v.string()),
    size: v.optional(v.number()),
    // Optional grouping for later filtering / display sections.
    category: v.optional(v.string()),
    // Who uploaded it (always an admin at insert time).
    uploadedBy: v.id("users"),
  })
    .index("by_uploadedBy", ["uploadedBy"])
    .index("by_category", ["category"]),
});
