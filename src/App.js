import React, { Component } from "react";
import "./App.css";
import "./assets/hero.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./Container/HomePage";
import Login from "./Container/Login";
import Header from "./Component/Header";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default App;
