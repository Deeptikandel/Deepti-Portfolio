import React from "react";
import "./projects.scss";
import { projectsData } from "../../data";
import Button from "react-bootstrap/Button";

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="subtitle">Projects</h2>
      <div className="projects-wrapper">
        {projectsData.map((project) => {
          return (
            <div className="project-card" key={project.title}>
              <img src={project.src} alt={project.altText} />

              <div className="projects-content">
                <h3 className="child projects-title">{project.title}</h3>
                <p className="child projects-description">
                  {project.description}
                </p>
                <Button variant="outline-success">Read more</Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
