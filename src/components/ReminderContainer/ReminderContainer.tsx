import './ReminderContainer.css'
import { useContext } from 'react';
import { CalendarContext } from '../../contexts/CalendarContext';
import { format } from 'date-fns'

function ReminderContainer() {
  
  const {selectedDate, setCalendarMonth} = useContext(CalendarContext);

  const currentSelectedDate = format(selectedDate.date, "EEEE, MMMM d");

  /* Criando a função de mudar o mês que é ativada quando se clica na seta */
  function updateCalendarMonth(newMonth: Date){
    setCalendarMonth({
      date : newMonth,
    })
  }

  return (
    <>
    {/* Componente onde será possível ver com detalhes, criar e editar reminders,
    também terá o Widget de clima. */}
      <div className="ReminderAppContainer">
        <div className="HeaderReminderAppContainer">
          <div className="ReminderAppTitleContainer">
            <h2>Reminders</h2>
          </div>
        </div>
        <div className="SubHeaderReminderContainer">
          <button className="CurrentDayOfReminders" onClick={() => 
            (updateCalendarMonth(selectedDate.date))
            }>{currentSelectedDate}</button>
          <button className="AddReminderContainer"
          >Add a reminder</button>
        </div>
        <div className="Reminders">
          <div className="Reminder">
            <h4>REMINDER 1</h4>
          </div>
          <div className="Reminder">
            <h4>REMINDER 2</h4>
          </div>
          <div className="Reminder">
            <h4>REMINDER 3</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReminderContainer
