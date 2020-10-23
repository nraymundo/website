import React, { useState, useCallback } from "react";
import { Link, Route } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import Resume from "./resume.pdf";
import "./Navbar.css";

export default function NavigationBar() {
  let [isMenuOpen, setIsMenuOpen] = useState(false);

  const memoizedHandleClick = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
  });

  let displayHamburgerMenu = () => {
    return (
      <HamburgerMenu
        isOpen={isMenuOpen}
        menuClicked={memoizedHandleClick}
        width={20}
        height={17}
        strokeWidth={1}
        rotate={0}
        color="orange"
        borderRadius={0}
        animationDuration={0.5}
      />
    );
  };

  let displayMobileNavBar = () => {
    return (
      <Navbar className="navbar-mobile">
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="navContent-mobile">
            <Link to="/projects" className="NavLink-mobile">
              Projects
            </Link>
            <Link to="/journal" className="NavLink-mobile">
              Journal
            </Link>
            <Link to={Resume} target="newTab" className="NavLink-mobile">
              Resume
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };

  let displayNavBar = () => {
    return (
      <Navbar>
        {/* <Link to="/" className="logo">
          N/CO
        </Link> */}
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="navContent">
            <Link to="/projects" className="NavLink">
              Projects
            </Link>
            <Link to="/journal" className="NavLink">
              Journal
            </Link>
            <Link to={Resume} target="newTab" className="NavLink">
              Resume
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };

  return (
    <div className="nav-content">
      <div className="navbar">
        <Link to="/" className="logo">
          N/CO
        </Link>
        {/* <button onClick={() => console.log(window.innerWidth)}>Hi</button> */}
        {window.innerWidth > 750 ? displayNavBar() : displayHamburgerMenu()}
      </div>
      <div className="content">{isMenuOpen ? displayMobileNavBar() : null}</div>
    </div>
  );
}
