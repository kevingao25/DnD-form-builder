import { useRef, useState, useEffect, Fragment } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag, useDrop } from "react-dnd";
import DragDropWrapper from "./Wrappers/DragDropWrapper";
import DeleteIcon from "./Wrappers/DeleteIcon";
import ConfigWrapper from "./Wrappers/ConfigWrapper";

import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";

function TimeElement(props) {
	// Deconstruct props
	const { onBuild, type, moveField, index, id, deleteField } = props;

	// --------------------------------------------------------------------
	// *** Drag implementation of fields in element titles ***

	const [{ titleDragging }, titleDrag] = useDrag({
		type: type,
		item: { name: "timeElement", index },
		collect: (monitor) => ({
			titleDragging: monitor.isDragging(),
		}),
	});

	// React hooks
	const [focused, setFocused] = useState(false);
	const sortableRef = useRef(null);

	// --------------------------------------------------------------------
	// *** Rendering ***

	const [startDate, setStartDate] = useState(new Date());

	// CSS properties
	let opacity;

	// Conditionally rendering the element
	if (onBuild !== true) {
		// Title rendering
		opacity = titleDragging ? 0.4 : 1;
		return (
			<div ref={titleDrag} style={{ opacity }} className="field-element">
				<FontAwesomeIcon icon="clock" fixedWidth />
				<span className="field-text">Time</span>
			</div>
		);
	} else {
		return (
			<Fragment>
				<DragDropWrapper
					sortableRef={sortableRef}
					index={index}
					moveField={moveField}
					setFocused={setFocused}
					id={id}
					fieldName="timeElement">
					<div className={`form-group ${focused ? "border-left" : ""}`}>
						<label htmlFor="timePicker">Time Picker</label>
						<TimePicker></TimePicker>
					</div>
				</DragDropWrapper>

				<DeleteIcon focused={focused} deleteField={() => deleteField(id)}></DeleteIcon>
				<ConfigWrapper focused={focused}></ConfigWrapper>
			</Fragment>
		);
	}
}

export default TimeElement;
