import fs from "fs/promises";

// TIme : 1:01.155 (m:ss.mmm)
console.time();
// for (let i = 1; i <= 100000; i++) {
//   if (i == 1) fs.writeFileSync("output1.txt", `${i}\n`);
//   else fs.appendFileSync("output1.txt", `${i}\n`);
// }

const fileHandle = await fs.open("output2.txt", "w");
const writeStream = fileHandle.createWriteStream();

for (let i = 1; i <= 100000; i++) {
  writeStream.write(`${i}\n`);
}

console.timeEnd();
