// COMMON JS MODULE
/* --------------------

1. Synchronous File Loading
2. File extension are optional
3. cjs imports are not hoisted.

-------------------- */

// ES6 MODULE

/* --------------------

1. Asynchronous File Loading
2. File extension mendatory i.e. it should be .mjs or .js 
3. mjs imports are hoisted.

---------------------  */

// import { printSum } from "./math.js";
// const {printSum} = require('./math.js');

console.log(printSum(4, 5, 6, 7));