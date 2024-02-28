import React from "react";
import "./about.scss";
import myPhoto from "../../assets/images/my-photo.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-wrapper">
        <div className="about-card">
          <img src={myPhoto} alt="my photo" />
          <div className="about-content">
            <h2 className="child about-title">About Me</h2>
            <h3 className="child about-subtitle">Developer and Designer</h3>
            <p className="child about-description">
              {" "}
              <br />
              Hello, <br />
              My name is Deepti Kandel. Passionate about building feasible and
              user-friendly websites and applications coupled with strong
              learning skills have resulted in increased overall productivity
              and creative skills in me.{" "}
            </p>
            <br />
            <p>
              {" "}
              In addition to my knowledge base, I actively seek out to new
              technologies and stay up to date in industry and advancements.
              This has allowed me to be ahead and deliver exceptional work on
              the projects I have worked on.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
