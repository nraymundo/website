import React from "react";
// import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Image from "react-bootstrap/Image";

import email from "./images/email.jpg";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";

import "./Buttons.css";

const Contact = () => {
  return (
    <div className="Sidebar d-flex flex-column">
      <ButtonGroup aria-label="First group" className="ButtonG">
        {/* <Button>Linked In</Button> */}
        <Image
          src={linkedin}
          className="linkedinLogo"
          alt={"linkedin"}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/nicolasraymundo/",
              "linkedIn"
            )
          }
        />
      </ButtonGroup>
      <ButtonGroup aria-label="Second group" className="ButtonG">
        {/* <Button>GitHub</Button> */}
        <Image
          src={github}
          className="githubLogo"
          alt={"github"}
          onClick={() => window.open("https://github.com/nraymundo", "github")}
        />
      </ButtonGroup>
      <ButtonGroup aria-label="Third group" className="ButtonG">
        {/* <Button>E-Mail</Button> */}
        <Image
          src={email}
          className="emailLogo"
          alt={"email"}
          onClick={() => window.open("mailto:nraymund@lion.lmu.edu", "email")}
        />
      </ButtonGroup>
    </div>
  );
};

export default Contact;
