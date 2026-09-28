import { cronJobs } from "convex/server";
// import { internal } from "./_generated/api";

const crons = cronJobs();

// Disabled for now: contact-message retention (12 months) is enforced by hand,
// by running `messages:purgeExpired` from the Convex dashboard. Uncomment to
// automate it.
//
// crons.daily(
//   "purge expired contact messages",
//   { hourUTC: 2, minuteUTC: 0 },
//   internal.messages.purgeExpired,
// );

export default crons;
