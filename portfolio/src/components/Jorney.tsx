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
import { useEffect, useState } from 'react';
import api from '../services/api';

interface JorneyData {
  _id: string;
  order: number;
  titles: string[];
  description: string;
  yearStart: string;
  yearEnd: string;
}

export function Jorney() {
  const [jorney, setJorney] = useState<JorneyData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/experiences')
      .then(response => {
        const sortedData = response.data.sort((a: JorneyData, b: JorneyData) => a.order - b.order);
        setJorney(sortedData);
      })
      .catch(err => console.error("Erro ao buscar jornada:", err))
      .finally(() => setLoading(false));
  }, []);

  const getStepConfig = (order: number) => {
    switch (order) {
      case 1:
        return { color: 'primary' as const, icon: <SchoolIcon fontSize="small" />, variant: 'outlined' as const, dotSx: {} };
      case 4:
        return { color: 'secondary' as const, icon: <LaptopMacIcon fontSize="small" />, variant: 'filled' as const, dotSx: {} };
      case 5:
        return { color: 'primary' as const, icon: <RocketLaunchIcon fontSize="small" className="text-slate-900" />, variant: 'filled' as const, dotSx: { bgcolor: '#38bdf8' } };
      default:
        return { color: 'grey' as const, icon: <LaptopMacIcon fontSize="small" />, variant: 'outlined' as const, dotSx: {} };
    }
  };

  if (loading) return <div className="text-white text-center py-10">Carregando jornada...</div>;

  return (
    <section className="py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Minha Jornada</h2>
        
        <Timeline position="alternate">
          {jorney.map((item) => {
            const config = getStepConfig(item.order);
            
            return (
              <TimelineItem key={item._id}>
                <TimelineOppositeContent className="text-slate-500 py-3">
                  {item.yearStart} - {item.yearEnd}
                </TimelineOppositeContent>
                
                <TimelineSeparator>
                  <TimelineDot 
                    color={config.color} 
                    variant={config.variant} 
                    sx={config.dotSx}
                  >
                    {config.icon}
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>

                <TimelineContent className="py-3 px-4">
                  <Typography variant="h6" component="span" className="text-sky-400 font-bold">
                    {item.titles[0]}
                  </Typography>
                  <Typography className="text-slate-400">
                    {item.description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
      </div>
    </section>
  );
}