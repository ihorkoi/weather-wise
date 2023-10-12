import { CurrentWeather } from "../CurrentWeather/CurrentWeather.jsx";
import { ForecastWrapper } from "components/ForecastWrapper/ForecastWrapper.jsx";
import { fetchData } from "../../api.js";
import { useEffect, useState } from "react";
import { WeatherContainer } from "./WeatherWrapper.js";

export const WeatherWrapper = (props) => {
  const {
    state: { query, weather },
    setForecastData,
    setWeatherData,
  } = props;

  const [isLoading, setIsLoading] = useState(false);
  console.log(weather);

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      fetchData(query)
        .then(({ data }) => {
          console.log(data);
          setWeatherData(data.forecast.forecastday);
          setForecastData(data.forecast);
        })
        .finally(setIsLoading(false));
      // console.log("test");
      // setIsLoading(false);
    }
  }, [query, setWeatherData, setForecastData]);

  return (
    <WeatherContainer>
      <div>{isLoading ? "yes" : "no"}</div>
      <div>
        <CurrentWeather forecastday={weather[0]} />
      </div>
      <div>
        <ForecastWrapper weather={weather} />
      </div>
    </WeatherContainer>
  );
};
