import { createContext, useState } from "react";
 
export interface ReminderState{
  id: number,
  date: string,
  time: string,
  title: string,
  description: string,
  city: string,
  color: string,
};

interface RemindersContextProps{
  reminders: ReminderState[];
  setReminders: (value: ReminderState[]) => void;
};

export const RemindersContext = createContext({} as RemindersContextProps)

export default function RemindersProvider({children}: { children: React.ReactNode}) {
  const [reminders, setReminders] = useState<ReminderState[]>([
    {
      id: 99,
      date: '2024-03-27',
      time: '20:00',
      title: 'Inglês',
      description: 'Aula de inglês',
      city: 'Goiânia',
      color: 'purple',
    },
    {
      id: 98,
      date: '2024-03-27',
      time: '14:00',
      title: 'Entrevista',
      description: 'Apresentação do desafio',
      city: 'Brasília',
      color: 'blue',
    },
    {
      id: 97,
      date: '2024-03-26',
      time: '20:00',
      title: 'Instalar Programa',
      description: 'Instalação noturna',
      city: 'Goiânia',
      color: 'green',
    },
    {
      id: 96,
      date: '2024-03-29',
      time: '14:00',
      title: 'Cinema',
      description: 'Assistir Kung Fu Panda com meus irmãos',
      city: 'Goiânia',
      color: 'red',
    },
    {
      id: 95,
      date: '2024-03-29',
      time: '16:00',
      title: 'Cozinhar',
      description: 'Cozinhar com a namorada',
      city: 'Goiânia',
      color: 'blue',
    },
    {
      id: 94,
      date: '2024-03-30',
      time: '08:00',
      title: 'Padaria Canadá',
      description: 'Café da manhã',
      city: 'Goiânia',
      color: 'red',
    },
    {
      id: 93,
      date: '2024-03-30',
      time: '14:00',
      title: 'Parque Mutirama',
      description: 'Ir ao parque',
      city: 'Goiânia',
      color: 'yellow',
    },
    {
      id: 92,
      date: '2024-03-27',
      time: '12:00',
      title: 'Buscar Sabrina',
      description: 'Buscar Sabrina no aeroporto',
      city: 'Goiânia',
      color: 'yellow',
    },
  ]);

  reminders.sort((a, b) => {
    if (a.time < b.time) {
      return -1;
    }
    if (a.time > b.time) {
      return 1;
    }
    return 0;
  });

  return (
    <RemindersContext.Provider value={{reminders, setReminders}}>
      {children}
    </RemindersContext.Provider>
  )
}
