import { ImageResponse } from "next/og";

import { getDictionary } from "@/lib/i18n/dictionary";
import { isLocale, locales } from "@/lib/i18n/routing";

/**
 * The social card every page falls back to. Before this existed the site sent
 * `twitter:card = summary_large_image` with no image to fill it, so every share
 * on WhatsApp, LinkedIn or Facebook rendered as a blank grey rectangle.
 *
 * Nested routes inherit this unless they add their own `opengraph-image`.
 */
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Ecoplast Hart — colectare, sortare și reciclare deșeuri";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

// Brand palette, mirrored from app/globals.css.
const DEEP = "#101c15";
const BRAND = "#2f7d4f";
const BRAND_MID = "#4f9a6c";
const ON_DARK = "#f4f5f1";
const ON_DARK_MUTED = "rgba(244, 245, 241, 0.66)";

/**
 * The same lucide `recycle` mark as the site header and the favicon, inlined
 * because Satori rasterises this at build time and cannot import a React icon
 * component that expects a browser. Kept in sync by hand with
 * `scripts/generate-icons.mjs`, which draws the same paths for the icon files.
 */
function RecycleMark() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 24 24"
      fill="none"
      stroke={ON_DARK}
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
      <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
      <path d="m14 16-3 3 3 3" />
      <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
      <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
      <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
    </svg>
  );
}

export default async function OpengraphImage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDictionary(isLocale(locale) ? locale : "ro");

  const c = dict.company;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: DEEP,
          padding: "72px 80px",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: BRAND,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RecycleMark />
          </div>
          <div style={{ display: "flex", fontSize: 34, fontWeight: 600, color: ON_DARK }}>
            Ecoplast
            <span style={{ color: BRAND_MID, marginLeft: 10 }}>Hart</span>
          </div>
        </div>

        {/* Positioning line */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 62,
              fontWeight: 700,
              color: ON_DARK,
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
              maxWidth: 940,
            }}
          >
            {dict.meta.home.title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              width: 96,
              height: 5,
              background: BRAND,
            }}
          />
        </div>

        {/* Identity strip */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: ON_DARK_MUTED,
          }}
        >
          <div style={{ display: "flex" }}>{c.addressOperational}</div>
          <div style={{ display: "flex" }}>{c.phonePrimary}</div>
        </div>
      </div>
    ),
    size,
  );
}
