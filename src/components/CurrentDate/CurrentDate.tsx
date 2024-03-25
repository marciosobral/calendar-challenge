import './CurrentDate.css'
import { format, addMonths, subMonths } from "date-fns"
import { useContext } from 'react';
import { CalendarContext } from '../../contexts/CalendarContext';

function CurrentDate(){
  /* Utilizando o useContext para poder utilizar o mesmo estado entre diferentes componentes */
  const {calendarMonth, setCalendarMonth} = useContext(CalendarContext)

  /* Utilizando o format do date-fns para poder formatar a descrição do mês que
  está sendo exibido */
  const currentMonth = format(calendarMonth.date, "MMMM y");

   /* Criando a função de mudar o mês que é ativada quando se clica na seta */
  function updateCalendarMonth(newMonth: Date){
    setCalendarMonth({
      date : newMonth,
    })
  }

  return (
    <>
      {/* Função para voltar um mês */}
      <div className="SubMonthsContainer">
        <button onClick={() => 
          (updateCalendarMonth(subMonths(calendarMonth.date, 1)))
          }>Prev</button>
      </div>

      {/* Apenas exibe o mês e o ano que estão sendo exibidos no
      container principal */}
      <div className="MonthInfoContainer">  
        <h1 className='CurrentMonth'>{currentMonth}</h1>
      </div>

      {/* Função para avançar um mês */}
      <div className="AddMonthsContainer">
        <button onClick={() => 
          (updateCalendarMonth(addMonths(calendarMonth.date, 1)))
          }>Next</button>
      </div>
    </>
  )
}

export default CurrentDate
