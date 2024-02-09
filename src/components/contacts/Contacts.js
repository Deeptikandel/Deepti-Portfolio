import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./contact.scss";

const Contacts = () => {
  return (
    <section className="contact" id="contacts">
      <h2 className="subtitle">Get In Touch With Me</h2>

      <Form className="contact-form">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>First Name:</Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Last Name: </Form.Label>
          <Form.Control type="text" placeholder="" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address: </Form.Label>
          <Form.Control type="email" placeholder="" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicMessage">
          <Form.Label>Message: </Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>

        <Button variant="outline-success" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default Contacts;
