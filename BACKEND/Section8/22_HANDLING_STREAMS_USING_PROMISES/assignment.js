import fs from "fs/promises";

const fileHandle = await fs.open("chars.txt", "r");

const readStream = fileHandle.createReadStream();
// const writeStream = fileHandle.createWriteStream();

readStream.setEncoding("utf-8");
// writeStream.write("abc");

readStream.on("data", (chunk) => {
  console.log(chunk);
});
