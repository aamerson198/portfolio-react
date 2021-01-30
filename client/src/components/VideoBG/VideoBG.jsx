import React from "react";
import "./style.css";
import Vid from "./Smoke_4.mp4";

const VideoBG = () => {
  return (
    <video className="bg-video" autoPlay loop fade muted>
      <source src={Vid} type="video/mp4" />
    </video>
  );
};

export default VideoBG;
