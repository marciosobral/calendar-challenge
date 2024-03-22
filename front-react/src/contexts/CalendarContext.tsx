import { createContext, useState } from "react";

interface SelectedMonth {
  date: Date,
};

interface CalendarContextProps {
  currentMonth: SelectedMonth;
  setCurrentMonth: (value: SelectedMonth) => void
}

export const CalendarContext = createContext({} as CalendarContextProps)

export default function CalendarProvider({children}: { children: React.ReactNode}) {
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