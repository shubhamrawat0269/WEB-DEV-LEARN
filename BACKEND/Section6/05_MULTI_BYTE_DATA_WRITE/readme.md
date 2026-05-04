## In this lecture, so far we are storing data in a single byte container of AB. But how to store a character occuping multiple byte. 

1. Data which can't be store inside 8 bit i.e 1 byte
for example , 256 is a first decimal which can't store in 1 byte. It needs 2 byte i.e. <00000001 00000000>

2. To store numbers having more than 8 bit, we use <setInt16()>
3. Note : if hex contain 2 characters it means it can be store in single byte.
4. <setInt16(index,data,<(boolean for LE/BE)Optional>)> ensure the byte stores