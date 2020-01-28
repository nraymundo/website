import React from "react";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Intro.css";

const Intro = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 414px)" });

  return (
    <Fade clear duration={4000}>
      <Container>
        <Row>
          <Col>
            <p>
              Nicolas Raymundo is a developer, photographer, and student
              currently studying computer science at Loyola Marymount
              University.
            </p>
          </Col>
        </Row>
      </Container>
      {/* <div className="mainParagraph"> */}
      {/* <p>
          Nicolas Raymundo is a developer, photographer, and student currently
          studying computer science at Loyola Marymount University.
        </p> */}
      {/* <p>
          Hi! I'm a Computer Science Major at Loyola Marymount University in Los
          Angeles, CA. I'm originally from San Jose, CA but moved to Los Angeles
          for university. I am currently looking for an internship for Summer
          2020. I currently work as a Teaching Assistant for the LMU Computer
          Science Department and am involved in LMU's Association for Computing
          Machinery as the acting Vice President of Outreach. I have competed in
          the Southern California Regionals of the International Collegiate
          Programming Contest (ICPC) and am currently working with LMU's ACM to
          hold the first ever LMU Hackathon! I love photography, and you can
          view some of my photos through my account "nicoraymundo" on VSCO. Feel
          free to reach out!
        </p> */}
      {/* </div> */}
    </Fade>
  );
};

export default Intro;
