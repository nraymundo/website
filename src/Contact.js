import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import "./Contact.css";
import "./Experience.css";
import email from "./images/email.jpg";
import linkedin from "./images/linkedin.png";
import github from "./images/github.png";
import githubdm from "./images/githubdm.png";
import insta from "./images/insta.png";
import twitter from "./images/twitter.png";

const Contact = () => {
  let [currExperience, setCurrExperience] = useState("email");

  return (
    <Fade clear duration={3000}>
      <div className="MainContainer" id="educationComponent">
        <div className="Header">
          <h1>Contact</h1>
        </div>
        <div className="SubContainer">
          <div className="NavButtons">
            <button onClick={() => setCurrExperience("email")}>E-Mail</button>
            <button onClick={() => setCurrExperience("linkedin")}>
              Linked In
            </button>
            <button onClick={() => setCurrExperience("github")}>GitHub</button>
            <button onClick={() => setCurrExperience("insta")}>
              Instagram
            </button>
            <button onClick={() => setCurrExperience("twitter")}>
              Twitter
            </button>
          </div>
          {currExperience === "email" && (
            <div className="emailHeader">
              <h1>E-Mail</h1>
              <img
                src={email}
                alt={"email"}
                className="emailLogo"
                onClick={() =>
                  window.open("mailto:nraymund@lion.lmu.edu", "email")
                }
              ></img>
            </div>
          )}
          {currExperience === "linkedin" && (
            <div className="linkedinHeader">
              <h1>LinkedIn</h1>
              <img
                src={linkedin}
                alt={"linkedin"}
                className="linkedinLogo"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/nicolasraymundo/",
                    "linkedIn"
                  )
                }
              ></img>
            </div>
          )}
          {currExperience === "github" && (
            <div className="githubHeader">
              <h1>GitHub</h1>
              <img
                src={github}
                alt={"github"}
                className="githubLogo"
                onClick={() =>
                  window.open("https://github.com/nraymundo", "github")
                }
              ></img>
            </div>
          )}
          {currExperience === "insta" && (
            <div className="instaHeader">
              <h1>Instagram</h1>
              <img
                src={insta}
                alt={"insta"}
                className="instaLogo"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/nicoraymundo/",
                    "instagram"
                  )
                }
              ></img>
            </div>
          )}
          {currExperience === "twitter" && (
            <div className="twitterHeader">
              <h1>Twitter</h1>
              <img
                src={twitter}
                alt={"twitter"}
                className="twitterLogo"
                onClick={() =>
                  window.open("https://twitter.com/nicoraymundo2", "twitter")
                }
              ></img>
            </div>
          )}
        </div>
      </div>
    </Fade>
  );
};

export default Contact;

// const Contact = () => {
//   let [currContact, setCurrContact] = useState("email");

//   return (
//     <Fade clear fraction={0.5} duration={3000}>
//       <div className="Contact" id="contactComponent">
//         <div className="ContactHeader">
//           <h1>Contact</h1>
//           <hr></hr>
//         </div>
//         <div className="JobContent">
// <div className="ContactNavButtons">
//   <button onClick={() => setCurrContact("email")}>E-Mail</button>
//   <button onClick={() => setCurrContact("linkedin")}>
//     Linked In
//   </button>
//   <button onClick={() => setCurrContact("github")}>GitHub</button>
//   <button onClick={() => setCurrContact("insta")}>Instagram</button>
//   <button onClick={() => setCurrContact("twitter")}>Twitter</button>
// </div>
//           <div className="ContactInfo">
//             {currContact === "email" && (
//               <div className="emailHeader">
//                 <h1>E-Mail</h1>
//                 <img
//                   src={email}
//                   alt={"email"}
//                   className="emailLogo"
//                   onClick={() =>
//                     window.open("mailto:nraymund@lion.lmu.edu", "email")
//                   }
//                 ></img>
//               </div>
//             )}
//             {currContact === "linkedin" && (
//               <div className="linkedinHeader">
//                 <h1>LinkedIn</h1>
//                 <img
//                   src={linkedin}
//                   alt={"linkedin"}
//                   className="linkedinLogo"
//                   onClick={() =>
//                     window.open(
//                       "https://www.linkedin.com/in/nicolasraymundo/",
//                       "linkedIn"
//                     )
//                   }
//                 ></img>
//               </div>
//             )}
// {currContact === "github" && (
//   <div className="githubHeader">
//     <h1>GitHub</h1>
//     <img
//       src={github}
//       alt={"github"}
//       className="githubLogo"
//       onClick={() =>
//         window.open("https://github.com/nraymundo", "github")
//       }
//     ></img>
//   </div>
// )}
// {currContact === "insta" && (
//   <div className="instaHeader">
//     <h1>Instagram</h1>
//     <img
//       src={insta}
//       alt={"insta"}
//       className="instaLogo"
//       onClick={() =>
//         window.open(
//           "https://www.instagram.com/nicoraymundo/",
//           "instagram"
//         )
//       }
//     ></img>
//   </div>
// )}
//             {currContact === "twitter" && (
// <div className="twitterHeader">
//   <h1>Twitter</h1>
//   <img
//     src={twitter}
//     alt={"twitter"}
//     className="twitterLogo"
//     onClick={() =>
//       window.open("https://twitter.com/nicoraymundo2", "twitter")
//     }
//   ></img>
// </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </Fade>
//   );
// };

// export default Contact;
