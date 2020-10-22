import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";
import "./index.css";
import App from "./App";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Resume from "./resume.pdf";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

const routing = (
  <Router>
    <div>
      <Navbar>
        <Link to="/" className="logo">
          N/CO
        </Link>
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="navContent">
            <Link to="/" className="NavLink">
              Home
            </Link>
            <Link to="/about" className="NavLink">
              About
            </Link>
            <Link to="/projects" className="NavLink">
              Projects
            </Link>
            <Link to={Resume} target="newTab" className="ResumeLink">
              Resume
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
registerServiceWorker();
