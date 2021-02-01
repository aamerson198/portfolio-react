import React from "react";
import Headshot from "./headshot.jpeg";
import "./homeStyle.css";
import Header from "../../components/Header/Header";
import VideoBG from "../../components/VideoBG/VideoBG";
import SideNav from "../../components/SideNav/SideNav";

const Home = () => {
  return (
    <>
      <Header> </Header>
      <VideoBG> </VideoBG>
      <SideNav></SideNav>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="about">
              <img
                className="drewpic"
                src={Headshot}
                alt="image of Drew Amerson on top of a building"
                height="270px"
              />
              <p>
                Andrew Amerson is a creative and web developer living in
                Atlanta, GA. He is currently the music director of Buckhead
                Church in Atlanta and is a student at the Georgia Tech Full
                Stack Web Developer Bootcamp. Andrew is strong in HTML and CSS
                and is also proficient in JavaScript. Andrew is a strong video
                editor, audio engineer, and has a background in finance,
                accounting, and analytics. In his spare time Andrew enjoys
                hanging out with his wife, Christina and son, Elon. He also
                enjoys reading, playing and watching soccer, sports in general,
                listening to podcasts, and learning new skills.{" "}
                <p>
                  Andrew is always looking for new opportunities to freelance
                  and colloborate on creative projects where he can serve
                  clients through great design, development, and marketing.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
