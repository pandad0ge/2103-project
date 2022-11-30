import React, { useState, useContext } from "react";
import axios from "axios";

import styles from "./LoginForm.module.css";

import {
	Container,
	Form,
	Button,
	FloatingLabel,
	Row,
	Col,
} from "react-bootstrap";

const LoginForm = () => {
	const initialValues = {
		userId: "",
		password: "",
	};
	const [formValues, setFormValues] = useState(initialValues);
	// const [formErrors, setFormErrors] = useState({});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("test");
		console.log(formValues);

		const configuration = {
			method: "post",
			url: "http://localhost:5000/users/login",
			data: formValues,
		};

		axios(configuration)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// make api call

	return (
		<Container>
			<Row
				className={`d-flex ${styles.content} justify-content-center align-items-center`}
			>
				<div className="col-md-5">
					<div className="box shadow bg-white p-4">
						<h3 className="mb-4 text-center fs-1">Welcome back!</h3>
						<Form className="mb-3">
							<FloatingLabel
								controlId="floatingInput"
								label="User ID"
								className="mb-3"
							>
								<Form.Control
									name="userId"
									value={formValues.userId}
									type="text"
									placeholder="user ID"
									className="rounded-0"
									onChange={handleChange}
								/>
							</FloatingLabel>
							<FloatingLabel
								controlId="floatingPassword"
								label="Password"
								className="mb-3"
							>
								<Form.Control
									name="password"
									value={formValues.password}
									type="password"
									placeholder="password"
									className="rounded-0"
									onChange={handleChange}
								/>
							</FloatingLabel>

							<div className="form-check mb-3">
								<input
									className={styles["form-check-input"]}
									type="checkbox"
									id="autoSizingCheck"
								/>
								<label className="form-check-label">
									Remember me
								</label>
							</div>
							<div class="d-grid gap-2 mb-1">
								<Button
									type="button"
									className={`btn ${styles["btn-dark"]} btn-lg border-0 rounded-0`}
									href="/user/home"
								>
									Login As User
								</Button>
							</div>
							<div class="d-grid gap-2 mb-1">
								<Button
									type="button"
									className={`btn ${styles["btn-dark"]} btn-lg border-0 rounded-0`}
									href="/agent/home"
								>
									Login As Agent
								</Button>
							</div>
							<div class="d-grid gap-2 mb-3">
								<Button
									type="button"
									className={`btn ${styles["btn-dark"]} btn-lg border-0 rounded-0`}
								>
									Create Account
								</Button>
							</div>
						</Form>
					</div>
				</div>
			</Row>
		</Container>
	);
};

export default LoginForm;
