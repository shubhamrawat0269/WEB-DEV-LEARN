function printSum(num){
    return num.reduce((acc,curr) => acc + curr,1);
};

module.exports = printSum;