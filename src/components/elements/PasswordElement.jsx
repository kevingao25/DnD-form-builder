import { useRef, useState, useEffect, Fragment } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag, useDrop } from "react-dnd";
import DragDropWrapper from "./Wrappers/DragDropWrapper";
import DeleteIcon from "./Wrappers/DeleteIcon";
import ConfigWrapper from "./Wrappers/ConfigWrapper";

function PasswordElement(props) {
	// Deconstruct props
	const { onBuild, type, moveField, index, id, deleteField, insertField } = props;

	// --------------------------------------------------------------------
	// *** Drag implementation of fields in element titles ***

	const [{ titleDragging }, titleDrag] = useDrag({
		type: type,
		item: { name: "passwordElement", type },
		collect: (monitor) => ({
			titleDragging: monitor.isDragging(),
		}),
	});

	const initialConfig = {
		label: "Password",
		placeholder: "Enter Your Password",
		elementType: "",
		class: "",
		primaryKey: "",
		moduleName: "",
	};

	const [config, setConfig] = useState(initialConfig);

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
				<FontAwesomeIcon icon="unlock" fixedWidth />
				<span className="field-text">Password</span>
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
					fieldName="passwordElement">
					<form>
						<div className={`form-group ${focused ? "border-left" : ""}`}>
							<label htmlFor="exampleInputPassword1">{config.label}</label>
							<input
								type="password"
								className="form-control"
								id="exampleInputPassword1"
								placeholder={config.placeholder}
							/>
						</div>
					</form>
				</DragDropWrapper>

				<DeleteIcon focused={focused} deleteField={() => deleteField(id)}></DeleteIcon>
				<ConfigWrapper focused={focused}>
					{/* **************** */}

					<div className={`form-group ${focused ? "border-left" : ""}`}>
						<label>Label </label> <label style={{ color: "red" }}>*</label>
						<input
							className="form-control"
							required
							id=""
							onChange={(e) =>
								setConfig((prevConfig) => ({
									...prevConfig,
									label: e.target.value,
								}))
							}
							placeholder={config.label}
						/>
					</div>

					<div className={`form-group ${focused ? "border-left" : ""}`}>
						<label>Placeholder</label>
						<input
							className="form-control"
							required
							id=""
							onChange={(e) =>
								setConfig((prevConfig) => ({
									...prevConfig,
									placeholder: e.target.value,
								}))
							}
							placeholder={config.placeholder}
						/>
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

export default PasswordElement;
