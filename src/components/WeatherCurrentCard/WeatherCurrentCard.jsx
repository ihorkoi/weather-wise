import { CurrentCardWrapper } from "./WeatherCurrentCard.js";

export const WeatherCurrentCard = ({ forecastday, current }) => {
  console.log(forecastday.date);
  const date = new Date(forecastday.date);
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(date);
  return (
    <li>
      <CurrentCardWrapper>
        <div>
          <img src={forecastday.day.condition.icon} alt="" />
        </div>
        <div>
          <ul>
            <li>{forecastday.day.condition.text}</li>
            <li>
              T: {forecastday.day.mintemp_c}
              {String.fromCodePoint(0x000b0)}...{forecastday.day.maxtemp_c}
              {String.fromCodePoint(0x000b0)}
            </li>
            <li>{weekday[date.getDay()]}</li>
          </ul>
        </div>
      </CurrentCardWrapper>
    </li>
  );
};
