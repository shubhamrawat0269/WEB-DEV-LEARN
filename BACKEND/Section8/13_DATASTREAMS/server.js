import fs from "fs";
// let num = 10;

const readStream = fs.createReadStream(
  "C:\\Users\\Shubham Rawat\\Dropbox\\PC\\Downloads\\amazing-spiderman.mp4",
  { highWaterMark: 1 * 1024 * 1024 },
);

readStream.pipe(process.stdout);

// const writeStream = fs.createWriteStream("output-new.txt");
// process.stdin.on("data", (chunk) => {
//    writeStream.write(data);
//   console.log(chunk.toString());
// });

// console.log(`Number is ${num}`);
