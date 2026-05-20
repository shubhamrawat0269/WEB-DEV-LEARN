/* 
 Assingnment : We have to write numbers from 1 to 1lac without using streams .
*/
// 636.592ms
import fs from "fs";

const fd = fs.openSync("numbers.txt", "w+");
console.time();
for (let i = 1; i <= 100000; i++) {
  fs.writeSync(fd, `${i}\n`);
}

fs.closeSync(fd);
console.timeEnd();
