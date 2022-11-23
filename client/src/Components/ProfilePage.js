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

const ProfilePage = () => {
  return (
    <>
      <h2 style={{ textAlign: "center", color: "lavenderblush" }}>
        {" "}
        if Agent Profile
      </h2>
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
                  <p className="text-muted mb-1">ERA Agent</p>
                  <p className="text-muted mb-4">
                    ERA NO: Agent.estate_agency_license_no
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
                        AgentAccount.first_name
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
                        AgentAccount.last_name
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
                        AgentAccount.email_address
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
                        AgentAccount.contact_no
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
                <div className="col-lg-4 mb-4">
                  <div className="card">
                    <img
                      src="https://sg2-cdn.pgimgs.com/developer-listing/4483484/OUPHO.138001839.V800/Pollen-Collection-Seletar-Yio-Chu-Kang-Singapore.jpg"
                      alt=""
                      className="card-img-top"
                    />
                    <div className="card-body">
                      <h5 className="card-title">You cant afford Also</h5>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}
        </div>
      </section>
      <div>
        <h2 style={{ textAlign: "center", color: "lavenderblush" }}>
          {" "}
          if User Profile
        </h2>
      </div>
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
                        UserAccount.first_name
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
                        UserAccount.last_name
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
                        UserAccount.email_address
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
                        UserAccount.contact_no
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
          <h2 className="home-latest-projects">Saved Listings</h2>
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{" "}
        </div>
      </section>
    </>
  );
};

export default ProfilePage;
