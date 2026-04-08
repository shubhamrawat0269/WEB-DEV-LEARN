/*
  1. Math object in JS

  A. Remainder operator 
  B. Exponentiation Operator
  C. Subtraction Operator
  D. Multiplication Operator
  E. Division Operator
  F. Addition Operator

  example : 
*/

console.log(10 % 3); // 1
console.log(2 ** 3); // 8
console.log(10 - 5);    // 5
console.log(4 * 5);    // 20
console.log(20 / 4);    // 5
console.log(10 + 5);    // 15

/*
  2. Math Object Methods
*/ 
console.log(Math.round(4.7)); // 5
console.log(Math.ceil(4.2)); // 5
console.log(Math.floor(4.7)); // 4
console.log(Math.max(1, 5, 3)); // 5
console.log(Math.min(1, 5, 3)); // 1
console.log(Math.random()); // Random number between 0 and 1

console.log(Math.sqrt(25)); // 5
console.log(Math.pow(2, 3)); // 8

console.log(Math.abs(-5)); // 5
console.log(Math.floor(Math.random() * 20 + 10)); // Random number between 1 and 10

// Infinity keyword is a reserved in js which has a number type
// It represents positive infinity & negative infinity.
console.log(Infinity); // Infinity
console.log(-Infinity); // -Infinity