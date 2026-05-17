# in this lecture, we are going to study about Duplex, Transform & passthrough streams

1. We can't create Duplex stream using **fs** module. 
2. Duplex stream have mixture of both - readStream and writeStream.
3. We can create a custom readableStream and writableStream using stream native module.
=> For example, import {Readable, Writable, Duplex } from 'stream'

4. Passthrough Streams are whatever data is read , that data is sended as well. No modification.
5. But, if the readed data get changes or modified to something else and then writed. 
It's called Transform stream.
6. Duplex Stream have two internal buffer - readStream, writeStream.