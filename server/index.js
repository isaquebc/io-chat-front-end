import express from "express";
import path from "path";
import routes from "./routes";
import compression from "compression";
import favicon from "serve-favicon";

const app = express(); 

const port = process.env.PORT || 8888;
const apiEndpoint = process.env.API_ENDPOINT || "http://localhost:3300";
const env = process.env.NODE_ENV ;

app.use(compression());

app.get("*.js", (req, res, next) => {
	req.url = req.url + ".gz";
	res.set("Content-Encoding", "gzip");
	res.set("Content-Type", "text/javascript");
	next();
});

app.use("/", express.static("public"));

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");
app.use(favicon("favicon.ico"))

routes(app);
app.listen(port, err => {
	
	console.log("environment: ", env);
	console.log("Api Endpoint: ", apiEndpoint);

	if (err) console.log(err);
	else console.log(`\nServer online - Listening to port ${port}`);
});

