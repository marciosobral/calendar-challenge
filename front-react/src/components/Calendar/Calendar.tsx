import HeaderWeatherWidget from '../HeaderWeatherWidget/HeaderWeatherWidget'
import Footer from '../Footer/Footer'
import './Calendar.css'

function Calendar() {
  return (
    <>
      <div className="CalendarAppContainer">
        <div className="HeaderCalendarAppContainer">
          <div className="CalendarAppTitleContainer">
            <h1>RemindMe</h1>
          </div>
          <div className="WeatherWidgetContainer">
            <HeaderWeatherWidget />
          </div>
          <div className="CurrentDateContainer">
            <h1>March 2024</h1>
          </div>
        </div>
        <div className="CalendarContainer">
          <h1>Calendar</h1>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Calendar
