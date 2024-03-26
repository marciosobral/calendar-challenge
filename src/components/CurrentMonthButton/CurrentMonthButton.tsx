import './CurrentMonthButton.css';
import { useContext } from 'react';
import { CalendarContext } from '../../contexts/CalendarContext';

function CurrentMonthButton() {

  const {setCalendarMonth} = useContext(CalendarContext);
  const thisMonth = new Date;

  function updateSelectedMonth(newMonth: Date){
    setCalendarMonth({
      date : newMonth,
    })
  }

  return (
    <>
      <button className="CurrentMonthButton" onClick={() => 
          (updateSelectedMonth(thisMonth))}>
            Current
      </button>
    </>
  );
}

export default CurrentMonthButton
