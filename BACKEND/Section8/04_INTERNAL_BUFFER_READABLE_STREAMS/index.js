import fs from "fs";

const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });

// console.log(readStream.read()); // return null

readStream.on("data", (chunks) => {
  //   console.log(chunks); // internal buffer..
});

readStream.on("readable", () => {
  console.log(readStream.readableLength)
  console.log(readStream.read(1));
  console.log(readStream.readableLength)
});
