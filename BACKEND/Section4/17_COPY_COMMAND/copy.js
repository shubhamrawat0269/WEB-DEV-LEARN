#!/usr/bin/env node
import {readFile, writeFile} from "node:fs/promises"

const [,,source, destination] = process.argv;
// console.log(source, destination);

if(!source || !destination){
    console.log("Please provide source and destination");
    process.exit(1);
}

try {
    const contentBuffer =  await readFile(source);
    await writeFile(destination, contentBuffer);
    
    const finalMessage = `File copied from ${source} to ${destination}`;
    console.log(finalMessage);
} catch (error) {
    console.error("Error occurred while copying file:", error.message);
}
