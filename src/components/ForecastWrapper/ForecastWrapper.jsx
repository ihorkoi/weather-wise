import { nanoid } from "nanoid";
// import { ForecastList } from "./ForecastWrapper";

export const ForecastWrapper = ({ forecast, weekday, onForecastClick }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <ul className="forecast-list">
        {forecast.map((data) => {
          return (
            <li key={nanoid()} onClick={onForecastClick} date={data.date} className="forecast-list-item">
              <div>
                <img src={data.day.condition.icon} alt="" />
                <p>{weekday[new Date(data.date).getDay()]}</p>
                <p>
                  {Math.round(data.day.avgtemp_c)}
                  {String.fromCodePoint(0x000b0)}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
