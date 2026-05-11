import http from "http";

const server = http.createServer((req, res) => {
  req.on("data", (reqBody) => {
    console.log(reqBody, 'body');
  });

  res.setHeader("Content-Type", "text/txt; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end('hii');
});

server.listen(3000, () => {
  console.log("Listening on http://localhost:3000");
});
