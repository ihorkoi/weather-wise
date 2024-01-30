export const WeatherDetails = ({ forecastday }) => {
  return (
    <div className="weather-details-general">
      <ul className="weather-detail-list">
        <li className="weather-detail-item">
          <p>Precipitation:</p>{" "}
          <span>{forecastday.day.daily_chance_of_rain}%</span>
        </li>
        <li className="weather-detail-item">
          <p>Humidity: </p> <span>{forecastday.day.avghumidity}%</span>
        </li>
        <li className="weather-detail-item">
          <p>Wind: </p>
          <span>
            {Math.round(forecastday.day.maxwind_kph * 0.277777778 * 100) / 100}{" "}
            m/s
          </span>
        </li>
      </ul>

      <ul className="weather-detail-hour">
        {forecastday.hour.map((hour, idx) => {
          if (idx % 3 === 0) {
            return (
              <li className="weather-detail-item" key={idx}>
                <span>{hour.time.split(" ")[1]}</span>{" "}
                <span>
                  {Number.parseFloat(hour.temp_c).toFixed(1) +
                    String.fromCodePoint(0x000b0)}{" "}
                  C
                </span>
              </li>
            );
          }
          return "";
        })}
      </ul>
    </div>
  );
};
