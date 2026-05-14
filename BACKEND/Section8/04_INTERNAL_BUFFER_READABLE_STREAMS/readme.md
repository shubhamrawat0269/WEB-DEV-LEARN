# in this lecture, we are going to study about how internal buffer created and of what size it hold. And What is read method of readStream.

1. Readable streams has a method called **read()**.
2. With Read Method, we are going to understand about **Internal Buffer**.
3. Read method initially return **null**. But useful, when we start loading data in our 
**internal buffer** of readStream.
4. A new internal buffer created in each event handler & when we consume it, destroyed automatically. And this cycle goes on until all data read operation done.
5. Understanding mechanisms of read operation:
  readStream.on("readable", () => {
  console.log(readStream.readableLength)
  console.log(readStream.read(1));
  console.log(readStream.readableLength)
});

highWaterMark - 4 byte

when bytereading process start, 
we get console - 4 byte ==> stream read 1 byte
remain - 3 byte

again, 4 byte data comes in look for the available bytes i.e. 3 < 4 (highWaterMark)
store +4 byte ie. 3 + 4 -> 7byte.
we get console 7 byte
stream read 1 byte only 
remaining 7 - 1 -> 6 byte
we get console. 6 byte

again, 4 byte data comes in look for the available bytes i.e. 6 > 4 (highWaterMark) 
stream stop reading.

Answer in console : 

4
<Buffer 41>
3
7
<Buffer 42>
6