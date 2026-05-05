## In this lecture, so far we are storing data in a single byte container of AB. But how to store a character occuping multiple byte. 

1. Data which can't be store inside 8 bit i.e 1 byte
for example , 256 is a first decimal which can't store in 1 byte. It needs 2 byte i.e. 00000001 00000000

2. You can understand like this that 2 hex character represent 1 byte . 
3. Then, how can we store a number occuping more than 8 bits.
Solution : use methods like setInt16 or setInt32 in this scenerio.

4. By Default, setInt16() writes data in big endian format.
5. How can we write data in little endian format?
Solution is **v.setInt16(0, 260, true)** i.e. **true** stands to be represent binary data in little endian format.
