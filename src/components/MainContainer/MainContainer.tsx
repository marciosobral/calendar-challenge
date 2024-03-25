import Footer from "../Footer/Footer";
import "./MainContainer.css";
import CalendarReminder from "../CalendarReminder/CalendarReminder";
import CurrentDate from "../CurrentDate/CurrentDate";
import CurrentMonthButton from "../CurrentMonthButton/CurrentMonthButton";


/* Utilização dos componentes */
function MainContainer() {
  return (
    <div className="CalendarAppContainer">
      <div>
        <div className="HeaderCalendarAppContainer">
          <div className="CalendarAppTitleContainer">
            <h1><a href="/">Calendar</a></h1>
          </div>
          <div className="CurrentDateContainer">
            <CurrentDate />
          </div>
          <div className="ReturnButtonContainer">
            <CurrentMonthButton />
          </div>
        </div>
        <div className="CalendarContainer">
          <CalendarReminder />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainContainer;
