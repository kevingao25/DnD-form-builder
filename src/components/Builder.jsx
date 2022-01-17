import React from "react";
import { Form, Button } from "react-bootstrap";
import NameElement from "./elements/NameElement";
import EmailElement from "./elements/EmailElement";
import PasswordElement from "./elements/PasswordElement";

function Builder() {
	return (
		<div className="main">
			<div className="row">
				<div className="col col-3 bg-light fieldElem">
					<EmailElement />
					<PasswordElement />
				</div>

				<div className="col col-9">Test</div>
			</div>
		</div>
	);
}

export default Builder;
