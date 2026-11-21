import { ImageResponse } from "next/og";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 } as const;
export const OG_IMAGE_CONTENT_TYPE = "image/png" as const;

// Brand palette, mirrored from app/globals.css.
const DEEP = "#101c15";
const BRAND = "#2f7d4f";
const BRAND_MID = "#4f9a6c";
const ON_DARK = "#f4f5f1";
const ON_DARK_MUTED = "rgba(244, 245, 241, 0.66)";
const BADGE_BG = "rgba(79, 154, 108, 0.16)";
const BADGE_BORDER = "rgba(79, 154, 108, 0.45)";

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

function titleFontSize(title: string): number {
  if (title.length > 72) return 44;
  if (title.length > 52) return 52;
  return 60;
}

/**
 * Shared 1200×630 social card layout used by the locale default OG image as
 * well as the per-service and per-article `opengraph-image.tsx` routes.
 */
export function renderOgCard({
  title,
  eyebrow,
  address,
  phone,
}: {
  title: string;
  eyebrow?: string;
  address: string;
  phone: string;
}): ImageResponse {
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
          padding: "68px 80px",
        }}
      >
        {/* Top bar: wordmark + optional category pill */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
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
            <div
              style={{
                display: "flex",
                fontSize: 34,
                fontWeight: 600,
                color: ON_DARK,
              }}
            >
              Ecoplast
              <span style={{ color: BRAND_MID, marginLeft: 10 }}>Hart</span>
            </div>
          </div>

          {eyebrow ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 22px",
                borderRadius: 999,
                background: BADGE_BG,
                border: `1.5px solid ${BADGE_BORDER}`,
                color: ON_DARK,
                fontSize: 22,
                fontWeight: 600,
              }}
            >
              {eyebrow}
            </div>
          ) : null}
        </div>

        {/* Headline + brand rule */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: titleFontSize(title),
              fontWeight: 700,
              color: ON_DARK,
              lineHeight: 1.14,
              letterSpacing: "-0.02em",
              maxWidth: 1020,
            }}
          >
            {title}
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
          <div style={{ display: "flex" }}>{address}</div>
          <div style={{ display: "flex" }}>{phone}</div>
        </div>
      </div>
    ),
    OG_IMAGE_SIZE,
  );
}
