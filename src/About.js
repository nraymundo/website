import React from "react";
import Fade from "react-reveal/Fade";

import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-me-container">
        <h1 className="about-title">About Me</h1>
        <hr className="horizontal-line" />
        <p className="about-me-content">
          I currently am studying Computer Science at Loyola Marymount
          University in Los Angeles, CA. I was born and raised in San Jose, CA
          but decided to migrate south to further my education. Living in Los
          Angeles has given me an opportunity to try new things, visit new
          unfamiliar places, and cultivate relationships with incredible people
          from around the globe.
        </p>
        <p className="about-me-content">
          At LMU, I've had the opportunity to take part in a multitude of
          extra-curricular activities. As the current Vice-President of Outreach
          for the LMU chapter of the Association for Computing Machinery, we as
          an e-board have worked to hold fun, engaging events for the LMU CS
          community, with our biggest event being the first ever LMU Hackathon.
          I am also an active member of Delta Sigma Phi, a social fraternity on
          campus, as well as a teaching assistant for the Computer Science
          department.
        </p>
        <p className="about-me-content">
          Outside of school, I enjoy playing sports with friends, taking photos
          around the city, working on my side projects, or going on runs around
          my neighborhood with my dog. I'd love to get to know you, so don't
          hesitate to get in touch!
        </p>
      </div>
      <div className="skills-container">
        <h1 className="about-title">Skills</h1>
        <hr className="horizontal-line" />
        <div className="skills-content">
          <div className="skills-programming">
            <h2 className="list-title">Programming</h2>
            <ul className="list-content">
              <li>JavaScript</li>
              <li>Java</li>
              <li>Python</li>
              <li>HTML/CSS</li>
              <li>C/C++</li>
              <li>Swift</li>
            </ul>
          </div>
          <div className="skills-tech">
            <h2 className="list-title">Technologies</h2>
            <ul className="list-content">
              <li>React</li>
              <li>SQL</li>
              <li>Git</li>
              <li>Mac OS</li>
              <li>Windows</li>
              <li>Linux</li>
              <li>Terminal</li>
              <li>Adobe Photoshop/Illustrator/InDesign</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
