import { useEffect, useState } from "react";
import { fetchData } from "../api";
import { WeatherCard } from "./WeatherCard";
import { nanoid } from "nanoid";

export const WeatherList = () => {
  const [weather, setweather] = useState([]);

  useEffect(() => {
    fetchData().then(({ data }) => {
      console.log(data.forecast.forecastday);
      setweather((prevState) => [...prevState, ...data.forecast.forecastday]);
    });
  }, []);

  return (
    <ul>
      {weather.map((data) => {
        return <WeatherCard key={nanoid()} forecastday={data} />;
      })}
    </ul>
  );
};
