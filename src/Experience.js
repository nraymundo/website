import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import "./Content.css";

const Experience = () => {
  let [currExperience, setCurrExperience] = useState("ta");

  return (
    <Fade clear duration={3000}>
      <div className="MainContainer" id="experienceComponent">
        <div className="Header">
          <h1>Experience</h1>
          {/* <hr></hr> */}
        </div>
        <div className="SubContainer">
          <div className="NavButtons">
            <button onClick={() => setCurrExperience("ta")}>
              Computer Science TA
            </button>
            <button onClick={() => setCurrExperience("acm")}>ACM</button>
            <button onClick={() => setCurrExperience("playroll")}>
              Playroll
            </button>
            <button onClick={() => setCurrExperience("hyperloop")}>
              Hyperloop
            </button>
          </div>
          {currExperience === "ta" && (
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
          )}
          {currExperience === "acm" && (
            <div className="Job">
              <div className="JobInfo">
                <h1>Loyola Marymount University</h1>
                <p>Association for Computing Machinery</p>
                <p>Vice President of Outreach</p>
                <p>November 2018 - Present</p>
              </div>
              <div className="JobDescription">
                <li>
                  Gained experience in running a club on a college campus,
                  helping to gain exposure and organize events.
                </li>
                <li>
                  Learned new aspects of various coding languages through
                  meetings with other members and club
                </li>
              </div>
            </div>
          )}
          {currExperience === "playroll" && (
            <div className="Job">
              <div className="Playroll">
                <h1>Playroll</h1>
                <p>Frontend Developer</p>
                <p>September 2018 - May 2019</p>
              </div>
              <div className="JobDescription">
                <li>
                  Helped design a mobile application that allows users to create
                  “playrolls”, which replace the traditional idea of playlists.
                  Using a set of unique algorithms, Playroll uses your provided
                  music to create the perfect playlist.
                </li>
                <li>Worked on frontend using TypeScript and React Native.</li>
              </div>
            </div>
          )}
          {currExperience === "hyperloop" && (
            <div className="Job">
              <div className="JobInfo">
                <h1>Loyola Marymount University</h1>
                <p>Hyperloop</p>
                <p>Telemetry Team Member</p>
                <p>October 2017 - September 2018</p>
              </div>
              <div className="JobDescription">
                <li>
                  Member of the LMU Hyperloop Computer Science team, tasked with
                  working on designing the website.
                </li>
                <li>
                  Developed teamwork and time management skills to effectively
                  communicate and complete projects as effectively and
                  efficiently as possible.
                </li>
              </div>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
};

export default Experience;
