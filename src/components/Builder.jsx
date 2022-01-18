import React from "react";
import { Container } from "react-bootstrap";
import NameElement from "./elements/NameElement";
import EmailElement from "./elements/EmailElement";
import PasswordElement from "./elements/PasswordElement";
import AppHeader from "./AppHeader";

function Builder() {
	return (
		<div className="main vh-100">
			<AppHeader />
			<div className="container-fluid">
				<div className="row">
					{/* Draggable field elements for form building */}
					<div className="col col-4 bg-light pt-3">
						<div className="container">
							<span className="fs-4">Elements</span>
							<hr />
							<EmailElement />
							<PasswordElement />
							<NameElement />
						</div>
					</div>

					{/* Form building space */}
					<div className="col col-8 d-flex">
						<div className="m-auto bg-light build-space border border-info rounded">
							Drop Zone
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Builder;
