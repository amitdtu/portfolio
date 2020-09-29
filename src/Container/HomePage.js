import React, { Component } from "react";
import Home from "./../Component/Home";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Home {...this.props} />
      </div>
    );
  }
}
