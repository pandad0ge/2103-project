import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function IndividualListing() {
  let { id } = useParams();

  useEffect(() => {
    console.log(`${id}`);
  }, []);

  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-9">
          <div className="row g-0 border rounded bg-light overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                Listings.listing_type
              </strong>
              <h3 className="mb-0">
                Listings.floor_size Listings.property_type @ Listings.region
              </h3>
              <div className="mb-1 text-muted">
                Available From: Listings.availability
              </div>
              <div className="mb-1 text-muted">
                Available From: Listings.address
              </div>
              <p className="card-text mb-auto">Listings.description</p>
              <h2>$ Listing.listed_price</h2>
              <div className="row g-2">
                <div className="col">
                  <a href="" className=" btn btn-outline-success w-100 btn-sm">
                    Buy
                  </a>
                </div>
                <div className="col">
                  <a href="" className=" btn btn-outline-danger w-100 btn-sm">
                    <i className="far fa-heart"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3 d-none d-lg-block">
              <img
                src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header">Contact Agent</div>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
              className="card-img-top rounded-0"
            />
            <div className="card-body justify-content-center text-center">
              <h5 className="card-title">Agent.agent_name</h5>
              <small className="text-muted mb-0">
                Agency.estate_agency_name
              </small>
              <small className="text-muted mb-0">CEA: Agent.agent_id </small>
              <small className="text-muted mb-0">
                Agency License No: Agency.estate_license_no
              </small>
              <p className="card-text">
                Call: AgentAccount.contact_no Email: AgentAccount.email_address
              </p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Call</small>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <div className="row g-0 border rounded bg-light overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-success">
                For Rent
              </strong>
              <h3 className="mb-0">3,000 sqft HDB @ Buona Vista</h3>
              <div className="mb-1 text-muted">Available From: 10 Nov 2022</div>
              <div className="mb-1 text-muted">
                Address: 15 Buona Vista Road, S102302
              </div>
              <p className="card-text mb-auto">
                VIEW First FOR Negotiable price! MOVE IN READY CONDITION! BE THE
                FIRST to View this Ultra Convenient 5 Room Flat at
                1184sqft/110sqm! 2 Mins Walk to Prime Supermarket & KOUFU 4 Mins
                Walk to Compass One / Sengkang MRT! SUPER Bright And very
                Ventilated! MAXIMUM Privacy as It is an ACTUAL Corner Unit! Feel
                free to Open all Windows & you won't even see the common space!
                Welcoming & Friendly Neighbors, Owner reluctant to move out!
                Unit not tenanted before and Owner Up-keep is Unbelivable! Super
                Neat and Clean!
              </p>
              <h2>$ 668,888</h2>
              <div className="row g-2">
                <div className="col">
                  <a href="" className=" btn btn-outline-success w-100 btn-sm">
                    Buy
                  </a>
                </div>
                <div className="col">
                  <a href="" className=" btn btn-outline-danger w-100 btn-sm">
                    <i className="far fa-heart"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3 d-none d-lg-block">
              <img
                src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header">Contact Agent</div>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
              className="card-img-top rounded-0"
            />
            <div className="card-body justify-content-center text-center">
              <h5 className="card-title">Xavier Goh Zhi Herng</h5>
              <small className="text-muted mb-0">PROPNEX REALTY PTE LTD</small>
              <small className="text-muted mb-0">CEA: R123423125H </small>
              <small className="text-muted mb-0">
                Agency License No: L12345123J
              </small>
              <p className="card-text">Call: 91234567 Email: abc@email.com</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Call</small>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-9">
          <div className="row g-0 border rounded bg-light overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col p-4 d-flex flex-column position-static">
              <strong className="d-inline-block mb-2 text-primary">
                For Sale
              </strong>
              <h3 className="mb-0">3,000 sqft HDB @ Buona Vista</h3>
              <div className="mb-1 text-muted">Available From: 10 Nov 2022</div>
              <div className="mb-1 text-muted">
                Address: 15 Buona Vista Road, S102302
              </div>
              <p className="card-text mb-auto">
                VIEW First FOR Negotiable price! MOVE IN READY CONDITION! BE THE
                FIRST to View this Ultra Convenient 5 Room Flat at
                1184sqft/110sqm! 2 Mins Walk to Prime Supermarket & KOUFU 4 Mins
                Walk to Compass One / Sengkang MRT! SUPER Bright And very
                Ventilated! MAXIMUM Privacy as It is an ACTUAL Corner Unit! Feel
                free to Open all Windows & you won't even see the common space!
                Welcoming & Friendly Neighbors, Owner reluctant to move out!
                Unit not tenanted before and Owner Up-keep is Unbelivable! Super
                Neat and Clean!
              </p>
              <h2>$ 668,888</h2>
              <div className="row g-2">
                <div className="col">
                  <a href="" className=" btn btn-outline-success w-100 btn-sm">
                    Buy
                  </a>
                </div>
                <div className="col">
                  <a href="" className=" btn btn-outline-danger w-100 btn-sm">
                    <i className="far fa-heart"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3 d-none d-lg-block">
              <img
                src="https://images.unsplash.com/photo-1477862096227-3a1bb3b08330?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
            <div className="card-header">Contact Agent</div>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
              className="card-img-top rounded-0"
            />
            <div className="card-body justify-content-center text-center">
              <h5 className="card-title">Xavier Goh Zhi Herng</h5>
              <small className="text-muted mb-0">PROPNEX REALTY PTE LTD</small>
              <small className="text-muted mb-0">CEA: R123423125H </small>
              <small className="text-muted mb-0">
                Agency License No: L12345123J
              </small>
              <p className="card-text">Call: 91234567 Email: abc@email.com</p>
            </div>
            <div className="card-footer">
              <small className="text-muted">Call</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
