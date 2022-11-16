import React, { useState, useContext } from "react";
import skyline from "./image/skyline.jpg";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import NavBar from "./UI/NavBar";

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Figure>
        <Figure.Image src={skyline} fluid />
      </Figure>
      <Container>
        <Row>
          <Col></Col>
          <Col xs={6}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control placeholder="Search by Address" />
              </Form.Group>
              <Button variant="outline-light" type="submit">
                Search
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
