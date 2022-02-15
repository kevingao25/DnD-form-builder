import { useRef, useState, useEffect, Fragment } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag, useDrop } from "react-dnd";
import DragDropWrapper from "./Wrappers/DragDropWrapper";
import DeleteIcon from "./Wrappers/DeleteIcon";
import ConfigWrapper from "./Wrappers/ConfigWrapper";

function FileElement(props) {
	// Deconstruct props
	const { onBuild, type, moveField, index, id, deleteField, insertField } = props;

	// --------------------------------------------------------------------
	// *** Drag implementation of fields in element titles ***

	const [{ titleDragging }, titleDrag] = useDrag({
		type: type,
		item: { name: "fileElement", type },
		collect: (monitor) => ({
			titleDragging: monitor.isDragging(),
		}),
	});

	// React hooks
	const [focused, setFocused] = useState(false);
	const sortableRef = useRef(null);

	// --------------------------------------------------------------------
	// *** Rendering ***
	let opacity;

	// Conditionally rendering the element
	if (onBuild !== true) {
		// Title rendering
		opacity = titleDragging ? 0.4 : 1;
		return (
			<div ref={titleDrag} style={{ opacity }} className="field-element">
				<FontAwesomeIcon icon="file-upload" fixedWidth />
				<span className="field-text">File Upload</span>
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
					setFocused={setFocused}
					id={id}
					fieldName="fileElement">
					<div className={`form-group ${focused ? "border-left" : ""}`}>
						<label htmlFor="exampleFormControlFile1">File Input</label>
						<input
							type="file"
							className="form-control-file"
							id="exampleFormControlFile1"
						/>
					</div>
					<br></br>
				</DragDropWrapper>

				<DeleteIcon focused={focused} deleteField={() => deleteField(id)}></DeleteIcon>
				<ConfigWrapper focused={focused}>
					{/* **************** */}

					<div className={`form-group ${focused ? "border-left" : ""}`}>
					<label>Label </label> <label style={{color: "red"}}>*</label>
						<input
							className="form-control"
							required
							id=""
							placeholder="File Input"
						/>
					</div>

					<br></br>

					<div className={`form-group ${focused ? "border-left" : ""}`}>
						<label>Placeholder</label>
						<input
							className="form-control"
							id=""
							placeholder=""
						/>
					</div>

					<br></br>

					<div className={`form-group ${focused ? "border-left" : ""}`}>
						<label>Element Type</label>
						<input
							className="form-control"
							id=""
							placeholder=""
						/>
					</div>

					<br></br>

					<div className={`form-group ${focused ? "border-left" : ""}`}>
						<label>Class</label>
						<input
							className="form-control"
							id=""
							placeholder=""
						/>
					</div>

					<br></br>

					<div className={`form-group ${focused ? "border-left" : ""}`}>
						<label>Primary Key</label>
						<input
							className="form-control"
							id=""
							placeholder=""
						/>
					</div>

					<br></br>

					<div className={`form-group ${focused ? "border-left" : ""}`}>
						<label>Module Name</label>
						<input
							className="form-control"
							id=""
							placeholder=""
						/>
					</div>

					<br></br>

					{/* Write Modal here */}
				</ConfigWrapper>
			</Fragment>
		);
	}
}

export default FileElement;
