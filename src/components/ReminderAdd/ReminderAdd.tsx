import { useState, useContext } from 'react';
import './ReminderAdd.css';
import { format } from 'date-fns';
import { RemindersContext, ReminderState } from '../../contexts/RemindersContext';
import { CalendarContext } from '../../contexts/CalendarContext';

function ReminderAdd() {

  const {reminders, setReminders} = useContext(RemindersContext);
  const {selectedDate} = useContext(CalendarContext);

  const [reminderAddPopUp, setReminderAddPopUp] = useState(false);
  const [selectedColor, setSelectedColor] = useState('');
  const [counter, setCounter] = useState(0);

  const [formState, setFormState] = useState({
    title: '',
    description: '',
    time: '',
    city: '',
    color: '',
  });

  const currentSelectedDate = format(selectedDate.date, "yyyy-MM-dd");
  
  const addReminder = (newReminder: ReminderState) => {
    setReminders([...reminders, newReminder]);
  };

  const inputChange = (formReminder : any) => {
    setFormState({...formState,
      [formReminder.target.name]: formReminder.target.value,
    });
  };

  const submitConfirm = (event : any) => {
    event.preventDefault();
    addReminder({
      id: counter,
      date: currentSelectedDate,
      ...formState
    });
    setCounter(counter + 1);
    setReminderAddPopUp(false);
    reminders.sort((a, b) => {
      if (a.time < b.time) {
        return -1;
      }
      if (a.time > b.time) {
        return 1;
      }
      return 0;
    });
  };

  return (
    <>
      <button className="AddReminderContainer" onClick={() => setReminderAddPopUp(true)}>
        Add a reminder
      </button>
      {reminderAddPopUp && (
        <div className="AddReminderPopUp">
          <form onSubmit={submitConfirm}>
            <input
              type="text"
              name="title"
              maxLength={15}
              required
              onChange={inputChange}
              placeholder="Reminder Title"
            />
            <textarea
              name="description"
              maxLength={30}
              required
              onChange={inputChange}
              placeholder="Reminder Description"
            />
            <input
              type="time"
              name="time"
              required
              onChange={inputChange}
            />
            <input
              type="text"
              name="city"
              maxLength={15}
              required
              onChange={inputChange}
              placeholder="City"
            />
            <div className='ColorPicker'>
              {['blue', 'red', 'green', 'yellow', 'purple', 'orange'].map((color) => (
                <label key={color} style={{ display: 'inline-block', width: '30px',
                  height: '30px', margin: '5px', borderRadius: '50%', cursor: 'pointer',
                  backgroundColor: color, border: selectedColor === color ? '2px solid black' : 'none' }}>
                  <input
                    type="radio"
                    name="color"
                    value={color}
                    required
                    onChange={(colorPicked) => {
                      inputChange(colorPicked);
                      setSelectedColor(colorPicked.target.value);
                    }}
                    style={{ display: 'none'}}
                  />
                </label>
              ))}
            </div>
            <button type="submit">Confirm</button>
            <button type="button" onClick={() => setReminderAddPopUp(false)}>Cancel</button>
          </form>
        </div>)}
    </>
  );
}

export default ReminderAdd
