// debugger;
let firstname = "Shubham";
let lastname = "Rawat";
let age = 25;
var profession = "Web Developer";
let isHappy = false;

console.log(printIntro());

function printIntro() {
  return `My name is ${firstname} ${lastname}. I am ${age} year old ${
    isHappy ? "and i am happy." : "and i am bliss."
  }`;
}
