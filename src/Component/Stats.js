import React, { Component } from "react";
import Bounce from "react-reveal/Bounce";
import Title from "./Title";

export default class Stats extends Component {
  state = {
    linesOfCode: 0,
    noOfProjects: 0,
    noOfClients: 0,
    noOfCoffee: 0,
  };

  handleCounter = (arr) => {
    arr.map((obj) => {
      let time = obj.limit / 300;
      time = Math.floor(time) > 0 ? time : 250;

      return setInterval(() => {
        if (this.state[obj.state] >= obj.limit) {
          this.setState((prevState, props) => ({
            [obj.state]: obj.limit,
          }));
          return;
        } else {
          let count = Math.floor(obj.limit / 100);
          if (obj.limit > 10000) count = Math.floor(obj.limit / 25);
          count = count > 0 ? count : 1;
          this.setState((prevState, props) => ({
            [obj.state]: prevState[obj.state] + count,
          }));
        }
      }, time);
    });
  };

  render() {
    return (
      <Bounce
        left
        when={this.props.isHeroMounted}
        onReveal={() =>
          this.handleCounter([
            { state: "linesOfCode", limit: 40000 },
            { state: "noOfClients", limit: 3 },
            { state: "noOfProjects", limit: 12 },
            { state: "noOfCoffee", limit: 1563 },
          ])
        }
      >
        <section
          id="stats"
          className=" body-font pb-40 md:py-24 sm:py-32 lg:py-24 py-32"
        >
          <div className="container px-5 py-6 mx-auto">
            {/* <div className="flex flex-col text-center w-full mb-20">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 ">
                Master Cleanse Reliac Heirloom
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
                gentrify, subway tile poke farm-to-table. Franzen you probably
                haven't heard of them man bun deep jianbing selfies heirloom
                prism food truck ugh squid celiac humblebrag.
              </p>
            </div> */}
            <Title>Numbers</Title>
            <div className="flex flex-wrap -m-4 text-center">
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <i
                    className="fa fa-code fa-4x text-indigo-500"
                    aria-hidden="true"
                  ></i>
                  <h2 className="title-font font-medium text-3xl ">
                    {this.state.linesOfCode}
                    {this.state.linesOfCode >= 40000 ? "+" : null}
                  </h2>
                  <p className="leading-relaxed">Lines of Code</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <i
                    class="fa fa-users fa-4x text-indigo-500"
                    aria-hidden="true"
                  ></i>
                  <h2 className="title-font font-medium text-3xl ">
                    {this.state.noOfClients}
                  </h2>
                  <p className="leading-relaxed">Clients</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <i
                    class="fa fa-file-text-o fa-4x text-indigo-500"
                    aria-hidden="true"
                  ></i>

                  <h2 className="title-font font-medium text-3xl ">
                    {this.state.noOfProjects}
                  </h2>
                  <p className="leading-relaxed">Projects</p>
                </div>
              </div>
              <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
                  <i
                    class="fa fa-coffee fa-4x text-indigo-500"
                    aria-hidden="true"
                  ></i>
                  <h2 className="title-font font-medium text-3xl ">
                    {this.state.noOfCoffee}
                  </h2>
                  <p className="leading-relaxed">Cups of Coffee</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Bounce>
    );
  }
}
