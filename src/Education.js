import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import "./Content.css";

const Education = () => {
  let [currEducation, setCurrEducation] = useState("lmu");

  return (
    <Fade clear duration={3000}>
      <div className="MainContainer" id="educationComponent">
        <div className="Header">
          <h1>Education</h1>
        </div>
        <div className="SubContainer">
          <div className="NavButtons">
            <button onClick={() => setCurrEducation("lmu")}>University</button>
            <button onClick={() => setCurrEducation("coursework")}>
              Relevant Coursework
            </button>
            <button onClick={() => setCurrEducation("projects")}>
              Relevant Course Projects
            </button>
          </div>
          {currEducation === "lmu" && (
            <div className="SchoolName">
              <h1>Loyola Marymount University</h1>
              <p>Bachelor of Science, Computer Science</p>
              <p>August 2017 - May 2021</p>
              <p>GPA: 3.7</p>
            </div>
          )}
          {currEducation === "coursework" && (
            <div className="CourseworkHeader">
              <h1>Relevant Coursework</h1>
              <div className="Classes">
                <li>Databases</li>
                <li>Programming Languages</li>
                <li>Intro to Theory of Computation</li>
                <li>Data Structures</li>
                <li>Algorithms</li>
              </div>
            </div>
          )}
          {currEducation === "projects" && (
            <div className="ProjectsHeader">
              <h1>Course Projects</h1>
              <div className="Classes">
                <li>Take That for Data</li>
                <li>High Speed Strike</li>
                <li>Big Integer</li>
                <li>Change-Maker</li>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
};

export default Education;
