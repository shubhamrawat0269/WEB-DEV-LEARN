const { Worker } = require("worker_threads");

console.time();
new Worker("./a.js");
new Worker("./b.js");
new Worker("./c.js");
console.timeEnd();
