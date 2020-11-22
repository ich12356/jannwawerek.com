const express = require("express");
const path = require("path");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/", express.static(__dirname + "/public"));
app.use("/js", express.static(__dirname + "/node_modules/bootstrap/dist/js")); // redirect bootstrap JS
app.use("/js", express.static(__dirname + "/node_modules/jquery/dist")); // redirect JS jQuery
// app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css")); // redirect CSS bootstrap

app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/addEmail", async (req, res) => {
	try {
		const response = await axios.post(
			"https://api.sendinblue.com/v3/contacts",
			{
				email: req.body.email,
				listIds: [7],
			},
			{
				headers: {
					Accept: "*/*",
					"Content-Type": "application/json",
					"api-key": process.env.API_KEY,
				},
			}
		);

		res.send(response.data);
	} catch (err) {
		console.log(err);
		res.status(400).send(err);
	}
});

app.listen(process.env.port || 3000);
console.log(`Running at Port ${process.env.port || 3000}`);
