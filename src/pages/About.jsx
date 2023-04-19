import React from "react";
import { NavLink } from "react-router-dom";
import HomeBg from "../Images/home_bg.svg";
import Common from "./Common";

function About() {
  return (
    <Common
      heading={"Welcome to About Page"}
      imgsrc={HomeBg}
      visit="/contact"
      text="contact"
    />
  );
}

export default About;
