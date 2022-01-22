import React from "react";
import Form from "react-bootstrap/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

function EmailElement() {
	// useDrag hook
	const [{ isDragging, opacity }, dragRef] = useDrag({
		type: "field",
		// item: "emailElement",
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
			opacity: monitor.isDragging() ? 0.4 : 1, // Styling purpose
		}),
	});

	return (
		<div ref={dragRef} style={{ opacity }} className="field-element">
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
