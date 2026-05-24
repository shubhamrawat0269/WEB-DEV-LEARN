import fs from "fs/promises";

const fileHandle = await fs.open("chars.txt", "w+");

const { buffer, bytesRead } = await fileHandle.read({
  buffer: Buffer.alloc(10),
});
// console.log({ buffer: buffer, bytesRead });

const data = await fileHandle.write("abc");

fileHandle.close();
