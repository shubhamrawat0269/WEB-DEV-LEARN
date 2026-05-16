# in this lecture, we study about closing writable streams

1. using writeStream.end() states our writableStream ended, which triggers **finish** & **Close** event.
2. multiple end method are not allowed. 
3. end method is also work like writableStream.