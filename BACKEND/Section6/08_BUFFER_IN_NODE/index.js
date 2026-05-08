import { Buffer } from "Buffer";
const a = new ArrayBuffer(7);
const nodeBuffer = new Buffer.from(a);
const uint8Array = new Uint8Array(a);

uint8Array[0] = "0x53";
uint8Array[1] = "0x68";
uint8Array[2] = "0x75";
uint8Array[3] = "0x62";
uint8Array[4] = "0x68";
uint8Array[5] = "0x61";
uint8Array[6] = "0x6D";

console.log(uint8Array.buffer);
