import fs from "node:fs/promises";

// const base64FileContent = await fs.readFile("favicon/icon-1.png");
// const data = base64FileContent.toString("utf-8");
// const data = base64FileContent.toString("base64");

// console.log(data);
// await fs.writeFile("output.txt", data);

// ------------------------------------------------------------------ //

// const base64FileContent = await fs.readFile("output.txt");
// const data = base64FileContent.toString("utf-8");
// console.log(data);
// await fs.writeFile("favicon/icon-new.png", data, "base64");

// ------------------------------------------------------------------ //

// const base64FileContent = await fs.readFile("script.js");
// const data = base64FileContent.toString("base64");

// await fs.writeFile("script-content.txt", data);

// ------------------------------------------------------------------ //

const binaryData = await fs.readFile("clip-2.mp4");
const base64FileContent = binaryData.toString("base64");
console.log(base64FileContent);
await fs.writeFile("video-content.txt", base64FileContent);
