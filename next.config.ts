import type { NextConfig } from "next";

/**
 * Headers applied to every route. Deliberately excludes a Content-Security-
 * Policy: a correct one has to enumerate the Clerk and Convex origins and the
 * inline JSON-LD blocks, and a wrong one breaks authentication silently. That
 * belongs in its own change, developed against a preview deployment.
 */
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
];

const nextConfig: NextConfig = {
  // Vercel already strips this; removing it keeps parity in other environments.
  poweredByHeader: false,

  images: {
    // AVIF first, WebP as the fallback. Typically 25-35% smaller than WebP at
    // equal quality, and Next negotiates per request, so older clients still
    // get a format they can decode.
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      // Clerk profile pictures, shown on the dashboard team roster.
      { protocol: "https", hostname: "img.clerk.com", pathname: "/**" },
    ],
  },

  experimental: {
    // lucide-react re-exports every icon from its barrel file; without this the
    // whole set can be pulled into the bundle for the handful actually used.
    optimizePackageImports: ["lucide-react"],
  },

  async headers() {
    return [
      { source: "/:path*", headers: securityHeaders },
      {
        // robots.txt keeps crawlers out of these, but robots.txt only prevents
        // crawling — a URL discovered via an external link can still be
        // indexed without being fetched. `noindex` on the response is what
        // actually keeps them out of the index.
        source: "/dashboard/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/api/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
