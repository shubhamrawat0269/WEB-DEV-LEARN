const fs = require('fs');
const {exec} = require('child_process')

const text = fs.readFileSync("S:\\GOAL\\WEB DEV LEARN\\BACKEND\\Section1\\02.running-nodejs-code\\text.txt");
// console.log(text.toString());
console.log(global)
exec('start chrome')