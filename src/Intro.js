import React from "react";
import Fade from "react-reveal/Fade";

import "./Intro.css";

const Intro = () => {
  return (
    <Fade clear duration={4000}>
      <div className="main-paragraph">
        <p className="intro-content">
          Hello, my name is Nico. I am a student currently studying computer
          science at{" "}
          <a class="intext-hyperlink" href="http://lmu.edu" target="_blank">
            Loyola Marymount University
          </a>
          .
        </p>
      </div>
    </Fade>
  );
};

export default Intro;
