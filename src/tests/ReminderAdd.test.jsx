import { render, screen } from '@testing-library/react'
import ReminderAdd from '../components/ReminderAdd/ReminderAdd';
import CalendarProvider from "../contexts/CalendarContext";
import RemindersProvider from "../contexts/RemindersContext";

describe('Add a reminder', () => {
  it('Renders the Add Reminder component', () => {
    render(
      <>
        <CalendarProvider>
          <RemindersProvider>
            <ReminderAdd />
          </RemindersProvider>
        </CalendarProvider>
      </>
    )
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})