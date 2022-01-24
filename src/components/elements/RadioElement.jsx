import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

function RadioElement({ onBuild, type }) {
	// useDrag hook
	const [{ opacity }, dragRef] = useDrag({
		type,
		item: { name: "radioElement" },
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		}),
	});

	// Conditionally rendering the element
	if (onBuild !== true) {
		// Title rendering
		return (
			<div ref={dragRef} style={{ opacity }} className="field-element">
				<FontAwesomeIcon icon="circle" fixedWidth />
				<span className="field-text">Radio Buttons</span>
			</div>
		);
	} else {
		// Build rendering
		return (
			<div ref={dragRef} style={{ opacity }} class="form-group">
				<div class="form-check">
					<input
						class="form-check-input"
						type="radio"
						name="exampleRadios"
						id="exampleRadios1"
						value="option1"
					/>
					<label class="form-check-label" for="exampleRadios1">
						<input placeholder="radio buttons" />
					</label>
				</div>
			</div>
		);
	}
}

export default RadioElement;
