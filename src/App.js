import React, { useState } from "react";

import "./App.css";

import AppHeader from "./AppHeader";
import Intro from "./Intro";
import Education from "./Education";
import Experience from "./Experience";
import Projects from "./Projects";
// import Contact from "./Buttons";

const App = () => {
  let [currDisplay, setCurrDisplay] = useState("intro");

  return (
    <div className="App">
      <div className="AppHeader">
        <div className="menu">
          <AppHeader setCurrDisplay={setCurrDisplay} />
        </div>
      </div>
      <div className="contentTest">
        {currDisplay === "intro" && <Intro />}
        {currDisplay === "education" && <Education />}
        {currDisplay === "experience" && <Experience />}
        {currDisplay === "projects" && <Projects />}
      </div>
    </div>
  );
};

export default App;
