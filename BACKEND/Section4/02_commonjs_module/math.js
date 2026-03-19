function printMultiply(num){
    return num.reduce((acc,curr) => acc * curr,1);
};

function printSum(num){
    return num.reduce((acc,curr) => acc + curr,1);
};

function printSub(a, b){
    return Math.abs(a - b);
}

module.exports = {
    printMultiply,
    printSum,
    printSub
}