import React, { Component } from "react";
import Typist from "react-typist"; // to be uninstall
import Stats from "./Stats";
import Hero from "./Hero";
import ProjectCards from "./ProjectCards";
import Footer from "./Footer";

export default class Home extends Component {
  state = {
    isHeroMounted: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isHeroMounted: true });
    }, 1000);
  }

  render() {
    return (
      <div className="">
        <Hero />
        <Stats isHeroMounted={this.state.isHeroMounted} />
        <ProjectCards />
        <Footer />
      </div>
    );
  }
}
