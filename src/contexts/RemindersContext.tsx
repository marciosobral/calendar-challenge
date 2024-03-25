import { createContext, useState } from "react";

interface ReminderState{
  date: Date,
  title: string,
  description: string,
  city: string,
};

interface RemindersContextProps{
  reminders: ReminderState[];
  setReminders: (value: ReminderState[]) => void;
};

export const RemindersContext = createContext({} as RemindersContextProps)

export default function RemindersProvider({children}: { children: React.ReactNode}) {
  const [reminders, setReminders] = useState<ReminderState[]>([]);

  return (
    <RemindersContext.Provider value={{reminders, setReminders}}>
      {children}
    </RemindersContext.Provider>
  )
}
