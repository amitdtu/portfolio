import React, { Component } from "react";
import reactLogo from "./../assets/images/react.svg";
import CV from "./../assets/images/cv.pdf";
import "./../assets/hero.css";
import { detectMobile } from "./../Common/HelperFunctions";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export default class Header extends Component {
  state = {
    isDark: false,
  };

  componentDidMount() {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    localStorage.setItem("theme", "dark");
    this.setState({
      isDark: true,
    });

    document.getElementsByTagName("HTML")[0].setAttribute("data-theme", "dark");
    document.getElementById("toggle").checked = true;
  }

  themeHandler = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      this.setState({ isDark: true });
    } else {
      document
        .getElementsByTagName("HTML")[0]
        .setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      this.setState({ isDark: false });
    }
    console.log(name, checked);
  };

  handleClick = (y1, y2) => {
    // y1 = desktop y-axis co-ordinated
    // y2 = mobile y-axis co-ordinated
    if (!detectMobile()) {
      window.scrollTo(0, y1);
    } else {
      window.scrollTo(0, y2);
    }
  };

  render() {
    const { isDark } = this.state;
    return (
      <header
        className=" body-font nav-sticky"
        style={{ backgroundColor: isDark ? "" : "white" }}
      >
        <div className="container mx-auto flex flex-wrap md:p-5 sm:p-0 lg:p-5 p-2 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center md:mb-0">
            <img src={reactLogo} alt="" className="logo-img" />
            <span className="ml-3 text-xl">Amit Kumar</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {/* <a className="mr-5 hover: cursor-pointer">First Link</a>
            <a className="mr-5 hover: cursor-pointer">Second Link</a>
            <a className="mr-5 hover: cursor-pointer">Third Link</a> */}
            <Link
              className="mr-5 cursor-pointer"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              // offset={50}
              duration={100}
              // onSetActive={this.handleSetActive}
            >
              Projects
            </Link>
            <Link
              className="mr-5 cursor-pointer"
              activeClass="active"
              to="stats"
              spy={true}
              smooth={true}
              // offset={50}
              duration={100}
              // onSetActive={this.handleSetActive}
            >
              Statistics
            </Link>
            {/* <a href="#projects" className="mr-5 ">
              Projects
            </a> */}
            {/* <a
              href={"#stats"}
              // onClick={this.handleClick.bind(this, 610, 950)}
              className="mr-5 cursor-pointer"
            >
              Statistics
            </a> */}
            <a href={CV} download="resume" className="mr-5 ">
              Resume
            </a>
          </nav>
          {/* <button className="inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0">
            Button
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button> */}
          <div className="flex justify-center items-center">
            {!isDark && (
              <i class="fa fa-sun-o theme-icons" aria-hidden="true"></i>
            )}
            <div>
              <div className="relative inline-block w-10 mx-2 align-middle select-none transition duration-200 ease-in">
                <input
                  onChange={this.themeHandler}
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label
                  htmlFor="toggle"
                  className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                />
              </div>
              {isDark && <i class="fa fa-moon-o" aria-hidden="true"></i>}
            </div>
            {/* <label htmlFor="toggle" className="text-xs ">
              Toggle me.
            </label> */}
          </div>
        </div>
      </header>
    );
  }
}
