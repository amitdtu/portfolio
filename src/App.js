import React, { Component } from "react";
import "./App.css";
import "./assets/hero.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Container/HomePage";
import Login from "./Container/Login";
import Header from "./Component/Header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <HomePage />
      </>
    );
  }
}

export default App;
