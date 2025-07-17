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

// -----------------------------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------------------------

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

// -----------------------------------------------------------------------------------------------

/*

 ------------- Day 4 of Javascript daily dose -------------
 1. Difference b/w const and let.
 2. Variable defined with var act as a global scope variable even defined inside a block
 3. Variable defined with let act as a local scope variable and cannot be access outside particular scope.

*/

/*
// ---------- Codespace -------------- //
var a = 10;
*/

// -----------------------------------------------------------------------------------------------

/*

 ------------- Day 5 of Javascript daily dose -------------
 1. When we write code to execute particular set of statement, 
   JS engine divide it's task into two phase : 
   i. Memory Creation   ii. Code Execution.
 
 2. usage of debugger
 3. async & defer ~ placement of js file
 4. TDZ (Temporal Dead Zone) is an environment where variables defined with let,const go to untill initialized
   with value.

*/

/*
// ---------- Codespace -------------- //

Example : 1 -->
debugger
console.log(num2);  // gives undefined
below code gives error : --> Cannot access 'num1' before initialization.
console.log(num1);

let num1 = 10;
var num2 = 12;
const num3 = 13;

console.log(`Three Numbers are : ${num1} ${num2} ${num3}`);

Example : 2 -->

function calculateTotal(items) {
  let total = 0;

  for (let i = 0; i < items.length; i++) {
    let price = items[i].price;
    debugger;
    total += price;
  }

  return total;
}

const cart = [
  { name: "Book", price: 10 },
  { name: "Pen", price: 2 },
  { name: "Notebook", price: 5 },
];

const totalAmount = calculateTotal(cart);
console.log("Total Amount:", totalAmount);
*/

// -----------------------------------------------------------------------------------------------

/*
 ------------- Day 6 of Javascript daily dose -------------
 1. alert("Hello Shubham How are you"); --> returns undefined 
 2. confirm("Would you like to proceed"); --> returns boolean
 3. prompt("Your message goes here"); --> return user input value | null.
/*

/*
// ---------- Codespace -------------- //

// alert("Hii");
// console.log(alert("Hii"));

// console.log(confirm("Hii")); // --> return true if press ok or false if press cancel
// console.log(prompt("Hii")); // --> return null if enter nothing or user input value

*/

// -----------------------------------------------------------------------------------------------

/*
 ------------- Day 7 of Javascript daily dose -------------
 1. We an access any single character of a string. You can also perform something like below code:
   a. 'My Name is Shubham'[0]
 2. string indexed with 0.
 3. string comes with : property (length) , methods (without arg), methods (with arg)
  i. toUpperCase()  ii. toLowerCase()  iii. trim()  iv. trimStart()  v. trimEnd()
  i. includes(), indexOf(), replace(), replaceAll(), concat(), padStart(), padEnd(), charAt()
     charCodeAt(), split()
 4. indexOf() returns -1 for falsy value.
 5. 
/*

/*
// ---------- Codespace -------------- //


*/

const str1 = "            Hello My name is is Khan";
let trimStr = str1.trim();
// -------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------
