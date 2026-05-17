import fs from "fs";
import { pipeline } from "stream/promises";

let totalBytes = 0;
console.time();

let inputFile =
  "C:\\Users\\Shubham Rawat\\Dropbox\\PC\\Downloads\\amazing-spiderman.mp4";

const totalFileSize = fs.statSync(inputFile).size;

const readStream = fs.createReadStream(inputFile, {
  highWaterMark: 1 * 1024 * 1024,
});

const writeStream = fs.createWriteStream("movie.mp4", {
  highWaterMark: 1 * 1024 * 1024,
});

readStream.on("open", () => {
  console.log("Reading started...");
});

readStream.on("data", (chunk) => {
  totalBytes += chunk.length;

  const percentage = ((totalBytes / totalFileSize) * 100).toFixed(2);
  // Rewrite same line in terminal
  process.stdout.write(`\rProgress : ${percentage}%`);
});

// readStream.on("end", () => {
//   console.log("Copy successfully Done");
//   console.log(`Total bytes copied: ${totalBytes}`);
// });

try {
  await pipeline(readStream, writeStream);

  console.log("\nCopy successfully Done");
  console.log(`\nTotal bytes copied: ${totalBytes}`);

  console.timeEnd();
} catch (error) {
  console.log(error.message);
}
