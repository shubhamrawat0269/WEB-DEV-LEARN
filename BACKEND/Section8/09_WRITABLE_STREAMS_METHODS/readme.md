# in this lecture, we study about properties & methods of writableStream

1. writable . it means that we can write data until it's not ended. 
2. writableCorked. property that return 0 or any other integer value. It says that whatever data you are trying to write using writeStream will not move forward from Internal Buffer
to disc.
3. Data will not writable if we use** writeStream.cork()** . To began writing data we can use
**writeStream.uncork()**; 
4. end() . It means that after trigger this method using writeStream.end(), we can't write data into our stream. But it doesn't ensure all data has been written or not from internal buffer. There can be some leftovers. We can check end state using **writableEnded**.
5. finish(). It means that end method is triggered and it ensure all data has been written from memory to disc. Using writeStream.writableFinished inside a setTImeout