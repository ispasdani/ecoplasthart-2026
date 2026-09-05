import { ImageResponse } from "next/og";

/**
 * iOS home-screen icon. Without this, saving the site to an iPhone home screen
 * produces a blurred screenshot of the page instead of a mark.
 *
 * iOS applies its own rounding and does not honour transparency, so this fills
 * the full square with the brand colour rather than drawing a rounded tile.
 */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2f7d4f",
          color: "#f4f5f1",
          fontSize: 88,
          fontWeight: 700,
          letterSpacing: "-0.04em",
        }}
      >
        EH
      </div>
    ),
    size,
  );
}
