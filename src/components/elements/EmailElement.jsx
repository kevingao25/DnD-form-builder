import React from "react";
import Form from "react-bootstrap/form";
import Container from "react-bootstrap/Container";

function EmailElement() {
	return (
		<Form className="border mb-3 cursor">
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="Enter email" />
			</Form.Group>
		</Form>
	);
}

export default EmailElement;
