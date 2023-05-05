import { rps } from "./lib/rpsls.js";
import { rpsls } from "./lib/rpsls.js";
import minimist from "minimist";

import express from "express";
const args = minimist(process.argv.slice(2));

const port = args.port || 5000;
const app = express();
//2

app.use(express.json());
app.use(express.urlencoded({extended: true}));
//req 3 /app
app.get("/app/", (req, res) => {
	res.status(200).send(200 OK);
})
//404 not found
// /app/rps
app.get("/app/rps", (req, res) => {
	    res.status(200).send(rps());
})

///app/rpsls/
app.get("/app/rpsls/", (req, res) => {
	  res.status(200).send(JSON.stringify(rpsls()));
})

///app/rps/play/
app.get("/app/rps/play/", (req, res) => {
	  res.status(200).send(JSON.stringify(rps(req.query.shot)));
})

///app/rpsls/play/
app.get("/app/rpsls/play/", (req, res) => {
	  res.status(200).send(JSON.stringify(rpsls(req.query.shot)));
})

app.post("/app/rps/play/", (req, res) => {
	  res.status(200).send(JSON.stringify(rps(req.body.shot)));
})
app.post("/app/rpsls/play/", (req, res) => {
	  res.status(200).send(JSON.stringify(rpsls(req.body.shot)));
})
app.get("/app/rps/play/:shot", (req, res) => {
	  res.status(200).send(JSON.stringify(rps(req.params.shot)));
})
app.get("/app/rpsls/play/:shot", (req, res) => {
	  res.status(200).send(JSON.stringify(rpsls(req.params.shot)));
})
app.get("*", (req, res) => {
	          res.status(404).send("404 NOT FOUND");
})

// /app/rpsls/play/(rock|paper|scissors)/


// /app/rpsls/play/(rock|paper|scissors|lizard|spock)/

app.listen(port, () => {
	  console.log('Server listening on port ' + port);
})

