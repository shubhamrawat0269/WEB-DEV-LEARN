import fs from "fs";

console.time();
const readStream = fs.createReadStream("chars.txt", {
  highWaterMark: 4,
});

const writeStream = fs.createWriteStream("movie.mkv", {
  highWaterMark: 4,
});

readStream.on("data", (chunkBuffer) => {
  writeStream.write(chunkBuffer);
});

readStream.on("end", () => {
  console.log("Copying Ended.....");
  console.timeEnd();
});
