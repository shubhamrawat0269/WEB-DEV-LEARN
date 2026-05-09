# In this lecture , we are going to study about Buffer in nodejs

1. Buffer in nodejs is actualy a uInt8Array typedarray, which has some additional properties
2. Buffer is not available in browser. It's nodejs specific and it use uInt8Array Buffer 
behind the scene.

3. const buffr = new Buffer(4);
Using above command is deprecated. So node suggest using inbuilt module Buffer
   const buffr = Buffer.alloc(4);

4. If we don't want to allocate space and want to create AB using ArrayBuffer, use 
Buffer.from(arrBuffer)

  const ab = new ArrayBuffer(4);
  const buffr = Buffer.from(ab); 

5. What will be the output of the below code : 

const ab = new ArrayBuffer(4);

const nodeBuffer = Buffer.from(ab);
const uInt8Array = new Uint8Array(ab);

uInt8Array[0] = 0xfd;
uInt8Array[1] = 0xff;

console.log(nodeBuffer);

This proves nodejs buffer is based on uInt8Array by seeing on debugging panel prototype.
Run Command npm run debug and navigate to browser's source tab -> node inspect icon.

6. nodeBuffer in nodejs has override method i.e. toString method which function just like 
TextDecoder which decode the binary data and convert it into actual string data.

7. There's a difference between nodeBuffer & nodeBuffer2 based on buffer size
const b1 = Buffer.allow(4);
const b2 = Buffer.from([97,98,99,100]);

console.log(b1.buffer.byteLength)
console.log(b2.buffer.bytelength)

console.log(b1.byteLength);
console.log(b2.byteLength);