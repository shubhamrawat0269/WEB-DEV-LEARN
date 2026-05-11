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
