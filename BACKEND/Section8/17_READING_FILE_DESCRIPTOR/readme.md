# in this lecture , we are going to study about How to read file using file descriptor

1. First we must open the file.
2. using read method (accpting fd & cb) , cb -> includes state : error, bytesRead, buffData.
   Suppose, we want to create our own buffer, then :
   const buff = Buffer.alloc(10);

3. There's also one parameter we recieve as second -> **options**
   options ==> {buffer : buff}

4. By default, it creates an 16 kiB buffer and perform read and write operation in it.
5. We can pass multiple prop inside options obj :
   A. buffer : buff
   B. position : number (which tells from which position it should start processing data)
   C. length : how many bytes it needs to process.
   D. offset : leave place empty upto the given specified position and start writing from the next place.