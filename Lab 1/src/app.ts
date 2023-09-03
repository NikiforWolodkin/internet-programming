import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Hello World!</h1>");
  }

	if (req.url === "/req-info") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    let markup = `<h1>Method: ${req.method}, URI: ${req.url}</h1>`;
    markup += `<h2>Protocol version: ${req.httpVersion}</h2>`;

    const headers = Object.keys(req.headers)
      .map(key => `${key}: ${req.headers[key]}`)
      .join(", ");
    markup += `<h3>Headers: ${headers}</h3>`;

    let body = "";
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      markup += `<h3>Body: ${body}</h3>`;

      res.end(markup);
    });
  }
});

const port = 3000;

server.listen(port, () => {
	console.log(`Server running at http://localhost:${port}/`);
});
