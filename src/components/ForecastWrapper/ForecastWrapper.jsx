import { nanoid } from "nanoid";
import { ForecastList } from "./ForecastWrapper";

export const ForecastWrapper = ({ weather }) => {
  return (
    <div>
      <ForecastList>
        {weather.map((data) => {
          return <li key={nanoid()}>{data.date}</li>;
          // return <WeatherWrapper key={nanoid()} forecastday={data} />;
        })}
      </ForecastList>
    </div>
  );
};
