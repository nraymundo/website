import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import email from "./images/Contact/email.jpg";
import linkedin from "./images/Contact/linkedin.png";
import github from "./images/Contact/github.png";
import githubdm from "./images/Contact/githubb.svg";
import insta from "./images/Contact/insta.png";
import twitter from "./images/Contact/twitter.png";

import "./Contact.css";

const Contacts = () => {
  return (
    <div className="contacts-page">
      <div className="contacts-header">
        <h1 className="contacts-title">Contact</h1>
        <hr className="horizontal-line" />
      </div>
      <div className="icon-container">
        <a href="mailto:nraymund@lion.lmu.edu" target="_blank">
          <img src={email} alt="email" className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/nicolasraymundo/" target="_blank">
          <img src={linkedin} alt="linkedin" className="icon" />
        </a>
        <a href="https://github.com/nraymundo" target="_blank">
          <img src={githubdm} alt="github" className="icon" />
        </a>
        <a href="https://www.instagram.com/nicoraymundo/" target="_blank">
          <img src={insta} alt="insta" className="icon" />
        </a>
        <a href="https://twitter.com/nicoraymundo2" target="_blank">
          <img src={twitter} alt="twitter" className="icon" />
        </a>
      </div>
    </div>
  );
};

export default Contacts;
