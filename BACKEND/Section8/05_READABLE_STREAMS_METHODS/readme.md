# in this lecture, we are going to study about differnet methods of ReadableStreams

## Main Methods of Readable Stream
1. pipe() - transfer data from one stream to another automatically.
2. unpipe() - stop the stream which cause data transfer stop.
3. pause() - temporarily stops flowing the data.
4. resume() - restart where it left from flowing data.
5. setEncoding() . repsonsible to tell our steam which encoding to prefer . For ex - utf-8

## Main Events of Readable Stream
1. data - triggered whenever a chunk of data is available.
2. readable - triggered when data is ready to be read manually.
3. end - Triggered when no more data remains.
4. error - triggered when there's error occured.

