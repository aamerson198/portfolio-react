import React from "react";
import Header from "../../components/Header/Header";
import VideoBG from "../../components/VideoBG/VideoBG";
import SideNav from "../../components/SideNav/SideNav";
import "./style.css";
import Marta from "./martapic.png";
import Planner from "./planner.png";
import Tungsten from "./Tungsten.png";
import Budget from "./budget.png";
import Fitness from "./fitness.png";
import UserD from "./userdir.png";

const Portfolio = () => {
  return (
    <>
      <Header></Header>
      <VideoBG></VideoBG>
      <SideNav></SideNav>
      <div className="container">
        <div className="row">
          <div className="col-sm-10 parentPort">
            <div className="titleDiv">
              <h2>Selected Applications</h2>
            </div>
            <div className="porfoliocontainer">
              <a
                href="https://blooming-chamber-97888.herokuapp.com/"
                target="_blank"
              >
                <figure>
                  <img
                    className="plannerPic"
                    src={Budget}
                    alt="screenshot of a planner built by the site's author."
                    height="150px"
                    width="300px"
                  />
                  <figcaption>
                    <b>Budgeting App</b>
                  </figcaption>
                </figure>
              </a>
              <a
                href="https://floating-crag-67869.herokuapp.com/"
                target="_blank"
              >
                <figure>
                  <img
                    className="plannerPic"
                    src={Tungsten}
                    alt="screenshot of a planner built by the site's author."
                    height="150px"
                    width="300px"
                  />
                  <figcaption>
                    <b>Tungsten Tools Project</b>
                  </figcaption>
                </figure>
              </a>
              <a
                href="https://aamerson198.github.io/user-directory/"
                target="_blank"
              >
                <figure>
                  <img
                    className="plannerPic"
                    src={UserD}
                    alt="screenshot of a budgeting app built by the site's author"
                    height="150px"
                    width="300px"
                  />
                  <figcaption>
                    <b>User Directory</b>
                  </figcaption>
                </figure>
              </a>
              <a
                href="https://whispering-citadel-68030.herokuapp.com/?id=5ffc9f83a1c2d40017b9e49e"
                target="_blank"
              >
                <figure>
                  <img
                    className="plannerPic"
                    src={Fitness}
                    alt="screenshot of a planner built by the site's author."
                    height="150px"
                    width="300px"
                  />
                  <figcaption>
                    <b>Fitness Tracker App</b>
                  </figcaption>
                </figure>
              </a>
              "
              <a
                href="https://aamerson198.github.io/What-da-ya-have/"
                target="_blank"
              >
                <figure>
                  <img
                    className="martapic"
                    src={Marta}
                    alt="screenshot of a website built by the author of this page"
                    height="150px"
                    width="300px"
                  />
                  <figcaption>
                    <b>What Da Ya Have App</b>
                  </figcaption>
                </figure>
              </a>
              <a
                href="https://aamerson198.github.io/workday-planner/"
                target="_blank"
              >
                <figure>
                  <img
                    className="plannerPic"
                    src={Planner}
                    alt="screenshot of a planner built by the site's author."
                    height="150px"
                    width="300px"
                  />
                  <figcaption>
                    <b>Daily Planner App</b>
                  </figcaption>
                </figure>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
