function sum(arr){
    return arr.reduce((a,b)=>a+b);
}

function sumOfEvenNumbers(arr){
    return arr.filter((num)=>num%2===0).reduce((a,b)=>a+b);
}

function product(arr){
    return arr.reduce((a,b)=>a*b);
}

// console.log(module.exports)
// module.exports.sum = sum;
// module.exports.sumOfEvenNumbers = sumOfEvenNumbers;
// module.exports.product = product;
exports.sum = sum;
exports.sumOfEvenNumbers = sumOfEvenNumbers;
exports.product = product;
// module.exports = { sum, sumOfEvenNumbers, product };