import { useRef, useState, useEffect, Fragment } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag, useDrop } from "react-dnd";
import DragDropWrapper from "./Wrappers/DragDropWrapper";
import DeleteIcon from "./Wrappers/DeleteIcon";

import ConfigWrapper from "./Wrappers/ConfigWrapper";

function NameElement(props) {
	// Deconstruct props
	const { onBuild, type, moveField, index, id, deleteField, insertField } = props;

	// --------------------------------------------------------------------
	// *** Drag implementation of fields in element titles ***

	const [{ titleDragging }, titleDrag] = useDrag({
		type: type,
		item: { name: "nameElement", type },
		collect: (monitor) => ({
			titleDragging: monitor.isDragging(),
		}),
	});

	// React hooks
	const [focused, setFocused] = useState(false);
	const sortableRef = useRef(null);

	// --------------------------------------------------------------------
	// *** Rendering ***

	// CSS properties
	let opacity;

	// Conditionally rendering the element
	if (onBuild !== true) {
		// Title rendering
		opacity = titleDragging ? 0.4 : 1;
		return (
			<div ref={titleDrag} style={{ opacity }} className="field-element">
				<FontAwesomeIcon icon="signature" fixedWidth />
				<span className="field-text">Name</span>
			</div>
		);
	} else {
		return (
			<Fragment>
				<DragDropWrapper
					sortableRef={sortableRef}
					index={index}
					moveField={moveField}
					insertField={insertField}
					id={id}
					setFocused={setFocused}
					fieldName="nameElement">
					<div className={`form-group ${focused ? "border-left" : ""}`}>
						<div className="form-row">
							<div className="col">
								<label htmlFor="firstName">First name</label>
								<input
									type="text"
									className="form-control"
									placeholder="First name"
								/>
							</div>
							<div className="col">
								<label htmlFor="lastName">Last name</label>
								<input
									type="text"
									className="form-control"
									placeholder="Last name"
								/>
							</div>
						</div>
					</div>
				</DragDropWrapper>

				<DeleteIcon focused={focused} deleteField={() => deleteField(id)}></DeleteIcon>
				<ConfigWrapper focused={focused}>
					{/* **************** */}

					<div className={`form-group ${focused ? "border-left" : ""}`}>
						<label>First Label </label> <label style={{ color: "red" }}>*</label>
						<input className="form-control" required id="" placeholder="First Name" />
						<label>Second Label </label> <label style={{ color: "red" }}>*</label>
						<input className="form-control" required id="" placeholder="Last Name" />
					</div>

					<div className={`form-group ${focused ? "border-left" : ""}`}>
						<label>First Placeholder</label>
						<input className="form-control" id="" placeholder="" />

						<label>Second Placeholder</label>
						<input className="form-control" id="" placeholder="" />
					</div>

					<div className={`form-group ${focused ? "border-left" : ""}`}>
						<label>Element Type</label>
						<input className="form-control" id="" placeholder="" />
					</div>

					<div className={`form-group ${focused ? "border-left" : ""}`}>
						<label>Class</label>
						<input className="form-control" id="" placeholder="" />
					</div>

					<div className={`form-group ${focused ? "border-left" : ""}`}>
						<label>Primary Key</label>
						<input className="form-control" id="" placeholder="" />
					</div>

					<div className={`form-group ${focused ? "border-left" : ""}`}>
						<label>Module Name</label>
						<input className="form-control" id="" placeholder="" />
					</div>

					{/* Write Modal here */}
				</ConfigWrapper>
			</Fragment>
		);
	}
}

export default NameElement;
