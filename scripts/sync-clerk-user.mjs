#!/usr/bin/env node
/**
 * Manually mirrors a Clerk user into the Convex `users` table.
 *
 * Normally the Clerk -> Convex webhook (`convex/http.ts`, route `/clerk`) does
 * this on `user.created`. When that webhook is missing on an instance, was
 * added after the user signed up, or failed a delivery, the account exists in
 * Clerk but has no Convex row — so the app sees a signed-in identity with no
 * role and locks the user out of the dashboard.
 *
 * This script closes that gap: it looks the user up in Clerk by email (so the
 * `clerkId` is the real one — guessing it would create a row that never matches
 * `identity.subject`), then calls the `users:createUser` internal mutation,
 * which upserts on `clerkId`.
 *
 * Clerk keeps development and production as separate instances with separate
 * users, so the secret key decides which one you are searching: `.env.local`
 * holds the `sk_test_` (development) key, and an account created on the live
 * site is only visible to the `sk_live_` key. Match the Convex deployment to
 * it — a `sk_live_` lookup goes with `--prod`.
 *
 * Usage:
 *   node scripts/sync-clerk-user.mjs nicuispas960@gmail.com --role admin --dry-run
 *   node scripts/sync-clerk-user.mjs nicuispas960@gmail.com --role admin
 *   CLERK_SECRET_KEY=sk_live_... node scripts/sync-clerk-user.mjs someone@x.com --role admin --prod
 *
 * Reads CLERK_SECRET_KEY from the environment, falling back to .env.local.
 */

import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const prod = args.includes("--prod");
const roleIdx = args.indexOf("--role");
const role = roleIdx === -1 ? "member" : args[roleIdx + 1];
const email = args.find((a) => !a.startsWith("--") && a !== role);

/** Minimal .env.local reader: only used as a fallback for CLERK_SECRET_KEY. */
function envFromFile(key) {
  try {
    const line = readFileSync(new URL("../.env.local", import.meta.url), "utf8")
      .split("\n")
      .find((l) => l.trimStart().startsWith(`${key}=`));
    return line
      ?.slice(line.indexOf("=") + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
  } catch {
    return undefined;
  }
}

/** `npx convex run` — admin-authenticated, so it can call internal mutations. */
function convexRun(fn, payload) {
  execFileSync(
    "npx",
    ["convex", "run", ...(prod ? ["--prod"] : []), fn, JSON.stringify(payload)],
    { stdio: "inherit", shell: process.platform === "win32" },
  );
}

// Everything past the first `await` lives in main() so failures can `return` a
// status instead of calling process.exit() with fetch sockets still open, which
// trips a libuv assertion on Windows.
async function main() {
  if (!email) {
    console.error(
      "Usage: node scripts/sync-clerk-user.mjs <email> [--role admin] [--prod] [--dry-run]",
    );
    return 1;
  }
  if (role !== "member" && role !== "admin") {
    console.error(`Invalid role "${role}" — expected "member" or "admin".`);
    return 1;
  }

  const clerkSecret =
    process.env.CLERK_SECRET_KEY ?? envFromFile("CLERK_SECRET_KEY");
  if (!clerkSecret) {
    console.error(
      "CLERK_SECRET_KEY is not set (checked the environment and .env.local).",
    );
    return 1;
  }

  const res = await fetch(
    `https://api.clerk.com/v1/users?email_address=${encodeURIComponent(email)}`,
    { headers: { Authorization: `Bearer ${clerkSecret}` } },
  );
  if (!res.ok) {
    console.error(`Clerk API ${res.status}: ${await res.text()}`);
    return 1;
  }

  const users = await res.json();
  if (!Array.isArray(users) || users.length === 0) {
    console.error(
      `No Clerk user with email ${email} in the instance that this key ` +
        `(${clerkSecret.slice(0, 8)}…) belongs to. A sk_test_ key only sees the ` +
        `development instance — an account created on the live site needs the ` +
        `sk_live_ key, plus --prod so the write lands in the matching Convex ` +
        `deployment.`,
    );
    return 1;
  }
  if (users.length > 1) {
    console.error(`${users.length} Clerk users share ${email}; refusing to guess.`);
    return 1;
  }

  const user = users[0];
  const primaryEmail =
    user.email_addresses.find((e) => e.id === user.primary_email_address_id)
      ?.email_address ??
    user.email_addresses[0]?.email_address ??
    email;

  // Same shape the webhook builds, so a later `user.updated` event is a no-op.
  const payload = {
    clerkId: user.id,
    email: primaryEmail,
    name:
      [user.first_name, user.last_name].filter(Boolean).join(" ") ||
      primaryEmail ||
      "Unknown",
    ...(user.image_url ? { imageUrl: user.image_url } : {}),
    role,
  };

  console.log(
    `Clerk instance: ${clerkSecret.slice(0, 8)}…  Convex: ${prod ? "prod" : "dev"}`,
  );
  console.log("users:createUser", JSON.stringify(payload, null, 2));

  if (dryRun) {
    console.log("\n--dry-run: nothing written.");
    return 0;
  }

  // `createUser` upserts on clerkId but leaves an existing row's role alone, so
  // set the role explicitly afterwards — that makes re-runs idempotent.
  convexRun("users:createUser", payload);
  convexRun("users:setRoleByClerkId", { clerkId: user.id, role });

  console.log(`\nDone — ${primaryEmail} is now a Convex "${role}".`);
  return 0;
}

process.exitCode = await main();
