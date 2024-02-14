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
                <br />
                <p className="child projects-description">
                  {project.description}
                </p>
                <br />
                <p className="child projects-tech-stack">{project.techStack}</p>
                <br />
                <a
                  className="btn btn-success btn-lg "
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  key={project.iconClass}
                >
                  <i className={project.iconClass}></i>
                  <span className="m-3">View Demo</span>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
