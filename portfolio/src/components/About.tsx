// export function About() {
// const stacksAdvanced = ["Angular", "TypeScript", "JavaScript", "HTML", "CSS", "SCSS"];
// // const stacksIntermediate = ["React", "JavaScript", "HTML", "CSS", ];
// const stacksBasics = ["React", "C#", "SQL", "Figma", "Tailwind"];


//   return (
//     <section className="py-24 bg-slate-800/50">
//       <div className="mx-auto max-w-7xl px-6 lg:px-8">
//         <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
//           <div>
//             <h2 className="text-3xl font-bold text-white mb-6">Sobre mim</h2>
//             <p className="text-slate-400 leading-relaxed">
//               Sou uma desenvolvedora front-end apaixonada por criar experiências digitais incríveis. Com experiência em Angular e TypeScript, adoro transformar ideias em realidade através do código. Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente. Esse é um deles, para praticar meus conhecimentos em React, decidi criar esse portfólio.
//             </p>
//             <button 
//               onClick={() => window.open("/curriculo.pdf", "_blank")}
//               className="inline-block mt-8 rounded-lg border border-sky-400 px-6 py-2 text-sky-400 hover:bg-sky-400 hover:text-white transition-all"
//             >
//               Baixar Currículo (PDF)
//             </button>
//           </div>
          
//           <div>
//             <h3 className="text-xl font-semibold text-white mb-6">Minhas Stacks</h3>
//             <div className="flex flex-wrap gap-3">
//                 <span className="w-full text-slate-300 font-medium mb-2">Intermediário/Avançado:</span>
//               {stacksAdvanced.map((stack) => (
//                 <span key={stack} className="px-4 py-2 bg-slate-900 rounded-md text-slate-300 border border-slate-700">
//                   {stack}
//                 </span>
//               ))}
//               <span className="w-full text-slate-300 font-medium mb-2">Básico:</span>
//               {stacksBasics.map((stack) => (
//                 <span key={stack} className="px-4 py-2 bg-slate-900 rounded-md text-slate-300 border border-slate-700">
//                   {stack}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { Chip, Tooltip, Zoom } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';

export function About() {
  const stacksAdvanced = [{ stack: "Angular", tooltip: "Domínio Avançado" }, { stack: "TypeScript", tooltip: "Domínio Avançado" }, { stack: "JavaScript", tooltip: "Domínio Básico/Intermediário" }, { stack: "HTML", tooltip: "Domínio Avançado" }, { stack: "CSS", tooltip: "Domínio Intermediário" }, { stack: "SCSS", tooltip: "Domínio Intermediário" },
    { stack: "Angular Material", tooltip: "Domínio Intermediário" }, { stack: "Bootstrap", tooltip: "Domínio Intermediário" }
  ];
  const stacksBasics = [{ stack: "React", tooltip: "Em Aprendizado" }, { stack: "C#", tooltip: "Em Aprendizado" }, { stack: "SQL", tooltip: "Em Aprendizado" }, { stack: "Figma", tooltip: "Em Aprendizado" }, { stack: "Tailwind", tooltip: "Em Aprendizado" }];

  return (
    <section className="py-24 bg-slate-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Lado Esquerdo: Texto */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Sobre mim</h2>
            <p className="text-slate-400 leading-relaxed italic border-l-4 border-sky-400 pl-4">
              "Transformando a complexidade do Angular na agilidade do React."
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Sou uma desenvolvedora front-end apaixonada por criar experiências digitais incríveis. Com experiência em Angular e TypeScript, adoro transformar ideias em realidade através do código. Estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente. Esse é um deles, para praticar meus conhecimentos em React, decidi criar esse portfólio.
            </p>
            <button 
              onClick={() => window.open("/curriculo.pdf", "_blank")}
              className="mt-8 rounded-lg border border-sky-400 px-6 py-2 text-sky-400 hover:bg-sky-400 hover:text-white transition-all shadow-lg shadow-sky-400/10"
            >
              Baixar Currículo (PDF)
            </button>
          </div>
          
          {/* Lado Direito: Stacks com MUI */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <CodeIcon className="text-sky-400" /> Intermediário / Avançado
              </h3>
              <div className="flex flex-wrap gap-2">
                {stacksAdvanced.map((stack) => (
                  <Tooltip key={stack.stack} title={stack.tooltip} arrow TransitionComponent={Zoom}>
                    <Chip
                      label={stack.stack}
                      className="!bg-slate-900 !text-slate-300 !border-slate-700 !py-5 hover:!border-sky-400 transition-colors"
                      variant="outlined"
                      clickable
                    />
                  </Tooltip>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <TerminalIcon className="text-amber-400" /> Em Aprendizado / Básico
              </h3>
              <div className="flex flex-wrap gap-2">
                {stacksBasics.map((stack) => (
                  <Chip 
                    key={stack.stack}
                    label={stack.stack}
                    size="small"
                    variant="outlined"
                    className="!bg-slate-900/50 !text-slate-400 !border-slate-800"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}