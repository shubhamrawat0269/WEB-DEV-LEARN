import fs from "fs";

const readStream = fs.createReadStream("chars.txt", { highWaterMark: 4 });

// console.log(readStream.readableFlowing, "isReadable");
// console.log(readStream.readableEnded, "isReadableEnded");
// console.log(readStream.isPaused(), "isReadablePaused");

readStream.on("data", (chunk) => {
  console.log(readStream.bytesRead, "BYTE READ");
  console.log(readStream.readableHighWaterMark, "HIGHWATERMARK");

  if (readStream.bytesRead == readStream.readableHighWaterMark) {
    fs.writeFileSync("chars-new.txt", chunk);
  } else {
    fs.appendFileSync("chars-new.txt", chunk);
  }
  // readStream.pause();
  // console.log(readStream.isPaused(), "isReadablePaused");
});

// console.log(readStream.readableFlowing, "isReadable");
readStream.on("end", () => {
  console.log("Action ended");
  // console.log(readStream.readableEnded, "isReadableEnded");
});
