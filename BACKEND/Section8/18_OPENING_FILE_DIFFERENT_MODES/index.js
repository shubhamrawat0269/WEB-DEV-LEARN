import fs from "fs";

const fd = fs.openSync("chars.txt", "a");
fs.writeSync(fd, "Hii Shubham");
