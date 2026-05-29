import http from "http";
import fs from "fs/promises";

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("Content-Type", "image/webp");

  // res.end("Welcome to my channel Youtube Fellow");
  const fileHandle = await fs.open("river.webp");

  const readStream = fileHandle.createReadStream({ highWaterMark: 1 * 1024 });

  readStream.on("data", (chunk) => {
    res.write(chunk);
    readStream.pause();

    setTimeout(() => {
      readStream.resume();
    }, 500);
  });

  readStream.on("end", () => {
    console.log("Data Send Successfully");
    res.end();
  });
});

server.listen(4000, "localhost", () => {
  console.log("Server Started on Port 4000");
});
