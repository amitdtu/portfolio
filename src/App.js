import React, { Component } from "react";
import "./App.css";
import "./assets/custom.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Container/HomePage";
import Header from "./Component/Header";

class App extends Component {
  state = {
    isDark: true,
  };
  setAppState = (obj) => {
    this.setState(obj);
  };
  render() {
    return (
      <>
        <Header setAppState={this.setAppState} {...this.state} />
        <HomePage {...this.state} />
      </>
    );
  }
}

export default App;
