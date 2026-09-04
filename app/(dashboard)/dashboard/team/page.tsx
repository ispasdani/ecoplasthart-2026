"use client";

import Image from "next/image";
import { useConvexAuth, useMutation, useQuery } from "convex/react";
import { ConvexError } from "convex/values";
import { Loader2, ShieldCheck, UserRound, Users } from "lucide-react";
import { useMemo, useState } from "react";

import { api } from "@/convex/_generated/api";
import type { Doc } from "@/convex/_generated/dataModel";

type User = Doc<"users">;
type Role = User["role"];

/**
 * Team roster.
 *
 * Everyone in `convex/users.ts` — i.e. every Clerk account the webhook has
 * mirrored into Convex. Admins can additionally promote/demote from here
 * (`users.setRole`, which refuses to let an admin demote themselves).
 */
export default function TeamPage() {
  const { isAuthenticated, isLoading: authLoading } = useConvexAuth();

  // `null` = signed in with Clerk but not mirrored into Convex yet.
  const me = useQuery(api.users.current, isAuthenticated ? {} : "skip");
  // `users.list` requires a synced row, so wait until we know we have one.
  const users = useQuery(api.users.list, me ? {} : "skip");

  const sorted = useMemo(() => sortUsers(users), [users]);

  const isAdmin = me?.role === "admin";
  const adminCount = sorted.filter((u) => u.role === "admin").length;

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold tracking-tight">Team</h1>
        <p className="mt-1 max-w-2xl text-sm text-stone-600">
          Everyone with an account for this dashboard. New people appear here
          automatically once they sign up through Clerk.{" "}
          {isAdmin
            ? "As an admin you can change roles below."
            : "Only admins can change roles."}
        </p>
      </header>

      {!authLoading && !isAuthenticated ? (
        <ConvexAuthNotice />
      ) : me === null ? (
        <NotSyncedNotice />
      ) : users === undefined ? (
        <LoadingCard />
      ) : sorted.length === 0 ? (
        <EmptyCard />
      ) : (
        <>
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard label="Total accounts" value={sorted.length} icon={Users} />
            <StatCard label="Admins" value={adminCount} icon={ShieldCheck} />
            <StatCard
              label="Members"
              value={sorted.length - adminCount}
              icon={UserRound}
            />
          </div>

          <div className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
            <div className="hidden border-b border-stone-200 bg-stone-50 px-5 py-2.5 text-xs font-medium uppercase tracking-wide text-stone-500 sm:grid sm:grid-cols-[minmax(0,1fr)_9rem_10rem] sm:gap-4">
              <span>Person</span>
              <span>Joined</span>
              <span>Role</span>
            </div>

            <ul className="divide-y divide-stone-200">
              {sorted.map((user) => (
                <li key={user._id}>
                  <TeamRow
                    user={user}
                    isSelf={user._id === me?._id}
                    canEdit={isAdmin}
                    isLastAdmin={user.role === "admin" && adminCount === 1}
                  />
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Row                                                                        */
/* -------------------------------------------------------------------------- */

function TeamRow({
  user,
  isSelf,
  canEdit,
  isLastAdmin,
}: {
  user: User;
  isSelf: boolean;
  canEdit: boolean;
  isLastAdmin: boolean;
}) {
  const setRole = useMutation(api.users.setRole);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleRoleChange(role: Role) {
    if (role === user.role) return;

    setPending(true);
    setError(null);
    try {
      await setRole({ userId: user._id, role });
    } catch (err) {
      setError(
        err instanceof ConvexError ? String(err.data) : "Could not change role",
      );
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="grid gap-3 px-5 py-4 sm:grid-cols-[minmax(0,1fr)_9rem_10rem] sm:items-center sm:gap-4">
      <div className="flex min-w-0 items-center gap-3">
        <Avatar name={user.name} imageUrl={user.imageUrl} />
        <div className="min-w-0">
          <p className="flex items-center gap-2 truncate font-medium text-stone-900">
            <span className="truncate">{user.name}</span>
            {isSelf ? (
              <span className="shrink-0 rounded-full bg-stone-100 px-2 py-0.5 text-xs font-medium text-stone-500">
                You
              </span>
            ) : null}
          </p>
          <a
            href={`mailto:${user.email}`}
            className="block truncate text-sm text-stone-500 hover:text-emerald-700"
          >
            {user.email}
          </a>
        </div>
      </div>

      <p className="text-sm text-stone-500">
        <span className="sm:hidden">Joined </span>
        {formatDate(user._creationTime)}
      </p>

      <div>
        {canEdit && !isSelf && !isLastAdmin ? (
          <div className="flex items-center gap-2">
            <label className="sr-only" htmlFor={`role-${user._id}`}>
              Role for {user.name}
            </label>
            <select
              id={`role-${user._id}`}
              value={user.role}
              disabled={pending}
              onChange={(event) => handleRoleChange(event.target.value as Role)}
              className="h-9 rounded-lg border border-stone-300 bg-white px-2 text-sm text-stone-800 transition-colors hover:border-stone-400 focus:border-emerald-600 focus:outline-none focus:ring-1 focus:ring-emerald-600 disabled:opacity-50"
            >
              <option value="member">Member</option>
              <option value="admin">Admin</option>
            </select>
            {pending ? (
              <Loader2
                aria-hidden
                className="size-4 shrink-0 animate-spin text-stone-400"
              />
            ) : null}
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <RoleBadge role={user.role} />
            {canEdit && isLastAdmin && !isSelf ? (
              <span className="text-xs text-stone-400">last admin</span>
            ) : null}
          </div>
        )}

        {error ? (
          <p role="alert" className="mt-1 text-xs text-red-600">
            {error}
          </p>
        ) : null}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Pieces                                                                     */
/* -------------------------------------------------------------------------- */

function Avatar({ name, imageUrl }: { name: string; imageUrl?: string }) {
  if (imageUrl) {
    return (
      <Image
        src={imageUrl}
        alt=""
        width={40}
        height={40}
        className="size-10 shrink-0 rounded-full object-cover"
      />
    );
  }

  return (
    <span
      aria-hidden
      className="grid size-10 shrink-0 place-items-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-800"
    >
      {initialsOf(name)}
    </span>
  );
}

function RoleBadge({ role }: { role: Role }) {
  const isAdmin = role === "admin";
  return (
    <span
      className={
        isAdmin
          ? "inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-800"
          : "inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-2.5 py-1 text-xs font-medium text-stone-600"
      }
    >
      {isAdmin ? (
        <ShieldCheck aria-hidden className="size-3.5" />
      ) : (
        <UserRound aria-hidden className="size-3.5" />
      )}
      {isAdmin ? "Admin" : "Member"}
    </span>
  );
}

function StatCard({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: number;
  icon: typeof Users;
}) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5">
      <div className="flex items-center gap-2 text-sm text-stone-600">
        <Icon aria-hidden className="size-4 text-emerald-700" />
        {label}
      </div>
      <p className="mt-2 text-2xl font-semibold tabular-nums text-stone-900">
        {value}
      </p>
    </div>
  );
}

function LoadingCard() {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-stone-200 bg-white px-5 py-10 text-sm text-stone-500">
      <Loader2 aria-hidden className="size-4 animate-spin" />
      Loading team…
    </div>
  );
}

function EmptyCard() {
  return (
    <div className="rounded-2xl border border-dashed border-stone-300 bg-white px-5 py-12 text-center">
      <Users aria-hidden className="mx-auto size-7 text-stone-400" strokeWidth={1.5} />
      <h2 className="mt-4 font-semibold text-stone-900">No accounts yet</h2>
      <p className="mx-auto mt-1 max-w-md text-sm text-stone-600">
        People show up here once they sign up and the Clerk webhook mirrors them
        into Convex.
      </p>
    </div>
  );
}

/**
 * Clerk let us into `/dashboard`, but Convex never received a valid JWT — so
 * every query would come back empty. Almost always a missing/incorrect
 * `CLERK_JWT_ISSUER_DOMAIN` in the Convex environment (`convex/auth.config.ts`).
 */
function ConvexAuthNotice() {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-6">
      <h2 className="font-semibold text-amber-900">Convex isn’t authenticated</h2>
      <p className="mt-1 max-w-2xl text-sm text-amber-800">
        You’re signed in with Clerk, but Convex isn’t accepting the session
        token, so the roster can’t be read. Check that{" "}
        <code>CLERK_JWT_ISSUER_DOMAIN</code> is set in the Convex dashboard
        (Settings → Environment Variables) and that a Clerk JWT template named{" "}
        <code>convex</code> exists.
      </p>
    </div>
  );
}

function NotSyncedNotice() {
  return (
    <div className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-6">
      <h2 className="font-semibold text-amber-900">Your account isn’t synced yet</h2>
      <p className="mt-1 max-w-2xl text-sm text-amber-800">
        You’re signed in with Clerk, but there is no matching row in the Convex{" "}
        <code>users</code> table — so the roster can’t be read. Check that the
        Clerk webhook points at{" "}
        <code>&lt;CONVEX_SITE_URL&gt;/clerk</code> and that{" "}
        <code>CLERK_WEBHOOK_SECRET</code> is set in the Convex environment
        variables, then sign out and back in.
      </p>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

/** Admins first, then alphabetical — the roster reads as a hierarchy. */
function sortUsers(users: User[] | undefined): User[] {
  if (!users) return [];

  return [...users].sort((a, b) => {
    if (a.role !== b.role) return a.role === "admin" ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
}

function initialsOf(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  return parts
    .slice(0, 2)
    .map((part) => part[0]!.toUpperCase())
    .join("");
}

function formatDate(timestamp: number): string {
  return new Intl.DateTimeFormat("ro-RO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(timestamp);
}
