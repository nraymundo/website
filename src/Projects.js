import React, { useState } from "react";
import "./Content.css";
import pivot from "./images/Projects/pivot.png";
import spotify from "./images/Projects/spotify.png";

const Experience = () => {
  //   let [currExperience, setCurrExperience] = useState("ta");

  return (
    <div className="MainContainer">
      <div className="Header-Projects">
        <h1>Projects</h1>
      </div>
      <div className="Menu-Projects">
        <div className="Container-Projects">
          <img src={pivot} alt="pivot" className="Logo"></img>
          <div class="Info-Projects">
            <div class="Info-Name">Pivot</div>
            <button
              class="Repo-Link"
              onClick={() =>
                window.open("https://github.com/wdibi/Pivot", "_blank")
              }
            >
              GitHub Repo
            </button>
          </div>
        </div>
        <div className="Container-Projects">
          <img src={spotify} alt="spotify" className="Logo"></img>
          <div class="Info-Projects">
            <div class="text">Playroll</div>
          </div>
        </div>
        <div className="Container-Projects">
          <img src={spotify} alt="spotify" className="Logo"></img>
          <div class="Info-Projects">
            <div class="text">NFA Simulator</div>
          </div>
        </div>
        {/* <div className="Container-Projects">
          <img src={spotify} alt="spotify" className="Logo"></img>
          <div class="Info-Projects">
            <div class="text">Soccer Stats</div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Experience;
