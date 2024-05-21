let prof: string = "Web Developer";

console.log(prof);
// Note: --> variable prof assigning type string doesn't accept a number will give error.
// let prof: string = 10;

// Note: --> We cannot use type array methods with the type number as you see below will give error.
let num1: number = 10;
let num2: number = 200;

let isChecked: boolean = false;

// if (num1.includes(num2)) console.log("IT's True");

if (!isChecked) console.log("Make the checkbox checked");

// Note: --> Typescript is smart as it automatically knows the current type is this. See below example
let isLoggedIn = false;
isLoggedIn = true;

console.log(isLoggedIn);

// Data Types of TypeScript : --> String , Number, Boolean , Array, Object, tuples, void, any, never & unknown

// let apiData;
let apiData: string;

function getData() {
  return "Api Data";
  //   return 12;
}

apiData = getData();
// Note: --> It's not advisable to keep the type of varaible as "any" cuz it simply mean not looking for type in such scenerio.

// function addBaseToSix(num: number): number {
//   return num + 6;
//   //   return "Hello";
// }

const addBaseToSix = (num: number): number => {
  return num + 6;
};

console.log(addBaseToSix(5));
// console.log(addBaseToSix("5"));

export {};
