import { createContext, useState } from "react";
import { format, getYear } from "date-fns";

/* Foi criado um context para utilização do mesmo estado em diferentes
componentes. Não era necessário, mas foi útil para poder passar os meses sem
sair da aba de Reminders atual */

/* Criação de uma interface para o mês selecionado, que define "date" no formato Date*/
interface SelectedMonth {
  date: Date,
};

/* Criando interface para o dia que for selecionado no calendário*/
interface SelectedDate {
  dayOfSelectedDate: number;
  monthOfSelectedDate: number;
  yearOfSelectedDate: number;
}

/* Também foi criada uma interface com as propriedades do contexto */
interface CalendarContextProps {
  currentMonth: SelectedMonth;
  setCurrentMonth: (value: SelectedMonth) => void;
  selectedDay: SelectedDate;
  setSelectedDay: (value: SelectedDate) => void;
}

export const CalendarContext = createContext({} as CalendarContextProps)

/* Estrutura base utilizada para criação de contextos */
export default function CalendarProvider({children}: { children: React.ReactNode}) {

  /* Criação do estado que será exportado para outros componentes*/
  const [currentMonth, setCurrentMonth] = useState<SelectedMonth>({
    date: new Date(),
  })
  
  /* Utilizando o estado importado do contexto para definir a data atual */
  const currentDate = currentMonth.date;

  /* Criação de variáveis para manipular melhor a data */
  const currentDayString = format(currentDate, "d");
  const currentDayNumber = Number(currentDayString);
  const currentMonthString = format(currentDate, "M");
  const currentMonthNumber = Number(currentMonthString);
  const currentYear = getYear(currentDate);

    /* Criando um estado para o dia que será selecionado no calendário */
  const [selectedDay, setSelectedDay] = useState<SelectedDate>
    ({
      dayOfSelectedDate: currentDayNumber,
      monthOfSelectedDate: currentMonthNumber,
      yearOfSelectedDate: currentYear,
    });
  
  return (
    <CalendarContext.Provider value={{
      currentMonth, setCurrentMonth, selectedDay, setSelectedDay
    }}>
      {children}
    </CalendarContext.Provider>
  )
}