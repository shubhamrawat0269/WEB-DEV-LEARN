/*
   Learning from topic : INTRO TO FS MODUlE 
   -------------------

   1. fs is a built-in module providing an API to interact with files in a system.
   2. It provides both synchronous and asynchronous methods to read, write, and manipulate files.

   3. There is another method to read file content without using above methods, which is by using promises;
   4. Our promised method is performant as it doesn't block other operations to be performed. 
   5. It is recommended to create a performant application by using promises readfile method as it runs on seperate thread
   6. It doesn't block your main thread allowing other operation to be performed meanwhile.

   7. If, not using character encoding as second parameter, we get buffer which we will cover in further lesson. 
   8. If we use character encoding , it returns a string code which is human readable.


*/

import fs from 'fs'
// import fs from 'node:fs/promises'

// console.log(fs)
const content = fs.readFileSync('./my-intro.txt', 'utf-8')
console.log(content);

// fs.readFile('./my-intro.txt', 'utf-8', (error, data) => {
// console.log(data);
// });
let index = 0;

setInterval(() => {
   console.log(index++);
},50)


// const content = await fs.readFile('./content.txt', 'utf-8')
// console.log(content);
console.log('END OF THE PROGRAM')