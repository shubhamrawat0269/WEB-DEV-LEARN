// readable stream
// console.log(process.stdin)

// writable stream
// console.log(process.stdout)
// console.log(process.stderr)

// readable stream
// console.log(process.stdin.fd);

// writable stream
// console.log(process.stdout.fd);
// console.log(process.stderr.fd);

// process.stdin.write("hi");
// process.stdout.write("hi");
// process.stderr.write("hi");

import fs from "fs";
import { spawn } from "child_process"; // spawn means start
// const writeStream = fs.createWriteStream("new-file.txt");

// process.stdin.on("data", (chunk) => {
//   console.log(`Data Recieved : ${chunk.toString()}`);
//   writeStream.write(chunk);
// });

// const childProcess = spawn("cat", ["new-file.txt"]);
// const childProcess = spawn("ls");
// const childProcess = spawn("pwd");
// const childProcess = spawn("mkdir", ["chunks-data.txt"]);
const childProcess = spawn("node", ["index1.js"]);

// console.log(childProcess.stdout);

childProcess.stdout.on("data", (chunk) => {
  console.log(chunk);
});

childProcess.stdin.write("I am not a terrorist");
