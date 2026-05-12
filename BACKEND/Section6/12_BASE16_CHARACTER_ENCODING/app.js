import fs from "node:fs/promises";

// const base64Str = await fs.readFile("file.txt", "base64");
// await fs.writeFile("new-file.txt", base64Str, "base64");

// const binaryContent = await fs.readFile("favicon/favicon-16x16.png", "base64");
// console.log(binaryContent);
// await fs.writeFile("base64-file.txt", binaryContent);

// const content = await fs.readFile("base64-file.txt", "utf-8");
// await fs.writeFile("favicon/icon.png", content, "base64");

const content = await fs.readFile("Clip-1.mp4", "base64");
// console.log(content);
await fs.writeFile("video-1.txt", content);


