import './SelectedDayDisplay.css'
import { useContext } from 'react';
import { CalendarContext } from '../../contexts/CalendarContext';
import { format } from 'date-fns';

function SelectedDayDisplay() {

  const {selectedDate, setCalendarMonth} = useContext(CalendarContext);

  const currentSelectedDate = format(selectedDate.date, "EEEE, MMMM d");

  function updateCalendarMonth(newMonth: Date){
    setCalendarMonth({
      date : newMonth,
    })
  }

  return (
    <>
      <button className="CurrentSelectedDay" onClick={() => 
        (updateCalendarMonth(selectedDate.date))
        }>{currentSelectedDate}
      </button>
    </>
  );
}

export default SelectedDayDisplay
