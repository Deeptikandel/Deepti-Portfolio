import React from "react";
import "./services.scss";
import { serviceData } from "../../data";
import Button from "react-bootstrap/Button";

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="subtitle">Services</h2>
      <div className="service-wrapper">
        {serviceData.map((service) => {
          return (
            <div className="service-card" key={service.title}>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="services-description">{service.description}</p>
              <Button variant="outline-success">Read more</Button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
