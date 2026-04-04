const printSum = (...nums) => {
    return nums.reduce((acc, curr) => acc + curr, 0);
}

for(let i = 0; i <= 10000000; i++){
    if(i % 5000000 == 0) console.log(i);
}

// module.exports = { printSum };
export { printSum }