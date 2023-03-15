import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";
import projImg6 from "../assets/img/project6.png";

import colourSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Project = () => {
  const projects = [
    {
      title: "Food-wayz",
      description:
        "A full reciepe website made with the help of spoonacular's API",
      imgUrl: projImg1,
      projectLink: "https://dawnstarx.github.io/food-wayz/",
    },
    {
      title: "Travel Mate",
      description:
        "changes applied",
      imgUrl: projImg2,
      projectLink:
        "https://62f53f4b69249b00095a21b1--rainbow-kashata-90e055.netlify.app/",
    },
    {
      title: "JIIT Taste",
      description:
        "Food odering website with ability to add or delete items from store",
      imgUrl: projImg3,
      projectLink: "https://jiit-taste.herokuapp.com/",
    },
    {
      title: "Accordion",
      description: "The QNA section of a webpage",
      imgUrl: projImg4,
      projectLink:
        "https://62eff09639e46339bbd58c13--teal-nasturtium-4a07ac.netlify.app/",
    },
    {
      title: "Menu",
      description: "Menu page for a food odering or a fast food chain website",
      imgUrl: projImg5,
      projectLink:
        "https://62eff121657d693bd657abad--gorgeous-pika-7194fe.netlify.app/",
    },
    {
      title: "Paragraph Generator",
      description:
        "Randomly generate paragraphs as a replacement for boring lorem ipsum",
      imgUrl: projImg6,
      projectLink:
        "https://62efefdf4d1e7c3a92c70025--bejewelled-zuccutto-aa0129.netlify.app/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__swing" : ""
                  }
                >
                  <h2>Projects</h2>
                </div>
              )}
            </TrackVisibility>
            <p>Projects developed by me are below</p>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colourSharp2} alt="right" />
    </section>
  );
};

export default Project;
