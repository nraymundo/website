import React from "react";

import "./App.css";

import AppHeader from "./AppHeader";
import Intro from "./Intro";

const App = () => {
  return (
    <div className="App">
      <AppHeader />
      <Intro />
      <About />
    </div>
  );
};

export default App;
