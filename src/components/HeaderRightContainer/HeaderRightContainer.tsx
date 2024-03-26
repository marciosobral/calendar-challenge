import { useContext } from 'react';
import './HeaderRightContainer.css'
import { RemindersContext } from '../../contexts/RemindersContext';

function HeaderRightContainer() {

  const {setReminders} = useContext(RemindersContext);

  const deleteAllReminders = () => {
    setReminders([]);
  };

  return (
    <>
      <div className='HeaderRightContainer'>
        <div className='ReminderAppTitle'>
          <h2><button onClick={deleteAllReminders}>Reminders</button></h2>
        </div>
      </div>
    </>
  );
}

export default HeaderRightContainer
