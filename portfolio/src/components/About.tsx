import { Chip, Tooltip, Zoom } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import TerminalIcon from '@mui/icons-material/Terminal';
import { use, useEffect, useState } from 'react';
import api from '../services/api';
import { SiFigma, SiGit, SiPostman, SiVsco } from 'react-icons/si';

interface Profile {
  name: string;
  bio: string;
  stacksAdvanced: { stack: string; level: string }[];
  stacksBasics: { stack: string; level: string }[];
}

export function About() {
  const [profile, setProfile] = useState<Profile | null>(null);

  const tools = [
    { name: 'Figma', icon: <SiFigma />, color: 'text-white' },
    { name: 'Git', icon: <SiGit />, color: 'text-white' },
    { name: 'Postman', icon: <SiPostman />, color: 'text-white' },
    { name: 'VS Code', icon: <SiVsco />, color: 'text-white' },
  ];

  console.log(api.get('/profile'));

  useEffect(() => {
    console.log('Fetching profile from API...');
    api.get('/profile').then(response => response.data)
      .then(data => {
        console.log('Profile data received:', data);
        setProfile(data);
      })
      .catch(err => console.error("Erro ao buscar perfil:", err));
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-24 bg-slate-800/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Sobre mim</h2>
            <p className="text-slate-400 leading-relaxed italic border-l-4 border-sky-400 pl-4">
              "Foco no funcional para viabilizar o encantador."
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              {profile.bio}
            </p>
            <button
              onClick={() => window.open("/curriculo.pdf", "_blank")}
              className="mt-8 rounded-lg border border-sky-400 px-6 py-2 text-sky-400 hover:bg-sky-400 hover:text-white transition-all shadow-lg shadow-sky-400/10"
            >
              Baixar Currículo (PDF)
            </button>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <CodeIcon className="text-sky-400" /> Intermediário / Avançado
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.stacksAdvanced.map((stack) => (
                  <Tooltip key={stack.stack} title={stack.level} arrow TransitionComponent={Zoom}>
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
                {profile.stacksBasics.map((stack) => (
                  <Tooltip key={stack.stack} title={stack.level} arrow TransitionComponent={Zoom}>
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
          </div>

          {/* <div>
            <div className="grid grid-cols-4 grid-rows-2 gap-4">
              <div className="col-span-2 row-span-2 bg-slate-800 p-6 rounded-2xl">
              </div>
              <div className="bg-slate-800 p-4 rounded-2xl flex items-center justify-center">
                <Tooltip title="Figma"><SiFigma size={32} /></Tooltip>
              </div>
              <div className="bg-slate-800 p-4 rounded-2xl flex items-center justify-center">
                <Tooltip title="Git"><SiGit size={32} /></Tooltip>
              </div>
            </div>
          </div> */}

          {/* <div className="flex gap-4">
            {tools.map((tool) => (
              <Tooltip title={tool.name} key={tool.name} arrow>
                <div className="w-32 h-24 bg-slate-800/40 border border-white/5 rounded-[2rem] flex items-center justify-center hover:bg-slate-700/50 transition-all cursor-pointer group">
                  <span className={`text-4xl ${tool.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                    {tool.icon}
                  </span>
                </div>
              </Tooltip>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
}