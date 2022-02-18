import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

function ListForms() {
	const [formList, setFormList] = useState();

	const query = encodeURI(
		JSON.stringify({
			fields: ["forms.full_name"],
			limit: 1000,
		})
	);

	useEffect(() => {
		axios({
			method: "get",
			url: `https://builder.fiyge.com/development_base/forms/index.json?q=${query}`,
			headers: {
				"Content-Type": "multipart/form-data",
				Authorization: "Bearer " + localStorage.getItem("access"),
			},
		})
			.then((res) => {
				// console.log(res.data.paginate.data);
				setFormList(res.data.paginate.data);
			})
			.catch((error) => {
				console.log({ error });
			});
		// async function getForm() {
		// 	const response = await axios({
		// 		method: "get",
		// 		url: `https://builder.fiyge.com/development_base/forms/index.json?q=${query}`,
		// 		headers: {
		// 			"Content-Type": "multipart/form-data",
		// 			Authorization: "Bearer " + localStorage.getItem("access"),
		// 		},
		// 	});
		// 	setFormList(response);
		// }
		// getForm();
	}, [query]);

	console.log(formList);

	if (!formList) {
		return <div>Loading...</div>;
	}

	return (
		<div style={{ overflow: "scroll" }}>
			{formList.map((form) => (
				<div key={form["forms.id"]}>{form["forms.full_name"]}</div>
			))}
		</div>
	);
}

export default ListForms;
