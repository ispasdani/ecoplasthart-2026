import type { WebhookEvent } from "@clerk/nextjs/server";
import { httpRouter } from "convex/server";
import { Webhook } from "svix";

import { internal } from "./_generated/api";
import { httpAction } from "./_generated/server";

/**
 * Clerk -> Convex user sync.
 *
 * Clerk sends a signed webhook to `<CONVEX_SITE_URL>/clerk` on user changes.
 * We verify the Svix signature, then mirror the user into our `users` table.
 */
const handleClerkWebhook = httpAction(async (ctx, request) => {
  const event = await validateRequest(request);
  if (!event) {
    return new Response("Invalid webhook signature", { status: 400 });
  }

  switch (event.type) {
    case "user.created":
    case "user.updated": {
      const data = event.data;
      const primaryEmail =
        data.email_addresses.find((e) => e.id === data.primary_email_address_id)
          ?.email_address ?? data.email_addresses[0]?.email_address;

      const name =
        [data.first_name, data.last_name].filter(Boolean).join(" ") ||
        primaryEmail ||
        "Unknown";

      if (event.type === "user.created") {
        await ctx.runMutation(internal.users.createUser, {
          clerkId: data.id,
          email: primaryEmail ?? "",
          name,
          imageUrl: data.image_url,
          // Everyone starts as a member; promote to admin from the dashboard.
          role: "member",
        });
      } else {
        await ctx.runMutation(internal.users.updateUser, {
          clerkId: data.id,
          email: primaryEmail,
          name,
          imageUrl: data.image_url,
        });
      }
      break;
    }
    case "user.deleted": {
      // `id` is optional on the deleted event payload.
      if (event.data.id) {
        await ctx.runMutation(internal.users.deleteUser, {
          clerkId: event.data.id,
        });
      }
      break;
    }
  }

  return new Response(null, { status: 200 });
});

const http = httpRouter();

http.route({
  path: "/clerk",
  method: "POST",
  handler: handleClerkWebhook,
});

async function validateRequest(
  req: Request,
): Promise<WebhookEvent | undefined> {
  const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
  if (!webhookSecret) {
    throw new Error("CLERK_WEBHOOK_SECRET is not set in Convex env vars");
  }

  const payloadString = await req.text();
  const svixHeaders = {
    "svix-id": req.headers.get("svix-id")!,
    "svix-timestamp": req.headers.get("svix-timestamp")!,
    "svix-signature": req.headers.get("svix-signature")!,
  };

  try {
    // `verify` throws on a bad signature. Its return value is unreliable across
    // svix versions (2.x returns `undefined`), so parse the body ourselves.
    new Webhook(webhookSecret).verify(payloadString, svixHeaders);
    return JSON.parse(payloadString) as WebhookEvent;
  } catch (err) {
    console.error("Clerk webhook verification failed", err);
    return undefined;
  }
}

export default http;
