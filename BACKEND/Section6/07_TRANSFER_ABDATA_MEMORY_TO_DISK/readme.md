# In this lecture, I study about whether can we transfer the RAM stored data into disc and the network.

1. We begin our lecture by creating a small task : 
  A. Create an ArrayBuffer of size 8.
  B. Using unsignedInt8Array method , store your name inside it.
  C. See in console after decoding the Arraybuffer

2. We can store our Data using **TypedArray** inside a file using **fs** module.
3. Try passing arrayBuffer inside fs method.
4. Create an DataView and pass buffer and then try to pass view inside fs method.

5. We can also perform an example of how bufferdata travels through network.
6. We can also recieves arrayBuffer inside our client using fetch call