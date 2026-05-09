const arrBuf = new ArrayBuffer(4);
const uint8Array = new Uint8Array(arrBuf);
const uint16Array = new Uint16Array(arrBuf);

uint8Array[0] = 0xFF;
uint8Array[1] = 0xFD;

uint16Array[2] = 0xFFea;

console.log(uint8Array.buffer);