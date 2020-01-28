import React from "react";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";

import "./Intro.css";

const Intro = () => {
  return (
    <Fade clear duration={4000}>
      <div className="mainParagraph">
        <p>
          Nicolas Raymundo is a developer, photographer, and student currently
          studying computer science at Loyola Marymount University.
        </p>
      </div>
    </Fade>
  );
};

export default Intro;
