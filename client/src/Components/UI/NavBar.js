import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Nav, Navbar } from "react-bootstrap";

const NavBar = () => {
  let slug = window.location.pathname;
  const userRegex = /\/user[\s\S]+/g;
  const agentRegex = /\/agent[\s\S]+/g;
  let type = "user";
  if (slug.match(userRegex)) {
    type = "user";
  }
  if (slug.match(agentRegex)) {
    type = "agent";
  }

  return (
    <Navbar
      bg="light"
      expand="lg"
      className={slug === "/login" || slug === "/register" ? "d-none" : ""}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to={type === "user" ? `/${type}/home` : `/${type}/home`}
        >
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              as={Link}
              to={type === "user" ? `/${type}/home` : `/${type}/home`}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={type === "user" ? `/${type}/buy` : `/${type}/buy`}
            >
              Buy
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={type === "user" ? `/${type}/rent` : `/${type}/rent`}
            >
              Rent
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/agent/new-listing"
              className={type === "user" ? `d-none` : ``}
            >
              New Listings
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link
            as={Link}
            to={type === "user" ? `/${type}/profile` : `/${type}/profile`}
          >
            Profile
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
