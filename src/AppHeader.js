import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Fade from "react-reveal/Fade";

import "./AppHeader.css";
import resume from "./resume.pdf";

// let navStyle = {
//   backgroundImage: linearGradient("to right", "#fdfffc", "#ebebeb")
// };

{
  /* <div className="card" style={{background: "linear-gradient(#e66465, #9198e5);" }}>sada</div> */
}

const AppHeader = () => {
  return (
    <Fade top duration={2000}>
      <div className="navbarContainer">
        <Navbar bg="dark" variant="dark" className="navbar">
          <Navbar.Brand className="logo">N/CO</Navbar.Brand>
          <Nav className="navcontent">
            <a href="#educationComponent">Education</a>
            <a href="#experienceComponent">Experience</a>
            <a href="#contactComponent">Contact</a>
            <a href={resume}>Resume</a>
          </Nav>
        </Navbar>
      </div>
    </Fade>
  );
};

export default AppHeader;
