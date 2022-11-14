import React, { useState, useContext } from "react";

import styles from "./RegisterForm.module.css";

import {
    Container,
    Form,
    Button,
    FloatingLabel,
    Row,
    Col,
} from "react-bootstrap";

const RegisterForm = () => {
    const [userType, setUserType] = useState("User");
    const initialValues = {
        userId: "",
        password: "",
        cfmPassword: "",
        fName: "",
        lName: "",
        contactNo: "",
        email: "",
        agentId: "",
    };
    const [formValues, setFormValues] = useState(initialValues);
    // const [formErrors, setFormErrors] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const radioChangeHandler = (event) => {
        setUserType(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        // setFormErrors(validate(formValues));
    };

    return (
        <Container>
            <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
            <Row
                className={`d-flex ${styles.content} justify-content-center align-items-center`}
            >
                <div className="col-md-5">
                    <div className="box shadow bg-white p-4">
                        <h3 className="mb-4 text-center fs-1">
                            Create an Account
                        </h3>

                        <Form className="mb-3" onSubmit={formSubmitHandler}>
                            <div
                                key="inline-radio"
                                className="mb-3 text-center"
                                onChange={radioChangeHandler}
                            >
                                <Form.Check
                                    inline
                                    label="User"
                                    name="group1"
                                    type="radio"
                                    id="inline-radio-1"
                                    value="User"
                                    defaultChecked
                                />
                                <Form.Check
                                    inline
                                    label="Agent"
                                    name="group1"
                                    type="radio"
                                    id="inline-radio-2"
                                    value="Agent"
                                />
                            </div>

                            <FloatingLabel
                                controlId="floatingID"
                                label="User ID"
                                className="mb-3"
                            >
                                <Form.Control
                                    name="userId"
                                    type="text"
                                    placeholder="user ID"
                                    className="rounded-0"
                                    values={formValues.userId}
                                    onChange={handleChange}
                                    required
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingPassword"
                                label="Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    name="password"
                                    type="password"
                                    placeholder="password"
                                    className="rounded-0"
                                    values={formValues.password}
                                    onChange={handleChange}
                                    required
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingCfmPassword"
                                label="Confirm Password"
                                className="mb-3"
                            >
                                <Form.Control
                                    name="cfmPassword"
                                    type="password"
                                    placeholder="password"
                                    className="rounded-0"
                                    values={formValues.cfmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingFName"
                                label="First Name"
                                className="mb-3"
                            >
                                <Form.Control
                                    name="fName"
                                    type="text"
                                    placeholder="first name"
                                    className="rounded-0"
                                    maxlength="50"
                                    values={formValues.fName}
                                    onChange={handleChange}
                                    required
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingLName"
                                label="Last Name"
                                className="mb-3"
                            >
                                <Form.Control
                                    name="lName"
                                    type="text"
                                    placeholder="last name"
                                    className="rounded-0"
                                    maxlength="50"
                                    values={formValues.lName}
                                    onChange={handleChange}
                                    required
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingContact"
                                label="Contact Number"
                                className="mb-3"
                            >
                                <Form.Control
                                    name="contactNo"
                                    type="number"
                                    placeholder="contact number"
                                    className="rounded-0"
                                    values={formValues.contactNo}
                                    onChange={handleChange}
                                    required
                                />
                            </FloatingLabel>

                            <FloatingLabel
                                controlId="floatingEmail"
                                label="Email Address"
                                className="mb-3"
                            >
                                <Form.Control
                                    name="email"
                                    type="email"
                                    placeholder="email"
                                    className="rounded-0"
                                    values={formValues.email}
                                    onChange={handleChange}
                                    required
                                />
                            </FloatingLabel>

                            {userType === "Agent" && (
                                <FloatingLabel
                                    controlId="floatingAgentID"
                                    label="Agent ID"
                                    className="mb-3"
                                >
                                    <Form.Control
                                        name="agentId"
                                        type="text"
                                        placeholder="agent id"
                                        className="rounded-0"
                                        values={formValues.agentId}
                                        onChange={handleChange}
                                        required
                                    />
                                </FloatingLabel>
                            )}

                            <div className="d-grid gap-2 mb-3">
                                <Button
                                    type="submit"
                                    className="btn btn-dark btn-lg border-0 rounded-0"
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

export default RegisterForm;
