import React, { Component } from "react";
import Typist from "react-typist"; // to be uninstall
import Stats from "./Stats";
import Hero from "./Hero";
import ProjectCards from "./ProjectCards";
import Footer from "./Footer";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

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
        <Element name="stats" className="element">
          <Stats isHeroMounted={this.state.isHeroMounted} />
        </Element>
        <Element name="projects" className="element">
          <ProjectCards />
        </Element>
        <Footer />
      </div>
    );
  }
}
