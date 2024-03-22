import Calendar from "../Calendar/Calendar"

const CalendarReminder = () => {
  return (
    <>
      {/* Foi usado Tailwind para melhor o container do Calendário, futuramente
      ainda será implementado mais elementos */}
      <div className="container mx-auto p-5">
        <Calendar 
        />
      </div>
    </>
  )
}

export default CalendarReminder
