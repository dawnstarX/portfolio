import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/mylogo.jpg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col md={6} sm={3}>
            <img src={logo} alt="logo" />
          </Col>
          <Col md={6} sm={3} className=" text-end align-self-center">
            <div className="social-icon">
              <a href="https://github.com/dawnstarX">
                <img src={navIcon1} alt="github" />
              </a>
              <a href="https://auth.geeksforgeeks.org/user/dawnstar_x/profile">
                <img src={navIcon2} alt="geekForgeeks" />
              </a>
              <a href="https://www.instagram.com/dawnstar1507/">
                <img src={navIcon3} alt="instagram" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
