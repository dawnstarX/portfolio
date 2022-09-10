import React from "react";
import { Col, Row } from "react-bootstrap";
import resumeImg from "../assets/img/resume-img.png";
import resumeImg2 from "../assets/img/resume-img2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Resume = () => {
  return (
    <div className="resumeDiv">
      <Col lg={8}>
        <div className="newsletter-bx wow slideInUp">
          <Row className="text-center">
            <h3>Check Out My Resume</h3>
          </Row>
          <Row>
            <Col lg={4} className="text-center">
              <img
                src={resumeImg2}
                alt="resume img"
                style={{ width: "50%", paddingtop: "75px" }}
              />
            </Col>
            <Col lg={4}>
              <div className="new-email-bx">
                <br />
                <br />
                <TrackVisibility>
                  {({ isVisible }) => (
                    <div
                      className={
                        isVisible ? "animate__animated animate__flash" : ""
                      }
                    >
                      <a href="https://drive.google.com/file/d/1cWwR_pePVidHPdFE7-nx02ck5IJFA5bv/view?usp=sharing">
                        <button>Download</button>
                      </a>
                    </div>
                  )}
                </TrackVisibility>
              </div>
            </Col>
            <Col lg={4} className="text-center">
              <img src={resumeImg} alt="resume img" style={{ width: "50%" }} />
            </Col>
          </Row>
        </div>
      </Col>
    </div>
  );
};

export default Resume;
