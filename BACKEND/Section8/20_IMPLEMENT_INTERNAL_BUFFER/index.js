import fs from "fs";

const fd = fs.openSync("numbers.txt", "w");

// 64 KB custom buffer
// const BUFFER_SIZE = 64 * 1024;
const BUFFER_SIZE = 4;
console.time();
let buffer = Buffer.allocUnsafe(BUFFER_SIZE);
let offset = 0;

// function which insert the data into disc
function insertData() {
  if (offset > 0) {
    fs.writeSync(fd, buffer.subarray(0, offset));
    offset = 0;
  }
}

for (let i = 1; i <= 100000; i++) {
  const str = `${i}\n`;
  const len = Buffer.byteLength(str);

  // if current buffer holds data equals to it's capacity
  if (offset + len > BUFFER_SIZE) insertData();
  //   if (offset + len > BUFFER_SIZE) {
  //     console.log("Buffer full~ We need to flush the data");
  //   }

  // wrting string into buffer
  offset += buffer.write(str, offset);
}

insertData();

fs.closeSync(fd);

console.timeEnd();
