import fs from "node:fs/promises";
import { watch } from "node:fs";

// fs.rename("file1.txt", "file-1.txt");
// fs.copyFile("file-1.txt", "file-2.txt");
// fs.cp("src", "output", {recursive: true});

// fs.unlink("file-2.txt");
// fs.rm("output", { recursive: true });

// fs.writeFile('file-1.txt', '')

// fs.mkdir("bin");

watch("file-1.txt", (eventType, filename) => {
  console.log(eventType, filename);
});
