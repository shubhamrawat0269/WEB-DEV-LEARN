# in this lecture, we study about Readable Streams 

1. Practice below code : 

import fs from "fs";

try {
  // const contentBuffer = await fs.readFile("120Bahadur.mkv");
  // console.log(contentBuffer.byteLength); // max Space : 2GiB allowed only.

  // Time : 22.57ms
  // Memory :
  // CPU :
  console.time();
  // const contentBuffer = await fs.readFile("theme.mp4");
  //  console.log(contentBuffer.byteLength);
  // await fs.writeFile("theme-new.mp4", contentBuffer);

  // const readStream = fs.createReadStream("120Bahadur.mkv", {
  //   highWaterMark: 1 * 1024 * 10224,
  // });
  // Time : 32s to append chunks in new destination
  // readStream.on("data", (chunkBuf) => {
  //   // console.log(chunkBuf.byteLength); // by default : 65536 (64 KB) Now : 1MB
  //   fs.appendFileSync("121Bahadur.mkv", chunkBuf);
  // });
  
  let count = 0;
  const readStream = fs.createReadStream("120Bahadur.mkv", {
    highWaterMark: 1 * 1024 * 1024,
  });

  readStream.on("data", (chunkBuf) => {
    // console.log(chunkBuf.byteLength);
    count++;
  });

  readStream.on("end", () => {
    console.log(count);
    console.timeEnd();
  });
} catch (error) {
  console.log(error.message);
}
