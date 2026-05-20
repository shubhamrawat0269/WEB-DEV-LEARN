import fs from "fs";

const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });
const writeStream = fs.createWriteStream("output.txt", { highWaterMark: 4 });

readStream.on("data", (chunk) => {
  writeStream.write(chunk);  // backtracking
});
