const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ||
  "https://wa.me/5521982233201?text=Ol%C3%A1!%20Tenho%20interesse%20em%20conhecer%20o%20Kairos.";

export default function KairosPage() {
  return (
    <main
      style={{
        background: "#f7f4ee",
        color: "#25253a",
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,300;0,6..72,400;1,6..72,300;1,6..72,400&display=swap');

        .k-serif { font-family: 'Newsreader', serif; }
        .k-italic { font-style: italic; color: #70699d; }
        .k-eyebrow {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #70699d;
          margin: 0 0 20px;
          display: block;
        }
        .k-lead {
          font-family: 'DM Sans', sans-serif;
          color: #716e7a;
          font-size: 17px;
          line-height: 1.65;
          max-width: 580px;
        }
        .k-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 46px;
          padding: 0 24px;
          border-radius: 999px;
          background: #25253a;
          color: #ffffff;
          font-size: 14px;
          font-weight: 500;
          text-decoration: none;
          transition: opacity 0.15s;
        }
        .k-btn:hover { opacity: 0.82; }
        .k-btn-ghost {
          background: transparent;
          color: #25253a;
          border: 1px solid rgba(37,37,58,0.16);
        }
        .k-btn-ghost:hover { background: rgba(37,37,58,0.04); opacity: 1; }
        .k-mark {
          display: inline-block;
          width: 30px;
          height: 30px;
          border: 1.8px solid #70699d;
          border-radius: 50%;
          position: relative;
          flex-shrink: 0;
        }
        .k-mark::after {
          content: "";
          position: absolute;
          width: 7px;
          height: 2px;
          background: #b87887;
          border-radius: 2px;
          transform: rotate(-34deg);
          right: 0px;
          top: -3px;
        }
        .k-line { height: 1px; background: rgba(37,37,58,0.12); }
        .k-shell { max-width: 1100px; margin: 0 auto; padding: 0 54px; }
        .k-section { padding: 96px 0; }

        /* Hero */
        .k-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          align-items: center;
          gap: 60px;
          padding-top: 80px;
          min-height: 640px;
        }
        .k-hero h1 {
          font-family: 'Newsreader', serif;
          font-size: clamp(48px, 6vw, 76px);
          line-height: 0.98;
          letter-spacing: -0.03em;
          margin: 0 0 28px;
          max-width: 660px;
        }
        .k-actions { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 34px; }

        /* Phone mock */
        .k-phone-wrap {
          position: relative;
          min-height: 500px;
          display: grid;
          place-items: center;
        }
        .k-orbit {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(112,105,157,0.3);
        }
        .k-orbit-a { width: 400px; height: 400px; }
        .k-orbit-b { width: 290px; height: 290px; transform: translate(68px, -44px); }
        .k-orbit-c {
          width: 100px; height: 100px;
          background: #b87887;
          opacity: 0.12;
          transform: translate(-128px, 134px);
          border: 0;
        }
        .k-phone {
          position: relative;
          z-index: 2;
          width: 230px;
          border-radius: 36px;
          background: #fffdf9;
          box-shadow: 0 28px 64px rgba(37,37,58,0.14);
          border: 7px solid #25253a;
          padding: 22px 14px;
          transform: rotate(3deg);
        }
        .k-phone-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .k-phone-name {
          font-family: 'Newsreader', serif;
          font-size: 19px;
          color: #25253a;
        }
        .k-phone-feature {
          background: #25253a;
          color: #f7f4ee;
          border-radius: 18px;
          padding: 16px;
          min-height: 130px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        }
        .k-phone-feature-label {
          font-size: 8px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          opacity: 0.65;
        }
        .k-phone-feature-title {
          font-family: 'Newsreader', serif;
          font-size: 23px;
          line-height: 1;
          margin-top: 6px;
        }
        .k-phone-links {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 7px;
          margin-top: 9px;
        }
        .k-phone-link {
          min-height: 62px;
          padding: 9px;
          background: #e9e5f0;
          border-radius: 13px;
          font-size: 9px;
          color: #25253a;
          display: flex;
          align-items: flex-end;
        }

        /* Problem */
        .k-problem {
          background: #25253a;
          color: #f7f4ee;
        }
        .k-problem .k-eyebrow { color: #b8b2d3; }
        .k-problem .k-lead { color: rgba(247,244,238,0.68); }
        .k-problem-grid {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 80px;
          align-items: center;
        }
        .k-problem h2 {
          font-family: 'Newsreader', serif;
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.02;
          letter-spacing: -0.03em;
          margin: 0 0 24px;
        }
        .k-scatter {
          min-height: 380px;
          position: relative;
        }
        .k-scatter-circle {
          position: absolute;
          border: 1px solid rgba(247,244,238,0.38);
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: rgba(247,244,238,0.55);
          font-size: 10px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }
        /* 4 círculos que se tocam levemente mas não habitam o mesmo espaço */
        .k-sc-1 { width: 148px; height: 148px; left: 2%;  top: 4%; }
        .k-sc-2 { width: 190px; height: 190px; right: 2%; top: 0%; }
        .k-sc-3 { width: 130px; height: 130px; left: 18%; bottom: 4%; }
        .k-sc-4 { width: 118px; height: 118px; right: 14%; bottom: 8%; background: rgba(184,120,135,0.22); border: 0; }

        /* Solution */
        .k-solution-grid {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 96px;
          align-items: center;
        }
        .k-solution h2 {
          font-family: 'Newsreader', serif;
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.02;
          letter-spacing: -0.03em;
          margin: 0 0 24px;
        }
        .k-gather {
          min-height: 340px;
          position: relative;
          display: grid;
          place-items: center;
        }
        .k-gather-o {
          width: 252px;
          height: 252px;
          border: 2px solid #70699d;
          border-radius: 50%;
          position: relative;
        }
        .k-gather-o::after {
          content: "";
          position: absolute;
          right: 7px;
          top: -10px;
          width: 30px;
          height: 6px;
          border-radius: 5px;
          transform: rotate(-34deg);
          background: #b87887;
        }
        .k-gather-ring {
          position: absolute;
          width: 320px;
          height: 320px;
          border: 1px solid rgba(112,105,157,0.18);
          border-radius: 50%;
        }

        /* Features */
        .k-features h2 {
          font-family: 'Newsreader', serif;
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.02;
          letter-spacing: -0.03em;
          margin: 0 0 24px;
        }
        .k-feature-head {
          margin-bottom: 56px;
        }
        .k-feature-head .k-eyebrow { display: block; margin-bottom: 12px; }
        .k-feature-head-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
        }
        .k-feature-head .k-lead { max-width: 380px; flex-shrink: 0; }
        .k-feature-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
          padding: 52px 0;
          border-top: 1px solid rgba(37,37,58,0.1);
        }
        .k-feature-row:nth-of-type(even) .k-feature-copy { order: 2; }
        .k-feature-copy p { font-family: 'DM Sans', sans-serif; color: #716e7a; line-height: 1.65; margin: 0; }
        .k-feature-copy h3 { font-family: 'Newsreader', serif; font-size: 30px; font-weight: 400; font-style: italic; margin: 0 0 12px; color: #25253a; }
        .k-number {
          font-family: 'Newsreader', serif;
          color: #70699d;
          font-size: 22px;
          font-style: italic;
          margin-bottom: 28px;
        }
        .k-screen {
          background: #e9e5f0;
          border-radius: 24px;
          min-height: 268px;
          padding: 32px;
          display: grid;
          place-items: center;
        }
        .k-mini-ui {
          width: 72%;
          background: #fffdf9;
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 16px 40px rgba(37,37,58,0.08);
        }
        .k-ui-line { height: 8px; border-radius: 8px; background: rgba(37,37,58,0.12); margin: 10px 0; }
        .k-ui-line.short { width: 48%; }
        .k-ui-block { height: 64px; border-radius: 11px; background: #25253a; margin-top: 16px; }

        /* Identity */
        .k-identity { background: #e9e5f0; }
        .k-identity-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }
        .k-identity h2 {
          font-family: 'Newsreader', serif;
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.02;
          letter-spacing: -0.03em;
          margin: 0 0 24px;
        }
        .k-overlap {
          height: 460px;
          position: relative;
          overflow: hidden;
        }
        .k-overlap-circle {
          position: absolute;
          width: 290px;
          height: 290px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-family: 'Newsreader', serif;
          font-size: 26px;
        }
        .k-overlap-a { left: 3%; top: 0; background: rgba(112,105,157,0.82); color: #f7f4ee; }
        .k-overlap-b { right: 3%; bottom: 0; background: rgba(184,120,135,0.55); color: #25253a; }

        /* Audiences */
        .k-audiences {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1px;
          background: rgba(37,37,58,0.1);
        }
        .k-audience {
          padding: 72px 52px;
          background: #fffdf9;
        }
        .k-audience h2 {
          font-family: 'Newsreader', serif;
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 0 0 24px;
        }
        .k-audience ul { list-style: none; padding: 0; margin: 24px 0 0; color: #716e7a; }
        .k-audience li { font-family: 'DM Sans', sans-serif; padding: 12px 0; border-top: 1px solid rgba(37,37,58,0.1); font-size: 15px; }

        /* Process */
        .k-process { background: #fffdf9; }
        .k-process h2 {
          font-family: 'Newsreader', serif;
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.02;
          letter-spacing: -0.03em;
          margin: 0 0 24px;
          max-width: 680px;
        }
        .k-steps { margin-top: 52px; border-top: 1px solid rgba(37,37,58,0.1); }
        .k-step {
          display: grid;
          grid-template-columns: 88px 1fr 1.2fr;
          gap: 28px;
          padding: 26px 0;
          border-bottom: 1px solid rgba(37,37,58,0.1);
          align-items: baseline;
        }
        .k-step-num {
          font-family: 'Newsreader', serif;
          font-size: 15px;
          font-style: italic;
          color: #70699d;
        }
        .k-step h3 { font-family: 'DM Sans', sans-serif; font-size: 16px; font-weight: 500; margin: 0; }
        .k-step p { font-family: 'DM Sans', sans-serif; color: #716e7a; line-height: 1.55; margin: 0; font-size: 15px; }

        /* Origin */
        .k-origin {
          background: #25253a;
          color: #f7f4ee;
          overflow: hidden;
          position: relative;
        }
        .k-origin .k-eyebrow { color: #b8b2d3; }
        .k-origin h2 {
          font-family: 'Newsreader', serif;
          font-size: clamp(36px, 5vw, 64px);
          line-height: 1.02;
          letter-spacing: -0.03em;
          margin: 0 0 28px;
          max-width: 760px;
        }
        .k-origin .k-lead { color: rgba(247,244,238,0.7); max-width: 660px; }
        .k-origin-ring {
          position: absolute;
          right: -130px;
          top: -190px;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          border: 1px solid rgba(233,229,240,0.14);
          pointer-events: none;
        }
        .k-origin-ring::after {
          content: "";
          position: absolute;
          inset: 68px;
          border-radius: 50%;
          border: 1px solid rgba(233,229,240,0.1);
        }

        /* Early */
        .k-early { background: #e9e5f0; text-align: center; }
        .k-early h2 {
          font-family: 'Newsreader', serif;
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.02;
          letter-spacing: -0.03em;
          margin: 0 0 24px;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }
        .k-early .k-lead { margin: 0 auto; }

        /* FAQ */
        .k-faq-grid {
          display: grid;
          grid-template-columns: 0.72fr 1.28fr;
          gap: 88px;
        }
        .k-faq h2 {
          font-family: 'Newsreader', serif;
          font-size: clamp(36px, 5vw, 48px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          margin: 0;
        }
        .k-question {
          font-family: 'DM Sans', sans-serif;
          border-top: 1px solid rgba(37,37,58,0.1);
        }
        .k-question summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          padding: 20px 0;
          font-size: 15px;
          line-height: 1.5;
          font-weight: 500;
          cursor: pointer;
          list-style: none;
          color: #25253a;
        }
        .k-question summary::-webkit-details-marker { display: none; }
        .k-question summary::after {
          content: "+";
          font-size: 20px;
          font-weight: 300;
          color: #70699d;
          flex-shrink: 0;
          transition: transform 0.2s ease;
          line-height: 1;
        }
        .k-question[open] summary::after {
          transform: rotate(45deg);
        }
        .k-question-answer {
          font-family: 'DM Sans', sans-serif;
          padding: 0 0 20px;
          font-size: 14px;
          color: #716e7a;
          line-height: 1.65;
          max-width: 560px;
        }

        /* Final CTA */
        .k-final { background: #fffdf9; text-align: center; }
        .k-final h2 {
          font-family: 'Newsreader', serif;
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.02;
          letter-spacing: -0.03em;
          margin: 0 0 24px;
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }
        .k-final .k-lead { margin: 0 auto; }
        .k-final-mark {
          width: 76px;
          height: 76px;
          border-width: 2px;
          margin: 0 auto 40px;
        }

        /* Footer */
        .k-footer {
          border-top: 1px solid rgba(37,37,58,0.1);
          padding: 30px 0;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          color: #716e7a;
          font-size: 12px;
          flex-wrap: wrap;
          align-items: center;
        }

        /* Nav */
        .k-nav {
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }
        .k-nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 500;
          letter-spacing: -0.02em;
          text-decoration: none;
          color: #25253a;
        }
        .k-navlinks {
          display: flex;
          align-items: center;
          gap: 28px;
          color: #716e7a;
          font-size: 13px;
        }
        .k-navlinks a {
          text-decoration: none;
          color: inherit;
          transition: color 0.15s;
        }
        .k-navlinks a:hover { color: #25253a; }

        /* Responsive */
        @media (max-width: 800px) {
          /* Base */
          .k-shell { padding: 0 20px; }
          .k-section { padding: 56px 0; }

          /* Headings — reduz margens para mobile */
          .k-hero h1 { margin-bottom: 20px; }
          .k-problem h2,
          .k-solution h2,
          .k-features h2,
          .k-identity h2,
          .k-audience h2,
          .k-process h2,
          .k-origin h2,
          .k-early h2,
          .k-faq h2,
          .k-final h2 { margin-bottom: 16px; }

          /* Nav */
          .k-nav { height: 60px; }
          .k-navlinks .k-navlink-text { display: none; }

          /* Hero */
          .k-hero-grid {
            grid-template-columns: 1fr;
            padding-top: 44px;
            padding-bottom: 8px;
            min-height: unset;
            gap: 0;
          }
          .k-phone-wrap { display: none; }
          .k-lead { font-size: 15px; }
          .k-actions { flex-direction: column; gap: 10px; margin-top: 24px; }
          .k-actions .k-btn { width: 100%; text-align: center; justify-content: center; }

          /* Problem */
          .k-shell.k-problem-grid { display: block; }
          .k-scatter { display: none; }

          /* Solution */
          .k-shell.k-solution-grid { display: block; }
          .k-gather { display: none; }

          /* Features */
          .k-feature-head { margin-bottom: 32px; }
          .k-feature-head-row { display: block; }
          .k-feature-head .k-lead { margin-top: 12px; max-width: 100%; }
          .k-feature-row {
            grid-template-columns: 1fr;
            gap: 20px;
            padding: 32px 0;
          }
          .k-feature-row:nth-of-type(even) .k-feature-copy { order: 0; }
          .k-feature-copy h3 { font-size: 22px; margin-bottom: 8px; }
          .k-number { margin-bottom: 16px; }
          .k-screen { min-height: 160px; padding: 16px; }

          /* Identity */
          .k-shell.k-identity-grid { display: block; }
          .k-overlap { display: none; }

          /* Audiences */
          .k-audiences { grid-template-columns: 1fr; }
          .k-audience { padding: 40px 20px; }
          .k-audience h2 { font-size: clamp(26px, 6vw, 38px); }

          /* Process */
          .k-step {
            grid-template-columns: 36px 1fr;
            gap: 14px;
            padding: 20px 0;
          }
          .k-step h3 { grid-column: 2; }
          .k-step p { grid-column: 2; margin-top: 4px; }
          .k-steps { margin-top: 32px; }

          /* Origin */
          .k-origin-ring { display: none; }

          /* FAQ */
          .k-shell.k-faq-grid { display: block; }
          .k-faq-grid > div:first-child { margin-bottom: 28px; }

          /* Footer */
          .k-shell.k-footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
            padding-top: 24px;
            padding-bottom: 24px;
          }
        }
      `}</style>

      {/* ── Nav ── */}
      <header style={{ background: "#f7f4ee", position: "sticky", top: 0, zIndex: 50, borderBottom: "1px solid rgba(37,37,58,0.08)" }}>
        <div className="k-shell k-nav">
          <a href="/" className="k-nav-brand">
            <span className="k-mark" aria-hidden="true" />
            <span>kairos</span>
          </a>
          <nav className="k-navlinks">
            <a href="#funciona"><span className="k-navlink-text">Como funciona</span></a>
            <a href="#recursos"><span className="k-navlink-text">Recursos</span></a>
            <a href="#kw-final"><span className="k-navlink-text">Para sua igreja</span></a>
            <a href="#kw-final" className="k-btn" style={{ fontSize: 13, minHeight: 38, padding: "0 18px", color: "#fff"}}>
              Quero conhecer
            </a>
          </nav>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="k-shell k-hero">
        <div className="k-hero-grid">
          <div>
            <span className="k-eyebrow">A casa digital da sua igreja</span>
            <h1>
              Tudo o que sua igreja precisa, em um só{" "}
              <span className="k-italic">app.</span>
            </h1>
            <p className="k-lead">
              Agenda, cultos, pedidos de oração, contribuições e informações importantes reunidos em uma experiência simples, acolhedora e com a identidade da sua igreja.
            </p>
            <div className="k-actions">
              <a href="#kw-final" className="k-btn">Quero conhecer o Kairos</a>
              <a href="#funciona" className="k-btn k-btn-ghost">Ver como funciona</a>
            </div>
          </div>

          <div className="k-phone-wrap" aria-label="Prévia do aplicativo Kairos">
            <span className="k-orbit k-orbit-a" aria-hidden="true" />
            <span className="k-orbit k-orbit-b" aria-hidden="true" />
            <span className="k-orbit k-orbit-c" aria-hidden="true" />
            <div className="k-phone">
              <div className="k-phone-top">
                <span className="k-phone-name">Comunidade</span>
                <span className="k-mark" style={{ width: 22, height: 22, borderWidth: "1.4px" }} aria-hidden="true" />
              </div>
              <div className="k-phone-feature">
                <span className="k-phone-feature-label">Próximo encontro</span>
                <span className="k-phone-feature-title">Culto de celebração</span>
              </div>
              <div className="k-phone-links">
                <div className="k-phone-link">Agenda</div>
                <div className="k-phone-link">Cultos</div>
                <div className="k-phone-link">Oração</div>
                <div className="k-phone-link">Apoie</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Problema ── */}
      <section className="k-problem k-section">
        <div className="k-shell k-problem-grid">
          <div>
            <span className="k-eyebrow">O problema</span>
            <h2>
              Um aviso aqui.<br />
              Um link ali.<br />
              <span className="k-italic">Uma mensagem que se perdeu.</span>
            </h2>
            <p className="k-lead">
              Quando a comunicação está espalhada entre grupos, redes sociais e plataformas diferentes, até uma informação simples pode se perder pelo caminho.
            </p>
          </div>
          <div className="k-scatter" aria-label="Canais de comunicação separados">
            <div className="k-scatter-circle k-sc-1">Avisos</div>
            <div className="k-scatter-circle k-sc-2">Cultos</div>
            <div className="k-scatter-circle k-sc-3">Agenda</div>
            <div className="k-scatter-circle k-sc-4">Links</div>
          </div>
        </div>
      </section>

      {/* ── Solução ── */}
      <section id="funciona" className="k-solution k-section">
        <div className="k-shell k-solution-grid">
          <div className="k-gather" aria-label="Todos os canais reunidos no Kairos">
            <span className="k-gather-ring" aria-hidden="true" />
            <span className="k-gather-o" aria-hidden="true" />
          </div>
          <div>
            <span className="k-eyebrow">Uma casa digital</span>
            <h2>Tudo em um só lugar.</h2>
            <p className="k-lead">
              O Kairos reúne a vida e a comunicação da igreja em uma experiência criada para aproximar pessoas, organizar informações e fortalecer a comunidade durante toda a semana.
            </p>
          </div>
        </div>
      </section>

      {/* ── Recursos ── */}
      <section id="recursos" className="k-features k-section" style={{ borderTop: "1px solid rgba(37,37,58,0.08)" }}>
        <div className="k-shell">
          <div className="k-feature-head">
            <span className="k-eyebrow">Feito para a vida da igreja</span>
            <div className="k-feature-head-row">
              <h2>O que sua comunidade<br />precisa, sempre por perto.</h2>
              <p className="k-lead">
                Recursos essenciais apresentados com linguagem humana e sem excesso de informação.
              </p>
            </div>
          </div>

          <div className="k-feature-row">
            <div className="k-feature-copy">
              <div className="k-number">01</div>
              <h3>Agenda e programação</h3>
              <p>Eventos, encontros e programações organizados em um calendário simples de acompanhar. Cultos, células, eventos especiais — ninguém fica de fora.</p>
            </div>
            <div className="k-screen">
              {/* Mockup: tela de agenda */}
              <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:280}}>
                {/* Card base */}
                <rect width="280" height="200" rx="16" fill="#fffdf9"/>
                {/* Header */}
                <rect x="16" y="16" width="80" height="7" rx="3.5" fill="#25253a" opacity="0.12"/>
                <rect x="16" y="29" width="48" height="5" rx="2.5" fill="#70699d" opacity="0.3"/>
                {/* Divider */}
                <rect x="16" y="46" width="248" height="1" fill="#25253a" opacity="0.07"/>
                {/* Event row 1 — destaque */}
                <rect x="16" y="56" width="4" height="36" rx="2" fill="#70699d"/>
                <rect x="28" y="60" width="100" height="6" rx="3" fill="#25253a" opacity="0.18"/>
                <rect x="28" y="72" width="64" height="5" rx="2.5" fill="#25253a" opacity="0.09"/>
                <rect x="196" y="58" width="52" height="20" rx="10" fill="#e9e5f0"/>
                <rect x="206" y="65" width="32" height="5" rx="2.5" fill="#70699d" opacity="0.6"/>
                {/* Event row 2 */}
                <rect x="16" y="104" width="4" height="30" rx="2" fill="#b87887" opacity="0.5"/>
                <rect x="28" y="108" width="80" height="6" rx="3" fill="#25253a" opacity="0.12"/>
                <rect x="28" y="119" width="52" height="5" rx="2.5" fill="#25253a" opacity="0.07"/>
                {/* Event row 3 */}
                <rect x="16" y="146" width="4" height="30" rx="2" fill="#70699d" opacity="0.3"/>
                <rect x="28" y="150" width="112" height="6" rx="3" fill="#25253a" opacity="0.12"/>
                <rect x="28" y="161" width="68" height="5" rx="2.5" fill="#25253a" opacity="0.07"/>
              </svg>
            </div>
          </div>

          <div className="k-feature-row">
            <div className="k-feature-copy">
              <div className="k-number">02</div>
              <h3>Cultos, conteúdos e playlists</h3>
              <p>Os cultos e conteúdos da igreja reunidos para assistir e compartilhar quando quiser. Playlists de louvor acessíveis diretamente pelo app.</p>
            </div>
            <div className="k-screen">
              {/* Mockup: tela de cultos + playlist */}
              <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:280}}>
                <rect width="280" height="200" rx="16" fill="#fffdf9"/>
                {/* Thumbnail culto */}
                <rect x="16" y="16" width="248" height="96" rx="12" fill="#25253a"/>
                {/* Play button */}
                <circle cx="140" cy="64" r="20" fill="white" opacity="0.12"/>
                <path d="M133 56 L133 72 L149 64 Z" fill="white" opacity="0.7"/>
                {/* Label sobre thumbnail */}
                <rect x="24" y="24" width="48" height="6" rx="3" fill="white" opacity="0.25"/>
                <rect x="24" y="36" width="96" height="8" rx="4" fill="white" opacity="0.55"/>
                {/* Playlist row */}
                <rect x="16" y="124" width="28" height="28" rx="6" fill="#e9e5f0"/>
                <rect x="52" y="128" width="88" height="5" rx="2.5" fill="#25253a" opacity="0.15"/>
                <rect x="52" y="138" width="56" height="4" rx="2" fill="#25253a" opacity="0.08"/>
                <circle cx="256" cy="138" r="10" fill="#e9e5f0"/>
                <path d="M253 134 L253 142 L261 138 Z" fill="#70699d" opacity="0.6"/>
                {/* Playlist row 2 */}
                <rect x="16" y="162" width="28" height="28" rx="6" fill="#f0ede8"/>
                <rect x="52" y="166" width="72" height="5" rx="2.5" fill="#25253a" opacity="0.12"/>
                <rect x="52" y="176" width="48" height="4" rx="2" fill="#25253a" opacity="0.07"/>
              </svg>
            </div>
          </div>

          <div className="k-feature-row">
            <div className="k-feature-copy">
              <div className="k-number">03</div>
              <h3>Oração, contribuições e sobre a igreja</h3>
              <p>Um espaço acolhedor para pedidos de oração. Informações e formas de contribuição organizadas. História, valores e liderança sempre por perto.</p>
            </div>
            <div className="k-screen">
              {/* Mockup: tela de oração */}
              <svg viewBox="0 0 280 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",maxWidth:280}}>
                <rect width="280" height="200" rx="16" fill="#fffdf9"/>
                {/* Header */}
                <rect x="16" y="16" width="72" height="7" rx="3.5" fill="#25253a" opacity="0.12"/>
                <rect x="16" y="29" width="140" height="5" rx="2.5" fill="#25253a" opacity="0.07"/>
                {/* Textarea pedido */}
                <rect x="16" y="48" width="248" height="64" rx="10" fill="#f0ede8"/>
                <rect x="28" y="60" width="160" height="5" rx="2.5" fill="#25253a" opacity="0.1"/>
                <rect x="28" y="71" width="120" height="5" rx="2.5" fill="#25253a" opacity="0.08"/>
                <rect x="28" y="82" width="80" height="5" rx="2.5" fill="#25253a" opacity="0.06"/>
                {/* Botão enviar */}
                <rect x="16" y="124" width="248" height="36" rx="18" fill="#25253a"/>
                <rect x="96" y="138" width="88" height="6" rx="3" fill="white" opacity="0.5"/>
                {/* Pedidos recentes */}
                <rect x="16" y="172" width="6" height="6" rx="3" fill="#70699d" opacity="0.4"/>
                <rect x="28" y="173" width="96" height="5" rx="2.5" fill="#25253a" opacity="0.1"/>
                <rect x="200" y="173" width="48" height="5" rx="2.5" fill="#25253a" opacity="0.06"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ── Identidade ── */}
      <section className="k-identity k-section">
        <div className="k-shell k-identity-grid">
          <div>
            <span className="k-eyebrow">Nenhuma igreja é igual à outra</span>
            <h2>
              Sua igreja.<br />
              Sua identidade.<br />
              <span className="k-italic">Sua comunidade.</span>
            </h2>
            <p className="k-lead">
              Nome, cores, conteúdos e informações organizados em uma experiência que representa a história da sua comunidade. O Kairos se adapta à sua igreja — não o contrário.
            </p>
          </div>
          <div className="k-overlap" aria-label="Kairos e sua igreja se encontram">
            <div className="k-overlap-circle k-overlap-a">Kairos</div>
            <div className="k-overlap-circle k-overlap-b">Sua igreja</div>
          </div>
        </div>
      </section>

      {/* ── Duas perspectivas ── */}
      <section className="k-section" style={{ padding: 0 }}>
      <div className="k-shell" style={{ padding: 0 }}>
      <div className="k-audiences">
        <div className="k-audience">
          <span className="k-eyebrow">Para quem cuida</span>
          <h2>Mais clareza para comunicar.</h2>
          <ul>
            <li>Informações centralizadas</li>
            <li>Conteúdos organizados</li>
            <li>Um canal próprio para a comunidade</li>
          </ul>
        </div>
        <div className="k-audience">
          <span className="k-eyebrow">Para quem participa</span>
          <h2>Mais facilidade para estar perto.</h2>
          <ul>
            <li>Agenda e cultos em poucos toques</li>
            <li>Pedidos de oração acolhidos</li>
            <li>Informações sempre por perto</li>
          </ul>
        </div>
      </div>
      </div>
      </section>

      {/* ── Como funciona ── */}
      <section className="k-process k-section">
        <div className="k-shell">
          <span className="k-eyebrow">Como funciona</span>
          <h2>Do primeiro encontro<br />à casa digital da sua igreja.</h2>
          <div className="k-steps">
            {[
              ["01", "Conhecemos", "Conversamos para entender a identidade, a rotina e as necessidades da sua igreja."],
              ["02", "Personalizamos", "Aplicamos nome, cores, conteúdos e informações para criar uma experiência própria."],
              ["03", "Organizamos", "Configuramos as áreas do Kairos e preparamos a estrutura para a sua comunidade."],
              ["04", "Crescemos juntos", "Acompanhamos essa nova etapa e evoluímos o produto a partir de necessidades reais."],
            ].map(([num, title, desc]) => (
              <div className="k-step" key={num}>
                <span className="k-step-num">{num}</span>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Origem ── */}
      <section className="k-origin k-section">
        <div className="k-shell" style={{ position: "relative" }}>
          <span className="k-origin-ring" aria-hidden="true" />
          <span className="k-eyebrow">Um produto que nasceu de perto</span>
          <h2>
            O Kairos nasceu de uma{" "}
            <span className="k-italic">necessidade real.</span>
          </h2>
          <p className="k-lead">
            Dentro de uma igreja, percebemos como avisos, cultos, eventos e informações importantes acabavam espalhados por diferentes canais. O Kairos começou como uma forma de reunir tudo isso em um espaço mais simples, próximo e humano. Porque tecnologia só faz sentido quando ajuda pessoas a se encontrarem.
          </p>
        </div>
      </section>

      {/* ── Early adopter ── */}
      <section className="k-early k-section">
        <div className="k-shell">
          <span className="k-eyebrow">Uma nova etapa</span>
          <h2>As primeiras igrejas farão parte dessa história.</h2>
          <p className="k-lead">
            Queremos construir essa etapa ao lado de comunidades que acreditam em uma comunicação mais próxima, organizada e humana. Mais do que receber uma plataforma — participar da evolução do produto.
          </p>
          <div style={{ marginTop: 28 }}>
            <a href="#kw-final" className="k-btn">Quero conhecer o Kairos</a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="k-faq k-section" style={{ borderTop: "1px solid rgba(37,37,58,0.08)" }}>
        <div className="k-shell k-faq-grid">
          <div>
            <span className="k-eyebrow">Dúvidas frequentes</span>
            <h2>Antes de começarmos.</h2>
          </div>
          <div>
            {[
              ["O Kairos é personalizado para cada igreja?", "Sim. Nome, identidade visual, conteúdos e informações são organizados para que a experiência represente a igreja e sua comunidade."],
              ["O Kairos é um sistema de gestão?", "Neste primeiro momento, o Kairos é uma casa digital voltada à comunicação, aos conteúdos e à vida da comunidade. Recursos administrativos poderão ser desenvolvidos em etapas futuras."],
              ["O Kairos processa contribuições?", "Não. O Kairos organiza e facilita o acesso às informações e formas de contribuição disponibilizadas pela própria igreja."],
              ["Quem atualiza os conteúdos?", "A forma de atualização é definida durante a configuração, considerando a estrutura e a rotina de cada igreja."],
              ["O Kairos já está disponível?", "O produto está entrando em uma nova etapa de desenvolvimento e aproximação com as primeiras igrejas interessadas. Entre em contato para conhecer o projeto e entender os próximos passos."],
              ["Quanto custa?", "O modelo e as condições são conversados individualmente — igrejas que entrarem agora têm condições especiais de lançamento. Entre em contato para saber mais."],
            ].map(([q, a]) => (
              <details key={q} className="k-question">
                <summary>{q}</summary>
                <p className="k-question-answer">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <section id="kw-final" className="k-final k-section">
        <div className="k-shell">
          <div className="k-mark k-final-mark" aria-hidden="true" />
          <span className="k-eyebrow">Um novo tempo para a comunicação</span>
          <h2>Vamos construir a casa digital da sua igreja?</h2>
          <p className="k-lead">
            Conte um pouco sobre sua comunidade e descubra como o Kairos pode aproximar pessoas, organizar informações e fortalecer conexões.
          </p>
          <div className="k-actions" style={{ justifyContent: "center", marginTop: 32 }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="k-btn"
            >
              Falar sobre minha igreja
            </a>
          </div>
          <p style={{ marginTop: 16, fontSize: 13, color: "#9b98a8" }}>
            Sem compromisso. Vamos começar com uma conversa.
          </p>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer>
        <div className="k-shell k-footer">
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <span className="k-mark" style={{ width: 22, height: 22, borderWidth: "1.4px" }} aria-hidden="true" />
            <span>kairos</span>
          </div>
          <span>A casa digital da sua igreja.</span>
          <span>
            Um produto{" "}
            <a href="/" style={{ color: "#25253a", textDecoration: "none", fontWeight: 500 }}>
              Flow Labs
            </a>{" "}
            · 2026
          </span>
        </div>
      </footer>
    </main>
  );
}
