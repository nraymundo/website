import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { useMediaQuery } from "react-responsive";

import "./AppHeader.css";
import resume from "./resume.pdf";
import nav from "./images/nav.png";

// let navStyle = {
//   backgroundImage: linearGradient("to right", "#fdfffc", "#ebebeb")
// };

{
  /* <div className="card" style={{background: "linear-gradient(#e66465, #9198e5);" }}>sada</div> */
}

const AppHeader = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 414px)" });
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 414px)"
  });

  let [currMenu, setCurrMenu] = useState("menu");

  return (
    <Fade top duration={2000}>
      {isTabletOrMobile ? (
        <div className="header-mobile">
          <h1 className="logo-mobile">NiiiiiCO</h1>
          <img
            src={nav}
            alt={"nav"}
            className="button"
            onClick={() => setCurrMenu("fill")}
          ></img>
          <div className="menubar">
            {currMenu === "fill" && (
              <div className="mobile-nav">
                <a href="#educationComponent">Education</a>
                <a href="#experienceComponent">Experience</a>
                <a href="#contactComponent">Contact</a>
                <a href={resume}>Resume</a>
              </div>
            )}
          </div>
        </div>
      ) : (
        // <div className="navbarContainer">
        //   <Navbar bg="dark" variant="dark" className="navbar">
        //     <Navbar.Brand className="logo">NiiiiiCO</Navbar.Brand>
        //     <Nav className="navcontent">
        //       <a href="#educationComponent">Education</a>
        //       <a href="#experienceComponent">Experience</a>
        //       <a href="#contactComponent">Contact</a>
        //       <a href={resume}>Resume</a>
        //     </Nav>
        //   </Navbar>
        // </div>
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
      )}
    </Fade>
  );
};

export default AppHeader;
