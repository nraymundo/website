import React, { useState } from "react";

import "./App.css";

import Intro from "./Intro";
import Education from "./Education";
import Experience from "./Experience";
import About from "./About";
import Projects from "./Projects";
// import Contact from "./Buttons";

const App = () => {
  let [currDisplay, setCurrDisplay] = useState("intro");

  return (
    <div className="App">
      <div className="contentTest">
        {currDisplay === "intro" && <Intro />}
        {currDisplay === "education" && <Education />}
        {currDisplay === "experience" && <Experience />}
        {currDisplay === "about" && <About />}
        {currDisplay === "projects" && <Projects />}
      </div>
    </div>
  );
};

export default App;
