import fs from "fs";

console.time();
const readStream = fs.createReadStream("chars.txt", {
  highWaterMark: 4,
});

const writeStream = fs.createWriteStream("new-file.txt", {
  highWaterMark: 4,
});
// let cycle = 1;

readStream.on("data", (chunkBuffer) => {
  const isEmpty = writeStream.write(chunkBuffer);
  // TODO : isEmpty = true readStream stop
  // console.log(isEmpty, cycle);
  if (!isEmpty) readStream.pause();
});

writeStream.on("drain", () => {
  readStream.resume();
});

readStream.on("end", () => {
  console.log("Copying Ended.....");
  console.timeEnd();
});
