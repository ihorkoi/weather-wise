export const WeatherDetails = ({ forecastday }) => {
  return (
    <div className="weather-details-general">
      <ul className="weather-detail-list">
        <li className="weather-detail-item">
          <p>precipitation:</p>{" "}
          <span>{forecastday.day.daily_chance_of_rain}%</span>
        </li>
        <li className="weather-detail-item">
          <p>humidity: </p> <span>{forecastday.day.avghumidity}%</span>
        </li>
        <li className="weather-detail-item">
          <p>wind: </p>
          <span>
            {Math.round(forecastday.day.maxwind_kph * 0.277777778 * 100) / 100}{" "}
            m/s
          </span>
        </li>
      </ul>
      <ul className="weather-detail-hour">
        <li className="weather-detail-item">
          <span>03:00</span>{" "}
          <span>
            {forecastday.hour[3].temp_c + String.fromCodePoint(0x000b0)} C
          </span>
        </li>
        <li className="weather-detail-item">
          {/* <img src={forecastday.day.condition.icon} alt="" /> */}
          <span>06:00</span>{" "}
          <span>
            {forecastday.hour[6].temp_c + String.fromCodePoint(0x000b0)} C
          </span>
        </li>
        <li className="weather-detail-item">
          <span>09:00</span>{" "}
          <span>
            {forecastday.hour[9].temp_c + String.fromCodePoint(0x000b0)} C
          </span>
        </li>
        <li className="weather-detail-item">
          <span>12:00</span>{" "}
          <span>
            {forecastday.hour[12].temp_c + String.fromCodePoint(0x000b0)} C
          </span>
        </li>
        <li className="weather-detail-item">
          <span>15:00</span>{" "}
          <span>
            {forecastday.hour[15].temp_c + String.fromCodePoint(0x000b0)} C
          </span>
        </li>
        <li className="weather-detail-item">
          <span>18:00</span>{" "}
          <span>
            {forecastday.hour[18].temp_c + String.fromCodePoint(0x000b0)} C
          </span>
        </li>
        <li className="weather-detail-item">
          <span>21:00</span>{" "}
          <span>
            {forecastday.hour[21].temp_c + String.fromCodePoint(0x000b0)} C
          </span>
        </li>
      </ul>
    </div>
  );
};
