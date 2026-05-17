# in this lecture, we study about pipe and unpipe method of readStream

1. pipe stream internally write all the readed data and transfer to writableStream with the
awareness of backpressure as well, pause, resume and write.
2. unpipe can stop the execution of pipe stream in the midway.
3. pipe and unpipe event emitters are only available on writeStream 

For example readStream.on('pipe')  ==> X  | readStream.on('unpipe')  ==> X