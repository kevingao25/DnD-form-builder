import React from "react";
import { Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PasswordElement() {
	return (
		<div className="field-element">
			<FontAwesomeIcon icon="unlock" fixedWidth />
			<span className="field-text">Password</span>
		</div>

		// <Form className="border mb-3 cursor">
		// 	<Form.Group controlId="formBasicPassword">
		// 		<Form.Label>Password</Form.Label>
		// 		<Form.Control type="password" placeholder="Password" />
		// 	</Form.Group>
		// </Form>
	);
}

export default PasswordElement;
