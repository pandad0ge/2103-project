import React, { useState, useContext } from "react";
import skyline from "./image/skyline.jpg";
import Figure from "react-bootstrap/Figure";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Badge } from "react-bootstrap";

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
      <div
        style={{
          paddingLeft: "75px",
          paddingTop: "30px",
          marginBottom: "30px",
          color: "lavenderblush",
        }}
      >
        <h2 className="home-latest-projects">Latest Projects</h2>
      </div>
      <div>
        {" "}
        <section id="gallery">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <img
                    src="https://sg2-cdn.pgimgs.com/developer-listing/4483484/OUPHO.138001839.V800/Pollen-Collection-Seletar-Yio-Chu-Kang-Singapore.jpg"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">You cant afford Also</h5>
                    <p className="card-text">PRIME PRIME PRIME LOCATIONNNNN</p>
                    <p className="text-muted">
                      {" "}
                      <i className="fa fa-phone"></i> Chao Ah Beng @ 91234567
                    </p>
                    <p className="card-text font-weight-bold">$ 16,888,888</p>
                    <a href="" className="btn btn-outline-success btn-sm">
                      Buy
                    </a>
                    <a href="" className="btn btn-outline-danger btn-sm">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1516214104703-d870798883c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">2,000 sqft Condo @ CBD</h5>
                    <p className="card-text">
                      One Holland Village, 2 Mins Walk To MRT, Prime District
                      10! In The Heart Of Holland Village! Curated Mixed Use
                      Development !
                    </p>
                    <p className="text-muted">
                      {" "}
                      <i className="fa fa-phone"></i> Lim Hock Song @ 91234567
                    </p>
                    <p className="card-text font-weight-bold">$ 1,999,999</p>
                    <a href="" className="btn btn-outline-success btn-sm">
                      Buy
                    </a>
                    <a href="" className="btn btn-outline-danger btn-sm">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 mb-4">
                <div className="card">
                  <img
                    src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                    alt=""
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Sunset</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Ut eum similique repellat a laborum, rerum voluptates
                      ipsam eos quo tempore iusto dolore modi dolorum in
                      pariatur. Incidunt repellendus praesentium quae!
                    </p>
                    <a href="" className="btn btn-outline-success btn-sm">
                      Buy
                    </a>
                    <a href="" className="btn btn-outline-danger btn-sm">
                      <i className="far fa-heart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
      </div>
    </>
  );
};

export default HomePage;
