import React, { useState } from "react";
import { useDrop } from "react-dnd";

function BuildZone() {
	// useState hook
	const [fields, setFields] = useState([]);

	// useDrop hook
	const [{ isOver }, dropRef] = useDrop({
		accept: "field",
		collect: (monitor) => ({
			isOver: monitor.isOver(),
		}),
	});

	let backgroundColor = isOver ? "bg-warning" : "bg-light";

	return (
		<React.Fragment>
			<div ref={dropRef} className={`build-zone mx-auto border rounded ${backgroundColor}`}>
				<p className="text-muted lead">Add Fields Here</p>
			</div>
		</React.Fragment>
	);
}

export default BuildZone;
