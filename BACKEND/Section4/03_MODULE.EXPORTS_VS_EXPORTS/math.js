const sum = (a,b) => {
    return a + b;
}

// exports and module.exports 
// let exports = module.exports; // Pass By Reference
// exports.sum = sum;

exports = {
    sum
}

console.log(module.exports)

// module.exports = {sum}