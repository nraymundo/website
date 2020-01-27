import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { useMediaQuery } from "react-responsive";

import "./Education.css";

const Education = () => {
  let [currEducation, setCurrEducation] = useState("lmu");
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 414px)" });

  return (
    <Fade clear duration={3000}>
      <div
        className={"Education" + (isTabletOrMobile ? "-mobile" : "")}
        id={"educationComponent" + (isTabletOrMobile ? "-mobile" : "")}
      >
        <div className={"Header" + (isTabletOrMobile ? "-mobile" : "")}>
          <h1>Education</h1>
          <hr></hr>
        </div>
        <div className={"EduContent" + (isTabletOrMobile ? "-mobile" : "")}>
          <div className={"NavButtons" + (isTabletOrMobile ? "-mobile" : "")}>
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
                <li>Interaction Design</li>
                <li>Intro to Theory of Computation</li>
                <li>Calculus I, II</li>
                <li>Methods of Proof</li>
                <li>Data Structures</li>
                <li>Computer Systems Organization</li>
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
