import fs from "fs";

// const writeStream = fs.createWriteStream("chars.txt", { highWaterMark: 4 });

// let isEmpty;
// // console.log(writeStream.writableLength);
// isEmpty = writeStream.write("abc");
// // console.log(writeStream.writableLength);
// console.log(isEmpty);
// isEmpty = writeStream.write("defmnopqrstuvwxyz");
// // console.log(writeStream.writableLength);
// console.log(isEmpty);

const writeStream = fs.createWriteStream("file.txt", { highWaterMark: 4 });

let index = 0;

writeIstream();

writeStream.on("drain", () => {
  console.log("draineed", writeStream.writableLength);
  writeIstream();
});

function writeIstream() {
  while (index < 100) {
    console.log(writeStream.writableLength);
    let isEmpty = writeStream.write("a");
    index++;
    if (!isEmpty) break;
    console.log(isEmpty);
  }
}
