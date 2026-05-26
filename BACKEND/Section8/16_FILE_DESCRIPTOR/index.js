// import fs from "fs";
import fs from "fs/promises";

// console.log(process.stdin.fd);
// console.log(process.stdout.fd);
// console.log(process.stderr.fd);

// fs.open("chars.txt", (error, fd) => {
//   console.log(fd);
//   fs.read()
// });

// fs.open("number.txt", (error, fd) => {
//   console.log(fd);
// });

const fileHandle = await fs.open("chars.txt");
console.log(fileHandle);

console.log("END");
