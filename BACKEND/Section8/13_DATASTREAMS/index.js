import fs from "fs";
import { spawn } from "child_process"; // spawn start a process

// console.log(process.stdin);
// console.log(process.stdout);
// console.log(process.stderr);

// console.log(process.stdin.fd);
// console.log(process.stdout.fd);
// console.log(process.stderr.fd);

// process.stdin.write("Hii");
// process.stdout.write("Hii\n");

// const writeStream = fs.createWriteStream("output-file.txt");

// process.stdin.on("data", (chunk) => {
//   console.log(`Data Recieved : ${chunk.toString()}`);
//   writeStream.write(chunk);
// });

// process.stdin.pipe(writeStream);

// const pro = spawn("mkdir", ["disc"]);
const parentProcess = spawn("node", ["server.js"]);

const writeStream = fs.createWriteStream("movie.mp4");
// here stdout works as a readable stream
parentProcess.stdout.pipe(writeStream);

// parentProcess.stdout.on("data", (data) => {
//   console.log(data);
// });

// parentProcess.stdin.write("Hii Manish Who are you?");
// pro.stdin.write("Hii Shubham"); // Not working
