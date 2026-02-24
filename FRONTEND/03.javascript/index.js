/*

Topic : Conversion Operators

const num1 = 24;
const num2 = '24';
const num3 = 36;

// Note : Javascript is loosely typed language. That's why we need Type safety

// double equal perform implicit conversion to evaluate expression 
console.log(num1 == num2);
console.log(num1 != num2);
// triple equal perform strict equality which check type first and then value
console.log(num1 === num2);
console.log(num1 !== num2);

// Same case as double equal operatory. Below exp. perform automatic conversion to evaluate expression
console.log(num3 > num2);
console.log(num3 < num2);
console.log(num3 >= num2);
console.log(num3 <= num2);

*/

//----------------------------------------------- //

/*

Topic : Logical Operator with Truthy/Falsy Value

const userAge = 22;

const isSchoolStudent = userAge >= 5 && userAge <= 18; // false
const isCollegeStudent = userAge > 18 && userAge <= 24; // true

const isStudent = isSchoolStudent || isCollegeStudent;

const andResult = 2 && 0; // 0
const orResult = 0 || null || -0 || undefined; // 2 

const andResult2 = '' && 'Hello World'; // '
const orResult2 = '' || 'Hello JS'; // Hello JS

const andResult3 = 'Hello' && null; // null
const orResult3 = 'Hello' || null; // Hello

console.log(andResult);
console.log(andResult2);
console.log(orResult);
console.log(orResult2);
console.log(andResult3);
console.log(orResult3);

*/

//----------------------------------------------- //

/*

Topic : Nested if else if ladder along with ternary operator

const userName = "Shubham Rawat";
const marksOfStudent = 22;

if (marksOfStudent >= 40) {
  console.log("You passed the exam.");

  if (marksOfStudent >= 75) {
    console.log("Grade: Distinction 🌟");
  } else if (marksOfStudent >= 60) {
    console.log("Grade: First Class 👍");
  } else if (marksOfStudent >= 50) {
    console.log("Grade: Second Class 🙂");
  } else {
    console.log("Grade: Pass Class");
  }
} else {
  console.log("You Failed the exam.");
}

// Another example of loading state with data 

const isLoading = false;
// const data = null;
const data = [1,2,3];

if (isLoading) {
  console.log("Loading....");
} else {
  if (data) {
    console.log("Data Present: ", data);
  } else {
    console.log("Data not present");
  }
}

*/

//----------------------------------------------- //

/*

Topic : Swtich case over if else ladder

// let roleOfUser = "editor";

// switch (roleOfUser) {
//   case "admin":
//     console.log("Full access: Manage users, settings, and content.");
//     break;

//   case "editor":
//     console.log("Edit and publish content.");
//     break;

//   case "author":
//     console.log("Write and manage your own articles.");
//     break;

//   default:
//     console.log("Unknown role. Limited access.");
//     break;
// }

// Another example of switch case control

// const studentName = "Shubham";
// const studentAge = 18;
// const marksOfStudent = 72;

// function printSutdentDetails(name, age, marks, grade) {
//   console.log(
//     `Student ${name} is ${age} year old. ${name} acquire ${marks} with Grade: ${grade}`,
//   );
// }

// debugger;

// switch(true) means each case is a condition
// When a condition becomes true, that block runs

// switch (true) {
//   case marksOfStudent >= 90:
//     // print Name, age, marks, grade(S)
//     printSutdentDetails(studentName, studentAge, marksOfStudent, "S");
//     break;
//   case marksOfStudent >= 75:
//     // print Name, age, marks, grade(A)
//     printSutdentDetails(studentName, studentAge, marksOfStudent, "A");
//     break;
//   case marksOfStudent >= 60:
//     // print Name, age, marks, grade(B)
//     printSutdentDetails(studentName, studentAge, marksOfStudent, "B");
//     break;
//   case marksOfStudent >= 40:
//     // print Name, age, marks, grade(C)
//     printSutdentDetails(studentName, studentAge, marksOfStudent, "C");
//     break;

//   default:
//     console.log("Fail");
//     break;
// }

*/

//----------------------------------------------- //

/*

const firstName = 'Shubham Rawat'
const userAge = 27;
const isPassed = true;

const userDetails = {
  name : 'Shubham Rawat',
  age: 35,
  profession: 'Web Developer'
}

// const obj = { a: 1 };
// const ref = obj;
// ref.a = 5;
// console.log(obj.a);

// const obj1 = { x: 10 };
// const obj2 = { x: 10 };
// console.log(obj1 === obj2);

// const obj = { a: 1 };
// const copy = { ...obj }; // shallow copy
// copy.a = 9;
// console.log(obj.a);

// const obj = { a: { b: 2 } };
// const copy = { ...obj }; // shallow copy doesn't copy neseted obj
// copy.a.b = 10;
// console.log(obj.a.b);

// CRUD - Create , Update , Delete

// const obj = { a: 1 };
// Object.freeze(obj);
// obj.b = 5;
// console.log(obj);

// const obj = { a: 1 };
// Object.seal(obj);
// delete obj.a;
// obj.a = 2;
// console.log(obj);

// const obj = { a: 1 };
// Object.preventExtensions(obj);
// obj.b = 2;
// console.log(obj.b);

// const obj = {};
// Object.defineProperty(obj, "a", { value: 5 });
// console.log(obj.a);

// const obj = {};
// Object.defineProperty(obj, "a", { value: 5, writable: false });
// obj.a = 10;
// console.log(obj.a);
*/

//----------------------------------------------- //

/*

// Topic : Objects and it's assigning nature.

// Primitive variable  holding single value

// favouriteVegetable - @15921  Lady Finger - @12747  Tomato - @17673
// Context - @161549 -> @139291
// let favouriteVegetable = "Lady Finger";
// favouriteVegetable = "Tomato";

// Non Primitive variable holding multiptle values

// Hockey - @13289 (sport variable has @13289 memory address)
// Cricket - @22691
// Memory Address of favouriteSportsDetails - @102923

// const favouriteSportsDetails = {
//   sport: "Cricket",
//   sprint: 234,
// };

// favouriteSportsDetails.sport = "Hockey";

*/

//----------------------------------------------- //

/* 

// TOpic :
// Understanding Pass by Value & Pass by Reference
// Shallow Copy & Deep Copy

// const fruits = ["Mango", "Apple", "Orange"];

// const newFruits = fruits;
// newFruits.push('Grapes');

// console.log(newFruits);
// console.log(fruits);

// const profile = {
//   userlastName: "rawat",
//   userage: 27,
//   beverage: true,
// };

// let new_profile = {};

// Object.assign(new_profile, profile); // shallow copy
// let new_profile = {...profile};

// const myFruits = [...fruits, "Grapes"]; // Shallow Copy
// let myFruits = [];
// Object.assign(myFruits, fruits);
// myFruits.push("Grapes");

// console.log(myFruits);
// console.log(fruits);


*/

//----------------------------------------------- //

/*

Topic : Array in JS

const favouritePlayersList = ["Bumrah", "Virat", "Rohit", "Sky"];
const rainbowColors = ["Violet", "Indigo", "Blue", "Green"];
const fruitBasket = [];
const randomTypeValues = [
  "Shubham",
  "Kapil",
  "Parth",
  "Jai Bhanu",
  true,
  undefined,
  null,
  { name: "Kamla Rawat" },
];
rainbowColors.push("Yellow", "Orange", "Red");
// fruitBasket.potato = 40;

favouritePlayersList[favouritePlayersList.length - 1] = "Ravindra";

const ticTacToe = [
  ['X', null , null ],
  [null, null , 'O' ],
  ['O', null , 'X' ],
];

// ticTacToe[15] = ['O', null , 'X']

// console.log(ticTacToe);

*/

//----------------------------------------------- //

/*
// Topic : Loops in JS 

// const procoders = ["Anuj", "Revti", "Jamimah", "Rupali"];
// const evenNumbersList = [];

// let pos = 0;
// while(pos < procoders.length){
//   const element = procoders[pos];
//   procoders[pos++] = "Procoder" + " " + element;
// }

// for (let index = 0; index < procoders.length; index++) {
//   const element = procoders[index];
//   procoders[index] = "Procoder" + " " + element;
// }

// for (let index = 0; index <= 100; index++) {
//   const element = index;
//   if(element % 2 == 0) evenNumbersList.push(element); 
// }

// console.log(procoders);
// console.log(evenNumbersList);


// let secretNumber = 7;
// let guess;

// do {
//   guess = Number(prompt("Guess the secret number (1–10):"));

//   if (guess > secretNumber) {
//     alert("Too high! Try again.");
//   } else if (guess < secretNumber) {
//     alert("Too low! Try again.");
//   } else {
//     alert("Correct! You won the game.");
//   }
// } while (guess !== secretNumber);

*/

//----------------------------------------------- //

// debugger;
// console.log("Start");

// var a = 10;
// const b = 20;

// function outer() {
//   console.log("Outer start");

//   var b = 20;

//   function inner() {
//     console.log("Inner start"); //  console.log(a);
//     console.log(b);
//     var c = 30;
//     console.log(c);
//     console.log("Inner end");
//   }

//   inner();
//   console.log("Outer end");
// }

// outer();

// console.log("End");

// debugger;

// let scopeChainVar = "Global Level";

// function firstLevel() {
//   let firstVar = "First Level";

//   function secondLevel() {
//     let secondVar = "Second Level";

//     if(secondVar){
//       var favourite = 'Manchurian';
//       console.log(favourite)
//     }

//     console.log(scopeChainVar); // Global
//     console.log(firstVar); // Parent
//     console.log(secondVar); // Own
//   }

//   secondLevel();

//   console.log(favourite);
// }

// firstLevel();
// console.log(favourite);
// "use strict";

// function printSum(a, b) {
//   a = 20;
//   b = 30;
//   console.log(arguments[0] + arguments[1]);
// }

// printSum(1, 2);

// printSum.genre = 'Popmusic'

// console.dir(printSum)

//----------------------------------------------- //

// Topic : Timing Based Interval

// setTimeout(undefined, 500);
// setTimeout('console.log("My name is Shubham Rawat and I am not a terrorist")', 500);
// setTimeout(printAdd(1,2), 500);

// function printAdd(a, b) {
//   console.log(a + b);
// }

//----------------------------------------------- //

// Topic : Closures in js
// const a = 5;
// const b = 5;

// function parentFunc() {
//   function childFunc() {
//     console.log(a * b);
//   }

//   return childFunc;
// }

// const closureFn = parentFunc();

// closureFn();

//----------------------------------------------- //

// Topic : Methods vs Fn

// function addTwoNum(a, b) {
//   return a + b;
// }

// var E = "0.42232";

// const maths = {
//   E: 0.4141,
//   addTwoNum: function (a, b) {
//     return `${this.E} : ${a + b}`;
//   },
//   subTwoNum: (a, b) => {
//     return `${this.E} : ${a - b}`;
//   },
//   multiplyTwoNum(a, b) {
//     return `${this.E} : ${a * b}`;
//   },
//   cubeNum(a) {
//     return `${a ** 3}`;
//   },
// };

// // console.log(maths.subTwoNum(5, 4));
// console.log(maths.multiplyTwoNum(5, 4));

//----------------------------------------------- //

// TOpic : forof , forin & forEach method

// const arr = [10, 20, 30];

// const character = 'Javascript'

// for(let value of arr){
//   console.log(value)
// }

// for(let char of character){
//   console.log(char)
// }

//----------------------------------------------- //

// Topic : this keyword in JS

// console.log(this)

const user = {
  firstname: "Shubham",
  lastname: "Rawat",
  tags: ["a", "b", "c"],
  fullName() {
    // console.log(this);
    const getAge = () => {
      console.log(this); // window object
    };
    getAge();
  },
};

// user.fullName();

// function greet() {
//   this.a = 40;
//   this.b = 10;
//   console.log(this);
// }

// const h1 = new greet();

// console.log(h1.a, h1.b);

function printSum() {
  const argsVal = [...arguments];

  // for(let ele of arguments){
  //   sum += ele;
  // }
  let sum = argsVal.reduce((cur, acc) => cur + acc, 0);
  return sum;
}

// const printSum = () =>{
// console.log(arguments)
// let sum = 0;

// for(let ele of arguments){
//   sum += ele;
// }
// return sum;

// return arguments; // arguments keyword is unknown to arrow fn.
// }

const sumOfNVar = printSum(3, 4, 6, 5);
console.log(sumOfNVar);
