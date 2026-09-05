import { ImageResponse } from "next/og";

/**
 * PNG app icon, alongside the existing `favicon.ico`. Browsers and Android
 * home screens prefer this; the .ico remains for legacy `/favicon.ico` requests.
 */
export const size = { width: 192, height: 192 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 96,
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
