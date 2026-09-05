import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/i18n/routing";

/**
 * Paths that are never useful in a search or AI index: the authenticated
 * dashboard, the API surface and Clerk's auth screens. `/dashboard/` carries a
 * trailing slash so it matches the route group rather than any future
 * top-level path that merely starts with the same characters.
 */
const disallow = ["/dashboard/", "/api/", "/sign-in", "/sign-up"];

/**
 * Crawlers that read the site for AI answers and training. They are already
 * permitted by the `*` rule, but naming them is deliberate: it records the
 * intent so a future tightening of the wildcard doesn't silently opt the site
 * out, and it makes the decision reviewable.
 *
 * `Google-Extended` is the consequential one. It governs inclusion in AI
 * Overviews and Gemini grounding, and is independent of normal Search ranking —
 * blocking it removes the site from AI answers while leaving blue-link
 * rankings untouched, which is an easy opt-out to make by accident.
 */
const aiUserAgents = [
  "GPTBot", // OpenAI, model training
  "OAI-SearchBot", // OpenAI, ChatGPT search index
  "ChatGPT-User", // OpenAI, live user-initiated fetch
  "ClaudeBot", // Anthropic, index + training
  "Claude-User", // Anthropic, live user-initiated fetch
  "PerplexityBot", // Perplexity index
  "Perplexity-User", // Perplexity live fetch
  "Google-Extended", // Google AI Overviews / Gemini grounding
  "Applebot-Extended", // Apple Intelligence
  "CCBot", // Common Crawl, feeds many training corpora
  "meta-externalagent", // Meta AI
  "cohere-ai",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: aiUserAgents, allow: "/", disallow },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
