import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f0ebe4",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 8,
          gap: 3,
        }}
      >
        <span
          style={{
            color: "#1a1a1a",
            fontSize: 34,
            fontWeight: 500,
            fontFamily: "sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          fl
        </span>
        <div
          style={{
            width: 40,
            height: 2,
            background: "#1a1a1a",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
