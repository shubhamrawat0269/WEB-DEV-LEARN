import fs from "fs/promises";

const fileHandle = await fs.open("chars.txt", "w");

// const readStream = fileHandle.createReadStream();
const writeStream = fileHandle.createWriteStream({ highWaterMark: 1 });
// readStream.setEncoding("utf-8");

writeStream.write("abc");



// readStream.on("data", (chunk) => {
//   console.log(chunk);
// });
