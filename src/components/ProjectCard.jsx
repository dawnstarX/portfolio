import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, projectLink }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="img of project" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <br />
          <br />
          <div className="projlinks">
            <a href={projectLink}>visit</a>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
