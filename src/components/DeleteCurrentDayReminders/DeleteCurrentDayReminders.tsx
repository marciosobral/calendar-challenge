import './DeleteCurrentDayReminders.css'
import { RemindersContext } from '../../contexts/RemindersContext';
import { CalendarContext } from '../../contexts/CalendarContext';
import { useContext } from 'react';
import { format } from 'date-fns';

function ReminderDeleteByDate() {

  const {reminders, setReminders} = useContext(RemindersContext);
  
  const {selectedDate} = useContext(CalendarContext);

  const currentSelectedDate = format(selectedDate.date, "yyyy-MM-dd");

  const reminderDeleteByDate = (date: string) => {
    const newReminders = reminders.filter(reminder => reminder.date !== date);
    setReminders(newReminders);
  }

  return (
    <>
      <button className="DeleteCDRButton"
        onClick={() => reminderDeleteByDate(currentSelectedDate)}>
          Delete All Reminders
      </button>
    </>
  );
}

export default ReminderDeleteByDate
