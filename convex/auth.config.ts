export default {
  providers: [
    {
      // Clerk "Frontend API URL" / JWT issuer, e.g. https://your-app.clerk.accounts.dev
      // Set in the Convex dashboard (Settings -> Environment Variables).
      domain: process.env.CLERK_JWT_ISSUER_DOMAIN,
      applicationID: "convex",
    },
  ],
};
