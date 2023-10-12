import { useEffect, useState } from "react";
import { fetchData } from "../api";
import { WeatherCurrentCard } from "./WeatherCurrentCard/WeatherCurrentCard.jsx";
import { nanoid } from "nanoid";
import { CardsWrapper } from "./WeatherCurrentCard/WeatherCurrentCard";

export const WeatherList = ({ weather, setWeather, query }) => {
  const [current, setCurrnet] = useState(null);

  useEffect(() => {
    if (query) {
      fetchData(query).then(({ data }) => {
        console.log(data);
        setWeather((prevState) => [...prevState, ...data.forecast.forecastday]);
        setCurrnet((prevState) => ({ ...prevState, ...data.current }));
      });
    }
  }, [query, setWeather]);

  return (
    <CardsWrapper>
      {weather.map((data) => {
        return (
          <WeatherCurrentCard
            key={nanoid()}
            forecastday={data}
            current={current}
          />
        );
      })}
    </CardsWrapper>
  );
};
