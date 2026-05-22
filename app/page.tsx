import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Apps",
    description: "Aplicativos digitais pensados para uso real, clareza e evolução.",
  },
  {
    number: "02",
    title: "Plataformas",
    description: "Sistemas e experiências sob medida para negócios e comunidades.",
  },
  {
    number: "03",
    title: "E-commerce",
    description: "Lojas e interfaces digitais com foco em performance e conversão.",
  },
  {
    number: "04",
    title: "Produtos próprios",
    description: "Ideias internas transformadas em produtos digitais escaláveis.",
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

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <p className="mb-8 text-sm uppercase tracking-[0.35em] text-zinc-400">
          Estúdio de produtos digitais
        </p>

        <h1 className="max-w-6xl text-6xl font-semibold leading-[0.95] tracking-[-0.04em] md:text-8xl">
          Ideias que merecem ganhar vida. Produtos que merecem existir.
        </h1>

        <div className="mt-12 grid gap-10 border-t border-zinc-200 pt-10 md:grid-cols-[1fr_420px]">
          <p className="max-w-3xl text-xl leading-9 text-zinc-600">
            A Flow Labs cria apps, plataformas, e-commerces e experiências
            digitais para marcas, comunidades e ideias em movimento.
          </p>

          <div className="text-sm leading-7 text-zinc-500">
            <p>Design estratégico</p>
            <p>Desenvolvimento front-end</p>
            <p>Produtos digitais</p>
            <p>Experiências humanas</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/kairos"
            className="inline-flex w-fit rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Conhecer o Kairos
          </Link>

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

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-10 border-t border-zinc-200 pt-14 md:grid-cols-[280px_1fr]">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
            Produto em destaque
          </p>

          <div>
            <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
              Kairos
            </h2>

            <p className="mt-6 max-w-2xl text-xl leading-9 text-zinc-600">
              A casa digital da sua igreja. Um aplicativo moderno para
              fortalecer comunidade, centralizar comunicação e aproximar pessoas.
            </p>

            <Link
              href="/kairos"
              className="mt-8 inline-flex rounded-full bg-zinc-950 px-6 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
            >
              Conhecer produto
            </Link>
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