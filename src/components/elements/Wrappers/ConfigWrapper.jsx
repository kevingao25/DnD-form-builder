import React from "react";

function ConfigWrapper(props) {
	const { focused } = props;
	return (
		<div className={focused ? "show-action-group" : "hide-action-group"}>
			<button
				className="btn btn-success btn-sm rounded edit"
				type="button"
				data-toggle="tooltip"
				data-placement="top"
				title=""
				data-original-title="Edit">
				<i className="fa fa-cog"></i>
			</button>
		</div>
	);
}

export default ConfigWrapper;
