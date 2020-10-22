import React, { useState } from "react";

import "./App.css";

import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
// import Contact from "./Buttons";

const App = () => {
  let [currDisplay, setCurrDisplay] = useState("intro");

  return (
    <div className="App">
      <div className="contentTest">{currDisplay === "intro" && <Intro />}</div>
    </div>
  );
};

export default App;
