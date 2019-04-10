import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = {
    greeting: ""
  };
  render() {
    return (
      <div className="App">
        <h2>Hello World!</h2>
        <button onClick={this.greet}>Say, Hi!</button>
        <button onClick={this.bidFarewell}>Say you gotta go!</button>
        <div>{this.state.greeting}</div>
      </div>
    );
  }
  greet = e => {
    this.setState({ greeting: "Hey, React-App!" });
  };
  bidFarewell = e => {
    this.setState({ greeting: "Go to hell, React-App!" });
  };
}

export default App;
