import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
	if (req.url === "/html") {
		fs.readFile("./public/index.html", (err, data) => {
			if (err) {
				res.writeHead(404, { "Content-Type": "application/json"});
				res.end(JSON.stringify(err));
				return;
			}
	
			res.writeHead(200, { "Content-Type": "text/html"});
			res.end(data);
		});
	}

	if (req.url === "/png") {
		fs.readFile("./public/cat.png", (err, data) => {
			if (err) {
				res.writeHead(404, { "Content-Type": "application/json"});
				res.end(JSON.stringify(err));
				return;
			}
	
			res.writeHead(200, { "Content-Type": "image/png"});
			res.end(data);
		});
	}

	if (req.url === "/api/name") {
		res.writeHead(200, { "Content-Type": "text/plain"});
		res.end("Valodzkin Nikifor");
	}

	if (req.url === "/xmlhttprequest") {
		fs.readFile("./public/xmlhttprequest.html", (err, data) => {
			if (err) {
				res.writeHead(404, { "Content-Type": "application/json"});
				res.end(JSON.stringify(err));
				return;
			}
	
			res.writeHead(200, { "Content-Type": "text/html"});
			res.end(data);
		});
	}

	if (req.url === "/fetch") {
		fs.readFile("./public/fetch.html", (err, data) => {
			if (err) {
				res.writeHead(404, { "Content-Type": "application/json"});
				res.end(JSON.stringify(err));
				return;
			}
	
			res.writeHead(200, { "Content-Type": "text/html"});
			res.end(data);
		});
	}

	if (req.url === "/jquery") {
		fs.readFile("./public/jquery.html", (err, data) => {
			if (err) {
				res.writeHead(404, { "Content-Type": "application/json"});
				res.end(JSON.stringify(err));
				return;
			}
	
			res.writeHead(200, { "Content-Type": "text/html"});
			res.end(data);
		});
	}
});

const port = 5000;

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});
