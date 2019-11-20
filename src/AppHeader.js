import React, { useState } from "react";
import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";

import "./AppHeader.css";

// const AppHeader = () => (
//   <div className="AppHeader">
//     <h1>Take That For Data</h1>
//     <h2>Premier League | Bundesliga | Serie A | La Liga | Ligue 1</h2>
//   </div>
// );

const AppHeader = () => {
  return (
    <Navbar bg="dark" variant="dark" className="navbar">
      <Navbar.Brand className="logo">N/CO</Navbar.Brand>
      <Nav className="navcontent">
        <Navbar.Text>About</Navbar.Text>
        <Navbar.Text>Experience</Navbar.Text>
        <Navbar.Text>Contact</Navbar.Text>
        <Navbar.Text>Resume</Navbar.Text>
      </Nav>
    </Navbar>
  );
};

export default AppHeader;
