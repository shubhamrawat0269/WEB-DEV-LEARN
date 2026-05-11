import { Buffer } from "node:buffer";

const b2 = Buffer.allocUnsafe(8);
const b3 = Buffer.allocUnsafe(8);

b2[0] = 97;
b3[0] = 98;

console.log("END");
