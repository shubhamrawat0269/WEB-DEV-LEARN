import fs from "fs";
import { pipeline } from "stream";

// console.time()
const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });
const writeStream = fs.createWriteStream("chars-new.txt", { highWaterMark: 4 });

pipeline(readStream, writeStream, (error) => {
  console.log(error);
});

// readStream.pipe(writeStream);

// setTimeout(() => {
//   readStream.destroy("Readstream got error");
// }, 1);
