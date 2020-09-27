import React, { Component } from "react";
import reactLogo from "./../assets/images/react.svg";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className=" body-font">
          <div className="container px-5 pb-8 mx-auto flex sm:flex-col md:flex-row lg:flex-row  xl:flex-row flex-col items-center justify-between">
            {/* <a className="flex title-font font-medium items-center md:justify-start justify-center ">
              <img src={reactLogo} alt="" className="logo-img" />
              <span className="ml-3 text-xl">Amit Kumar</span>
            </a> */}
            <p className="text-sm font-semibold   mt-4">
              No © copyright issues
            </p>
            <p class="madewithlove mt-3">
              Made with <i className="fa fa-heart mx-1"></i> in India
            </p>
            <span className="social-icons inline-flex mt-3 justify-center sm:justify-start">
              <a
                href="https://github.com/amitdtu"
                target="_blank"
                className="ml-4"
              >
                <i class="fa fa-github fa-2x" aria-hidden="true"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/amitdtu/"
                target="_blank"
                className="ml-4 "
              >
                <i class="fa fa-linkedin fa-2x" aria-hidden="true"></i>
              </a>
              <a href="mailto: amitdtu007@gmail.com" className="ml-4 ">
                <i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
              </a>
            </span>
          </div>
        </footer>
      </>
    );
  }
}
