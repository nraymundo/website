import React, { useState } from "react";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Link from "react-bootstrap/Nav";
import Fade from "react-reveal/Fade";

import "./AppHeader.css";
import resume from "./resume.pdf";

const AppHeader = ({ setCurrDisplay }) => {
  return (
    // <Fade top duration={4000}>
    <div className="navbarContainer">
      <Navbar
        collapseOnSelect
        // bg="dark"
        variant="dark"
        className="navbar"
        expand="xl"
      >
        <Nav.Link onClick={() => setCurrDisplay("intro")} className="logo">
          N/CO
        </Nav.Link>
        {/* <Navbar.Brand className="logo" onClick={() => setCurrDisplay("intro")}>
          N/CO
        </Navbar.Brand> */}
        <Navbar.Toggle
          className="toggle"
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav className="navcontent">
            {/* <Nav.Link
              onClick={() => setCurrDisplay("intro")}
              className="NavLink"
            >
              Home
            </Nav.Link> */}
            <Nav.Link
              onClick={() => setCurrDisplay("education")}
              className="NavLink"
            >
              Education
            </Nav.Link>
            <Nav.Link
              onClick={() => setCurrDisplay("experience")}
              className="NavLink"
            >
              Experience
            </Nav.Link>
            {/* <Nav.Link onClick={() => setCurrDisplay("contact")}>
              Contact
            </Nav.Link> */}
            <Nav.Link href={resume} target="newTab" className="ResumeLink">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
    // </Fade>
  );
};

export default AppHeader;
