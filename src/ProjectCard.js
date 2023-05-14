import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
function ProjectCard ({project}){
  console.debug("ProjectCard",
  "project=", project);

  return (
    <section>
    <Link to={project.url}>
    <Card>
    <CardBody>
      <CardTitle className="fw-bold text-center">{project.title}</CardTitle>
      <CardText className="font-italic">{project.description}</CardText>
    </CardBody>
  </Card>
    </Link>
  </section>
  )
}

export default ProjectCard;