import React from "react";
import { Form, Container } from "react-bootstrap";

function PasswordElement() {
	return (
		<Form className="border mb-3 cursor">
			<Form.Group controlId="formBasicPassword">
				<Form.Label>Password</Form.Label>
				<Form.Control type="password" placeholder="Password" />
			</Form.Group>
		</Form>
	);
}

export default PasswordElement;
