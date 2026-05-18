# in this lecture, we are going to study about DataStreams.

1. Whenever we start a **process** (or application), it is attached with three datastreams.
2. Three datastreams are :
   A. **stdin** (readable duplex stream). It is by default connected with **keyboard** if we start our process with terminal. For Example : **Bash Process**
   B. **stdout** (writable duplex stream) . It is by default connected with **monitor**
   C. **stderr** (writable duplex stream)

Note : bash is also a process which is started by vscode . If it's a process then it comes with three streams.

3. Real Life Example,
   whenever we type command inside our terminal , it's a process which is coming from one of it's data stream i.e. **stdin** stream.
   When type enter, we get some result based on command that's possible because of **stdout** stream.
   And if typed command does not execute properly and has some error . Error shown is possible due to error stream i.e. **stderr**

4. We can connect one stream of a process to another stream.

5. We can demonstrate **1** to stdout & **0** to stdin. Also Number **2** to stderr, using **process.stdin.fd**. We call these number as **fd**.
6. Do you know, console.log is based on process.stdout.write() ?
7. process.stdin.on("data", (chunk) => {}); => process is waiting for some new data.

8. Now, we discuss about in which case both of the stream work as Duplex i.e. (Read/Write) ??
9. We need to know for now, is 
  A. We can connect two processes together with streams.
  B. Transfer the data from one stream to another using stdin/stdout data streams.

Note : Knowing pt.9 will demonstrate duplex streams behaviour.