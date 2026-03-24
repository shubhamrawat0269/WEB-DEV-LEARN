// import product, {num, sum} from './math.js';
const { setupPrimary } = require('node:cluster');
const {num, sum} = require('./math');
const fs = require('node:fs');
// console.log(this)
console.log(fs)

console.log(num);
console.log(sum(150, 150));
// console.log(product(15, 15));
