import React from "react";
import Header from "../../components/Header/Header";
import VideoBG from "../../components/VideoBG/VideoBG";
import SideNav from "../../components/SideNav/SideNav";
import "./style.css";
import ResumePDF from "./ajaResume.pdf";

const Resume = () => {
  return (
    <>
      <Header></Header>
      <VideoBG></VideoBG>
      <SideNav></SideNav>
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="resumeDiv">
              <h2>Andrew Amerson Resume</h2>
              <iframe
                src={ResumePDF}
                width="100%"
                height="600px"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
