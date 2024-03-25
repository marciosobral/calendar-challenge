import CalendarProvider from "../../contexts/CalendarContext";
import MainContainer from '../../components/MainContainer/MainContainer';
import ReminderContainer from '../../components/ReminderContainer/ReminderContainer';
import RemindersProvider from "../../contexts/RemindersContext";
import './Home.css';

function Home() {
  return (
    <>
      {/* Apenas puxa os dois componentes necessários para a página Home */}
      <div className="Screen">
        <CalendarProvider>
          <RemindersProvider>
            <MainContainer />
            <ReminderContainer />
          </RemindersProvider>
        </CalendarProvider>
      </div>
    </>
  )
}

export default Home
