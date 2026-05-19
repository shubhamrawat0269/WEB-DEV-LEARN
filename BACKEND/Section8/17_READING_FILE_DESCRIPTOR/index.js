import fs from "fs";

/*
  What I have learned so far : 
  1. opening files with fs.openSync()
  2. creating buffers
  3. reading specific byte ranges
  4. using position, offset, and length

*/

const fd1 = fs.openSync("chars.txt");
const fd2 = fs.openSync("numbers.txt");
const buffer = Buffer.alloc(10);
const buff1 = Buffer.alloc(5);

fs.read(
  fd1,
  {
    buffer: buffer,
    offset: 2, // where to start writing into buffer
    length: 4, // how many bytes to read
    position: 1, // where to start reading from file
  },
  (error, bytesRead, buffData) => {
    if (error) {
      console.log(error);
      return;
    }

    console.log(bytesRead);
    console.log(buffData.toString());
  },
);
