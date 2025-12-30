// currying function

// Currying is a technique in functional programming where a function that takes multiple arguments
// is transformed into a series of functions that each take a single argument.

// Example 1: Basic Currying
// Normal function
function sum(a, b, c) {
    return a + b + c;
}
// console.log("Normal Sum:", sum(1, 2, 3)); // 6

// Curried Version
function curriedSum(a){
    return function(b){
        if(b) return curriedSum(a+b);
        return a;
    }
}

// console.log(curriedSum(1)(2)(3)());

// Example 2: Arrow Function Syntax (Cleanest way)
// const arrowSum = a => b => c => a + b + c;
// console.log("Arrow Sum:", arrowSum(1, 2, 3)); // 6

// Example 3: Infinite Currying (Interview Question)
// sum(1)(2)(3)...()

// function infiniteSum(a) {
//     return function(b) {
//         if (b) return infiniteSum(a + b);
//         return a;
//     }
// }
// console.log("Infinite Sum:", infiniteSum(1)(2)(3)(4)()); // 10

/* 
 Question 2 -
  evaluate('sum')(4)(2)
  evaluate('subtract')(4)(2)
  evaluate('multiply')(4)(2)
  evaluate('divide')(4)(2)

*/


function evaluate(operation){
    return function(a){
        return function(b){
            if(operation === 'sum') return a + b;
            if(operation === 'subtract') return a - b;
            if(operation === 'multiply') return a * b;
            if(operation === 'divide') return a / b;
        }
    }
}


// console.log(evaluate('sum')(4)(2));
// console.log(evaluate('subtract')(4)(2));
// console.log(evaluate('multiply')(4)(2));
// console.log(evaluate('divide')(4)(2));


const multiply = a => b => a * b;
const numbers = [1,2,3];
const doubled = numbers.map(multiply(2));
// console.log(doubled);




// --------------------------------------------------
// Real World Example 

function updateHeader(id){
    return function(content){
        document.getElementById(id).textContent = content;
    }
}

const headerUpdate = updateHeader('header');

// headerUpdate('Hello World');
// headerUpdate('Hello JavaScript');



function curry(fn){
    return function curriedFunc(...args){
        if(args.length >=fn.length ){
            return fn(...args)
        }else{
            return function(...args){
                return curriedFunc(...args, ...next)
            }
        }
    }
}

function curringAddition(normalFn){
    return function c(...args){
        // console.log(args.length)
        // console.log(normalFn.length);

        if(args.length >= normalFn.length){
            return normalFn(...args);
        }else{
            return function(...next){
                return c(...args, ...next)
            }
        }
    }
}

const add = (a,b,c) => a + b + c;

const totalSum = curringAddition(add);
console.log(totalSum(1)(2)(3));