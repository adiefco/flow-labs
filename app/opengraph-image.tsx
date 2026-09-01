import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
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
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#a1a1aa",
            }}
          >
            Flow Labs
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#a1a1aa",
              marginBottom: 24,
            }}
          >
            Estúdio de produtos digitais
          </span>

          <span
            style={{
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "#09090b",
            }}
          >
            Ideias que merecem ganhar vida.
          </span>
        </div>

        <div style={{ display: "flex", gap: 32 }}>
          <span style={{ fontSize: 18, color: "#71717a" }}>Sites</span>
          <span style={{ fontSize: 18, color: "#d4d4d8" }}>·</span>
          <span style={{ fontSize: 18, color: "#71717a" }}>Aplicativos</span>
          <span style={{ fontSize: 18, color: "#d4d4d8" }}>·</span>
          <span style={{ fontSize: 18, color: "#71717a" }}>Plataformas</span>
          <span style={{ fontSize: 18, color: "#d4d4d8" }}>·</span>
          <span style={{ fontSize: 18, color: "#71717a" }}>E-commerce</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
