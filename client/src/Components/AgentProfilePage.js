import NavBar from "./UI/NavBar";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from "mdb-react-ui-kit";

import React, { useState, useEffect } from "react";

import axios from "axios";

const AgentProfilePage = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    const configuration = {
      url: "http://localhost:5000/agent/profile/api/agent", // /get/listing /post/listing
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

  if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

  return (
    <>
        <>
          <section style={{ backgroundColor: "transparent" }}>
            <MDBContainer className="py-5">
              <MDBRow>
                <MDBCol lg="4">
                  <MDBCard className="mb-4">
                    <MDBCardBody className="text-center">
                      <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: "150px" }}
                        fluid
                      />
                      <p></p>
                      <p className="text-muted mb-1">Agent Name</p>
                      <p className="text-muted mb-4">
                        {data[0].first_name}
                      </p>
                      <p className="text-muted mb-1">CEA(agent ID)</p>
                      <p className="text-muted mb-4">
                        {data[0].agent_id}
                      </p>
                      <p className="text-muted mb-1">ERA NO(Agency Number)</p>
                      <p className="text-muted mb-4">
                        {data[0].estate_agency_license_no}
                      </p>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
                <MDBCol lg="8">
                  <MDBCard className="mb-4">
                    <MDBCardBody>
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>First Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                          {data[0].first_name}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Last Name</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                          {data[0].last_name}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Email Address</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                          {data[0].email_address}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                      <hr />
                      <MDBRow>
                        <MDBCol sm="3">
                          <MDBCardText>Contact</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                          <MDBCardText className="text-muted">
                          {data[0].contact_no}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </section>
          <section>
            <div
              style={{
                paddingLeft: "80px",
                marginBottom: "30px",
                color: "lavenderblush",
              }}
            >
              <h2 className="home-latest-projects">Created Listings</h2>
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
                              Description:{" "}
                              {value.description}
                            </h5>
                            <p className="card-text">
                              Type: {value.listing_type}
                            </p>
                            <p className="card-text">
                              Region: {value.region}
                            </p>
                            <p className="text-muted">
                              {" "}
                              <i className="fa fa-phone"></i>{" "}
                              {`${value.first_name
                                .concat(" ")
                                .concat(
                                  value.last_name ===
                                    undefined
                                    ? ""
                                    : value.last_name
                                )}`}{" "}
                              @ {`${value.contact_no}`}
                            </p>
                            <p className="card-text font-weight-bold">
                              Listed price:{" "}
                              {value.listed_price}
                            </p>

                            <a
                              href=""
                              className="btn btn-outline-success btn-sm"
                              >
                              edit
                            </a>
                            <a
                              href=""
                              className="btn btn-outline-danger btn-sm"
                            >
                              delete
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
        </section>
      </>
    </>
  );
};

export default AgentProfilePage;
