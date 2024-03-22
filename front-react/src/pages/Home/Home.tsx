import MainContainer from '../../components/MainContainer/MainContainer'
import ReminderContainer from '../../components/ReminderContainer/ReminderContainer'
import './Home.css'

function Home() {
  return (
    <>
      <div className="Screen">
        <MainContainer />
        <ReminderContainer />
      </div>
    </>
  )
}

export default Home
