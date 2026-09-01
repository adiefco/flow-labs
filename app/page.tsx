import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Sites e landing pages",
    description: "Presença digital com clareza, velocidade e intenção.",
  },
  {
    number: "02",
    title: "Aplicativos",
    description: "Apps pensados para uso real, com foco em experiência e evolução.",
  },
  {
    number: "03",
    title: "Plataformas e sistemas",
    description: "Sistemas sob medida para negócios e comunidades que precisam escalar.",
  },
  {
    number: "04",
    title: "E-commerce",
    description: "Lojas e interfaces digitais com foco em performance e conversão.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <p className="text-sm font-medium uppercase tracking-[0.35em]">
          Flow Labs
        </p>

        <a
          href="mailto:oi@flow-labs.digital"
          className="text-sm text-zinc-500 transition hover:text-zinc-950"
        >
          oi@flow-labs.digital
        </a>
      </header>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-10 md:pb-32 md:pt-16">
        <p className="mb-8 text-sm uppercase tracking-[0.35em] text-zinc-400">
          Estúdio de produtos digitais
        </p>

        <h1 className="max-w-6xl text-6xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-8xl">
          Ideias que merecem ganhar vida. Produtos que merecem existir.
        </h1>

        <div className="mt-12 grid gap-10 border-t border-zinc-200 pt-10 md:grid-cols-[1fr_420px]">
          <p className="max-w-3xl text-xl leading-9 text-zinc-600">
            A Flow Labs cria sites, aplicativos, plataformas e experiências
            digitais para marcas, comunidades e ideias em movimento.
          </p>

          <div className="text-sm leading-7 text-zinc-500">
            <p>Design estratégico</p>
            <p>Tecnologia sob medida</p>
            <p>Produtos digitais</p>
            <p>Experiências humanas</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <a
            href="#trabalhos"
            className="inline-flex w-fit rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Ver nossos trabalhos
          </a>

          <a
            href="mailto:oi@flow-labs.digital"
            className="inline-flex w-fit rounded-full border border-zinc-300 px-6 py-3 text-sm font-medium transition hover:bg-zinc-50"
          >
            Entrar em contato
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-400">
              O que fazemos
            </p>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Construímos do conceito ao lançamento.
            </h2>
          </div>

          <p className="max-w-md text-zinc-500">
            Sem ruído, sem excesso. Produtos digitais com intenção, técnica e
            cuidado.
          </p>
        </div>

        <div className="divide-y divide-zinc-200 border-y border-zinc-200">
          {services.map((service) => (
            <div
              key={service.title}
              className="grid gap-6 py-8 md:grid-cols-[120px_1fr_1.2fr] md:items-center"
            >
              <p className="text-sm text-zinc-400">{service.number}</p>

              <h3 className="text-2xl font-semibold tracking-tight">
                {service.title}
              </h3>

              <p className="max-w-2xl text-zinc-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="trabalhos" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 border-t border-zinc-200 pt-14">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
            Trabalhos
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Kairos */}
          <Link
            href="/kairos"
            className="group flex flex-col rounded-3xl bg-[#f0f7ff] p-8 transition hover:bg-[#e4f0fc] md:p-10"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-[#7d9fc2]">
              Produto próprio
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
              Kairos
            </h2>

            <p className="mt-4 max-w-sm text-zinc-500">
              A casa digital da sua igreja. Agenda, cultos, pedidos de oração e
              comunicação em um só app.
            </p>

            <p className="mt-8 text-sm font-medium text-zinc-400 transition group-hover:text-zinc-700">
              Conhecer produto →
            </p>
          </Link>

          {/* Slot */}
          <div className="flex flex-col rounded-3xl border border-dashed border-zinc-300 p-8 md:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-300">
              Em breve
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-200 md:text-5xl">
              Próximo projeto
            </h2>

            <p className="mt-4 max-w-sm text-zinc-400">
              Tem uma ideia que merece ganhar vida?{" "}
              <a
                href="mailto:oi@flow-labs.digital"
                className="text-zinc-600 underline underline-offset-4 hover:text-zinc-950"
              >
                Fale com a gente.
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-950 px-6 py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Manifesto
          </p>

          <h2 className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Não acreditamos em tecnologia pela tecnologia.
          </h2>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-400">
            Acreditamos em produtos digitais que resolvem problemas reais, criam
            conexão e fazem sentido para as pessoas.
          </p>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 text-sm text-zinc-500 md:flex-row md:items-center md:justify-between">
        <p>Flow Labs © 2026</p>

        <div className="flex flex-col gap-2 md:flex-row md:gap-6">
          <a href="mailto:oi@flow-labs.digital" className="hover:text-zinc-950">
            oi@flow-labs.digital
          </a>
        </div>
      </footer>
    </main>
  );
}