1. command to run : xxd <file-name> gives you hex formate of content written in given file
2. command to run : xxd -b <file-name> gives you binary format of content

## Rules in which UTF-8 stores value in bytes along with headers or placeholder

1. One byte characters 
0xxxxxxx

2. Two byte characters 
110xxxxx 10xxxxxx

3. Three byte characters
1110xxxx 10xxxxxx 10xxxxxx

4. Four byte characters 
11110xxx 10xxxxxx 10xxxxxx 10xxxxxx


What do u mean by UTF-16 LE & BE ? 
File with character encoding UTF-16 LE includes an header by default, which occupies some space 

When switch from UTF-8 to UTF-16 , typing command : xxd <filename> will eventually includes an header fffe or feff (BE/ LE)

---------------------------

Within UTF-8 , a single character can be represented by 8 bit (1bit) minimum. It is ideal for data transfer as comp. to others.
While UTF-16 , it is 16 bit (2 byte) occuping more size than UTF-8
While UTF-32,  it is 32 bit (4 byte) occuping even more size than UTF-16. 

---------------------------