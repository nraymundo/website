import React from "react";

import "./react-tabs.css";
import "./Experience.css";

const Experience = () => {
  return (
    <div className="Experience">
      {/* <div className="ExpHeader">
        <hr className="LeftLine"></hr>
        <h1 className="HeaderText">Experience</h1>
        <hr className="RightLine"></hr>
      </div> */}
      <div className="ExpHeader">
        <h1>Experience</h1>
        <hr></hr>
      </div>
      <div className="JobContent">
        <div className="ExpNavButtons">
          <button>Computer Science TA</button>
          <button>Hyperloop</button>
          <button>ACM</button>
          <button>Playroll</button>
        </div>
        <div className="Job">
          <div className="JobInfo">
            <h1>Loyola Marymount University</h1>
            <p>Computer Science Department</p>
            <p>Teaching Assistant</p>
            <p>August 2018 - Present</p>
          </div>
          <div className="JobDescription">
            <li>
              Help other students with Computer Science related issues or
              assignments.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
