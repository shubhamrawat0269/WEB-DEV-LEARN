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


11000110 10000100 

11000110 10000100
