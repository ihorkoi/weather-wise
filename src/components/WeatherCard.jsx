export const WeatherCard = ({ forecastday }) => {
  console.log(forecastday);
  return (
    <li>
      <div>
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <ul>
            <li>
              T: {forecastday.day.mintemp_c}
              {String.fromCodePoint(0x000b0)}-{forecastday.day.maxtemp_c}
              {String.fromCodePoint(0x000b0)}
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </li>
  );
};
