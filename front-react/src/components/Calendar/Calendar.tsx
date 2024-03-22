import './Calendar.css'
import { currentDate } from '../CurrentDate/CurrentDate'
import { eachDayOfInterval, endOfMonth, startOfMonth, format, getDay, addMonths } from "date-fns"

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const Calendar = () => {
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);
  /*   const lastDayOfPrevMonth = endOfMonth(subMonths(currentDate, 1));
      Futura feature para ver os dias do mês passado
      Future feature to view the days of the last month*/
  const firstDayOfNextMonth = getDay(addMonths(currentDate, 1));
  const daysOfPrevMonth = Array.from({length: getDay(firstDayOfMonth)});
  const daysOfNextMonth = Array.from({length: 7 - firstDayOfNextMonth})

  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  })

  return (
    <>
      <div className='grid grid-cols-7 gap-2'>
        {weekDays.map((day) => {
          return (<div className="WeekDay">{day}</div>)
        })}
        {daysOfPrevMonth.map(() => {
          return (<div className="PrevMonth"></div>)
        })}
        {daysInMonth.map((day) => {
          return (<div className="MonthlyDay">{format(day, "d")}</div>)
        })}
        {daysOfNextMonth.map(() => {
          return (<div className="NextMonth"></div>)
        })}
      </div>
    </>
  )
}

export default Calendar
