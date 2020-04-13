import React from "react";

import "./Projects.css";

import jonah from "./images/Filler/jonah.jpg";
// import pivot from "./images/Projects/pivot.jpg";
import playroll from "./images/Projects/playroll.jpg";
import playroll2 from "./images/Projects/loading.png";
import soccer from "./images/Projects/soccer.jpg";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="projects-title">Latest Projects</h1>
        <hr className="horizontal-line" />
      </div>
      <div className="project-individual-container-top">
        <img src={playroll2} alt="playroll" className="playroll-img" />
        <a href="" target="_blank" className="project-individual-title">
          Playroll
        </a>
        <h1 className="project-individual-date">Spring 2019</h1>
        <hr className="horizontal-line-projects" />
      </div>
      <div className="project-individual-container">
        <img src={jonah} alt="jonah" className="jonah-img" />
        <a
          href="https://github.com/wdibi/Pivot"
          className="project-individual-title"
          target="_blank"
        >
          Pivot
        </a>
        <h1 className="project-individual-date">Spring 2020</h1>
        <hr className="horizontal-line-projects" />
      </div>
      <div className="project-individual-container">
        <img src={soccer} alt="soccer" className="pivot-img" />
        <a
          href="https://github.com/nraymundo/cmsi370"
          className="project-individual-title"
          target="_blank"
        >
          Take That For Data
        </a>
        <h1 className="project-individual-date">Fall 2019</h1>
        <hr className="horizontal-line-projects" />
      </div>
      <div className="project-individual-container-bottom">
        <img src={jonah} alt="jonah" className="jonah-img" />
        <a
          href="https://github.com/nraymundo/cmsi385"
          className="project-individual-title"
          target="_blank"
        >
          NFA Simulator
        </a>
        <h1 className="project-individual-date">Fall 2019</h1>
        <hr className="horizontal-line-projects" />
      </div>
    </div>

    // <div className="MainContainer">
    //   <div className="Header-Projects">
    //     <h1>Projects</h1>
    //   </div>
    //   <div className="Menu-Projects">
    //     <div className="Container-Projects">
    //       <img src={pivot} alt="pivot" className="Logo"></img>
    //       <div class="Info-Projects">
    //         <div class="Info-Name">Pivot</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Projects;
