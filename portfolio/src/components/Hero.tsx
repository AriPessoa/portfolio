export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 sm:pt-32 lg:px-8 flex flex-col items-center text-center">
      <span className="rounded-full bg-sky-500/10 px-3 py-1 text-sm font-medium text-sky-400 ring-1 ring-sky-500/20 mb-8">
        Disponível para novos projetos
      </span>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Olá, eu sou <span className="text-sky-400">Ariane</span>
      </h1>
      <p className="mt-6 text-lg text-slate-400 max-w-2xl">
        Desenvolvedora Front-end especializada em Angular e TypeScript.
      </p>
    </section>
  );
}