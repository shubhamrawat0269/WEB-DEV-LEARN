import fs from "fs";

const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });
const writeStream = fs.createWriteStream("chars-new.txt", { highWaterMark: 4 });

readStream.pipe(writeStream);
