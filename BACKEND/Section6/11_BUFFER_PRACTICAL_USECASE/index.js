import fs from "fs/promises";

const content = await fs.readFile('file.txt')

console.log(content)