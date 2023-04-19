import React from "react";
// importing bootstrap version 5
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import NoPage from "./NoPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";

function App() {
  return (
    <>
      {/* ?navBar is Common in all Pages  */}
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/contact" Component={Contact} />
        <Route exact path="/projects" Component={Projects} />
        <Route path="*" component={NoPage} />
      </Routes>
    </>
  );
}

export default App;
