import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("renders!", () => {
    render(<App />);
  });

  // it("renders 'Hello, World!'", () => {
  //   const helpers = render(<App />);
  //   console.log('helpers', helpers)
  // });

  it("renders 'Hello, World!'", () => {
    const { getByText } = render(<App />);
    getByText(/Hello World/);
    // Case insensitive / --- /i
  });

  it("renders 'Hello, World!'", () => {
    const { getByText, queryByText } = render(<App />);
    getByText(/hello world/i);
    expect(queryByText(/hello world/i)).not.toBeNull();
  });
  it("greets!", () => {
    const { getByText } = render(<App />);
    const button = getByText(/say, hi/i);
    fireEvent.click(button);
    getByText(/hey, react-app/i);
  });
  it("peaces out!", () => {
    const { getByText } = render(<App />);
    const button = getByText(/say you gotta go/i);
    fireEvent.click(button);
    getByText(/go to hell, react-app/i);
  });
});
