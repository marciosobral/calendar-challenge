import './CurrentDate.css'
import { format, addMonths, subMonths } from "date-fns"
import { useContext } from 'react';
import { CalendarContext } from '../../contexts/CalendarContext';

function CurrentDate(){
  /* Utilizando o useContext para poder utilizar o mesmo estado entre diferentes componentes */
  const {currentMonth, setCurrentMonth} = useContext(CalendarContext)

  /* Utilizando o format do date-fns para poder formatar a descrição do mês que
  está sendo exibido */
  const selectedMonth = format(currentMonth.date, "MMMM yy");

   /* Criando a função de mudar o mês que é ativada quando se clica na seta */
  function updateSelectedMonth(newMonth: Date){
    setCurrentMonth({
      date : newMonth,
    })
  }

  return (
    <>
      <div>
        {/* Função para voltar um mês */}
        <button onClick={() => 
          (updateSelectedMonth(subMonths(currentMonth.date, 1)))
          }> menos </button>

        {/* Apenas exibe o mês e o ano que estão sendo exibidos no
        container principal */}  
        <h1 className='CurrentMonth'>{selectedMonth}</h1>

        {/* Função para avançar um mês */}
        <button onClick={() => 
          (updateSelectedMonth(addMonths(currentMonth.date, 1)))
          }> mais </button>
      </div>
    </>
  )
}

export default CurrentDate
