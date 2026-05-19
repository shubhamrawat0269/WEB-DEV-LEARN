import fs from "fs";

const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });
const writeStream = fs.createWriteStream("chars-new.txt", { highWaterMark: 4 });

readStream.setEncoding("utf-8");
readStream.pipe(writeStream);
// readStream.pause();

// setTimeout(() => {
//   //   readStream.unpipe(writeStream);
//   readStream.resume();
// }, 1000);

// readStream.on("data", (chunk) => {
// //   console.log(chunk);
// });

readStream.on("end", () => {
  console.log("Data Operation Completed");
});

readStream.on("error", (error) => {
  console.log("Data Operation Completed");
});
