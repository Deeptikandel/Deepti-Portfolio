import React from "react";
import "./experiences.scss";
import { timelineData } from "../../data";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experiences = () => {
  return (
    <section className="experiences" id="experiences">
      <h2 className="subtitle">Experiences</h2>
      <div className="experience-wrapper">
        <VerticalTimeline>
          {timelineData.map((timeline) => {
            return (
              <VerticalTimelineElement
                key={timeline.key}
                date={timeline.date}
                dateClassName="date"
                iconStyle={{
                  background: "#2f42eb",
                  color: "#fff",
                  textAlign: "center",
                  lineHeight: "50px",
                  fontSize: "24px",
                }}
                icon={<i className={timeline.workIcon}></i>}
              >
                <h3 className="vertical-timeline-element-title">
                  {timeline.title}
                </h3>
                <h5 className="vertical-timeline-element-subtitle">
                  {timeline.company}
                </h5>
                <p className="vertical-timeline-element-description">
                  {timeline.description}
                </p>
                <a
                  className="btn btn-secondary btn-xs "
                  href="/"
                  target="_blank"
                  rel="noreferrer"
                  key={timeline.pdfIcon}
                >
                  <i className={timeline.pdfIcon}></i>
                  <span className="m-3">{timeline.buttonText}</span>
                </a>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Experiences;
