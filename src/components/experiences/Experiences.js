import React from "react";
import "./experiences.scss";
import { experienceData } from "../../data";
import Button from "react-bootstrap/Button";

const Experiences = () => {
  return (
    <section className="experiences" id="experiences">
      <h2 className="subtitle">Experiences</h2>
      <div className="experience-wrapper">
        {experienceData.map((experience) => {
          return (
            <div className="experience-card" key={experience.title}>
              <h3 className="experience-card-title">{experience.title}</h3>
              <h4 className="experiences-company">{experience.company}</h4>
              <p className="experiences-date">{experience.date}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experiences;
