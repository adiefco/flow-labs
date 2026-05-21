const whatsappUrl =
  process.env.NEXT_PUBLIC_WHATSAPP_URL ||
  "https://wa.me/5521982233201?text=Ol%C3%A1!%20Tenho%20interesse%20em%20conhecer%20o%20Kairos.";

const features = [
  ["📅", "Agenda", "Eventos organizados, atualizados e com detalhes completos."],
  ["🎥", "Cultos", "Integração automática com os últimos cultos do YouTube."],
  ["🎵", "Playlist", "Spotify integrado para louvores e playlists da igreja."],
  ["🙏", "Pedidos de oração", "Um canal simples e acolhedor para pedidos da comunidade."],
  ["💛", "Doações", "Pix e formas de contribuição acessíveis em poucos toques."],
  ["🏛️", "Institucional", "Quem somos, equipe, projetos, valores e contato."],
];

export default function KairosPage() {
  return (
    <main className="min-h-screen bg-[#fbfcff] text-zinc-900">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="text-sm font-medium text-zinc-500">
          Flow Labs
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-zinc-700"
        >
          Solicitar demo
        </a>
      </header>

      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-[#7d8fb3]">
            Kairos
          </p>

          <h1 className="max-w-xl text-5xl font-semibold tracking-tight md:text-7xl">
            A casa digital da sua igreja.
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600">
            Conecte fé, comunidade e propósito em um só lugar — com agenda,
            cultos, pedidos de oração, conteúdo, doações e muito mais.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#8fb8e8] px-6 py-3 text-center text-sm font-semibold text-zinc-900 transition hover:opacity-90"
            >
              Solicitar demonstração
            </a>

            <a
              href="#funcionalidades"
              className="rounded-full border border-zinc-300 px-6 py-3 text-center text-sm font-semibold transition hover:bg-white"
            >
              Conhecer o app
            </a>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white bg-white/70 p-6 shadow-xl shadow-blue-100/60">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-[#dcecff] via-white to-[#eee7ff] p-6">
            <div className="rounded-[2rem] bg-white p-5 shadow-sm">
              <p className="text-sm text-zinc-500">Hoje na igreja</p>
              <h2 className="mt-2 text-2xl font-semibold">Culto de Celebração</h2>
              <p className="mt-2 text-sm text-zinc-600">
                Domingo, 18h • Transmissão ao vivo
              </p>

              <div className="mt-6 grid gap-3">
                {["Agenda do mês", "Últimos cultos", "Pedido de oração"].map(
                  (item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-zinc-100 bg-zinc-50 p-4 text-sm font-medium"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] bg-zinc-900 p-8 text-white md:p-12">
          <h2 className="text-3xl font-semibold md:text-5xl">
            Sua igreja está espalhada?
          </h2>

          <p className="mt-5 max-w-3xl text-zinc-300">
            Avisos no WhatsApp, agenda no Instagram, cultos no YouTube e links
            importantes difíceis de encontrar. O Kairos reúne tudo em um só lugar.
          </p>
        </div>
      </section>

      <section id="funcionalidades" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-semibold tracking-tight">
            Tudo o que sua comunidade precisa, em um só lugar.
          </h2>

          <p className="mt-4 text-lg leading-8 text-zinc-600">
            Uma experiência simples, acolhedora e moderna para aproximar pessoas
            da sua igreja durante toda a semana.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {features.map(([icon, title, description]) => (
            <div
              key={title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="text-3xl">{icon}</div>
              <h3 className="mt-5 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight">
              Mais conexão. Mais comunidade.
            </h2>

            <p className="mt-4 text-lg leading-8 text-zinc-600">
              O Kairos ajuda igrejas a centralizar comunicação, fortalecer o
              engajamento e manter a comunidade próxima além dos encontros
              presenciais.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Comunicação centralizada",
              "Acesso fácil aos conteúdos",
              "Mais proximidade durante a semana",
              "Experiência moderna para membros e visitantes",
            ].map((benefit) => (
              <div
                key={benefit}
                className="rounded-2xl border border-zinc-200 bg-white p-5 font-medium shadow-sm"
              >
                ✨ {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-center text-4xl font-semibold tracking-tight">
          Como funciona
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["01", "Personalizamos", "Ajustamos nome, identidade, links e conteúdos da igreja."],
            ["02", "Configuramos", "Organizamos agenda, cultos, playlists, doações e páginas."],
            ["03", "Sua igreja usa", "A comunidade acessa tudo em poucos toques."],
          ].map(([number, title, text]) => (
            <div key={number} className="rounded-3xl bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold text-[#8fb8e8]">{number}</p>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#dcecff] to-[#eee7ff] p-8 text-center md:p-14">
          <h2 className="text-4xl font-semibold tracking-tight">
            Vamos construir a casa digital da sua igreja?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-zinc-600">
          Descubra como o Kairos pode fortalecer a conexão da sua comunidade.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-700"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>Kairos © 2026</p>
        <p>Construído com propósito pela Flow Labs.</p>
      </footer>
    </main>
  );
}