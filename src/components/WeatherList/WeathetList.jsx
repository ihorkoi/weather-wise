import { useEffect, useState } from "react";
import { fetchData } from "../api";
// import { CurrentWeather } from "./CurrentWeather/CurrentWeather.jsx";
import { nanoid } from "nanoid";
import { ForecastWrapper } from "components/ForecastWrapper/ForecastWrapper";
// import { CardsWrapper } from "./WeatherWrapper/WeatherWrapper";

export const WeatherWrapper = ({
  state: { weather, query },
  setWeatherData,
  setForecastData,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  console.log(weather, query, isLoading);

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
      console.log("test");
      // setIsLoading(false);
    }
  }, [query, setWeatherData, setForecastData]);

  return (
    <div>
      <div>{isLoading ? "yes" : "no"}</div>
      <ForecastWrapper>
        {weather.map((data) => {
          return <WeatherWrapper key={nanoid()} forecastday={data} />;
        })}
      </ForecastWrapper>
    </div>
  );
};
