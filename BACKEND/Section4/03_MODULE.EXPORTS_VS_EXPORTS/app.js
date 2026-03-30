const {sum} = require('./math');

// to understand the difference b/w module.exports and exports, we need to understand below example --

// const user = {
//     name : "Shubham",
//     address : {
//         pincode : 110043, 
//         block : 'A'
//     }
// }

// let address = user.address;

// address = 'Shubham'

// console.log(user.address === address);

// console.log(user.address)
// console.log(address)

console.log(sum(4,5));