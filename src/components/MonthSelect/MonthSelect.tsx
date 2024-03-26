import './MonthSelect.css';
import { format, addMonths, subMonths } from "date-fns";
import { useContext } from 'react';
import { CalendarContext } from '../../contexts/CalendarContext';

function MonthSelect() {

  const {calendarMonth, setCalendarMonth} = useContext(CalendarContext)

  const currentMonth = format(calendarMonth.date, "MMMM y");

  function updateCalendarMonth(newMonth: Date){
    setCalendarMonth({
      date : newMonth,
    })
  };

  return (
    <>
      <div className='SubMonthsContainer'>
        <button onClick={() => 
          (updateCalendarMonth(subMonths(calendarMonth.date, 1)))
          }>Prev</button>
      </div>

      <div className='CalendarMonth'>  
        {currentMonth}
      </div>

      <div className="AddMonthsContainer">
        <button onClick={() => 
          (updateCalendarMonth(addMonths(calendarMonth.date, 1)))
          }>Next</button>
      </div>
    </>
  );
}

export default MonthSelect
