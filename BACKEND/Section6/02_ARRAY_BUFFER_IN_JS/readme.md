## In this lecture , we are going to learn about ArrayBuffer.

1. Container of Bytes which assigned sequence wise. We get some space from RAM and max we can go is 2 GiB.
2. Note : Use example.com 
3. How can we create a ArrayBuffer in JS ? 
4. We get the error below when try to create ArrayBuffer of  

----------
const b = new ArrayBuffer(2 * 1024 * 1024 * 1024)
Uncaught RangeError: Array buffer allocation failed
----------

5. Under the hood, it is binary which get flows in the form of data but 
in memory inspector we get hex representation due to smaller in size

6. We can't directly ammend/change arraybuffer using Javascript,
7. We use two things -- **typedArray** and **Dataview** to make changes to arraybuffer.
8. We can only allocate some space from RAM using ArrayBuffer constructor.

9. We can see binary content of any file in a hex format whether it's a simple plain text file or mp4 file.