import React from "react";
import { Form, Container, Col } from "react-bootstrap";

function NameElement() {
	return (
		<Form className="row border mb-3 cursor">
			<Form.Group as={Col} controlId="formFirstName">
				<Form.Label className="label">First Name</Form.Label>
				<Form.Control type="text" name="firstName" />
			</Form.Group>

			<Form.Group as={Col} controlId="formLastName">
				<Form.Label className="label">Last Name</Form.Label>
				<Form.Control type="text" name="lastName" />
			</Form.Group>
		</Form>
	);
}

export default NameElement;
