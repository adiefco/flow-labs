import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f0f7ff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex" }}>
          <span
            style={{
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#4a7ab5",
              background: "#dcecff",
              padding: "6px 16px",
              borderRadius: 999,
            }}
          >
            Flow Labs
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "#09090b",
              marginBottom: 24,
            }}
          >
            Kairos
          </span>

          <span
            style={{
              fontSize: 28,
              color: "#52525b",
              lineHeight: 1.4,
              maxWidth: 700,
            }}
          >
            A casa digital da sua igreja. Agenda, cultos, pedidos de oração e comunicação em um só app.
          </span>
        </div>

        <div style={{ display: "flex" }}>
          <span style={{ fontSize: 18, color: "#7d9fc2" }}>
            flow-labs.digital/kairos
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
