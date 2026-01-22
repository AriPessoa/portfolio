export function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-2xl font-bold text-white mb-6">Vamos conversar?</h2>
        <div className="flex justify-center gap-8">
          <a href="mailto:email@exemplo.com" className="text-slate-400 hover:text-sky-400 transition-colors">E-mail</a>
          <a href="https://linkedin.com/in/seu-user" className="text-slate-400 hover:text-sky-400 transition-colors">LinkedIn</a>
          <a href="https://github.com/seu-user" className="text-slate-400 hover:text-sky-400 transition-colors">GitHub</a>
        </div>
        <p className="mt-8 text-sm text-slate-500">© 2026 - Feito com React & Tailwind</p>
      </div>
    </footer>
  );
}   