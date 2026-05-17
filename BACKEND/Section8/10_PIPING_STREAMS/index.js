import fs from "fs";

// Time 8sec
console.time();
const readStream = fs.createReadStream("chars.txt");
// const readStream = fs.createReadStream(
//   "C:\\Users\\Shubham Rawat\\Dropbox\\PC\\Downloads\\amazing-spiderman.mp4",
//   { highWaterMark: 1 * 1024 * 1024 },
// );

// const writeStream = fs.createWriteStream("movie.mp4", {
//   highWaterMark: 1 * 1024 * 1024,
// });

const writeStream = fs.createWriteStream("chars-new.txt");

readStream.pipe(writeStream);
// pipe stream internally write all the readed data and transfer to writableStream with the
// awareness of backpressure as well, pause, resume and write.

// So, Prefer piping as it short but limitation is error handling.

// setTimeout(() => {
//   readStream.unpipe(writeStream);
// }, 1000);

// readStream.on("data", (chunkBuffer) => {
//   const isEmpty = writeStream.write(chunkBuffer);

//   if (!isEmpty) {
//     readStream.pause();
//   }
// });

// writeStream.on("drain", () => {
//   readStream.resume();
// });

readStream.on("end", () => {
  console.log("Copying Successfully Done.....");
  console.timeEnd();
});
