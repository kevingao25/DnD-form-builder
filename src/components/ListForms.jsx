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
import AutoSizer from "react-virtualized-auto-sizer";

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

	// Testing purpose
	console.log(formList);

	const renderFormNames = (id, formName) => {
		return (
			<ListItem dense key={id} component="div" disablePadding sx={{ pr: 2 }}>
				<ListItemButton>
					{window.innerWidth >= 1680 ? (
						<ListItemIcon>
							<FormatAlignLeftIcon />
						</ListItemIcon>
					) : null}
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
		let height = window.innerHeight - 210;
		return (
			<div style={{ height }}>
				<TextField
					id="outlined-basic"
					onChange={(e) => setSearchText(e.target.value)}
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

				{/* Use FixedSizeList for better performance */}
				<AutoSizer>
					{({ height, width }) => (
						<FixedSizeList
							style={{ marginTop: "10px" }}
							height={height}
							width={width}
							itemSize={60}
							itemCount={Object.keys(formList).length}>
							{({ index, style }) => {
								return (
									<div style={style}>
										{renderFormNames(
											formList[index]["forms.id"],
											formList[index]["forms.full_name"]
										)}
									</div>
								);
							}}
						</FixedSizeList>
					)}
				</AutoSizer>
			</div>
		);
	}
}

export default ListForms;
