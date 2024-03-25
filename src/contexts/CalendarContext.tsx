import { createContext, useState } from "react";

/* Criação de uma interface para o mês selecionado, que define "date" no formato Date*/
interface CalendarMonthProps {
  date: Date,
};

/* Criando interface para o dia que for selecionado no calendário */
interface SelectedDateProps {
  date: Date,
};

/* Também foi criada uma interface com as propriedades do contexto */
interface CalendarContextProps {
  calendarMonth: CalendarMonthProps;
  setCalendarMonth: (value: CalendarMonthProps) => void;
  selectedDate: SelectedDateProps;
  setSelectedDate: (value: SelectedDateProps) => void;
};

export const CalendarContext = createContext({} as CalendarContextProps)

/* Estrutura base utilizada para criação de contextos */
export default function CalendarProvider({children}: { children: React.ReactNode}) {

  /* Criação dos estados que serão compartilhado entre outros componentes */
  const [calendarMonth, setCalendarMonth] = useState<CalendarMonthProps>({
    date: new Date(),
  });
  
  const [selectedDate, setSelectedDate] = useState<SelectedDateProps>({
    date: new Date(),
  });

  return (
    <CalendarContext.Provider value={{
      calendarMonth, setCalendarMonth,
      selectedDate, setSelectedDate,
    }}>
      {children}
    </CalendarContext.Provider>
  )
}