## In this lecture, we are going to see how we can read/write some data in ArrayBuffer. 

1. We use DataView Constructor to read/write data in AB.
2. 
Syntax : 
 const view = new DataView(<arrayBuffer>);

 view.setInt8(<AB index>, <data to be stored>);

3. We can connect single AB with multiple data view
  const view2 = new DataView(<AB>, offsetValue)
  i.e. offsetValue will tell out view from which index its going to have access of byte.

4. We can write a binary number, hex number, octal number & decimal number inside 
<data to be stored>
   for eg. 
     view.setInt8(0, 0b0101);
     view.setInt8(1, 0xFF);
     view.setInt8(2, 0o26);

    Within JS, it's going to get convert in decimal format.

5. Now, the question is can we store a signed value inside ArrayBuffer 
Answer is yes, you can do it using same method <view.setInt8(0, -1)>

6. We have another method to get unsigned value via <view.getUint8(0)>
7. When we try to store out of range value either in signed value or unsigned value, 
   it tries to convert the large number to binary and tries to store only 8 bit and 
   neglect rest of the bit. 
