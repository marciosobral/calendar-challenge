import './CurrentDate.css'
import { format } from "date-fns"

const currentDate = new Date();

function CurrentDate(){

  return (
    <>
      <div>
        <h1 className="CurrentDate">{format(currentDate, "MMM yyyy")}</h1>
      </div>
    </>
  )
}

export default CurrentDate

export { currentDate }
