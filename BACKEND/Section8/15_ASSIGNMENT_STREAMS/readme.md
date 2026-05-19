# in this lecture , i did assignement of writing numbers using two diff. methods & understand why streams are so fast.

## Reasons for being fast

1. **Streams** are fast as it only open the file once and after all the operation performed in it, then only close the file.

While, using methods like (appendFile & writeFile) leads to open / close file operation multiple times, causing slow operation. That's why streams are fast.

2. Second reason is stream use internal buffer to carry out chunks of data from memory to disc and we know temporary memory are fast as compared to disc.

While, using methods like appendFile etc leads to write operation directly our disc , which is slow in nature. It didn't use RAM for data read/write. That's why they are slow.