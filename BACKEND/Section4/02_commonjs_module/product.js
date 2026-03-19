function printMultiply(num){
    return num.reduce((acc,curr) => acc * curr,1);
};

module.exports = printMultiply;