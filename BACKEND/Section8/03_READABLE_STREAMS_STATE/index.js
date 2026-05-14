import fs from "fs";

const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });

// console.log(readStream.readableFlowing);
// console.log(readStream.readableEnded);
// console.log(readStream.isPaused());
let initialCount = 0;

// readStream.on("data", (chunkBuffer) => {
//   fs.writeFileSync("new-chars-chunk.txt", chunkBuffer);
//   readStream.pause();
// });

readStream.on("data", (chunkBuffer) => {
  //   if (initialCount === 0) fs.writeFileSync("new-chars-chunk.txt", chunkBuffer);
  //   else fs.appendFileSync("new-chars-chunk.txt", chunkBuffer);
  if (readStream.bytesRead === readStream.readableHighWaterMark)
    fs.writeFileSync("new-chars-chunk.txt", chunkBuffer);
  else fs.appendFileSync("new-chars-chunk.txt", chunkBuffer);

  //   initialCount++;
  readStream.pause();
  setTimeout(() => {
    readStream.resume();
  }, 1000);
  //   for (let i = 0; i < 1000000000; i++) {} // This is not the right way
});
