import React from "react";
import Form from "react-bootstrap/form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

function EmailElement({ onBuild }) {
	// useDrag hook
	const [{ isDragging, opacity }, dragRef] = useDrag({
		type: "field",
		item: { name: "emailElement" },
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
			opacity: monitor.isDragging() ? 0.4 : 1, // Styling purpose
		}),
	});

	// Conditionally rendering the element
	if (onBuild !== true) {
		return (
			<div ref={dragRef} style={{ opacity }} className="field-element">
				<FontAwesomeIcon icon="envelope" fixedWidth />
				<span className="field-text">Email</span>
			</div>
		);
	} else {
		return (
			<Form className="border mb-3 cursor" ref={dragRef} style={{ opacity }}>
				<Form.Group controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control type="email" placeholder="Enter email" />
				</Form.Group>
			</Form>
		);
	}
}

export default EmailElement;
