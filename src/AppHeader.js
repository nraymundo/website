import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";

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
  );
};

export default AppHeader;
