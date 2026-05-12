# in this lecture , we study about base 64 character encoding

1. Base 64 is character encoding that takes in binary to convert into text/string.
2. Just like ASCII has 128 characters in table format, we have 64 character along with index 
and binary data.
3. Base64 works on 6 bits binary . So maximum binary digit would be 111 111
4. btoa (binary to ascii) & atob (ascii to binary)

5. How btoa works
   btoa('abc')  ==> convert abc string to binary number using command xxd file name
                ==> Once get binary , group into 6 bits.
                ==> match the base 64 character table with corresponding character.
                ==> get the result.

6. Base64 rules 
  A. Atleast 3 bytes should be there to work with.
  B. If 3 bytes are not present, then base64 encoding will add 0 in rest bits.
  C. Data should be in the multiples of 3 bytes.

Note : if zero's are coming from placeholders, it get replace with = in result.

7. So far we learn about base64 rules and conversion, now it's time to learn base64 practical
usecase
8. Whenever we try to convert any filedata to base64 string and put it inside new file, size of new file increases by 8/6 times.
9. We can convert an image file to text file using base64 encoding.
------
const binaryContent = await fs.readFile("favicon/favicon-16x16.png", "base64");
await fs.writeFile("favicon/icon.png", binaryContent, "base64");
------

10. We must have already used base64 in our img src tag . You can try this as well and see
the difference.
