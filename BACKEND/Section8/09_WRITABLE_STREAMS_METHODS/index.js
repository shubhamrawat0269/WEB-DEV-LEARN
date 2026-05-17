import fs from "fs";

const writeStream = fs.createWriteStream("file.txt", {
  highWaterMark: 1 * 1024,
});

// console.log(writeStream.writable);
writeStream.write("a");
writeStream.write("b");
// console.log(writeStream.writable);
// console.log(writeStream.writableEnded);

writeStream.cork();
// console.log(writeStream.writableCorked); // any value except 0 . Mostly 1
writeStream.write("a");
writeStream.write("a");
writeStream.write("a");
// writeStream.uncork();
// console.log(writeStream.writableCorked);  // 0
// console.log(writeStream.writableEnded);
// console.log(writeStream.writableFinished);
// writeStream.end();
