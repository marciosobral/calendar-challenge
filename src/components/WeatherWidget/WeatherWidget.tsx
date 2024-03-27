import './WeatherWidget.css'
import { ReminderState } from '../../contexts/RemindersContext';

interface WeatherWidgetProps {
  reminder: ReminderState;
}

/* 2cddc023dd09005c1b277ed47e80342e */

function WeatherWidget({reminder}: WeatherWidgetProps) {
  return (
    <>
      <div className="ReminderWeatherWidget">
          Weather
      </div>
    </>
  );
}

export default WeatherWidget
