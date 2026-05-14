import fs from "fs/promises";

try {
  const content = await fs.readFile("theme.mp4");
  console.log(content.byteLength);
} catch (error) {
  console.error(error.message);
}
