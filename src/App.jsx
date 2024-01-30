import { SubmitForm } from "./components/SubmitForm/SubmitForm";
import { useState } from "react";
import { WeatherWrapper } from "components/WeatherWrapper/WeatherWrapper.jsx";
import { fetchData } from "api";
import { ClipLoader } from "react-spinners";
import Notiflix from "notiflix";

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const inputValue = evt.target.query.value.trim();

    if (!inputValue) {
      Notiflix.Notify.failure("Sorry, incorrect query");
      evt.target.reset();
      return;
    }
    if (!inputValue.match(/^[a-zA-Z]+$/)) {
      Notiflix.Notify.failure("Please, form queries in English");
      evt.target.reset();
      return;
    }
    setQuery(inputValue);
    setIsLoading(true);
    fetchData(inputValue)
      .then(({ data }) => {
        setForecast(data.forecast.forecastday);
        setIsLoading(false);
      })
      .catch((err) => {
        Notiflix.Notify.failure(err.message);
        setIsLoading(false);
      });
  };
  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <>
      <header>
        <div style={{ textAlign: "center" }}>
          <h1>WeatherWise</h1>
          <p>
            Enter a location or city name to check the current weather and
            forecast. For example, 'Kyiv' or 'New York'.
          </p>
        </div>
        <SubmitForm handleSubmit={handleSubmit} />
      </header>
      <main>
        {isLoading && (
          <ClipLoader
            color={"#ffffff"}
            loading={isLoading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        )}

        {forecast.length > 0 && !isLoading ? (
          <WeatherWrapper forecast={forecast} query={query} />
        ) : (
          ""
        )}
      </main>
    </>
  );
};
