import { useContext } from 'react';
import './RemindersContainer.css';
import { format } from 'date-fns';
import { RemindersContext } from '../../contexts/RemindersContext';
import { CalendarContext } from '../../contexts/CalendarContext';

function Reminders() {

  const {selectedDate} = useContext(CalendarContext);
  const {reminders} = useContext(RemindersContext);

  const filteredReminders = reminders.filter((reminder) => 
    reminder.date === format(selectedDate.date, "yyyy-MM-dd"));
  
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
    <>
      <ul>
        {filteredReminders.map((reminder) => (
          <li key={reminder.id} className="Reminder">
            <div className="ReminderTime"
            style={{ backgroundColor: '' }}>
              {reminder.time}
            </div>
            <div className="ReminderTitle"
            style={{ backgroundColor: reminder.color,
            color: reminder.color === 'yellow' ? 'black' : 'white'}}>
              {reminder.title}
            </div>
            <div className="ReminderDescription"
            style={{ backgroundColor: reminder.color,
              color: reminder.color === 'yellow' ? 'black' : 'white'}}>
              {reminder.description}
            </div>
            <button className="ReminderEditButton"
            style={{ backgroundColor: reminder.color,
              color: reminder.color === 'yellow' ? 'black' : 'white'}}>
              Edit
            </button>
            <div className="ReminderWeatherWidget"
            style={{ backgroundColor: reminder.color,
              color: reminder.color === 'yellow' ? 'black' : 'white'}}>
              Weather
            </div>
            <button className="ReminderDeleteButton"
            style={{ backgroundColor: reminder.color,
              color: reminder.color === 'yellow' ? 'black' : 'white'}}>
              Delete
            </button>
          </li>
            ))}
        </ul>
    </>
  );
}

export default Reminders
