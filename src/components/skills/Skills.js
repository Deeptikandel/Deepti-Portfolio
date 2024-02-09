import React from "react";
import { skillIcon } from "../../data";
import "./skills.scss";

const Skills = () => {
  return (
    <section className="tech-stack" id="skills">
      <h2 className="subtitle">Tech Stack</h2>
      <div className="tech-stack-wrapper">
        {skillIcon.map((skill) => {
          return (
            <i className={skill} role="img" aria-hidden="true" key={skill}></i>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
