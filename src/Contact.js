import React, { useState } from "react";

import "./react-tabs.css";
import "./Contact.css";
import email from "./images/email.jpg";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import insta from "./images/insta.png";
import twitter from "./images/twitter.png";

const Contact = () => {
  let [currContact, setCurrContact] = useState("email");

  return (
    <div className="Contact" id="contactComponent">
      <div className="ContactHeader">
        <h1>Contact</h1>
        <hr></hr>
      </div>
      <div className="JobContent">
        <div className="ContactNavButtons">
          <button onClick={() => setCurrContact("email")}>E-Mail</button>
          <button onClick={() => setCurrContact("linkedin")}>Linked In</button>
          <button onClick={() => setCurrContact("github")}>GitHub</button>
          <button onClick={() => setCurrContact("insta")}>Instagram</button>
          <button onClick={() => setCurrContact("twitter")}>Twitter</button>
        </div>
        <div className="ContactInfo">
          {currContact === "email" && (
            <div className="emailHeader">
              <h1>E-Mail</h1>
              <img
                src={email}
                alt={"email"}
                className="emailLogo"
                onClick={() =>
                  window.open("mailto:nraymund@lion.lmu.edu", "email")
                }
              ></img>
            </div>
          )}
          {currContact === "linkedin" && (
            <div className="linkedinHeader">
              <h1>LinkedIn</h1>
              <img
                src={linkedin}
                alt={"linkedin"}
                className="linkedinLogo"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/nicolasraymundo/",
                    "linkedIn"
                  )
                }
              ></img>
            </div>
          )}
          {currContact === "github" && (
            <div className="githubHeader">
              <h1>GitHub</h1>
              <img
                src={github}
                alt={"github"}
                className="githubLogo"
                onClick={() =>
                  window.open("https://github.com/nraymundo", "github")
                }
              ></img>
            </div>
          )}
          {currContact === "insta" && (
            <div className="instaHeader">
              <h1>Instagram</h1>
              <img
                src={insta}
                alt={"insta"}
                className="instaLogo"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/nicoraymundo/",
                    "instagram"
                  )
                }
              ></img>
            </div>
          )}
          {currContact === "twitter" && (
            <div className="twitterHeader">
              <h1>Twitter</h1>
              <img
                src={twitter}
                alt={"twitter"}
                className="twitterLogo"
                onClick={() =>
                  window.open("https://twitter.com/nicoraymundo2", "twitter")
                }
              ></img>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
