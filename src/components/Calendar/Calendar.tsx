import './Calendar.css';
import { eachDayOfInterval, endOfMonth, startOfMonth, format, getDay, 
  addMonths, subMonths, subDays, isToday, addDays, getMonth, getYear} from "date-fns";
import { useContext } from 'react';
import { CalendarContext } from '../../contexts/CalendarContext';

/* Colocando em um Array os dias da semana */
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

const Calendar = () => {

  /* Utilizando o useContext para poder definir o que está sendo passado
  pelo contexto */
  const {currentMonth, setCurrentMonth, selectedDay, setSelectedDay} = useContext(CalendarContext);

  const currentDate = currentMonth.date;

  /* Criando a função de mudar o mês que é ativada quando se clica em um dia do 
  mês anterior ou do próximo mês  */
  function updateSelectedMonth(newMonth: Date){
    setCurrentMonth({
      date : newMonth,
    })
  }

  /* Definindo o primeiro dia do mês e o último dia do mês no mês selecionado */
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);

  /* Criação de uma variável e de um Array que trabalham juntas para descobrir
  quantos dias do próximo mês podem estar presentes no mês atual  */
  const firstDayOfNextMonth = getDay(addDays(lastDayOfMonth, 1));
  const daysOfNextMonthNumber = Array.from({length: 7 - firstDayOfNextMonth})

  /* Criação de variáveis de uma array que trabalham juntas para descobrir em
  qual dia acaba o mês anterior ao mês atual, utilizado para formar os elementos
  de dias do mês anterior podem estar presentes no mês atual*/
  const lastDayOfPrevMonth = Number(format((subDays(firstDayOfMonth, 1)), "d"))
  const startingDay = lastDayOfPrevMonth - getDay(firstDayOfMonth) + 1;
  const daysOfPrevMonth: number[] = Array.from({
    length: lastDayOfPrevMonth - startingDay + 1
  }, (_, i) => startingDay + i);

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
      {/* Criação dos grids */}
      <div className='Calendar'>

        {/* Foi executada a função Map para listar os itens da Array que foi
        criada no início do código*/}
        {weekDays.map((weekDayObject, weekdayindex) => {
          return (<div className="WeekDay" key={weekdayindex}>{weekDayObject}</div>)
        })}

        {/* Parte onde consta os dias do mês anterior que ainda estão presentes
        no calendário do mês atual */}
        {daysOfPrevMonth.map((prevMonthDay, prevmonthdayindex) => {
          return (<button className="PrevMonth" key={prevmonthdayindex} onClick={() => 
          (updateSelectedMonth(subMonths(currentMonth.date, 1)))}>
            {prevMonthDay}
            </button>)
        })}

        {/* Map que percorre os dias do mês */}
        {daysInMonth.map((day, currentDay) => {

          /* Caso o dia seja o dia de hoje, ele define o nome da classe como TodayDay */
          if (isToday(day)){
            var className = "TodayDay";
          }
          /* Caso o dia seja o dia selecionado */ 
          else if (selectedDay.monthOfSelectedDate == getMonth(currentDate)+1 &&
          selectedDay.yearOfSelectedDate == getYear(currentDate) &&
          selectedDay.dayOfSelectedDate == currentDay+1){
            var className = "SelectedDay";
          } 
          /* Caso seja apenas um dia normal */
          else {
            var className = "MonthlyDay";
          }
          return ( <button className={className}
          key={getYear(currentDate) + "-" + getMonth(currentDate)+1 + "-" + JSON.stringify(currentDay+1)}
          onClick={() => (updateSelectedDay(currentDay+1, getMonth(currentDate)+1, getYear(currentDate)))}>
            {format(day, "d")}</button> )
        })}

        {/* Parte onde consta os dias do mês seguinte que estão presentes
        no calendário do mês atual, aqui foi feito apenas com o índice da função
        pois todos os meses começam no dia primeiro */}
        {daysOfNextMonthNumber.map((_, nextMonthDay) => {
          return (<button className="NextMonth" key={nextMonthDay} onClick={() => 
          (updateSelectedMonth(addMonths(currentMonth.date, 1)))}>
            {nextMonthDay+1}
            </button>)
        })}
      </div>
      
      {/* Estado do dia Selecionado, pode ser utilizado futuramente para
      implementação dos Reminders */}
      <h2>{selectedDay.yearOfSelectedDate + "-" + selectedDay.monthOfSelectedDate + "-" + selectedDay.dayOfSelectedDate}</h2>
    </>
  )
}

export default Calendar
