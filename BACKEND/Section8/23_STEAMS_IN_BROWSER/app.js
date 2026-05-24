import http from "http";
import fs from "fs/promises";

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("Content-Type", "video/mp4");

  // Note: I am not able to reneder a large file 
  const fileHandle = await fs.open(
    "C:\\Users\\Shubham Rawat\\Dropbox\\PC\\Downloads\\amazing-spiderman.mp4",
  );
  const readStream = fileHandle.createReadStream({
    highWaterMark: 10 * 1024 * 1024,
  });

  readStream.on("data", (chunk) => {
    res.write(chunk);

    readStream.pause();
    setTimeout(() => {
      readStream.resume();
    }, 500);
  });

  readStream.on("end", () => {
    console.log("Data Rendered Copy successfully");
    res.end();
  }); 
});

server.listen(4000, "localhost", () => {
  console.log("Server Started on Port 4000");
});
