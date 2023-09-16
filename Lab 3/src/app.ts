import http from "http";
import fs from "fs";
import readline from "readline";
import url from "url";
import factorial from "./factorial";
import factorialNextTick from "./factorialNextTick";
import factorialSetImmediate from "./factorialSetImmediate";

let state = "norm";

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: `${state}-> `
});

rl.on("line", (line) => {
	switch(line.trim()) {
    	case "norm":
			console.log(`reg = ${state}--> norm`);
			state = "norm";
			break;
    	case "stop":
			console.log(`reg = ${state}--> stop`);
			state = "stop";
			break;
    	case "test":
			console.log(`reg = ${state}--> test`);
			state = "test";
			break;
    	case "idle":
			console.log(`reg = ${state}--> idle`);
			state = "idle";
      		break;
    	case "exit":
      		process.exit(0);
    	default:
      		console.log(`Unknown state: "${line.trim()}"`);
			break;
  	}

	rl.setPrompt(`${state}-> `);
  	rl.prompt();
}).on("close", () => {
	process.exit(0);
});

const server = http.createServer(async (req, res) => {
	if (req.url === "/") {
		res.writeHead(200, { "Content-Type": "text/html" });
		res.end(`<h1>${state}</h1>`);
	}

	if (req.url.includes("/fact")) {
		const queryObject = url.parse(req.url, true).query;
  		const k = parseInt(queryObject.k as string);

		if (!isNaN(k)) {
			const fact = factorial(k);
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify({ k, fact }));
		} else {
			res.writeHead(400, { "Content-Type": "application/json" });
			res.end(JSON.stringify({ error: "Invalid parameter" }));
		}
	}

	if (req.url.includes("/fact-next-tick")) {
		const queryObject = url.parse(req.url, true).query;
  		const k = parseInt(queryObject.k as string);

		if (!isNaN(k)) {
			const fact = await factorialNextTick(k);
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify({ k, fact }));
		} else {
			res.writeHead(400, { "Content-Type": "application/json" });
			res.end(JSON.stringify({ error: "Invalid parameter" }));
		}
	}

	if (req.url.includes("/fact-set-immediate")) {
		const queryObject = url.parse(req.url, true).query;
  		const k = parseInt(queryObject.k as string);

		if (!isNaN(k)) {
			const fact = await factorialSetImmediate(k);
			res.writeHead(200, { "Content-Type": "application/json" });
			res.end(JSON.stringify({ k, fact }));
		} else {
			res.writeHead(400, { "Content-Type": "application/json" });
			res.end(JSON.stringify({ error: "Invalid parameter" }));
		}
	}

	if (req.url === "/benchmark") {
		fs.readFile("./public/benchmark.html", (err, data) => {
			if (err) {
				res.writeHead(404, { "Content-Type": "application/json" });
				res.end(JSON.stringify(err));
				return;
			}
	
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		});
	}

	if (req.url === "/benchmark-next-tick") {
		fs.readFile("./public/benchmarkNextTick.html", (err, data) => {
			if (err) {
				res.writeHead(404, { "Content-Type": "application/json" });
				res.end(JSON.stringify(err));
				return;
			}
	
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		});
	}

	if (req.url === "/benchmark-set-immediate") {
		fs.readFile("./public/benchmarkSetImmediate.html", (err, data) => {
			if (err) {
				res.writeHead(404, { "Content-Type": "application/json" });
				res.end(JSON.stringify(err));
				return;
			}
	
			res.writeHead(200, { "Content-Type": "text/html" });
			res.end(data);
		});
	}
});

const port = 5000;

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);

	rl.setPrompt(`${state}-> `);
	rl.prompt();
});
