import { useRef, useState, useEffect, Fragment } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag, useDrop } from "react-dnd";
import ReactStars from "react-rating-stars-component";
import DragDropWrapper from "./Wrappers/DragDropWrapper";
import DeleteIcon from "./Wrappers/DeleteIcon";
import ConfigWrapper from "./Wrappers/ConfigWrapper";

function RatingElement(props) {
	// Deconstruct props
	const { onBuild, type, moveField, index, id, deleteField } = props;

	// --------------------------------------------------------------------
	// *** Drag implementation of fields in element titles ***

	const [{ titleDragging }, titleDrag] = useDrag({
		type: type,
		item: { name: "ratingElement", index },
		collect: (monitor) => ({
			titleDragging: monitor.isDragging(),
		}),
	});

	// React hooks
	const [focused, setFocused] = useState(false);
	const sortableRef = useRef(null);

	// --------------------------------------------------------------------
	// *** Rendering ***

	const ratingChanged = (newRating) => {
		console.log(newRating);
	};

	// CSS properties
	let opacity;

	// Conditionally rendering the element
	if (onBuild !== true) {
		// Title rendering
		opacity = titleDragging ? 0.4 : 1;
		return (
			<div ref={titleDrag} style={{ opacity }} className="field-element">
				<FontAwesomeIcon icon="star" fixedWidth />
				<span className="field-text">Rating</span>
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
					fieldName="ratingElement">
					<div className={`form-group ${focused ? "border-left" : ""}`}>
						<label htmlFor="rating">Your Rating</label>
						<ReactStars
							count={5}
							onChange={ratingChanged}
							size={24}
							isHalf={true}
							activeColor="#ffd700"
						/>
					</div>
				</DragDropWrapper>

				<DeleteIcon focused={focused} deleteField={() => deleteField(id)}></DeleteIcon>
				<ConfigWrapper focused={focused}></ConfigWrapper>
			</Fragment>
		);
	}
}

export default RatingElement;
