import fs from "fs";

const fileLocation =
  "C:\\Users\\Shubham Rawat\\Dropbox\\PC\\Downloads\\amazing-spiderman.mp4";

const readStream = fs.createReadStream(fileLocation, {
  highWaterMark: 1 * 1024 * 1024,
});

// console.log(readStream);
readStream.on("data", (chunk) => {
  fs.appendFileSync("movie.mp4", chunk);
});

readStream.on("end", () => {
  console.log("Data read completed");
});

// 64 kiB
