import React, { useState } from "react";

import "./App.css";

import AppHeader from "./AppHeader";
import Intro from "./Intro";
import Education from "./Education";
import Experience from "./Experience";
import Contact from "./Contact";

const App = () => {
  let [currDisplay, setCurrDisplay] = useState("intro");

  return (
    <div className="App">
      <div className="AppHeader">
        <div className="menu">
          <AppHeader setCurrDisplay={setCurrDisplay} />
        </div>
      </div>
      {/* <div className="menu">
        <AppHeader setCurrDisplay={setCurrDisplay} />
      </div> */}
      <div className="contentTest">
        {currDisplay === "intro" && <Intro />}
        {currDisplay === "education" && <Education />}
        {currDisplay === "experience" && <Experience />}
        {currDisplay === "contact" && <Contact />}
      </div>
    </div>
  );
};

export default App;
