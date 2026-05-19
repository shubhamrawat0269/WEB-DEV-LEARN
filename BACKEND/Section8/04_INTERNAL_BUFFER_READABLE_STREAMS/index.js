import fs from "fs";

const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });

// console.log(readStream.read()); // null
// 64 kiB
readStream.on("data", (chunk) => {
  console.log(chunk); // internal buffer
});

readStream.on("readable", () => {
  console.log(readStream.readableLength); // 4 + 3 = 7 byte
  readStream.read(2); // byte read : 1
  console.log(readStream.readableLength); // 6 > 4 --> read op terminate
});
