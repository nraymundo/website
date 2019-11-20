import React from "react";

import "./App.css";

import AppHeader from "./AppHeader";
import Intro from "./Intro";
import Education from "./Education";

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <Intro />
      <Education />
    </div>
  );
};

export default App;
