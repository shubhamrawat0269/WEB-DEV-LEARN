/* 
Assignment 1 — Read a Large File Chunk by Chunk 
Understand how a readable stream sends data in chunks instead of loading the whole file into memory

Task 
1. Create a file named big.txt
2. Add a lot of text into it (copy-paste paragraphs multiple times)
3. Use fs.createReadStream() to read it.


Solution : 

------------------------------

import fs from "fs";

const readStream = fs.createReadStream("big.txt", {
  highWaterMark: 1 * 1024 * 1024,
});

readStream.setEncoding("utf-8");

readStream.on("data", (chunkBuffer) => {
  fs.appendFileSync("new-big.txt", chunkBuffer);
});

------------------------------
*/

import fs from "fs";

const readStream = fs.createReadStream("big.txt", {
  highWaterMark: 1,
});

readStream.setEncoding("utf-8");

let intialValue = 0;

readStream.on("data", (chunkBuffer) => {
  if (intialValue === 0) {
    console.log("Copy Started....");
    fs.writeFileSync("new-big.txt", chunkBuffer);
  } else {
    fs.appendFileSync("new-big.txt", chunkBuffer);
  }

  intialValue++;
});

readStream.on("end", () => {
  console.log("Copying Ended.....");
  console.log("Total Number of Words ", intialValue);
});
