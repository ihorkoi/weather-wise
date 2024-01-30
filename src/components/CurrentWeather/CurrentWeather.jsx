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
      <div className="card-photo-wrapper"></div>
      <div className="card-info-wrapper">
        <div className="card-info">
          <p>{place.charAt(0).toUpperCase() + place.slice(1)}</p>
          <p>{date.toDateString().split(" ").slice(1).join(" ")}</p>
          <p>{weekday[date.getDay()]}</p>
        </div>
        <img src={forecastday.day.condition.icon} alt="" />
        <div>
          <ul>
            <li>
              {forecastday.day.avgtemp_c}
              {String.fromCodePoint(0x000b0)}C
            </li>
            <li>{forecastday.day.condition.text}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
