import React, { useState, useEffect } from "react";

import axios from "axios";

export default function Buy() {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		const configuration = {
			url: "http://localhost:5000/user/home/api/sale", // /get/listing /post/listing
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
												Floor size: {value.floor_size}{" "}
												sqft
											</p>
											<p>
												Property type:{" "}
												{value.property_type}
											</p>
											<p>Region: {value.region}</p>
										</h5>
										<p className="card-text">{`${value.description}`}</p>
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
											Listed price: $
											{value.listed_price.toFixed(2)}
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
		</section>
	);
}
