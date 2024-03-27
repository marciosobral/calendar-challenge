import './WeatherWidget.css'
import { ReminderState } from '../../contexts/RemindersContext';

interface WeatherWidgetProps {

  reminder: ReminderState;
}

function WeatherWidget({reminder}: WeatherWidgetProps) {
  return (
    <>
      <div className="ReminderWeatherWidget"
        style={{ backgroundColor: reminder.color,
        color: reminder.color === 'yellow' ? 'black' : 'white'}}>
          Weather
      </div>
    </>
  );
}

export default WeatherWidget
