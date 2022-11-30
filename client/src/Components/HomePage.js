import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import axios from "axios";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [formState, setFormState] = useState([0]);
  const [listingType, setListingType] = useState();
  const [address, setAddress] = useState([]),
    onInput = ({ target: { value } }) => setAddress(value),
    onFormSubmit = (e) => {
      e.preventDefault();
      console.log(address);
      console.log(listingType);
      setAddress(address);
      setFormState(formState + 1);
      console.log(formState);
    };

  const handleRadio = (event) => {
    setListingType(event.target.value);
    // console.log(listingType);
  };

  useEffect(() => {
    setIsLoading(true);
    const configuration = {
      url: "http://localhost:5000/user/home/api/listing",
      method: "get",
    };

    axios(configuration)
      .then((result) => {
        console.log(result.data);

        let tempList = [];

        for (const key in result.data) {
          const obj = {
            ...result.data[key],
          };

          tempList.push(obj);
        }

        setIsLoading(false);
        setData(tempList);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    const configuration2 = {
      url: "http://localhost:5000/user/home/api/searchlisting",
      method: "get",
      params: {
        address: address,
        listing_type: listingType,
      },
    };

    axios(configuration2)
      .then((result) => {
        console.log(result.data);

        let tempList = [];

        for (const key in result.data) {
          const obj = {
            ...result.data[key],
          };

          tempList.push(obj);
        }

        setIsLoading(false);
        setData(tempList);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [formState]);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <>
      {/* <Figure>
        <Figure.Image src={skyline} fluid />
      </Figure> */}
      <Container>
        <Row>
          <Col></Col>
          <Col
            xs={6}
            style={{
              border: "1px solid lavenderblush",
              borderRadius: "40px",
              padding: "40px",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            <Form onSubmit={onFormSubmit}>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                onChange={onInput}
                value={listingType}
              >
                <Form.Control placeholder="Search by Address" />
              </Form.Group>
              <div key={`inline-radio`} className="mb-3">
                <Form.Check
                  inline
                  name="buy-rent"
                  type="radio"
                  label={"Buy"}
                  value={"sale"}
                  id="inline-radio-1"
                  onChange={handleRadio}
                />
                <Form.Check
                  inline
                  name="buy-rent"
                  type="radio"
                  label={"Rent"}
                  value={"rent"}
                  id="inline-radio-2"
                  onChange={handleRadio}
                />
              </div>
              <Button variant="outline-light" type="submit">
                Search
              </Button>
            </Form>
          </Col>
          <Col></Col>
        </Row>{" "}
        <div className={formState > 0 ? "d-none" : ""}>
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
        </div>
        <div>
          {" "}
          <section id="gallery">
            <div className="container">
              <div className="row">
                {data.map((value) => {
                  return (
                    <div className="col-lg-4 mb-4">
                      <div className="card">
                        <img
                          src={value.image_link}
                          alt=""
                          className="card-img-top"
                        />
                        <div className="card-body">
                          <h5 className="card-title">
                            <p>Floor size: {value.floor_size} sqft</p>
                            <p>Property type: {value.property_type}</p>
                            <p>Region: {value.region}</p>
                          </h5>
                          <p className="card-text">{`${value.description}`}</p>
                          <p className="card-text">{`${value.address}`}</p>
                          <p className="text-muted">
                            {" "}
                            <i className="fa fa-phone"></i>{" "}
                            {`${value.first_name
                              .concat(" ")
                              .concat(
                                value.last_name === undefined
                                  ? ""
                                  : value.last_name
                              )}`}{" "}
                            @ {`${value.contact_no}`}
                          </p>
                          <p className="card-text font-weight-bold">
                            Listed price: ${value.listed_price.toFixed(2)}
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
                  );
                })}
              </div>
            </div>
          </section>{" "}
        </div>
      </Container>
    </>
  );
};

export default HomePage;
