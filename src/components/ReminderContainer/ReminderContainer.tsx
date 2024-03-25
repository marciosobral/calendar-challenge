import './ReminderContainer.css'

function ReminderContainer() {
  return (
    <>
    {/* Componente onde será possível ver com detalhes, criar e editar reminders,
    também terá o Widget de clima. */}
      <div className="ReminderAppContainer">
        <div className="HeaderReminderAppContainer">
          <div className="ReminderAppTitleContainer">
            <h2>Reminders</h2>
          </div>
          <div className="AddReminderContainer">
            <h3>+</h3>
          </div>
        </div>
        <div className="CurrentDayOfReminders">
          <h3>Quinta - 22</h3>
        </div>
        <div className="Reminders">
          <div className="Reminder">
            <h4>REMINDER 1</h4>
          </div>
          <div className="Reminder">
            <h4>REMINDER 2</h4>
          </div>
          <div className="Reminder">
            <h4>REMINDER 3</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReminderContainer
