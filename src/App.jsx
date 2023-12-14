import { SubmitForm } from "./components/SubmitForm/SubmitForm";
import { data } from "data";
import { Component } from "react";
// import "./App.css";
import { WeatherWrapper } from "components/WeatherWrapper/WeatherWrapper.jsx";

export class App extends Component {
  state = {
    forecast: [],
    query: null,
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({ query: evt.target.query.value });
  };

  render() {
    return (
      <>
        <header>
          <SubmitForm handleSubmit={this.handleSubmit} />
        </header>
        <div className="App">
          {this.state.query ? <WeatherWrapper query={this.state.query} /> : ""}
        </div>
      </>
    );
  }
}
