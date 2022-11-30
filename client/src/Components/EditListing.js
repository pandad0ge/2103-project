import { Form, Button, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";

import axios from "axios";

const EditListingPage = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);
	const [values, setValues] = useState([]);
	const [formState, setFormState] = useState([0]);

	const handleInputChange = (e) => {
		setValues({
			...values,
			[e.target.name]: e.target.value,
		});
	};

	const submit = (e) => {
		e.preventDefault();
		setFormState(formState + 1);
		console.log(formState);
		console.log(values);
	};

	let slug = (url) => new URL(url).pathname.match(/[^\/]+/g);
	let currenturl = window.location.href;
	let listingID = slug(currenturl)[2];

	useEffect(() => {
		setIsLoading(true);

		const configuration = {
			url: "http://localhost:5000/agent/profile/api/getlisting",
			method: "get",
			params: { listing_id: listingID },
		};

		axios(configuration)
			.then((result) => {
				setIsLoading(false);
				console.log(result.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	console.log(listingID);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<>
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
						<h2 style={{ color: "black" }}>Edit Listing</h2>
					</div>
					<div style={{ marginTop: "20px" }}>
						<Form onSubmit={submit}>
							<Form.Group as={Row} className="mb-3">
								<Form.Label column sm={2}>
									Listing Image
								</Form.Label>
								<Col sm={10}>
									<Form.Control
										placeholder="Image Link"
										onChange={handleInputChange}
										name="image_link"
									/>
								</Col>
							</Form.Group>
							<Row className="mb-3">
								<Form.Group as={Col} controlId="formGridEmail">
									<Form.Label>Listing Type</Form.Label>
									<Form.Select
										aria-label="Default select example"
										onChange={handleInputChange}
										name="listing_type"
									>
										<option>Sale/Rent</option>
										<option value="sale">Sale</option>
										<option value="rent">Rent</option>
									</Form.Select>
								</Form.Group>
								<Form.Group
									as={Col}
									controlId="formGridPassword"
								>
									<Form.Label>Property Type</Form.Label>
									<Form.Select
										aria-label="Default select example"
										onChange={handleInputChange}
										name="property_type"
									>
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
									<Form.Control
										placeholder="Street, Unit No. etc."
										onChange={handleInputChange}
										name="address"
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row} className="mb-3">
								<Form.Label column sm={2}>
									Floor Size
								</Form.Label>
								<Col sm={3}>
									<Form.Control
										placeholder="xxx sqm"
										onChange={handleInputChange}
										name="floor_size"
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row} className="mb-3">
								<Form.Label column sm={2}>
									Availability
								</Form.Label>
								<Col sm={3}>
									<Form.Control
										placeholder="YYYY-MM-DD"
										onChange={handleInputChange}
										name="availability"
									/>
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
										onChange={handleInputChange}
										name="description"
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row} className="mb-3">
								<Form.Label column sm={2}>
									Region
								</Form.Label>
								<Col sm={3}>
									<Form.Control
										placeholder="Central"
										onChange={handleInputChange}
										name="region"
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row} className="mb-3">
								<Form.Label column sm={2}>
									Price
								</Form.Label>
								<Col sm={3}>
									<Form.Control
										placeholder=""
										onChange={handleInputChange}
										name="listed_price"
									/>
								</Col>
							</Form.Group>
							<Form.Group as={Row} className="mb-3">
								<Col sm={{ span: 10, offset: 2 }}>
									<Button type="submit">
										Create Listing
									</Button>
								</Col>
							</Form.Group>
						</Form>
					</div>
				</div>
			</section>
		</>
	);
};

export default EditListingPage;
