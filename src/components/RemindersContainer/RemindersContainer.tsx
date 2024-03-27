import { useContext } from 'react';
import './RemindersContainer.css';
import { format } from 'date-fns';
import { RemindersContext } from '../../contexts/RemindersContext';
import { CalendarContext } from '../../contexts/CalendarContext';
import ReminderDelete from '../ReminderDelete/ReminderDelete';
import WeatherWidget from '../WeatherWidget/WeatherWidget';
import ReminderEdit from '../ReminderEdit/ReminderEdit';

function Reminders() {

  const {selectedDate} = useContext(CalendarContext);
  const {reminders} = useContext(RemindersContext);

  const filteredReminders = reminders.filter((reminder) => 
    reminder.date === format(selectedDate.date, "yyyy-MM-dd"));
  
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
            <ReminderEdit reminder={reminder}/>
            <WeatherWidget reminder={reminder}/>
            <ReminderDelete reminder={reminder}/>
          </li>
            ))}
        </ul>
    </>
  );
}

export default Reminders
