import { CurrentWeather } from "../CurrentWeather/CurrentWeather.jsx";
import { ForecastWrapper } from "../ForecastWrapper/ForecastWrapper.jsx";
import { useState } from "react";
import { WeatherDetails } from "../WeatherDetails/WeatherDetails.jsx";

export const WeatherWrapper = (props) => {
  const { query, forecast } = props;
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const [day, setDay] = useState(0);
  const [activeDay, setActiveDay] = useState(
    new Date().toISOString().split("T")[0]
  );

  const onForecastClick = (evt) => {
    const idx = forecast.findIndex((data) => {
      return data.date === evt.currentTarget.getAttribute("date");
    });
    setDay(idx);
    setActiveDay(evt.currentTarget.getAttribute("date"));
  };

  return (
    <div className="weather-wrapper">
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {forecast.length > 0 ? (
          <CurrentWeather forecastday={forecast[day]} place={query} />
        ) : (
          ""
        )}
        <ForecastWrapper
          forecast={forecast}
          weekday={weekday}
          activeDay={activeDay}
          onForecastClick={onForecastClick}
        />
      </div>
      <div>
        {forecast.length > 0 ? (
          <WeatherDetails forecastday={forecast[day]} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
