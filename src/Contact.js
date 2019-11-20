import React from "react";

import "./react-tabs.css";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="Contact">
      {/* <div className="ExpHeader">
        <hr className="LeftLine"></hr>
        <h1 className="HeaderText">Experience</h1>
        <hr className="RightLine"></hr>
      </div> */}
      <div className="ContactHeader">
        <h1>Contact</h1>
        <hr></hr>
      </div>
      <div className="JobContent">
        <div className="ContactNavButtons">
          <button>E-Mail</button>
          <button>Linked In</button>
          <button>GitHub</button>
          <button>Instagram</button>
          <button>Twitter</button>
        </div>
        <div className="ContactInfo">
          <div className="ContactType">
            <h1>E-Mail Address</h1>
            <p>nraymund@lion.lmu.edu</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
