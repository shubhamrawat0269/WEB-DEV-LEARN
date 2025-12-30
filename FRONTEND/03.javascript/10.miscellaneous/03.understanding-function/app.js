// function Declarations

function square(num){
    return num * num;
}

// function Expression with anonymous function
let squareArrow = function(num){
    return num * num;
}

// Arrow function
let squareArrowFunc = (num) => {
    return num * num;
}

// First Class Function :--> we can pass function as a parameter to another function

function displaySquare(fn){
    console.log(fn(5));
}

displaySquare(square);
displaySquare(squareArrow);
displaySquare(squareArrowFunc);

// console.log(square(5));
// console.log(squareArrow(5));
// console.log(squareArrowFunc(5));


// IIFE --> Immediately Invoked Function Expression
// (function(x){
//     return (function(y){
//         console.log(x);
//     })(2);
// })(1);


let name = 'Shubham';

function getScore(){
    var num1 = 2,
    num2 = 3;

    // console.log(arguments)
    
    function add(){
        return name + ' scored ' + (num1 + num2);
    }
    return add();
}

// console.log(getScore('Shubham', 'Rawat'));





