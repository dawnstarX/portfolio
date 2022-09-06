import React from "react";
import { useState, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");
  const firstRef = useRef(null);
  const lastRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const func = () => {
    setButtonText("sent successfully");
  };
  const f = () => {
    setButtonText("send");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending..");
    setTimeout(func, 1000);
    e.target.reset();
    setTimeout(f, 1500);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="Contact Me" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" ref={firstRef} placeholder="First Name" />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="text" ref={lastRef} placeholder="Last Name" />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    ref={emailRef}
                    placeholder="Email Address"
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input type="tel" ref={phoneRef} placeholder="Phone No" />
                </Col>
                <Col>
                  <textarea row="6" ref={messageRef} placeholder="Message" />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
