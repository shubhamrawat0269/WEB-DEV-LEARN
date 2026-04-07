
/*
  1. writefile method create a new file of the given path.
  2. if the file already exist then it will override the content with the new content.
  3. Appendfile is used to append the content to the already written file. 
  4. appendfile also create a new file like writefile. 
  
*/

import fs from 'node:fs/promises';


// write file override the content of the file.
// fs.writeFile('hello.txt', 'Hii I am shubham');
// fs.appendFile('hello.txt', 'I am a youtuber \n');