import { Buffer } from "buffer";

const b1 = Buffer.alloc(4);
const b2 = Buffer.allocUnsafe(4);
const b3 = Buffer.allocUnsafe(8);

b2[0] = 97;
b3[0] = 97;

// console.log(b1.buffer);
// console.log(b2.buffer);

console.log("END");
