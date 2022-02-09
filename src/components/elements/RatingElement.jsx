import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDrag } from "react-dnd";
import { MDBContainer, MDBRating } from "mdbreact";
import "./rating.css";

function RatingElement(props) {
	// Deconstruct props
	const { onBuild, type, moveField, index, id, deleteField } = props;

	const [basic] = useState([
		{
			tooltip: "Very Bad",
		},
		{
			tooltip: "Poor",
		},
		{
			tooltip: "Ok",
			choosed: true,
		},
		{
			tooltip: "Good",
		},
		{
			tooltip: "Excellent",
		},
	]);

	// useDrag hook
	const [{ opacity }, dragRef] = useDrag({
		type,
		item: { name: "ratingElement" },
		collect: (monitor) => ({
			opacity: monitor.isDragging() ? 0.4 : 1,
		}),
	});

	// Conditionally rendering the element
	if (onBuild !== true) {
		// Title rendering
		return (
			<div ref={dragRef} style={{ opacity }} className="field-element">
				<FontAwesomeIcon icon="star" fixedWidth />
				<span className="field-text">Rating</span>
			</div>
		);
	} else {
		// Build rendering
		return (
			<div ref={dragRef} style={{ opacity }} className="form-group">
				{/* <MDBContainer>
					<MDBRating iconRegular />
				</MDBContainer> */}
				Rating element
			</div>
		);
	}
}

export default RatingElement;
