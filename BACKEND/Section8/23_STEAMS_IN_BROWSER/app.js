import http from "http";

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("Content-Type", "video/mp4");

  // res.end("Hello World");
  
});

server.listen(4000, "localhost", () => {
  console.log("Server Started on Port 4000");
});
