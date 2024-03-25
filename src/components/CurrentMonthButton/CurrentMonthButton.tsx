import './CurrentMonthButton.css'
import { useContext } from 'react';
import { CalendarContext } from '../../contexts/CalendarContext';

function CurrentMonthButton(){

  const {setCurrentMonth} = useContext(CalendarContext);
  const todaysMonth = new Date;

  function updateSelectedMonth(newMonth: Date){
    setCurrentMonth({
      date : newMonth,
    })
  }

  return (
    <>
      <div className="CurrentButton">
        <button onClick={() => 
            (updateSelectedMonth(todaysMonth))
            }>Current</button>
      </div>
    </>
  )

}

export default CurrentMonthButton