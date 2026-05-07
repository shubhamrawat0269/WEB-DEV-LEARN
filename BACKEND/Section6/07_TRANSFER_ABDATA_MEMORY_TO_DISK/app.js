import fs from 'fs/promises';

const uInt8Array = new Uint8Array([0x53, 0x68, 0x75, 0x62, 0x68, 0x61, 0x6d]);
// console.log(uInt8Array);

fs.writeFile('decode-text.txt', uInt8Array)