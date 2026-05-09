import { Buffer } from "buffer";
// console.log(Buffer);

/* Although use below code of buffer is deprecated. use Buffer.alloc() or Buffer.allocUnsafe() */
// const buffr = new Buffer(4);
const ab = new ArrayBuffer(4);
// const nodeBuffer = Buffer.alloc(4);

// const nodeBuffer = Buffer.from(ab);
// const nodeBuffer = Buffer.alloc(4);

// nodeBuffer[0] = 97;
// nodeBuffer[1] = 98;
// nodeBuffer[2] = 99;
// nodeBuffer[3] = 100;

// const nodeBuffer = Buffer.from([97, 98, 99, 100]); // Same output

// const uInt8Array = new Uint8Array(ab);

// uInt8Array[0] = 0x61;
// uInt8Array[1] = 0x62;

console.log(nodeBuffer.toString("utf-8"));
// console.log(uInt8Array.toString());
