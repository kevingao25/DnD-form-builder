import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { FixedSizeList } from "react-window";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import ListItemIcon from "@mui/material/ListItemIcon";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

function ListForms() {
	// Fiyge form data
	const [formList, setFormList] = useState();
	const [error, setError] = useState(false);

	// Fetch all the list from Fiyge using API call
	const query = encodeURI(
		JSON.stringify({
			fields: ["forms.full_name"],
			limit: 1000,
		})
	);

	useEffect(() => {
		console.log("API Called");
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
				setError(true);
			});
	}, []);

	// Search bar
	const [searchText, setSearchText] = useState("");

	const searchHandler = (e) => {
		setTimeout(setSearchText(e.target.value.toLowerCase()), 500);
	};

	// Testing purpose
	console.log(formList);

	const renderFormNames = (id, formName) => {
		return (
			<ListItem key={id} component="div" disablePadding>
				<ListItemButton>
					<ListItemIcon>
						<FormatAlignLeftIcon />
					</ListItemIcon>
					<ListItemText primary={formName} secondary={`ID: ${id}`} />
					<IconButton edge="end" aria-label="delete">
						<DeleteIcon />
					</IconButton>
				</ListItemButton>
			</ListItem>
		);
	};

	if (error) {
		return <div>An error has occur...</div>;
	} else if (!formList) {
		return (
			<div style={{ textAlign: "center" }}>
				<CircularProgress />
				<Typography>Loading...</Typography>
			</div>
		);
	} else {
		return (
			<div>
				<TextField
					id="outlined-basic"
					onChange={searchHandler}
					variant="outlined"
					fullWidth
					label="Search"
					size="small"
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
					}}
				/>
				<List sx={{ pr: 1 }}>
					{formList.map((form) =>
						// <div key={form["forms.id"]}>{form["forms.full_name"]}</div>
						renderFormNames(form["forms.id"], form["forms.full_name"])
					)}
				</List>
			</div>
		);
	}
}

export default ListForms;
