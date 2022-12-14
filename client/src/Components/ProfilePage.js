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

const ProfilePage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		const configuration = {
			url: "http://localhost:5000/user/profile/api/user",
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
									</MDBCardBody>
								</MDBCard>
							</MDBCol>
							<MDBCol lg="8">
								<MDBCard className="mb-4">
									<MDBCardBody>
										<MDBRow>
											<MDBCol sm="3">
												<MDBCardText>
													First Name
												</MDBCardText>
											</MDBCol>
											<MDBCol sm="9">
												<MDBCardText className="text-muted">
													{data[0].user_first_name}
												</MDBCardText>
											</MDBCol>
										</MDBRow>
										<hr />
										<MDBRow>
											<MDBCol sm="3">
												<MDBCardText>
													Last Name
												</MDBCardText>
											</MDBCol>
											<MDBCol sm="9">
												<MDBCardText className="text-muted">
													{data[0].user_last_name}
												</MDBCardText>
											</MDBCol>
										</MDBRow>
										<hr />
										<MDBRow>
											<MDBCol sm="3">
												<MDBCardText>
													Email Address
												</MDBCardText>
											</MDBCol>
											<MDBCol sm="9">
												<MDBCardText className="text-muted">
													{data[0].user_email_address}
												</MDBCardText>
											</MDBCol>
										</MDBRow>
										<hr />
										<MDBRow>
											<MDBCol sm="3">
												<MDBCardText>
													Contact
												</MDBCardText>
											</MDBCol>
											<MDBCol sm="9">
												<MDBCardText className="text-muted">
													{data[0].user_contact_no}
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
															<p>
																Floor size:{" "}
																{
																	value.floor_size
																}{" "}
																sqft
															</p>
															<p>
																Property type:{" "}
																{
																	value.property_type
																}
															</p>
															<p>
																Region:{" "}
																{value.region}
															</p>
														</h5>
														<p className="card-text">{`${value.description}`}</p>
														<p className="card-text">{`${value.address}`}</p>
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
															@{" "}
															{`${value.contact_no}`}
														</p>
														<p className="card-text font-weight-bold">
															Listed price: $
															{value.listed_price.toFixed(
																2
															)}
														</p>
														<a
															href=""
															className="btn btn-outline-success btn-sm"
														>
															Buy
														</a>
														<a
															href=""
															className="btn btn-outline-danger btn-sm"
														>
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
				</section>
			</>
		</>
	);
};

export default ProfilePage;
