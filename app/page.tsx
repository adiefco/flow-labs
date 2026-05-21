import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
          Flow Labs
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">
          Estúdio de produtos digitais.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
          Criamos experiências digitais com design, tecnologia e propósito.
          Estamos construindo produtos próprios e soluções para marcas,
          comunidades e negócios.
        </p>

        <div className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 text-left shadow-sm">
          <p className="text-sm font-medium text-zinc-500">Produto em destaque</p>
          <h2 className="mt-2 text-2xl font-semibold">Kairos</h2>
          <p className="mt-2 max-w-xl text-zinc-600">
            A casa digital da sua igreja.
          </p>

          <Link
            href="/kairos"
            className="mt-6 inline-flex rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Conhecer o Kairos
          </Link>
        </div>
      </section>
    </main>
  );
}