/*
  javascript executes js code in two phase : 
  1. memory creation   2. code execution 

  Suppose we create a variable like 
  var a = 20;

  ============
  in memory creation , memory is created for a with value undefined 
  in code execution , a is assigned with value 20 in it. 
  ============

  in case of function

  ============
  in memory creation , memory is created for function with complete function within it.
  in code execution , when invoke function, it is going to be called.
  
  for example, 

  ------------------------
  printName();

  function printName(){
    console.log("My name is shubham rawat");
  }

  because of the memory creation , our complete function gets memory with the whole function
  and in code execution, when called, we get the value;
  -------------------------

  defer keyword actually help script to execute after your html parsing done but it's downloading already start 
  during html parsing making it more efficient.

  variables defined with let,const goes into script scope while the one defined with var goes to global scope

  ============

*/
// debugger;

let num1 = 90; // TDZ before Code Execution Phase
const num3 = 10; // TDZ before Code Execution Phase
var num2 = 12;

console.log("File is connected");
