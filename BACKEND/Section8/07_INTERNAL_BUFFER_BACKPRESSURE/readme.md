# in this lecture we study about Backpressure and internal buffer of writable streams.

1. by default Writable Stream occupy **16kiB**.
2. by nature, readStream is faster than writableStream.
3. createWriteStream creates **backpressure** when gets overload by readableStream.
4. **writableLength** property shows how many bytes of data so far has been writable.

For example,

console.log(writeStream.writableLength); // 0 byte written so far
writeStream.write("abc");
console.log(writeStream.writableLength); // 3 byte written so far

5. Whenever we write something on writeStream, it returns a boolean value whether it's fully filled as per the assigned byte or not. 
writeStream capacity is 4 byte only. 
=============================
isEmpty = writeStream.write("abc");
console.log(isEmpty);
isEmpty = writeStream.write("defmnopqrstuvwxyz");
console.log(isEmpty);
=============================

6. In the cycle of read/write writableStream when has data equals to its capacity, it tries to indicate readableStream
that don't put more data into it. First, let me transfer this data of RAM to disk first then i'll come back and you can load more data into RAM.


