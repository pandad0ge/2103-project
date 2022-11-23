import React from "react";

export default function Rent() {
  return (
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
                <h5 className="card-title">{`Listings.region`}</h5>
                <p className="card-text">{`Listing.Description`}</p>
                <p className="text-muted">
                  {" "}
                  <i className="fa fa-phone"></i> {`Agents.agent_name`} @{" "}
                  {`Agents.contact`}
                </p>
                <p className="card-text font-weight-bold">
                  ${`Listings.listed_price`}
                </p>
                <a href="" className="btn btn-outline-success btn-sm">
                  Rent
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
                  One Holland Village, 2 Mins Walk To MRT, Prime District 10! In
                  The Heart Of Holland Village! Curated Mixed Use Development !
                </p>
                <p className="text-muted">
                  <i className="fa fa-phone"></i> Lim Hock Song @ 91234567
                </p>
                <p className="card-text font-weight-bold">$ 1,999,999</p>
                <a href="" className="btn btn-outline-success btn-sm">
                  Rent
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
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut
                  eum similique repellat a laborum, rerum voluptates ipsam eos
                  quo tempore iusto dolore modi dolorum in pariatur. Incidunt
                  repellendus praesentium quae!
                </p>
                <a href="" className="btn btn-outline-success btn-sm">
                  Rent
                </a>
                <a href="" className="btn btn-outline-danger btn-sm">
                  <i className="far fa-heart"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
