import './ReminderEdit.css'
import { ReminderState } from '../../contexts/RemindersContext';

interface ReminderEditProps {
  reminder: ReminderState;
}

function ReminderEdit({reminder}: ReminderEditProps) {
  return (
    <>
      <button className="ReminderEditButton"
        style={{ backgroundColor: reminder.color,
        color: reminder.color === 'yellow' ? 'black' : 'white'}}>
          Edit
      </button>
    </>
  );
}

export default ReminderEdit
