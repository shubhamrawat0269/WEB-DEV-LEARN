import fs from "fs";

console.time();

const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });
const writeStream = fs.createWriteStream("chars-file.txt", {
  highWaterMark: 4,
});

// readStream.on("data", (chunk) => {
//   const isEmpty = writeStream.write(chunk);
//   if (!isEmpty) {
//     readStream.pause();
//   }
// });

// writeStream.on("drain", (chunk) => {
//   readStream.resume();
// });

readStream.pipe(writeStream);

readStream.on("end", (chunk) => {
  console.log("copy success");
  console.timeEnd();
});
