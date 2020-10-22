import React from "react";

import "./Projects.css";

import jonah from "./images/Filler/jonah.jpg";
import pivot from "./images/Projects/pivot.jpg";
import nfa from "./images/Projects/nfa.jpg";
import playroll from "./images/Projects/playroll.jpg";
import soccer from "./images/Projects/soccer.jpg";
import github from "./images/Contact/github.png";

const Projects = () => {
  return (
    <div className="projects-page">
      <div className="projects-header">
        <h1 className="projects-title">Latest Projects</h1>
        <hr className="horizontal-line" />
      </div>
      <div className="projects-container">
        <div className="project-individual-container-top">
          <div className="container">
            <img src={pivot} alt="pivot" className="project-img" />
            <div className="middle">
              <div className="text">
                <h1>Pivot</h1>
                <p>
                  A custom programming language using a custom compiler with
                  semantic analysis, code generation, and code optimization.
                </p>
                <a
                  href="https://github.com/wdibi/Pivot"
                  target="_blank"
                  className="repo-container"
                >
                  <img src={github} alt="pivot-repo" className="repo"></img>
                </a>
              </div>
            </div>
          </div>
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
          <div className="container">
            <img src={nfa} alt="nfa" className="project-img" />
            <div className="middle">
              <div className="text">
                <h1>NFA Simulator</h1>
                <p>
                  A nondeterministic finite automata simulator built with
                  Python.
                </p>
                <a
                  href="https://github.com/nraymundo/cmsi385"
                  target="_blank"
                  className="repo-container"
                >
                  <img src={github} alt="pivot-repo" className="repo"></img>
                </a>
              </div>
            </div>
          </div>
          <a
            href="https://github.com/nraymundo/cmsi385"
            target="_blank"
            className="project-individual-title"
          >
            NFA Simulator
          </a>
          <h1 className="project-individual-date">Fall 2019</h1>
        </div>
      </div>
    </div>
  );
};

export default Projects;
