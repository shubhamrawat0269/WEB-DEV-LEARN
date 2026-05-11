// console.log(Buffer);
import { Buffer } from "buffer";

const ab = new ArrayBuffer(4);
const uInt8Array = new Uint8Array(ab);
// const nodeBuffer = new Buffer(4);
const nodeBuffer = Buffer.from(ab);

uInt8Array[0] = 97;
uInt8Array[1] = 98;
uInt8Array[2] = 99;
uInt8Array[3] = 100;

const decoder = new TextDecoder();
console.log(decoder.decode(uInt8Array));

// console.log(nodeBuffer.toString());
// console.log(uInt8Array.toString());
