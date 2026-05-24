# In this lecture, i study about how browser automatically uses streams when server sends an assets  like video streaming , file downloading , file uploading etc.

1. File can be in any format -- text, image, video file.
2. When create a server we recieve two arguments --- i. req (reaable stream)  ii. res (writable stream).

3. Practical example of browser using streams to consume server data.
4. Whenever we listen on particular port esp. 4000 port here, our **callbackFn** get trigger. We can see that using debugging tool.
