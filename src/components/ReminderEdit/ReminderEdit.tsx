import { useState, useContext } from 'react';
import './ReminderEdit.css';
import { ReminderState, RemindersContext } from '../../contexts/RemindersContext';

interface ReminderEditProps {
  reminder: ReminderState;
}

function ReminderEdit({reminder}: ReminderEditProps) {

  const {reminders, setReminders} = useContext(RemindersContext);

  const [reminderEditPopUp, setReminderEditPopUp] = useState(false);
  const [selectedColor, setSelectedColor] = useState(reminder.color);

  const [formState, setFormState] = useState({
    title: reminder.title,
    description: reminder.description,
    date: reminder.date,
    time: reminder.time,
    city: reminder.city,
    color: reminder.color,
  });

  const editReminder = (updatedReminder: ReminderState) => {
    setReminders(reminders.map(rem => rem.id === reminder.id ? updatedReminder : rem));
  };

  const inputChange = (formReminder : any) => {
    setFormState({...formState,
      [formReminder.target.name]: formReminder.target.value,
    });
  };

  const submitConfirm = (event : any) => {
    event.preventDefault();
    editReminder({
      id: reminder.id,
      ...formState
    });
    setReminderEditPopUp(false);
  };

  return (
    <>
      <button className="ReminderEditButton" onClick={() => setReminderEditPopUp(true)}
      style={{ backgroundColor: reminder.color,
        color: reminder.color === 'yellow' ? 'black' : 'white'}}>
        Edit
      </button>
      {reminderEditPopUp && (
        <div className='OutsideContainer'>
          <div className="EditReminderPopUp">
            <form onSubmit={submitConfirm}>
              <input
                type="text"
                name="title"
                maxLength={15}
                required
                onChange={inputChange}
                placeholder="Reminder Title"
                value={formState.title}
              />
              <textarea
                name="description"
                maxLength={30}
                required
                onChange={inputChange}
                placeholder="Reminder Description"
                value={formState.description}
              />
              <input
                type="time"
                name="time"
                required
                onChange={inputChange}
                value={formState.time}
              />
              <input
                type="date"
                name="date"
                required
                onChange={inputChange}
                value={formState.date}
              />
              <input
                type="text"
                name="city"
                maxLength={15}
                required
                onChange={inputChange}
                placeholder="City"
                value={formState.city}
              />
              <div className='ColorPicker'>
                {['blue', 'red', 'green', 'yellow', 'purple', 'orange'].map((color) => (
                  <label key={color} style={{ display: 'inline-block', width: '30px',
                    height: '30px', margin: '5px', borderRadius: '50%', cursor: 'pointer',
                    backgroundColor: color, border: selectedColor === color ? '2px solid black' : 'none',}}>
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
                      checked={selectedColor === color}
                    />
                  </label>
                ))}
              </div>
              <button type="submit">Confirm</button>
              <button type="button" onClick={() => setReminderEditPopUp(false)}>Cancel</button>
            </form>
          </div>
        </div>)}
    </>
  );
}

export default ReminderEdit
