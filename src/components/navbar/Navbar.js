import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { navList } from "../../data";
import "./navBar.scss";

const Navigationbar = () => {
  return (
    <Navbar
      collapseOnSelect
      variant="light"
      expand="lg"
      sticky="top"
      style={{ backgroundColor: "#ffff", boxShadow: "0 3px 10px #969291" }}
    >
      <Container>
        <Navbar.Brand href="#">
          <i class="fab fa-dyalog"></i>
          <i class="fab fa-etsy"></i>
          <i class="fab fa-etsy"></i>
          <span>pti</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {navList.map((list) => {
              return (
                <Nav.Link
                  key={list}
                  href={`#${list.toLowerCase()}`}
                  activeClassName="active"
                >
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
