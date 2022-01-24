import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";

function CheckboxElement({ onBuild, type }) {
	// useDrag hook
	const [{ opacity }, dragRef] = useDrag({
		type,
		item: { name: "checkboxElement" },
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		}),
	});

	// Conditionally rendering the element
	if (onBuild !== true) {
		// Title rendering
		return (
			<div ref={dragRef} style={{ opacity }} className="field-element">
				<FontAwesomeIcon icon="check-square" fixedWidth />
				<span className="field-text">Checkboxes</span>
			</div>
		);
	} else {
		// Build rendering
		return (
			<div ref={dragRef} style={{ opacity }} className="form-group">
				<div class="form-check">
					<input class="form-check-input" type="checkbox" value="" id="defaultCheck1" />
					<label class="form-check-label" for="defaultCheck1">
						<input placeholder="Checkbox" />
					</label>
				</div>
			</div>
		);
	}
}

export default CheckboxElement;
