import { createContext, useState } from "react";

/* Foi criado um context para utilização do mesmo estado em diferentes
componentes. Não era necessário, mas foi útil para poder passar os meses sem
sair da aba de Reminders atual */

/* Criação de uma interface para o mês selecionado, que define "date" no formato Date*/
interface SelectedMonth {
  date: Date,
};

/* Também foi criada uma interface com as propriedades do contexto */
interface CalendarContextProps {
  currentMonth: SelectedMonth;
  setCurrentMonth: (value: SelectedMonth) => void
}

export const CalendarContext = createContext({} as CalendarContextProps)

/* Estrutura base utilizada para criação de contextos */
export default function CalendarProvider({children}: { children: React.ReactNode}) {

  /* Criação do estado que será exportado para outros componentes*/
  const [currentMonth, setCurrentMonth] = useState<SelectedMonth>({
    date: new Date(),
  })

  return (
    <CalendarContext.Provider value={{
      currentMonth, setCurrentMonth
    }}>
      {children}
    </CalendarContext.Provider>
  )
}