// import { CurrentCardWrapper } from "./CurrentWeather.js";

export const CurrentWeather = ({ forecastday, place }) => {
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

  return (
    <div className="current-card-wrapper">
      <div className='card-photo-wrapper'>
      <div className="card-info">
        {/* <img src="https://placehold.co/100x100" alt="" /> */}
        <p>{place.charAt(0).toUpperCase() + place.slice(1)}</p>
        <p>{date.toDateString().split(" ").slice(1).join(" ")}</p>
        <p>{weekday[date.getDay()]}</p>
      </div>
      <img src={forecastday.day.condition.icon} alt="" />
      <div>
        <ul>
          <li>
            {/* T: {Math.round(forecastday.day.mintemp_c)}
            {String.fromCodePoint(0x000b0)}...
            {Math.round(forecastday.day.maxtemp_c)}
          {String.fromCodePoint(0x000b0)} */}
            T:{" "}
            {/* {(Math.round(forecastday.day.mintemp_c) +
              Math.round(forecastday.day.maxtemp_c)) /
              2} */}
              {forecastday.day.avgtemp_c}
            {String.fromCodePoint(0x000b0)}C
          </li>
              <li>{forecastday.day.condition.text}</li>
          {/* <li>{weekday[date.getDay()]}</li> */}
        </ul>
      </div>
      </div>
    </div>
  );
};
