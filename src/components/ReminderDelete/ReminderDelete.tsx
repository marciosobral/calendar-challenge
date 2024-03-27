import './ReminderDelete.css'
import { ReminderState, RemindersContext } from '../../contexts/RemindersContext';
import { useContext } from 'react';

interface ReminderDeleteProps {
  reminder: ReminderState;
}

function ReminderDelete({reminder}: ReminderDeleteProps) {

  const {reminders, setReminders} = useContext(RemindersContext);

  const reminderDelete = (id: number) => {
    const newReminders = reminders.filter(reminder => reminder.id !== id);
    setReminders(newReminders);
  }

  return (
    <>
      <button className="ReminderDeleteButton"
        onClick={() => reminderDelete(reminder.id)}>
          Delete
      </button>
    </>
  );
}

export default ReminderDelete
