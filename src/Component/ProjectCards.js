import React, { Component } from "react";
// import ymgradLogo from "./../assets/images/ymgrad.png";
import indiefolioLogo from "./../assets/images/indiefolio.png";
import pracifyLogo from "./../assets/images/pracify.png";
import ymgradLogo from "./../assets/images/ymgrad.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { projects } from "./../data/project-data";
import Title from "./Title";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default class ProjectCards extends Component {
  options = {
    loop: false,
    margin: 20,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 4,
      },
    },
  };

  handleClick = (link) => {
    window.open(link);
  };

  render() {
    return (
      <div id="projects" className="">
        <section className=" body-font">
          <div className="container px-5 md:py-24 sm:py-32 lg:py-24 py-32 mx-auto">
            <Title>Projects</Title>
            <div className="flex flex-wrap -m-4">
              <OwlCarousel
                navText={[
                  "<i class='fa fa-chevron-left fa-2x  navi-btn left hidden lg:block'></i>",
                  "<i class='fa fa-chevron-right fa-2x navi-btn right hidden lg:block'></i>",
                ]}
                className="owl-theme"
                {...this.options}
              >
                {projects.map((obj, i) => (
                  <div
                    key={i}
                    className=" mx-8 sm:mx-3 md:mx-0 lg:mx-0"
                    onClick={this.handleClick.bind(this, obj.url)}
                  >
                    <div className="border border-gray-200 rounded-lg project-card overflow-hidden">
                      <div
                        className="card-image"
                        style={{
                          backgroundImage: `url(${require(`./../assets/images/${obj.imageName}`)})`,
                        }}
                      ></div>
                      <div className="p-6">
                        <h3 className="tracking-widest uppercase text-indigo-500 text-xs font-medium title-font">
                          {obj.type}
                        </h3>
                        <h2 className="text-lg font-medium title-font mb-4">
                          {obj.companyName}
                        </h2>
                        <p className="leading-relaxed text-base">{obj.info}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </OwlCarousel>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
