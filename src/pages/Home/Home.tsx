import './Home.css';
import CalendarProvider from "../../contexts/CalendarContext";
import RemindersProvider from "../../contexts/RemindersContext";
import RightContainer from '../../components/RightContainer/RightContainer';
import LeftContainer from '../../components/LeftContainer/LeftContainer';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <>
      {/* Apenas puxa os dois componentes necessários para a página Home */}
      <div className="Screen">
        <CalendarProvider>
          <RemindersProvider>
            <LeftContainer />
            <RightContainer />
          </RemindersProvider>
        </CalendarProvider>
      </div>
      <Footer />
    </>
  )
}

export default Home
