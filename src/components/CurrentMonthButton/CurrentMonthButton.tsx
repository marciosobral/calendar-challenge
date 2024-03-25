import './CurrentMonthButton.css'
import { useContext } from 'react';
import { CalendarContext } from '../../contexts/CalendarContext';

function CurrentMonthButton(){

  const {setCalendarMonth} = useContext(CalendarContext);
  const todaysMonth = new Date;

  function updateSelectedMonth(newMonth: Date){
    setCalendarMonth({
      date : newMonth,
    })
  }

  return (
    <>
      <button className="CurrentButton" onClick={() => 
          (updateSelectedMonth(todaysMonth))}>
            Current
      </button>
    </>
  )

}

export default CurrentMonthButton