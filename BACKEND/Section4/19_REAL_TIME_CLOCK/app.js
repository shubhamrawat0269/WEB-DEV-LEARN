import fs from 'node:fs/promises';

// // fs.writeFile("./file-1.txt", "How are you");
// fs.appendFile("./file-1.txt", "\nHii Shubham");

// Create a file
// Date -- real time update


setInterval(() => {
    try {
        fs.writeFile("./clock.txt", new Date().toLocaleTimeString());
    } catch (error) {
        console.error("Error while creating file" , error.message)
    }
}, 1000)

// console.log(new Date().toLocaleTimeString())