const user = {
    name: 'Shubham Rawat',
    age : 27,
    profession: {
        id: 565,
        designation: 'Frontend developer',
        location: 'Gurugram'
    }
}

let userProfession = user.profession; // Pass by Reference will make the changes in actual object as well.

// Doing this will create a new variable with new value which will not change the existing actual object
userProfession = 'Shubham Rawat'; 
// userProfession.id = 566;

console.log(user.profession);
console.log(userProfession);