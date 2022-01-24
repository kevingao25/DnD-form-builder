import React from "react";
import { Form, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

function PasswordElement({ onBuild, type }) {
	// useDrag hook
	const [{ opacity }, dragRef] = useDrag({
		type,
		item: { name: "passwordElement" },
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		}),
	});

	// Conditionally rendering the element
	if (onBuild !== true) {
		// Title rendering
		return (
			<div ref={dragRef} style={{ opacity }} className="field-element">
				<FontAwesomeIcon icon="unlock" fixedWidth />
				<span className="field-text">Password</span>
			</div>
		);
	} else {
		// Build rendering
		return (
			<form>
				<div ref={dragRef} style={{ opacity }} className="form-group">
					<label for="exampleInputPassword1">Password</label>
					<input
						type="password"
						class="form-control"
						id="exampleInputPassword1"
						placeholder="Password"
					/>
				</div>
			</form>
		);
	}
}

export default PasswordElement;
