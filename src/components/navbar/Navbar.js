import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { navList } from "../../data";

const Navigationbar = () => {
  return (
    <Navbar
      collapseOnSelect
      variant="light"
      expand="lg"
      sticky="top"
      style={{ backgroundColor: "#66e2c5" }}
    >
      <Container>
        <Navbar.Brand href="#">DEEPTI</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {navList.map((list) => {
              return (
                <Nav.Link key={list} href={`#${list.toLowerCase()}`}>
                  {list}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigationbar;
