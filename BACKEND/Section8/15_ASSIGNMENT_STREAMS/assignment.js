import fs from "fs";

// ===================================================

// TIme = 30.856s
// console.time();
// for (let i = 1; i <= 100000; i++) {
//   if (i == 1) fs.writeFileSync("output.txt", `${i}\n`);
//   else fs.appendFileSync("output.txt", `${i}\n`);
// }

// console.timeEnd();

// ===================================================

// TIme = 417ms
console.time();
const stream1 = fs.createWriteStream("new-file.txt");
for (let i = 1; i <= 100000; i++) {
  stream1.write(`${i}\n`);

  if (i == 100000) stream1.end();
}

stream1.on("finish", () => {
  console.timeEnd();
});

// ===================================================
