import './CalendarContainer.css';
import { eachDayOfInterval, endOfMonth, startOfMonth, format, getDay, 
  addMonths, subMonths, subDays, isToday, addDays} from "date-fns";
import { useContext } from 'react';
import { CalendarContext } from '../../contexts/CalendarContext';
import { RemindersContext } from '../../contexts/RemindersContext';

/* Colocando em um Array os dias da semana */
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function Calendar() {

  /* Utilizando o useContext para poder definir o que está sendo passado
  pelo contexto */
  const {calendarMonth, setCalendarMonth, 
    selectedDate, setSelectedDate} = useContext(CalendarContext);
  const {reminders} = useContext(RemindersContext);

  const currentMonth = calendarMonth.date;
  const currentSelectedDate = selectedDate.date;

  /* Criando a função de mudar o mês que é ativada quando se clica em um dia do 
  mês anterior ou do próximo mês  */
  function updateSelectedMonth (updatedMonth: Date){
    setCalendarMonth({
      date : updatedMonth,
    })
  }

  /* Criação de uma função para atualizar o estado do dia selecionado. */
  function updateSelectedDay(updatedDate: Date){
    setSelectedDate({
      date : updatedDate,
    })
  }

  /* Definindo o primeiro dia do mês e o último dia do mês no mês selecionado */
  const firstDayOfMonth = startOfMonth(currentMonth);
  const lastDayOfMonth = endOfMonth(currentMonth);

  /* Criação de uma variável e de um Array que trabalham juntas para descobrir
  quantos dias do próximo mês podem estar presentes no mês atual  */
  const firstDayOfNextMonth = getDay(addDays(lastDayOfMonth, 1));
  const daysOfNextMonthNumber = Array.from({length: 7 - firstDayOfNextMonth});

  /* Criação de variáveis e de uma array que trabalham juntas para descobrir em
  qual dia acaba o mês anterior ao mês atual, utilizado para formar os elementos
  de dias do mês anterior podem estar presentes no mês atual*/
  const lastDayOfPrevMonth = Number(format((subDays(firstDayOfMonth, 1)), "d"))
  const startingDay = lastDayOfPrevMonth - getDay(firstDayOfMonth) + 1;
  const daysOfPrevMonth: number[] = Array.from({
    length: lastDayOfPrevMonth - startingDay + 1
  }, (_, i) => startingDay + i);

  /* Função que calcula quantos dias há no mês atual */
  const daysInMonth = eachDayOfInterval({
    start: firstDayOfMonth,
    end: lastDayOfMonth,
  })

  return (
    <>
      <div className='CalendarApp'>

        {/* Foi executada a função Map para listar os itens da Array que foi
        criada no início do código*/}
        {weekDays.map((weekDayObject, weekdayindex) => {
          return (<div className="WeekDays" key={weekdayindex}>{weekDayObject}</div>)
        })}

        {/* Parte onde consta os dias do mês anterior que ainda estão presentes
        no calendário do mês atual */}
        {daysOfPrevMonth.map((prevMonthDay, prevmonthdayindex) => {
          return (<button className="PrevMonth" key={prevmonthdayindex} onClick={() => 
          (updateSelectedMonth(subMonths(calendarMonth.date, 1)))}>
            {prevMonthDay}
            </button>)
        })}

        {/* Map que percorre os dias do mês */}
        {daysInMonth.map((currentDayDate, _) => {
          const filteredReminders = reminders.filter((reminder) => reminder.date === format(currentDayDate, "yyyy-MM-dd"));

          /* Caso o dia seja o dia de hoje */
          if (isToday(currentDayDate)){
            var classDay = "TodayDay"
          }

          /* Caso o dia seja o dia selecionado */ 
          else if (format(currentDayDate, "yyyy-MM-dd") == format(currentSelectedDate, "yyyy-MM-dd")){
            var classDay = "SelectedDay";
          } 

          /* Caso seja apenas um dia normal */
          else {
            var classDay = "MonthlyDay";
          }
          return ( <button className={classDay}
            key={format(currentDayDate, "yyyy-MM-dd")}
            onClick={() => (updateSelectedDay(currentDayDate))}>
              {format(currentDayDate, "d")}
              <ul>
                {/* Aqui é onde começa a brincadeira, caso tenha mais de dois reminders no mesmo dia,
                ele mostra o primeiro reminder e mostra que tem mais X reminders */}
                {filteredReminders.length > 3 ? (
                  <>
                    <li className="ReminderInCalendar" 
                    key={filteredReminders[0].id} style={{ backgroundColor: filteredReminders[0].color,
                      color: filteredReminders[0].color === 'yellow' ? 'black' : 'white'}}>
                      {filteredReminders[0].title}
                    </li>
                    <li className="ReminderInCalendar" 
                    key={filteredReminders[1].id} style={{ backgroundColor: filteredReminders[1].color,
                      color: filteredReminders[1].color === 'yellow' ? 'black' : 'white'}}>
                      {filteredReminders[1].title}
                    </li>
                    <li className="MoreReminders">+{filteredReminders.length - 2} more reminders</li>
                  </>
                ) : (

                  /* Caso tenha apenas 1 ou 2 reminders, ele mostra o título dos dois  */
                  filteredReminders.map((reminder) => (
                    <li className='ReminderInCalendar'
                    style={{ backgroundColor: reminder.color,
                    color: reminder.color === 'yellow' ? 'black' : 'white'}}
                    key={reminder.id}>{reminder.title}</li>
                  ))
                )}
              </ul>
            </button>)
        })}

        {/* Parte onde consta os dias do mês seguinte que estão presentes
        no calendário do mês atual, aqui foi feito apenas com o índice da função
        pois todos os meses começam no dia primeiro */}
        {daysOfNextMonthNumber.map((_, nextMonthDay) => {
          return (<button className="NextMonth" key={nextMonthDay} onClick={() => 
          (updateSelectedMonth(addMonths(calendarMonth.date, 1)))}>
            {nextMonthDay+1}
            </button>)
        })}
      </div>
    </>
  );
}

export default Calendar
