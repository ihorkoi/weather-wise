// import { WeatherList } from "./components/WeathetList";
import { SubmitForm } from "./components/SubmitForm/SubmitForm";
import { data } from "data";
import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { WeatherWrapper } from "components/WeatherWrapper/WeatherWrapper.jsx";

export class App extends Component {
  state = {
    forecast: [],
    weather: [data],
    query: null,
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({ query: evt.target.query.value });
    console.log(this.state.query);
  };
  setWeatherData = (data) => {
    this.setState((prevState) => ({ ...prevState, weather: data }));
  };
  setForecastData = (data) => {
    this.setState((prevState) => ({ ...prevState, forecast: data }));
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro"></p>
        <SubmitForm handleSubmit={this.handleSubmit} />

        <WeatherWrapper
          state={this.state}
          setWeatherData={this.setWeatherData}
          setForecastData={this.setForecastData}
        />
      </div>
    );
  }
}
