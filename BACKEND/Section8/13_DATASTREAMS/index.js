import fs from "fs";
import { pipeline } from "stream";

// Writable Duplex Stream
// console.log(process.stdin);

// Readable Duplex Stream
// console.log(process.stdout);
// console.log(process.stderr);

// process.stdout.write("Hii Shubham");
// process.stderr.write("Error Occured\n");

// process.stdin.write("Hii Shubham"); ==> Gives you error
const writeStream = fs.createWriteStream("chunks-data.txt");

// process.stdin.on("data", (chunk) => {
//   //   console.log(`Data Got : ${chunk}`);
//   //   console.log(`Total Words Written: ${chunk.length}`);

//   //   fs.appendFileSync("chunks-data.txt", chunk);
//   writeStream.write(`${chunk}`);
// });

// pipeline(process.stdin, writeStream); // this is not done
process.stdin.pipe(writeStream);
