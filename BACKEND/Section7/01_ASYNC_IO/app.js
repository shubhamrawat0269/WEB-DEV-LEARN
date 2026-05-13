import fs from "fs";

fs.readFile("file.txt", (error, data) => {
  console.log(data.byteLength);
});

console.log("Other Task to be performed by nodejs");
