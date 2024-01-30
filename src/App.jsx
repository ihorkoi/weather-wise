import { SubmitForm } from "./components/SubmitForm/SubmitForm";
import { useState } from "react";
import { WeatherWrapper } from "components/WeatherWrapper/WeatherWrapper.jsx";
import { fetchData } from "api";
import { ClipLoader } from "react-spinners";

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [forecast, setForecast] = useState([]);
  const [query, setQuery] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setQuery(evt.target.query.value);
    if (evt.target.query.value) {
      setIsLoading(true);
      fetchData(evt.target.query.value)
        .then(({ data }) => {
          setForecast(data.forecast.forecastday);
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  const override = {
    display: "block",
    margin: "0 auto",
  };

  return (
    <>
      <header>
        <SubmitForm handleSubmit={handleSubmit} />
      </header>
      <div className="App">
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
      </div>
    </>
  );
};
