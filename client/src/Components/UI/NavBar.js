import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/home">
                    React-Bootstrap
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} to="/buy">
                            Buy
                        </Nav.Link>
                        <Nav.Link as={Link} to="/rent">
                            Rent
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
