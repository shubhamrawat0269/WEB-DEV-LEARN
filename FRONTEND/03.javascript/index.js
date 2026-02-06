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
