/*
 Day 1 of Learning JavaScript for Interview Practice

 -----------------------

 // 1. 
console.log([] + {});
console.log({} + []);

// 2. 

const obj = {
  name: "Shubham",
  greet: function () {
    console.log(this.name);
  },
};

obj.greet()
const fn = obj.greet;
fn();

const fn = obj.greet.bind(obj);
fn();

----------------------------

*/

