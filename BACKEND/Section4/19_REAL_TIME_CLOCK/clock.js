import fs from 'node:fs/promises'

/* Get the current time in a formatted string */
function getFormattedTime() {
  const now = new Date();

  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${hours}:${minutes}:${seconds} ${ampm}`;
}

setInterval(() => {
  try {
      const time = getFormattedTime();
      fs.writeFile("time.txt", time);
  } catch (error) {
    console.error("Error writing file:", error.message);
  }
}, 1000);