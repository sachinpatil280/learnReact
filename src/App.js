import "./App.css";
import React, { Component } from "react";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter></ClickCounter>
        <HoverCounter></HoverCounter>
      </div>
    );
  }
}

export default App;
