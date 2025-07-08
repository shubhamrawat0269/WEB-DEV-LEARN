/*

 ------------- Day 1 of Javascript daily dose -------------
 1. Javascript is high level, interpreted and compiled language in which code written in simple language, 
 goes to compiler & interpretor which convert our english code to binary code which computer comprehend.

 2. After v8 engine, Javascript has interpretor as well as compiler.
 3. Steps behind Network request of html, css & javascript:
  3a. Live server created a basic, fundamental level server which respond on browser to fetch --> 
    i. HTML
    ii. CSS
    iii. Javascript File

 4. Feature of Preserve Log inside network tab.
 5. REPL [Read Evaluate Print Loop] (console) in browser.
 6. In Javascript, BODMAS rule not apply whichever (/ or *) (+ or -) comes first will get execute from L 2 R.
   Example --> 8-5+6, 4-5+11*2/2, 
   Quiz . Solve 4-(5+11)*2/2
   ----- Solution -----
   4-16*2/2 -> 4-32/2 -> 4-16 -> -12
   Note : Brackets play a vital role in mathematical calculation and it takes priority.

*/

/*
// ---------- Codespace -------------- //
console.log("Hello Shubham Rawat ~ How are you");
*/

/*

 ------------- Day 2 of Javascript daily dose -------------
 1. typeof keyword to determine types of variable.
 2. Template literal or Backtick (`) use :-> 
  2a. can create a new line within string.
  2b. can include dynamic content within string without using addition operator.
 3. Usage of '+'/'-' to convert type of a string to number.
 For Example, 
  let number = '69';
  console.log(typeof +number);
  console.log(-number);
  console.log(typeof -number);

 4. Difference b/w parseInt, Number() and + in type conversion.
 5. There are seven primitive datatypes in javascript
   i. number  ii. string  iii. undefined  iv. null  v. boolean  vi. bigint  vii. symbol.
 6. NaN ?

*/


/*
// ---------- Codespace -------------- //

let number = '69';
console.log(typeof +number);
console.log(-number);
console.log(typeof -number);

console.log(+'')  -> 0

let numberTwo = '56abfdvjl';
console.log(+numberTwo); // will give NaN
console.log(typeof +numberTwo) // will give number but it's not valid number.

// To Convert string to integer in numberTwo Case, we can use parseInt

console.log(parseInt(numberTwo))

*/


/*

 ------------- Day 3 of Javascript daily dose -------------
 1. camel case and snake case convention
 2. nature of undefined. Javascript automatically store undefined to a variable untile initialized.
 3. BigInt is a built-in object that allows you to store whole numbers > maximum safe integer
  (i.e. 2^53 - 1).
 4. We can create BigInt in two main ways:
  4a. Appending n to an integer value : -->
    const bigNumber = 123454535353432453525435325353452253n;
  4b. Using BigInt() constructor:
    const bigNumberOne = BigInt("123454535353432453525435325353452253n");
  4c. You cannot mix BigInt and Number types directly.
*/

/*

// ---------- Codespace -------------- //

let firstName = "Abhishek"
let lastname = 'Rana'
let age  = 21

let result = `My name is ${firstName} ${lastname}. I am ${age} year old`;

console.log(result);

const bigNumber = BigInt(1234);  /// will give output attaching n;
const bigNumberOne = 123454535353432453525435325353452253n
const smallNumber = 12;
console.log(bigNumberOne);
Cannot mix BigInt and other types, use explicit conversions

console.log(bigNumberOne + smallNumber);

*/


