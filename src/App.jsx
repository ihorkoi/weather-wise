import { WeatherList } from "./components/WeathetList";
import { SubmitForm } from "components/SubmitForm";
import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

export const App = () => {
  const [weather, setWeather] = useState([]);
  const [query, setQuery] = useState(null);

  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro"></p>
      <SubmitForm setQuery={setQuery} />
      <WeatherList weather={weather} setWeather={setWeather} query={query} />
    </div>
  );
};
