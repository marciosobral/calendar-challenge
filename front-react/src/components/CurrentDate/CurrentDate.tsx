import './CurrentDate.css'
import { format, addMonths, subMonths } from "date-fns"
import { useContext } from 'react';
import { CalendarContext } from '../../contexts/CalendarContext';

function CurrentDate(){
  const {currentMonth, setCurrentMonth} = useContext(CalendarContext)

  const selectedMonth = format(currentMonth.date, "MMMM yy");

  function updateSelectedMonth(newMonth: Date){
    setCurrentMonth({
      date : newMonth,
    })
  }

  return (
    <>
      <div>
        <button onClick={() => 
          (updateSelectedMonth(subMonths(currentMonth.date, 1)))
          }> menos </button>
        <h1 className='CurrentMonth'>{selectedMonth}</h1>
        <button onClick={() => 
          (updateSelectedMonth(addMonths(currentMonth.date, 1)))
          }> mais </button>
      </div>
    </>
  )
}

export default CurrentDate
