const http = require("http");

// has a callback function that is executed everytime a request is received
const server = http.createServer((req, res) => {
  console.log("user hit the server");
  res.writeHead(200, { "content-type": "text/html" });
  res.write("<h1>home page</h1>");
  res.end("home page");
});

server.listen(5000);
