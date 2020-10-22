import React from "react";

import "./Projects.css";

import jonah from "./images/Filler/jonah.jpg";
import pivot from "./images/Projects/pivot.jpg";
import nfa from "./images/Projects/nfa.jpg";
import playroll from "./images/Projects/playroll.jpg";
import soccer from "./images/Projects/soccer.jpg";

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1 className="projects-title">Latest Projects</h1>
        <hr className="horizontal-line" />
      </div>
      <div className="projects-container">
        <div className="project-individual-container-top">
          {/* <img src={playroll2} alt="playroll" /> */}
          <span className="overlay">
            <a
              href="https://github.com/wdibi/Pivot"
              target="_blank"
              className="clickable-img"
            >
              <img src={pivot} alt="pivot" className="pivot-img" />
            </a>
          </span>
          <a
            href="https://github.com/wdibi/Pivot"
            target="_blank"
            className="project-individual-title"
          >
            Pivot
          </a>
          <h1 className="project-individual-date">Spring 2020</h1>
        </div>
        <hr className="horizontal-line-projects" />
        <div className="project-individual-container-top">
          <span className="overlay">
            <a
              href="https://github.com/wdibi/Pivot"
              target="_blank"
              className="clickable-img"
            >
              <img src={nfa} alt="nfa" className="jonah-img" />
            </a>
          </span>
          <a
            href="https://github.com/nraymundo/cmsi385"
            target="_blank"
            className="project-individual-title"
          >
            NFA Simulator
          </a>
          <h1 className="project-individual-date">Fall 2019</h1>
          {/* <hr className="horizontal-line-projects" /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
