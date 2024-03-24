import CalendarProvider from "../../contexts/CalendarContext";
import MainContainer from '../../components/MainContainer/MainContainer'
import ReminderContainer from '../../components/ReminderContainer/ReminderContainer'
import './Home.css'

function Home() {
  return (
    <>
      {/* Apenas puxa os dois componentes necessários para a página Home */}
      <div className="Screen">
        <CalendarProvider>
          <MainContainer />
          <ReminderContainer />
        </CalendarProvider>
      </div>
    </>
  )
}

export default Home
