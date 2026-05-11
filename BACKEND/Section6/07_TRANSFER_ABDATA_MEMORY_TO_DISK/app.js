import fs from "node:fs/promises";

const ab = new ArrayBuffer(7);
const uInt8Array = new Uint8Array(ab);

uInt8Array[0] = 0x53;
uInt8Array[1] = 0x68;
uInt8Array[2] = 0x75;
uInt8Array[3] = 0x62;
uInt8Array[4] = 0x68;
uInt8Array[5] = 0x61;
uInt8Array[6] = 0x6d;

// console.log(uInt8Array)
// const decoder = new TextDecoder()
// console.log(decoder.decode(uInt8Array));
// const view = new DataView(ab);
// console.log(view);

fs.writeFile("decode.txt", uInt8Array);
