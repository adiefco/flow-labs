import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f7f4ee",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "68px 76px",
          fontFamily: "sans-serif",
          color: "#25253a",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", width: 700 }}>
          <div style={{ display: "flex", alignItems: "center", marginBottom: 58 }}>
            <div
              style={{
                width: 32,
                height: 32,
                border: "2px solid #70699d",
                borderRadius: "50%",
                marginRight: 12,
              }}
            />
            <span style={{ fontSize: 22, fontWeight: 500 }}>kairos</span>
          </div>

          <span
            style={{
              fontSize: 15,
              fontWeight: 500,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#70699d",
              marginBottom: 22,
            }}
          >
            A casa digital da sua igreja
          </span>
          <span
            style={{
              fontSize: 70,
              fontFamily: "serif",
              fontWeight: 400,
              lineHeight: 0.98,
              letterSpacing: "-0.035em",
              marginBottom: 24,
            }}
          >
            Tudo o que sua igreja precisa, em um só app.
          </span>
          <span
            style={{
              fontSize: 22,
              color: "#716e7a",
              lineHeight: 1.45,
              maxWidth: 640,
            }}
          >
            Agenda, cultos, oração e informações reunidos em uma experiência com a identidade da sua igreja.
          </span>
          <span style={{ fontSize: 17, color: "#70699d", marginTop: 54 }}>
            flow-labs.digital/kairos
          </span>
        </div>

        <div style={{ display: "flex", width: 330, height: 430, position: "relative", alignItems: "center", justifyContent: "center" }}>
          <div style={{ position: "absolute", width: 330, height: 330, border: "2px solid #70699d", borderRadius: "50%", opacity: 0.42 }} />
          <div style={{ position: "absolute", width: 235, height: 235, border: "2px solid #70699d", borderRadius: "50%", opacity: 0.25, transform: "translate(48px, -38px)" }} />
          <div style={{ position: "absolute", width: 105, height: 105, borderRadius: "50%", background: "#b87887", opacity: 0.28, transform: "translate(-105px, 125px)" }} />
          <div style={{ width: 170, height: 342, borderRadius: 30, background: "#fffdf9", border: "8px solid #25253a", boxShadow: "0 24px 50px rgba(37,37,58,.15)", transform: "rotate(3deg)", padding: "32px 15px", display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "serif", fontSize: 18, marginBottom: 22 }}>Comunidade</div>
            <div style={{ height: 112, borderRadius: 16, background: "#25253a", color: "#f7f4ee", padding: 15, display: "flex", alignItems: "flex-end", fontFamily: "serif", fontSize: 20 }}>Culto de celebração</div>
            <div style={{ display: "flex", gap: 8, marginTop: 10 }}><div style={{ flex: 1, height: 56, borderRadius: 12, background: "#e9e5f0" }} /><div style={{ flex: 1, height: 56, borderRadius: 12, background: "#e9e5f0" }} /></div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
