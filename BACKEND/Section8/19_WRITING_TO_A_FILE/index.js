import fs from "fs";

const fd = fs.openSync("text.txt", "w+");

fs.write(fd, "abcdefghi", (error, bytesWritten, writtenData) => {
  if (error) {
    console.log(error);
    return;
  }

  console.log(bytesWritten);
  console.log(writtenData);
});
