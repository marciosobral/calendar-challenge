import Calendar from '../../components/Calendar/Calendar'
import Reminder from '../../components/Reminder/Reminder'
import './Home.css'

function Home() {
  return (
    <>
      <div className="Screen">
        <Calendar />
        <Reminder />
      </div>
    </>
  )
}

export default Home
