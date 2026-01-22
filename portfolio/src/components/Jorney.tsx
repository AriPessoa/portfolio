import { 
  Timeline, 
  TimelineItem, 
  TimelineSeparator, 
  TimelineConnector, 
  TimelineContent, 
  TimelineDot,
  TimelineOppositeContent
} from '@mui/lab';
import { Typography } from '@mui/material';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import SchoolIcon from '@mui/icons-material/School';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export function Jorney() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Minha Jornada</h2>
        
        <Timeline position="alternate">
          
          {/* Item 1 - Início */}
          <TimelineItem>
            <TimelineOppositeContent className="text-slate-500 py-3">
              2018 -2019
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <SchoolIcon fontSize="small" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="py-3 px-4">
              <Typography variant="h6" component="span" className="text-sky-400 font-bold">
                Estagiária em Desenvolvimento Front-end
              </Typography>
              <Typography className="text-slate-400">
                Projetos iniciais com HTML, CSS, JavaScript, Angular e Typescript, landing pages e sites institucionais.
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Item 2 - Transição */}
          <TimelineItem>
            <TimelineOppositeContent className="text-slate-500 py-3">
              2020 - Atual
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <LaptopMacIcon fontSize="small" />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent className="py-3 px-4">
              <Typography variant="h6" component="span" className="text-purple-400 font-bold">
                Desenvolvedora Front-end Pleno
              </Typography>
              <Typography className="text-slate-400">
                Foco em arquitetura de componentes e aplicações enterprise com TypeScript com Angular
              </Typography>
            </TimelineContent>
          </TimelineItem>

          {/* Item 3 - Momento Atual */}
          <TimelineItem>
            <TimelineOppositeContent className="text-slate-500 py-3">
              Hoje
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot sx={{ bgcolor: '#38bdf8' }}>
                <RocketLaunchIcon fontSize="small" className="text-slate-900" />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent className="py-3 px-4">
              <Typography variant="h6" component="span" className="text-white font-bold">
                Foco em React & Tailwind
              </Typography>
              <Typography className="text-slate-400">
                Criando este portfólio para consolidar conhecimentos na nova stack.
              </Typography>
            </TimelineContent>
          </TimelineItem>

        </Timeline>
      </div>
    </section>
  );
}