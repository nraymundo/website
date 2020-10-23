import React from "react";
import Clipboard from "react-clipboard.js";
import "./Info.css";

export default function Info() {
  return (
    <div className="main-paragraph">
      <p className="intro-content">
        Nico Raymundo is a developer and photographer from the San Francisco Bay
        Area, currently at{" "}
        <a class="intext-hyperlink" href="http://lmu.edu" target="_blank">
          Loyola Marymount University
        </a>
        .
      </p>
      <hr className="divider" />
      <div className="bottom-section">
        <div className="about">
          <p>ABOUT</p>
          <p>
            I am currently studying Computer Science at Loyola Marymount
            University in Los Angeles, CA. I was born and raised in San Jose, CA
            but decided to migrate south to further my education. Living in Los
            Angeles has given me an opportunity to try new things, visit new
            unfamiliar places, and cultivate relationships with incredible
            people from around the globe.
          </p>
          <p>
            At LMU, I've had the opportunity to take part in a multitude of
            extra-curricular activities. As the current Vice-President of
            Outreach for the LMU chapter of the Association for Computing
            Machinery, we as an e-board have worked to hold fun, engaging events
            for the LMU CS community, with our biggest event being the first
            ever LMU Hackathon. I am also an active member of Delta Sigma Phi, a
            social fraternity on campus, as well as a teaching assistant for the
            Computer Science department.
          </p>
          <p>
            Outside of school, I enjoy playing sports with friends, taking
            photos around the city, working on my side projects, or going on
            runs around my neighborhood with my dog. I'd love to get to know
            you, so don't hesitate to get in touch!
          </p>
        </div>
        <div className="side-section">
          <div className="cv">
            <p>CV</p>
            <p>
              Loyola Marymount University
              <br />
              BA Computer Science
              <br />
              2017 - Present
            </p>
            <p>
              Maxim Integrated
              <br />
              IT Business Intelligence Intern
              <br />
              2020
            </p>
            <p>
              Loyola Marymount University
              <br />
              Computer Science Teaching Assistant
              <br />
              2018 - Present
            </p>
            <p>
              Association for Computing Machinery
              <br />
              Vice President of Outreach
              <br />
              2018 - Present
            </p>
          </div>
          <div className="connect">
            {/* <br />
            <br /> */}
            <p>CONNECT</p>
            <p>
              <Clipboard
                className="email"
                data-clipboard-text="nraymund@lion.lmu.edu"
              >
                Email
              </Clipboard>
            </p>
            <p>
              <a
                className="social"
                href="https://www.instagram.com/nicoraymundo/"
                target="_blank"
              >
                Instagram
              </a>
            </p>
            <p>
              <a
                className="social"
                href="https://twitter.com/nicoraymundo2"
                target="_blank"
              >
                Twitter
              </a>
            </p>
            <p>
              <a
                className="social"
                href="https://github.com/nraymundo"
                target="_blank"
              >
                GitHub
              </a>
            </p>
            <p>
              <a
                className="social"
                href="https://www.linkedin.com/in/nicolasraymundo/"
                target="_blank"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
