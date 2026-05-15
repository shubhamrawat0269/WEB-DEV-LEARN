import fs from "fs";

console.time();
const readStream = fs.createReadStream("120Bahadur.mkv", {
  highWaterMark: 1 * 1024 * 1024,
});

const writeStream = fs.createWriteStream("movie.mkv", {
  highWaterMark: 1 * 1024 * 1024,
});

// let intialValue = 0;

readStream.on("data", (chunkBuffer) => {
  // TIme : 22sec
  //   if (intialValue === 0) {
  //     console.log("Copy Started....");
  //     fs.writeFileSync("movie.mkv", chunkBuffer);
  //   } else {
  //     fs.appendFileSync("movie.mkv", chunkBuffer);
  //   }
  //   intialValue++;
  // time : 14sec
  //   writeStream.write(chunkBuffer); // using this will cause backtracking.
});

readStream.on("end", () => {
  console.log("Copying Ended.....");
  console.timeEnd();
});
