import React from "react";
import "./style.css";

const SideNav = () => {
  return (
    <div class="sidenav">
      <a href="/home">Home</a>
      <a href="/portfolio">Portfolio</a>
      <a href="/resume">Resume</a>
      <a href="https://github.com/aamerson198" target="_blank">
        GitHub
      </a>
      <a href="mailto:aamerson198@gmail.com" target="_blank">
        Email
      </a>
      <a href="https://www.linkedin.com/in/andrew-j-amerson/" target="_blank">
        LinkedIn
      </a>
    </div>
  );
};

export default SideNav;
