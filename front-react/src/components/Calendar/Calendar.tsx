import './Calendar.css';
import { eachDayOfInterval, endOfMonth, startOfMonth, format, getDay, 
  addMonths, getYear, subMonths, subDays} from "date-fns";
import { useContext, useState } from 'react';
import { CalendarContext } from '../../contexts/CalendarContext';

/* Criando interface para o dia que for selecionado no calendário*/
interface SelectedDate {
  dayOfSelectedDate: number;
  monthOfSelectedDate: number;
  yearOfSelectedDate: number;
}

/* Colocando em um Array os dias da semana */
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const Calendar = () => {

  /* Utilizando o useContext para poder utilizar o mesmo estado entre diferentes componentes */
  const {currentMonth, setCurrentMonth} = useContext(CalendarContext);

  /* Criando a função de mudar o mês que é ativada quando se clica em um dia do mês anterior ou do próximo mês  */
  function updateSelectedMonth(newMonth: Date){
    setCurrentMonth({
      date : newMonth,
    })
  }

  /* Utilizando o estado herdado do contexto para definir a data atual */
  const currentDate = currentMonth.date;
  
  /* Utilização de comandos para melhor visualização das datas */
  const currentDayString = format(currentDate, "d");
  const currentMonthString = format(currentDate, "M");
  const currentYear = getYear(currentDate);
  const currentDayNumber = Number(currentDayString);
  const currentMonthNumber = Number(currentMonthString);

  /* Criando um estado para o dia que será selecionado no calendário */
  const [SelectedDay, setSelectedDay] = useState<SelectedDate>
  ({
    dayOfSelectedDate: currentDayNumber,
    monthOfSelectedDate: currentMonthNumber,
    yearOfSelectedDate: currentYear,
  });

  /* Definindo o primeiro dia do mês e o último dia do mês no mês selecionado */
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);

  /* Criação de uma variável e de um Array que trabalham juntas para descobrir
  quantos dias do próximo mês podem estar presentes no mês atual  */
  const firstDayOfNextMonth = getDay(addMonths(currentDate, 1));
  const daysOfNextMonthNumber = Array.from({length: 7 - firstDayOfNextMonth})


  /* Criação de variáveis de uma array que trabalham juntas para descobrir em
  qual dia acaba o mês anterior ao mês atual, utilizado para formar os elementos
  de dias do mês anterior podem estar presentes no mês atual*/
  const lastDayOfPrevMonth = Number(format((subDays(firstDayOfMonth, 1)), "d"))
  const startingDay = lastDayOfPrevMonth - getDay(firstDayOfMonth) + 1;
  const daysOfPrevMonth: number[] = Array.from({ length: lastDayOfPrevMonth - startingDay + 1 }
    , (_, i) => startingDay + i);

  /* Criação de uma função para atualizar o estado do dia selecionado. Provável
  que seja transformar em contexto para ser sincronizada com a aba de Reminders */
  function updateSelectedDay(d: number, m: number, y: number){
    setSelectedDay({
      dayOfSelectedDate : d,
      monthOfSelectedDate : m,
      yearOfSelectedDate : y,
    })
  }

  /* Função que calcula quantos dias há no mês atual */
  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  })

  return (
    <>
      {/* Aqui foi utilizado o Tailwind para criação dos grids */}
      <div className='grid grid-cols-7 gap-2'>

        {/* Foi executada a função Map para listar os itens da Array que foi
        criada no início do código*/}
        {weekDays.map((weekDayObject) => {
          return (<div className="WeekDay">{weekDayObject}</div>)
        })}

        {/* Parte onde consta os dias do mês anterior que ainda estão presentes
        no calendário do mês atual */}
        {daysOfPrevMonth.map((prevMonthDay) => {
          return (<button className="PrevMonth" onClick={() => 
          (updateSelectedMonth(subMonths(currentMonth.date, 1)))}>
            {prevMonthDay}
            </button>)
        })}

        {/* Map que percorre os dias do mês, também serão utilizados para listar
        os reminders, importante melhorar o índice */}
        {daysInMonth.map((day, currentDay) => {
          return ( <button className="MonthlyDay" 
          onClick={() => (updateSelectedDay(currentDay+1, currentMonthNumber, currentYear))}>
            {format(day, "d")}</button> )
        })}

        {/* Parte onde consta os dias do mês seguinte que estão presentes
        no calendário do mês atual, aqui foi feito apenas com o índice da função
        pois todos os meses começam no dia primeiro */}
        {daysOfNextMonthNumber.map((_, nextMonthDay) => {
          return (<button className="NextMonth" onClick={() => 
          (updateSelectedMonth(addMonths(currentMonth.date, 1)))}>
            {nextMonthDay+1}
            </button>)
        })}
      </div>
      
      {/* Estado do dia Selecionado, pode ser utilizado futuramente para
      implementação dos Reminders */}
      <h2>{JSON.stringify(SelectedDay)}</h2>
    </>
  )
}

export default Calendar
