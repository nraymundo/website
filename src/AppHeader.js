import React from "react";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
// import Link from "react-bootstrap/Nav";

import "./AppHeader.css";
import resume from "./resume.pdf";

const AppHeader = ({ setCurrDisplay }) => {
  return (
    <Navbar>
      <Nav.Link onClick={() => setCurrDisplay("intro")} className="logo">
        N/CO
      </Nav.Link>
      {/* <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="navcontent">
          <Nav.Link onClick={() => setCurrDisplay("intro")} className="NavLink">
            Home
          </Nav.Link>
          {/* <Nav.Link
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
        </Nav.Link> */}
          <Nav.Link onClick={() => setCurrDisplay("about")} className="NavLink">
            About
          </Nav.Link>
          <Nav.Link
            onClick={() => setCurrDisplay("projects")}
            className="NavLink"
          >
            Projects
          </Nav.Link>
          <Nav.Link href={resume} target="newTab" className="ResumeLink">
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    // <Navbar bg="light" expand="xl">
    //   <Nav.Link onClick={() => setCurrDisplay("intro")} className="logo">
    //     N/CO
    //   </Nav.Link>
    //   <Navbar.Toggle className="toggle" aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
    //     <Nav className="navcontent">
    //       <Nav.Link onClick={() => setCurrDisplay("intro")} className="NavLink">
    //         Home
    //       </Nav.Link>
    //       <Nav.Link
    //         onClick={() => setCurrDisplay("education")}
    //         className="NavLink"
    //       >
    //         Education
    //       </Nav.Link>
    //       <Nav.Link
    //         onClick={() => setCurrDisplay("experience")}
    //         className="NavLink"
    //       >
    //         Experience
    //       </Nav.Link>
    //       <Nav.Link onClick={() => setCurrDisplay("about")} className="NavLink">
    //         About
    //       </Nav.Link>
    //       <Nav.Link
    //         onClick={() => setCurrDisplay("projects")}
    //         className="NavLink"
    //       >
    //         Projects
    //       </Nav.Link>
    //       <Nav.Link href={resume} target="newTab" className="ResumeLink">
    //         Resume
    //       </Nav.Link>
    //     </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
};

export default AppHeader;
