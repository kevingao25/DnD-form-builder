import React from "react";
import { Form, Container, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

function NameElement({ onBuild, type }) {
	// useDrag hook
	const [{ opacity }, dragRef] = useDrag({
		type,
		item: { name: "nameElement" },
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1, // Styling purpose
		}),
	});

	// Conditionally rendering the element
	if (onBuild !== true) {
		// Title rendering
		return (
			<div ref={dragRef} style={{ opacity }} className="field-element">
				<FontAwesomeIcon icon="signature" fixedWidth />
				<span className="field-text">Name</span>
			</div>
		);
	} else {
		// Build rendering
		return (
			<div ref={dragRef} style={{ opacity }} className="form-group">
				<div class="form-row">
					<div class="col">
						<label for="exampleInputName1">First name</label>
						<input type="text" class="form-control" placeholder="First name" />
					</div>
					<div class="col">
						<label for="exampleInputName2">Last name</label>
						<input type="text" class="form-control" placeholder="Last name" />
					</div>
				</div>
			</div>
		);
	}
}

export default NameElement;
