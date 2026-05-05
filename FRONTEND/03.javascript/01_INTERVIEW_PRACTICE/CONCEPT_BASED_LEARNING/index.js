/*
  Day 1 of learning Conceptual Based Learning
  Topic : Var,let & Const
  How Behind the Scene Javascript Execute code in two phases : 

  Learning : 


  // var let and const
// scope
// Variable shadowing

var a = 5;
let b = 10;

function printname() {
  let a = "Hii"; // variable shadowing....
  var b = 20;
  console.log(a);
  console.log(b);
}

printname();

// Declaration & Assignment 

var num10 = 10;
var num10 = 20;

let num11 = 12;
// let num11 = 10; // gives an error
num11 = 'Shubham';  // can be reassign like var.

*/

/*
  Day 2 of Learning JS 
  Topic : Promises in JS

  1. Promises is simple object which represent in three state : resolved, reject or pending(by default)
  2. It contains of : prototype, promisestate, promiseResult when log p1 in this case.
  3. Browser has this feature of Promises and it is respoinsible to track the state of promises. 

*/

const resolveBtn = document.getElementById("resolve");
const rejectBtn = document.getElementById("reject");
const status = document.getElementById("status");

// Promise create

const p1 = new Promise((res, rej) => {
  resolveBtn.addEventListener("click", function () {
    let status = "resolve";
    res({ message: "Promise Resolved", status });
  });
  rejectBtn.addEventListener("click", function () {
    let status = "reject";
    res({ message: "Promise Reject", status });
  });
});

p1.then((res) => {
  console.log(res.message);
  status.innerHTML = res.status;
})
  .catch((error) => {
    console.log(error.message);
    status.innerHTML = error.status;
  })
  .finally(() => {
    console.log("Loading Reset");
  });
