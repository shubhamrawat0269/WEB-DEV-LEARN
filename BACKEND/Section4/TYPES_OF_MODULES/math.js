const printSum = (...nums) => {
    return nums.reduce((acc,curr) => acc + curr, 0);
}

export default printSum;