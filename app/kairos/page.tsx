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

const testimonials = [
  {
    quote: "O Kairos transformou como nos comunicamos com a congregação. Tudo ficou mais simples.",
    name: "Pr. Rafael Silva",
    church: "Igreja Renovação, RJ",
  },
  {
    quote: "Nossa comunidade aderiu muito rápido. A experiência é realmente acolhedora.",
    name: "Rebeca Almeida",
    church: "Comunidade Vida Nova, SP",
  },
  {
    quote: "Reduziu o WhatsApp desordenado e centralizou tudo. Recomendo demais.",
    name: "Diácono Carlos Melo",
    church: "Igreja Restauração, MG",
  },
];

export default function KairosPage() {
  return (
    <main className="min-h-screen bg-[#fbfcff] text-zinc-900">

      {/* ── Header sticky com blur ── */}
      <header className="sticky top-0 z-50 border-b border-zinc-100 bg-[#fbfcff]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="/" className="text-sm font-semibold text-zinc-800 transition hover:text-zinc-500">
            Flow Labs
          </a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-zinc-500 md:flex">
            <a href="#funcionalidades" className="transition hover:text-zinc-900">Funcionalidades</a>
            <a href="#como-funciona" className="transition hover:text-zinc-900">Como funciona</a>
          </nav>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
          >
            Solicitar demo
          </a>
        </div>
      </header>

      {/* ── Hero ── */}
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <span className="mb-4 inline-block rounded-full bg-[#dcecff] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#4a7ab5]">
            Kairos
          </span>

          <h1 className="max-w-xl text-5xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
            Tudo o que sua igreja precisa,{" "}
            <span className="text-[#7d8fb3]">em um só app.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-zinc-500">
            Centralize agenda, cultos, pedidos de oração, doações e comunicação
            da comunidade em uma experiência simples e acolhedora.
          </p>

          {/* Social proof inline */}
          <p className="mt-4 text-sm text-zinc-400">
            ✦ Usado por igrejas em todo o Brasil
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-zinc-900 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-md transition hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
            >
              Solicitar demonstração →
            </a>

            <a
              href="#funcionalidades"
              className="rounded-full border border-zinc-200 bg-white px-6 py-3.5 text-center text-sm font-semibold text-zinc-600 transition hover:border-zinc-300 hover:bg-zinc-50"
            >
              Conhecer o app
            </a>
          </div>
        </div>

        {/* Mock do app — mais detalhado */}
        <div className="rounded-[2rem] border border-zinc-200 bg-white p-5 shadow-lg">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-[#dcecff] via-white to-[#eee7ff] p-5">
            <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">

              {/* Status bar simulado */}
              <div className="mb-4 flex items-center justify-between">
                <div className="h-2 w-16 rounded-full bg-zinc-100" />
                <div className="h-2 w-8 rounded-full bg-[#8fb8e8]/50" />
              </div>

              <p className="text-xs font-medium uppercase tracking-widest text-zinc-400">
                Hoje na igreja
              </p>
              <h2 className="mt-1 text-xl font-semibold">Culto de Celebração</h2>
              <p className="mt-1 text-xs text-zinc-500">Domingo, 18h • Ao vivo</p>

              {/* Live badge */}
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-red-50 px-2.5 py-1 text-xs font-semibold text-red-500">
                <span className="h-1.5 w-1.5 rounded-full bg-red-500" aria-hidden="true" />
                Transmitindo agora
              </span>

              <div className="mt-5 grid gap-2.5">
                {[
                  { label: "Agenda do mês", icon: "📅" },
                  { label: "Últimos cultos", icon: "🎥" },
                  { label: "Pedido de oração", icon: "🙏" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 rounded-2xl border border-zinc-100 bg-zinc-50 p-3.5 text-sm font-medium"
                  >
                    <span aria-hidden="true">{item.icon}</span>
                    {item.label}
                    <span className="ml-auto text-zinc-300">›</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pain point ── */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="rounded-[2rem] bg-zinc-900 p-8 text-white md:p-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-zinc-400">
            O problema
          </p>
          <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
            Sua igreja está espalhada?
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-zinc-300">
            Avisos no WhatsApp, agenda no Instagram, cultos no YouTube e links
            importantes difíceis de encontrar. O Kairos reúne tudo em um só lugar.
          </p>

          {/* Comparativo visual */}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-700 bg-zinc-800 p-5">
              <p className="mb-3 text-sm font-semibold text-red-400">❌ Sem o Kairos</p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>• WhatsApp lotado de avisos</li>
                <li>• Links perdidos em stories</li>
                <li>• Membros desinformados</li>
                <li>• Baixo engajamento semanal</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-zinc-600 bg-zinc-800 p-5">
              <p className="mb-3 text-sm font-semibold text-green-400">✓ Com o Kairos</p>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>• Tudo centralizado no app</li>
                <li>• Comunicação clara e direta</li>
                <li>• Comunidade sempre conectada</li>
                <li>• Engajamento além do culto</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Funcionalidades ── */}
      <section id="funcionalidades" className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#7d8fb3]">
            Funcionalidades
          </p>
          <h2 className="text-4xl font-semibold tracking-tight">
            Tudo o que sua comunidade precisa.
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-500">
            Uma experiência simples e moderna para aproximar pessoas da sua
            igreja durante toda a semana.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {features.map(([icon, title, description]) => (
            <div
              key={title}
              className="group rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:border-[#8fb8e8] hover:shadow-md"
            >
              <div className="text-3xl" aria-hidden="true">{icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Benefícios ── */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#7d8fb3]">
              Benefícios
            </p>
            <h2 className="text-4xl font-semibold tracking-tight">
              Mais conexão. Mais comunidade.
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-500">
              O Kairos ajuda igrejas a centralizar comunicação, fortalecer
              o engajamento e manter a comunidade próxima além dos encontros.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              ["💬", "Comunicação centralizada"],
              ["📲", "Acesso fácil aos conteúdos"],
              ["🤝", "Mais proximidade durante a semana"],
              ["🌟", "Experiência moderna para membros e visitantes"],
            ].map(([icon, benefit]) => (
              <div
                key={benefit}
                className="flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-5 font-medium shadow-sm"
              >
                <span className="text-xl" aria-hidden="true">{icon}</span>
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Como funciona ── */}
      <section id="como-funciona" className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#7d8fb3]">
            Processo
          </p>
          <h2 className="text-4xl font-semibold tracking-tight">Como funciona</h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-zinc-500">
            Do primeiro contato até a sua comunidade usando o app, em poucos dias.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[
            ["01", "Personalizamos", "Ajustamos nome, identidade, links e conteúdos da sua igreja."],
            ["02", "Configuramos", "Organizamos agenda, cultos, playlists, doações e páginas."],
            ["03", "Sua igreja usa", "A comunidade acessa tudo em poucos toques."],
          ].map(([number, title, text]) => (
            <div
              key={number}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm font-bold text-[#8fb8e8]">{number}</p>
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Depoimentos ── */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#7d8fb3]">
            Depoimentos
          </p>
          <h2 className="text-3xl font-semibold tracking-tight">
            O que as igrejas dizem
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map(({ quote, name, church }) => (
            <div
              key={name}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <p className="text-sm leading-7 text-zinc-600">"{quote}"</p>
              <div className="mt-5 border-t border-zinc-100 pt-4">
                <p className="text-sm font-semibold">{name}</p>
                <p className="text-xs text-zinc-400">{church}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] bg-gradient-to-br from-[#dcecff] to-[#eee7ff] p-8 text-center md:p-14">
          <h2 className="text-4xl font-semibold tracking-tight">
            Vamos construir a casa digital da sua igreja?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-zinc-600">
            Fale com a gente e descubra como o Kairos pode fortalecer
            a conexão da sua comunidade.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
          >
            Falar no WhatsApp →
          </a>

          <p className="mt-4 text-xs text-zinc-400">
            Sem compromisso. Respondemos em até 24h.
          </p>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between">
        <p>Kairos © 2026</p>
        <p>
          Construído com propósito pela{" "}
          <a href="/" className="font-medium text-zinc-600 hover:underline">
            Flow Labs
          </a>
          .
        </p>
      </footer>
    </main>
  );
}