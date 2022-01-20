import React from "react";
import Form from "react-bootstrap/form";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EmailElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="envelope" fixedWidth />
			<span className="field-text">Email</span>
		</div>

		// <Form className="border mb-3 cursor">
		// 	<Form.Group controlId="formBasicEmail">
		// 		<Form.Label>Email address</Form.Label>
		// 		<Form.Control type="email" placeholder="Enter email" />
		// 	</Form.Group>
		// </Form>
	);
}

export default EmailElement;
