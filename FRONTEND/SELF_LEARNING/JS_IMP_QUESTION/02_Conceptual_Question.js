/* ------------------------------------------------  */

let num = 20;

// console.log(num + "20");
// console.log(++num);

/* ------------------------------------------------  */

// console.log(parseInt("108"));
// console.log(parseInt("108x102"));
// console.log(parseInt("108Machines"));

/* ------------------------------------------------  */

const name = "Shubham";
// age = 19;
// console.log(delete name);
// console.log(delete age);

/* Note : Undeclared variable associted with window object so ln19. will delete age as it is inside an object and return true */

/* ------------------------------------------------  */

const age = 20;

var person = {
  name: "Shubham",
  age: 25,
  getAge: function () {
    return this.age;
  },
};

var person2 = { age: 27 };

// console.log(person.getAge.call(person2));

/* ------------------------------------------------  */

var status = "😎";

setTimeout(() => {
  const status = "😉";

  const data = {
    status: "😍",
    getEmoji() {
      return this.status;
    },
  };

  //   console.log(data.getEmoji());
  //   console.log(data.getEmoji.call(this));
}, 0);

/* ------------------------------------------------  */

// Append using apply method into arr;

const arr = ["a", "b"];
const numbers = [1, 2, 3];

arr.push.apply(arr, numbers);
// console.log(arr);

// find min and max value using call

// console.log(Math.max.apply(null, numbers));
// console.log(Math.min.apply(null, numbers));

/* ------------------------------------------------  */
