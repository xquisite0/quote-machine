import React, { Component } from "react";
import Quote from "./Quote";

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Quote />
      </div>
    );
  }
}

// Possible improvements
// Having background change with every new quote
// Possibly a quote wall paper creator?
