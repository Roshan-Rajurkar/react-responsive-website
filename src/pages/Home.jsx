import React from "react";
import { NavLink } from "react-router-dom";
import HomeBg from "../Images/home_bg.svg";
import Common from "./Common";
function Home() {
  return (
    <Common
      heading="Hey, I'm"
      imgsrc={HomeBg}
      visit="/contact"
      text="Hire Me"
    />
  );
}

export default Home;
