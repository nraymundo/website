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
      <AppHeader setCurrDisplay={setCurrDisplay} />
      {currDisplay === "intro" && <Intro />}
      {currDisplay === "education" && <Education />}
      {currDisplay === "experience" && <Experience />}
      {currDisplay === "contact" && <Contact />}
    </div>
  );
};

export default App;
