import HeaderWeatherWidget from '../HeaderWeatherWidget/HeaderWeatherWidget'
import Footer from '../Footer/Footer'
import './MainContainer.css'
import CalendarReminder from '../CalendarReminder/CalendarReminder'
import CurrentDate from '../CurrentDate/CurrentDate'

function MainContainer() {
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
            <CurrentDate />
          </div>
        </div>
        <div className="CalendarContainer">
          <CalendarReminder />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default MainContainer