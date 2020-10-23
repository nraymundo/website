import React from "react";
import "./Projects.css";

import pivot from "./images/projects/pivot.jpg";
import nfa from "./images/projects/nfa.jpg";
import soccer from "./images/projects/soccer.jpg";
import github from "./images/projects/github.png";
import cop from "./images/projects/cop.png";

export default function Projects() {
  return (
    <div className="projects-page">
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
      <div className="container">
        <img src={nfa} alt="nfa" className="project-img" />
        <div className="middle">
          <div className="text">
            <h1>NFA Simulator</h1>
            <p>
              A nondeterministic finite automata simulator built with Python.
            </p>
            <a
              href="https://github.com/nraymundo/cmsi385"
              target="_blank"
              className="repo-container"
            >
              <img src={github} alt="nfa-repo" className="repo"></img>
            </a>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <img src={soccer} alt="soccer" className="project-img" />
        <div className="middle">
          <div className="text">
            <h1>Take That For Data</h1>
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
      <div className="container">
        <img src={cop} alt="cop" className="project-img" />
        <div className="middle">
          <div className="text">
            <h1>High Speed Strike</h1>
            <p>
              An online video game mimicking a police chase built with CSS/HTML
              and JavaScript.
            </p>
            <a
              href="https://github.com/nraymundo/High-Speed-Strike"
              target="_blank"
              className="repo-container"
            >
              <img src={github} alt="strike-repo" className="repo"></img>
            </a>
          </div>
        </div>
      </div> */}
    </div>
  );
}
