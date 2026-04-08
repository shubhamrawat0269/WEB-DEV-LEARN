
/*
  1. writefile method create a new file of the given path.
  2. if the file already exist then it will override the content with the new content.
  3. Appendfile is used to append the content to the already written file. 
  4. appendfile also create a new file like writefile. 
  
*/

import {readFile, writeFile} from 'node:fs/promises'

const content = await readFile('./hello.txt')
writeFile("C:\\Users\\Shubham Rawat\\OneDrive\\Desktop\\file-1.txt", content);

const pngContent = await readFile('./output.png')
writeFile(
  "C:\\Users\\Shubham Rawat\\OneDrive\\Desktop\\file-2.png",
  pngContent,
);