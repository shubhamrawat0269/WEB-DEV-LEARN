const fs = require('fs');

const text = fs.readFileSync('./output/text.txt');
console.log(text.toString());
