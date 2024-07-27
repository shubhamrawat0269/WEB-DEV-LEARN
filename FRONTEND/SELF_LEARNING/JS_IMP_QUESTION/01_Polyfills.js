// -----------------------------------------------------------------------
/*
 * Write the polyfill of promise.all()
 */

const dummyApi = (time) => {
  /** customise promise for dummy api */
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(time);
    }, time);
  });
};

/* no. of asynchronous task in form of array */
const tasks = [dummyApi(1000), dummyApi(2000), dummyApi(3000)];

const promiseAllPolyfill = (tasks) => {
  return new Promise((res, rej) => {
    let output = [];

    tasks.forEach((promise, index) => {
      promise
        .then((data) => {
          // console.log(data);
          output[index] = data;
          if (index === tasks.length - 1) res(output);
        })
        .catch((er) => rej(er));
    });
  });
};

// promiseAllPolyfill(tasks)
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((er) => console.log(er));

// -----------------------------------------------------------------------

/*
 * Write the polyfill of map()
 */

const arr = [1, 2, 3, 4, 5];

// arr.map((curr, index) => console.log(curr * 2));

Array.prototype.myMap = function (cb) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    arr.push(cb(this[i], i, this));
  }

  return arr;
};

const newArr = arr.myMap((curr, index, a) => curr * 2);
// console.log(newArr);

// -----------------------------------------------------------------------

/*
 * Write the polyfill of filter()
 */

Array.prototype.myFilter = function (cb) {
  let arr = [];

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) arr.push(this[i]);
  }
  return arr;
};

// console.log([1, 2, 3, 4].myFilter((curr) => curr > 2));

// -----------------------------------------------------------------------

/*
 * Write the polyfill of reduce()
 */

// arr.reduce((acc,curr,index,arr) =>{},initial)

Array.prototype.myReduce = function (cb, initial) {
  var acc = initial;

  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i], i, this) : this[i];
  }

  return acc;
};

// console.log([1, 2, 3, 4].myReduce((acc, curr) => (acc += curr), 0));

// -----------------------------------------------------------------------

/*
 * Write the polyfill of flat()
 */

const flattenArray = (arr) => {
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      acc = acc.concat(flattenArray(curr));
    } else {
      acc.push(curr);
    }

    return acc;
  }, []);
};

// console.log(flattenArray([[[2, 3, [1, 4]]], 5, 6, [7, [8, 9]]]));

// -----------------------------------------------------------------------

/*
 * Write the polyfill of call()
 */

let car1 = {
  color: "Red",
  company: "Ferrari",
};

let car2 = {
  color: "black",
  company: "Lemborgini",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} ~ ${this.company} car for ${currency}${price}`
  );
}

Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("It's not callable function");
  }

  context.func = this;
  context.func(...args);
};

// purchaseCar.call(car1, "₹", 500000);
// purchaseCar.myCall(car2, "₹", 1000000);

// -----------------------------------------------------------------------

/*
 * Write the polyfill of apply()
 */

Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new Error("It's not callable function");
  }

  if (!Array.isArray(args)) {
    throw new Error("Argyments passed are not in formate of Array");
  }

  context.func = this;
  context.func(...args);
};

// purchaseCar.myApply(car2, "₹", 800000);
// purchaseCar.myApply(car2, ["₹", 800000]);

// -----------------------------------------------------------------------

/*
 * Write the polyfill of bind()
 */

Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("It's not callable function");
  }

  context.fn = this;

  return function (...newArgs) {
    return context.fn(...args, ...newArgs);
  };
};

const newFunc = purchaseCar.myBind(car2);

// newFunc("₹", 1200000);

// -----------------------------------------------------------------------
