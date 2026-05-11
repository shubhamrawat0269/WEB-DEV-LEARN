import { Buffer } from "node:buffer";

// const b1 = Buffer.alloc(5000);
// const b2 = Buffer.allocUnsafe(5000);
// // b2.fill(21);
// // console.log(b1.toString());
// console.log(b2.toString('utf-8'));

console.time("Buffer.alloc");
for (let i = 0; i < 100000; i++) {
  Buffer.alloc(1024);
}
console.timeEnd("Buffer.alloc");

console.time("Buffer.allocUnsafe");
for (let i = 0; i < 100000; i++) {
  Buffer.allocUnsafe(1024);
}
console.timeEnd("Buffer.allocUnsafe");
