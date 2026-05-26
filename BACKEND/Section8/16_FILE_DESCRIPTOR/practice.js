import fs from "fs";

// console.log(process.stdin.fd);
// console.log(process.stdout.fd);
// console.log(process.stderr.fd);

// fs.open("new.txt", (error, fd) => {
//   console.log(fd); // most probably 3
// });

// fs.open("number.txt", (error, fd) => {
//   console.log(fd); // most probably 4
// });

// fs.open("readme.md", (error, fd) => {
//   console.log(fd); // most probably 5
// });

const fd1 = fs.openSync("new.txt");
const fd2 = fs.openSync("number.txt");
const fd3 = fs.openSync("readme.md");
