import http from "http";
import fs from "fs/promises";

const server = http.createServer(async (req, res) => {
  res.setHeader("access-control-allow-origin", "*");
  res.setHeader("Content-Type", "text/txt");
  // res.setHeader("Content-Disposition", "attachment; filename=streams.mp4");

  const fileHandle = await fs.open("abc.txt");
  // const { size } = await fileHandle.stat();
  // res.setHeader("Content-Length", size);
  const readStream = fileHandle.createReadStream({
    highWaterMark: 1,
  });

  // readStream.pipe(res);
  readStream.on("data", (chunk) => {
    res.write(chunk);
    readStream.pause();

    setTimeout(() => {
      readStream.resume();
    }, 100);
  });

  readStream.on("end", () => {
    fileHandle.close();
    res.end();
  });
});

server.listen(4000, "localhost", () => {
  console.log("Server Started");
});
