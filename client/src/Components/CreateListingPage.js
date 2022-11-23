import NavBar from "./UI/NavBar";
import { Form, Button, Row, Col } from "react-bootstrap";

const CreateListingPage = () => {
  return (
    <>
      <NavBar />
      <section
        style={{
          backgroundColor: "lavenderblush",
          marginLeft: "30px",
          marginRight: "30px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            padding: "75px",
            paddingTop: "30px",
            marginTop: "30px",
          }}
        >
          <div>
            <h2 style={{ color: "black" }}>Create Listing</h2>
          </div>
          <div style={{ marginTop: "20px" }}>
            <Form>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Listing Image
                </Form.Label>
                <Col sm={10}>
                  <Form.Control placeholder="Image Link" />
                </Col>
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Listing Type</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Sale/Rent</option>
                    <option value="sale">Sale</option>
                    <option value="rent">Rent</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Property Type</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>HDB/Condo/Landed</option>
                    <option value="HDB">HDB</option>
                    <option value="condo">Condo</option>
                    <option value="landed">Landed</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Address
                </Form.Label>
                <Col sm={10}>
                  <Form.Control placeholder="Street, Unit No. etc." />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Floor Size
                </Form.Label>
                <Col sm={3}>
                  <Form.Control placeholder="xxx sqm" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Availability
                </Form.Label>
                <Col sm={3}>
                  <Form.Control placeholder="Now or dd/mm/yyy" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Description
                </Form.Label>
                <Col sm={10}>
                  <Form.Control
                    placeholder="Property Description"
                    style={{ height: "100px" }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Region
                </Form.Label>
                <Col sm={3}>
                  <Form.Control placeholder="Central" />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={2}>
                  Price
                </Form.Label>
                <Col sm={3}>
                  <Form.Control placeholder="" />
                </Col>
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Property Status</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>open/closed</option>
                    <option value="open">open</option>
                    <option value="closed">closed</option>
                  </Form.Select>
                </Form.Group>
              </Row>
              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit">Create Listing</Button>
                </Col>
              </Form.Group>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreateListingPage;
