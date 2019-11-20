import React from "react";

import "./react-tabs.css";
import "./Education.css";

const Education = () => {
  return (
    <div className="Education">
      <div className="Header">
        <h1>Education</h1>
        <hr></hr>
      </div>
      <div className="EduContent">
        <div className="NavButtons">
          <button>University</button>
          <button>Relevant Coursework</button>
          <button>Relevant Course Projects</button>
        </div>
        <div className="SchoolName">
          <h1>Loyola Marymount University</h1>
          <p>Bachelor of Science, Computer Science</p>
          <p>August 2017 - May 2021</p>
          <p>GPA: 3.7</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
