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

*/


/*
// ---------- Codespace -------------- //

let number = '69';
console.log(typeof +number);
console.log(-number);
console.log(typeof -number);

console.log(+'')  -> 0


*/