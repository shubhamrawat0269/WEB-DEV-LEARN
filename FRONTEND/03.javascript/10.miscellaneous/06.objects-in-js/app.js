const user = {
    name: "John",
    age: 30,
    isMonster: true,
    'like this video': true
}

user.name = "Jane";

delete user.isMonster;

console.log(user);
console.log(user['like this video']);
console.log(delete user.isMonster);

const property = 'profession';
const value = 'Web Developer';

const userMoreDetails = {
    [property]: value,
}

console.log(userMoreDetails);