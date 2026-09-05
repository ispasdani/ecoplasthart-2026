import { serializeJsonLd } from "@/lib/site/structured-data";

/**
 * Renders one JSON-LD `@graph` document. Build the graph in
 * `lib/site/structured-data`, so every page's node IDs stay consistent.
 */
export function JsonLd({ graph }: { graph: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(graph) }}
    />
  );
}
