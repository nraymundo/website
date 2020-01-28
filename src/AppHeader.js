import React, { useState } from "react";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
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
    // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    //   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    //   <Navbar.Collapse id="responsive-navbar-nav">
    //     <Nav className="mr-auto">
    //       <Nav.Link href="#features">Features</Nav.Link>
    //       <Nav.Link href="#pricing">Pricing</Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
    <Fade top duration={2000}>
      <div className="navbarContainer">
        <Navbar
          collapseOnSelect
          // bg="dark"
          variant="dark"
          className="navbar"
          expand="lg"
        >
          <Navbar.Brand className="logo">N/CO</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            className="justify-content-end"
            id="responsive-navbar-nav"
          >
            <Nav className="navcontent">
              <Nav.Link href="#educationComponent">Education</Nav.Link>
              <Nav.Link href="#experienceComponent">Experience</Nav.Link>
              <Nav.Link href="#contactComponent">Contact</Nav.Link>
              <Nav.Link href={resume}>Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Fade>
  );
};

export default AppHeader;
